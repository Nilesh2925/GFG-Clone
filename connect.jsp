<%@ page import = "java.sql.*"%>
<%

String name = request.getParameter("name");
String email = request.getParameter("email");
String password = request.getParameter("password");
String mobile = request.getParameter("mobile");

String url="jdbc:mysql://localhost:3306/cp";
String user="peeyush";
String pass="123";

try {
	Class.forName("com.mysql.cj.jdbc.Driver");
	Connection con=DriverManager.getConnection(url,user,pass);
	String query="insert into student values(?,?,?,?)";
	//PreparedStatement ps = con.preprareStatement("insert into student(Name,email,password,mobile) values(?,?,?,?)");
	PreparedStatement ps = con.prepareStatement(query);
	ps.setString(1,name);
	ps.setString(2,email);
	ps.setString(3,password);
	ps.setString(4,mobile);
	int x = ps.executeUpdate();
	if(x>0)
	{
		out.println("Registration Done");
	}
	else
	{
		out.println("Registration Failed");
	}
}

catch(Exception e)
{
	out.println(e);
}

%>