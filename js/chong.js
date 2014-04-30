$(function(){
	var message = $('#message').val();
	if(null != message && "" != message){
		$("#annexCodeMsg").show().parent().show();
	}
	var psCode = $("#psCode").val();
	var defautPoint;
	var defautMoney;
	var gameCardCount;
	var beishu = $("#beishu").val();
	//获取全部余额
	var search = window.location.search;
	var balance = /[&|?]balance=([\d]*)[&]*/.exec(search);
	balance = (balance && balance[1] && Math.floor(balance[1])) || 0;
	if(balance > 100000){
		balance = 100000;
	}
	$("#chongAll").click(function(){
//		$("#messageError").hide();
		$("#chongValue").val(balance);
		$("#chongValue").trigger("keyup");
		return false;
	})

	//输入其他金额
	$("#chongValue").keyup(function(e){
		if(e.which==13){
			return false;
		}
		var num = this.value;
		var flag = checkMoney(num);
		if(flag){
			showPoint(num); 
			$("#showPoint").show();
		} else {
			$("#showPoint").hide();
			
		}
	});
	function checkMoney(num,beforeSubmit){
		var psCode = $("#psCode").val();
		if(!num.length){showPointError(0,beforeSubmit,beishu);return false;};
		if(num+""==="0"){showPointError(1,beforeSubmit,beishu);return false;};
		if(!num){showPointError(2,beforeSubmit,beishu);return false;}
		if(!Number(num)){showPointError(3,beforeSubmit,beishu);return false;}
		if((num+"").indexOf(".")!==-1){showPointError(4,beforeSubmit,beishu);return false;}
		if(num > 100000 || num < 1){showPointError(5,beforeSubmit,beishu);return false;}
		hidePointError();
		return true;
	}
	function hidePointError(){
		$("#inputError").hide();
		$("#submitError").hide();
		$("#annexCodeMsg").hide().parent().hide();
	}
	function showPointError(type,beforeSubmit,beishu){
		var error;
		
		switch(type){
			case 0:
				error="咦？您还未输入充值金额";
				break;
			case 1:
				error="呦！充值金额需要是1-100000的整数哦";
				break;
			case 2:
				error="呦！充值金额需要是1-100000的整数哦";
				break;
			case 3:
				error="呦！充值金额需要是1-100000的整数哦";
				break;
			case 4:
				error="呦！充值金额需要是1-100000的整数哦";
				break;
			case 5:
				error="呦！充值金额需要是1-100000的整数哦";
				break;
		}
		$("#inputError").html(error).show();
	}
	
	var chongFlag = true;//防重复提交
	$('#chongBtn').click(function(){
		var money = $("#chongValue").val();
		if(!checkMoney(money,1)){
			return false;
		}
		if(!checkAnnexCodeCYG()){
			return false;
		}
		if(chongFlag){
			$('#thisform').submit();
			chongFlag = false;
		}
	});
	
	$("#chongValue").blur(function(){
//		$("#messageError").hide();
		checkMoney($(this).val());
	});
	$("#chongValue").change(function(){
		$(this).trigger("keyup");
	});
	
	$("#annexCode").focus(function(e){
		hidePointError();
	}).blur(function(){
//		$("#messageError").hide();
		checkAnnexCodeCYG();
	});
	
	function checkAnnexCodeCYG(){
		$("#annexCodeMsg").hide().parent().hide();
		var annexCode = $.trim($('#annexCode').val());
		var error = "";
	    if(annexCode == null || '' == annexCode){
	    	error="咦？您还没有输入验证码哦";
	    	$("#annexCodeMsg").html(error).show().parent().show();
	    	return false;
	    }
//	    $("#annexCodeMsg").html(error).show().parent().show();
	    return true; 
	}

	function showPoint(money) {
		var realMoney = money;
		var realPoint;
		var discountRule = parseInt($("#discountRule").val()) / 100;
		realPoint = Math.round(money * beishu / discountRule);
		$("#gameCardCount").val(realPoint);
		var value = numberDeal(realPoint);
		$("#realPoint").text(value);
	}
});












