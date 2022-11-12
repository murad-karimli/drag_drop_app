// const options_div = document.querySelector(".neon-con")
// const truthy = document.querySelector("#true")
// var drops = document.querySelectorAll(".droppable")
// const wrong = document.querySelector("#wrong")
// const main=document.querySelector(".main")
// const main_elms=document.querySelectorAll(".main-el")
// const container=document.querySelector(".container")
// const again_btn=document.getElementById("again")
// // $(document).ready(function() {});
// let second_el=0;
// let elementsWith3=0;
// let elementsWith4=0;
// let true_answers = 0;
// let el;
// let sis_count=0;
// let false_answers = 0;
// let visibleIDs = 1;

// truthy.innerText = true_answers;
// wrong.innerText = false_answers;
// let dragItem = null;
// let dropItem = null;
// var allData = [
//     {
//         id: "second-el",
//         value: "Sistem Proqram Təminatı",
//     },
//     {
//         id: "second-el",
//         value: "İnstrumental Proqram Təminatı",
//     },
//     {
//         id: "second-el",
//         value: "Tətbiqi Proqram Təminatı",
//     },
//     {
//         id: "sis-el",
//         value: "Baza",
//     },
//     {
//         id: "sis-el",
//         value: "Servis",
//     },
//     {
//         id: "third-el",
//         value: "Əməliyyat Sistemləri",
//     },
//     {
//         id: "third-el",
//         value: "Əməliyyat Örtükləri",
//     },
//     {
//         id: "third-el",
//         value: "Şəbəkə Əməliyyat sistemləri",
//     },
//     {
//         id: "fourth-el",
//         value: "Diaqnostik Proqram",
//     },
//     {
//         id: "fourth-el",
//         value: "Antiviruslar",
//     },
//     {
//         id: "fourth-el",
//         value: "Utilitlər",
//     },
//     {
//         id: "fifth-el",
//         value: "Proqramlaşdırma dilləri və Sistemləri",
//     },
//     {
//         id: "fifth-el",
//         value: "Proqramlaşdırmanın inteqrallaşdırılmış mühiti",
//     },
//     {
//         id: "fifth-el",
//         value: "Proqram kompleksləri",
//     },
//     {
//         id: "sixth-el",
//         value: "Ümumi təyinatlı",
//     },
//     {
//         id: "sixth-el",
//         value: "Üsulyönlü",
//     },
//     {
//         id: "sixth-el",
//         value: "Problem yönlü",
//     },
//     {
//         id: "sixth-el",
//         value: "Qlobal komputer şəbəkələri",
//     },
//     {
//         id: "seventh-el",
//         value: "MS Dos",
//     },
//     {
//         id: "seventh-el",
//         value: "Windows",
//     },
//     {
//         id: "seventh-el",
//         value: "Unix",
//     },
//     {
//         id: "seventh-el",
//         value: "Mac OS",
//     },
//     {
//         id: "seventh-el",
//         value: "Linux",
//     },
//     {
//         id: "seventh-el",
//         value: "Ubuntu",
//     },
//     {
//         id: "seventh-el",
//         value: "OS/2",
//     },
//     {
//         id: "seventh-el",
//         value: "Netware",
//     },
//     {
//         id: "8th-el",
//         value: "Norton Commander",
//     },
//     {
//         id: "8th-el",
//         value: "Windows Commander",
//     },
//     {
//         id: "9th-el",
//         value: "Kaspersky",
//     },
//     {
//         id: "9th-el",
//         value: "Dr.Solomon",
//     },
//     {
//         id: "10th-el",
//         value: "Disk defraqmenti",
//     },
//     {
//         id: "10th-el",
//         value: "Back up",
//     },
    
// ]
// var changedData=[];
// function options(el) {
//     var html = `
//     <div id="${el.id}" class="neon draggable" draggable="true">
//    <span> ${el.value}
      
//     </span>
//  </div>

//  `
//     options_div.insertAdjacentHTML("beforeend", html);
// }
// {/* <polyline points="90,0 470,0 470,32 ,180,32 ,190,990"></polyline> */}
// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {
  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
//   }
  
