export const AddContactAction= (newContact) => {
    return {
        type: "ADD_CONTACT",
        payload: newContact
    }
}
export const EditContactAction= (id, contactData) => {
    return {
        type: "EDIT_CONTACT",
        payload: {id: id, contactData: contactData}
    }
}
export const DeleteContactAction= (id) => {
    return {
        type: "DELETE_CONTACT",
        payload: id
    }
}