/*用户信息表
    u_profession :用户职业*/
CREATE TABLE users(
   uids Varchar2(30),
   uname VARCHAR2(15),
   upassword varchar2(30),
   usign VARCHAR2(50),
   uprofession VARCHAR2(20),
   upic VARCHAR2(50),
   uemail VARCHAR2(50)
);
select * from users
 select * from explore e, (select ids from dynstate PARTITION (GH) where selfid='10268')d where e.tid=d.ids 
create sequence seq_users start with 10000;
insert into users
select seq_users.nextval, 
dbms_random.string('l',dbms_random.value(5, 10)),
'a',
dbms_random.string('l',dbms_random.value(10, 40)),
decode(ceil(dbms_random.value(0, 6)), 1, '程序员', 2, '测试员', 3, '分析员', 4, '设计员', 5, '翻译员', '管理员'),
'zzz.jpg',
'180'||ceil(dbms_random.value(10000000,99999999))||'@qq.com' from dual connect by level <= 1000;
select * from users where uids='10999'

select * from USERS where uemail='123' and upassword='a' 
insert into users(uemail,uname,upassword) values('123','zy','a');

delete  users where uemail = "1103743969@qq.com"
drop table users;
select * from essay
select * from USERS
=======
select * from USERS


create sequence seq_users
increment by 1
start with 1000
cache 10;


/*管理员信息表*/
CREATE TABLE admins(
   adid Varchar2(30),
   adname VARCHAR2(15),
   adpassword VARCHAR2(30)
);
/*文章表
      eAutId :作者id
      escId :所属专栏id 默认为null*/
CREATE TABLE essay(
   eid VARCHAR2(10),
   eautid VARCHAR2(30),
   econtent VARCHAR2(300),
   etime VARCHAR2(30),
   etitle VARCHAR2(40),
   escid VARCHAR2(30),
   etid VARCHAR2(10)
);
create sequence seq_essay start with 10000;
insert into essay
select seq_essay.nextval||'', 
''||ceil(dbms_random.value(10000,11000)),
dbms_random.string('l',dbms_random.value(100, 200)),
'2017-'||'12'||'-'||ceil(dbms_random.value(10,30)),
dbms_random.string('l',dbms_random.value(10, 20)),
'123',
''||ceil(dbms_random.value(1000,1015)) from dual connect by level <= 3000;
select * from essay

drop table essay;
drop sequence seq_essay;


INSERT INTO essay(eid,eautid,econtent,etime,etitle,etid)VALUES('1001','1003','ddddd','2017-3-3','主机','10001');
select * from question

select e.*,u.uname,u.usign,u.upic from ESSAY e,USERS u where eautid=1003

/*专栏表*/
CREATE TABLE scolumn(
   scid VARCHAR2(30),
   sccreid VARCHAR2(30),
   scname VARCHAR2(20),
   sctime VARCHAR2(30)
);
/*收藏夹表*/
CREATE TABLE favorite(
   fid VARCHAR2(30),
   fcreid VARCHAR2(30),
   fname VARCHAR2(30),
   ftime VARCHAR2(30)
);
drop table FAVORITE
select * from FAVORITE where fcreid='1003';
/*话题表
    tstId :子话题id*/
CREATE TABLE topics(
   tid VARCHAR2(30),
   ttopic VARCHAR2(20),
   tstid Varchar2(60),
   tpic Varchar2(60)
);
create sequence seq_topics start with 1000;
insert into topics
select seq_topics.nextval, 
dbms_random.string('l',dbms_random.value(5, 6)),
'1',
'car.png' from dual connect by level <= 15;
drop sequence seq_question;
drop table topics


select * from topics


insert into topics(tid,ttopic,tstId,tpic)values('10001','编程' ,' ','images/game.png');
insert into topics(tid,ttopic,tstId,tpic)values('10002','计算机','10001','images/life.jpg');
insert into topics(tid,ttopic,tstId,tpic)values('10003','生活' ,'','images/life.jpg');
select 'GH' kind, t.tid tid,t.ttopic tname,t.tpic content,'15' times,'4564' uids,u.uname author from users u,(select * from Topics tt where tt.tid='10001') t where u.uids='25'
update TOPICS set tpic = 'images/life.jpg' where tpic='images/life.png'
/*问题表
    qautid :提问人id
    qinid :受邀人id
    qtitle :问题
    qdetail :问题细节*/
