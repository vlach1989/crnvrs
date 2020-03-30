import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from '@gisatcz/ptr-state';
import createStore, {createHistory} from "./state/Store";

// base styles need to be imported before all components
import '@gisatcz/ptr-core/lib/styles/reset.css';
import '@gisatcz/ptr-core/lib/styles/base.scss';
import './styles/index.scss';

import * as serviceWorker from "./serviceWorker";
import Action from "./state/Action";
import ConfirmedProgress from "./components/ConfirmedProgress";
import ConfirmedTotal from "./components/ConfirmedTotal";
import ConfirmedChange from "./components/ConfirmedChange";
import CasesCountry from "./components/CasesCountry";
import CasesWorldwide from "./components/CasesWorldwide";
import DeathsCountry from "./components/DeathsCountry";
import DeathsWorldwide from "./components/DeathsWorldwide";
import DeathsTotal from "./components/DeathsTotal";

const path = process.env.PUBLIC_URL;
const history = createHistory({basename: path});
const Store = createStore(history);

Store.dispatch(Action.specific.confirmedCases.load());
Store.dispatch(Action.specific.deaths.load());

Store.dispatch(Action.components.update("ConfirmedChangeTable", {
    contentOptions: ["Daily", "Weekly"],
    activeContentOption: "Daily",
    sorting: ["data.Daily.abs", "desc"]
}));

Store.dispatch(Action.components.update("ConfirmedTotalTable", {
    sorting: ["data.current", "desc"]
}));

Store.dispatch(Action.components.update("DeathsTotalTable", {
    sorting: ["data.current", "desc"]
}));

ReactDOM.render(
    <>
        <Provider store={Store}>
            <div className="ptr-light">
                <div className="crnvrs-card-grid">
                    <div className="crnvrs-card-row">
                        <div className="crnvrs-card-group">
                            <CasesWorldwide title="Confirmed cases worldwide"/>
                            <DeathsWorldwide title="Deaths worldwide"/>
                        </div>

                        <div className="crnvrs-card-group">
                            <CasesCountry title="Confirmed cases Czech Republic" areaKey="Czechia"/>
                            <DeathsCountry title="Deaths Czech Republic" areaKey="Czechia"/>
                        </div>
                    </div>


                    <div className="crnvrs-card-row">
                        <div className="crnvrs-card-group vertical">
                            <ConfirmedProgress/>
                        </div>

                        <div className="crnvrs-card-group">
                            <ConfirmedTotal
                                componentKey="ConfirmedTotalTable"
                                title="Confirmed cases total"
                            />
                            <ConfirmedChange
                                componentKey="ConfirmedChangeTable"
                            />
                        </div>
                    </div>

                    <div className="crnvrs-card-row">
                        <div className="crnvrs-card-group">
                            <DeathsTotal
                                componentKey="DeathsTotalTable"
                                title="Deaths total"
                            />
                        </div>
                    </div>
                </div>
                <div className="crnvrs-data-source">Data source: <a href="https://github.com/CSSEGISandData/COVID-19" target="_blank">Johns Hopkins University</a></div>
            </div>
        </Provider>
    </>, document.getElementById('ptr')
);

serviceWorker.unregister();