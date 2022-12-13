create table logs(
	id int not null AUTO_INCREMENT,
    message varchar(500) not null,
    date_created datetime not null,
    primary key (id)
)