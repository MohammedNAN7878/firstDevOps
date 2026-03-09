const button = document.getElementById("colorBtn");

button.addEventListener("click", function() {

    const colors = ["#ff6b6b", "#6bcB77", "#4d96ff", "#ffd93d", "#845ec2"];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;

});