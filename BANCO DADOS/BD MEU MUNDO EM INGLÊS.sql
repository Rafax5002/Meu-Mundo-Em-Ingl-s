CREATE DATABASE MeuMundoEmIngles;

USE MeuMundoEmIngles;

-- Criar tabela de usuários
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de categorias
CREATE TABLE categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

-- Criar tabela de perguntas
CREATE TABLE perguntas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    categoria_id INT,
    pergunta TEXT NOT NULL,
    resposta_correta VARCHAR(255) NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Criar tabela de respostas
CREATE TABLE respostas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pergunta_id INT,
    resposta VARCHAR(255) NOT NULL,
    FOREIGN KEY (pergunta_id) REFERENCES perguntas(id)
);

-- Inserir categorias
INSERT INTO categorias (nome) VALUES 
('Gramática'), 
('Vocabulário'), 
('Leitura'), 
('Expressões Idiomáticas');

-- Inserir perguntas e respostas corretas
INSERT INTO perguntas (categoria_id, pergunta, resposta_correta) VALUES 
(1, "Qual é a forma correta do verbo no passado: 'She ____ to the store yesterday'?", 'went'),
(1, "Complete a frase: 'They ____ playing soccer when it started to rain.'", 'were'),
(1, "Qual a forma correta do verbo na frase: 'If I ____ rich, I would travel the world.'", 'were'),
(1, "Complete a frase: 'I have never ____ to Japan.'", 'gone'),
(1, "Qual a forma correta da sentença interrogativa: '____ you ever been to London?'", 'Have'),

(2, "Qual é o sinônimo de 'happy'?", 'joyful'),
(2, "Complete a frase: 'The antonym of 'big' is ____.'", 'small'),
(2, "Qual é um sinônimo da palavra 'frequent'?", 'often'),
(2, "Complete a frase: 'She is very ____ and always helps others.'", 'kind'),
(2, "Qual é o contrário de 'begin'?", 'end'),

(3, "Leia a frase e responda: 'Jane went to the market and bought apples and oranges. What did Jane buy?'", 'Maçãs e Laranjas'),
(3, "Leia o parágrafo e responda: 'Tom has a dog named Max. Every morning, Tom takes Max for a walk in the park.' Quem é Max?", 'Cachorro do Tom'),
(3, "Leia a frase e responda: 'Sarah loves to read books. She goes to the library every weekend.' Onde Sarah vai todo fim de semana?", 'A biblioteca'),
(3, "Leia o parágrafo e responda: 'The sun is shining and the sky is clear. It is a perfect day for a picnic.' Como está o clima?", 'Sunny'),
(3, "Leia a frase e responda: 'Mark works as a doctor. He loves helping people and making them feel better.' Qual é a profissão de Mark?", 'Médico'),

(4, "O que significa a expressão idiomática 'Break the ice'?", 'Iniciar uma conversa em uma situação desconfortável'),
(4, "Qual é o significado da expressão 'Hit the books'?", 'Começar a estudar seriamente'),
(4, "O que significa a expressão 'Let the cat out of the bag'?", 'Revelar um segredo acidentalmente'),
(4, "Qual é o significado da expressão 'Bite the bullet'?", 'Enfrentar uma situação difícil com coragem'),
(4, "O que significa a expressão 'Spill the beans'?", 'Confessar ou revelar um segredo');

-- Inserir respostas para cada pergunta
INSERT INTO respostas (pergunta_id, resposta) VALUES 
(1, 'go'), (1, 'went'), (1, 'goes'), (1, 'gone'),
(2, 'is'), (2, 'were'), (2, 'was'), (2, 'are'),
(3, 'am'), (3, 'was'), (3, 'were'), (3, 'be'),
(4, 'go'), (4, 'went'), (4, 'gone'), (4, 'going'),
(5, 'Has'), (5, 'Had'), (5, 'Have'), (5, 'Did'),

(6, 'sad'), (6, 'joyful'), (6, 'angry'), (6, 'tired'),
(7, 'large'), (7, 'small'), (7, 'huge'), (7, 'tall'),
(8, 'rare'), (8, 'often'), (8, 'never'), (8, 'sometimes'),
(9, 'mean'), (9, 'kind'), (9, 'selfish'), (9, 'rude'),
(10, 'start'), (10, 'end'), (10, 'continue'), (10, 'open'),

(11, 'Maçãs e Bananas'), (11, 'Laranjas e Bananas'), (11, 'Maçãs e Laranjas'), (11, 'Bananas e Uvas'),
(12, 'Amigo do Tom'), (12, 'Irmão do Tom'), (12, 'Cachorro do Tom'), (12, 'Papagaio do Tom'),
(13, 'Ao parque'), (13, 'A biblioteca'), (13, 'A uma loja'), (13, 'A academia'),
(14, 'Rainy'), (14, 'Snowy'), (14, 'Sunny'), (14, 'Cloudy'),
(15, 'Professor'), (15, 'Médico'), (15, 'Engenheiro'), (15, 'Piloto'),

(16, 'Quebrar o gelo literal'), (16, 'Iniciar uma conversa em uma situação desconfortável'), (16, 'Ficar nervoso'), (16, 'Refrigerar algo'),
(17, 'Acertar os livros fisicamente'), (17, 'Ler casualmente'), (17, 'Começar a estudar seriamente'), (17, 'Arrumar a estante de livros'),
(18, 'Deixar o gato sair da bolsa'), (18, 'Revelar um segredo acidentalmente'), (18, 'Cuidar de um animal de estimação'), (18, 'Ser cauteloso'),
(19, 'Morder uma bala de verdade'), (19, 'Enfrentar uma situação difícil com coragem'), (19, 'Fugir de um problema'), (19, 'Tomar uma decisão impulsiva'),
(20, 'Derramar feijões literal'), (20, 'Confessar ou revelar um segredo'), (20, 'Cozinhar algo'), (20, 'Guardar um segredo');