//  changedData= shuffle(allData)
// for(let i=0;i<changedData.length;i++){
//     options(changedData[i])
// }

// again_btn.addEventListener("click",()=>{
//     window.location.reload()
// })
// function dragDrop() {
//     if(second_el===2){
//         console.log("aaaaaaaaaaa")
//         var elems=document.querySelectorAll("#second-el");
//         console.log(elems)
//         for(let i=0;i<elems.length;i++){
//             if(elems[i].innerText=="Sistem Proqram Təminatı"&&elems[i].parentElement.className=="main-el"){
//                 elems[i].parentElement.insertAdjacentHTML("beforeend",bazaAndServisHTML)
//                 drops=document.querySelectorAll(".droppable")
//                 console.log("bbbbbbb")
//             }else if(elems[i].innerText=="İnstarumental Proqram Təminatı" &&elems[i].parentElement.className=="main-el"){

//                 elems[i].parentElement.insertAdjacentHTML("beforeend",instrumentalHTML)
//                 drops=document.querySelectorAll(".droppable")
//                 console.log("ccccc")
//             }else if(elems[i].innerText=="Tətbiqi Proqram Təminatı"&&elems[i].parentElement.className=="main-el"){

//                 elems[i].parentElement.insertAdjacentHTML("beforeend",tetbiqiHTML)
//                 drops=document.querySelectorAll(".droppable")
//                 console.log("dddd")
//             }
//         }
//     }
//     if(sis_count==1){
//         var siss=document.querySelectorAll("#sis-el");
//         for(let i=0;i<siss.length;i++){
//             if(siss[i].innerText=="Servis" &&siss[i].parentElement.parentElement.className=="main-el"){
//                 siss[i].insertAdjacentHTML("afterend",fourthHTML)
//                 drops=document.querySelectorAll(".droppable")
//             }
//             if(siss[i].innerText=="Baza"&& siss[i].parentElement.parentElement.className=="main-el"){
//                 siss[i].insertAdjacentHTML("afterend",thirdHTML)
//                 drops=document.querySelectorAll(".droppable")
//             }
//         }

//     }

// }
// const items = document.querySelectorAll(".draggable");
// items.forEach(item => {
//     item.addEventListener('dragstart', dragStart)
//     item.addEventListener('dragend', dragEnd)

// });
// setInterval(()=>{
//     drops.forEach(drop => {
//         drop.addEventListener('dragover', dragOver);
//         drop.addEventListener('drop', dragDrop);
//         drop.addEventListener('dragleave', dragLeave);
//     });
// },500)

// function dragLeave(){
//     this.classList.remove("animation")
// }

// function dragOver(e) {
//     e.preventDefault()
//     dropItem = this;
//     this.classList.add("animation")
//     console.log('drag over');
// }
// function dragStart() {
//     console.log('drag started');
//     dragItem = this;
//     setTimeout(() => this.className = 'neon', 0)
// }
// function dragEnd() {
//     console.log('drag ended');

//     console.log(this)
//     if (dropItem.id === dragItem.id) {
//         this.remove()
//     }
//         // if (dropItem.id === dragItem.id) {
//         //     if(dragItem.innerText=="Sistem Proqram Təminatı"&&dropItem.parentElement.className=="main-el"){
//         //        main_elms[0].innerText=dragItem.innerText;
//         //        second_el++
//         //        main_elms[0].className="droppable gaps aa"
//         //     }else if(dragItem.innerText=="İnstrumental Proqram Təminatı" &&dropItem.parentElement.className=="main-el"){
//         //         main_elms[2].innerText=dragItem.innerText
//         //         main_elms[2].className="droppable gaps aa"
//         //         second_el++
//         //     }else if(dragItem.innerText=="Tətbiqi Proqram Təminatı"&&dropItem.parentElement.className=="main-el"){
//         //         main_elms[1].innerText=dragItem.innerText
//         //         main_elms[1].className="droppable gaps aa"
//         //         second_el++
                
//         //     }
//         //     else{
//         //          dropItem.innerText = dragItem.innerText;
//         //          true_answers++;
//         //          truthy.innerText = true_answers;
//         //     }
            
