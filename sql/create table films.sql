create table films(
	id int not null AUTO_INCREMENT,
    titre varchar(50) not null,
    dureeMin int not null,
    descp varchar(255),
    primary key (id)
)