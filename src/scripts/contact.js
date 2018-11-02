
//component responsible for constructing DOM contact component

const domPost = (contact) => {
  const section = document.createElement("section")
  $(section).html(`
  <h3 class="name">${contact.name}</h3>
  <div class="phone">${contact.phone}</div>
  <div class="address">${contact.address}</div>
`)
  $(".output").prepend(section)
}

export default domPost