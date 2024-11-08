// Cadastro de tarefa
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
            carregarTarefas(); // Atualiza a lista de tarefas
        } else {
            document.getElementById('message').textContent = 'Ocorreu um erro ao cadastrar a tarefa.';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('message').textContent = 'Ocorreu um erro inesperado.';
    });
});

// Buscar usuários do servidor
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

// Chama a função para buscar usuários ao carregar a página
fetchUsers();

// Excluir tarefa
function excluirTarefa(tarefaId) {
    const modal = document.getElementById('deleteModal');
    const confirmarBtn = document.getElementById('confirmDelete');

    modal.style.display = 'block';

    confirmarBtn.onclick = function() {
        fetch(`/api/tarefa/${tarefaId}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            // Após a exclusão, recarrega as tarefas
            carregarTarefas();
            modal.style.display = 'none';
        });
    };
}

// Fechar modal de exclusão
function fecharModal() {
    document.getElementById('deleteModal').style.display = 'none';
}

// Editar tarefa
function editarTarefa(tarefaId) {
    window.location.href = `editar-tarefa.html?id=${tarefaId}`;
}

// Alterar status da tarefa
function alterarStatus(tarefaId) {
    const novoStatus = document.getElementById(`status${tarefaId}`).value;
    fetch(`/api/tarefa/${tarefaId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: novoStatus }),
    })
    .then(response => response.json())
    .then(data => {
        // Atualiza a coluna com o novo status
        carregarTarefas();
    });
}

// Carregar tarefas ao carregar a página
window.onload = function() {
    carregarTarefas();
};

// Função para carregar tarefas
function carregarTarefas() {
    // Suponha que você tenha uma API para buscar as tarefas
    fetch('/api/tarefas')
        .then(response => response.json())
        .then(tarefas => {
            const todoColumn = document.getElementById('todo-list');
            const doingColumn = document.getElementById('inprogress-list');
            const doneColumn = document.getElementById('done-list');

            // Limpar colunas antes de adicionar novas tarefas
            todoColumn.innerHTML = '';
            doingColumn.innerHTML = '';
            doneColumn.innerHTML = '';

            tarefas.forEach(tarefa => {
                const tarefaCard = criarCardTarefa(tarefa);
                if (tarefa.status === 'A Fazer') {
                    todoColumn.appendChild(tarefaCard);
                } else if (tarefa.status === 'Fazendo') {
                    doingColumn.appendChild(tarefaCard);
                } else if (tarefa.status === 'Pronto') {
                    doneColumn.appendChild(tarefaCard);
                }
            });
        });
}

// Função para criar o card de tarefa
function criarCardTarefa(tarefa) {
    const card = document.createElement('div');
    card.classList.add('task-card');
    card.innerHTML = `
        <p><strong>Descrição:</strong> ${tarefa.descricao}</p>
        <p><strong>Setor:</strong> ${tarefa.setor}</p>
        <p><strong>Prioridade:</strong> ${tarefa.prioridade}</p>
        <p><strong>Usuário:</strong> ${tarefa.usuario}</p>
        <select name="status" id="status${tarefa.id}" onchange="alterarStatus(${tarefa.id})">
            <option value="A Fazer" ${tarefa.status === 'A Fazer' ? 'selected' : ''}>A Fazer</option>
            <option value="Fazendo" ${tarefa.status === 'Fazendo' ? 'selected' : ''}>Fazendo</option>
            <option value="Pronto" ${tarefa.status === 'Pronto' ? 'selected' : ''}>Pronto</option>
        </select>
        <button onclick="editarTarefa(${tarefa.id})">Editar</button>
        <button onclick="excluirTarefa(${tarefa.id})">Excluir</button>
    `;
    return card;
}
