
// window.addEventListener("keydown", (event) => {
//   event.preventDefault();

//     let key;
//     if (event.key === "/") key = "slash";
//     else if (event.key === " ") key = "Space";
//     else if (event.key === ".") key = "punt";
//     else if (event.key === ",") key = "comma";
//     else if (event.key === ";") key = "semicolon";
//     else if (event.key === "'") key = "quote";
//     else if (event.key === "\\") key = "backslash";
//     else if (event.key === "]") key = "bracketright";
//     else if (event.key === "[") key = "bracketleft";
//     else if (event.key === "=") key = "equal";
//     else if (event.key === "-") key = "minus";
//     else if (event.key === "`") key = "backquote";
//     else if (event.key === "?") key = "question";
//     else if (event.key === ">") key = "flexright";
//     else if (event.key === "<") key = "flexleft";
//     else if (event.key === '"') key = "doublequote";
//     else if (event.key === ":") key = "colon";
//     else if (event.key === "|") key = "stick";
//     else if (event.key === "}") key = "CurlyBracketR";
//     else if (event.key === "{") key = "CurlyBracketL";
//     else if (event.key === "~") key = "tilde";
//     else if (event.key === "_") key = "Underscore";
//     else if (event.key === "+") key = "plus";
//     else if (event.key === "!") key = "exclamation";
//     else if (event.key === "@") key = "at";
//     else if (event.key === "#") key = "hashtag";
//     else if (event.key === "$") key = "dollarsign";
//     else if (event.key === "%") key = "percent";
//     else if (event.key === "^") key = "circumflex";
//     else if (event.key === "&") key = "and";
//     else if (event.key === "*") key = "asterisk";
//     else if (event.key === "(") key = "roundbracketleft";
//     else if (event.key === ")") key = "roundbracketright";
//     else key = event.key;
//   // console.log(event.which);

//   let classChange = document.querySelector("."+key);
//    classChange.classList.remove("green");
//   classChange.classList.add("grey");

//   let keypress = document.querySelector(".lastkey");
//   keypress.innerHTML = event.key;
//   if (event.key === " ") {
//     keypress.innerHTML = "Space";
//   }
// });
window.addEventListener("keyup", (event) => {
  event.preventDefault();

    let key;
    if (event.key === "/") key = "slash";
    else if (event.key === " ") key = "Space";
    else if (event.key === ".") key = "punt";
    else if (event.key === ",") key = "comma";
    else if (event.key === ";") key = "semicolon";
    else if (event.key === "'") key = "quote";
    else if (event.key === "\\") key = "backslash";
    else if (event.key === "]") key = "bracketright";
    else if (event.key === "[") key = "bracketleft";
    else if (event.key === "=") key = "equal";
    else if (event.key === "-") key = "minus";
    else if (event.key === "`") key = "backquote";
    else if (event.key === "?") key = "question";
    else if (event.key === ">") key = "flexright";
    else if (event.key === "<") key = "flexleft";
    else if (event.key === '"') key = "doublequote";
    else if (event.key === ":") key = "colon";
    else if (event.key === "|") key = "stick";
    else if (event.key === "}") key = "CurlyBracketR";
    else if (event.key === "{") key = "CurlyBracketL";
    else if (event.key === "~") key = "tilde";
    else if (event.key === "_") key = "Underscore";
    else if (event.key === "+") key = "plus";
    else if (event.key === "!") key = "exclamation";
    else if (event.key === "@") key = "at";
    else if (event.key === "#") key = "hashtag";
    else if (event.key === "$") key = "dollarsign";
    else if (event.key === "%") key = "percent";
    else if (event.key === "^") key = "circumflex";
    else if (event.key === "&") key = "and";
    else if (event.key === "*") key = "asterisk";
    else if (event.key === "(") key = "roundbracketleft";
    else if (event.key === ")") key = "roundbracketright";
    else key = event.key;
  console.log(event.which);

  // let classChange = document.querySelector("."+key);
  let classChange = document.getElementsByClassName("key");
  //  classChange.classList.remove("grey");
  classChange.classList.add("green");

  let keypress = document.querySelector(".lastkey");
  keypress.innerHTML = event.key;
if (event.key === " ") {
  keypress.innerHTML = "Space";
}
});

function showHide() {

let numpadblock = document.querySelector("#numpadblock");
if (numpadblock.style.display === "none") {
  numpadblock.style.display = "inline-block";
} else {
  numpadblock.style.display = "none";
}


}


