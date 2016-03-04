import { createStore } from 'redux'
import reducer from '../reducers/main'
let store = createStore(reducer)
export default store