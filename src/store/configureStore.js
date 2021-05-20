import {createStore,combineReducers} from 'redux'
import listReducer from '../reduser/listReduser'

const configureStore = () =>{
    const store = createStore(combineReducers({
        list: listReducer
    }))
    return store
}
export default configureStore  


