//? Q1
function handleLinkClick() {
    alert('Link clicked!');
}


//? q2
function showMessage(message) {
    alert(message);
}


//? q3
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


//? q4
var originalImageSrc = "image1.jpeg";
var newImageSrc = "image2.jpeg";

function changeImage() {
    document.getElementById('myImage').src = newImageSrc;
}

function resetImage() {
    document.getElementById('myImage').src = originalImageSrc;
}


//? q5
var counterValue = 0;

function increaseCounter() {
    counterValue++;
    updateCounter();
}

function decreaseCounter() {
    counterValue--;
    updateCounter();
}

function updateCounter() {
    document.getElementById('counter').innerText = counterValue;
}