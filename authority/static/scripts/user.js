$(function(){
	$("#login").click(loginAction);
});

function loginAction(){
	$("#account_span").html("");
	//获取参数
	let name = $("#account").val().trim();
	let password = $("#password").val().trim();
	let ok = true;
	if(name==""){
		$("#account_span").html("用户名不能为空");
		ok=false;
	}
	if(password==""){
		$("#password_span").html("密码不能为空");
		ok=false;
	}
	
	if(ok){
		$.ajax({
			url:path+"/user/login.do",
			type:"post",
			data:{"name":name,"password":password},
			dataType:"json",
			success:function(result){
				if(result.state==0){//登录成功
					var user = result.data;
					addCookie("userId",user.id,2);
					window.location.href = "edit.html";
				}else if(result.state==2){//用户名错误
					$("#account_span").html(result.message);
				}else if(result.state==3){//密码错误
					$("#password_span").html(result.message);
				}
			},
			error:function(){
				alert("登录失败");
			}
		});
	}
}


