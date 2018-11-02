
//import contactList (display of all contacts) and contactForm (DOM form component/collection)

import contactList from "./contactList"
import domForm from "./contactForm"

domForm.createForm(domForm.formArray)
contactList.getAndRender()

// function to create new contact upon submission-- prevent page from reloading; gather entered form data; post new entry to API, then post all to DOM
document.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentContact = domForm.generateContact()
  domForm.collectAndPost(currentContact).then(()=> contactList.getAndRender())

})