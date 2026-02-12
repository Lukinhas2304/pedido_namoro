var button = document.getElementById("read_button");

button.addEventListener("click", function() {
    var card = document.querySelector(".carta");
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent = "Read Less";
    } else {
        button.textContent = "Read More";
    }
        
});