CREATE TABLE question(
   qid VARCHAR2(30),
   qautid VARCHAR2(30),
   qinid VARCHAR2(60),
   qtitle VARCHAR2(30),
   qdetail VARCHAR2(300),
   qtid  VARCHAR2(30), --话题id
   qtime VARCHAR2(30)
);
create sequence seq_question start with 10000;

insert into question
select seq_question.nextval, 
''||ceil(dbms_random.value(10000,11000)),
''||ceil(dbms_random.value(10000,11000)),
dbms_random.string('l',dbms_random.value(10, 20)),
dbms_random.string('l',dbms_random.value(20, 50)),
''||ceil(dbms_random.value(1000,1015)),
'2017-'||'12'||'-'||ceil(dbms_random.value(10,30)) from dual connect by level <= 3000;
select * from question

select * from QUESTION;

insert into QUESTION(qid,qautid,qtitle,qdetail,qtime) values('2','1003','什么是bootstrap？','bootstraps好用吗？','2017-4-3')
insert into QUESTION(qid,qautid,qtitle,qdetail,qtime) values('3','1001','大数据的使用？','大数据的精华？','2017-4-5');

drop table question
/*回复表
    reqid :文章或问题id
    rkind :是文章还是问题
    rrid :回复id
    remitid :发出人id
    rreceid :收到人id
    */
CREATE TABLE reply(
   rid VARCHAR2(30),
   reqid VARCHAR2(30),
   rkind VARCHAR2(2),
   rrid VARCHAR2(30),
   remitid VARCHAR2(30),
   rreceid VARCHAR2(30),
   rcontent VARCHAR2(300),
   rtid VARCHAR2(30),
   rtime VARCHAR2(30)
);
create sequence seq_reply start with 10000;

insert into reply
select seq_reply.nextval, 
''||ceil(dbms_random.value(10000,13000)),
decode(ceil(dbms_random.value(0, 2)), 1, 'W', 'Q'),
'',
''||ceil(dbms_random.value(10000,11000)),
''||ceil(dbms_random.value(10000,11000)),
dbms_random.string('l',dbms_random.value(55, 200)),
''||ceil(dbms_random.value(1000,1015)),
'2017-'||'12'||'-'||ceil(dbms_random.value(10,30)) from dual connect by level <= 3000;
select * from reply

drop table dynstate;
drop sequence seq_reply;



  select rid from reply where rrid='';

select * from REPLY;

select q.qtitle,q.qtime,count(reqid) t from QUESTION q,REPLY r where r.rkind='Q'

select q.*,t.s from question q,
(select count(reqid) s from REPLY where rkind='Q' and reqid=(select reqid from question where qautid='1003')) t
where q.qautid='1003';
 

/*动态总表*/
CREATE TABLE dynstate(
   selfid VARCHAR2(30), --本人id
   aimid VARCHAR2(30), --目标id
   kind VARCHAR2(10), --动态种类
   ids VARCHAR2(30), --具体id
   times VARCHAR2(30),  --时间
   cfid VARCHAR2(30) --收藏夹id
)
PARTITION BY LIST(kind)(
   PARTITION GH VALUES('GH'), --关注话题
   PARTITION GR VALUES('GR'), --关注人
   PARTITION GZ VALUES('GZ'), --关注专栏
   PARTITION GS VALUES('GS'), --关注收藏夹
   PARTITION SH VALUES('SH'), --收藏回复
   PARTITION SW VALUES('SW'), --收藏文章
   PARTITION SQ VALUES('SQ'), --收藏问题
   PARTITION DW VALUES('DW'), --点赞文章
   PARTITION DQ VALUES('DQ'), --点赞问题
   PARTITION DH VALUES('DH') --点赞回复
);
--关注人
insert into dynstate
select ''||ceil(dbms_random.value(10000,11000)),
''||ceil(dbms_random.value(10000,11000)),
'GR',
'',
'2017-'||'12'||'-'||ceil(dbms_random.value(10,30)),
'' from dual connect by level <= 2000;
--关注话题
insert into dynstate
select ''||ceil(dbms_random.value(10000,11000)),
'',
'GH',
''||ceil(dbms_random.value(1000,1015)),
'2017-'||'12'||'-'||ceil(dbms_random.value(10,30)),
'' from dual connect by level <= 3000;
--点赞文章
insert into dynstate
select ''||ceil(dbms_random.value(10000,11000)),
'',
'DW',
''||ceil(dbms_random.value(10000,13000)),
'2017-'||'12'||'-'||ceil(dbms_random.value(10,30)),
'' from dual connect by level <= 6000;
--点赞回复
insert into dynstate
select ''||ceil(dbms_random.value(10000,11000)),
'',
'DH',
''||ceil(dbms_random.value(10000,13000)),
'2017-'||'12'||'-'||ceil(dbms_random.value(10,30)),
'' from dual connect by level <= 6000;
select * from dynstate PARTITION (GR)



