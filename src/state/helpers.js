import Papa from "papaparse";
import _ from "lodash";
import moment from "moment";

const loadCsvData = (url, successAction) => (dispatch) => {
    Papa.parse(url, {
        download: true,
        header: true,
        complete: function(result) {
            if (result && result.data) {
                let finalData = [];

                result.data.forEach(area => {
                    const country = area["Country/Region"];
                    const province = area["Province/State"];
                    delete area["Country/Region"];
                    delete area["Province/State"];
                    delete area.Lat;
                    delete area.Long;

                    let key = country;
                    if (province) {
                        key += "_" + province;
                    }

                    let timeSerie = [];
                    _.forIn(area, (val, dateString) => {
                        const date = moment(dateString).toISOString();
                        const value = Number(val);

                        if (value) {
                            timeSerie.push({
                                date,
                                value
                            });
                        }
                    });

                    const lastIndex = timeSerie.length - 1;
                    const current = timeSerie[lastIndex] && timeSerie[lastIndex].value || 0;
                    const previousDay = timeSerie[lastIndex - 1] && timeSerie[lastIndex - 1].value || 0;
                    const threeDaysBefore = timeSerie[lastIndex - 3] && timeSerie[lastIndex - 3].value || 0;
                    const weekBefore = timeSerie[lastIndex - 7] && timeSerie[lastIndex - 7].value || 0;

                    const dailyChangeAbsolute = current - previousDay;
                    const dailyChangeRelative = (current - previousDay) * 100/previousDay;

                    const threeDaysChangeAbsolute = current - threeDaysBefore;
                    const threeDaysChangeRelative = (current - threeDaysBefore) * 100/threeDaysBefore;

                    const weeklyChangeAbsolute = current - weekBefore;
                    const weeklyChangeRelative = (current - weekBefore) * 100/weekBefore;

                    const record = {
                        key,
                        data: {
                            name: province ? `${province} (${country})` : country,
                            country,
                            province,
                            current,
                            previousDay,
                            threeDaysBefore,
                            weekBefore,
                            Daily: {
                                abs: dailyChangeAbsolute,
                                rel: dailyChangeRelative
                            },
                            ThreeDays: {
                                abs: threeDaysChangeAbsolute,
                                rel: threeDaysChangeRelative
                            },
                            Weekly: {
                                abs: weeklyChangeAbsolute,
                                rel: weeklyChangeRelative
                            },
                            cases: timeSerie
                        }
                    };

                    finalData.push(record);
                });

                dispatch(successAction(finalData));
            } else {
                throw Error("Data loading failed!")
            }
        }
    });
};

export default {
    loadCsvData
}