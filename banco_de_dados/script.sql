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

create table if not exists quiz(
id int primary key auto_increment, 
questao01 tinyint, 
questao02 tinyint,
questao03 tinyint,
fkusuario int,
foreign key (fkusuario) references usuario(id),
key (fkusuario)
);