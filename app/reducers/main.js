import { combineReducers } from 'redux'
import { persistentReducer } from 'redux-pouchdb-plus';

import fonts from './fonts'
import visibilityFilter from './visibilityFilter'

let pFonts = persistentReducer(fonts)

const reducers = combineReducers({
  'fonts': pFonts,
  visibilityFilter
})

export default reducers