// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import os from 'os'; // native node.js module
import { remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import env from './env';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import App from './components/App'
import HelloWorld from './hello_world/hello_world'; // code authored by you in this project

// our main redux store
import store from './stores/index'


console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Stop listening to state updates
//unsubscribe()

console.log('Loaded environment variables:', env);

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
console.log('The author of this app is:', appDir.read('package.json', 'json').author);



render (
  <div>
    <HelloWorld />
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById("root")
)