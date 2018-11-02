//component responsible for dynamically adding form element to DOM, collecting entry data, and posting to API
import API from "./contactCollection"

//create variables for existing and to-be-generated elements
const article = document.querySelector(".form")
const form = document.createElement("form")
const button = document.createElement("button")

//create array and function for the button attributes
const buttonAttributes = ["type", "name", "value", "id"]
const setAttributes = (element, value, attArray) => {
  attArray.forEach((attribute) => {
    element.setAttribute(attribute, value)
  })
}

//object to be exported-- contains form array to create form fields; function to create fields and append to form with button, then append to article; function to gather input values in current object; and a function to save the object to the API

const domForm = {
  formArray: ["name", "phone", "address"],
  createForm(array) {
    array.forEach((field) => {
      const fieldset = document.createElement("fieldset")
      fieldset.innerHTML = `
      <label for=${field}>${field.toUpperCase()}: </label>
      <input type="text" name=${field} id=${field} required>
      `
      form.appendChild(fieldset)
    }) 
    setAttributes(button, "submit", buttonAttributes)
    button.textContent = "Save Contact"
    form.appendChild(button)
    article.appendChild(form)
  },
  generateContact() {
    const currentContact = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value
    }
    return currentContact
  },
  collectAndPost(contactObj){
    return API.saveContacts(contactObj)
  }

}

export default domForm




