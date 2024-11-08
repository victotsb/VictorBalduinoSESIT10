document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const sector = document.getElementById('sector').value;
    const user = document.getElementById('user').value;
    const priority = document.getElementById('priority').value;

    if (!description || !sector || !user || !priority) {
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description, sector, user, priority })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('message').textContent = 'Cadastro concluído com sucesso!';
            document.getElementById('taskForm').reset();
        } else {
            document.getElementById('message').textContent = 'Ocorreu um erro ao cadastrar a tarefa.';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('message').textContent = 'Ocorreu um erro inesperado.';
    });
});

// Função para buscar os usuários do servidor e preencher o select
function fetchUsers() {
    fetch('/users') // Substitua '/users' pela rota correta do seu servidor
    .then(response => response.json())
    .then(data => {
        const userList = document.getElementById('user');
        data.forEach(user => {
            const option = document.createElement('option');
            option.value = user.id;
            option.textContent = user.name;
            userList.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar usuários:', error);
    });
}

// Chamar a função para buscar os usuários ao carregar a página
fetchUsers();
