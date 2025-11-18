// 页面加载函数
function loadPage(event, url) {
  event.preventDefault(); // 阻止默认跳转

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('加载失败');
      return response.text();
    })
    .then(html => {
      document.getElementById('content').innerHTML = html;
      history.pushState({url: url}, '', url); // 改变 URL
    })
    .catch(err => {
      document.getElementById('content').innerHTML = '<p>加载失败</p>';
      console.error(err);
    });

    //关闭menu
    var mobileMenuBtn = document.querySelector('.mobile-menu');
    var navWrapper = document.querySelector('.nav-wrapper');
    navWrapper.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
}

// 处理浏览器前进/后退
window.addEventListener('popstate', e => {
  if (e.state && e.state.url) {
    loadPageDirect(e.state.url);
  }
});

function loadPageDirect(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
    });
}

// 初始化，加载默认页面
loadPageDirect('home.html');
console.log('loading index.js')