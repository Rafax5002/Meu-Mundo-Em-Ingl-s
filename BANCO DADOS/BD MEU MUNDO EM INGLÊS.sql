CREATE DATABASE MeuMundoEmIngles;

USE MeuMundoEmIngles;


CREATE TABLE Usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    data_cadastro DATE NOT NULL
);


CREATE TABLE Conteudos (
    id_conteudo INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    data_publicacao DATE NOT NULL,
    tipo_conteudo VARCHAR(10) NOT NULL,
    CONSTRAINT chk_tipo_conteudo CHECK (tipo_conteudo IN ('artigo', 'video', 'podcast'))
);


CREATE TABLE Categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(100) NOT NULL
);


CREATE TABLE Conteudo_Categorias (
    id_conteudo INT,
    id_categoria INT,
    PRIMARY KEY (id_conteudo, id_categoria),
    FOREIGN KEY (id_conteudo) REFERENCES Conteudos(id_conteudo),
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);


CREATE TABLE Comentarios (
    id_comentario INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_conteudo INT,
    texto_comentario TEXT NOT NULL,
    data_comentario DATE NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_conteudo) REFERENCES Conteudos(id_conteudo)
);


CREATE TABLE Progresso_Aprendizado (
    id_progresso INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_conteudo INT,
    status VARCHAR(20) NOT NULL,
    data_inicio DATE,
    data_conclusao DATE,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_conteudo) REFERENCES Conteudos(id_conteudo),
    CONSTRAINT chk_status CHECK (status IN ('não iniciado', 'em progresso', 'concluído'))
);


CREATE TABLE Simulacoes (
    id_simulacao INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    data_simulacao DATE NOT NULL,
    resultado VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);


CREATE TABLE Perguntas (
    id_pergunta INT AUTO_INCREMENT PRIMARY KEY,
    texto_pergunta TEXT NOT NULL,
    resposta_correta VARCHAR(100) NOT NULL
);


CREATE TABLE Respostas (
    id_resposta INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_pergunta INT,
    resposta_usuario VARCHAR(100) NOT NULL,
    correta BOOLEAN NOT NULL,
    data_resposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_pergunta) REFERENCES Perguntas(id_pergunta)
);
