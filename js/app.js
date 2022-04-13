//CREWE COMMANDER

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
      <div class="crew__img"><img src=${crew[i].images} alt="">
      </div>`
        buttons.forEach(btns => btns.classList.remove('active'));
        this.classList.add('active');
        // console.log(buttons)
        // console.log(i)
        
        
    });
});


    /*
     
            
          
            
                
     */     
