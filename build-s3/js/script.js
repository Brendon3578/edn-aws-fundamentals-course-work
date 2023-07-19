const selectEl = document.getElementById("select-curriculum");
const selectedCurriculumName = document.getElementById("curriculum-name");
const curriculumIFrameEl = document.getElementById("curriculum-iframe");

const curriculums = {
  anak: { src: "./assets/curriculo/CV_Ana_Karolina.pdf" },
  andref: { src: "./assets/curriculo/CV_Andre_Felipe.pdf" },
  arianem: { src: "./assets/curriculo/CV_Ariane_Mota.pdf" },
  arianev: { src: "./assets/curriculo/CV_Ariane_Araujo.pdf" },
  ariciap: { src: "./assets/curriculo/CV_Aricia_Paiola.pdf" },
  brendon: { src: "./assets/curriculo/CV_Brendon_Gomes.pdf" },
  brunor: { src: "./assets/curriculo/CV_Bruno_Rafael.pdf" },
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
