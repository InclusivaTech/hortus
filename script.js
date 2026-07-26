document.addEventListener('DOMContentLoaded', () => {
    console.log('Hortus Interface Completa Ativada.');

    // Rolagem suave para os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funcionalidade de copiar a chave Pix com um clique
    const copyBtn = document.getElementById('copyPixBtn');
    const pixKeyText = document.getElementById('pixKeyText');
    const copyFeedback = document.getElementById('copyFeedback');

    if (copyBtn && pixKeyText) {
        copyBtn.addEventListener('click', () => {
            const keyToCopy = pixKeyText.innerText;
            navigator.clipboard.writeText(keyToCopy).then(() => {
                copyFeedback.style.display = 'block';
                copyBtn.innerText = '✨ Chave Copiada!';
                setTimeout(() => {
                    copyFeedback.style.display = 'none';
                    copyBtn.innerText = '📋 Copiar Chave Pix';
                }, 3000);
            }).catch(err => {
                console.error('Erro ao copiar Pix: ', err);
            });
        });
    }
});
