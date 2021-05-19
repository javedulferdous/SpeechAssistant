console.log('uid=');
//*** page id: searchresults
//*** product id: searchresults
//*** forceOutOfStock=false
//*** public_mod_structuredData_renderJsonLd NOT found

//*** mod_storeClosed called

var pdServerTime = new Date("2020-11-01T08:24:39-06:00");
var pdProductId = "searchresults";

//************************************************
//************ JS/CSS FILE ROUTINES  *************
//************************************************
function pdLoadJsCssFile(filename, filetype){
    if (filetype=="js") {
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("async",true);
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css") {
        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
}
function pdAddStyle(css) {
    var style = document.createElement("style");
    style.innerHTML = css;
    document.getElementsByTagName("body")[0].appendChild(style);
}


/*	pdGetElementsByClassName -- Revised to avoid JS conflicts with libraries that override native "getElementsByClassName" browser function in IE
	Developed by Robert Nyman, http://www.robertnyman.com
	Code/licensing: http://code.google.com/p/getelementsbyclassname/
*/	
var pdGetElementsByClassName = function (className, tag, elm){
	var ieVersion = getInternetExplorerVersion();
	if (ieVersion == -1 && document.getElementsByClassName) {
		pdGetElementsByClassName = function (className, tag, elm) {
			elm = elm || document;
			var elements = elm.getElementsByClassName(className),
				nodeName = (tag)? new RegExp("\b" + tag + "\b", "i") : null,
				returnElements = [],
				current;
			for(var i=0, il=elements.length; i<il; i+=1){
				current = elements[i];
				if(!nodeName || nodeName.test(current.nodeName)) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	else if (document.evaluate) {
		pdGetElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = "",
				xhtmlNamespace = "http://www.w3.org/1999/xhtml",
				namespaceResolver = (document.documentElement.namespaceURI === xhtmlNamespace)? xhtmlNamespace : null,
				returnElements = [],
				elements,
				node;
			for(var j=0, jl=classes.length; j<jl; j+=1){
				classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]";
			}
			try	{
				elements = document.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null);
			}
			catch (e) {
				elements = document.evaluate(".//" + tag + classesToCheck, elm, null, 0, null);
			}
			while ((node = elements.iterateNext())) {
				returnElements.push(node);
			}
			return returnElements;
		};
	}
	else {
		pdGetElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = [],
				elements = (tag === "*" && elm.all)? elm.all : elm.getElementsByTagName(tag),
				current,
				returnElements = [],
				match;
			for(var k=0, kl=classes.length; k<kl; k+=1){
				classesToCheck.push(new RegExp("(^|\s)" + classes[k] + "(\s|$)"));
			}
			for(var l=0, ll=elements.length; l<ll; l+=1){
				current = elements[l];
				match = false;
				for(var m=0, ml=classesToCheck.length; m<ml; m+=1){
					match = classesToCheck[m].test(current.className);
					if (!match) {
						break;
					}
				}
				if (match) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	return pdGetElementsByClassName(className, tag, elm);
};
function pdIsBlank(item) {
	item = String(item).toLowerCase();
	if(item == "undefined" || item == "" || item == "null") return true;
	else return false;
}
function isBlank(item) {
	return pdIsBlank(item);
}
function pdGetCurrentDomainName() {
	var url = String(location);
	var domainName = pdExtractDomain(url);
	return domainName;
}
function pdExtractDomain(url) {
	var url = url.replace("http://", "");
	url = url.replace("https://", "");
	var slashIndex = url.indexOf("/");
	if(slashIndex == -1) slashIndex = url.length;
	var url = url.substring(0, slashIndex);
	var urlSectionArray = url.split('.');
	var urlSectionArrayLength = urlSectionArray.length;
	var domainName = "";
	for(var i=urlSectionArrayLength - 2;i<urlSectionArrayLength; i++) {
		domainName += "." + urlSectionArray[i];
	}
	return domainName;
}
function pdGetCookie(cookieName) {
	var allCookies = String(document.cookie);
	var cookieStart = allCookies.indexOf(cookieName + "=");
	if(cookieStart == -1) return "";
	cookieStart = cookieStart + cookieName.length + 1;
	var cookieEnd = allCookies.indexOf(";", cookieStart);
	if(cookieEnd == -1) cookieEnd = allCookies.length;
	var cookieValue = allCookies.substring(cookieStart, cookieEnd);
	cookieValue = decodeURIComponent(cookieValue);
	if(cookieName == "pdRememberMe") cookieValue = String(cookieValue).replace("+"," ");	//*** ENCODING WORKAROUND
	return cookieValue;
}
function pdSetCookie(cookieName, cookieValue, cookieDomain, cookiePath, expirationDate) {
	if(isBlank(cookieDomain)) cookieDomain = pdGetCurrentDomainName();
	if(isBlank(cookiePath)) cookiePath = "/";
	var cookieString = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue) + ";domain=" + cookieDomain + ";path=" + cookiePath;
	if(!isBlank(expirationDate)) {
		cookieString += ";expires=" + expirationDate.toGMTString();
	}
	document.cookie = cookieString;
	return true;
}
function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
function pdIsMobileDevice() {
	var isMobile = false;
	var signatureList = new Array('iphone', 'ipod', 'android', 'palm', 'blackberry', 'devices60', 'devicesymbian', 'windows ce', 'opera mini', 'webos', 'windows phone', 'playbook');
	var agent = navigator.userAgent.toLowerCase();
	for(var i=0;i<signatureList.length;i++) {
		if(agent.indexOf(signatureList[i]) > -1) {
			if(signatureList[i] == 'android') {	//*** ONLY CONSIDER android a mobile device if "mobile" is also present in user agent string
				if(agent.indexOf("mobile") > -1) isMobile = true;
			} else {
			 	isMobile = true;
			}
		}
	}
	return isMobile;
}
function pdIsIpad() {
	var isIpad = false;
	var signatureList = new Array('ipad');
	var agent = navigator.userAgent.toLowerCase();
	for(var i=0;i<signatureList.length;i++) {
		if(agent.indexOf(signatureList[i]) > -1) isIpad = true;
	}
	return isIpad;
}
function pdIsTablet() {
	var isTablet = false;
	var signatureList = new Array('ipad', 'android');
	var agent = navigator.userAgent.toLowerCase();
	for(var i=0;i<signatureList.length;i++) {
		if(agent.indexOf(signatureList[i]) > -1) {
			isTablet = true;	//*** ASSUME TABLET
			if(signatureList[i] == 'android') {	//*** ONLY CONSIDER android a mobile device if "mobile" is also present in user agent string
				if(agent.indexOf("mobile") > -1) isTablet = false;
			} else {
			 	isTablet = true;
			}
		}
	}
	return isTablet;
}
function pdFormatCurrency(num, includeDollarSign) {
	num = num.toString().replace(/$|\,/g,'');
	if(isNaN(num))
	num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	cents = num%100;
	num = Math.floor(num/100).toString();
	if(cents<10)
	cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	num = num.substring(0,num.length-(4*i+3))+','+
	num.substring(num.length-(4*i+3));	
	var returnValue = (((sign)?'':'-') + num + '.' + cents);
	if(includeDollarSign == true) returnValue = "$" + returnValue;	
	return returnValue;
}
function pdFindParentForm(element) {
    var elm,parentForm;
    for (elm = element.parentNode; elm; elm = elm.parentNode) {
        if(elm.tagName.toLowerCase() == "form") {
        	parentForm = elm;
        	break;
        }
    }
	return parentForm;
}
function pdHideForLoggedInUser() {
	var hideList = pdGetElementsByClassName("pdHideForLoggedInUser", null);
	for(var i=0;i<hideList.length;i++) {
		hideList[i].style.display = "none";	
	}
	return false;
}
function pdShowForLoggedInUser() {
	var showList = pdGetElementsByClassName("pdShowForLoggedInUser", null);
	var displayType = "block";
	for(var i=0;i<showList.length;i++) {
		if(showList[i].nodeName == "TR") displayType = "table-row";
		else if(showList[i].nodeName == "SPAN") displayType = "inline";
		else displayType = "block";
		showList[i].style.display = displayType;
	}
	return false;
}
function pdHideForDiscountedUser() {
	var hideList = pdGetElementsByClassName("pdHideForDiscountedUser", null);
	for(var i=0;i<hideList.length;i++) {
		hideList[i].style.display = "none";	
	}
	return false;
}
function pdShowForDiscountedUser() {
	var showList = pdGetElementsByClassName("pdShowForDiscountedUser", null);
	var displayType = "block";
	for(var i=0;i<showList.length;i++) {
		if(showList[i].nodeName == "TR") displayType = "table-row";
		else if(showList[i].nodeName == "SPAN") displayType = "inline";
		else displayType = "block";
		showList[i].style.display = displayType;
	}
	return false;
}
function pdHideForWholesale() {
	var hideList = pdGetElementsByClassName("pdHideForWholesale", null);
	for(var i=0;i<hideList.length;i++) {
		hideList[i].className = "pdHide";	//*** DEPRECATED
		hideList[i].style.display = "none";
	}
	hideList = pdGetElementsByClassName("pdHideFromWholesale", null);	//*** LEGACY SUPPORT (DEPRECATED)
	for(var i=0;i<hideList.length;i++) {
		hideList[i].className = "pdHide";	//*** DEPRECATED
		hideList[i].style.display = "none";
	}
	return false;
}
function pdShowForWholesale() {
	var showList = pdGetElementsByClassName("pdShowForWholesale", null);
	var displayType = "block";
	for(var i=0;i<showList.length;i++) {
		if(showList[i].nodeName == "TR") displayType = "table-row";
		else if(showList[i].nodeName == "SPAN") displayType = "inline";
		else displayType = "block";
		showList[i].style.display = displayType;
	}
	return false;
}if (typeof pdPerformTimestampActions === "function") {
	pdPerformTimestampActions(1604240679000);
}
pdLoadJsCssFile("https://cdn.practicaldatacore.com/sportsunlimitedinc/mod_productReviews/pdPrStyle.css?cb=1782489", "css");
pdLoadJsCssFile("https://cdn.practicaldatacore.com/sportsunlimitedinc/mod_questionsAndAnswers/pdQaStyle.css?cb=1782489", "css");


//*** CATEGORY ID: **** 
//*** PRODUCT ID:searchresults **** 
//*** PRODUCT LIST - REWARDS: **** 
//*** PRODUCT LIST - REVIEWS: **** 

 //**** INCLUDE PRODUCT.PHP FILE **** 

 //**** REWARDS ****** 

//*** BEGIN public_mod_myRewards_getRenderedPromotionMessagingJsInsertionCode ***
jQuery("<style>").attr("type", "text/css").html("/*.pdRewardsPromoWrap{	width:341px;	margin-top:0px;	padding:0 0 5px 0;	background-color:#ffffff;	position: relative;	top: -9px;}.pdRewardsPromoWrap a{font-size:11px;}*/.pdRewardsPromoDefault{font-size: 12px; font-family: Arial;}.pdRewardsPromoDefault img {	position: relative;	top: 2px;	width: 88px;	height: 15px;}.pdRewardsPromoDateRange{	width:341px;	margin-top:0px;	padding:0 0 5px 0;	background-color:#ffffff;	/*border-bottom:2px dashed #cccccc;*/	position: relative;	top: -0px;}.pdRewardsPromoProduct{	margin-top:5px;	padding:5px;	background-color:#f3f3b3;	border:1px solid #d4ba32;	font-weight:700;}.pdRewardsPromoRules{	margin-top:5px;	padding:5px;	background-color:#f3f3b3;	border:1px solid #d4ba32;	font-weight:700;}.pdRewardsPromoDateRange img {	position: relative; 	top: 2px;	width: 88px;	height: 15px;}").appendTo("head");
jQuery("div.pdRewardsPromoMessage[productId='searchresults']").html("<div class=\"pdRewardsPromoWrap\"><strong>0 points</strong> for this item!  <a href=\"https://myaccount.sportsunlimitedinc.com/mod_myRewards/rewardsLanding.php\"><img src=\"https://cdn.practicaldatacore.com/sportsunlimitedinc/cdnLibrary/core/img-getrewards.png\" alt=\"Get Rewards\" /></a></div>");

//*** END public_mod_myRewards_getRenderedPromotionMessagingJsInsertionCode ***

//*** mod_backInStockNotification
//***WHOLESALE addDiscountOptionToOrderForm METHOD 
//**** INCLUDE PRODUCT ID LIST CSV HANDLING (DYNAMIC RATING STARS) ****
var pdStarsRefreshFlag = true;function pdDisplayCategoryStars() {
	if(pdStarsRefreshFlag == true) {
		jQuery(".pdRatingStarsWrapper[productId='']").html("");
		pdStarsRefreshFlag = false;
	}

}
pdDisplayCategoryStars();


if (typeof pdPerformLoginActions === "function") {
	pdPerformLoginActions(false);
}
//*********************************
//*** BEGIN mod_promotionCenter ***
//*********************************

//*** COULD NOT FIND PUBLIC FUNCTION 'public_mod_promotionCenter_getRenderedPageScript2()'

//*******************************
//*** END mod_promotionCenter ***
//*******************************


//**** CART ITEM COUNT MESSAGE ***** 
function pdDisplayCartItemCount() {
	var pdCartItemCount = pdGetCookie('pdCartItemCount');
	var pdCartItemCountMessage = pdCartItemCount;
	jQuery('.pdCartItemCountMessage').html(pdCartItemCountMessage);
}
pdDisplayCartItemCount();

//*** pageScript end (0.01866s elapsed)
