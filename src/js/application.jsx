// Here's the initial data. Again: don't worry about persistence :)
document.addEventListener("DOMContentLoaded",function(){
  let data = [
    { name: "Mark-Paul Gosselaar", photo_url: "" },
    { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
    { name: "Alf", photo_url: "img/avatars/alf.png" },
    { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
    { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
    { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
    { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
    { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
  ];

  let cards = document.getElementsByClassName("card")
  let cardCloseIcons = document.getElementsByClassName("card-close")
  let container = document.getElementById("cards-container")
  let button = document.getElementById("create")
  button.addEventListener("click", addCelebCard)


  for (let i = 0; i < data.length; i++) {
    let cardnode = createCard(data[i])
    if (container != null) {container.appendChild(cardnode)}
  }

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", cardOnMouseOver)
    cards[i].addEventListener("mouseout", cardOnMouseOut)
  }

  for (let i = 0; i < cardCloseIcons.length; i++) {
    cardCloseIcons[i].addEventListener("click", deleteCard)
  }

  function addCelebCard(e) {
    e.preventDefault()
    let celebData = getData()
    data.push(celebData)

    let newCard = createCard(celebData)

    newCard.addEventListener("mouseover", cardOnMouseOver)
    newCard.addEventListener("mouseout", cardOnMouseOut)
    newCard.children[0].addEventListener("click", deleteCard)

    if (container != null) {container.appendChild(newCard)}
    clearInput()
  }

  function getData() {
    let inputNameVal = document.getElementById("input-name").value
    let inputUrlVal = document.getElementById("input-url").value

    if (!(inputNameVal.length > 0)) {
      alert("Please enter a name")
      return
    }
    return {name: inputNameVal, photo_url: inputUrlVal}
  }

  function clearInput() {
    document.getElementById("input-name").value = ""
    document.getElementById("input-url").value = ""
  }


  function createCard(card) {

    let celebCard = document.createElement("div")
    celebCard.className = "card"
    let closeIcon = document.createElement("div")
    closeIcon.className = "card-close"
    let imgCont = document.createElement("div")
    imgCont.className = "img-container"
    let cardImg = document.createElement("img")

    if (card.photo_url == "") {
      cardImg.src = "img/default.png"
    } else {
      cardImg.src = `${card.photo_url}`
    }

    let name = document.createElement("p")
    name.className = "name"
    name.innerHTML = card.name

    celebCard.appendChild(closeIcon)
    imgCont.appendChild(cardImg)
    celebCard.appendChild(imgCont)
    celebCard.appendChild(name)
    return celebCard
  }

  function cardOnMouseOver(e) {
    e.currentTarget.children[0].style.display = "block"
  }

  function cardOnMouseOut(e) {
    e.currentTarget.children[0].style.display = "none"
  }

  function deleteCard(e) {
    container.removeChild(e.target.parentElement)
  }
});