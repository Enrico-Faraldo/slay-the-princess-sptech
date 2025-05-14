create database if not exists slay_the_princess;
use slay_the_princess;

create table if not exists usuario(
id int primary key auto_increment, 
nome_usuario varchar(50), 
email varchar(255), 
senha varchar(255),
personagem_favorito varchar(75),
unique (email),
unique (nome_usuario)
);

create table if not exists postagem(
id int primary key auto_increment, 
conteudo text, 
fkusuario int,
foreign key (fkusuario) references usuario(id)
);

create table if not exists comentario(
id int primary key auto_increment, 
conteudo text, 
fkpostagem int,
foreign key (fkpostagem) references postagem(id)
);

