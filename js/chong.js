$(function(){
	// $("#otherValue").val("");
	var psCode = $("#psCode").val();
	var defautPoint;
	var defautMoney;
	var gameCardCount;
	var index;
	var beishu;
	if("0" == psCode){
		// $("#gameCardCount").val(10000);
		// defautPoint = 10000;
		// defautMoney = 100;
		index = 0;
		beishu = 100; 
	} else if ("DL" == psCode) {
		// $("#gameCardCount").val(1000);
		// defautPoint = 1000; 
		// defautMoney = 100;
		index = 2;
		beishu = 10;
	} else {
		// $("#gameCardCount").val(2000);
		// defautPoint = 2000;
		// defautMoney = 100;
		index = 1;
		beishu = 20;
	}
	/*gameCardCount = $("#gameCardCount").val();
	showPoint(defautMoney,index);    */
	//获取全部余额
	var search = window.location.search;
	var balance = /[&|?]balance=([\d]*)[&]*/.exec(search);
	balance = (balance && balance[1] && Math.floor(balance[1])) || 0;
	if(balance > 10000){
		balance = 10000;
	}
	$("#chongAll").click(function(){
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
			showPoint(num,index); 
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
		if(num > 10000 || num < 1){showPointError(5,beforeSubmit,beishu);return false;}
		hidePointError();
		return true;
	}
	function hidePointError(){
		$("#inputError").hide();
		$("#submitError").hide();
		$("#annexCodeMsg").hide();
	}
	function showPointError(type,beforeSubmit,beishu){
		var error;
		
		switch(type){
			case 0:
				error="咦？您还未输入充值金额";
				break;
			case 1:
				error="呦！充值金额需要是1-10000的整数哦";
				break;
			case 2:
				error="呦！充值金额需要是1-10000的整数哦";
				break;
			case 3:
				error="呦！充值金额需要是1-10000的整数哦";
				break;
			case 4:
				error="呦！充值金额需要是1-10000的整数哦";
				break;
			case 5:
				error="呦！充值金额需要是1-10000的整数哦";
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
		checkMoney($(this).val());
	});
	$("#chongValue").change(function(){
		$(this).trigger("keyup");
	});
	
	$("#annexCode").focus(function(e){
		hidePointError();
	}).blur(function(){
		checkAnnexCodeCYG();
	});
	
	function checkAnnexCodeCYG(){
		$("#annexCodeMsg").hide();
		var annexCode = $.trim($('#annexCode').val());
		var error = "";
	    if(annexCode == null || '' == annexCode){
	    	error="咦？您还没有输入验证码哦";
	    	$("#annexCodeMsg").html(error).show();
	    	return false;
	    }
	    $("#annexCodeMsg").html(error).show();
	    return true; 
	}

	function showPoint(money, index) {
		var realMoney = money;
		var realPoint;
		var discountRule = parseInt($("#discountRule").val()) / 100;
		realPoint = Math.round(money * beishu / discountRule);
		$("#gameCardCount").val(realPoint);
		var value = numberDeal(realPoint);
		$("#realPoint").text(value);
	}
});














