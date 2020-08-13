var counter = 1;

var likeCounter = 1;

function commentHere() {
    let userComment = document.querySelector("#inputID1").value;
    const newElement = document.createElement("div");


    newElement.textContent = userComment;
    newElement.style.background = "purple";
    newElement.style.margin = "4px"

    const commentBox = document.querySelector("#commentBox");
    commentBox.insertBefore(newElement, commentBox.firstChild);
    document.querySelector("#inputID1").value = "";

}

function likeHere() {
    likeCounter++;
    let btnElement = document.querySelector("#btnid");
    btnElement.innerHTML = "Like" + likeCounter;
}
