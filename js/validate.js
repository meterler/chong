
/**
 *  *  *  *  *  *  *  *  *  *  *  *  *  * from member *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * 
 */
/* 
功能：验证身份证号码是否有效 
提示信息：未输入或输入身份证号不正确！ 
使用：f_check_IDno(obj) 
返回：bool 
*/ 
function f_check_IDno(obj)   
{    
    var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};   
    
    var iSum = 0;   
    var info = "";   
    var strIDno = obj;   
    if (strIDno.substr(0,6) == "000000" || strIDno.substr(0,6) == "111111" || strIDno.substr(0,6) == "222222" || strIDno.substr(0,6) == "333333" || strIDno.substr(0,6) == "444444" || strIDno.substr(0,6) == "555555" || strIDno.substr(0,6) == "666666" || strIDno.substr(0,6) == "777777" || strIDno.substr(0,6) == "888888" || strIDno.substr(0,6) == "999999")  return false;
  	if (strIDno.substr(0,6) == "123456" || strIDno.substr(0,6) == "234567" || strIDno.substr(0,6) == "345678" || strIDno.substr(0,6) == "456789" || strIDno.substr(0,6) == "567890" || strIDno.substr(0,6) == "012345" || strIDno.substr(0,6) == "543210" || strIDno.substr(0,6) == "432109" || strIDno.substr(0,6) == "321098" || strIDno.substr(0,6) == "210987" || strIDno.substr(0,6) == "109876" || strIDno.substr(0,6) == "098765" || strIDno.substr(0,6) == "987654" || strIDno.substr(0,6) == "876543" || strIDno.substr(0,6) == "765432")  return false;
  	if (strIDno.substr(0,6) == "121212" || strIDno.substr(0,6) == "131313" || strIDno.substr(0,6) == "141414" || strIDno.substr(0,6) == "151515" || strIDno.substr(0,6) == "161616" || strIDno.substr(0,6) == "171717" || strIDno.substr(0,6) == "181818" || strIDno.substr(0,6) == "191919" || strIDno.substr(0,6) == "101010")  return false;
  	if (strIDno.substr(0,6) == "212121" || strIDno.substr(0,6) == "232323" || strIDno.substr(0,6) == "242424" || strIDno.substr(0,6) == "252525" || strIDno.substr(0,6) == "262626" || strIDno.substr(0,6) == "272727" || strIDno.substr(0,6) == "282828" || strIDno.substr(0,6) == "292929" || strIDno.substr(0,6) == "202020")  return false;
  	if (strIDno.substr(0,6) == "313131" || strIDno.substr(0,6) == "323232" || strIDno.substr(0,6) == "343434" || strIDno.substr(0,6) == "353535" || strIDno.substr(0,6) == "363636" || strIDno.substr(0,6) == "373737" || strIDno.substr(0,6) == "383838" || strIDno.substr(0,6) == "393939" || strIDno.substr(0,6) == "303030")  return false;
  	if (strIDno.substr(0,6) == "414141" || strIDno.substr(0,6) == "424242" || strIDno.substr(0,6) == "434343" || strIDno.substr(0,6) == "454545" || strIDno.substr(0,6) == "464646" || strIDno.substr(0,6) == "474747" || strIDno.substr(0,6) == "484848" || strIDno.substr(0,6) == "494949" || strIDno.substr(0,6) == "404040")  return false;
  	if (strIDno.substr(0,6) == "515151" || strIDno.substr(0,6) == "525252" || strIDno.substr(0,6) == "535353" || strIDno.substr(0,6) == "545454" || strIDno.substr(0,6) == "565656" || strIDno.substr(0,6) == "575757" || strIDno.substr(0,6) == "585858" || strIDno.substr(0,6) == "595959" || strIDno.substr(0,6) == "505050")  return false;
  	if (strIDno.substr(0,6) == "616161" || strIDno.substr(0,6) == "626262" || strIDno.substr(0,6) == "636363" || strIDno.substr(0,6) == "646464" || strIDno.substr(0,6) == "656565" || strIDno.substr(0,6) == "676767" || strIDno.substr(0,6) == "686868" || strIDno.substr(0,6) == "696969" || strIDno.substr(0,6) == "606060")  return false;
  	if (strIDno.substr(0,6) == "717171" || strIDno.substr(0,6) == "727272" || strIDno.substr(0,6) == "737373" || strIDno.substr(0,6) == "747474" || strIDno.substr(0,6) == "757575" || strIDno.substr(0,6) == "767676" || strIDno.substr(0,6) == "787878" || strIDno.substr(0,6) == "797979" || strIDno.substr(0,6) == "707070")  return false;
  	if (strIDno.substr(0,6) == "818181" || strIDno.substr(0,6) == "828282" || strIDno.substr(0,6) == "838383" || strIDno.substr(0,6) == "848484" || strIDno.substr(0,6) == "858585" || strIDno.substr(0,6) == "868686" || strIDno.substr(0,6) == "878787" || strIDno.substr(0,6) == "898989" || strIDno.substr(0,6) == "808080")  return false;
  	if (strIDno.substr(0,6) == "919191" || strIDno.substr(0,6) == "929292" || strIDno.substr(0,6) == "939393" || strIDno.substr(0,6) == "949494" || strIDno.substr(0,6) == "959595" || strIDno.substr(0,6) == "969696" || strIDno.substr(0,6) == "979797" || strIDno.substr(0,6) == "989898" || strIDno.substr(0,6) == "909090")  return false;
    var idCardLength = strIDno.length;     
    if(!/^\d{17}(\d|x)$/i.test(strIDno)&&!/^\d{15}$/i.test(strIDno))    
    {   
        //f_alert(obj,"非法身份证号");   
        return false;   
    }   
    
    //在后面的运算中x相当于数字10,所以转换成a   
    strIDno = strIDno.replace(/x$/i,"a");   
  
    if(aCity[parseInt(strIDno.substr(0,2))]==null)   
    {   
        //f_alert(obj,"非法地区");   
        return false;   
    }   
       
    if (idCardLength==18)   
    {   
        sBirthday=strIDno.substr(6,4)+"-"+Number(strIDno.substr(10,2))+"-"+Number(strIDno.substr(12,2));   
        var d = new Date(sBirthday.replace(/-/g,"/"))   
        if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))   
        {          
            //f_alert(obj,"非法生日");   
            return false;   
        }   
  
        for(var i = 17;i>=0;i --)   
            iSum += (Math.pow(2,i) % 11) * parseInt(strIDno.charAt(17 - i),11);   
  
        if(iSum%11!=1)   
        {   
            //f_alert(obj,"非法身份证号");   
            return false;   
        }   
    }   
    else if (idCardLength==15)   
    {   
        sBirthday = "19" + strIDno.substr(6,2) + "-" + Number(strIDno.substr(8,2)) + "-" + Number(strIDno.substr(10,2));   
        var d = new Date(sBirthday.replace(/-/g,"/"))   
        var dd = d.getFullYear().toString() + "-" + (d.getMonth()+1) + "-" + d.getDate();      
        if(sBirthday != dd)   
        {   
            //f_alert(obj,"非法生日");   
            return false;   
        }   
    }   
    return true;    
} 
/* 
功能：验证身份证号码长度 15或18位
输入：str 输入的字符串 
使用：f_check_IDno_length(obj) 
返回：bool 
*/
function f_check_IDno_length(obj){
	if(obj.length==15 || obj.length==18){
		return true;
	}
	return false;
}
/* 
用途：检查输入对象的值是否符是汉字
输入：str 输入的字符串 
返回：如果通过验证返回true,否则返回false 
*/
function isHanzi(obj){
	var Expression=/[^\u4E00-\u9FA5]/; 
	var objExp=new RegExp(Expression);
	return !objExp.test(obj)
}
/* 
用途：检查输入对象的值是否符中文姓名
要求：中文 2-8个字符
输入：str 输入的字符串 
返回：如果通过验证返回true,否则返回false 
*/
function isSn(obj){
	if(isHanzi(obj)){
		if(obj.length>1 && obj.length<9){
			return true;
		}
		return false;
	}
	 return false;
}  
/* 
用途：根据身份证号判断是否大于18岁 
输入：str 输入的字符串 
返回：如果通过验证返回true,否则返回false 
*/
function isAdult(obj){
	var bstr;
	if(obj.length==18){
		bstr = obj.substring(6,14);
	}else if(obj.length==15){
		bstr = obj.substring(6 , 12);
		bstr = '19' + bstr;
	}
	var age;
	var aDate=new Date();
	var thisYear=aDate.getYear();
	var thisMonth=aDate.getMonth()+1;
	var thisDay=aDate.getDate();
	brithy=bstr.substr(0,4);
	brithm=bstr.substr(4,2);
	brithd=bstr.substr(6,2);
	
	if(thisMonth-brithm<0){
		age = thisYear-brithy-1;
  }else{
		if(thisDay-brithd>=0){
			age = thisYear-brithy;
		}else{
			age = thisYear-brithy-1;
		}
	}
	return age >= 18;
}  
/* 
用途：检查输入对象的值是否符合E-Mail格式 
输入：str 输入的字符串 
返回：如果通过验证返回true,否则返回false 
*/
function f_check_email(obj){     
	var myReg = /^([-_A-Za-z0-9\.]+)@([-_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;    
    if(myReg.test( obj )) return true;      
    return false;    
} 
/* 
用途：检查输入对象的值是否符合E-Mail格式 邮箱认证专用
输入：str 输入的字符串 
返回：如果通过验证返回true,否则返回false 
*/
function f_check_emails(obj){     
    var myReg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/;    
    if(myReg.test( obj )) return true;      
    return false;    
} 
/* 
用途：检查输入手机号码是否正确 
输入： 
s：字符串 
返回： 
如果通过验证返回true,否则返回false 
*/ 
function f_check_mobile(obj){    
	return (/^1(3|4|5|8)\d{9}$/.test(obj));
    //return (/^(?:13\d|14[1357]|15[0123456789]|18[012356789])-?\d{5}(\d{3}|\*{3})$/.test(obj));       
}
/* 
要求：一、邮箱、手机、 
用途：检查输入通行证是否正确 
输入： 
s：字符串 
返回： 
如果通过验证返回true,否则返回false 
*/ 
function isPassport(str){
	if(!f_check_mobile(str)){
		return f_check_email(str);
	}
	return true;
}
/* 
要求：一、位数4-16
二、字母、数字、下划线、连接线 
用途：检查密码是否正确 
输入： 
s：字符串 
返回： 
如果通过验证返回true,否则返回false 
*/ 
function f_check_password(obj){
	if(obj.length <4 || obj.length>16){
		return false;
	}
	
	var regu =/^[^, '"]+$/;
	var re = new RegExp(regu);   
    if (re.test( obj )) {   
      return true;   
    }   
    return false;     	
}
/* 
要求：一、位数4-16
用途：检查密码长度
输入： 
s：字符串 
返回： 
如果通过验证返回true,否则返回false 
*/ 
function f_check_password_length(obj){
	if(obj.length <4 || obj.length>16){
		return false;
	}
	 
    return true;     	
}
/* 
要求：一、位数6
二、数字
用途：检查短信验证码是否正确 
输入： 
s：字符串 
返回： 
如果通过验证返回true,否则返回false 
*/ 
function f_check_authCode(obj){
	var regu =/^([0-9]{6})$/;
	var re = new RegExp(regu);   
    if (re.test( obj )) {   
      return true;   
    }   
    return false;     	
}
/* 
要求：一、位数8-16
二、字母、数字、下划线、连接线 
用途：检查超级密码是否正确 
输入： 
s：字符串 
返回： 
如果通过验证返回true,否则返回false 
*/ 
function f_check_super_password(obj){
	var regu =/^([-_A-Za-z0-9]{8,16})$/;
	var re = new RegExp(regu);   
    if (re.test( obj )) {   
      return true;   
    }   
    return false;  
}
/** 
* 检测字符串是否为空 
*/ 
function isnull(str)   
{   
	if(str == undefined){
		return true;
	}
    var i;   
    if(str.length == 0)  { 
        return true;   
    }
    for (i=0;i<str.length;i++)   
    {   
        if (str.charAt(i)!=' ')    
            return false;   
    }   
    return true;   
}
/*LTrim(string):去除左边的空格*/ 
function LTrim(str){   
    var whitespace = new String(" \t\n\r");   
    var s = new String(str);      
  
    if (whitespace.indexOf(s.charAt(0)) != -1){   
        var j=0, i = s.length;   
        while (j < i && whitespace.indexOf(s.charAt(j)) != -1){   
            j++;   
        }   
        s = s.substring(j, i);   
    }
    return s;
}   
/*RTrim(string):去除右边的空格*/ 
function RTrim(str){
    var whitespace = new String(" \t\n\r");
    var s = new String(str);
    
    if (whitespace.indexOf(s.charAt(s.length-1)) != -1){
        var i = s.length - 1;
        while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1){
            i--;
        }
        s = s.substring(0, i+1);
    }
    return s;
}
/*Trim(string):去除字符串两边的空格*/ 
function trim(str) {  
	return str.replace(/(^\s*)|(\s*$)/g, "");
}


/**
 * 更新text文本框样式
 * @param id 
 * @param css 
 */
function textCss(o , css){
	$('#'+o).removeClass();
	$('#'+o).addClass(css).show();
}
/**
 * 显示信息
 * @param 显示控件id 
 * @param 消息内容 
 * @param 框子样式
 */
function showMsg(megId,msg,css){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
	$('#'+megId).html(msg);
	$('#'+megId).addClass(css).show();
}
/**
 * 检验手机验证码
 * @param 控件对象
 * @param 显示控件id 
 */
function checkAuthCode(o , megId , sendAuthCodeType){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
	
	var val = $('#'+o).val();
	if(val == ''){
		onblurText(megId , 0);
		return false;
	}
	if(!f_check_authCode(val)){
		onblurText(megId , 1);
		return false;
	}
    showMsg(megId,'&nbsp;','note note-right');
    return true;
}
/**
 * 检验密码问题答案
 * @param 控件对象id
 * @param 显示控件id 
 */
function checkAnswer(o , megId){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
	
	var val = $('#'+o).val();
	
	if(val == ''){
		onblurText(megId , 8);
		return false;
	}
	
	var chinaPattern = /^[\u4E00-\u9FA5]{1,19}$/;
	var englishPattern = /^[a-zA-z0-9]{2,38}$/;
	
	if(!chinaPattern.test(val) && !englishPattern.test(val)){
		onblurText(megId , 9);
		return false;
	}
	showMsg(megId,'&nbsp;','note note-right');
	return true;
}
/**
 * 检验通行证
 * @param 控件对象id
 * @param 显示控件id 
 */
function checkPassport(o , megId){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
	
	var val = $('#'+o).val();
	
	if(val == ''){
		onblurText(megId , 19);
		return false;
	}
	
	if(!isPassport(val)){
		onblurText(megId , 20);
		return false;
	}
	showMsg(megId,'&nbsp;','note note-right');
    return true;
}
/**
 * 检验通行证验证码
 * @param 控件对象id
 * @param 显示控件id 
 */
function checkPassportCode(o , megId){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
	
	var val = $('#'+o).val();
	
	if(val == ''){
		onblurText(megId , 21);
		return false;
	}
	showMsg(megId,'&nbsp;','note note-right');
    return true;
}
/**
 * 检验姓名
 * @param 控件对象id
 * @param 显示控件id 
 */
function checkSN(o , megId){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
	
	var val = $('#'+o).val();
	
	if(val == ''){
		onblurText(megId , 22);
		return false;
	}
		
	if(!isSn(val)){
		onblurText(megId , 23);
		return false;
	}
	showMsg(megId,'&nbsp;','note note-right');
    return true;
}
/**
 * 清空元件，样式和内容
 * @param 控件对象id
 */
function clearObj(o ,ocss){
	$('#'+o).removeClass();
	$('#'+o).addClass(ocss).show();
}
/**
 * 检验超级密码
 * @param 控件对象id
 * @param 显示控件id 
 */
function checkSuperPassword(o , megId){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
	
	var val = $('#'+o).val();
	
	if(val == ''){
		onblurText(megId , 14);
		return false;
	}
	
	if(!f_check_super_password(val)){
		onblurText(megId , 15);
		return false;
	}
	
	showMsg(megId,'&nbsp;','note note-right');
    return true;
}
/**
 * 检验身份证号
 * @param 控件对象id
 * @param 显示控件id 
 */
function checkidCode(o , megId){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
	
	var val = $('#'+o).val();
	
	if(val == ''){
		onblurText(megId , 16);
		return false;
	}
	
	if(!f_check_IDno_length(val)){
		onblurText(megId , 17);
		return false;
	}
	if(!f_check_IDno(val)){
		onblurText(megId , 18);
		return false;
	}
	
	showMsg(megId,'&nbsp;','note note-right');
    return true;
}

/**
 * 检验旧密码
 * @param 控件对象id
 * @param 显示控件id 
 */
function checkOldPassword(o , megId){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
	
	var val = $('#'+o).val();
	
	if(val == ''){
		onblurText(megId , 3);
		return false;
	}
	if(!f_check_password(val)){
		onblurText(megId , 4);
		return false;
	}
	
	showMsg(megId,'&nbsp;','note note-right');
    return true;
}
/**
 * 检验新密码
 * @param 控件对象id
 * @param 显示控件id 
 */
function checkNewPassword(o , megId){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
	
	var val = $('#'+o).val();
	
	if(val == ''){
		onblurText(megId , 3);
		return false;
	}
	if(!f_check_password(val)){
		onblurText(megId , 4);
		return false;
	}
	if(!checkSimplePassword(val)){
		onblurText(megId , 5);
		return false;
	}
    showMsg(megId,'&nbsp;','note note-right');
    return true;
}
/**
 * 检查再次设置密码
 * @param 密码控件id
 * @param 密二次码控件对象
 * @param 显示控件id 
 */
function checkPasswordAgain(psID ,o , megId){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
	
	var val = $('#'+o).val();
	if(val == ''){
		onblurText(megId , 6);
		return false;
	}
	
	if(val != $('#'+psID).val()){
		onblurText(megId , 7);
		return false;
	}
	showMsg(megId,'&nbsp;','note note-right');
	return true;
}
/**
 * 检查密码是不是简单密码
 * @param password 
 * @return 是返回false
 */
function checkSimplePassword(password){
	var simpleFlagSame = true; // 是否是单一字符
	var simpleFlagToBig = true; // 是否是顺序的
	var simpleFlagToSmall = true;// 是否是逆序的
	var passwordLength =password.length;
	for(var i =0;i<passwordLength-1;i++){
		if(password.charCodeAt(i)!=password.charCodeAt(i+1)){
			simpleFlagSame = false;
			break;
		}
	}
	for(var i =0;i<passwordLength-1;i++){
		if(password.charCodeAt(i)+1!=password.charCodeAt(i+1)){
			simpleFlagToBig = false;
			break;
		}
	}
	for(var i =0;i<passwordLength-1;i++){
		if(password.charCodeAt(i)-1!=password.charCodeAt(i+1)){
			simpleFlagToSmall = false;
			break;
		}
	}
	if(simpleFlagSame||simpleFlagToBig||simpleFlagToSmall){
		return false;
	}
	return true;
}
/**
 * cn格式化，加星星
 * @param cn 用户cn
 */
function showCn(cn){
	cn = trim(cn);
	
	if(isnull(cn)){
		return '';
	}
	//手机
	if(f_check_mobile(cn)){
		var showCn = "";
        if (cn.length == 11) { // 是11位
            showCn = cn.substring(0, 3) + "****" + cn.substring(cn.length - 4);
        } else { // 不是11位
            showCn = cn;
        }
        return showCn;
	}
	
	//邮箱
	if(f_check_email(cn)){
		var showCn = "";
		var atPostion = cn.indexOf("@");
        if (atPostion <= 3) { // @前字符数小于或等于3个，显示全部
            showCn = cn;
        } else {
            showCn = cn.substring(0, 3) + "***" + cn.substring(atPostion);
        }
        return showCn;
	}
	
	return cn;
}
/**
 * 是否需要清除错误信息
 * @param 控件对象id
 * @param 显示控件id 
 */
function isClearError(megId , errMsg){
	if($.inArray($('#'+megId).text() , errMsg) == -1){
		return false;
	}
	return true;
}
/**
 * 是否需要清除错误信息
 * @param 控件对象id
 * @param 显示控件id 
 */
function clearError(megId){
	$('#'+megId).empty();
	$('#'+megId).removeClass();
}
//设置默认密码内容
function setDefaultText(id , img){
	$('#'+id).val('');
	$('#'+id).focus(function (){
		$(this).css('background','0 none');
	});
	$('#'+id).blur(function (){
		if($('#'+id).val()==''){
			$(this).css('background','url('+img+')');
		}
	});
}
/**
 * 获取url参数值
 * @o 参数名
 */
function GetQueryString(name){ 
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return unescape(r[2]); return null; 
}
var warnMsg = ['请输入您手机收到的短信验证码,短信验证码为6位数字',    											//验证码 
				'除空格,逗号,单双引号以外的任意字符,长度为4—16位',                                              //密码
				'姓名问题，请填写1-19个中文或2-38个英文，生日问题，请填写8位日期，如：20090514',					//密码提示问题		
				'短信验证码已发送至您填写的手机，请耐心等待。收到验证码后，请在十分钟内填写。',				                                	//短信
				'必须与您的身份证上的姓名完全一致，否则不能通过认证',												//姓名
				'身份证号码一经提交公安部认证则不能修改'];														//身份证
				
var errorMsg = ['呦！怎么还不输入短信验证码？','呦！短信验证码只能是6位数字哦','呦！短信验证码没有填对啊',				//验证码 3条
				'呦！还没有输入密码呢','呦！密码格式不对哦','呦！密码太简单啦',  									//新密码 3条
				'哟！还得再输一次密码呀','哟！两次输入的密码不一致哦',											//再次密码 2条
				'呦！还没有填写密码提示问题答案呢','呦！填写的答案不符合规则',										//密码提示问题 2条	
				'请填写您的联系手机','呦！您填写的手机号码不正确呀',			                                   	//手机号   2条
				'每个手机号24小时内只能申请三次验证码','系统繁忙，请稍后获取！',									//短信     2条
				'哟！还没有输入超级密码哦','哟！超级密码格式不对哦',											    //超级密码  2条
				'呦！还没有输入身份证号呀','呦！身份证号位数不对哦','呦！这个身份证号是假的吧',                       //身份证    3条                
				'呦！还没输入畅游通行证呢','呦！您输入的通行证格式不对呀',										//通行证   2条
				'呦！输入图片上的文字嘛',																	//登陆验证码  1条
				'呦！还没有输入姓名哦','呦！姓名输入格式不对哦'];												//姓名   2条
				
				
/**
* 获得焦点提示信息索引
* @param id 
* @param megId 
*/
function fcousText(megId,index){
	showMsg(megId,warnMsg[index],'note note-normal');
}
/**
* 失去焦点提示信息索引
* @param id 
* @param megId 
*/
function onblurText(megId,index){
	showMsg(megId,errorMsg[index],'note note-wrong');
}
/*
*判断是否为数字
*输入：info-待检查的信息
*输出：true-是，false-不是
*/
function checkNumber(info) {
	var Expression = /^[0-9]*$/;
	return regCheck(info, Expression);
}
/*
*正则表达式判断
*输入：info-待检查的信息,reg-正则表达式
*输出：true-是，false-不是
*/
function regCheck(info, reg) {
	var objExp = new RegExp(reg);
	if (objExp.test(info) === true) {
		return true;
	} else {
		return false;
	}
}
/* 
用途：检查输入数字值是否是100的倍数，小于300000
输入：cby 输入的畅游币 
返回：如果通过验证返回true,否则返回false 
*/


/* 
用途：检查输入数字值是否是100的倍数，小于300000
输入：cby 输入的畅游币 
返回：如果通过验证返回true,否则返回false 
*/
function checkCyb() { 
	var strP=/^\d+$/;
	var cby = $("#cardCount").val();
	$("#pmoney").css("display","none");
    $('#errorNumId').text('');
    if('' == cby || cby == null ) {
    	$('#errorNumId').removeClass();
		$('#errorNumId').addClass('note note-wrong').show();
		$('#pointMessage').css('display','none');
		$('#cybMessage').css('display','none');
		$('#errorNumId').text('咦？您还没有输入充值金额哦 ');
		
    	return false;   
    }  
    if(cby.indexOf(" ") != -1){
		$('#errorNumId').removeClass();
		$('#errorNumId').addClass('note note-wrong').show();
		$('#cybMessage').css('display','none');
		$('#errorNumId').text('呦！充值面额中不可以包含空格哦');
		return false;
	}
    if(!strP.test(cby) || cby %100 !=0 || cby > 10000000 || cby <100) {
    	$('#errorNumId').removeClass();
		$('#errorNumId').addClass('note note-wrong').show();
		$('#cybMessage').css('display','none');
		$('#errorNumId').text('呦！充值面额需要是 100-10000000 的整数且100的倍数哦 ');
    	return false;   
    }   
    
    $('#errorNumId').removeClass();
    showMoney(cby,0);    
    return true;    
} 
/**
 * 校验点数
 * @return
 */
function checkPoints() { 
	var strP=/^\d+$/;
	var points = $("#gameCardCount").val();
	$("#pmoney").css("display","none");
    $('#errorNumId').text('');
    var psCode = $("#psCode").val();
    var index = 1;
    var beishu = 20;
    if (psCode == 'DL') {
    	index = 2;
    	beishu = 10;
	}
    if('' == points || points == null ) {
    	$('#errorNumId').removeClass();
		$('#errorNumId').addClass('note note-wrong').show();
		$('#pointMessage').css('display','none');
		$('#errorNumId').text('咦？您还没有输入充值金额哦 ');
		return false;   
    }  
    if(points.indexOf(" ") != -1){
		$('#errorNumId').removeClass();
		$('#errorNumId').addClass('note note-wrong').show();
		$('#pointMessage').css('display','none');
		$('#errorNumId').text('呦！充值面额中不可以包含空格哦');
		return false;
	}
    if(!strP.test(points) ||points %beishu != 0 || points > beishu * 100000 || points <beishu) {
    	$('#errorNumId').removeClass();
		$('#errorNumId').addClass('note note-wrong').show();
		$('#pointMessage').css('display','none');
		$('#errorNumId').text('呦！充值面额需要是 '+beishu+"-"+beishu * 100000+'的整数且' + beishu + ' 的倍数哦 ');
    	return false;   
    }   
    $('#errorNumId').removeClass();
     
    
	
	 showMoney(points,index);  
	
    return true;    
}

function checkDyPoint(totalCyb) {
	var strP=/^\d+$/;
	var points = $("#point").val();
	var psCode = $("#psCode").val();
	
	var conumeCyb = Math.round(points * 5); 
	var beishu = 20;
    
	if (psCode == 'DL') {
		conumeCyb = Math.round(points * 10); 
		beishu = 10;
	}
	$("#pmoney").css("display","none");
    $('#errorNumId').text('');
    if('' == points || points == null ) {
    	$('#errorNumId').removeClass();
		$('#errorNumId').addClass('note note-wrong').show();
		$('#pointMessage').css('display','none');
		$('#errorNumId').text('咦？您还没有输入充值金额哦 ');
		return false;   
    }  
    if(points.indexOf(" ") != -1){
		$('#errorNumId').removeClass();
		$('#errorNumId').addClass('note note-wrong').show();
		$('#pointMessage').css('display','none');
		$('#errorNumId').text('呦！充值面额中不可以包含空格哦');
		return false;
	}
    if(!strP.test(points) ||points %beishu != 0 || points > beishu * 10000 || points <beishu) {
    	$('#errorNumId').removeClass();
		$('#errorNumId').addClass('note note-wrong').show();
		$('#pointMessage').css('display','none');
		$('#errorNumId').text('呦！充值面额需要是 '+beishu+"-"+beishu * 10000+'的整数且' + beishu + ' 的倍数哦 ');
    	return false;   
    }   
    if(parseInt(conumeCyb) > parseInt(totalCyb)){
    	$('#errorNumId').removeClass();
		$('#errorNumId').addClass('note note-wrong').show();
		$('#pointMessage').css('display','none');
		$('#errorNumId').text('呦！你的畅游币数量不足 ');
    	return false;    
    }   
    $('#errorNumId').removeClass();
    showConsumeCyb(points);  
    return true;    
}

function showConsumeCyb(points) {
	var psCode = $("#psCode").val();
	var conumeCyb = Math.round(points * 5);
	if (psCode == 'DL') {
		conumeCyb = Math.round(points * 10); 
	}
	$("#consumeCyb").text(conumeCyb);
	$("#pmoney").css("display","block");
	$('#pointMessage').css('display','block');
}

function checkIsExistCn() {
	var postData = '';
	var cn =$('#cn').val();
	if('' == cn || null == cn) {
		$('#errorId').removeClass();
		$('#errorId').addClass('note note-wrong').show();
		$('#errorId').text('咦？您还没有输入通行证哦');
		return false;
	}
	if(cn.indexOf(" ") != -1){
		$('#errorId').removeClass();
		$('#errorId').addClass('note note-wrong').show();
		$('#errorId').text('呦！通行证中不可以包含空格哦');
		return false;
	}
	if(!testCn(cn)) {
		$('#errorId').removeClass();
		$('#errorId').addClass('note note-wrong').show();
		$('#errorId').text('呦！通行证的格式不正确哦');
		return false;
	}
	
	$('#errorId').removeClass();
	$('#errorId').html('');
	//$('#errorId').addClass('note note-right').show();
	return true;
	/*
	var returnArray = false;
	$.ajax({
				type : "POST",
				url : "/card/checkIsExistCn.do?cn=" + cn,
				data : postData,
				async : false,
				success : function(data) {
					eval("var json =" + data);
					if (data == 'true') {
						$('#errorId').removeClass();
						$('#errorId').html('');
						$('#errorId').addClass('note note-right').show();
						returnArray = true;
					} else {
						$('#errorId').removeClass();
						$('#errorId').addClass('note note-wrong').show();
						$('#errorId').text('呦！您输入的通行证不存在哦');
						returnArray = false;
					}
				}
			});
	return returnArray;*/
}
function checkConfirmCn() {
	var postData = '';
	var cn =$('#cn').val();
	var confirmcn =$('#confirmcnId').val();
	if('' == confirmcn || null == confirmcn) {
		$('#errorconfirmId').removeClass();
		$('#errorconfirmId').addClass('note note-wrong').show();
		$('#errorconfirmId').text('咦？请重复输入您的通行证');
		return false;
	} 
	if(confirmcn.indexOf(" ") != -1){
		$('#errorconfirmId').removeClass();
		$('#errorconfirmId').addClass('note note-wrong').show();
		$('#errorconfirmId').text('呦！通行证中不可以包含空格哦');
		return false;
	}
	if(!testCn(confirmcn)) {
		$('#errorconfirmId').removeClass();
		$('#errorconfirmId').addClass('note note-wrong').show();
		$('#errorconfirmId').text('呦！通行证的格式不正确');
		return false;
	}
	if(cn != confirmcn) {
		$('#errorconfirmId').removeClass();
		$('#errorconfirmId').addClass('note note-wrong').show();
		$('#errorconfirmId').text('呦！您两次输入的通行证不一致哦');
		return false;
	}
		
	$('#errorconfirmId').removeClass();
	$('#errorconfirmId').html('');
	//$('#errorconfirmId').addClass('note note-right').show();
	return true;
	
	/*
	var returnArray = false;
		
	$.ajax({
				type : "POST",
				url : "/card/checkIsExistCn.do?cn=" + cn,
				data : postData,
				async : false,
				success : function(data) {
					eval("var json =" + data);
					if (data == 'true') {
						$('#errorconfirmId').removeClass();
						$('#errorconfirmId').html('');
						$('#errorconfirmId').addClass('note note-right').show();
						returnArray = true;
					} else {
						$('#errorconfirmId').removeClass();
						$('#errorconfirmId').addClass('note note-wrong').show();
						$('#errorconfirmId').text('呦！您输入的通行证不存在哦');
						returnArray = false;
					}
				}
			});
			
	return returnArray;*/
	
}
function IsDigit(cCheck) {
	return (('0' <= cCheck) && (cCheck <= '9'));
}
function checkCardNo() {
	var str_number = $.trim($('#cardNo').val());
	if (str_number == "") {
		$('#errorCardNo').removeClass();
		$('#errorCardNo').addClass('note note-wrong').show();
		document.getElementById("errorCardNo").innerHTML = "咦？您还没有输入充值卡号哦";
		return false;
	}
	if (str_number.length != 20) {
		$('#errorCardNo').removeClass();
		$('#errorCardNo').addClass('note note-wrong').show();
		document.getElementById("errorCardNo").innerHTML = "呦！您输入的充值卡卡号位数不对呀";
		return false;
	}
	for (nIndex = 0; nIndex < str_number.length; nIndex++) {
		cCheck = str_number.charAt(nIndex);
		if (!(IsDigit(cCheck))) {
			$('#errorCardNo').removeClass();
			$('#errorCardNo').addClass('note note-wrong').show();
			document.getElementById("errorCardNo").innerHTML = "咦？充值卡号只能输入数字哦";
			return false;
		}
	}
	$('#errorCardNo').removeClass();
	$('#errorCardNo').addClass('note note-right').show();
	document.getElementById("errorCardNo").innerHTML = "";
	return true;
}
function checkCardPwd(){
	var str_pwd = $.trim($('#cardPwd').val());
	if (str_pwd == ""){
			$('#errorCardPwd').removeClass();
			$('#errorCardPwd').addClass('note note-wrong').show();
			document.getElementById("errorCardPwd").innerHTML ="咦？您还没有输入充值卡密码哦";
			return false;
		}
		if(str_pwd.length != 12){
			$('#errorCardPwd').removeClass();
			$('#errorCardPwd').addClass('note note-wrong').show();
			document.getElementById("errorCardPwd").innerHTML ="呦！您输入的充值卡密码位数不对呀";
			return false;			
		}	
	    for (nIndex=0; nIndex<str_pwd.length; nIndex++){
	        cCheck = str_pwd.charAt(nIndex);
	        if (!(IsDigit(cCheck))){
	        	$('#errorCardPwd').removeClass();
				$('#errorCardPwd').addClass('note note-wrong').show();
				document.getElementById("errorCardPwd").innerHTML ="咦？充值卡密码只能输入数字哦";
	            return false;
	        }
	    }		
   		$('#errorCardPwd').removeClass();
		$('#errorCardPwd').addClass('note note-right').show();
		document.getElementById("errorCardPwd").innerHTML = "";
		return true;
}	
//加载验证码
function reloadCheckCode(){
	var cC=document.getElementById("checkcodeId");
	var value = parseInt(Math.random()*10000);
	cC.src="http://auth.changyou.com/servlet/ImageCode?random_mark="+value;
}
function reloadImageCode4En(){
	var cC=document.getElementById("imageCodeId");
	var value = parseInt(Math.random()*10000);
	cC.src="http://auth.changyou.com/servlet/ImageCode?random_mark="+value;
}

//网银表单校验
function bankSubmit(){
	var cardCount = $("#cardCount");
	var gameCardCount = $("#gameCardCount");
	if(!checkIsExistCn()){
		
		return false;
	}
	if(!checkConfirmCn()){
		return false;
	}
	if(cardCount.length != 0){
		if(!checkCyb()){
			return false;
		}
	}
	if(gameCardCount.length != 0){
		if(!checkPoints()){
			return false;
		}
	}
	if(!checkChnl()){
		return false;
	}
	if(!checkAnnexCode()) {
		    return false ;
    }
	$("#infoForm").submit();
}
//网银表单校验
function bankSelfSubmit(){
	var cardCount = $("#cardCount");
	var gameCardCount = $("#gameCardCount");
	
	if(cardCount.length != 0){
		if(!checkCyb()){
			return false;
		}
	}
	if(gameCardCount.length != 0){
		if(!checkPoints()){
			return false;
		}
	}
	if(!checkChnl()){
		return false;
	}	

	$("#infoSelfForm").submit();
}
function checkChnl(){
	var chnl = $("input:radio[name='cardOrders.chnl']:checked").val();
	if(chnl == null){
		$('#errorChnlId').removeClass();
		$('#errorChnlId').addClass('note-wrong wyError').show();
		if($('#chnlType').val() == 'alipay') {
			$('#errorChnlId').text('咦？您还没有选择充值平台哦');
		} else {
			$('#errorChnlId').text('咦？您还没有选择充值银行哦');
		}
		return false;
	}
	$('#errorChnlId').text('');
	$('#errorChnlId').removeClass();
	return true;
}

/**
 * 获得畅游币个数
 * @param cyb 畅游币个数
 * @return
 */
function getCybVal(cyb){
	$("#cardCount").val(cyb);
	checkCyb();
//	$("#total").css("display","none");
}
/**
 * 获得端游点数
 * @param points 端游点数
 * @return
 */
function getPointsVal(points){
	points = String(points);
	points = points.replace(/,/g,'');
	$("#gameCardCount").val(points);
	//var showPoint = "";
	//var points = String(points);
	//if(3 < points.length){
	//	for(var i=points.length;i>=0;i=i-3){
	//		if(i<=3){
	//			showPoint = points.substring(0,i) + showPoint;
	//			break;
	//		}else{
	//			showPoint = showPoint + "," + points.substring(i-3,i);
	//		}
	//	}
		
	//}
	var value=numberDeal(points);
	$("#showMiane").val(value);
	checkPoints();
//	$("#total").css("display","none");
}

function numberDeal(num){
	var showPoint = "";
	
	var num = String(num);
	num = num.replace(/,/g,'');
	if(3 < num.length){
		for(var i=num.length;i>=0;i=i-3){
			if(i<=3){
				showPoint = num.substring(0,i) + showPoint;
				break;
			}else{
				
				showPoint = "," + num.substring(i-3,i) + showPoint;
				//console.log(showPoint);
			//	console.log(num);
			}
		}
		return showPoint;
	} else {
		
		return num;
	}

	
}
/**
 * 校验cn
 * @param cn
 * @return
 */
function testCn(cn){
	cn = trim(cn);
	/**
	if(isnull(cn)){
		return '';
	}**/
	//手机
	if(f_check_mobile(cn)){
		return true;
	}
	
	//邮箱
	if(f_check_email(cn)){
		return true;
	}
	
	return false;
}

function checkAnneCode() {
	var postData = "";
	var annexcode = $.trim($('#annexcode').val());
	if("" == annexcode) {
	    	$('#errorAnncode').removeClass();
			$('#errorAnncode').addClass('note note-wrong').show();
			document.getElementById("errorAnncode").innerHTML ="咦？您还没有输入验证码哦";
			return false;
	}	
	$('#errorAnncode').removeClass();
	$('#errorAnncode').addClass('').show();
	document.getElementById("errorAnncode").innerHTML = "";
	return true;
}

function submitcheckAnneCode() {
/*	var postData = "";
	var annexcode = $.trim($('#annexcode').val());
	var returnArray = false;
	$.ajax({
		type : "POST",
		url : "/card/checkAnnCode.do",
		data : "trueAnnexcode=" + annexcode,
		async : false,
		success : function(data) {
			if (data == 'true') { //验证码正确
				$('#errorAnncode').removeClass();
				$('#errorAnncode').addClass('note note-right').show();
				document.getElementById("errorAnncode").innerHTML = "";
				returnArray = true;
			} else { //验证码不正确
				$('#errorAnncode').removeClass();
				document.getElementById("errorAnncode").innerHTML = "呦！您输入的验证码不正确呀";
				$('#errorAnncode').addClass('note note-wrong').show();
				returnArray = false;
				reloadCheckCode();
			}
		}
	});
	return returnArray;*/
	return true ;
}

function panel(account,total){
	$(account).keyup(function(){
		$(total).css('display','none');			
	  });
}
//根据畅游币，点数。显示金额
function showMoney(cby,index){
	var discountRule = parseInt($("#discountRule").val()) / 100;
	var realMoney,saveMoney;
	if(index == 0){
		//var realMoney = Math.round(cby / 100 * 0.95 * 100)/100;
		//var saveMoney = Math.round(cby / 100 * 0.05 * 100)/100;
		realMoney = Math.round(cby / 100 * discountRule * 100)/100;
		saveMoney = Math.round(cby / 100 * (1-discountRule) * 100)/100;		
	} else if (index == 1){
		//var realMoney = Math.round(cby / 20 * 0.95 * 100)/100;
		//var saveMoney = Math.round(cby / 20 * 0.05 * 100)/100;
		realMoney = Math.round(cby / 20 * discountRule * 100)/100;
		saveMoney = Math.round(cby / 20 * (1-discountRule) * 100)/100;
	} else if (index == 2){
		//var realMoney = Math.round(cby / 20 * 0.95 * 100)/100;
		//var saveMoney = Math.round(cby / 20 * 0.05 * 100)/100;
		realMoney = Math.round(cby / 10 * discountRule * 100)/100;
		saveMoney = Math.round(cby / 10 * (1-discountRule) * 100)/100;
	}
	var value = numberDeal(realMoney);
	
	$("#realMoney").text(value);
	
	if(realMoney >= 10000){
		var cashWY = realMoney / 10000;
		$("#cashZW").text('('+cashWY+'万元)');
	}else {
		$("#cashZW").text('');
	}
	if (0 != saveMoney) { 
		var str = '&nbsp已为您节省：<span class="imp">' + saveMoney + '</span>元';
		$("#saveMoney").html(str);
	}
	$("#pmoney").css("display","block");
	$('#pointMessage').css('display','block');
	
}
/**
 * 点击“支付宝充值”连接触发，提交表单 （无登陆，给他人）
 * @return
 */
function alipaySubmit(){
	var infoForm = $('#infoForm');
	var whom = $('#whom');
	$('#chnlType').val('alipay');
	if(whom == 'others'){
		infoForm.attr('action','/bank/whomInit.do');
	}else{
		infoForm.attr('action','/bank/init.do');
	}
	infoForm.submit();
}
/**
 * 点击“支付宝充值”连接触发，提交表单（自充）
 * @return
 */
function alipaySelfSubmit(){
	var infoSelfForm = $('#infoSelfForm');
	$('#chnlType').val('alipay');
	infoSelfForm.attr('action','/bank/whomInit.do');
	infoSelfForm.submit();
}
function bankChecked(index){
	var bankWaya = $('#bank'+index);
	bankWaya.attr('checked','checked');
}
//工具方法（判断不为空）
function isNull(str){
	if('' == trim(str) || trim(str) == null || 'null' == trim(str)){
		return true;
	}
	return false;
}
function otherInput(id,errorNumId,pmoney,cybMessage){
	//隐藏错误信息提示及金额提示
	$('#'+errorNumId).removeClass();
	$('#'+errorNumId).text('');
	$('#'+pmoney).css('display','none');
	$('#'+cybMessage).css('display','block');
	//清空充值面额输入框中的内容，显示焦点
	var cardCount = $('#'+id);
	cardCount.val('');
	cardCount.focus();
}

//得到日期格式2012-09-23的工具栏，getDate(0)是今天，getDate(-1)是昨天，getDate(1)是明天
function getDate(subDate){
	var date = new Date();
	date.setDate(date.getDate() + subDate);
	var dateString = date.getFullYear() + "-" + ((date.getMonth()+1)<10?('0'+(date.getMonth()+1)):(date.getMonth()+1)) + "-" + (date.getDate()<10?('0'+date.getDate()):date.getDate());
	return dateString;
}

//手机钱包相关
function showErrMsg(id,classname,msg){
	$("#"+id).removeClass();
    $("#"+id).addClass(classname).show();
    $("#"+id).html(msg);
}
function IsDigit(cCheck) { 
    return (('0'<=cCheck) && (cCheck<='9')); 
}
function changePrice(price) { 
    var point = price * rate ;
    $("#point").text(point) ;
    $("#showPoint").show() ;
    $('#errorPriceMsg').removeClass();
    $('#errorPriceMsg').text('');
}
function changeWGPrice(price) { 
    var point = price * rate / 10;
    $("#point").text(point) ;
    $("#showPoint").show() ;
    $('#errorPriceMsg').removeClass();
    $('#errorPriceMsg').text('');
}
function checkPrice(){
    var chnl = $("input:radio[name='phoneOrder.price']:checked").val();
    if(chnl == null){
    	showErrMsg('errorPriceMsg','note note-wrong','咦？您还没有选择充值金额哦');       
        return false;
    }    
    return true;
}
function checkPhone(){
    var phone = $("#phone").val();                       
    if (null == phone || '' == $.trim(phone)){  
       showErrMsg('errorPhoneMsg','note note-wrong','咦？您还没有输入手机号码哦');   
       return false;
    }
    if(11!=phone.length || 1!=phone.charAt(0)) {
    	showErrMsg('errorPhoneMsg','note note-wrong','呦！您输入的手机号码格式不对哦');   
        return false ;
    }
    for(nIndex=0;nIndex<phone.length;nIndex++){
        cCheck = phone.charAt(nIndex);
        if(!IsDigit(cCheck)){
        	showErrMsg('errorPhoneMsg','note note-wrong','呦！您输入的手机号码格式不对哦');   
            return false ;
        }
    }   
    var reg_yd =/^0{0,1}(13[4-9]|15[7-9]|15[0-2]|18[7-8]|182|183|147|184)[0-9]{8}$/;
    var reg_lt =/^0{0,1}(13[0-2]|15[5-6]|185|186)[0-9]{8}$/;
    var reg_dx =/^(133|153|189|180|181)[0-9]{8}$/;
    if(reg_yd.test(phone)){
    	showErrMsg("errorPhoneMsg",'note','<img src="http://i3.itc.cn/20120821/2b3c_4bcfa790_f009_f7ed_1bca_d5f43d935afa_2.jpg"/>');
        $("#phoneType").val("1") ;
        return true;
    }
    if(reg_lt.test(phone)){
    	showErrMsg("errorPhoneMsg",'note','<img src="http://i3.itc.cn/20120821/2b3c_4bcfa790_f009_f7ed_1bca_d5f43d935afa_3.jpg"/>');
        $("#phoneType").val("2") ;
        return true;
    }
    if(reg_dx.test(phone)){
    	showErrMsg("errorPhoneMsg",'note','<img src="http://i0.itc.cn/20120821/2b3c_4bcfa790_f009_f7ed_1bca_d5f43d935afa_1.jpg"/>');
        $("#phoneType").val("3") ;
        return true;
    }
    showErrMsg('errorPhoneMsg','note note-wrong','呦！您输入的手机号码格式不对哦');   
    return false;
}
function IsAlpha(cCheck) { return ((('a'<=cCheck) && (cCheck<='z')) || (('A'<=cCheck) && (cCheck<='Z'))) }


function checkAnnexCode(){
	var annexCode = $.trim($('#annexCode').val());
    if(annexCode == null || '' == annexCode){
    	showErrMsg('annexCodeMsg','note note-wrong','咦？您还没有输入验证码哦');
    	return false;
    }
    showErrMsg('annexCodeMsg','note note-right','');
    return true; 
}