const options_div = document.querySelector(".neon-con")
const truthy = document.querySelector("#true")
var drops = document.querySelectorAll(".droppable")
const wrong = document.querySelector("#wrong")
const main=document.querySelector(".main")
const container=document.querySelector(".container")
// $(document).ready(function() {});

let true_answers = 0;
let el;
let false_answers = 0;
let visibleIDs = 1;

truthy.innerText = true_answers;
wrong.innerText = false_answers;
let dragItem = null;
let dropItem = null;
var allData = [
    {
        id: 2,
        value: "Sistem Proqram Təminatı",
    },
    {
        id: 4,
        value: "Tətbiqi Proqram Təminatı",
    },
    {
        id: 3,
        value: "İnstarumental Proqram Təminatı",
    },
    {
        id: 1,
        value: "Proqram Təminatı",
    },
    {
        id: 6,
        value: "Servis",
    },
    {
        id: 10,
        value: "Diaqnostik Proqram",
    },
    {
        id: 5,
        value: "Baza",
    },
    {
        id: 7,
        value: "Əməliyyat Sistemləri",
    },
    {
        id: 8,
        value: "Əməliyyat Örtükləri",
    },
    {
        id: 11,
        value: "Antiviruslar",
    },
    {
        id: 9,
        value: "Şəbəkə Əməliyyat sistemləri",
    },
    {
        id: 14,
        value: "Proqramlaşdırmanın inteqrallaşdırılmış mühiti",
    },
    {
        id: 12,
        value: "Utilitlər",
    },
    {
        id: 13,
        value: "Proqramlaşdırma dilləri və Sistemləri",
    },
    {
        id: 17,
        value: "Üsulyönlü",
    },
    {
        id: 15,
        value: "Proqram kompleksləi",
    },
    {
        id: 19,
        value: "Qlobal komputer şəbəkələri",
    },
    {
        id: 16,
        value: "Ümumi təyinatlı",
    },
    {
        id: 18,
        value: "Problem yönlü",
    },
]
function options(el) {
    var html = `
    <div id="${el.id}." class="neon option-el" draggable="true">
   <span> ${el.value}
      <svg height="40" width="400">
         <polyline points="10,0 340,0 340,32 ,180,32 ,190,990"></polyline>
       </svg>
    </span>
 </div>

 `
    options_div.insertAdjacentHTML("beforeend", html);
}
for (let i = 0; i < allData.length; i++) {
    options(allData[i])
}
const items = document.querySelectorAll(".option-el");
items.forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)

});
drops.forEach(drop => {
    drop.addEventListener('dragover', dragOver);
    drop.addEventListener('drop', dragDrop);
    drop.addEventListener('dragleave', dragLeave);
});

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
    if (dropItem.id+"." === dragItem.id) {
        this.remove()
    }
    else {
        this.className = 'neon'
        false_answers++;
        wrong.innerText = false_answers;
    }

    if (this.id == 1) {
        // console.log("aa")
        for (let i = 2; i < 5; i++) {
            el = document.getElementById(`${i}`);
            el.className = "droppable gaps";        
            console.log(el)
        }
    }
    else if (this.id == 4) {
        for (let i = 5; i < 13; i++) {
            el = document.getElementById(`${i}`);
            el.className = "droppable gaps";        
            console.log(el)
        }
    } else if (this.id == 12) {
        
        for (let i = 13; i < 16; i++) {
            el = document.getElementById(`${i}`);
            el.className = "droppable gaps";        
            console.log(el)
        }
    } else if (this.id ==15) {
       
        for (let i = 15; i < 20; i++) {
            el = document.getElementById(`${i}`);
            el.className = "droppable gaps";        
            console.log(el)
        }
    }


    dragItem = null;
}
function dragDrop() {
    console.log('drag dropped');
    console.log(dragItem)
    if (dropItem.id+"." === dragItem.id) {
        dropItem.innerText = dragItem.innerText;
        true_answers++;
        truthy.innerText = true_answers;
    }

}

console.log(true_answers, false_answers)

// const firstHTML = `
// <div class="second ">
// <div id="2" class="droppable gaps  "></div>
// <div id="3" class="droppable gaps  "></div>
// <div id="4" class="droppable gaps  "></div>
// </div>
// `
// const secondHTML = `
// <div class="third ">
// <div id="5" class="droppable gaps "></div>
// <div id="7" class="droppable gaps "></div>
// <div id="8" class="droppable gaps "></div>
// <div id="9" class="droppable gaps "></div>
// </div>

// <div class="fourth ">
// <div id="6" class="droppable gaps "></div>
// <div id="10" class="droppable gaps "></div>
// <div id="11" class="droppable gaps "></div>
// <div id="12" class="droppable gaps "></div>
// </div>`
// const thirdHTML = `
// <div class="fifth ">
//           <div id="13" class="droppable gaps "></div>
//           <div id="14" class="droppable gaps "></div>
//           <div id="15" class="droppable gaps "></div>
//         </div>`
// const fourthHTML = `
// <div class="sixth ">
//           <div id="16" class="droppable gaps hidden"></div>
//           <div id="17" class="droppable gaps hidden"></div>
//           <div id="18" class="droppable gaps hidden"></div>
//           <div id="19" class="droppable gaps hidden"></div>
//         </div>  
//         `