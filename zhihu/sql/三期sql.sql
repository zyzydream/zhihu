/*用户信息表
    u_profession :用户职业*/
CREATE TABLE users(
   uids Varchar2(30),
   upassword varchar2(30),
   usign VARCHAR2(50),
   uage Varchar2(5),
   ugender VARCHAR2(5),
   uprofession VARCHAR2(20),
   uname VARCHAR2(15),
   upic VARCHAR2(50),
   uemail VARCHAR2(50)
);
commit;
select * from USERS where uemail='123' and upassword='a' 
insert into users(uemail,uname,upassword) values('123','zy','a');
drop table users;

select * from USERSE

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
INSERT INTO essay(eID,eautid,econtent,etime,etitle,etid)VALUES('1001','1001','aaaaaaaa','2017-3-1','计算机','10001');
INSERT INTO essay(eID,eautid,econtent,etime,etitle,etid)VALUES('1002','1001','ccccc','2017-3-2','java','10002');
INSERT INTO essay(eID,eautid,econtent,etime,etitle,etid)VALUES('1003','1002','ddddd','2017-3-3','主机','10001');
INSERT INTO essay(eID,eautid,econtent,etime,etitle,etid)VALUES('1004','1002','bbbbb','2017-3-4','c++','10002');
select * from essay
drop table essay

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
/*话题表
    tstId :子话题id*/
CREATE TABLE topics(
   tid VARCHAR2(30),
   ttopic VARCHAR2(20),
   tstid Varchar2(60),
   tpic Varchar2(60)
);
select * from topics
insert into topics(tid,ttopic)values('10001','编程');
insert into topics(tid,ttopic,tstId)values('10002','计算机','10001');

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
   qtime VARCHAR2(30)
);
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
   rtime VARCHAR2(30)
);
/*动态总表*/
CREATE TABLE dynstate(
   selfid VARCHAR2(30), --本人id
   aimid VARCHAR2(30), --目标id
   kind VARCHAR2(10), --动态种类
   ids VARCHAR2(30), --具体id
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


--赋值
INSERT INTO essay(eID,eautid,econtent,etime,etitle)VALUES('1001','1001','aaaaaaaa','2017-3-1','aaa');
INSERT INTO essay(eID,eautid,econtent,etime,etitle)VALUES('1002','1001','ccccc','2017-3-2','ccc');
INSERT INTO essay(eID,eautid,econtent,etime,etitle)VALUES('1003','1002','ddddd','2017-3-3','ddd');
INSERT INTO essay(eID,eautid,econtent,etime,etitle)VALUES('1004','1002','bbbbb','2017-3-4','bbb');
select * from users
insert into users(usign) values('无') 

INSERT INTO  USERS(uids,upassword,USIGN,uname,uemail)VALUES('1001','a','我就是我','zy','1234@qq.com');
INSERT INTO  USERS(uids,upassword,USIGN,uname,uemail)VALUES('1002','a','你是谁?','zyy','12345@qq.com');
drop table users
INSERT INTO favorite(fid,fcreid,fname)VALUES('10101','1001','zz');
INSERT INTO favorite(fid,fcreid,fname)VALUES('10102','1002','zzz')


INSERT INTO dynstate(selfid,kind,aimid)VALUES('1001','GR','1002');
INSERT INTO dynstate(selfid,kind,aimid)VALUES('1002','GR','1001');
INSERT INTO dynstate(selfid,kind,ids)VALUES('1001','GH','10001');
INSERT INTO dynstate(selfid,kind,ids)VALUES('1001','GH','10002');
INSERT INTO dynstate(selfid,kind,ids)VALUES('1002','GH','10003');
INSERT INTO dynstate(selfid,kind,ids)VALUES('1002','GH','10004');
INSERT INTO dynstate(selfid,kind,ids)VALUES('1002','B','1006');
INSERT INTO dynstate(selfid,kind,ids)VALUES('1002','B','1006');
select * from dynstate
SELECT * FROM dynstate PARTITION("$");
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
     SELECT * FROM Topics t,
		  (SELECT * FROM USERS u,
		    (SELECT e.* FROM essay e,
		       (select ids from dynstate PARTITION(GH) WHERE selfid='1001')d
       		 WHERE e.etid=d.ids)e
		   WHERE u.uids=e.eautid)ue
		WHERE ue.etid=t.tid
    --查询有关我关注的人的最新动态

--



drop table users;
drop table topics;
drop table essay;
drop table dynstate;
drop table users;
drop table users;
drop table users;





