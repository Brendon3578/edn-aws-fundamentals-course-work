const selectEl = document.getElementById("select-curriculum");
const selectedCurriculumName = document.getElementById("curriculum-name");
const curriculumIFrameEl = document.getElementById("curriculum-iframe");

console.log(selectEl);

const curriculums = {
  anak: { src: "" },
  andref: { src: "" },
  arianem: { src: "" },
  ariavev: { src: "" },
  ariciap: { src: "" },
  brendon: { src: "./assets/curriculo/brendongomes.pdf" },
  brunor: { src: "" },
};

selectEl.addEventListener("change", () => {
  let selectedOption = selectEl.value;
  let selectedIndex = selectEl.selectedIndex;
  if (selectedIndex != 0) {
    let selectedOptionText = selectEl.options[selectEl.selectedIndex].text;
    selectedCurriculumName.children[0].innerText = selectedOptionText;
    selectedCurriculumName.children[0].setAttribute(
      "href",
      curriculums[selectedOption].src
    );
    selectedCurriculumName.children[1].innerHTML =
      "foi o currículo selecionado";

    curriculumIFrameEl.classList.remove("hidden");
    curriculumIFrameEl.style.height = "800px";
    curriculumIFrameEl.setAttribute("src", curriculums[selectedOption].src);
  } else {
    curriculumIFrameEl.style.height = "0px";
    selectedCurriculumName.children[0].innerText = "";
    selectedCurriculumName.children[1].innerText =
      "Selecione um currículo para ser exibido";
  }
});