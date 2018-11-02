//component responsible for dynamically adding form element to DOM, collecting entry data, and posting to API
import API from "./contactCollection"

//create variables for existing and to-be-generated elements

const form = document.createElement("form")
const button = document.createElement("button")

//object to be exported-- contains form array to create form fields; function to create fields and append to form with button, then append to article; function to gather input values in current object; a function to save the object to the API; and a function to reset form fields

const domForm = {
  formArray: ["name", "phone", "address"],
  createForm(array) {
    array.forEach((field) => {
      const fieldset = document.createElement("fieldset")
      $(fieldset).html(`
        <label for=${field}>${field.toUpperCase()}: </label>
        <input type="text" name=${field} id=${field} required>
        `)
      $(form).append(fieldset)
    }) 
    $(button).attr({"type":"submit", "name":"submit", "value":"submit", "id":"submit",}).text("Save Contact")
    $(form).append(button)
    $(".form").append(form)
  },
  generateContact() {
    const currentContact = {
    name: $("#name").val(),
    phone: $("#phone").val(),
    address: $("#address").val()
    }
    return currentContact
  },
  collectAndPost(contactObj){
    return API.saveContacts(contactObj)
  },
  resetForm(){
    $("#name").val("")
    $("#phone").val("")
    $("#address").val("")
  }

}

export default domForm




