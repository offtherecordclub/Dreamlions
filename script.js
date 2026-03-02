const bin = document.querySelector(".bin");
const items = document.querySelectorAll(".item");
const text = document.querySelector(".text");

// 컵 안에서의 최종 위치 (비율로 설정)
const positions = [
  { left: 0.45, top: 0.63 }, // green
  { left: 0.1, top: 0.36 }, // pink
  { left: 0.45, top: 0.03 }, // yellow
  { left: 0.1, top: 0.05 }, // blue
];

items.forEach((item, index) => {
  const binRect = bin.getBoundingClientRect();

  // 시작 위치 (컵 위)
  item.style.top = "-150px";

  // left 위치 (컵 기준 비율)
  item.style.left = binRect.width * positions[index].left + "px";

  setTimeout(() => {
    item.classList.add("show");
    item.style.top = binRect.height * positions[index].top + "px";
  }, index * 500);
});

// 전부 떨어진 뒤 문구
setTimeout(
  () => {
    text.classList.add("show");
  },
  items.length * 500 + 800,
);
