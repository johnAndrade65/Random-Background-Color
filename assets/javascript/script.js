/*GET BUTTON BY ID*/
button = document.querySelector('#btn');

/*ARROW FUNCTION FIRED WHEN THE BUTTON IS CLICKED*/
button.addEventListener('click', () => {

    /*TAKE THE BODY STYLE AND USE THE METHOD "Math.round" AND "Math.random" TO GENERATE A RANDOM BACKGROUND-COLOR*/
    document.body.style.backgroundColor =
    'rgb(' + Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')';
})