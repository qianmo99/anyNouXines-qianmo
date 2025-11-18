/**
 * Script para funciones de navegación generales
 * La funcionalidad de menú móvil está en mobile-menu-fix.js
 */
//直接添加菜单功能，确保它肯定能工作\

// 在文档加载完成后以及窗口加载完成后都尝试初始化菜单
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

document.addEventListener('DOMContentLoaded', () => {
    console.log('Navigation.js loaded');

    const languageSelectors = document.querySelectorAll('.language-selector select');
    languageSelectors.forEach(selector => {
        if (!selector) return;

        selector.addEventListener('change', (e) => {
            const selectedLanguage = e.target.value;
            console.log(`Selected language: ${selectedLanguage}`);

            // Almacenar preferencia de idioma
            try {
                localStorage.setItem('selectedLanguage', selectedLanguage);
            } catch (error) {
                console.error('Unable to save language preference', error);
            }
        });

        // Restaurar idioma seleccionado anteriormente
        try {
            const savedLanguage = localStorage.getItem('selectedLanguage');
            if (savedLanguage) {
                selector.value = savedLanguage;
            }
        } catch (error) {
            console.error('Unable to retrieve language preference', error);
        }
    });
});