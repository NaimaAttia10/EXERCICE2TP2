const changeFont = () => {
    let font = document.getElementById("police").value;
    const para = document.querySelectorAll("p");
    para.forEach((element) => {
        element.style.fontFamily = font
    })
}

const changePolice = () => {
    let police = document.getElementById("taille").value;
    const parag = document.querySelectorAll("p");
    parag.forEach((element) => {
        element.style.fontSize = police + "px";
    })
}

const changeColor = () => {
    const p = document.querySelector("p");
    let col = document.getElementById("color").value;
    p.style.color = col;
}