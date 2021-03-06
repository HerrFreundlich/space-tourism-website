
// Preload animated images into cache
var imageSrcs = ["assets/technology/image-launch-vehicle-landscape.png", "assets/technology/image-launch-vehicle-portrait.png", "assets/technology/image-space-capsule-landscape.png", 
"assets/technology/image-space-capsule-portrait.png", "assets/technology/image-spaceport-landscape.png", "assets/technology/image-spaceport-portrait.png"];
preloadImages(imageSrcs);

// Makes sure image is correctly displayed when site is loaded
document.addEventListener("DOMContentLoaded", function() {
    if (window.matchMedia("(min-width: 1001px)").matches) {
        document.querySelector(".technology-preview-container img").setAttribute("src", "assets/technology/image-launch-vehicle-portrait.jpg");  
    } else if (window.matchMedia("(max-width: 1000px)").matches) {
        document.querySelector(".technology-preview-container img").setAttribute("src", "assets/technology/image-launch-vehicle-landscape.jpg");
    }
});

// Makes sure image is correctly displayes when window is resized
window.addEventListener("resize", function() {
    var nameClass = document.getElementById("active-heading").classList[0];

    switch (nameClass) {
        case "launch-vehicle":
            if (window.matchMedia("(min-width: 1001px)").matches) {
                document.querySelector(".technology-preview-container img").setAttribute("src", "assets/technology/image-launch-vehicle-portrait.jpg");
                document.querySelector(".technology-preview-container img").style.width = 35 + "vw";
            } else if (window.matchMedia("(min-width: 601px) and (max-width: 1000px)").matches) {
                document.querySelector(".technology-preview-container img").setAttribute("src", "assets/technology/image-launch-vehicle-landscape.jpg");
                document.querySelector(".technology-preview-container img").style.width = 85 + "vw";
            } else if (window.matchMedia("(max-width: 600px)").matches) {
                document.querySelector(".technology-preview-container img").setAttribute("src", "assets/technology/image-launch-vehicle-landscape.jpg");
                document.querySelector(".technology-preview-container img").style.width = 95 + "vw";
            }
        break;
                
        case "spaceport":
            if (window.matchMedia("(min-width: 1001px)").matches) {
                document.querySelector(".technology-preview-container img").setAttribute("src", "assets/technology/image-spaceport-portrait.jpg");
                document.querySelector(".technology-preview-container img").style.width = 35 + "vw";
            } else if (window.matchMedia("(min-width: 601px) and (max-width: 1000px)").matches) {
                document.querySelector(".technology-preview-container img").setAttribute("src", "assets/technology/image-spaceport-landscape.jpg");
                document.querySelector(".technology-preview-container img").style.width = 85 + "vw";
            } else if (window.matchMedia("(max-width: 600px)").matches) {
                document.querySelector(".technology-preview-container img").setAttribute("src", "assets/technology/image-spaceport-landscape.jpg");
                document.querySelector(".technology-preview-container img").style.width = 95 + "vw";
            }
        break;

        case "space-capsule":
            if (window.matchMedia("(min-width: 1001px)").matches) {
                document.querySelector(".technology-preview-container img").setAttribute("src", "assets/technology/image-space-capsule-portrait.jpg");
                document.querySelector(".technology-preview-container img").style.width = 35 + "vw";
            } else if (window.matchMedia("(min-width: 601px) and (max-width: 1000px)").matches) {
                document.querySelector(".technology-preview-container img").setAttribute("src", "assets/technology/image-space-capsule-landscape.jpg");
                document.querySelector(".technology-preview-container img").style.width = 85 + "vw";
            } else if (window.matchMedia("(max-width: 600px)").matches) {
                document.querySelector(".technology-preview-container img").setAttribute("src", "assets/technology/image-space-capsule-landscape.jpg");
                document.querySelector(".technology-preview-container img").style.width = 95 + "vw";
            }
        break;
    }
});


var animationDone = true;

