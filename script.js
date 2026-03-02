const items = document.querySelectorAll(".item");
const text = document.querySelector(".text");

items.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add("show");
  }, index * 700); // 하나씩 순서대로 떨어짐
});

// 전부 떨어진 후 문구 등장
setTimeout(
  () => {
    text.classList.add("show");
  },
  items.length * 700 + 800,
);
