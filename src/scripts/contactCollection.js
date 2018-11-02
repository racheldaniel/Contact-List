
//component responsible for Fetch/Get/Post to API -- storing and retrieving data
const API = {
  getContacts() {
    return fetch("http://localhost:8088/contacts")
      .then(response => response.json())
  },
  saveContacts(contactObject) {
   return fetch("http://localhost:8088/contacts", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactObject)
    })
    .then(response => response.json())
    // .then(() => this.getContacts())
  }
}

export default API 