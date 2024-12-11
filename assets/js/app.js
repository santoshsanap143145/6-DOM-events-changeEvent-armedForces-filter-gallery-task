cl = console.log;

const options = document.getElementById("options");

const allForces = [...document.querySelectorAll(".all")];

onColorChange = (eve) => {
  let SelectedClassName = eve.target.value;

  allForces.forEach((force) => {
    force.classList.add("d-none");
  });

  let selectedforces = [...document.querySelectorAll("." + SelectedClassName)];

  selectedforces.forEach((force) => {
    force.classList.remove("d-none");
  });
};

options.addEventListener("change", onColorChange);
