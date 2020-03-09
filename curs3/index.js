var colors = ["red", "blue", "black"];
var walkingInterval = null;

function greet() {
    var username = document.getElementById("username");
    var headings = document.getElementsByTagName("h1");
    for (var i = 0; i < headings.length; i++) {
        if (username.value) {
            headings[i].innerHTML = "Hello " + username.value + "!";
            headings[i].style.color = colors[i];
        }
    }
}

function startAnimation() {
    var container = document.getElementById("walking-container");
    var imageElement = container.getElementsByTagName("img")[0];
    imageElement.src = "walk2.png";
    var elementLeft = 10;
    var index = 2;
    imageElement.style.position = "absolute";
    imageElement.style.left = elementLeft + "px";
    var direction = 0;
    walkingInterval = setInterval(function() {
        imageElement.src = "walk" + index + ".png";
        index++;
        if (index == 6) {
            index = 1;
            if (direction == 0) {
                imageElement.style.transform = "scaleX(-1)";
            } else {
                imageElement.style.transform = "scaleX(1)";
            }
            direction = 1 - direction;
        }
        elementLeft += 10;
        imageElement.style.left = elementLeft + "px";
    }, 200);
}

function stopAnimation() {
    clearInterval(walkingInterval);
}

function animation() {
    var button = document.getElementById("animationbutton");
    if (button.innerHTML == "Freeze") {
        stopAnimation();
        button.innerHTML = "UnFreeze";
    } else {
        startAnimation();
        button.innerHTML = "Freeze";
    }
}