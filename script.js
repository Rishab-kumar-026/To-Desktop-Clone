const nav_dialogue = document.getElementById("navigation");

function handle(){
    nav_dialogue.classList.toggle('hidden');
}

const box_divs = document.querySelectorAll(".box");

box_divs.forEach((box_div) => {
    box_div.addEventListener("mouseover", () => {
        console.log("hello world");
        box_div.style.backgroundColor = "#FFDEE9";
        box_div.style.backgroundImage = "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)";
        box_div.style.backgroundSize = "cover";
        box_div.style.backgroundRepeat = "no-repeat";
    });

    box_div.addEventListener("mouseout", () => {
        box_div.style.background = "#FBFBFD";
    });
});


