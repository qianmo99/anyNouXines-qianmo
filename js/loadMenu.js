function loadNav() {
  fetch("menu.html")
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("navContainer");
      container.innerHTML = html;

      // 动态加载导航栏 JS
      const script = document.createElement("script");
      script.src = "/js/menu.js";
      document.body.appendChild(script);
    });
}

loadNav(); // 页面加载时执行