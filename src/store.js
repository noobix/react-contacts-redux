import {createStore} from 'redux'
import ContactReducer from './Reducers/ContactReducer'

const store= createStore(ContactReducer)

export default store