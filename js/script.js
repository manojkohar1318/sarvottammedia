// ==========================
// Mobile Navigation
// ==========================

const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");

menuBtn.onclick = () => {
    nav.classList.toggle("active");

    menuBtn.innerHTML = nav.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
};

// ==========================
// Close Menu on Link Click
// ==========================

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// ==========================
// Sticky Header
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.style.background = "#111";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";
    }else{
        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";
    }

});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;
const offset=section.offsetTop-120;
const height=section.offsetHeight;

if(top>=offset && top<offset+height){
current=section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){
link.classList.add("active");
}

});

});

// ==========================
// Fade-in Animation
// ==========================

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(".service-box,.portfolio-box,.about-content,.contact form").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ==========================
// Back To Top Button
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("visible");

}else{

topBtn.classList.remove("visible");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==========================
// Portfolio Hover Effect
// ==========================

document.querySelectorAll(".portfolio-box").forEach(box=>{

box.addEventListener("mouseenter",()=>{

box.style.transform="translateY(-8px)";

});

box.addEventListener("mouseleave",()=>{

box.style.transform="translateY(0)";

});

});

// ==========================
// Simple Contact Form
// ==========================

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your enquiry has been received.");

form.reset();

});