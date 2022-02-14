let toolsCont = document.querySelector(".tools-cont");
let optionsCont = document.querySelector(".options-cont");
let optionsFlag = true;
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencil = document.querySelector(".pencil");
let eraser = document.querySelector(".eraser")
let pencilFlag = false;
let eraserFlag = false;
let sticky = document.querySelector(".sticky")

 
optionsCont.addEventListener("click", (e) => {
  optionsFlag = !optionsFlag;

  if(optionsFlag) {
    openTools();
  }
  else {
    closeTools();
  }
})

function openTools() {
  let iconElem = optionsCont.children[0];
  iconElem.classList.remove("fa-times");
  iconElem.classList.add("fa-bars");
  toolsCont.style.display = "flex";
  penciltoolCont.style.display = "flex";
  eraserToolCont.style.display = "flex";
}

function closeTools() {
  let iconElem = optionsCont.children[0];
  iconElem.classList.remove("fa-bars");
  iconElem.classList.add("fa-times");
  toolsCont.style.display = " none";
  penciltoolCont.style.display = "none";
  eraserToolCont.style.display = "none";
}

pencilToolCont.addEventListener("click", (e) => {
  // true-> show pencil tool, else hide

  pencilFlag = !pencilFlag;
  
  if(pencilFlag)
  {
    pencilToolCont.style.display = "block";
  }
  else
  {
    pencilToolCont.style.display = "none";
  }
})

eraserToolCont.addEventListener("click", (e) => {
  // true-> show pencil tool, else hide

  eraserFlag = !eraserFlag;
  
  if(eraserFlag)
  {
    eraserToolCont.style.display = "flex";
  }
  else
  {
    eraserToolCont.style.display = "none";
  }
})

sticky.addEventListener("click", (e) => {
  let stickyCont = document.createElement("div");
  stickyCont.setAttribute("class, sticky-cont");
  stickyCont.innerHTML = `
  <div class="header-cont">
    <div class ="minimize"></div>
    <div class="remove"></div>
  </div>
<div class="notes-cont">
  <textarea></textarea>
</div>
`;
document.appendChild(stickyCont);
})