// Event Handler to initate state changes and animations
for (i = 0; i < document.querySelectorAll(".nav-heading button").length; i++) {
    document.querySelectorAll(".nav-heading button")[i].addEventListener("click", function() {
        // Multiple checks to prevent bugs
        if (this.id != "active-heading" && animationDone) {

            document.getElementById("active-heading").removeAttribute("id");
            this.setAttribute("id", "active-heading");

            var nameClass = this.classList[0];

            switch (nameClass) {
                case "launch-vehicle":
                    if (window.matchMedia("(min-width: 1001px)").matches) {
                        imageSwipeAnimationDesktop(nameClass);
                    } else if (window.matchMedia("(min-width: 601px) and (max-width: 1000px)").matches) {
                        imageSwipeAnimationLaptop(nameClass);
                    } else if (window.matchMedia("(max-width: 600px)").matches) {
                        imageSwipeAnimationMobile(nameClass);
                    }
                    document.querySelector(".technology-description h3").innerHTML = "LAUNCH VEHICLE";
                    document.querySelector(".technology-description p").innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
                break;

                case "spaceport":
                    if (window.matchMedia("(min-width: 1001px)").matches) {
                        imageSwipeAnimationDesktop(nameClass);
                    } else if (window.matchMedia("(min-width: 601px) and (max-width: 1000px)").matches) {
                        imageSwipeAnimationLaptop(nameClass);
                    } else if (window.matchMedia("(max-width: 600px)").matches) {
                        imageSwipeAnimationMobile(nameClass);
                    }
                    document.querySelector(".technology-description h3").innerHTML = "SPACEPORT";
                    document.querySelector(".technology-description p").innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take adventage of the Earth's rotation for launch.";
                break;

                case "space-capsule":
                    if (window.matchMedia("(min-width: 1001px)").matches) {
                        imageSwipeAnimationDesktop(nameClass);
                    } else if (window.matchMedia("(min-width: 601px) and (max-width: 1000px)").matches) {
                        imageSwipeAnimationLaptop(nameClass);
                    } else if (window.matchMedia("(max-width: 600px)").matches) {
                        imageSwipeAnimationMobile(nameClass);
                    }
                    document.querySelector(".technology-description h3").innerHTML = "SPACE CAPSULE";
                    document.querySelector(".technology-description p").innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema and plenty of other activities to keep you entertained.";
                break;
            }
        }           
    });
}

function imageSwipeAnimationDesktop(newImgSource) {
    animationDone = false;

    var oldElement = document.querySelector(".technology-preview-container img");
    var oldElementPosition = 0; // vh

    var newElement = document.createElement("img");
    newElement.setAttribute("src", "assets/technology/image-" + newImgSource + "-portrait.jpg");
    newElement.style.position = "relative";
    newElement.style.width = 35 + "vw";
    newElement.style.bottom = -80 + "vh";
    var newElementPosition = -80; // vh

    oldInterval_Id = setInterval(swipeOut, 10);

    function swipeOut() {
        if (oldElementPosition <= -80) {
            clearInterval(oldInterval_Id);
            document.querySelector(".technology-preview-container").removeChild(oldElement);
            document.querySelector(".technology-preview-container").appendChild(newElement);
            newInterval_Id = setInterval(swipeIn, 10);
        } else {
            oldElementPosition -= 5; // Speed of Animation
            oldElement.style.bottom = oldElementPosition + "vh";
        }
    }

    function swipeIn() {
        if (newElementPosition >= 0) {
            clearInterval(newInterval_Id);
            animationDone = true;
        } else {
            newElementPosition += 5; // Speed of Animation
            newElement.style.bottom = newElementPosition + "vh";
        }
    }
}

function imageSwipeAnimationLaptop(newImgSource) {
    animationDone = false;

    var oldElement = document.querySelector(".technology-preview-container img");
    var oldElementPosition = 0; // vw

    var newElement = document.createElement("img");
    newElement.setAttribute("src", "assets/technology/image-" + newImgSource + "-landscape.jpg");
    newElement.style.position = "relative";
    newElement.style.width = 85 + "vw";
    newElement.style.right = -80 + "vw";
    var newElementPosition = -80; // vw

    oldInterval_Id = setInterval(swipeOut, 10);

    function swipeOut() {
        if (oldElementPosition >= 80) {
            clearInterval(oldInterval_Id);
            document.querySelector(".technology-preview-container").removeChild(oldElement);
            document.querySelector(".technology-preview-container").appendChild(newElement);
            newInterval_Id = setInterval(swipeIn, 10);
        } else {
            oldElementPosition += 5; // Speed of Animation
            oldElement.style.right = oldElementPosition + "vw";
        }
    }

    function swipeIn() {
        if (newElementPosition >= 0) {
            clearInterval(newInterval_Id);
            animationDone = true;
        } else {
            newElementPosition += 5; // Speed of Animation
            newElement.style.right = newElementPosition + "vw";
        }
    }
}

function imageSwipeAnimationMobile(newImgSource) {
    animationDone = false;

    var oldElement = document.querySelector(".technology-preview-container img");
    var oldElementPosition = 0; // vw

    var newElement = document.createElement("img");
    newElement.setAttribute("src", "assets/technology/image-" + newImgSource + "-landscape.jpg");
    newElement.style.position = "relative";
    newElement.style.width = 95 + "vw";
    newElement.style.right = -80 + "vw";
    var newElementPosition = -80; // vw

    oldInterval_Id = setInterval(swipeOut, 10);

    function swipeOut() {
        if (oldElementPosition >= 80) {
            clearInterval(oldInterval_Id);
            document.querySelector(".technology-preview-container").removeChild(oldElement);
            document.querySelector(".technology-preview-container").appendChild(newElement);
            newInterval_Id = setInterval(swipeIn, 10);
        } else {
            oldElementPosition += 5; // Speed of Animation
            oldElement.style.right = oldElementPosition + "vw";
        }
    }

    function swipeIn() {
        if (newElementPosition >= 0) {
            clearInterval(newInterval_Id);
            animationDone = true;
        } else {
            newElementPosition += 5; // Speed of Animation
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
