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
            
            <hr>
        `;

        feedbacksContainer.appendChild(feedbackElement);
    });


});