//         // }
//     else {
//         this.className = 'neon'
//         false_answers++;
//         wrong.innerText = false_answers;
//     }

   
//     if(this.id=="sis-el"){
//         sis_count++;
//     }
//    console.log(second_el)
//     dragItem = null;
// }


// var bazaAndServisHTML=`
// <div class="flex">
// <p>Sistem proqram təminatı hansılardır?</p>
// <div id="sis-el" class="droppable gaps"></div>
// <div id="sis-el" class="droppable gaps"></div>
// </div>
// `

// var thirdHTML=`

// <div class="third ">
// <p>Servis sistem proqram təminatı hansılardır?</p>
//   <div id="third-el" class="droppable gaps"></div>
//   <div id="third-el" class="droppable gaps"></div>
//   <div id="third-el" class="droppable gaps"></div>
// </div>  


// `;
// var fourthHTML=`
// <div class="fourth ">
// <p>Baza sistem proqram təminatı hansılardr?</p>
//   <div id="fourth-el" class="droppable gaps"></div>
//   <div id="fourth-el" class="droppable gaps"></div>
//   <div id="fourth-el" class="droppable gaps"></div>
// </div>
// `
// var instrumentalHTML=`
// <div class="fifth">
// <p>İnstrumental proqram təminatı hansılardr?</p>
// <div id="fifth-el" class="droppable gaps"></div>
// <div id="fifth-el" class="droppable gaps"></div>
// <div id="fifth-el" class="droppable gaps"></div>
// </div>
// `
// var tetbiqiHTML=`
// <div class="sixth">
// <p>Tətbiqi proqram təminatı hansılardr?</p>
// <div id="sixth-el" class="droppable gaps"></div>
// <div id="sixth-el" class="droppable gaps"></div>
// <div id="sixth-el" class="droppable gaps"></div>
// <div id="sixth-el" class="droppable gaps"></div>
// </div>
// `



const options_div = document.querySelector(".neon-con")
const truthy = document.querySelector("#true")
var drops = document.querySelectorAll(".droppable")
const wrong = document.querySelector("#wrong")
const main=document.querySelector(".main")
const main_elms=document.querySelectorAll(".main-el")
const container=document.querySelector(".container")
const again_btn=document.getElementById("again")
// $(document).ready(function() {});
let second_el=0;
let elementsWith3=0;
let elementsWith4=0;
let true_answers = 0;
let el;
let sis_count=0;
let false_answers = 0;
let visibleIDs = 1;


truthy.innerText = true_answers;
wrong.innerText = false_answers;
let dragItem = null;
let dropItem = null;
var allData = [
    {
        id: "second-el",
        value: "Sistem Proqram Təminatı",
    },
    {
        id: "second-el",
        value: "İnstrumental Proqram Təminatı",
    },
    {
        id: "second-el",
        value: "Tətbiqi Proqram Təminatı",
    },
    {
        id: "sis-el",
        value: "Baza",
    },
    {
        id: "sis-el",
        value: "Servis",
    },
    {
        id: "third-el",
        value: "Əməliyyat Sistemləri",
    },
    {
        id: "third-el",
        value: "Əməliyyat Örtükləri",
    },
    {
        id: "third-el",
        value: "Şəbəkə Əməliyyat sistemləri",
    },
    {
        id: "fourth-el",
        value: "Diaqnostik Proqram",
    },
    {
        id: "fourth-el",
        value: "Antiviruslar",
    },
    {
        id: "fourth-el",
        value: "Utilitlər",
    },
    {
        id: "fifth-el",
        value: "Proqramlaşdırma dilləri və Sistemləri",
    },
    {
        id: "fifth-el",
        value: "Proqramlaşdırmanın inteqrallaşdırılmış mühiti",
    },
    {
        id: "fifth-el",
        value: "Proqram kompleksləri",
    },
    {
        id: "sixth-el",
        value: "Ümumi təyinatlı",
    },
    {
        id: "sixth-el",
        value: "Üsulyönlü",
    },
    {
        id: "sixth-el",
        value: "Problem yönlü",
    },
    {
        id: "sixth-el",
        value: "Qlobal komputer şəbəkələri",
    },

    {
        id: "seventh-el",
        value: "MS Dos",
    },
    {
        id: "seventh-el",
        value: "Windows",
    },
    {
        id: "seventh-el",
        value: "Unix",
    },
    {
        id: "seventh-el",
        value: "Mac OS",
    },
    {
        id: "seventh-el",
        value: "Linux",
    },
    {
        id: "seventh-el",
        value: "Ubuntu",
    },
    {
        id: "seventh-el",
        value: "OS/2",
    },
    {
        id: "seventh-el",
        value: "Netware",
    },
    {
        id: "8th-el",
        value: "Norton Commander",
    },
    {
        id: "8th-el",
        value: "Windows Commander",
    },
    {
        id: "9th-el",
        value: "Kaspersky",
    },
    {
        id: "9th-el",
        value: "Dr.Solomon",
    },
    {
        id: "10th-el",
        value: "Disk defraqmenti",
    },
    {
        id: "10th-el",
        value: "Back up",
    },
    
]
var changedData=[];
function options(el) {
    var html = `
    <div id="${el.id}" class="neon draggable" draggable="true">
   <span> ${el.value}
      
    </span>
 </div>
 `
    options_div.insertAdjacentHTML("beforeend", html);
}
{/* <polyline points="90,0 470,0 470,32 ,180,32 ,190,990"></polyline> */}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
 changedData= shuffle(allData)
