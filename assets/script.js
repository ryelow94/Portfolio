//CSS Framework is Bulma
var showWorkButton = document.querySelector("#work-examples-button")
var workExamplesDiv = document.querySelector("#work-examples") 

showWorkButton.addEventListener("click", showWork) 
//show work function displays screenshots,URLs and link to Repos
function showWork(event) { 
event.preventDefault() 
var workCard = document.createElement("div") 

//FIRST CARD PROJECT 1 (cookbook)

  var workCardImgDivProj = document.createElement("div") 
  var workCardFigureProj = document.createElement("figure") 
  var workCardPhotoProj = document.createElement("img") 
  var workCardProjContent = document.createElement("div") 
  var workCardProjText = document.createElement("div") 
  var workCardProjLink = document.createElement("a") 
  var workCardProjRepo = document.createElement("a")

  workCard.classList = "card" 
  workCardPhotoProj.src = "./assets/CookBookPhoto.png"
  workCardImgDivProj.classList = "card-image" 
  workCardFigureProj.classList = "image is-4by3" 
  workCardPhotoProj.classList = "box"
  workCardProjContent.classList = "card-content" 
  workCardProjText.classList = "content" 
  workCardProjLink.classList = "content" 
  workCardProjRepo.classList = "content" 

  workCardProjText.textContent = "Cookbook: This app allows the user to enter ingredients and/or dietary restrictions into the search bar, and then displays ten recipes they can make" 
  workCardProjLink.textContent = "Link to URL" 
  workCardProjRepo.textContent = " Link to Repo"
  
  //workCardPhotoProj.setAttribute("src", "/CookBookImage.png")
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

  workCardPhotoPass.src = "./assets/password.png"
  workCardImgDivPass.classList = "card-image" 
  workCardFigurePass.classList = "image is-4by3" 
  workCardPhotoPass.classList = "box"
  workCardPassContent.classList = "card-content" 
  workCardPassText.classList = "content" 
  workCardPassLink.classList = "content" 
  workCardPassRepo.classList = "content"

  workCardPassText.textContent = "Password Generator: This app generates a random password based on the criteria the user enters" 
  workCardPassLink.textContent = "Link to URL" 
  workCardPassRepo.textContent = " Link to Repo" 

  //workCardPhotoPass.setAttribute("src", "https://bulma.io/images/placeholders/1280x960.png")
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

  workCardPhotoDash.src="./assets/Weather-Dash.png"
  workCardImgDivDash.classList = "card-image" 
  workCardFigureDash.classList = "image is-4by3" 
  workCardPhotoDash.classList = "box"
  workCardDashContent.classList = "card-content" 
  workCardDashText.classList = "content" 
  workCardDashLink.classList = "content" 
  workCardDashRepo.classList = "content"

  workCardDashText.textContent = "Weather Dashboard: This app shows the current weather and the five day forecast (with three hour increments) for the city the user enters " 
  workCardDashLink.textContent = "Link to URL" 
  workCardDashRepo.textContent = " Link to Repo" 

  //workCardPhotoDash.setAttribute("src", "https://bulma.io/images/placeholders/1280x960.png")
  workCardDashLink.setAttribute("href", "https://ryelow94.github.io/Weather_Dashboard/") 
  workCardDashRepo.setAttribute("href", "https://github.com/ryelow94/Weather_Dashboard") 

  workCard.appendChild(workCardImgDivDash) 
  workCardImgDivDash.appendChild(workCardFigureDash)
  workCardFigureDash.appendChild(workCardPhotoDash) 
  workCard.appendChild(workCardDashContent) 
  workCardDashContent.appendChild(workCardDashText) 
  workCardDashContent.appendChild(workCardDashLink) 
  workCardDashContent.appendChild(workCardDashRepo) 

  var closeButton = document.createElement("button")
  var workArea = document.getElementById("work") 
  closeButton.classList="button has-text-danger"
  closeButton.textContent="close"
  workExamplesDiv.appendChild(closeButton) 

  closeButton.addEventListener("click", closeWork) 

  console.log("removeEventListener", showWorkButton) 

  showWorkButton.removeEventListener("click", showWork);     

  
  //closes the work screen
  function closeWork(){ 
    workExamplesDiv.innerHTML="" 

    showWorkButton.addEventListener("click", showWork)

  }
}