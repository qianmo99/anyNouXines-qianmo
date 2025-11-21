/* 你的五张图片（可以替换成自己的） */
let keys = {
    'assets/images/2025.jpg': { year: '2025', link: 'galeria-2025.html' },
    'assets/images/2023.webp': { year: '2023', link: '404.html' },
    'assets/images/2022.png': { year: '2022', link: '404.html' },
    'assets/images/2021.jpeg': { year: '2021', link: '404.html' },
    'assets/images/2017.jpg': { year: '2017', link: '404.html' }
};
var images = Object.keys(keys);

const moons = document.querySelectorAll(".moon-phase");

/* 刷新月亮显示 */
function refreshDisplay() {
    moons.forEach((el, i) => {
        el.style.opacity = 0;   // 先淡出
    });
    moons.forEach((el, i) => {
        el.style.backgroundImage = `url(${images[i]})`;
        el.style.opacity = 1;  // 淡入
    });
    setTimeout(() => {

    }, 1); // 300ms 后换图，再用 CSS 淡入
}

/* 初始化 */
refreshDisplay();

/* 右按钮 → 整体右移 */
document.querySelector(".right-btn").onclick = () => {
    images.unshift(images.pop());
    refreshDisplay();
};

/* 左按钮 ← 整体左移 */
document.querySelector(".left-btn").onclick = () => {
    images.push(images.shift());
    refreshDisplay();
};

/* 自动轮播，每 3 秒切换一次 */
setInterval(() => {
    images.push(images.shift()); // 左移一位
    refreshDisplay();
}, 10000);