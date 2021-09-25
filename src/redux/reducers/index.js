import { combineReducers } from 'redux'
import categoryReducers from './categoryReducers'
import catsReducers from './catsReducers'

export default combineReducers({
    category: categoryReducers,
    cats: catsReducers
})