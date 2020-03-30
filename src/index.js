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
import CasesWorldwide from "./components/CasesWorldwide";
import DeathsWorldwide from "./components/DeathsWorldwide";

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

ReactDOM.render(
    <>
        <Provider store={Store}>
            <div className="ptr-light">
                <div className="crnvrs-card-grid">
                    <div className="crnvrs-card-row">
                        <div className="crnvrs-card-group">
                            <CasesWorldwide title="Cases worldwide"/>
                            <DeathsWorldwide title="Deaths worldwide"/>

                        </div>

                        <div className="crnvrs-card-group">
                            <div className="crnvrs-card">

                            </div>
                            <div className="crnvrs-card">

                            </div>
                        </div>
                    </div>


                    <div className="crnvrs-card-row">
                        <div className="crnvrs-card-group vertical">
                            <ConfirmedProgress/>
                        </div>

                        <div className="crnvrs-card-group">
                            <ConfirmedTotal
                                componentKey="ConfirmedTotalTable"
                            />
                            <ConfirmedChange
                                componentKey="ConfirmedChangeTable"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    </>, document.getElementById('ptr')
);

serviceWorker.unregister();