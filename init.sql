create database idcard character set utf8 collate utf8_bin;

use idcard;

create table student(
  no int(10) not null primary key,
  name varchar(10) not null,
  student_no int(10) not null,
  dept varchar(20) not null,
  date varchar(20) not null
)engine=innodb default charset=utf8;

insert into student values(1, "조찬호", 1201285, "컴퓨터정보계열", "2017년4월21일");
insert into student values(2, "김태인", 1501073, "컴퓨터정보계열", "2017년4월21일");
insert into student values(3, "우영아", 1501181, "컴퓨터정보계열", "2017년4월21일");
insert into student values(4, "이현필", 1501242, "컴퓨터정보계열", "2017년4월21일");
insert into student values(5, "곽대효", 1701902, "컴퓨터정보계열", "2017년4월21일");

select * from student;
