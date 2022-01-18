
// Preload animated images into cache
var imageSrcs = ["assets/destination/image-moon.png", "assets/destination/image-mars.png", "assets/destination/image-europa.png", "assets/destination/image-titan.png"];
preloadImages(imageSrcs);

// Makes sure images are corrctley displayed when windows is resized
window.addEventListener("resize", function() {
    if (this.matchMedia("(min-width: 1001px)").matches) {
        document.querySelector(".destination-preview-container img").style.position = "absolute";
        document.querySelector(".destination-preview-container img").style.top = 35 + "vh";
        document.querySelector(".destination-preview-container img").style.right = 53 + "vw";
    } else if (this.matchMedia("(max-width: 1000px)").matches) {
        document.querySelector(".destination-preview-container img").style.position = "relative";
        document.querySelector(".destination-preview-container img").style.top = "revert";
        document.querySelector(".destination-preview-container img").style.right = 1 + "vw";
    }
});

// Event Handler to initate state changes and animations
animationDone = true;

for (i = 0; i < document.querySelectorAll(".nav-text").length; i++) {
    document.querySelectorAll(".nav-text")[i].addEventListener("click", function() {
        // Multiple checks to prevent bugs
        if (this.id != "active-heading" && document.querySelector(".destination-preview-container").children.length < 3 && animationDone) {

            document.getElementById("active-heading").removeAttribute("id");
            this.setAttribute("id", "active-heading");

            var paragraphInnerHTML = this.innerHTML;

            switch (paragraphInnerHTML) {
                case "MOON":
                    if (window.matchMedia("(min-width: 1001px)").matches) {
                        imageSwipeAnimationDesktop(paragraphInnerHTML);
                        
                    } else if (window.matchMedia("(max-width: 1000px)").matches) {
                        imageSwipeAnimationMobile(paragraphInnerHTML);
                        
                    }
                    
                    document.querySelector(".detailed-description h2").innerHTML = "MOON";
                    document.querySelector(".detailed-description p").innerHTML = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
                    document.getElementById("distance").innerHTML = "384.400 KM";
                    document.getElementById("time").innerHTML = "3 DAYS";
                break;

                case "MARS":
                    if (window.matchMedia("(min-width: 1001px)").matches) {
                        imageSwipeAnimationDesktop(paragraphInnerHTML);
                        
                    } else if (window.matchMedia("(max-width: 1000px)").matches) {
                        imageSwipeAnimationMobile(paragraphInnerHTML);
                        
                    }

                    document.querySelector(".detailed-description h2").innerHTML = "MARS";
                    document.querySelector(".detailed-description p").innerHTML = "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!"
                    document.getElementById("distance").innerHTML = "255 MIL. KM";
                    document.getElementById("time").innerHTML = "9 Months";
                break;

                case "EUROPA":
                    if (window.matchMedia("(min-width: 1001px)").matches) {
                        imageSwipeAnimationDesktop(paragraphInnerHTML);
                        
                    } else if (window.matchMedia("(max-width: 1000px)").matches) {
                        imageSwipeAnimationMobile(paragraphInnerHTML);
                        
                    }

                    document.querySelector(".detailed-description h2").innerHTML = "EUROPA";
                    document.querySelector(".detailed-description p").innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey or simple relaxation in your snug wintery cabin."
                    document.getElementById("distance").innerHTML = "628 MIL. KM";
                    document.getElementById("time").innerHTML = "3 YEARS";
                break;

                case "TITAN":
                    if (window.matchMedia("(min-width: 1001px)").matches) {
                        imageSwipeAnimationDesktop(paragraphInnerHTML);

                    } else if (window.matchMedia("(max-width: 1000px)").matches) {
                        imageSwipeAnimationMobile(paragraphInnerHTML);
                    }

                    document.querySelector(".detailed-description h2").innerHTML = "TITAN";
                    document.querySelector(".detailed-description p").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
                    document.getElementById("distance").innerHTML = "1.6 BIL. KM";
                    document.getElementById("time").innerHTML = "7 YEARS";
                break;
            }  
        }   
    });
}

function imageSwipeAnimationDesktop(newImgSource) {

    animationDone = false;

    var newElement = document.createElement("img");
    newElement.setAttribute("id", "picture");
    newElement.setAttribute("src", "assets/destination/image-" + newImgSource.toLowerCase() + ".png");
    newElement.style.right = -40 + "vw";
    document.querySelector(".destination-preview-container").appendChild(newElement);

    var oldElementPosition = 53; // vw
    var newElementPosition = -42; // vw
    var oldElement = document.querySelectorAll(".destination-preview-container img")[0];
    var newElement = document.querySelectorAll(".destination-preview-container img")[1];

    oldInterval_Id = setInterval(oldElementFrame, 1);
    newInterval_Id = setInterval(newElementFrame, 1);

    function oldElementFrame() {
        if (oldElementPosition >= 100) {
            clearInterval(oldInterval_Id);
            document.querySelector(".destination-preview-container").removeChild(oldElement);

        } else {
            oldElementPosition += 3; // Speed of Animation
            oldElement.style.right = oldElementPosition + "vw";  
        }
    }

    function newElementFrame() {
        if (newElementPosition >= 53) {
            clearInterval(newInterval_Id);

            animationDone = true;
        } else {
            newElementPosition += 3; // Speed of Animation
            newElement.style.right = newElementPosition + "vw";
        }
    }
}

function imageSwipeAnimationMobile(newImgSource) {

    animationDone = false;

    var newElement = document.createElement("img");
    newElement.setAttribute("id", "picture");
    newElement.setAttribute("src", "assets/destination/image-" + newImgSource.toLowerCase() + ".png");
    newElement.style.right = -62 + "vw";
    var newElementPosition = -62; // vw
    
    var oldElement = document.querySelector(".destination-preview-container img");
    var oldElementPosition = 1; // vw
    
    oldInterval_Id = setInterval(oldElementFrame, 1);
    
    function oldElementFrame() {
        if (oldElementPosition >= 62) {
            clearInterval(oldInterval_Id);
            document.querySelector(".destination-preview-container").removeChild(oldElement);
            document.querySelector(".destination-preview-container").appendChild(newElement);
            newInterval_Id = setInterval(newElementFrame, 1);
        } else {
            oldElementPosition += 3; // Speed of Animation
            oldElement.style.right = oldElementPosition + "vw";  
        }
    }

    function newElementFrame() {
        if (newElementPosition >= 1) {
            clearInterval(newInterval_Id);
            newElement.style.right = "revert"; // To make sure image is correctly diplayed when window is resized
            animationDone = true;
        } else {
            newElementPosition += 3; // Speed of Animation
            newElement.style.right = newElementPosition + "vw";
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
