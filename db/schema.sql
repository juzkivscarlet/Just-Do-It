-- Schema

create database just_do_it;
use just_do_it;

-- Master table

create table songs (
    id int not null auto_increment,
    title varchar(50),
    table_name varchar(30),
    primary key (id)
);

-- table for each song

create table prelude (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);

create table old_habits (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);

create table ms_guidance (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);

create table funky (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);

create table spoons (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);

create table circus (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);

create table dont_belong (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);

create table censor (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);

create table title_revelation (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);

create table anesthesia (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);

create table no_worries (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);

create table parasite (
    id int not null auto_increment,
    task varchar(300) not null, 
    completed varchar(3),
    primary key (id)
);
