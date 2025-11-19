function loadFooter() {
  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("footerContainer");
      container.innerHTML = html;
    });
}

loadFooter(); // 页面加载时执行