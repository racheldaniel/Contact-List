
//component responsible for using API fetches from contactCollection and post DOM element from contact and render all contacts to the page

import API from "./contactCollection"
import domPost from "./contact"

const contactList = {
  renderContacts(array) {
    $(".output").html("")
    array.forEach((contact) => {
      domPost(contact)
    })
  },
  getAndRender() {
    API.getContacts().then(this.renderContacts)
  }
}


export default contactList