select * from QUESTION q,
(select * from reply,
   (select ids id,count(ids) counts from DYNSTATE PARTITION (DH) group by ids order by count(ids)) 
 where counts>0 and id=rid and rkind='Q' and rrid='')r
 where q.qid=r.reqid
 
		select * from users where uids='1023' and uprofession is not null
		select * from DYNSTATE where selfid='1026' and kind = 'GH'
select 
(select aimid from DYNSTATE where selfid='1003') myattenp,
(select aimid from DYNSTATE where selfid=(select aimid from DYNSTATE where selfid='1003')) myattenwho
from dual;


select
(select count(aimid) from dynstate where selfid='1003') myatten,
(select count(selfid) from DYNSTATE where aimid='1003') attenme,
(select count(ids) from DYNSTATE where selfid='1003' and kind='GH') myattentop,
(select count(ids) from DYNSTATE where selfid='1003' and kind='GZ') myattenzhuanlan,
(select count(ids) from DYNSTATE where selfid='1003' and kind='GS') myattenfav
from dual;

select f.*,t.sum from FAVORITE f,
(select count(ids) sum from DYNSTATE where selfid='1003') t
where fcreid='1003'

select uname,usign,upic,
(select count(remitid) from reply where remitid=(select d.aimid atten from DYNSTATE d where selfid='1003') ) a,
(select count(eautid) from ESSAY where eautid=(select d.aimid atten from DYNSTATE d where selfid='1003') ) b,
(select count(1) from DYNSTATE where aimid=(select d.aimid atten from DYNSTATE d where selfid='1003'))c 
from dual,users
where uids=1001;

select * from REPLY where remitid=1001
select * from users where uids=1001

select * from DYNSTATE where kind='GH' 