for(let i=0;i<changedData.length;i++){
    options(changedData[i])
}

again_btn.addEventListener("click",()=>{
    window.location.reload()
})
function dragDrop() {
    
    if (dropItem.id === dragItem.id) {
        dropItem.innerText = dragItem.innerText;
        true_answers++;
        truthy.innerText = true_answers;
        
    }
    if(second_el===2){
        var elems=document.querySelectorAll("#second-el");
        for(let i=0;i<elems.length;i++){
            if(elems[i].innerText=="Sistem Proqram Təminatı"&&elems[i].parentElement.className=="main-el"){
                elems[i].parentElement.insertAdjacentHTML("beforeend",bazaAndServisHTML)
                drops=document.querySelectorAll(".droppable")
            }else if(elems[i].innerText=="İnstrumental Proqram Təminatı" &&elems[i].parentElement.className=="main-el"){

                elems[i].parentElement.insertAdjacentHTML("beforeend",instrumentalHTML)
                drops=document.querySelectorAll(".droppable")
            }else if(elems[i].innerText=="Tətbiqi Proqram Təminatı"&&elems[i].parentElement.className=="main-el"){

                elems[i].parentElement.insertAdjacentHTML("beforeend",tetbiqiHTML)
                drops=document.querySelectorAll(".droppable")
            }
        }
    }
    if(sis_count==1){
        var siss=document.querySelectorAll("#sis-el");
        for(let i=0;i<siss.length;i++){
            if(siss[i].innerText=="Servis" &&siss[i].parentElement.parentElement.className=="main-el"){
                siss[i].insertAdjacentHTML("afterend",fourthHTML)
                drops=document.querySelectorAll(".droppable")
            }
            if(siss[i].innerText=="Baza"&& siss[i].parentElement.parentElement.className=="main-el"){
                siss[i].insertAdjacentHTML("afterend",thirdHTML)
                drops=document.querySelectorAll(".droppable")
            }
        }

    }
    if(dropItem.id=="third-el"&&dragItem.innerText=="Əməliyyat Sistemləri"){
        dropItem.insertAdjacentHTML("beforeend",seventhHTML)
    }
    if(dropItem.id=="third-el"&&dragItem.innerText=="Əməliyyat Örtükləri"){
        dropItem.insertAdjacentHTML("beforeend",eightHTML)
    }
    if(dropItem.id=="fourth-el"&&dragItem.innerText=="Antiviruslar"){
        dropItem.insertAdjacentHTML("beforeend",ninethHTML)
    }
    if(dropItem.id=="fourth-el"&&dragItem.innerText=="Utilitlər"){
        dropItem.insertAdjacentHTML("beforeend",tenthHTML)
    }

}
const items = document.querySelectorAll(".draggable");
items.forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)

});
setInterval(()=>{
    drops.forEach(drop => {
        drop.addEventListener('dragover', dragOver);
        drop.addEventListener('drop', dragDrop);
        drop.addEventListener('dragleave', dragLeave);
    });
},500)

