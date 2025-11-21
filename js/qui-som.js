document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.submint-button');

    contactForm.addEventListener('click', function (e) {
        e.preventDefault();
        let isValid = true;

        // 获取所有 form-group
        const groups = document.querySelectorAll('.form-group');
        groups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const errorInfo = group.querySelector('.error-info');

            if (input && !input.value.trim()) {
                errorInfo.style.display = 'block';   // 显示错误信息
                isValid = false;
            } else {
                errorInfo.style.display = 'none';    // 隐藏错误信息
            }
        });

        if (isValid) {
            //console.log('Formulari enviat:', { nom, email, missatge });
            document.getElementById('success-popup').style.display = 'flex';
            // Show success message
            //alert('Gràcies per contactar amb nosaltres. Aviat ens posarem en contacte.');
            // Reset form
            document.querySelector('.contact-form').reset();
        }

        // Here you can add actual form submission logic, e.g., sending to a server

    });


    // 关闭按钮
    document.querySelector('.close-popup').addEventListener('click', function () {
        document.getElementById('success-popup').style.display = 'none';
    });

    // "Veure més" button interaction
    const veureMesBtn = document.querySelector('.btn-veure-mes');
    if (veureMesBtn) {
        veureMesBtn.addEventListener('click', function () {
            //alert('Més informació sobre col·laboradors properament.');
        });
    }
});

