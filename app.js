//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//To animate items
const title = document.querySelector('.title');
const unity = document.querySelector('.unity img');
const share = document.querySelector('.share button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    //console.log(e.pageX, e.pageY);
    let x_axis = (window.innerWidth / 2 - e.pageX) / 25;
    let y_axis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY($(x_axis)deg) rotateX($(y_axis)deg)`;
});

// Animate Start
container.addEventListener("mouseenter", e => {
    card.style.transform = "none";
    //popout effect
    title.style.transform = "translateZ(150px)";
    unity.style.transform = "translateZ(120px) rotateZ(-30deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    share.style.transform = "translateZ(75px)";
});

//Animate stopped
container.addEventListener("mouseleave", (e) => {
    card.style.transform = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateZ(0deg)`;
    // pop back effect
    title.style.transform = "translateZ(0px)";
    unity.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    share.style.transform = "translateZ(0px)";
});