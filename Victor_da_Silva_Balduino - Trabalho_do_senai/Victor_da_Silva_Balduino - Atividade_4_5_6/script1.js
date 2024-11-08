document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        document.getElementById('message').textContent = 'Por favor, insira um email válido.';
        return;
    }

    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('message').textContent = 'Cadastro concluído com sucesso!';
            document.getElementById('userForm').reset();
        } else {
            document.getElementById('message').textContent = 'Ocorreu um erro ao cadastrar o usuário.';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('message').textContent = 'Ocorreu um erro inesperado.';
    });
});
