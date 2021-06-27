var showWorkButton = document.querySelector("#work-examples-button")
var workExamplesDiv = document.querySelector("#work-examples") 
var workCard = document.createElement("div") 

showWorkButton.addEventListener("click", showWork) 

function showWork(event) { 
event.preventDefault() 
  var workCardImgDivProj = document.createElement("div") 
  var workCardFigureProj = document.createElement("figure") 
  var workCardPhotoProj = document.createElement("img") 
  var workCardProjContent = document.createElement("div") 
  var workCardProjText = document.createElement("div")

  workCard.classList = "card" 
  workCardImgDivProj.classList = "card-image" 
  workCardFigureProj.classList = "image is-4by3" 
  workCardPhotoProj.classList = "box"
  workCardProjContent.classList = "card-content" 
  workCardProjText.classList = "content" 

  workCardProjText.textContent = "Here is some info about the project"
  
  workCardPhotoProj.setAttribute("src", "https://bulma.io/images/placeholders/1280x960.png") 

  workExamplesDiv.appendChild(workCard) 
  workCard.appendChild(workCardImgDivProj) 
  workCardImgDivProj.appendChild(workCardFigureProj)
  workCardFigureProj.appendChild(workCardPhotoProj) 
  workCard.appendChild(workCardProjContent) 
  workCardProjContent.appendChild(workCardProjText)
}