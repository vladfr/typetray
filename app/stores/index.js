import { createStore, applyMiddleware, compose } from 'redux'
import { persistentStore } from 'redux-pouchdb-plus';
import reducers from '../reducers/main'

import PouchDB from 'pouchdb';

const db = new PouchDB('_pouchdb');

const store = createStore(reducers,
  compose(
    persistentStore({db})
  )
);

export default store;