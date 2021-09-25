import styles from "./scss/App.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import store from "./redux/store";
import MainScreen from "./MainScreen/MainScreen";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.app}>
          <div className={styles.cats}>
            <Sidebar />
            <MainScreen />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
