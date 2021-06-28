var showWorkButton = document.querySelector("#work-examples-button")
var workExamplesDiv = document.querySelector("#work-examples") 
var workCard = document.createElement("div") 

showWorkButton.addEventListener("click", showWork) 

function showWork(event) { 
event.preventDefault() 
innerHTML = ""

//FIRST CARD PROJECT 1

  var workCardImgDivProj = document.createElement("div") 
  var workCardFigureProj = document.createElement("figure") 
  var workCardPhotoProj = document.createElement("img") 
  var workCardProjContent = document.createElement("div") 
  var workCardProjText = document.createElement("div") 
  var workCardProjLink = document.createElement("a") 
  var workCardProjRepo = document.createElement("a")

  workCard.classList = "card" 

  workCardImgDivProj.classList = "card-image" 
  workCardFigureProj.classList = "image is-4by3" 
  workCardPhotoProj.classList = "box"
  workCardProjContent.classList = "card-content" 
  workCardProjText.classList = "content" 
  workCardProjLink.classList = "content" 
  workCardProjRepo.classList = "content" 

  workCardProjText.textContent = "Cookbook" 
  workCardProjLink.textContent = "Link to URL" 
  workCardProjRepo.textContent = " Link to Repo"
  
  workCardPhotoProj.setAttribute("src", "https://bulma.io/images/placeholders/1280x960.png")
  workCardProjLink.setAttribute("href", "https://ryelow94.github.io/Cookbook/") 
  workCardProjRepo.setAttribute("href", "https://github.com/ryelow94/Cookbook")

  workExamplesDiv.appendChild(workCard) 

  workCard.appendChild(workCardImgDivProj) 
  workCardImgDivProj.appendChild(workCardFigureProj)
  workCardFigureProj.appendChild(workCardPhotoProj) 
  workCard.appendChild(workCardProjContent) 
  workCardProjContent.appendChild(workCardProjText) 
  workCardProjContent.appendChild(workCardProjLink) 
  workCardProjContent.appendChild(workCardProjRepo) 

// SECOND CARD FOR PASSWORD GENERATOR 

  var workCardImgDivPass = document.createElement("div") 
  var workCardFigurePass = document.createElement("figure") 
  var workCardPhotoPass = document.createElement("img") 
  var workCardPassContent = document.createElement("div") 
  var workCardPassText = document.createElement("div") 
  var workCardPassLink = document.createElement("a") 
  var workCardPassRepo = document.createElement("a") 

  workCardImgDivPass.classList = "card-image" 
  workCardFigurePass.classList = "image is-4by3" 
  workCardPhotoPass.classList = "box"
  workCardPassContent.classList = "card-content" 
  workCardPassText.classList = "content" 
  workCardPassLink.classList = "content" 
  workCardPassRepo.classList = "content"

  workCardPassText.textContent = "Password Generator" 
  workCardPassLink.textContent = "Link to URL" 
  workCardPassRepo.textContent = " Link to Repo" 

  workCardPhotoPass.setAttribute("src", "https://bulma.io/images/placeholders/1280x960.png")
  workCardPassLink.setAttribute("href", "https://ryelow94.github.io/RL-password-generator/") 
  workCardPassRepo.setAttribute("href", "https://github.com/ryelow94/RL-password-generator") 

  workCard.appendChild(workCardImgDivPass) 
  workCardImgDivPass.appendChild(workCardFigurePass)
  workCardFigurePass.appendChild(workCardPhotoPass) 
  workCard.appendChild(workCardPassContent) 
  workCardPassContent.appendChild(workCardPassText) 
  workCardPassContent.appendChild(workCardPassLink) 
  workCardPassContent.appendChild(workCardPassRepo)

  //THIRD CARD WEATHER DASHBOARD

  var workCardImgDivDash = document.createElement("div") 
  var workCardFigureDash = document.createElement("figure") 
  var workCardPhotoDash = document.createElement("img") 
  var workCardDashContent = document.createElement("div") 
  var workCardDashText = document.createElement("div") 
  var workCardDashLink = document.createElement("a") 
  var workCardDashRepo = document.createElement("a") 

  workCardImgDivDash.classList = "card-image" 
  workCardFigureDash.classList = "image is-4by3" 
  workCardPhotoDash.classList = "box"
  workCardDashContent.classList = "card-content" 
  workCardDashText.classList = "content" 
  workCardDashLink.classList = "content" 
  workCardDashRepo.classList = "content"

  workCardDashText.textContent = "Weather Dashboard" 
  workCardDashLink.textContent = "Link to URL" 
  workCardDashRepo.textContent = " Link to Repo" 

  workCardPhotoDash.setAttribute("src", "https://bulma.io/images/placeholders/1280x960.png")
  workCardDashLink.setAttribute("href", "https://ryelow94.github.io/Weather_Dashboard/") 
  workCardDashRepo.setAttribute("href", "https://github.com/ryelow94/Weather_Dashboard") 

  workCard.appendChild(workCardImgDivDash) 
  workCardImgDivDash.appendChild(workCardFigureDash)
  workCardFigureDash.appendChild(workCardPhotoDash) 
  workCard.appendChild(workCardDashContent) 
  workCardDashContent.appendChild(workCardDashText) 
  workCardDashContent.appendChild(workCardDashLink) 
  workCardDashContent.appendChild(workCardDashRepo)
}