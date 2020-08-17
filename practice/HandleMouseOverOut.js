function handleMouseOver() {
    console.log = ("I Have Succesfully called");

    var id2Element = document.querySelector("#id2");
    id2Element.style.background = "pink";
    id2Element.style.color = "royalblue";
    id2Element.innerHTML = " Happy Birthday ";
}


function handleMouseOut() {

    let id2Element = document.querySelector("#id2");
    id2Element.style.background = "blue";
    id2Element.style.color = "maroon";
    id2Element.innerHTML = "Mummy";
}