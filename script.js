function switchTheme() {
  // TODO: implement toggling the light/dark theme

  document.getElementsByTagName("body")[0].classList.toggle("bg-dark");
  document.getElementsByTagName("nav")[0].classList.toggle("navbar-dark");
  document.getElementsByTagName("nav")[0].classList.toggle("bg-dark");
  document.getElementsByClassName("card")[0].classList.toggle("text-white");
  document.getElementsByClassName("card")[1].classList.toggle("text-white");
  document.getElementsByClassName("card")[2].classList.toggle("text-white");
  document.getElementsByClassName("card")[0].classList.toggle("bg-dark");
  document.getElementsByClassName("card")[1].classList.toggle("bg-dark");
  document.getElementsByClassName("card")[2].classList.toggle("bg-dark");
  document.getElementsByClassName("card")[0].classList.toggle("border-light");
  document.getElementsByClassName("card")[1].classList.toggle("border-light");
  document.getElementsByClassName("card")[2].classList.toggle("border-light");
  document.getElementsByClassName("bg-gradient")[0].classList.toggle("bg-dark");
  document
    .getElementsByClassName("bg-gradient")[0]
    .classList.toggle("text-white");
  document
    .getElementsByClassName("bg-gradient")[0]
    .classList.toggle("border-light");
  document.getElementsByClassName("col-md-8")[0].classList.toggle("text-white");
  document.getElementsByClassName("col-md-4")[0].classList.toggle("text-white");
  document.getElementsByClassName("col")[0].classList.toggle("col-12");
  document.getElementsByClassName("col")[1].classList.toggle("col-12");
  document.getElementsByClassName("col")[2].classList.toggle("col-12");
  document.getElementsByTagName("h1")[0].innerHTML = "This is the Dark Theme";
  document.getElementsByTagName("h1")[0].classList.toggle("text-white");
  document.getElementsByClassName("table")[0].classList.toggle("table-dark");
  document.getElementsByClassName("navbar-text")[0].classList.toggle("footer");
  document
    .getElementsByClassName("navbar-text")[0]
    .classList.toggle("text-white");
  document
    .getElementsByClassName("text-muted")[0]
    .classList.toggle("text-white");
  document
    .getElementsByClassName("text-muted")[1]
    .classList.toggle("text-white");
  document
    .getElementsByClassName("text-muted")[2]
    .classList.toggle("text-white");
  let buton = document.getElementById("themeSwitch");
  let header = document.getElementsByTagName("h1")[0];
  if (buton.innerText == "Activate Dark Theme") {
    buton.innerText = "Activate Light Theme";
  } else {
    buton.innerHTML = "Activate Dark Theme";
    header.innerHTML = "This is the Light Theme";
  }
}
