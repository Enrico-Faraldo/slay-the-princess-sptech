create database if not exists slay_the_princess;
use slay_the_princess;

create table if not exists usuario(
id int primary key auto_increment, 
nome_usuario varchar(50), 
email varchar(255), 
senha varchar(255),
personagem_favorito varchar(20),
unique (email),
unique (nome_usuario)
);

create table if not exists postagem(
id int primary key auto_increment, 
conteudo text, 
data_postagem datetime,
fkusuario int,
foreign key (fkusuario) references usuario(id),
key (fkusuario)
);

create table if not exists comentario(
id int primary key auto_increment, 
conteudo text, 
data_comentario datetime,
fkpostagem int,
fkusuario int,
foreign key (fkpostagem) references postagem(id),
foreign key (fkusuario) references usuario(id),
key (fkpostagem),
key (fkusuario)
);

create table if not exists questoes (
id int primary key,
enunciado varchar(100)
);

create table if not exists alternativas (
id int primary key,
alternativa varchar(30),
certa tinyint,
fkquestoes int,
foreign key (fkquestoes) references questoes(id)
);

create table if not exists quiz (
id int auto_increment,
fkquestoes int, 
fkalternativas int, 
fkusuario int,
primary key (id, fkquestoes, fkalternativas),
foreign key (fkquestoes) references questoes(id),
foreign key (fkalternativas) references alternativas(id),
foreign key (fkusuario) references usuario(id),
key (fkquestoes),
key (fkalternativas),
key (fkusuario)
);

insert into questoes (id, enunciado)
values (1, 'Qual personagem é obcecado em matar a princesa?'),
(2, 'Qual o único elemento do jogo que não muda em hipótese alguma?'),
(3, 'Qual é o nome da dubladora da princesa?');

insert into alternativas (id, alternativa, certa, fkquestoes)
values (1, 'O narrador', 1, 1),
(2, 'A bruxa', 0, 1),
(3, 'O protagonista', 0, 1),
(4, 'As vozes na sua cabeça', 0, 1),
(5, 'A floresta', 0, 2),
(6, 'A princesa', 0, 2),
(7, 'A lâmina imaculada', 1, 2),
(8, 'O protagonista', 0, 2),
(9, 'Nichole Gretchen', 0, 3),
(10, 'Nicole Grahm', 0, 3),
(11, 'Nichole Goodman', 0, 3),
(12, 'Nichole Goodnight', 1, 3);