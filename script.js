
// --------------------skills-----------------//
// const circles =document.querySelectorAll(".circle");
// circles.forEach(elem =>{
//     var dots = elem.getAttribute("data-dots");
//     var marked = elem.getAttribute("data-pecent");
//     var percent = Math.floor(dots*marked/100);
//     var points ="";
//     var rotate = 360 / dots;

//        for(let i=0 ; i< dots ; i++){
//         points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
//     }
//     elem.innerHTML = points;   
// })

    

//     const pointsMarked = elem.querySelectorAll('.points');
//     for (let i=0; i<percent; i++){
//         pointsMarked[i].classList.add('marked');
//     }


    let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function(){
  scrollFunction()
};

function scrollFunction(){
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
  {
    mybutton.style.display = "block";
  }
   else{
      mybutton.style.display = "none";
     
      }
}

function scrolltoTopfunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// active menu //////////////////////

let menuLi = document.querySelectorAll('sidebar ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
  let len = section.length;
  while(--len && window.scrollY +100.<section[len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);



///// animation overall when refresh///////////////////

const observer = new IntersectionObserver ((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntresecting){
      entry.target,classList.add("show-items");
    }else{
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=> observer(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=> observer(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=> observer(el));


// for reume  ///////////////////////

function openURL() {
  var url ="src/pdf/Final Mahima Kasliwal Resume.pdf";

  window.open(url, '_blank');
}
