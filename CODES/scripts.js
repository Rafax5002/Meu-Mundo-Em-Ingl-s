document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro realizado com sucesso!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login realizado com sucesso!');
});

function submitQuiz() {
    alert('Quiz enviado com sucesso!');
}
const questions = {
    grammar: [
        ["Qual é a forma correta do verbo no passado: 'She ____ to the store yesterday'?", ["go", "went", "goes", "gone"], "went"],
        ["Complete a frase: 'They ____ playing soccer when it started to rain.'", ["is", "were", "was", "are"], "were"],
        ["Qual a forma correta do verbo na frase: 'If I ____ rich, I would travel the world.'", ["am", "was", "were", "be"], "were"],
        ["Complete a frase: 'I have never ____ to Japan.'", ["go", "went", "gone", "going"], "gone"],
        ["Qual a forma correta da sentença interrogativa: '____ you ever been to London?'", ["Has", "Had", "Have", "Did"], "Have"],
        ["Complete a frase: 'She ____ read a book when her friend arrived.'", ["has", "have", "had", "having"], "had"],
        ["Qual a forma correta: 'The car is ____ expensive than the bike.'", ["more", "most", "many", "much"], "more"],
        ["Complete a frase: 'I usually ____ breakfast at 7 AM.'", ["have", "had", "has", "having"], "have"],
        ["Qual o advérbio correto para completar a frase: 'She sings ____.'", ["beautiful", "beautifully", "beauty", "beautify"], "beautifully"],
        ["Complete a frase: 'They ____ playing soccer for two hours.'", ["has been", "were", "have been", "be"], "have been"]
    ],
    vocabulary: [
        ["Qual é o sinônimo de 'happy'?", ["sad", "joyful", "angry", "tired"], "joyful"],
        ["Complete a frase: 'The antonym of 'big' is ____.'", ["large", "small", "huge", "tall"], "small"],
        ["Qual é o significado da palavra 'frequent'?", ["rare", "often", "never", "sometimes"], "often"],
        ["Complete a frase: 'She is very ____ and always helps others.'", ["mean", "kind", "selfish", "rude"], "kind"],
        ["Qual é o contrário de 'begin'?", ["start", "end", "continue", "open"], "end"],
        ["Complete a frase: 'A person who writes books is called an ____.'", ["artist", "engineer", "author", "actor"], "author"],
        ["Qual é o significado da palavra 'ancient'?", ["old", "new", "modern", "recent"], "old"],
        ["Complete a frase: 'The opposite of 'dark' is ____.'", ["black", "light", "blue", "white"], "light"],
        ["Qual é o sinônimo de 'intelligent'?", ["smart", "dull", "foolish", "silly"], "smart"],
        ["Complete a frase: 'She was ____ by the beauty of the sunset.'", ["bored", "amazed", "annoyed", "uninterested"], "amazed"]
    ],
    reading: [
        ["Leia a frase e responda: 'Jane went to the market and bought apples and oranges. What did Jane buy?'", ["Apples and bananas", "Oranges and bananas", "Apples and oranges", "Bananas and grapes"], "Apples and oranges"],
        ["Leia o parágrafo e responda: 'Tom has a dog named Max. Every morning, Tom takes Max for a walk in the park.' Quem é Max?", ["Tom's friend", "Tom's brother", "Tom's dog", "Tom's cat"], "Tom's dog"],
        ["Leia a frase e responda: 'Sarah loves to read books. She goes to the library every weekend.' Onde Sarah vai todo fim de semana?", ["To the park", "To the library", "To the store", "To the gym"], "To the library"],
        ["Leia o parágrafo e responda: 'The sun is shining and the sky is clear. It is a perfect day for a picnic.' Como está o tempo?", ["Rainy", "Snowy", "Sunny", "Cloudy"], "Sunny"],
        ["Leia a frase e responda: 'Mark works as a doctor. He loves helping people and making them feel better.' Qual é a profissão de Mark?", ["Teacher", "Doctor", "Engineer", "Pilot"], "Doctor"],
        ["Leia a frase e responda: 'Emily is baking a cake for her friend's birthday party.' O que Emily está fazendo?", ["Baking cookies", "Baking a cake", "Baking bread", "Baking a pie"], "Baking a cake"],
        ["Leia o parágrafo e responda: 'The river flows calmly through the valley, surrounded by green hills and colorful flowers.' O que cerca o rio?", ["Mountains and trees", "Hills and flowers", "Buildings and cars", "Deserts and rocks"], "Hills and flowers"],
        ["Leia a frase e responda: 'The children are playing in the playground. They are having a lot of fun.' Onde as crianças estão brincando?", ["In the classroom", "In the garden", "In the playground", "In the living room"], "In the playground"],
        ["Leia a frase e responda: 'Anna is learning to play the piano. She practices every day.' O que Anna está aprendendo?", ["To play the guitar", "To play the piano", "To play the violin", "To play the drums"], "To play the piano"],
        ["Leia o parágrafo e responda: 'The museum has many interesting exhibits, including ancient artifacts and modern art.' O que o museu tem?", ["Ancient artifacts and modern art", "Books and magazines", "Food and drinks", "Clothes and shoes"], "Ancient artifacts and modern art"]
    ],
    idioms: [
        ["Qual é o significado da expressão 'break the ice'?", ["Ficar com frio", "Começar uma conversa", "Quebrar algo", "Sentir-se nervoso"], "Começar uma conversa"],
        ["Complete a expressão: 'It's a piece of ____.'", ["bread", "cake", "pie", "cookie"], "cake"],
        ["Qual é o significado da expressão 'kick the bucket'?", ["Jogar o balde", "Morrer", "Chutar o balde", "Ficar bravo"], "Morrer"],
        ["Complete a expressão: 'Hit the ____ on the head.'", ["nail", "hammer", "screw", "bolt"], "nail"],
        ["Qual é o significado da expressão 'let the cat out of the bag'?", ["Soltar um gato", "Contar um segredo", "Guardar um segredo", "Comprar algo"], "Contar um segredo"],
        ["Complete a expressão: 'Bite off more than you can ____.'", ["chew", "eat", "swallow", "digest"], "chew"],
        ["Qual é o significado da expressão 'cost an arm and a leg'?", ["Ser barato", "Ser muito caro", "Machucar-se", "Ficar doente"], "Ser muito caro"],
        ["Complete a expressão: 'Under the weather.'", ["Cansado", "Doente", "Triste", "Bravo"], "Doente"],
        ["Qual é o significado da expressão 'pull someone's leg'?", ["Puxar a perna de alguém", "Enganar alguém", "Ajudar alguém", "Chutar alguém"], "Enganar alguém"]
    ]
};

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
            <input type="radio" name="q${index}" value="a"> (a) ${q[1][0]}<br>
            <input type="radio" name="q${index}" value="b"> (b) ${q[1][1]}<br>
            <input type="radio" name="q${index}" value="c"> (c) ${q[1][2]}<br>
            <input type="radio" name="q${index}" value="d"> (d) ${q[1][3]}<br>
        `;
        questionsContainer.appendChild(questionDiv);
    });

    document.getElementById('quizForm').style.display = 'block';
}

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

    alert(`Você acertou ${score} de ${selectedQuestions.length} perguntas!`)}