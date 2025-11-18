
console.log("menu js running");
document.addEventListener('DOMContentLoaded', initializeMenu);
window.addEventListener('load', initializeMenu);

// 直接实现菜单功能
function initializeMenu() {
    console.log('直接初始化菜单');

    // 获取菜单元素
    var mobileMenuBtn = document.querySelector('.mobile-menu');
    var navWrapper = document.querySelector('.nav-wrapper');

    if (mobileMenuBtn && navWrapper) {
        // 移除任何现有事件监听器
        mobileMenuBtn.onclick = null;
        var newMobileBtn = mobileMenuBtn.cloneNode(true);
        mobileMenuBtn.parentNode.replaceChild(newMobileBtn, mobileMenuBtn);
        mobileMenuBtn = newMobileBtn;

        // 添加点击事件
        mobileMenuBtn.addEventListener('click', function (e) {
            console.log('内联脚本：菜单按钮被点击');
            e.preventDefault();
            e.stopPropagation();

            // 切换菜单显示状态
            navWrapper.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');

            console.log('菜单状态:', navWrapper.classList.contains('active') ? '显示' : '隐藏');
        });
    } else {
        console.error('未找到菜单元素');
    }
}


// Language selector functionality

const languageSelectors = document.querySelectorAll('.language-selector');

languageSelectors.forEach(selector => {
    const currentLang = selector.querySelector('.lang-current');
    const langItems = selector.querySelectorAll('.lang-item');

    langItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            const selectedLang = this.getAttribute('data-lang');
            const selectedText = this.textContent;

            // Update current language display
            currentLang.textContent = selectedText;

            // Update active state
            langItems.forEach(langItem => {
                langItem.classList.remove('active');
            });
            this.classList.add('active');

            // Here you could add actual language switching functionality
            console.log('Language switched to:', selectedLang);
        });
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
    if (!e.target.closest('.language-selector')) {
        // Optional: Close dropdowns if needed
    }
});


initializeMenu()