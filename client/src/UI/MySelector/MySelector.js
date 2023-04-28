import { IconArrow, IconCheckMark } from "../../assets/images/select";
import "./myselector.scss";

export const MySelector = (options = [], optionDefaultText, uniqClass = "uniq") => {
  const selectMenu = document.createElement("div");
  const select = document.createElement("div");
  const optionDefault = document.createElement("span");
  const arrowSvg = document.createElement("svg");
  arrowSvg.innerHTML = IconArrow;
  const optionList = document.createElement("div");
  const arrOptions = [];

  selectMenu.classList.add("select-menu");
  select.classList.add("select");
  arrowSvg.classList.add("arrow");
  optionList.classList.add("options-list");
  optionDefault.classList.add("optionDefault", uniqClass);

  optionDefault.textContent = optionDefaultText;

  select.append(optionDefault, arrowSvg);
  selectMenu.append(select, optionList);
  options.forEach((option) => {
    const myoption = document.createElement("div");
    myoption.classList.add("option");
    myoption.textContent = option.title;
    myoption.dataset.sort = option.value;
    arrOptions.push(myoption);
    optionList.append(myoption);
  });

  arrOptions.forEach((option) => {
    const checkMarker = document.createElement("svg");
    checkMarker.innerHTML = IconCheckMark;
    checkMarker.classList.add("checkMarker");
    option.append(checkMarker);
  });

  select.addEventListener("click", () => {
    optionList.classList.toggle("active");
    arrowSvg.classList.toggle("active");
  });

  //select option
  arrOptions.forEach((option) => {
    option.addEventListener("click", () => {
      arrOptions.forEach((option) => {
        option.classList.remove("selected");
      });
      select.querySelector("span").innerHTML = option.innerHTML;
      option.classList.add("selected");
      optionList.classList.remove("active");
      arrowSvg.classList.toggle("active");
    });
  });

  return { selectMenu, arrOptions };
};
