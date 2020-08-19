window.addEventListener("load", () => {
    console.log("I am called once page load");

    const pbc = document.querySelector("#parentBlockContainer");
    console.log(pbc);

    for (i = 0; i < 10; i++) {
        const newElement = pbc.children[0].cloneNode(true);
        newElement.style.display = "flex";
        pbc.insertBefore(newElement, pbc.firstChild);

    }

});



