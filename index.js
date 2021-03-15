const getStarted = document.getElementsByClassName("darkMode");

const darkmode = new Darkmode();

Array.from(getStarted)?.forEach(element => {
    element.addEventListener('click', function () {
    darkmode.toggle();
    console.log(darkmode.isActivated()) 
}) 
});




