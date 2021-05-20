import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import App from './App';
import getList from './action/getList'
import { Provider } from 'react-redux'

const store = configureStore() 

store.subscribe(()=>{
    console.log(store.getState())
})

console.log(store.getState())  
    
store.dispatch(getList())

const jsx= (
    <Provider store={store}>
        <App/>
    </Provider>
) 

ReactDOM.render(jsx,document.getElementById('root'))
