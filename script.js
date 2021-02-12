const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    console.log(clickTime);
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      remove()
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const position_x = e.clientX;
  const position_y = e.clientY;

  const left = e.target.offsetLeft;
  const top = e.target.offsetTop;

  const x_insert = position_x - left;
  const y_insert = position_y - top;

  heart.style.top = `${y_insert}px`;
  heart.style.left = `${x_insert}px`;

  loveMe.appendChild(heart);

  timesClicked = timesClicked + 1;
  times.innerHTML = timesClicked;

  setTimeout(() => heart.remove(), 2000)
};

