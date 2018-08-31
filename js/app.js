$(document).ready(init);

function init () {
    console.log("La página está lista para ser usada");

    iniciarDrone();
    iniciarDino();
}

function iniciarDrone () {
    $(document).on("mousemove", mueveElDrone);
}

function mueveElDrone (event) {
    $('#drone').css({
        left: event.pageX + "px",
        top: event.pageY + "px"
    });
}

function iniciarDino () {
    $(document).on("mousemove", mueveADino);
}

function mueveADino (event) {
    $('#pilot').css({
        left: event.pageX + "px",
    });
}