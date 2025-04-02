let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";  // Corrected to use style

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";  // Animate current letters out
        }, i * 80);
    });

    nextWord.style.opacity = "1";  // Corrected to use style
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";  // Prepare next letters
        setTimeout(() => {
            letter.className = "letter in";  // Animate next letters in
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;  // Update index
    setTimeout(changeText, 3000);  // Schedule next change
};

// Start the animation
changeText();

window.addEventListener("scroll", function() {
    let word = document.querySelector(".change-text h3 .word");
    let homeSection = document.querySelector(".home");
  
    if (window.scrollY > homeSection.clientHeight) {
      word.style.opacity = "0"; // Hide when scrolling past the home section
    } else {
      word.style.opacity = "1"; // Show when inside home section
    }
  });
  

//activeMenu////////////////////////////////////////////////////
  let menuLi = document.querySelectorAll('header ul li a');
  let section = document.querySelector('section');

  function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 <section[len].offsetTop){
        menuLi.forEach(sec => sec.classList.remove("active"));
        menuLi[len].classList.add("active")
    }
    activeMenu();
    window.addEventListener("scroll",activeMenu);
  }

  // header sticky 

const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY>50)
})
 

// toggle
let menuIcons = document.querySelectorAll("#menu-icon");
let navlists = document.querySelectorAll(".navlist");

menuIcons.forEach((menuIcon) => {
    menuIcon.onclick = () => {menuIcon.classList.toggle("bx-x");
        navlists.forEach((navlist) => {navlist.classList.toggle("open");
        });
    };

});




//circle skills
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const dots = parseInt(circle.getAttribute("data-dots"));
        const marked = parseInt(circle.getAttribute("data-percent"));
        const percent = Math.floor(dots * marked / 100); // Correctly calculate 90%

        const rotate = 360 / dots;
        let points = "";

        for (let i = 0; i < dots; i++) {
            const isMarked = i < percent ? "marked" : "";
            points += `<div class="points ${isMarked}" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }

        circle.innerHTML = points; // Correctly injects points into the circle
    });
});
