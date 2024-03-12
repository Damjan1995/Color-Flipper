// Starter varibales
const  body = document.getElementsByTagName("body");
const  button = document.querySelector('.myBtn'); 
const  text = document.querySelector('text');
const colorName = document.querySelector('.color-text');

// create ranodm number

button.addEventListener('click', function(){
    const ranodmNumber = Math.trunc(Math.random() * 10 + 1);
    // console.log(ranodmNumber)

    switch(ranodmNumber){
        case 1:
        document.body.style.backgroundColor = "#FFD966"; // Dandelion
        colorName.textContent = "Dandelion";
        break;
        case 2:
        document.body.style.backgroundColor = "#804674"; // Lilac Flower
        colorName.textContent = "Lilac Flower";
        break;
        case 3:
        document.body.style.backgroundColor = "#7895B2"; // Sky Blue
        colorName.textContent =" Sky Blue"
        break;
        case 4:
        document.body.style.backgroundColor = "#FD8A8A"; // Camaron Pink
        colorName.textContent ="Camaron Pink"
        break;
        case 5:
        document.body.style.backgroundColor = "#B6E2A1"; // Luigi
        colorName.textContent ="Luigi"
        break;
        case 6:
        document.body.style.backgroundColor = "#554994"; // Purple Rain
        colorName.textContent ="Purple Rain"
        break;
        case 7:
        document.body.style.backgroundColor = "#576F72";
        colorName.textContent ="Slate Gray "
        break;
        case 8:
        document.body.style.backgroundColor = "#6D8B74";
        colorName.textContent ="Samphire Green "
        break;
        case 9:
        document.body.style.backgroundColor = "#AD8B73";
        colorName.textContent ="Praline"
        break;
        case 10:
        document.body.style.backgroundColor = "#68A7AD";
        colorName.textContent ="Blue Mercury"
        break;
    }

})