function dragLeave(){
    this.classList.remove("animation")
}

function dragOver(e) {
    e.preventDefault()
    dropItem = this;
    this.classList.add("animation")
    console.log('drag over');
}
function dragStart() {
    console.log('drag started');
    dragItem = this;
    setTimeout(() => this.className = 'neon', 0)
}
function dragEnd() {
    console.log('drag ended');

    console.log(this)
    if (dropItem.id === dragItem.id) {
        this.remove()
    }
    else {
        this.className = 'neon'
        false_answers++;
        wrong.innerText = false_answers;   
    }
    if (this.id == "second-el") {
        second_el++;
    }
    if(this.id=="sis-el"){
        sis_count++;
    }
   
    dragItem = null;
}
var bazaAndServisHTML=`
<div class="flex">
<p>Sistem proqram təminatı hansılardır?</p>
<div id="sis-el" class="droppable gaps"></div>
<div id="sis-el" class="droppable gaps"></div>
</div>
`
var thirdHTML=`
<div class="third ">
<p>Servis sistem proqram təminatı hansılardır?</p>
  <div id="third-el" class="droppable gaps"></div>
  <div id="third-el" class="droppable gaps"></div>
  <div id="third-el" class="droppable gaps"></div>
</div>  
`;
var fourthHTML=`
<div class="fourth ">
<p>Baza sistem proqram təminatı hansılardr?</p>
  <div id="fourth-el" class="droppable gaps"></div>
  <div id="fourth-el" class="droppable gaps"></div>
  <div id="fourth-el" class="droppable gaps"></div>
</div>
`
var instrumentalHTML=`
<div class="fifth">
<p>İnstrumental proqram təminatı hansılardr?</p>
<div id="fifth-el" class="droppable gaps"></div>
<div id="fifth-el" class="droppable gaps"></div>
<div id="fifth-el" class="droppable gaps"></div>
</div>
`
var tetbiqiHTML=`
<div class="sixth">
<p>Tətbiqi proqram təminatı hansılardr?</p>
<div id="sixth-el" class="droppable gaps"></div>
<div id="sixth-el" class="droppable gaps"></div>
<div id="sixth-el" class="droppable gaps"></div>
<div id="sixth-el" class="droppable gaps"></div>
</div>
`
var seventhHTML=`
<div class="seventh">
<p>Əməliyyat sistemləri hansılardr?</p>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
<div id="seventh-el" class="droppable gaps"></div>
</div>
`
var eightHTML=`
<div class="8th">
<p>Əməliyyat sistemləri hansılardr?</p>
<div id="8th-el" class="droppable gaps"></div>
<div id="8th-el" class="droppable gaps"></div>
</div>
`
var ninethHTML=`
<div class="9th">
<p>Əməliyyat sistemləri hansılardr?</p>
<div id="9th-el" class="droppable gaps"></div>
<div id="9th-el" class="droppable gaps"></div>
<div id="9th-el" class="droppable gaps"></div>
<div id="9th-el" class="droppable gaps"></div>
<div id="9th-el" class="droppable gaps"></div>
<div id="9th-el" class="droppable gaps"></div>
<div id="9th-el" class="droppable gaps"></div>
<div id="9th-el" class="droppable gaps"></div>
<div id="9th-el" class="droppable gaps"></div>
</div>
`
var tenthHTML=`
<div class="10th">
<p>Əməliyyat sistemləri hansılardr?</p>
<div id="10th-el" class="droppable gaps"></div>
<div id="10th-el" class="droppable gaps"></div>
<div id="10th-el" class="droppable gaps"></div>
<div id="10th-el" class="droppable gaps"></div>
<div id="10th-el" class="droppable gaps"></div>
<div id="10th-el" class="droppable gaps"></div>
<div id="10th-el" class="droppable gaps"></div>
<div id="10th-el" class="droppable gaps"></div>
</div>
`