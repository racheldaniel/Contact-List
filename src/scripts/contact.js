
//component responsible for constructing DOM contact component

const domPost = (contact) => {
  const article = document.querySelector(".output")
  const section = document.createElement("section")
  section.innerHTML = `
    <h3 class="name">${contact.name}</h3>
    <div class="phone">${contact.phone}</div>
    <div class="address">${contact.address}</div>
  `
  article.appendChild(section)
}

export default domPost