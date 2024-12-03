// Carregar os feedbacks do localStorage
window.addEventListener('DOMContentLoaded', function() {
    const feedbacksContainer = document.getElementById('feedbacks-container');

    // Recupera os feedbacks armazenados
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

    // Verifica se há feedbacks
    if (feedbacks.length === 0) {
        feedbacksContainer.innerHTML = '<p>Não há feedbacks para exibir.</p>';
        return;
    }

    // Exibe os feedbacks
    feedbacks.forEach((feedback, index) => {
        const feedbackElement = document.createElement('div');
        feedbackElement.classList.add('feedback');

        feedbackElement.innerHTML = `
            <h3>${feedback.nome} - ${feedback.data}</h3>
            <p><strong>Avaliação:</strong> ${feedback.rating ? feedback.rating + ' Estrela(s)' : 'Sem avaliação'}</p>
            <p><strong>Comentário:</strong> ${feedback.feedback}</p>
            <button class="delete-feedback" data-index="${index}">Excluir</button>
            <hr>
        `;

        feedbacksContainer.appendChild(feedbackElement);
    });

    // Adicionar evento para excluir feedback
    feedbacksContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-feedback')) {
            const index = event.target.getAttribute('data-index');
            
            // Remove o feedback do array
            feedbacks.splice(index, 1);

            // Atualiza o localStorage
            localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

            // Atualiza a lista na página
            feedbacksContainer.innerHTML = ''; // Limpa a exibição atual
            // Recarrega os feedbacks
            window.dispatchEvent(new Event('DOMContentLoaded'));
        }
    });
});
