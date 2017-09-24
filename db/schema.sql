create database burgers_db;

use burgers_db;

create table burgers(
    id int auto_increment primary key not null,
    burger_name varchar(60),
    devoured boolean not null default false,
    date timestamp

);