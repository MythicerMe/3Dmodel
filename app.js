"use strict";

const $ = (x) => document.querySelector(x);

$(".model").addEventListener('load', ()=>{
   $('.load').classList.add('hide')
});


const viewer = $('.model');


// viewer.addEventListener("camera-change", () => {
//     const orbit = viewer.getCameraOrbit();
//     const target = viewer.getCameraTarget();
//     const fov = viewer.getFieldOfView();

//     console.log("ORBIT");
//     console.log("theta:", orbit.theta);
//     console.log("phi:", orbit.phi);
//     console.log("radius:", orbit.radius);

//     console.log("TARGET");
//     console.log("x:", target.x);
//     console.log("y:", target.y);
//     console.log("z:", target.z);

//     console.log("FOV:", fov);
// });

$('.reset').addEventListener('click', ()=>{
   $('.model').cameraOrbit = "-33.5109deg 43.4712deg 79.899293m";
    $('.model').cameraTarget = "0.240415m 1.106297m -2.570210m";
    $('.model').fieldOfView = "12deg";
})



const targetDate = new Date("2026-11-13T23:59:59");

function updateDaysLeft() {
    const now = new Date();
    const difference = targetDate - now;

    const daysLeft = Math.max(
        0,
        Math.ceil(difference / (1000 * 60 * 60 * 24))
    );

    $('.days').textContent =
        daysLeft.toString().replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

updateDaysLeft();
setInterval(updateDaysLeft, 60000);
