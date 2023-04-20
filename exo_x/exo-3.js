displayButton.addEventListener("click", function(){
  let firstChild = document.createElement('div');
  firstChild.innerHTML = "<div>1</div>";
  Madiv.appendChild(firstChild);
  localStorage.setItem("conteur", firstChild.innerHTML);
  if ("div") {
    displayArea.textContent = "div" + 1;
    localStorage.remouveItem("div");
  }
});