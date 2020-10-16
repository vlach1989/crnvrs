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

                    const reversedTimeSerie = timeSerie.reverse();
					let dailyCasesRetrospectively = [];
					for (let i = 0; i < reversedTimeSerie.length; i++) {
						if (reversedTimeSerie[i+1]) {
							dailyCasesRetrospectively.push(reversedTimeSerie[i].value - reversedTimeSerie[i + 1].value);
						} else {
							dailyCasesRetrospectively.push(0);
						}
					}

                    const record = {
                        key,
                        data: {
                            name: province ? `${province} (${country})` : country,
                            country,
                            province,
                            casesTimeSerie: timeSerie,
							dailyCases: dailyCasesRetrospectively
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