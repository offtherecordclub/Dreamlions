const bin = document.querySelector(".bin");
const items = document.querySelectorAll(".item");
const text = document.querySelector(".text");

// 컵 안에서의 최종 위치(px)
const positions = [
  { left: 180, top: 310 }, // green
  { left: 50, top: 160 }, // pink
  { left: 280, top: 25 }, // yellow
  { left: 100, top: 20 }, // blue
];

items.forEach((item, index) => {
  // 시작 위치 (컵 위)
  item.style.top = "-150px";

  // x 위치 먼저 세팅
  item.style.left = positions[index].left + "px";

  setTimeout(() => {
    item.classList.add("show");
    item.style.top = positions[index].top + "px";
  }, index * 500);
});

// 전부 떨어진 뒤 문구
setTimeout(
  () => {
    text.classList.add("show");
  },
  items.length * 500 + 800,
);
