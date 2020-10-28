import React, { useEffect } from "react";
import { useOptionsFetch } from "../../../data/useOptionsFetch";

/* [
  { _id: "5f60941ac6dfc22c43d40fbc", value: " dog walking", __v: 0 },
  { _id: "5f609431c6dfc22c43d40fbd", value: " plant watering", __v: 0 },
  { _id: "5f609441c6dfc22c43d40fbe", value: " dog sitting", __v: 0 },
  { _id: "5f60941ac6dfc22c43d40fbc", value: " Car Driving", __v: 0 },
  { _id: "5f609431c6dfc22c43d40fbd", value: " House Cleaning", __v: 0 },
  { _id: "5f609441c6dfc22c43d40fbe", value: " Furniture Repair", __v: 0 },
]; */
let services;

const ServicesToggler = () => {
  const [options] = useOptionsFetch();
  services = options.services;

  const animateLetters = () => {
    var words = document.getElementsByClassName("word") || [];
    var wordArray = [];
    var currentWord = 0;

    if (words.length) {
      words[currentWord].style.opacity = 1;
      for (let i = 0; i < words.length; i++) {
        splitLetters(words[i]);
      }
    }
    let nw;
    let cw;
    function changeWord() {
      if (words.length && wordArray) {
        cw = wordArray[currentWord];
        nw =
          currentWord === words.length - 1
            ? wordArray[0]
            : wordArray[currentWord + 1];
        for (let i = 0; i < cw.length; i++) {
          animateLetterOut(cw, i);
        }

        for (let k = 0; k < nw.length; k++) {
          nw[k].className = "letter behind";
          nw[0].parentElement.style.opacity = 1;
          animateLetterIn(nw, k);
        }
      }
      currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(function () {
        cw[i].className = "letter out";
      }, i * 80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function () {
        nw[i].className = "letter in";
      }, 340 + i * 80);
    }

    function splitLetters(word) {
      let content = word.innerHTML;
      word.innerHTML = "";
      let letters = [];
      for (let i = 0; i < content.length; i++) {
        let letter = document.createElement("span");
        letter.className = "letter";

        if (content.charAt(i) === " ") {
          letter.innerHTML = "&nbsp";
        } else {
          letter.innerHTML = content.charAt(i);
        }

        word.appendChild(letter);
        letters.push(letter);
      }

      wordArray.push(letters);
    }

    changeWord();
    const interval = setInterval(changeWord, 3000);
    return interval;
  };
  useEffect(() => {
    const anim = animateLetters();

    return () => {
      clearInterval(anim);
    };
  }, [services]);

  return (
    <div className="text">
      <p className="__text">Find trustworthy people to help you with </p>
      <p className="words-container">
        {services.map((service, i) => {
          return (
            <span key={i} className={`${i} word`}>
              {" "}
              {service.value}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default ServicesToggler;
