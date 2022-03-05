import {v4 as uuid} from 'uuid'

const initialState= {contacts:[
    {id: uuid(), name: "Grace", phoneNumber: "000-000-0000", location: "Accra"},
    {id: uuid(),name: "Amanda", phoneNumber: "111-111-1111", location: "Tema"},
    {id: uuid(),name: "Clarence", phoneNumber: "222-222-2222", location: "Kumasi"},
    {id: uuid(),name: "Mitchill", phoneNumber: "333-333-3333",location: "Tafo"}
]}
const ContactReducer= (state= initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return {...state.contacts,contacts: [...state.contacts, action.payload]}
        case "EDIT_CONTACT":
            const editContact= state.contacts.map((contact) => {
                if (contact.id == action.payload.id) return action.payload.contactData;
                return contact
            })
            return {...state, contacts: editContact}
        case "DELETE_CONTACT":
            const filteredContacts= state.contacts.filter((contact) => {
                if (contact.id != action.payload) return contact
            })
            return {...state, contacts: filteredContacts}
        default:
            return state
    }
}
export default ContactReducer