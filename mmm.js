"use strict";
const home=document.querySelector(".nav-toggle");
const linksContainer=document.querySelector(".links-container");
const links=document.querySelector(".links");
home.addEventListener("click",()=>{
     //linksContainer.classList.toggle("showlinks");
     const containerheight=linksContainer.getBoundingClientRect().height;
     const linksHeight=links.getBoundingClientRect().height;
      if(containerheight===0){
          linksContainer.style.height=`${linksHeight}px`;
      }
      else{
          linksContainer.style.height=0;
      }

});

window.addEventListener("load",()=>{
         window.scrollTo({
            left:0, 
            top:0})
});
const navbar=document.getElementById('nav');
const topLink=document.querySelector('.top-link');
const banner=document.querySelector(".banner");
window.addEventListener("scroll",()=>{
      const scrollHeight=window.pageYOffset;
      const navHeight=navbar.getBoundingClientRect().height;
      if(scrollHeight>navHeight){
          navbar.classList.add("fixed-nav");
          banner.classList.add("hide");
      }
      else{
          navbar.classList.remove("fixed-nav");
      }
      if (navHeight > 500) {
        topLink.classList.add("show-link");
      } else {
        topLink.classList.remove("show-link");
      }
});
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
  function ajaxRequest(type, url, callback) {
    var type = type, url = url, callback = callback;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(type,url, true);
    xmlhttp.send(null);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                callback(json_encode(xmlhttp.responseText))
            }
        }
    };
  }
  function json_encode(str) {
     var json = JSON.parse(str);
    return json;
  }
  const currentData=[];
  const currentData2=["uni1.jpeg","uni2.jpeg","uni3.jpeg","uni4.jpeg"];
  const currentData3=["confus3.jpeg","confus1.jpeg","confus.jpeg"];
  ajaxRequest('get','mmm.json',(data)=>{
    for(var i of data){
      currentData.push(i);
    }
  });
 
  const nextBtn=document.querySelector("#right");
  const prevBtn=document.querySelector("#left");
  const passion=document.querySelector("#passion");
  const about=document.querySelector("#about");
  const img=document.querySelector(".resizeImg");
  const text=document.querySelector(".resizeText");
  let currentItem =-1;
  window.addEventListener("load",()=>{
    currentItem=-1;
  });
  nextBtn.addEventListener("click",()=>{
    currentItem++;
    if(currentItem>currentData.length-1){
      currentItem=0;
    }

      img.style.background=`url(${currentData[currentItem].image}) no-repeat ` ;
      text.innerHTML=`${currentData[currentItem].paragraph}`;
       passion.classList.remove("passion");
       passion.classList.add("passion2");

  });
  prevBtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
      currentItem=currentData.length-1;
    }
       img.style.background=`url(${currentData[currentItem].image}) no-repeat`;
       text.innerHTML=`${currentData[currentItem].paragraph}`
       passion.classList.remove("passion");
       passion.classList.add("passion2");
       ;
  });
console.log(currentData2.length);
console.log(currentData3.length);
  let currentItem2=0;
  const douala=document.querySelector(".douala-img");
  const left1=document.querySelector("#left1");
   const right1=document.querySelector("#right1");
    window.addEventListener("load",()=>{
       show_slide(currentItem2);
   })
   function show_slide(slide){
     douala.style.background=`url("${currentData2[slide]}") `;
   }
   left1.addEventListener("click",()=>{
     currentItem2--;
    if(currentItem2<0){
      currentItem2=currentData2.length-1;
    }
    show_slide(currentItem2);
   });
   right1.addEventListener("click",()=>{
     currentItem2++;
    if(currentItem2>currentData2.length-1){
      currentItem2=0;
    }
     show_slide(currentItem2);
   })
   let currentItem3=0;
   const confucus=document.querySelector(".confucius-img");
   const left2=document.querySelector("#left2");
    const right2=document.querySelector("#right2");
    window.addEventListener("load",()=>{
        show_slide1(currentItem3);
    })
    function show_slide1(slide){
      confucus.style.background=`url("${currentData3[slide]}") `;
    }
    left2.addEventListener("click",()=>{
      currentItem3--;
     if(currentItem3<0){
       currentItem3=currentData3.length-1;
     }
     show_slide1(currentItem3);
    });
    right2.addEventListener("click",()=>{
      currentItem3++;
     if(currentItem3>currentData3.length-1){
       currentItem3=0;
     }
      show_slide1(currentItem3);
    })
 