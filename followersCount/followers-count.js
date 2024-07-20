let count = 0;
console.log(count);

function increaseCount() {
    console.log("increaseCount was called");
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    console.log("displayCount was called");
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    console.log("checkCountValue was called");
    if (count === 10) {
        alert("Your Insta post gained 10 followers! Congrats!");
    } else if (count === 20) {
        alert("Your Insta post gained 20 followers! Congrats!");
    }
}
