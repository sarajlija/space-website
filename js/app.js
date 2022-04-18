
//TOGGLE MENU

const toggle= document.querySelector('.toggle')
const bars = document.querySelector('.fa-bars')
const xmark = document.querySelector('.fa-xmark')
const navbarMobile = document.querySelector(".navbar__mobile")
toggle.addEventListener('click', function () {
    if (navbarMobile.classList.contains("show__menu")) {
        navbarMobile.classList.remove("show__menu");
        xmark.style.display = "none";
        bars.style.display = "block";

    } else {
        navbarMobile.classList.add("show__menu");
        xmark.style.display = "block";
        bars.style.display = "none";

    }
    
})






//CREWE COMMANDER OBJECT MAKE FROM DATA.JSON
const crew = [
      
    {
        name: "Douglas Hurley",
        images: "./assets/crew/image-douglas-hurley.png", 
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
        name: "Mark Shuttleworth",
        images: "./assets/crew/image-mark-shuttleworth.png", 
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        },
    {
        name: "Victor Glover",
        images:"./assets/crew/image-victor-glover.png",
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        },
        {
        name: "Anousheh Ansari",
        images: "./assets/crew/image-anousheh-ansari.png",                
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        }
    ]
/*TECHNOLOGY OBJECT MODEL FROM DATA.JSON**/

    const technology = [
        {
            name: "Launch vehicle",
            images: {
                portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
                landscape: "./assets/technology/image-launch-vehicle-landscape.jpg"
            },
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            name: "Spaceport",
            images: {
                portrait: "./assets/technology/image-spaceport-portrait.jpg",
                landscape: "./assets/technology/image-spaceport-landscape.jpg"
            },
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            name: "Space capsule",
            images: {
                portrait: "./assets/technology/image-space-capsule-portrait.jpg",
                landscape: "./assets/technology/image-space-capsule-landscape.jpg"
            },
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]

//CHANGING INNER NAVIGATION AND DESTINATION.HTML   

let buttons = document.querySelectorAll('.btn');

//console.log(buttons.length)
buttons.forEach((button,i) => {
    button.addEventListener('click', function (e) {
        const result = e.currentTarget.parentElement.previousElementSibling
        result.innerHTML =`<div class="crew__title">         
        <p class="crew__p"><span>02</span>meet your crew</p>
        <h3>${crew[i].role}</h3> 
        <h2>${crew[i].name}</h2>
        <p>${crew[i].bio}</p> 
      </div>
      <div class="crew__img "><img src=${crew[i].images} alt="${crew[i].name}">
      </div>`
        buttons.forEach(btns => btns.classList.remove('active'));
        this.classList.add('active');
        // console.log(buttons)
        // console.log(i)
        
        
    });
});

//CHANGING INNER NAVIGATION I TECHNOLOGY.HTML 

let buttonsTech = document.querySelectorAll('.btn-tech');

//console.log(buttons.length)
buttonsTech.forEach((button, i) => {
    button.addEventListener('click', function (e) {
        var result = e.currentTarget.parentElement.previousElementSibling
        
        result.innerHTML = `
        <div class="technology__title">
      
        <h3>THE TERMINOLOGY...</h3>
        <h2>${technology[i].name}</h2>
        <p>${technology[i].description}</p>
      </div>
      <div class="technology__img"><img src=${technology[i].images.portrait} alt=${technology[i].name}>
        </div>`
        buttonsTech.forEach(btns => btns.classList.remove('active'));
        this.classList.add('active');
        // console.log(buttons)
         console.log(i)
    });
});

/*********CHANGE BACKGROUND IMAGE AFTER RESIZE WINDOW */

window.addEventListener('resize', function () {
  
    if (window.matchMedia("(min-width: 1000px)").matches) {
/*
        let buttonsTech = document.querySelectorAll('.btn-tech');

//console.log(buttons.length)
    buttonsTech.forEach((button, i) => {
    button.addEventListener('click', function (e) {
        let result = e.currentTarget.parentElement.previousElementSibling
        
        result.innerHTML = `
        <div class="technology__title">
        
        <h3>THE TERMINOLOGY...</h3>
        <h2>${technology[i].name}</h2>
        <p>${technology[i].description}</p>
      </div>
      <div class="technology__img"><img src=${technology[i].images.portrait} alt=${technology[i].name}>
        </div>`
        buttonsTech.forEach(btns => btns.classList.remove('active'));
        this.classList.add('active');
        // console.log(buttons)
         console.log(i)
        });
    });*/

       
        console.log("Screen width is at least 1000px")
    } else {
/*
        let buttonsTech = document.querySelectorAll('.btn-tech');

    //console.log(buttons.length)
    buttonsTech.forEach((button, i) => {
    button.addEventListener('click', function (e) {
       
        let result = e.currentTarget.parentElement.previousElementSibling
        
        result.innerHTML = `
        <div class="technology__title">
       
        <h3>THE TERMINOLOGY...</h3>
        <h2>${technology[i].name}</h2>
        <p>${technology[i].description}</p>
      </div>
      <div class="technology__img"><img src=${technology[i].images.landscape} alt=${technology[i].name}>
        </div>`
        buttonsTech.forEach(btns => btns.classList.remove('active'));
        this.classList.add('active');
        // console.log(buttons)
         //console.log(i)
    });
});*/
       
        console.log("Screen less than 100px")
    }
})




    