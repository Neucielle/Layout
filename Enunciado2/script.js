function adicionarTarefa(periodo) {
    const inputElement = document.getElementById('nova-tarefa-' + periodo);
    const novaTarefa = inputElement.value.trim();

    if (novaTarefa !== '') {
        const listaTarefas = document.getElementById('tarefas-' + periodo);
        const novoItem = document.createElement('li');

        const spanTarefa = document.createElement('span');
        spanTarefa.textContent = novaTarefa;
        novoItem.appendChild(spanTarefa);

        const botoesDiv = document.createElement('div');
        botoesDiv.className = 'botoes';

        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.type = 'button';
        botaoEditar.onclick = function() {
            editarTarefa(spanTarefa);
        };
        botoesDiv.appendChild(botaoEditar);

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.type = 'button';
        botaoRemover.onclick = function() {
            removerTarefa(novoItem);
        };
        botoesDiv.appendChild(botaoRemover);

        const botaoConfirmar = document.createElement('button');
        botaoConfirmar.textContent = 'Feito';
        botaoConfirmar.type = 'button';
        botaoConfirmar.onclick = function() {
            confirmarTarefa(spanTarefa);
        };
        botoesDiv.appendChild(botaoConfirmar);

        novoItem.appendChild(botoesDiv);
        listaTarefas.appendChild(novoItem);
        inputElement.value = '';
    }
}

function removerTarefa(itemTarefa) {
    const listaTarefas = itemTarefa.parentNode;
    listaTarefas.removeChild(itemTarefa);
}

function editarTarefa(spanTarefa) {
    const novoDescricao = prompt('Edite a descrição da tarefa:', spanTarefa.textContent);
    if (novoDescricao !== null && novoDescricao.trim() !== '') {
        spanTarefa.textContent = novoDescricao.trim();
    }
}

function confirmarTarefa(spanTarefa) {
    spanTarefa.style.textDecoration = 'line-through';
}

document.querySelectorAll('.botoes button').forEach(botao => {
    botao.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
