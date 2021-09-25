import { createStore } from 'redux'
import allReducers from '../redux/reducers/index.js'

export default createStore(
    allReducers, {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
 