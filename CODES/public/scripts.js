document.addEventListener('DOMContentLoaded', () => {
    // Função genérica para manipulação de formulários
    function handleFormSubmit(formId, successMessage) {
        document.getElementById(formId).addEventListener('submit', function(event) {
            event.preventDefault();
            alert(successMessage);
        });
    }

    // Manipulação de eventos para os formulários
    handleFormSubmit('cadastroForm', 'Cadastro realizado com sucesso!');
    handleFormSubmit('loginForm', 'Login realizado com sucesso!');

    // Função para iniciar o quiz
    function startQuiz() {
        const category = document.getElementById('category').value;
        if (!category) {
            alert('Por favor, selecione uma categoria.');
            return;
        }

        const selectedQuestions = questions[category];
        const questionsContainer = document.getElementById('questionsContainer');
        questionsContainer.innerHTML = '';

        selectedQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `
                <p>${index + 1}. ${q[0]}</p>
                ${q[1].map((option, i) => `
                    <input type="radio" name="q${index}" value="${option}"> (${String.fromCharCode(97 + i)}) ${option}<br>
                `).join('')}
            `;
            questionsContainer.appendChild(questionDiv);
        });

        document.getElementById('quizForm').style.display = 'block';
    }

    // Função para enviar o quiz
    function submitQuiz() {
        const category = document.getElementById('category').value;
        const selectedQuestions = questions[category];
        let score = 0;

        selectedQuestions.forEach((q, index) => {
            const userAnswer = document.querySelector(`input[name="q${index}"]:checked`);
            if (userAnswer && userAnswer.value === q[2]) {
                score++;
            }
        });

        alert(`Você acertou ${score} de ${selectedQuestions.length} perguntas!`);
    }

    // Manipulação do menu mobile
    const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");

    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });

    menuCloseButton.addEventListener("click", () => menuOpenButton.click());
    navbarLinks.forEach((link) => {
        link.addEventListener("click", () => menuOpenButton.click());
    });

    // Inicialização do Swiper
    let swiper = new Swiper(".slider-wrapper", {
        loop: true,
        grabCursor: true,
        spaceBetween: 25,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    // Dados para os gráficos
    const categoriaData = {
        labels: ['Gramática', 'Vocabulário', 'Leitura', 'Expressões'],
        datasets: [{
            label: 'Categorias Selecionadas',
            data: [50, 30, 40, 20],
            backgroundColor: ['#0044cc', '#cc0000', '#00cc66', '#ffcc00']
        }]
    };

    const perguntaErrosData = {
        labels: ['Pergunta 1', 'Pergunta 2', 'Pergunta 3', 'Pergunta 4'],
        datasets: [{
            label: 'Erros',
            data: [10, 20, 5, 15],
            backgroundColor: ['#cc0000', '#cc0000', '#cc0000', '#cc0000']
        }]
    };

    const respostasData = {
        labels: ['Certas', 'Erradas'],
        datasets: [{
            label: 'Respostas',
            data: [70, 30],
            backgroundColor: ['#0044cc', '#cc0000']
        }]
    };

    // Configuração dos gráficos
    const categoriaCtx = document.getElementById('categoriaMaisSelecionada').getContext('2d');
    new Chart(categoriaCtx, {
        type: 'pie',
        data: categoriaData,
        options: { responsive: true }
    });

    const perguntaErrosCtx = document.getElementById('perguntaMaisErros').getContext('2d');
    new Chart(perguntaErrosCtx, {
        type: 'bar',
        data: perguntaErrosData,
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } }
        }
    });

    const respostasCtx = document.getElementById('respostasCertasErradas').getContext('2d');
    new Chart(respostasCtx, {
        type: 'doughnut',
        data: respostasData,
        options: { responsive: true }
    });
});

