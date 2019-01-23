// 1. Use JavaScript to obtain a reference to the first section with the CLASS (* " . ") of article__header
let articleHeader = document.querySelectorAll(".article__header");
for(let i = 0; i < articleHeader.length; i++){
// and change its text with the textContent property to "Welcome to the {insert your name here} blog"
articleHeader[0].textContent = "Welcome to Joey's Blog";
}
// 2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
for(let i = 0; i < articleHeader.length; i++){
    articleHeader[i].classList.add("important");
}
// 3. Obtain a reference the element with a class of dashed and remove it.
let removeDash = document.querySelector(".dashed");
removeDash.classList.remove("dashed");
// 4. Obtain a reference the element with a class of article__footer and add the class of goldenrod it.
let addGoldenrod = document.querySelector(".article__footer");
addGoldenrod.classList.add("goldenrod");
