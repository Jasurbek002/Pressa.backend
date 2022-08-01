drop database if exists pressa_db;
create database pressa_db;

create extension pgcrypto;

drop table if exists admins;
create table admins(
    admin_id serial primary key,
    adminname varchar(40) not null,
    password varchar(60) not null,
    avatar text not null,
    status varchar(30) not null
);

drop table if exists users;
create table users(
    user_id serial primary key,
    username varchar(50) not null,
    password varchar(60) not null,
    gender varchar(15) not null,
    created_at timestamp default current_timestamp
);

 drop table if exists caregories;
 create table caregories(
     category_id serial primary key,
     category_name varchar(30) not null
    
 );

 drop table if exists subcategories;
 create table subcategories(
    sub_id serial primary key,
    sub_name varchar(100) not null,
    category_id int references caregories(category_id)
 );

 drop table if exists cards;
 create table cards(
    card_id serial primary key,
    sub_id int references subcategories(sub_id),
    date varchar(20) not null,
    time varchar(10) not null,
    title varchar(150) not null,
    username varchar(50) not null,
    proffesa varchar(100) not null,
    turi varchar(10) not null,
    description varchar(1000) not null,
    phone int not null,
    phone2 int not null,
    image text not null,
    thema text not null,
    status varchar(20) default 'pending',
    company varchar(100),
    link text
 );


 insert into admins(adminname,password,avatar,status) values ('jasur',crypt('12345678',gen_salt('bf')),'https://html5css.ru/w3css/img_avatar3.png','supper');

 insert into users(username,password,gender) values ('jasur',crypt('12345678',gen_salt('bf')),'male');

 insert into caregories(category_name) values ('bisnes');
  insert into subcategories(sub_name,category_id) values ('web dizayner',1);


 insert into cards(sub_id,date,time,title,username,proffesa,turi,description,phone,phone2,image,thema,company,link)
values(1,'15.08.2022','15:00','Frontend haqida','Jasurbek Turgunov','full stack','online','zamaonaviz kasblardan biri','908266777','337253002','https://picsum.photos/200','bugungi kund frontenga  talab yuqori','najot talim mchj','skdnklwdklwmslkMLkml');