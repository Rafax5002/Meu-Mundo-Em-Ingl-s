CREATE DATABASE MeuMundoEmIngles;

USE MeuMundoEmIngles;

-- Criar tabela de usuários
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de categorias
CREATE TABLE categoria (
    idCategoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);


create table indices (
id int primary key auto_increment,
acertos int,
erros int,
fkUsuario int,
foreign key (fkUsuario) references usuario(id),
fkCategoria int,
foreign key (fkCategoria) references categoria(idCategoria));

INSERT INTO categoria (nome) VALUES 
('Gramática'), 
('Vocabulário'), 
('Leitura'), 
('Expressões Idiomáticas');

select * from categoria;

select * from usuario;

select * from indices;

select sum(erros) from indices 
where fkUsuario =3;

select count(fkCategoria) as agregado , categoria.nome, sum(acertos) as acertos, sum(erros) as erros from indices 
join categoria on idCategoria = fkCategoria
where fkUsuario = 2
group by fkCategoria;


select sum(erros) as erros, nome from indices
join categoria on idCategoria = fkCategoria
group by fkCategoria 
order by erros desc;


