// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {

        if (document.documentElement.scrollTop > 10) {
            nav.classList.add("scroll-on");
        }
        else {
            nav.classList.remove("scroll-on");
        }
    }

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(className, start, end, duration) {
        let objs = document.getElementsByClassName(className);
        if (objs.length === 0) return; // Check if elements with the specified class exist

        for (let i = 0; i < objs.length; i++) {
            let obj = objs[i];
            let current = start;
            let range = end - start;
            let increment = end > start ? 1 : -1;
            let step = Math.abs(Math.floor(duration / range));
            let timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
        }
    }
    counter("count1", 0, 1234, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1345, 3000);
    counter("count4", 0, 7202, 3000);
});