document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelector(".header__menu-button"),n=document.querySelector(".main-navigation__list");t.addEventListener("click",()=>{t.classList.toggle("header__menu-button--closed"),t.classList.toggle("header__menu-button--opened"),t.classList.contains("header__menu-button--opened")?(n.classList.add("main-navigation__list--opened"),n.classList.remove("main-navigation__list--closed")):(n.classList.add("main-navigation__list--closed"),n.classList.remove("main-navigation__list--opened"))});let o=document.querySelector(".operation-example__slider-button"),s=document.querySelector(".operation-example__slider"),i=document.querySelector(".operation-example__slider-wrapper--before"),r=document.querySelector(".operation-example__slider-wrapper--after");if(s&&o&&i&&r){let a=!1,d=0;o.addEventListener("mousedown",e=>{e.preventDefault(),a=!0,d=e.clientX,o.style.opacity="0.6"}),document.addEventListener("mousemove",e=>{if(a){let c=e.clientX-d,l=Math.min(Math.max(i.offsetWidth+c*1,0),s.offsetWidth),u=s.offsetWidth-l;i.style.width=`${l}px`,r.style.width=`${u}px`,d=e.clientX}}),document.addEventListener("mouseup",()=>{a=!1})}});