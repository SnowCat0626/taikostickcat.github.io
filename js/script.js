// 頁面載入開場動畫
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// 只淡出背景，不影響標題
window.addEventListener("scroll", () => {
  const smoke = document.querySelector(".video-bg");
  const glow = document.querySelector(".glow-layer");

  // 限制透明度最小值，避免整個消失
  const fade = 1 - window.scrollY / 600;
  const newOpacity = Math.max(fade, 0.3);

  if (smoke) smoke.style.opacity = newOpacity;
  if (glow) glow.style.opacity = Math.max(newOpacity, 0.4);
});

// 滾動顯示 section
const fadeSections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });

fadeSections.forEach(section => observer.observe(section));

// 展開 / 收起其他玩家
const toggleBtn = document.getElementById("toggle-others");
const otherList = document.querySelector(".other-list");
if (toggleBtn && otherList) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = otherList.classList.toggle("show");
    toggleBtn.textContent = isOpen ? "▲ 收起其他玩家 ▲" : "▼ 展開更多玩家 ▼";
  });
}


