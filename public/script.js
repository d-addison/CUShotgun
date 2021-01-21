let slideIndex = Math.floor(Math.random() * 12);

function carousel() {
    let i;
    let x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}


// Functions
carousel();

$(document).ready(function() {
    let notes = document.querySelectorAll(".notes");
    for(let i = 0; i < notes.length; i++) {
        $(notes[i]).click(function (e) {
            console.log("hello!");
            e.preventDefault();
            if (notes[i].checked === true) {
                addNote(i);
            } else {
                removeNote(i);
            }
        })
    }
});

function addNote(i) {
    let space = document.getElementById("notesSpace");
    if (space.style.display !== "none") {
        space.style.display = "block";
    }

    let itemDiv = document.createElement("DIV");
    let textArea = document.createTextNode("Notes " + i + ":");
    itemDiv.appendChild(textArea);
    space.appendChild(itemDiv);

}

function removeNote(i) {
    let space = document.getElementById("notesSpace");

    document.getElementById(i.toString()).remove();

    if (!space.hasChildNodes()) space.style.display = "none";
}