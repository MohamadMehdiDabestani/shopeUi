const tooltipEls = document.querySelectorAll("[data-tooltip]");
const tooltip = document.querySelector(".tooltip");
const buttonsEf = document.querySelectorAll(".button.button-ef");
const horizontalProduct = document.querySelectorAll("[data-postId]");
tooltipEls.forEach((el) => {
  el.addEventListener("mouseover", () => {
    tooltip.style.top = `${el.offsetTop + 25}px`;
    tooltip.style.left = `${el.offsetLeft}px`;
    tooltip.style.opacity = 1;
    let text = el.getAttribute("data-tooltip");
    tooltip.innerHTML = text;
  });
  el.addEventListener("mouseout", () => {
    tooltip.style.opacity = 0;
  });
});

const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
});
buttonsEf.forEach((b) => {
  b.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const top = e.target.offsetTop;
    const left = e.target.offsetLeft;
    const xInside = x - left;
    const yInside = y - top;
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;
    console.log(yInside, xInside);
    this.appendChild(circle);
    setTimeout(() => {
      circle.remove();
    }, 700);
  });
});
horizontalProduct.forEach((el) => {
  
});
