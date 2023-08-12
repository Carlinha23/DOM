//Write the code necessary to do the following:

//1. Select the section with an id of container without using querySelector.
//2. Select the section with an id of container using querySelector.
//3. Select all of the list items with a class of “second”.
//4. Select a list item with a class of third, but only the list item inside of the ol tag.
//5. Give the section with an id of container the text “Hello!”.
//6. Add the class main to the div with a class of footer.
//7. Remove the class main on the div with a class of footer.
//8. Create a new li element.
//9. Give the li the text “four”.
//10. Append the li to the ul element.
//11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
//12. Remove the div with a class of footer

document.getElementById("container");

document.querySelector("#container")

document.getElementsByClassName("second") 

document.querySelector("ol .third");

let foundDiv = document.querySelector("#container");

foundDiv.innerText = "Hello";

let footer = document.querySelector(".footer");
footer.classList.add("main");

let footer = document.querySelector(".footer");
footer.classList.remove("main");

let newLi = document.createElement("li");

newLi.innerText = "four"

let list = document.querySelector("ul");
list.appendChild(newLi);

let liInsideOl = document.querySelectorAll("ol li");
for(let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}

let footer = document.querySelector(".footer");
footer.remove();
