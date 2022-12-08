create table users(
 id int not null AUTO_INCREMENT,
 prenom varchar(50) not null,
 nom varchar(50) not null,
 email varchar(50) not null,
 password varchar(255) not null,
 primary key (id)
 )