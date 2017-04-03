<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@page isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
		<table class="input_table" width="500px">
		    <tr>
				<td width="150px" > id  :</td>
				<td><label ><%=request.getParameter("id") %></label></td>
			</tr>
			<tr>
				<td> 类型 :</td>
				<td><label><%=request.getParameter("kind") %></label></td>
			</tr>
			<tr>
				<td> 文章/问题 :</td>
				<td><label><%=request.getParameter("title") %></label></td>
			</tr>
			<tr>
				<td> 有关话题:</td>
				<td><label ><%=request.getParameter("tname") %></label></td>
			</tr>
			<tr>
				<td> 作者/提问人:</td>
				<td><label ><%=request.getParameter("author") %></label></td>
			</tr>
			<tr>
				<td> 内容/最热回复:</td>
				<td><textarea rows="20" cols="20"><%=request.getParameter("content") %></textarea> </td>
			</tr>
			<tr>
				<td colspan="2" align="right">
					<button onclick="return addWinClose();">&nbsp;&nbsp;取
						消&nbsp;&nbsp;</button>&nbsp;&nbsp;
				</td>
			</tr>
		</table>
</body>
</html>