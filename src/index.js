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
import ConfirmedCasesChart from "./components/ConfirmedCasesChart";

const path = process.env.PUBLIC_URL;
const history = createHistory({basename: path});
const Store = createStore(history);

Store.dispatch(Action.specific.confirmedCases.loadCsvData());

ReactDOM.render(
    <>
        <Provider store={Store}>
            <div className="ptr-light">
                <h1>Confirmed cases</h1>
                <ConfirmedCasesChart
                    threshold={50}
                    countries={["Czechia", "Germany", "Switzerland", "Italy", "Norway"]}
                />
            </div>
        </Provider>
    </>, document.getElementById('ptr')
);

serviceWorker.unregister();