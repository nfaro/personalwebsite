let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
var titles = ["Untitled.", "Looking in the mirror. • Model: Justin Leblanc","Untitled 3.14. • Model: Sebastian Simon", "Get a grip. • Model: Jacob Case", 
            "Made you look. • Models: Garrett Gordon, Sebastian Simon", "Take a leap. • Design: Rikita Bansal", "Death stare. • Model: Sebastian Simon", 
            "Glistening. • Model: Allison Tong", "What? • Model: Sebastian Simon", "It's too dark in here. • Model: Garrett Gordon", "Puppy eyes. • Model: Asher Faro", 
            "Clipped to you. • Rikita Bansal", "Swing to me. • Models: Noah Faro, Andrei Dumitrescu", "Reaching out. • Model: Andrei Dumitrescu", 
            "Tuck and roll. • Model: Sebastian Simon", "Leaving my old self behind. • Model: Jacob Case", "Always protected. • Model: Sebastian Simon"]

if(galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/images/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');
            let ind = parseInt(setNewImgUrl[1]);
            let setFinalImgUrl;
            if (ind < 17) {
                setFinalImgUrl = setNewImgUrl;
            } else {
                setFinalImgUrl = setNewImgUrl.replace("pors", "por");
            }

            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "images/" + setFinalImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function() {
                // This makes this code run after the image is loaded.
                let imgWidth = this.width;
                let imgHeight = this.height;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
                let calcImgToEdgeHeight = ((windowHeight - imgHeight) / 2) + (imgHeight);

                // Creation of the previous button.
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
                
                // Creation of the next button.
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                newNextBtn.style.cssText = "right: " + (calcImgToEdge-18) + "px;";

                let newTitle = document.createElement("div");
                let newTitleText = document.createTextNode(titles[getLatestOpenedImg]);
                newTitle.appendChild(newTitleText);
                container.appendChild(newTitle);
                newTitle.setAttribute("id", "img-title");
                newTitle.style.cssText = "left: " + (calcImgToEdge + 70) + "px;" + "top: " + (calcImgToEdgeHeight) + "px;";
            }

        }

    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
    document.querySelector("#img-title").remove();
}

function changeImg(changeDir) {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    document.querySelector("#current-img").remove();
    
    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if (changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if(calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    }
    else if(changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }
    newImg.setAttribute("src", "images/por" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImg = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let imgHeight = this.height;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
        let calcImgToEdgeHeight = ((windowHeight - imgHeight) / 2) + (imgHeight);

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + (calcImgToEdge-18) + "px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: " + (calcImgToEdge) + "px;";

        let nTitle = document.querySelector("#img-title");
        var newTitle = document.createTextNode(titles[getLatestOpenedImg]);
        var oldTitle = document.getElementById("img-title");
        oldTitle.replaceChild(newTitle, oldTitle.childNodes[0]);
        nTitle.style.cssText = "left: " + (calcImgToEdge + 70) + "px;" + "top: " + (calcImgToEdgeHeight) + "px;";

    }

}