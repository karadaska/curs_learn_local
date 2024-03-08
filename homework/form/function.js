function validateForm() {
  Clearcolor();
  const nume = document.querySelector("#nume");
  const prenume = document.querySelector("#prenume");

  if (nume.value == '') {
    nume.style.borderColor = "red";
  }

  if (prenume.value == '') {
    prenume.style.borderColor = "red";
  }
}

function Clearcolor() {
  nume.style.borderColor = "";
  prenume.style.borderColor = "";
}
