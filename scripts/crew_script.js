
// Preload animated images into cache
var imageSrcs = ["assets/crew/image-anousheh-ansari.png", "assets/crew/image-douglas-hurley.png", "assets/crew/image-mark-shuttleworth.png", "assets/crew/image-victor-glover.png"];
preloadImages(imageSrcs);

// Event Handler to initate state changes and animations
for (i = 0; i < document.querySelectorAll(".nav-dot").length; i++) {
    document.querySelectorAll(".nav-dot")[i].addEventListener("click", function() {
        // Multiple checks to prevent bugs
        if (this.id != "active-heading" && document.querySelector(".crew-preview").children.length < 3) {

            document.getElementById("active-heading").removeAttribute("id");
            this.setAttribute("id", "active-heading");

            var nameClass = this.classList[1];

            switch (nameClass) {
                case "douglas-hurley":
                    if (window.matchMedia("(min-width: 1201px)").matches) {
                       imageFadeAnimationDesktop(nameClass); 
                    } else if (window.matchMedia("(max-width: 1200px)").matches) {
                        imageFadeAnimationLaptop(nameClass);
                    }
                    
                    document.querySelector(".crew-description h4").innerHTML = "COMMANDER";
                    document.querySelector(".crew-description h3").innerHTML = "DOUGLAS HURLEY";
                    document.querySelector(".crew-description p").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";

                break;

                case "mark-shuttleworth":
                    if (window.matchMedia("(min-width: 1201px)").matches) {
                        imageFadeAnimationDesktop(nameClass); 
                     } else if (window.matchMedia("(max-width: 1200px)").matches) {
                         imageFadeAnimationLaptop(nameClass);
                     }
                    document.querySelector(".crew-description h4").innerHTML = "MISSION SPECIALIST";
                    document.querySelector(".crew-description h3").innerHTML = "MARK SHUTTLEWORTH"
                    document.querySelector(".crew-description p").innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Cononical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";

                break;

                case "victor-glover":
                    if (window.matchMedia("(min-width: 1201px)").matches) {
                        imageFadeAnimationDesktop(nameClass); 
                     } else if (window.matchMedia("(max-width: 1200px)").matches) {
                         imageFadeAnimationLaptop(nameClass);
                     }
                    document.querySelector(".crew-description h4").innerHTML = "PILOT";
                    document.querySelector(".crew-description h3").innerHTML = "VICTOR GLOVER";
                    document.querySelector(".crew-description p").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the international Space Station. Glover is a commander in the U.S Navy where he pilots an F/A 18. He was a crew member of Expediton 64 and served as a station systems flight engineer.";

                break;

                case "anousheh-ansari":
                    if (window.matchMedia("(min-width: 1201px)").matches) {
                        imageFadeAnimationDesktop(nameClass); 
                     } else if (window.matchMedia("(max-width: 1200px)").matches) {
                         imageFadeAnimationLaptop(nameClass);
                     }
                    document.querySelector(".crew-description h4").innerHTML = "FLIGHT ENGINEER";
                    document.querySelector(".crew-description h3").innerHTML = "ANOUSHEH ANSARI";
                    document.querySelector(".crew-description p").innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS and the first Iranian in space.";

                break;
            }
        }           
    });
}

function imageFadeAnimationDesktop(newImgSource) {
    var oldElement = document.querySelector(".crew-preview img");
    var oldElementOpacity = 1;

    var newElement = document.createElement("img");
    newElement.setAttribute("src", "assets/crew/image-" + newImgSource + ".png");
    newElement.style.opacity = 0;
    var newElementOpacity = 0;

    oldInterval_Id = setInterval(fadeOut, 10);

    function fadeOut() {
        if (oldElementOpacity <= 0) {
            clearInterval(oldInterval_Id);
            document.querySelector(".crew-preview").removeChild(oldElement);
            document.querySelector(".crew-preview").appendChild(newElement);
            newInterval_Id = setInterval(fadeIn, 10);
        } else {
            oldElementOpacity -= 0.1; // Speed of Animation
            oldElement.style.opacity = oldElementOpacity;
        }
    }

    function fadeIn() {
        if (newElementOpacity >= 1) {
            clearInterval(newInterval_Id);
        } else {
            newElementOpacity += 0.1; // Speed of Animation
            newElement.style.opacity = newElementOpacity;
        }
    }
}

function imageFadeAnimationLaptop(newImgSource) {
    var oldElement = document.querySelector(".crew-preview img");
    var oldElementOpacity = 1;

    var newElement = document.createElement("img");
    newElement.setAttribute("src", "assets/crew/image-" + newImgSource + ".png");
    newElement.style.opacity = 0;
    var newElementOpacity = 0;

    oldInterval_Id = setInterval(fadeOut, 10);

    function fadeOut() {
        if (oldElementOpacity <= 0) {
            clearInterval(oldInterval_Id);
            document.querySelector(".crew-preview").removeChild(oldElement);
            document.querySelector(".crew-preview").insertBefore(newElement, document.querySelector(".crew-preview hr"));
            newInterval_Id = setInterval(fadeIn, 10);
        } else {
            oldElementOpacity -= 0.1; // Speed of Animation
            oldElement.style.opacity = oldElementOpacity;
        }
    }

    function fadeIn() {
        if (newElementOpacity >= 1) {
            clearInterval(newInterval_Id);
            newElement.style.position = "revert";
            newElement.style.bottom = "revert";
        } else {
            newElementOpacity += 0.1; // Speed of Animation
            newElement.style.opacity = newElementOpacity;
        }
    }
}

function preloadImages(srcs) {
    if (!preloadImages.cache) {
        preloadImages.cache = [];
    }
    var img;
    for (var i = 0; i < srcs.length; i++) {
        img = new Image();
        img.src = srcs[i];
        preloadImages.cache.push(img);
    }
}
