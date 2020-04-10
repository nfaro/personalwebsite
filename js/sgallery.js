let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
var titles = ["Untitled.","I think I made a stock image.","No church in the wild.", "On the horizon. • Model: Garrett Gordon", "Stand out.", "Facing fears. • Model: Unknown", 
            "Rushing to conclusions.", "Basically a California stock image.", "Generations.", "Upsteam from here.", "The remains left behind.", "Never stop climbing.", "Rolling over.", 
            "A good ole graffiti in the forest.", "I tried this, got 2 feet up.", "Rush ashore.", "Footsteps in the sand.", "Untitled."]

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
                setFinalImgUrl = setNewImgUrl.replace("ss", "s");
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
                newPrevBtn.style.cssText = "left: " + (calcImgToEdge+12) + "px;";
                
                // Creation of the next button.
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                newNextBtn.style.cssText = "right: " + (calcImgToEdge-2) + "px;";

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
    newImg.setAttribute("src", "images/s" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImg = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let imgHeight = this.height;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
        let calcImgToEdgeHeight = ((windowHeight - imgHeight) / 2) + (imgHeight);

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + (calcImgToEdge-2) + "px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: " + (calcImgToEdge+12) + "px;";

        let nTitle = document.querySelector("#img-title");
        var newTitle = document.createTextNode(titles[getLatestOpenedImg]);
        var oldTitle = document.getElementById("img-title");
        oldTitle.replaceChild(newTitle, oldTitle.childNodes[0]);
        nTitle.style.cssText = "left: " + (calcImgToEdge + 70) + "px;" + "top: " + (calcImgToEdgeHeight) + "px;";

    }

}