create table explore(
   ids VARCHAR2(30),  --文章或问题id
   kind VARCHAR2(4),  --文章还是问题
   title VARCHAR2(30),  --标题或问题
   content VARCHAR2(200),  --内容或最热回复
   tid VARCHAR2(30),  --话题id
   tname VARCHAR2(30),  --话题
   uids VARCHAR2(30),  --作者或最热回复者id
   author VARCHAR2(30),  --作者或最热回复者姓名
   times VARCHAR2(30),  --时间
   checks VARCHAR2(2) --是否以核查
);
select count(0) from explore where checks='n'
select e.*,rownum rn from explore e  where checks='n' and rownum>1
select * from(
select inside.* ,rownum rn from(
select * from explore where checks='n' order by 1 desc) inside where rownum<=#{currPage}*#{})where rn>(1-1)*9

drop table explore
create table infomation(
   selfname VARCHAR2(30), --发件人用户名
   aimname VARCHAR2(30), --收件人用户名
   times VARCHAR2(30), --时间
   info VARCHAR2(300)  --内容
);
insert into explore(title,content,tname,tid,author,times,checks)values('我是知乎吗？','是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是','未知','10001','zy','2017-3-12','y');
insert into explore(title,content,tname,tid,author,times,checks)values('我是知乎？','是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是','未知','10001','zy','2017-4-1','n');
insert into explore(title,content,tname,tid,author,times,checks)values('你是谁？','是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是是','未知','10001','zy','2017-3-11','y');
insert into explore(title,content,tname,tid,author,times,checks)values('gfadbvfdb？','方可哦感觉闷热哦感觉roe看就分开了就分开','未知','10001','zy','2017-4-2','n');
insert into explore(title,content,tname,tid,author,times,checks)values('dsfsdaf？','佛开发包括开发的非流动比较快乐的咖啡哦','未知','10001','zy','2017-3-1','y');


select * from explore
select * from explore where checks='y'
drop table explore
select * from explore e,
(select ids from dynstate PARTITION (GH) where selfid='1001')d
where e.tid=d.ids;

	    select e.etid ids,e.eautid uids,e.econtent content,e.etime times,e.etitle title,e.etid tid,ud.uname author from essay e,
           (select * from users u,
	         (SELECT aimid from dynstate PARTITION(GR) WHERE selfid='1001')d
	       where u.uids=d.aimid)ud
        where e.eautid=ud.uids AND 24*100>=to_number( SYSDATE- to_date(e.etime,'yyyy-mm-dd'))*24
     
        select * from question
     
         select q.qtid ids,q.qautid uids,q.qtime times,q.qtitle title,q.qtid tid,ud.uname author from question q,
           (select * from users u,
	         (SELECT aimid from dynstate PARTITION(GR) WHERE selfid='1001')d
	       where u.uids=d.aimid)ud
        where q.qautid=ud.uids AND 24*100>=to_number( SYSDATE- to_date(q.qtime,'yyyy-mm-dd'))*24

      select q.qid ids,'Q' kind,q.qtitle title,rd.rcontent content,q.qtid tid,rd.ttopic tname,rd.usign usign,rd.uids uids,rd.uname author,rd.rtime times,'n' checks  from QUESTION q,
	   (select * from topics t,
	     (select * from users u,
	     (select * from reply,
        	(select ids id,count(ids) counts from DYNSTATE PARTITION (DH) group by ids order by count(ids))
	      where counts>0 and id=rid and rkind='Q' and rrid='')r
	      where u.uids=r.remitid)r
	      where t.tid=r.rtid)rd
	   where q.qid=rd.reqid
        
	   select e.eid ids,'W' kind,e.etitle title,e.econtent content,e.etid tid,t.ttopic tname,e.usign usign,e.uids uids,e.uname author,e.etime times,'n' checks  from topics t,
	     (select * from users u,
	       (select * from essay,
           	 (select ids id,count(ids) counts from DYNSTATE PARTITION (DW) group by ids order by count(ids))
	        where counts>0 and id=eid )e
	      where u.uids=e.eautid)e
	    where t.tid=e.etid
	    
	    select * from explore

	    
select t.tid tid,t.ttopic tname,t.tpic content,'2017-09-10' times,'1002' uids,u.uname author,'GH' kind from users u,(select * from Topics tt where tt.tid='10004') t where u.uids='1002' 
select* from dynstate
select * from users

--赋值
INSERT INTO essay(eID,eautid,econtent,etime,etitle)VALUES('1001','1001','aaaaaaaa','2017-3-1','aaa');
INSERT INTO essay(eID,eautid,econtent,etime,etitle)VALUES('1002','1001','ccccc','2017-3-2','ccc');
INSERT INTO essay(eID,eautid,econtent,etime,etitle)VALUES('1003','1002','ddddd','2017-3-3','ddd');
INSERT INTO essay(eID,eautid,econtent,etime,etitle)VALUES('1004','1002','bbbbb','2017-3-4','bbb');
select * from question
insert into users(usign) values('无') 
select * from essay
INSERT INTO  USERS(uids,upassword,USIGN,uname,uemail)VALUES('1001','a','我就是我','zy','1234@qq.com');
INSERT INTO  USERS(uids,upassword,USIGN,uname,uemail)VALUES('1002','a','你是谁?','zyy','12345@qq.com');
drop table users
INSERT INTO favorite(fid,fcreid,fname)VALUES('10101','1001','zz');
INSERT INTO favorite(fid,fcreid,fname)VALUES('10102','1002','zzz')


INSERT INTO dynstate(selfid,kind,aimid,times)VALUES('1001','GR','1002','2017-09-15');
INSERT INTO dynstate(selfid,kind,aimid,times)VALUES('1002','GR','1001','2017-09-14');
INSERT INTO dynstate(selfid,kind,ids,times)VALUES('1001','GH','10001','2017-09-13');
INSERT INTO dynstate(selfid,kind,ids,times)VALUES('1001','GH','10002','2017-09-12');
INSERT INTO dynstate(selfid,kind,ids,times)VALUES('1002','GH','10003','2017-09-11');
INSERT INTO dynstate(selfid,kind,ids,times)VALUES('1002','GH','10004','2017-09-10');
INSERT INTO dynstate(selfid,kind,ids)VALUES('1002','B','1006');
INSERT INTO dynstate(selfid,kind,ids)VALUES('1002','B','1006');
select * from dynstate

DROP TABLE dynstate
INSERT INTO collents(cid,ckind,cwid,cfid)VALUES('1001','e','1001','10101');
INSERT INTO collents(cid,ckind,cwid,cfid)VALUES('1002','e','1002','10101');
INSERT INTO collents(cid,ckind,cwid,cfid)VALUES('1003','e','1003','10101');
INSERT INTO collents(cid,ckind,cwid,cfid)VALUES('1004','e','1004','10101');
INSERT INTO collents(cid,ckind,cwid,cfid)VALUES('1005','e','1003','10102');
INSERT INTO collents(cid,ckind,cwid,cfid)VALUES('1006','e','1004','10102');

DROP TABLE collent
SELECT * FROM collents

insert into infomation(selfname,aimname,info) values('1001','1002','我是曾严');


SELECT * FROM essay e,(SELECT * FROM collents c,(SELECT * FROM dynstate WHERE selfId='1001'AND kind='s')d WHERE c.c_id=d.idnum)z WHERE e.e_id=z.c_wId

---查询最新的动态
    ---查询有关话题的问题和文章
       --文章
     SELECT * FROM Topics t,
		  (SELECT * FROM USERS u,
		    (SELECT e.* FROM essay e,
		       (select ids from dynstate PARTITION(GH) WHERE selfid='1001')d
       		 WHERE e.etid=d.ids)e
		   WHERE u.uids=e.eautid)ue
		WHERE ue.etid=t.tid
		--问题
	select tre.rid ids, q.qtitle title,tre.rcontent content,tre.rtid tid,tre.ttopic tname,tre.uids uids,tre.usign usign ,tre.uname author,tre.rtime times from QUESTION q,
       (SELECT * FROM Topics t,
		  (SELECT * FROM USERS u,
		    (SELECT r.* FROM reply r,
		       (select ids from dynstate PARTITION(GH) WHERE selfid='1001')d
       		 WHERE r.rtid=d.ids)r
		   WHERE u.uids=r.remitid)ue
		WHERE ue.rtid=t.tid)tre
	where tre.reqid=q.qid
      
    --查询有关我关注的人的最新动态
            select * from essay e,
               (select aimid from dynstate PARTITION(GR) WHERE selfid='1001')d
            where e.
	
<<<<<<< HEAD
select q.qid ids,'Q' kind,q.qtitle title,rd.rcontent content,q.qtid tid,rd.ttopic tname,rd.usign usign,rd.uids uids,rd.uname author,rd.rtime times,'n' checks  from QUESTION q,
	     (select * from topics t,
	       (select * from users u,
	          (select * from reply,
        	    (select ids id,count(ids) counts from DYNSTATE PARTITION (DH) group by ids order by count(ids)DESC)
	          where counts>4 and id=rid and rkind='Q' )r
	        where u.uids=r.remitid)r
	      where t.tid=r.rtid)rd
	   where q.qid=rd.reqid	
            
    
            
	    update explore set checks='y' where ids='10001' and kind='W'
         select * from EXPLORE where ids='10001' and kind='W'
--
	


drop table users;
drop table topics;
drop table essay;
drop table dynstate;
drop table question;
drop table admin;
drop table reply;
drop table infomation;
drop table explore;


insert into FAVORITE(fid,fcreid,fname,ftime) values('1','1003','我的收藏夹','2017-4-3');

insert into QUESTION(qid,qautid,qtitle,qdetail,qtime) values('2','1003','什么是bootstrap？','bootstraps好用吗？','2017-4-3');
insert into QUESTION(qid,qautid,qtitle,qdetail,qtime) values('3','1001','大数据的使用？','大数据的精华？','2017-4-5');

INSERT INTO essay(eid,eautid,econtent,etime,etitle,etid)VALUES('1001','1003','ddddd','2017-3-3','主机','10001');


insert into reply(rid,reqid,rkind,rrid,remitid,rreceid,rcontent,rtime) values('10001','1','Q',null,'1003','1001','java是一门语言','2017-4-3');


insert into dynstate(selfid,aimid,kind,ids,cfid) values('1003','1001','SQ','3','1');


--gr 2
insert into users(uids,uemail,uname,upassword) values('1003','365@qq.com','gr','a');
