document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);

    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
});

function toggleSection(sectionId, button) {
    const section = document.getElementById(sectionId);
    const isHidden = section.classList.contains('hidden');
    section.classList.toggle('hidden', !isHidden);
    button.setAttribute('aria-expanded', !isHidden);
    button.textContent = isHidden ? 'Ocultar Detalhes' : 'Mostrar Detalhes';
}

function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('currentDatetime').textContent = now.toLocaleDateString('pt-BR', options);
}

function handleSubmit(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const form = event.target;
    const formData = new FormData(form);
    const message = `Nome: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMensagem: ${formData.get('message')}`;

    // Exemplo de exibição de mensagem (poderia ser substituído por integração com API ou envio real)
    document.getElementById('formMessage').textContent = `Mensagem enviada: \n${message}`;

    form.reset();
}