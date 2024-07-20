let count = 0;
console.log(count);

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Insta post gained 10 followers! Congrats!");
    } else if (count === 20) {
        alert("Your Insta post gained 20 followers! Congrats!");
    }
}

function resetCount() {
    count = 0
    document.getElementById("countDisplay").innerHTML = count;
    alert("Followers count has been reset.")
}
