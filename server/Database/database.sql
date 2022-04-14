create database Waiter;
create table khachhang(
	id int auto_increment primary key,
    ho nvarchar(10),
    ten nvarchar(30),
    taikhoan varchar(50),
    matkhau varchar(50),
    email nvarchar(50),
    sodienthoai nvarchar(50)
);