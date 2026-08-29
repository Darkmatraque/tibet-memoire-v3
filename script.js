const body=document.body,theme=document.getElementById("theme"),menu=document.getElementById("menu"),nav=document.querySelector("nav");
if(localStorage.getItem("tibet-theme")==="dark"){body.classList.add("dark");if(theme)theme.textContent="☀"}
theme?.addEventListener("click",()=>{body.classList.toggle("dark");const d=body.classList.contains("dark");localStorage.setItem("tibet-theme",d?"dark":"light");theme.textContent=d?"☀":"☾"});
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const header=document.querySelector(".header");window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>24));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.1});document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
const page=location.pathname.split("/").pop()||"index.html";document.querySelectorAll("nav a").forEach(a=>{if(a.getAttribute("href")===page)a.classList.add("active")});