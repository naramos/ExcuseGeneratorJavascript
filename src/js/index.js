/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class.",
    "right on time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying."
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  console.log(whoIndex);
  let actionIndex = Math.floor(Math.random() * action.length);
  console.log(actionIndex);
  let whatIndex = Math.floor(Math.random() * what.length);
  console.log(whatIndex);
  let whenIndex = Math.floor(Math.random() * when.length);
  console.log(whenIndex);

  let phrases =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];
  document.querySelector("#excuses").innerHTML = phrases;
};
