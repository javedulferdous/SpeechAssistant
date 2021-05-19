





<!--

/** ID **/
//エリアリスト
this.AREA_TXT_K_ID = "dyn_area_txt_k";
this.AREA_TXT_A_ID = "dyn_area_txt_a";
this.AREA_TXT_D_ID = "dyn_area_txt_d";
this.AREA_INPT_K_ID = "dyn_area_inpt_k";
this.AREA_INPT_A_ID = "dyn_area_inpt_a";
this.AREA_INPT_D_ID = "dyn_area_inpt_d";
this.AREA_LIST_A_ID = "dyn_area_a_list";
this.AREA_LIST_K_ID = "dyn_area_k_list";
this.AREA_LIST_D_ID = "dyn_area_d_list";
this.AREA_LIST_D_CL = "dyn_area_d_list_itm";
this.AREA_DETAIL_LINK_ID = "detail_link";
this.AREA_IKISAKI_CAL_ID = "dyn_ikisaki_cal"
//宿泊日
this.CAL_LIST_ID = "dyn_cal_list";
this.CAL_LIST_NAME_ID = "dyn_cal_list_";
this.CAL_LIST_P_ID = "dyn_cal_list_n";
this.CAL_LIST_N_ID = "dyn_cal_list_nn";
this.Y_TXT_ID = "dyn_y_txt";
this.M_TXT_ID = "dyn_m_txt";
this.D_TXT_ID = "dyn_d_txt";
this.STAY_TXT_ID = "dyn_stay_txt";
this.ADULT_NUM_ID = "select-adult-num";
this.CHILD_NUM_ID = "dyn_child_num";
this.ROOM_NUM_ID = "select-room-count";
this.BADGET_MIN_ID = "dyn_badget_min";
this.BADGET_MAX_ID = "dyn_badget_max";
this.MEAL_TXT_ID = "dyn_meal_txt";
this.ROOM_TYPE_ID = "dyn_room_tye";
this.HOTEL_TYPE_ID = "dyn_hotel_type";
this.KODAWARI_TXT_ID = "dyn_kodawari_txt";
this.KODAWARI_TXT_ID2 = "dyn_kodawari_txt2";
this.DATE_CHECK_ID = "datecheck";
this.BADGET_TBL = "dyn_badget_tbl";
//@かえる Add Start Hikari 06.06.20
//子供人数詳細
this.CHILD1_NUM_ID = "child1Num";
this.CHILD2_NUM_ID = "child2Num";
this.CHILD3_NUM_ID = "child3Num";
this.CHILD4_NUM_ID = "child4Num";
this.CHILD5_NUM_ID = "child5Num";
//@かえる Add End
//@かえる対応 Modify 2006.3.10
//this.CHILD_NUM_WIN = "../05/05-06.html";
this.CHILD_NUM_WIN = getChildNumHref();

this.CHILD_NUM_TXT_ID1 = "dyn_child_num_txt_id1";
this.CHILD_NUM_TXT_ID2 = "dyn_child_num_txt_id2";
this.SHOGAKUSEI_NUM = "syogakusei";
this.YOJI_SHOKU_FUTON = "yoji_shoku_futon";
this.YOJI_SHOKU = "yoji_shoku";
this.YOJI_FUTON = "yoji_futon";
this.YOJI_NASI = "yoji_nasi";
this.CHILD_NUM_INPUT = "dyn_child_inpt";
//こだわり選択
// NSSOL 070213 変更
// this.KODAWARI_WIN = "/jalan/kensaku/list/select_condition.html";
this.KODAWARI_WIN = "/uw/uwp1400/uww1902.do";
this.KODAWARI_TXT_ID = "dyn_kodawari_txt";
this.KODAWARI_MORE_SPEC_ID = "dyn_more_spec";
this.KODAWARI_BUTTON_ID = "dyn_spec_btn";
this.KODAWARI_INPUT = "dyn_kodawari_inpt";
//他
/*
dyn_adult_num
dyn_room_num
*/
/************************************************
** 履歴系 ************
************************************************/
/****************************/

/****************************/
//ボタンblink
function imgSrcChange(pId, pImgPath){
	document.getElementById(pId).setAttribute("src", pImgPath);
}

/************************************************
** デフォルトコメント系 **
************************************************/
//デフォルトコメント用プロパティ

/****************************/
//デフォルトコメント(onfocus)
function clearDefComment(pId){
	var frmObj = document.getElementById(pId);
	var isInput = false;
	var frmStr = this.frmTxtArr[pId];

//調整070809ここから
	if (navigator.appName == "Netscape"){
		var clearDefCommentVar = new Array("他人に送るときは、びっくりされないよう、お名前をまず書いてお送りください。\nex.鈴木○○です。今度の旅行の行き先をまとめてみました……。"
									   ,"ここにメールアドレスを入れてください。");
	}
	
	if (navigator.userAgent.indexOf('Win') >= 0){
		if (navigator.appName == "Microsoft Internet Explorer"){
			var clearDefCommentVar = new Array("他人に送るときは、びっくりされないよう、お名前をまず書いてお送りください。\r\nex.鈴木○○です。今度の旅行の行き先をまとめてみました……。"
										   ,"ここにメールアドレスを入れてください。");
		}
	} else if (navigator.userAgent.indexOf('Mac') >= 0) {
		if (navigator.appName == "Microsoft Internet Explorer"){
			var clearDefCommentVar = new Array("他人に送るときは、びっくりされないよう、お名前をまず書いてお送りください。\rex.鈴木○○です。今度の旅行の行き先をまとめてみました……。"
										   ,"ここにメールアドレスを入れてください。");
		}
	}
	//alert(navigator.userAgent);
	
	if(frmObj.tagName.toLowerCase()=="input"){
		if(frmObj.value==frmStr){
			for (field in clearDefCommentVar) {
				if(frmObj.value == clearDefCommentVar[field]){
					frmObj.value = "";
					frmObj.style.color="#000000";
				}
			}
		}else if(frmObj.value==""){
			frmObj.value = frmStr;
			frmObj.style.color="#999999";
		}else{
			frmObj.style.color="#000000";
		}
	}else if(frmObj.tagName.toLowerCase()=="textarea"){
		if(frmObj.value==frmStr){
			for (field in clearDefCommentVar) {
				if(frmObj.value == clearDefCommentVar[field]){
					frmObj.value = "";
					frmObj.style.color="#000000";
				} else {
					frmObj.style.color="#000000";
				}
			}
		}else if(frmObj.value.length<1){
			frmObj.value = frmStr;
			frmObj.style.color="#999999";
		}else{
			frmObj.style.color="#000000";
		}
	}
//調整070809ここまで


//	if(frmObj.tagName.toLowerCase()=="input"){
//		if(frmObj.value==frmStr){
//			frmObj.value = "";
//			frmObj.style.color="#000000";
//		}else if(frmObj.value==""){
//			frmObj.value = frmStr;
//			frmObj.style.color="#999999";
//		}else{
//			frmObj.style.color="#000000";
//		}
//	}else if(frmObj.tagName.toLowerCase()=="textarea"){
//		if(frmObj.value==frmStr){
//			frmObj.value = "";
//			frmObj.style.color="#000000";
//		}else if(frmObj.value.length<1){
//			frmObj.value = frmStr;
//			frmObj.style.color="#999999";
//		}else{
//			frmObj.style.color="#000000";
//		}
//	}
}
/****************************/
this.frmTxtArr = new Array();
function defTxt(){
	this.frmTxtArr = arguments;
	var len = this.frmTxtArr.length;
	for(var i=0; i<len; i++){
		var obj = document.getElementById(this.frmTxtArr[i]);
		var txt = obj.tagName;
		if(obj.tagName.toLowerCase()=="input"){
			this.frmTxtArr[this.frmTxtArr[i]] = obj.value;
		}else if(obj.tagName.toLowerCase()=="textarea"){
			this.frmTxtArr[this.frmTxtArr[i]] = obj.innerHTML;
		}
	}
}
/************************************************
** 絞込み検索系 **
************************************************/
var loc = window.location.href;
function setShowArea(){
	if(loc.indexOf("searchForm2.html")>-1){
		document.onmousedown = monitorShowArea;
	}
}
setShowArea();
function monitorShowArea(evt){
	var evt = (evt) ? evt : ((window.event)? event :null);
	var target = (evt.target) ? evt.target : evt.srcElement;
	if(target.id=="dyn_area_txt_a"){
		showAreaListA2(getMouseX(evt));
	}
	else if(target.id=="dyn_area_txt_d"){
		showAreaListD2(getMouseX(evt));
	}
}
function getMouseX(evt){
	if (evt.pageX) {
		//W3C イベントモデル
		var target = (evt.target) ? evt.target : evt.srcElement;
		offsetX = evt.pageX - getElementX(target);
	} else if (typeof evt.offsetX != "undefined") {
		//IE イベントモデル
		offsetX = evt.offsetX - ((evt.offsetX < -2) ? 0 : document.body.scrollLeft);
		offsetX -= (document.body.parentElement && document.body.parentElement.scrollLeft) ? document.body.parentElement.scrollLeft : 0;
	} else if (typeof evt.clientX != "undefined") {
		offsetX = evt.clientX - ((selectedObj.offsetLeft) ? selectedObj.offsetLeft : 0);
	}
	return offsetX;
}
function getElementX(obj){
	targetElem  = obj;
	var offsetTrail = targetElem;
	var offsetLeft  = 0;
	//オフセットを取得(IDのcss互換モード対応)
	while( offsetTrail ){
		offsetLeft  += offsetTrail.offsetLeft;
		offsetTrail = offsetTrail.offsetParent;
	}
	return offsetLeft;
}
/****************************/
//エリアリスト
/* NSSOL 070213 コメントアウト START
this.curAREA = 0;
this.areaHideListA = [this.BADGET_TBL, this.STAY_TXT_ID];
this.areaHideListD = [this.BADGET_TBL, this.STAY_TXT_ID];
function showAreaListA(){
	document.getElementById(this.AREA_LIST_A_ID).style.display = "block";
	if(document.getElementById(this.AREA_LIST_D_ID).style.display == "block"){
		showAreaListD();
	}
	hideItems(this.areaHideListA);
	closeCalendar();
}
function showAreaListA2(pX){
	var obj = document.getElementById(this.AREA_LIST_A_ID);
	obj.style.display = "block";
	obj.style.marginLeft = pX+5;

	hideItems(this.areaHideListA);
	closeCalendar();
}
 NSSOL 070213 コメントアウト END*/

/* NSSOL 070213 追加 START */
function areaListHideFocus(evt){
        var evt = (evt) ? evt : ((window.event)? event :null);
        var target = (evt.target) ? evt.target : evt.srcElement;
        if(!checkPalNode(target, "dyn_area_list", 0)){
                visibleItems(calHideList);
//              closeCalendar();
                closeAreaListK();
                closeAreaListA();
                closeAreaListD;
        }
}
//this.curAREA = 0;

this.areaHideListK = [this.BADGET_TBL];

this.areaHideListA = [this.BADGET_TBL, this.STAY_TXT_ID, this.ADULT_NUM_ID];

this.areaHideListD = [this.BADGET_TBL, this.STAY_TXT_ID];

this.areaHideListMD = [this.BADGET_TBL, this.ADULT_NUM_ID, this.STAY_TXT_ID, this.ROOM_NUM_ID];


function showAreaListK(){
        closeAreaListA();
        closeAreaListD();
        document.getElementById(this.AREA_LIST_K_ID).style.display = "block";
        hideItems(this.areaHideListK);
        document.onmousedown = areaListHideFocus;
}

function showAreaListA(){
        closeAreaListK();

        document.getElementById(this.AREA_LIST_A_ID).style.display = "block";

        if(document.getElementById(this.AREA_LIST_D_ID).style.display == "block"){

                showAreaListD();

        }
        hideItems(this.areaHideListA);

//      closeCalendar();
        document.onmousedown = areaListHideFocus;
}

function showAreaListA2(pX){

        //alert("pX: " + pX);

        var obj = document.getElementById(this.AREA_LIST_A_ID);
        obj.style.display = "block";
        obj.style.marginLeft = pX+5;

        hideItems(this.areaHideListA);

//      closeCalendar();
        document.onmousedown = areaListHideFocus;
}
/* NSSOL 070213 追加 END */
/****************************/
function showAreaListD(rcd){
	closeAreaListK();
	
	var listObj = document.getElementById(this.AREA_LIST_D_ID);

	var areaAtxt = document.getElementById(this.AREA_TXT_A_ID).innerHTML;
	if(document.getElementById(this.AREA_LIST_A_ID).style.display!="block"){
		listObj.style.marginLeft = "1";
	}else if(areaAtxt.length<14){
		listObj.style.marginLeft = 160-areaAtxt.length*10;
	}else{
		listObj.style.marginLeft = "1";
	}

	listObj.style.display = "block";
	var divArr = listObj.getElementsByTagName("div");
	var len = divArr.length;
	var listNum = 0;
	for(var i=0; i<len; i++){
		if(divArr[i].className==this.AREA_LIST_D_CL){
			if(listNum!=this.curAREA){
				divArr[i].style.display = "none";
			}else{
				divArr[i].style.display = "block";
			}
			listNum++;
		}
	}
	//NSSOL 070301 変更
	if (rcd != 49) {
		hideItems(this.areaHideListMD);
		this.rootCd = rcd
	} else {
		hideItems(this.areaHideListMD);
		this.rootCd = rcd
	}
	//NSSOL 070213 変更
	//closeCalendar();
        document.onmousedown = areaListHideFocus;

}
/****************************/
function showAreaListD2(pX){
	var listObj = document.getElementById(this.AREA_LIST_D_ID);
	listObj.style.display = "block";
	listObj.style.marginLeft = pX;

	var divArr = listObj.getElementsByTagName("div");
	var len = divArr.length;
	var listNum = 0;
	for(var i=0; i<len; i++){
		if(divArr[i].className==this.AREA_LIST_D_CL){
			if(listNum!=this.curAREA){
				divArr[i].style.display = "none";
			}else{
				divArr[i].style.display = "block";
			}
			listNum++;
		}
	}
	hideItems(this.areaHideListD);
	//NSSOL 070213 変更
	//closeCalendar();
        document.onmousedown = areaListHideFocus;
}

function closeAreaListK(){
	var listK = document.getElementById(this.AREA_LIST_K_ID);
	if(listK){
		listK.style.display = "none";
	}
	visibleItems(this.areaHideListK);
	disableList();
}

/****************************/
function closeAreaListA(){
	var listA = document.getElementById(this.AREA_LIST_A_ID);
	if(listA){
		listA.style.display = "none";
	}
	visibleItems(this.areaHideListA);

	var listD = document.getElementById(this.AREA_LIST_D_ID);
	if(listD){
		listD.style.display = "none";
	}
	visibleItems(this.areaHideListMD);
/**
	document.???.submit();
	return true;
**/
	disableList();
}
/****************************/
function closeAreaListD(){
	var objD = document.getElementById(this.AREA_LIST_D_ID);
	if(objD)
	objD.style.display = "none";
	
	if (this.rootCd != 49) {
		visibleItems(this.areaHideListMD);
	} else {
		visibleItems(this.areaHideListMD);
	}

	var objA = document.getElementById(this.AREA_LIST_A_ID);
	if(objA)
	objA.style.display = "none";
	visibleItems(this.areaHideListA);
/**
	document.???.submit();
	return true;
**/
	disableList();
}
/****************************/

var oldDetailLink;

function setAreaKTxt(pId, name, pInputValue){
	hideAreaLink();
	document.getElementById(this.AREA_TXT_K_ID).innerHTML = "【"+name+"】";

	//ここでエリア設定 aoyama
	var t_ken = ken[pInputValue];
	if(t_ken) {
		var area = "";
		var childArea = "";
		var alist = t_ken.lrg;
		var arrowCount = 0;
		var closeCount = 0;
		for(var i = 0;i < alist.length;i++) {
			var lrg = alist[i];
			arrowCount++;
			area += '<div><img src="/ui/d/cs/jalan/common/image/blt_03.gif" alt="" width="4" height="7" border="0" align="absmiddle" id="arrow' + arrowCount + '">&nbsp;<a id="lrgListId_' +  lrg.code + '" href="javascript:void(0);" onClick="setLrgAreaATxt(' + i + ', this, \'' + lrg.code + '\');" >' + lrg.name + '</a></div>\n';
			var childList = lrg.child;
			if(childList) {
				childArea += '<div class="dyn_area_d_list_itm">';
				for(var c = 0;c < childList.length;c++) {
					var child = childList[c];
					arrowCount++;
					childArea += '<div><img src="/ui/d/cs/jalan/common/image/blt_03.gif" alt="" width="4" height="7" border="0" align="absmiddle" id="arrow' + arrowCount + '">&nbsp;<a id="smlListId_' + child.code+ '" href="javascript:void(0);" onClick="setSmlAreaDTxt(this, \'' + child.code + '\');" >' + child.name + '</a></div>';
				}
				closeCount++;
				childArea += '<div class="close_btn"><a href="javascript:void(0);" onClick="closeAreaListD();"><img src="/ui/d/cs/jalan/common/image/btn_close.gif" alt="" width="11" height="11" align="absmiddle" id="close' + closeCount + '">&nbsp;Close</a></div></div>';
			}
		}
		closeCount++;
		area +=	'<div class="close_btn"><a href="javascript:void(0);" onClick="closeAreaListA();"><img src="/ui/d/cs/jalan/common/image/btn_close.gif" alt="" width="11" height="11" align="absmiddle"  id="close' + closeCount + '">&nbsp;Close</a></div>';
		document.getElementById(this.AREA_LIST_A_ID).innerHTML = area;
		document.getElementById(this.AREA_LIST_D_ID).innerHTML = childArea;
		document.getElementById(this.AREA_INPT_K_ID).value = pInputValue;
		//IEの場合、画像を再読み込み
		if(isIE) {
			setTimeout("dispIEImage(" + arrowCount + "," + closeCount + ")",100);
		} else {
			showAreaLink();
		}
	}
	//エリア設定終了
	closeAreaListK();
}

function setAreaKTxt2(pId, name, pInputValue){
	hideAreaLink();
	document.getElementById(this.AREA_TXT_K_ID).innerHTML = name;

	//ここでエリア設定 aoyama
	var t_ken = ken[pInputValue];
	if(t_ken) {
		var area = "";
		var childArea = "";
		var alist = t_ken.lrg;
		var arrowCount = 0;
		var closeCount = 0;
		for(var i = 0;i < alist.length;i++) {
			var lrg = alist[i];
			arrowCount++;
			area += '<div><img src="/ui/d/cs/jalan/common/image/blt_03.gif" alt="" width="4" height="7" border="0" align="absmiddle" id="arrow' + arrowCount + '">&nbsp;<a id="lrgListId_' +  lrg.code + '" href="javascript:void(0);" onClick="setLrgAreaATxt(' + i + ', this, \'' + lrg.code + '\');" >' + lrg.name + '</a></div>\n';
			var childList = lrg.child;
			if(childList) {
				childArea += '<div class="dyn_area_d_list_itm">';
				for(var c = 0;c < childList.length;c++) {
					var child = childList[c];
					arrowCount++;
					childArea += '<div><img src="/ui/d/cs/jalan/common/image/blt_03.gif" alt="" width="4" height="7" border="0" align="absmiddle" id="arrow' + arrowCount + '">&nbsp;<a id="smlListId_' + child.code+ '" href="javascript:void(0);" onClick="setSmlAreaDTxt(this, \'' + child.code + '\');" >' + child.name + '</a></div>';
				}
				closeCount++;
				childArea += '<div class="close_btn"><a href="javascript:void(0);" onClick="closeAreaListD();"><img src="/ui/d/cs/jalan/common/image/btn_close.gif" alt="" width="11" height="11" align="absmiddle" id="close' + closeCount + '">&nbsp;Close</a></div></div>';
			}
		}
		closeCount++;
		area +=	'<div class="close_btn"><a href="javascript:void(0);" onClick="closeAreaListA();"><img src="/ui/d/cs/jalan/common/image/btn_close.gif" alt="" width="11" height="11" align="absmiddle"  id="close' + closeCount + '">&nbsp;Close</a></div>';
		document.getElementById(this.AREA_LIST_A_ID).innerHTML = area;
		document.getElementById(this.AREA_LIST_D_ID).innerHTML = childArea;
		document.getElementById(this.AREA_INPT_K_ID).value = pInputValue;
		
		//IEの場合、画像を再読み込み
		if(isIE) {
			setTimeout("dispIEImage(" + arrowCount + "," + closeCount + ")",100);
		} else {
			showAreaLink();
		}
		
	}
	//エリア設定終了
	closeAreaListK();
}

function setAreaKTxt3(pId, name, pInputValue, formName){
	hideAreaLink();
	document.getElementById(this.AREA_TXT_K_ID).innerHTML = name;
	
	//ここでエリア設定
	var t_ken = ken[pInputValue];
	if(t_ken) {
		var area = "";
		var childArea = "";
		var alist = t_ken.lrg;
		var arrowCount = 0;
		var closeCount = 0;
		for(var i = 0;i < alist.length;i++) {
			var lrg = alist[i];
			arrowCount++;
			area += '<div><img src="/ui/d/cs/jalan/common/image/blt_03.gif" alt="" width="4" height="7" border="0" align="absmiddle" id="arrow' + arrowCount + '">&nbsp;<a id="lrgListId_' +  lrg.code + '" href="javascript:void(0);" onClick="searchPanelSetLrgAreaATxt(' + i + ', this, \'' + lrg.code + '\', \'' + formName + '\');" >' + lrg.name + '</a></div>\n';
			var childList = lrg.child;
			if(childList) {
				childArea += '<div class="dyn_area_d_list_itm">';
				for(var c = 0;c < childList.length;c++) {
					var child = childList[c];
					arrowCount++;
					childArea += '<div><img src="/ui/d/cs/jalan/common/image/blt_03.gif" alt="" width="4" height="7" border="0" align="absmiddle" id="arrow' + arrowCount + '">&nbsp;<a id="smlListId_' + child.code+ '" href="javascript:void(0);" onClick="searchPanelSetSmlAreaDTxt(this, \'' + child.code + '\', \'' + formName + '\');" >' + child.name + '</a></div>';
				}
				closeCount++;
				childArea += '<div class="close_btn"><a href="javascript:void(0);" onClick="closeAreaListD();"><img src="/ui/d/cs/jalan/common/image/btn_close.gif" alt="" width="11" height="11" align="absmiddle" id="close' + closeCount + '">&nbsp;Close</a></div></div>';
			}
		}
		closeCount++;
		area +=	'<div class="close_btn"><a href="javascript:void(0);" onClick="closeAreaListA();"><img src="/ui/d/cs/jalan/common/image/btn_close.gif" alt="" width="11" height="11" align="absmiddle"  id="close' + closeCount + '">&nbsp;Close</a></div>';
		document.getElementById(this.AREA_LIST_A_ID).innerHTML = area;
		document.getElementById(this.AREA_LIST_D_ID).innerHTML = childArea;
		document.getElementById(this.AREA_INPT_K_ID).value = pInputValue;
		//IEの場合、画像を再読み込み
		if(isIE) {
			setTimeout("dispIEImage(" + arrowCount + "," + closeCount + ")",100);
		} else {
			showAreaLink();
		}
	}
	//エリア設定終了
	closeAreaListK();
}

//IEの場合、画像を表示させるタイミングが間に合わないため、あとから追加で表示させる
function dispIEImage(arrowCount,closeCount) {
    document.getElementById(this.AREA_LIST_A_ID).style.visibility = "hidden";
    document.getElementById(this.AREA_LIST_D_ID).style.visibility = "hidden";
    document.getElementById(this.AREA_LIST_A_ID).style.display = "block";
    document.getElementById(this.AREA_LIST_D_ID).style.display = "block";
	for(i = 1;i <= arrowCount;i++) {
		document.getElementById("arrow" + i).src = "/ui/d/cs/jalan/common/image/blt_03.gif";
	}
	for(i = 1;i <= closeCount;i++) {
		document.getElementById("close" + i).src = "/ui/d/cs/jalan/common/image/btn_close.gif";
	}
    document.getElementById(this.AREA_LIST_A_ID).style.display = "none";
    document.getElementById(this.AREA_LIST_D_ID).style.display = "none";
    document.getElementById(this.AREA_LIST_A_ID).style.visibility = "";
    document.getElementById(this.AREA_LIST_D_ID).style.visibility = "";
	showAreaLink();
}

function hideAreaLink() {
	document.getElementById("area_link").style.visibility = "hidden";
	document.getElementById("detail_link").style.visibility = "hidden";
}

function showAreaLink() {
	if (oldDetailLink == null) {
		oldDetailLink = document.getElementById(this.AREA_DETAIL_LINK_ID).innerHTML;
	}
	document.getElementById(this.AREA_DETAIL_LINK_ID).innerHTML = '<span style="color:#AAA;text-decoration: none;">Narrow the small area</span>';
	document.getElementById(this.AREA_INPT_D_ID).value = "";
	document.getElementById(this.AREA_TXT_A_ID).className = "lin01";
	document.getElementById(this.AREA_TXT_A_ID).innerHTML = "Narrow the area";
	document.getElementById(this.AREA_INPT_A_ID).value	= "";
	document.getElementById("area_link").style.visibility = "";
	document.getElementById("detail_link").style.visibility = "";
}
/****************************/
/****************************/
function setAreaATxt(pId, pObj, pInputValue){
	this.curAREA = pId;
	document.getElementById(this.AREA_TXT_A_ID).innerHTML = "【"+pObj.innerHTML+"】";
	document.getElementById(this.AREA_INPT_A_ID).value = pInputValue;
	document.getElementById(this.AREA_TXT_A_ID).className = "f60b";
	if(oldDetailLink)
		document.getElementById(this.AREA_DETAIL_LINK_ID).innerHTML = oldDetailLink;
	document.getElementById(this.AREA_TXT_D_ID).innerHTML = "Narrow the small area";
	document.getElementById(this.AREA_INPT_D_ID).value = "";

	closeAreaListA();
	closeAreaListD();
}
/****************************/
/****************************/
function setAreaATxt2(pId, pObj, pInputValue,formName,urlparam,lrgRkName){
	this.curAREA = pId;
	document.getElementById(this.AREA_TXT_A_ID).innerHTML = pObj.innerHTML;
	document.getElementById(this.AREA_INPT_A_ID).value = pInputValue;
	if(oldDetailLink)
		document.getElementById(this.AREA_DETAIL_LINK_ID).innerHTML = oldDetailLink;
	
	document.getElementById(this.AREA_TXT_D_ID).innerHTML = "Narrow the small area";
	document.getElementById(this.AREA_INPT_D_ID).value = "";

	closeAreaListA();
	closeAreaListD();
}
/****************************/
function disableList(){
	if(document.getElementById(this.AREA_LIST_A_ID))
	if(document.getElementById(this.AREA_LIST_A_ID).style.display == "block"){ hideItems(this.areaHideListA); }
	if(document.getElementById(this.AREA_LIST_D_ID))
	if(document.getElementById(this.AREA_LIST_D_ID).style.display == "block"){ hideItems(this.areaHideListD); }
	if(document.getElementById(this.CAL_LIST_ID))
	if(document.getElementById(this.CAL_LIST_ID).style.display == "block"){ hideItems(this.calHideList); }
	for(var i=1; i<this.calListLen; i++){
		if(document.getElementById(this.CAL_LIST_NAME_ID+i).style.display == "block"){
			hideItems(this.calHideList);
		}
	}
}
/****************************/
function setAreaDTxt(pObj, pInputValue){
	//横にはみ出す場合、途中で折り返す
	var areaText = String(document.getElementById(this.AREA_TXT_A_ID).innerHTML);
	var detailText = String(pObj.innerHTML);
	if(document.getElementById(this.AREA_IKISAKI_CAL_ID)
		 && (areaText.length + detailText.length) > 30) {
		var detailText1 = detailText.substr(0,11);
		var detailText2 = detailText.substr(11);
		detailText = detailText1 + '<br/>' + detailText2;
	}
	document.getElementById(this.AREA_TXT_D_ID).innerHTML = "【"+detailText+"】";
	document.getElementById(this.AREA_INPT_D_ID).value = pInputValue;

	//btnBlink();
	closeAreaListD();
}

/****************************/
function setAreaDTxt2(pObj, pInputValue,formName,searchKenUrl,mapStr,urlparam){
	//横にはみ出す場合、途中で折り返す
	var areaText = String(document.getElementById(this.AREA_TXT_A_ID).innerHTML);
	var detailText = String(pObj.innerHTML);
	if(document.getElementById(this.AREA_IKISAKI_CAL_ID)
		 && (areaText.length + detailText.length) > 30) {
		var detailText1 = detailText.substr(0,11);
		var detailText2 = detailText.substr(11);
		detailText = detailText1 + '<br/>' + detailText2;
	}
// 0909 検索パネル修正対応ここから
//	document.getElementById(this.AREA_TXT_D_ID).innerHTML = "【"+detailText+"】";
	document.getElementById(this.AREA_TXT_D_ID).innerHTML = detailText;
// 0909 検索パネル修正対応ここまで
	document.getElementById(this.AREA_INPT_D_ID).value = pInputValue;

	//btnBlink();
	closeAreaListD();
}

/****************************/
//宿泊日
/****************************/
/****************************/
this.dateTxts = [this.Y_TXT_ID, this.M_TXT_ID, this.D_TXT_ID, this.STAY_TXT_ID, this.ROOM_NUM_ID];
function enableStayDate(){
	var sts = enableStayDate2();
	if(!sts){
		return false;
	}
/*
	document.getElementById(this.DATE_CHECK_ID).checked=false;
	var childNumObj = document.getElementById(this.CHILD_NUM_TXT_ID1);
	childNumObj.parentNode.setAttribute("href", "javascript:showChildNumList();");
	childNumObj.style.color = "";
	var childNumObj = document.getElementById(this.CHILD_NUM_TXT_ID2);
	childNumObj.setAttribute("href", "javascript:showChildNumList();");
	childNumObj.style.color = "";
	var len = this.dateTxts.length;
	for(var i=0; i<len; i++){
		document.getElementById(this.dateTxts[i]).disabled = false;
	}
*/
	showCalendar();
}
/****************************/
function enableStayDate2(){
	pObj = document.getElementById(this.DATE_CHECK_ID);
	var sts = (pObj.checked);
	if(sts){
		/* JPC 080701 コメントアウト START
		if(!confirm("日付未定のチェックを外しますか？")){
			return false;
		}
			 JPC 080701 コメントアウト END */
		document.getElementById(this.DATE_CHECK_ID).checked=false;
		/* NSSOL 070213 コメントアウト START
		var childNumObj = document.getElementById(this.CHILD_NUM_TXT_ID1);
		childNumObj.parentNode.setAttribute("href", "javascript:showChildNumList();");
		childNumObj.style.color = "";
		var childNumObj = document.getElementById(this.CHILD_NUM_TXT_ID2);
		childNumObj.setAttribute("href", "javascript:showChildNumList();");
		childNumObj.style.color = "";
		NSSOL 070213 コメントアウト END*/
		var len = this.dateTxts.length;
		for(var i=0; i<len; i++){
			document.getElementById(this.dateTxts[i]).disabled = false;
		}
	}
	return true;
}
/****************************/
//@かえる対応 Modify 2006.3.10
function disableStayDate(){
	pObj = document.getElementById(this.DATE_CHECK_ID);
	var sts = (pObj.checked);
	if(!sts){
		var childNumObj = document.getElementById(this.CHILD_NUM_TXT_ID1);
		if(childNumObj&&childNumObj.style){
//			childNumObj.parentNode.setAttribute("href", "javascript:showChildNumList();");
			childNumObj.style.color = "";
			var childNumObj = document.getElementById(this.CHILD_NUM_TXT_ID2);
//			childNumObj.setAttribute("href", "javascript:showChildNumList();");
			childNumObj.style.color = "";
		}
	}else{
		var childNumObj = document.getElementById(this.CHILD_NUM_TXT_ID1);
		if(childNumObj&&childNumObj.style){
//			childNumObj.parentNode.setAttribute("href", "javascript:void(0);");
			childNumObj.style.color = "#ccc";
			var childNumObj = document.getElementById(this.CHILD_NUM_TXT_ID2);
//			childNumObj.setAttribute("href", "javascript:void(0);");
			childNumObj.style.color = "#ccc";
		}
	}
	var len = this.dateTxts.length;
	for(var i=0; i<len; i++){
		var obj = document.getElementById(this.dateTxts[i]);
		if(obj)
			obj.disabled = (sts==true);
	}
}
/****************************/
function calHideFocus(evt){
	var evt = (evt) ? evt : ((window.event)? event :null);
	var target = (evt.target) ? evt.target : evt.srcElement;
	if(!checkPalNode(target, "dyn_cal", 0)){
		//@かえる Add Start Hikari 06.06.20
		// NSSOL 070213 コメントアウト
		//if(!uaCheckDate()) { return; }
		//@かえる Add End
		closeCalendar();
	}
}
/****************************/
function checkPalNode(pObj, pClass, pNum){
	if(pNum>9){
		return false;
	}else{
		if(pObj.className==pClass){
			return true;
		}else{
			if(pObj.parentNode){
				return checkPalNode(pObj.parentNode, pClass, pNum+1);
			}else{
				return false;
			}
		}
	}
	
}
// >> added kiwamiUI 2006/10/18
/****************************/
function checkPalNodeId(pObj, pId){
	if(pObj.id==pId){
		return true;
	}else{
		if(pObj.parentNode){
			return checkPalNodeId(pObj.parentNode, pId);
		}else{
			return false;
		}
	}
}
// << added kiwamiUI 2006/10/18
/****************************/
this.calHideList = [this.BADGET_TBL];
function showCalendar(){
	closeCalAll();
	var cal = document.getElementById(this.CAL_LIST_ID);
	cal.style.display = "block";
	hideItems(this.calHideList);

	if(isNN || isFF){
		cal.style.cssText = "-moz-opacity: 0; display:block;";
	}else{
		cal.style.filter = "alpha(opacity=0)";
	}
	this.fadeObj = cal;
	
	fadeIn();
	
	document.onmousedown = calHideFocus;
	closeAreaListA();
	closeAreaListD();
}
/****************************/
/* NSSOL 070213 追加 START */
/******************************************************************************
関数名前  ： 日付未定チェックボックス非表示関数
処理機能  ： 静的画面カレンダーJavaScript（today_cal.js）の
          ： 日付未定チェックボックスを非表示にします。
引数      ： なし
戻り値    ： なし
作成日    ： 2006/12/25
******************************************************************************/
function hideHidukeMitei(){
        for(var i=1; i<this.calListLen + 1; i++){
                var element = document.getElementById("hiduke_mitei_"+i);
                if(element) {
                        with(element){
                                style.display = "none";
                        }
                }

        }
}
/****************************/
/* NSSOL 070213 追加 END */
this.sId;
this.fadeObj;
function fadeIn(){
	if(isNN || isFF){
		var op = this.fadeObj.style.cssText;
		op = op.split("opacity: ").join("");
		op = op.split("; display: block;").join("");
		op = parseFloat(op);
		try{
			if(op<0.9){
				this.fadeObj.style.cssText = "-moz-opacity: "+(op+(1 - op)/3)+"; display:block;";
				this.sId = setTimeout("fadeIn()", 100);
			}else{
				this.fadeObj.style.cssText = "-moz-opacity: 1; display:block;";
				clearTimeout(this.sId);
			}
		}catch(e){
		}
	}else{
		var op = this.fadeObj.style.filter;
		op = op.split("alpha(opacity=").join("");
		op = op.split(")").join("");
		op = parseInt(op);
		try{
			if(op<100){
				this.fadeObj.style.filter = "alpha(opacity="+(op+(100 - op)/2)+")";
				clearTimeout(this.sId);
				this.sId = setTimeout("fadeIn()", 100);
			}else{
				this.fadeObj.style.filter = "alpha(opacity=100)";
				clearTimeout(this.sId);
			}
		}catch(e){
		}
	}
}
// NSSOL 070213 変更
//this.calListLen = 5;
this.calListLen = 11;
function closeCalAll(){
	document.getElementById(this.CAL_LIST_ID).style.display = "none";
	for(var i=1; i<this.calListLen; i++){
		document.getElementById(this.CAL_LIST_NAME_ID+i).style.display = "none";
	}
}
/****************************/
function closeCalendar(){
	
	closeCalAll();
	visibleItems(this.calHideList);
	disableList();
	btnBlink();
	document.onmousedown = null;
	setShowArea();
	/* Begin Call UaFunction 2006/06/15 *****************************************/
	
	/* End Call UaFunction ******************************************************/
}
/****************************/
function setStayDate(pY, pM, pD){
	document.getElementById(this.Y_TXT_ID).value = pY;
	
	var mEn;
	var strUrl = document.URL;
	
	if (strUrl.indexOf("/kr/") != -1)
	{
		switch(pM) {
		case 1:
			mEn = "1월";
			break;
			
		case 2:
			mEn = "2월";
			break;
		
		case 3:
			mEn = "3월";
			break;
	
		case 4:
			mEn = "4월";
			break;
	
		case 5:
			mEn = "5월";
			break;
	
		case 6:
			mEn = "6월";
			break;
	
		case 7:
			mEn = "7월";
			break;
	
		case 8:
			mEn = "8월";
			break;
	
		case 9:
			mEn = "9월";
			break;
	
		case 10:
			mEn = "10월";
			break;
	
		case 11:
			mEn = "11월";
			break;
	
		case 12:
			mEn = "12월";
			break;
		}
	} else if (strUrl.indexOf("/cn/") != -1 || strUrl.indexOf("/tn/") != -1){

	switch(pM) {
		case 1:
			mEn = '1月';
			break;
			
		case 2:
			mEn = '2月';
			break;
		
		case 3:
			mEn = '3月';
			break;
	
		case 4:
			mEn = '4月';
			break;
	
		case 5:
			mEn = '5月';
			break;
	
		case 6:
			mEn = '6月';
			break;
	
		case 7:
			mEn = '7月';
			break;
	
		case 8:
			mEn = '8月';
			break;
	
		case 9:
			mEn = '9月';
			break;
	
		case 10:
			mEn = '10月';
			break;
	
		case 11:
			mEn = '11月';
			break;
	
		case 12:
			mEn = '12月';
			break;
		}
	} else {
	
		switch(pM) {
		case 1:
			mEn = 'Jan';
			break;
			
		case 2:
			mEn = 'Feb';
			break;
		
		case 3:
			mEn = 'Mar';
			break;
	
		case 4:
			mEn = 'Apr';
			break;
	
		case 5:
			mEn = 'May';
			break;
	
		case 6:
			mEn = 'Jun';
			break;
	
		case 7:
			mEn = 'Jul';
			break;
	
		case 8:
			mEn = 'Aug';
			break;
	
		case 9:
			mEn = 'Sep';
			break;
	
		case 10:
			mEn = 'Oct';
			break;
	
		case 11:
			mEn = 'Nov';
			break;
	
		case 12:
			mEn = 'Dec';
			break;
	}
	}
	
	document.getElementById(this.M_TXT_ID).value = mEn;
	document.getElementById(this.D_TXT_ID).value = pD;
	closeCalendar();
}
/****************************/
function moveCalender(pNum){
	closeCalAll();
	if(pNum==0){
		document.getElementById(this.CAL_LIST_ID).style.display = "block";
	}else{
		document.getElementById(this.CAL_LIST_NAME_ID+pNum).style.display = "block";
	}
}
/****************************/
function fwdCalendar(){
	document.getElementById(this.CAL_LIST_N_ID).style.display = "block";
	document.getElementById(this.CAL_LIST_ID).style.display = "none";
	document.getElementById(this.CAL_LIST_P_ID).style.display = "none";
}
/****************************/
function prevCalendar(){
	document.getElementById(this.CAL_LIST_P_ID).style.display = "block";
	document.getElementById(this.CAL_LIST_ID).style.display = "none";
	document.getElementById(this.CAL_LIST_N_ID).style.display = "none";
}
/****************************/
function backCalendar(){
	document.getElementById(this.CAL_LIST_P_ID).style.display = "none";
	document.getElementById(this.CAL_LIST_ID).style.display = "block";
	document.getElementById(this.CAL_LIST_N_ID).style.display = "none";
}

/****************************/
//子供人数選択
/* NSSOL 070213 コメントアウト START
function showChildNumList(){
	var newwin = dynOpenWin(this.CHILD_NUM_WIN,"childNumWin",220,208);
}
 NSSOL 070213 コメントアウト END*/
// NSSOL 070213 追加 START NSSOL 070228 修正
function showChildNumList(chid1, chid2, chid3, chid4, chid5, topUrl, rootCd, formName) {

        child1_num = "child1Num=" + chid1;
        child2_num = "&child2Num=" + chid2;
        child3_num = "&child3Num=" + chid3;
        child4_num = "&child4Num=" + chid4;
        child5_num = "&child5Num=" + chid5;
        rootCd = "&rootCd=" + rootCd;
		
		// NSSOL 修正 2007/02/28
        form_name = "";
        if(formName != null) {
        	form_name = "&formName=" + formName;
        }

        //BASE_URL 修正 2007/01/18
        var urlChildList = topUrl + "/uw/uwp1400/uww1901.do";
        //PARAMETER // NSSOL 修正 2007/02/28
        var child_param = child1_num + child2_num + child3_num + child4_num + child5_num + rootCd + form_name;
        //RequestURL
        urlChildList = urlChildList + '?' + child_param;
        //URL_CHECK
        //alert(urlChildList);
        //遷移先子画面
        var newwin = window.open(urlChildList, 'childList', 'width=220,height=208,resizable=no');
        newwin.focus();

}
//子供人数選択（プラン詳細）
function showChildNumListPlanDt(chid1, chid2, chid3, chid4, chid5, planCd, roomTypeCd, topUrl) {

        child1_num = "child1Num=" + chid1;
        child2_num = "&child2Num=" + chid2;
        child3_num = "&child3Num=" + chid3;
        child4_num = "&child4Num=" + chid4;
        child5_num = "&child5Num=" + chid5;
        paln_cd = "&planCd=" + planCd;
        roomtype_cd = "&roomTypeCd=" + roomTypeCd;

        //BASE_URL 修正 2007/01/18
        var urlChildList = topUrl + "/uw/uwp1400/uww1901.do";
        //PARAMETER
        var child_param = child1_num + child2_num + child3_num + child4_num + child5_num;
        //CODE
        var search_cd = paln_cd + roomtype_cd
        //RequestURL
        urlChildList = urlChildList + '?' + child_param + search_cd;
        //URL_CHECK
        //alert(urlChildList);
        //遷移先子画面
        var newwin = window.open(urlChildList, 'childListDt', 'width=220,height=208,resizable=no');
        newwin.focus();

}
function showChildNumListPPlanDt(chid1, chid2, chid3, chid4, chid5, planCd, roomTypeCd, partnerCd, topUrl) {

        child1_num = "child1Num=" + chid1;
        child2_num = "&child2Num=" + chid2;
        child3_num = "&child3Num=" + chid3;
        child4_num = "&child4Num=" + chid4;
        child5_num = "&child5Num=" + chid5;
        paln_cd = "&planCd=" + planCd;
        roomtype_cd = "&roomTypeCd=" + roomTypeCd;
        partner_cd = "&partnerCd=" + partnerCd;

        //BASE_URL 修正 2007/01/18
        var urlChildList = topUrl + "/uw/uwp1400/uww1901.do";
        //PARAMETER
        var child_param = child1_num + child2_num + child3_num + child4_num + child5_num;
        //CODE
        var search_cd = paln_cd + roomtype_cd + partner_cd;
        //RequestURL
        urlChildList = urlChildList + '?' + child_param + search_cd;
        //URL_CHECK
        //alert(urlChildList);
        //遷移先子画面
        var newwin = window.open(urlChildList, 'childListDt', 'width=220,height=208,resizable=no');
        newwin.focus();

}
// NSSOL 070213 追加 END
// おでかけ対応
function showChildNumListGuide(chid1, chid2, chid3, chid4, chid5) {

		//開く位置を指定
		var width = 220;
		var height = 208;
		var left = (screen.width - width) / 1.5;
		var top = (screen.height - height) / 2;
		
		//WINDOW_PARAMETER
		var winParam = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",resizable=no";
				
        child1_num = "child1Num=" + chid1;
        child2_num = "&child2Num=" + chid2;
        child3_num = "&child3Num=" + chid3;
        child4_num = "&child4Num=" + chid4;
        child5_num = "&child5Num=" + chid5;
		
        //BASE_URL
        var urlChildList = "/uw/uwp1400/uww1901.do";
        //PARAMETER
        var child_param = child1_num + child2_num + child3_num + child4_num + child5_num;
        //RequestURL
        urlChildList = urlChildList + '?' + child_param;
        //URL_CHECK
        //alert(urlChildList);
        //遷移先子画面
        var newwin = window.open(urlChildList, 'childList', winParam);
        newwin.focus();

}
/****************************/
this.childNumData = new Array();
function getChildNumData(){
	return this.childNumData;
}
/****************************/
function setChildNumForm(){
	var pArr = new Array();
	/* pArr = opener.getChildNumData(); */
	pArr = getChildNumData();
	if(pArr.length<1){
		return false;
	}
	if(pArr[0]>=0){ setOptionSelected(document.getElementById(this.SHOGAKUSEI_NUM),pArr[0]); }
	if(pArr[1]>=0){ setOptionSelected(document.getElementById(this.YOJI_SHOKU_FUTON), pArr[1]); }
	if(pArr[2]>=0){ setOptionSelected(document.getElementById(this.YOJI_SHOKU), pArr[2]); }
	if(pArr[3]>=0){ setOptionSelected(document.getElementById(this.YOJI_FUTON), pArr[3]); }
	if(pArr[4]>=0){ setOptionSelected(document.getElementById(this.YOJI_NASI), pArr[4]); }

}
/****************************/
function setOptionSelected(pSelObj, pIdx){
	var ops = pSelObj.parentNode.getElementsByTagName("option");
	var len = ops.length;
	for(var i=0; i<len; i++){
		if(i==pIdx){
			ops[i].selected = true;
		}else{
			ops[i].selected = false;
		}
	}
}
/****************************/
//@かえる Modify Hikari 06.06.20
function setChildNumList(pArr){
	var htmlStr = "";
	var pN1 = parseInt(pArr[0]);
	var pN2 = parseInt(pArr[1]);
	var pN3 = parseInt(pArr[2]);
	var pN4 = parseInt(pArr[3]);
	var pN5 = parseInt(pArr[4]);
	this.childNumData = [pArr[0], pArr[1], pArr[2], pArr[3], pArr[4]];

	htmlStr += (pN1>0)?"小学生"+"&nbsp;"+pN1+"名<br />":"";
	htmlStr += (pN2>0)?"幼児(食事･布団あり)"+"&nbsp;"+pN2+"名<br />":"";
	htmlStr += (pN3>0)?"幼児(食事あり)"+"&nbsp;"+pN3+"名<br />":"";
	htmlStr += (pN4>0)?"幼児(布団あり)"+"&nbsp;"+pN4+"名<br />":"";
	htmlStr += (pN5>0)?"幼児(食事･布団なし)"+"&nbsp;"+pN5+"名<br />":"";

	if(document.getElementById(this.CHILD_NUM_TXT_ID1)) {
		document.getElementById(this.CHILD_NUM_TXT_ID1).innerHTML = pN1+pN2+pN3+pN4+pN5+"名";
	}
	if(!(((pN1+pN2+pN3+pN4+pN5)<1) && (document.getElementById(this.CHILD_NUM_TXT_ID2).innerHTML==""))) {
		if(document.getElementById(this.CHILD_NUM_TXT_ID2)) {
			document.getElementById(this.CHILD_NUM_TXT_ID2).innerHTML = htmlStr;
		}
	}
	if(document.getElementById(this.CHILD_NUM_INPUT)) {
		document.getElementById(this.CHILD_NUM_INPUT).value = this.childNumData;
	}
	btnBlink();
	
	return false;
}
//@かえる Modify End
//@かえる Modify Hikari 06.06.20
function getChildNumList() {
	var tmpArray = new Array();
	tmpArray[tmpArray.length] = document.getElementById(CHILD1_NUM_ID) ? document.getElementById(CHILD1_NUM_ID).value : 0;
	tmpArray[tmpArray.length] = document.getElementById(CHILD2_NUM_ID) ? document.getElementById(CHILD2_NUM_ID).value : 0;
	tmpArray[tmpArray.length] = document.getElementById(CHILD3_NUM_ID) ? document.getElementById(CHILD3_NUM_ID).value : 0;
	tmpArray[tmpArray.length] = document.getElementById(CHILD4_NUM_ID) ? document.getElementById(CHILD4_NUM_ID).value : 0;
	tmpArray[tmpArray.length] = document.getElementById(CHILD5_NUM_ID) ? document.getElementById(CHILD5_NUM_ID).value : 0;
	return tmpArray;
}
//@かえる Modify End
/****************************/
function modChildNumList(){
	var tmpArr = new Array();
	tmpArr[0] = (document.getElementById(this.SHOGAKUSEI_NUM))?document.getElementById(this.SHOGAKUSEI_NUM).selectedIndex:0;
	tmpArr[1] = (document.getElementById(this.YOJI_SHOKU_FUTON))?document.getElementById(this.YOJI_SHOKU_FUTON).selectedIndex:0;
	tmpArr[2] = (document.getElementById(this.YOJI_SHOKU))?document.getElementById(this.YOJI_SHOKU).selectedIndex:0;
	tmpArr[3] = (document.getElementById(this.YOJI_FUTON))?document.getElementById(this.YOJI_FUTON).selectedIndex:0;
	tmpArr[4] = (document.getElementById(this.YOJI_NASI))?document.getElementById(this.YOJI_NASI).selectedIndex:0;

	window.close();

	return tmpArr;
}

/****************************/
//@かえる対応 Add 2006.3.10
function getChildNumHref(){
   var loc = window.location.href;
   var url = (loc.indexOf("https://")>-1)?"https://":"http://";
   if(loc.indexOf("devsvr06.bsc.nk-exa.co.jp")>-1) {
  //url += "devsvr03/cgi-bin/jalan/cjw87_1_1.cgi";
   url += "devsvr03/cgi-bin/jalan_id/jweb/cjw87_1_1.cgi";
 } else if(loc.indexOf("svctst.jalan.net")>-1) {
   //url += "wwwtstn.jalan.net/cgi-bin/jalan/cjw87_1_1.cgi";
   url += "wwwtstn.jalan.net/cgi-bin/jalan_id/cjw87_1_1.cgi";
 } else {
   //url += "www.jalan.net/cgi-bin/jalan/cjw87_1_1.cgi";
   url += "devsvr03/cgi-bin/jalan_id/jweb/cjw87_1_1.cgi";
 }
 return url;
}

/****************************/
//こだわり選択

/****************************/
/* NSSOL 070213 コメントアウト START
function showKodawariList(){
	var newwin = dynOpenWin(this.KODAWARI_WIN,"kodawariWin",338,280);
}
 NSSOL 070213 コメントアウト END*/
/* NSSOL 070213 追加 START */
function showKodawariList(OutsidePool, Beach5, Station5, Pak, Nsmr, Itnr, Bath, Onsen, BathRent, PribateBath, DinRoom, Pet, HighClass, Point, Sweet, Bt, Esthetics, Takkyu, LookoutBath, Sauna, Jacuzzi, Massage, SkiRent, BoardRent, Sogei, BrkRoom, DinPrv, BrkPrv, Chekout11, topUrl, CareMode, Card, CardOnly, Openbath, Kake, Nigori, hideFlg, formName){

        //こだわり条件
        OutsidePool = "careOutsidePool=" + OutsidePool;
        Beach5 = "&careBeach5=" + Beach5;
        Station5 = "&careStation5=" + Station5;
        Pak = "&carePak=" + Pak;
        Nsmr = "&careNsmr=" + Nsmr;
        Itnr = "&carecareItnr=" + Itnr;
        Bath = "&careBath=" + Bath;
        Onsen = "&careOnsen=" + Onsen;
        BathRent = "&careBathRent=" + BathRent;
        PribateBath = "&carePribateBath=" + PribateBath;
        DinRoom = "&careDinRoom=" + DinRoom;
        Pet = "&carePet=" + Pet;
        HighClass = "&careHighClass=" + HighClass;
        Point = "&carePoint=" + Point;
        Sweet = "&careSweet=" + Sweet;
        Bt = "&careBt=" + Bt;
        Esthetics = "&careEsthetics=" + Esthetics;
        Takkyu = "&careTakkyu=" + Takkyu;
        LookoutBath = "&careLookoutBath=" + LookoutBath;
        Sauna = "&careSauna=" + Sauna;
        Jacuzzi = "&careJacuzzi=" + Jacuzzi;
        Massage = "&careMassage=" + Massage;
        SkiRent = "&careSkiRent=" + SkiRent;
        BoardRent = "&careBoardRent=" + BoardRent;
        Sogei = "&careSogei=" + Sogei;
        BrkRoom = "&careBrkRoom=" + BrkRoom;
        DinPrv = "&careDinPrv=" + DinPrv;
        BrkPrv = "&careBrkPrv=" + BrkPrv;
        Chekout11 = "&careChekout11=" + Chekout11;
        Card = "&careCard=" + Card;
		CardOnly = "&careCardOnly=" + CardOnly;
		Openbath = "&careOpenbath=" + Openbath;
		Kake = "&careKake=" + Kake;
		Nigori = "&careNigori=" + Nigori;
		hideFlg = "&hideFlg=" + hideFlg;

        //BASE_URL 修正 2007/01/18
        var kodawariUrl = topUrl + "/uw/uwp1400/uww1902.do";
        //PARAMETER
        var kodawari_param = OutsidePool + Beach5 + Station5 + Pak + Nsmr + Itnr + Bath + Onsen + BathRent + PribateBath + DinRoom + Pet + HighClass + Point + Card + CardOnly + Openbath + Kake + Nigori + hideFlg;

		if(CareMode != null){
			CareMode = "&careMode=" + CareMode;
			formName = "&formName=" + formName;
	        var sarani_param = Sweet + Bt + Esthetics + Takkyu + LookoutBath + Sauna + Jacuzzi + Massage + SkiRent + BoardRent + Sogei + BrkRoom + DinPrv + BrkPrv + Chekout11 + CareMode + formName;
		}
		else {	
	        var sarani_param = Sweet + Bt + Esthetics + Takkyu + LookoutBath + Sauna + Jacuzzi + Massage + SkiRent + BoardRent + Sogei + BrkRoom + DinPrv + BrkPrv + Chekout11;
		}

        //RequestURL
        kodawariUrl = kodawariUrl + '?' + kodawari_param + sarani_param;
        //遷移先子画面
        var kwwin = window.open(kodawariUrl, "kodawariList", "width=338,height=280");
        kwwin.focus();

}
/* NSSOL 070213 追加 END */
/****************************/
function setKoadawariForm(){
	var kodaArr = opener.KODAWARI_DATA;

	var resArr = new Array();
	var inptArr = document.getElementsByTagName("input");
	var chbArr = new Array();
	for(var k=0; k<inptArr.length; k++){
		if(inptArr[k].getAttribute("type")=="checkbox"){
			chbArr[chbArr.length] = inptArr[k];
		}
	}
	var len = chbArr.length;
	for(var i=0; i<len; i++){
		var label = chbArr[i].parentNode.getElementsByTagName("label");
		if(label.length>0){
			for(var m=0; m<kodaArr.length; m++){

				var tmpHtml = label[0].innerHTML;
				var astPos = tmpHtml.indexOf("※");
				if(astPos>-1){
					tmpHtml = tmpHtml.substring(0, astPos-1);
				}

				if(tmpHtml ==kodaArr[m]){
					chbArr[i].checked = true;
					break;
				}else{
					chbArr[i].checked = false;
				}
			}
		}
	}
}
/****************************/
function closeKodawariList(){
	if (opener != null && !opener.closed) {
		clearKodawariValue();
		var resArr = new Array();
		var inptArr = document.getElementsByTagName("input");
		var chbArr = new Array();
		for(var k=0; k<inptArr.length; k++){
			if(inptArr[k].getAttribute("type")=="checkbox"){
				chbArr[chbArr.length] = inptArr[k];
			}
		}
		var len = chbArr.length;
		for(var i=0; i<len; i++){
			if(chbArr[i].checked){
				var label = chbArr[i].parentNode.getElementsByTagName("label");
				if(label.length>0)
					var tmpHtml = label[0].innerHTML;
					var astPos = tmpHtml.indexOf("※");
					if(astPos>-1){
						tmpHtml = tmpHtml.substring(0, astPos-1);
					}
				resArr[resArr.length] = tmpHtml;
				setKodawariValue(chbArr[i].id);
			}
		}
		opener.setKodawariList(resArr);
	}
	window.close();
}
/****************************/
/* NSSOL 070213 コメントアウト START
function initKodawariForm(){
	var pArray = new Array();
	with (this.document.forms[0]) {
		// 屋外プール
		if (elements["val(FR_SCN_CARE_OUTSIDE_POOL)"].value == "1") {
			pArray[pArray.length] = "屋外プール";
		}
		// ビーチまで徒歩5分
		if (elements["val(FR_SCN_CARE_BEACH_5)"].value == "1") {
			pArray[pArray.length] = "ビーチまで徒歩5分";
		}
		// 駅から徒歩5分以内
		if (elements["val(FR_SCN_CARE_STATION_5)"].value == "1") {
			pArray[pArray.length] = "駅から徒歩5分以内";
		}
		// 駐車場無料
		if (elements["val(pak_flg)"].value == "1") {
			pArray[pArray.length] = "駐車場無料";
		}
		// 禁煙ルーム
		if (elements["val(nsm_rm_flg)"].value == "1") {
			pArray[pArray.length] = "禁煙ルーム";
		}
		// 部屋でインターネットOK
		if (elements["val(int_rm_flg)"].value == "1") {
			pArray[pArray.length] = "部屋でインターネットOK";
		}
		// 内湯・大浴場
		if (elements["val(uti_flg)"].value == "1") {
			pArray[pArray.length] = "内湯・大浴場";
		}
		// 温泉
		if (elements["val(osn_flg)"].value == "1") {
			pArray[pArray.length] = "温泉";
		}
		// 貸切風呂・貸切露天
		if (elements["val(kosn_flg)"].value == "1") {
			pArray[pArray.length] = "貸切風呂・貸切露天";
		}
		// 露天風呂付き客室
		if (elements["val(FR_SCN_CARE_PRIBATE_BATH)"].value == "1") {
			pArray[pArray.length] = "露天風呂付き客室";
		}
		// 部屋で夕食
		if (elements["val(FR_SCN_CARE_DIN_ROOM)"].value == "1") {
			pArray[pArray.length] = "部屋で夕食";
		}
		// ペットOKの宿
		if (elements["val(FR_SCN_CARE_PET)"].value == "1") {
			pArray[pArray.length] = "ペットOKの宿";
		}
		// じゃらんハイクラス掲載の宿
		if (elements["val(FR_SCN_CARE_HIGH_CLASS)"].value == "1") {
			pArray[pArray.length] = "じゃらんハイクラス掲載の宿";
		}
		// ポイント割引OKの宿
		if (elements["val(FR_SCN_CARE_POINT)"].value == "1") {
			pArray[pArray.length] = "ポイント割引OKの宿";
		}
		// 特別室・離れ・スイート
		if (elements["val(FR_SCN_CARE_SWEET)"].value == "1") {
			pArray[pArray.length] = "特別室・離れ・スイート";
		}
		// バス・トイレ付き
		if (elements["val(FR_SCN_CARE_BT)"].value == "1") {
			pArray[pArray.length] = "バス・トイレ付き";
		}
		// エステ設備
		if (elements["val(FR_SCN_CARE_ESTHETICS)"].value == "1") {
			pArray[pArray.length] = "エステ設備";
		}
		// 卓球あり
		if (elements["val(FR_SCN_CARE_TAKKYU)"].value == "1") {
			pArray[pArray.length] = "卓球あり";
		}
		// 展望風呂
		if (elements["val(FR_SCN_CARE_LOOKOUT_BATH)"].value == "1") {
			pArray[pArray.length] = "展望風呂";
		}
		// サウナ
		if (elements["val(FR_SCN_CARE_SAUNA)"].value == "1") {
			pArray[pArray.length] = "サウナ";
		}
		// ジャグジー
		if (elements["val(FR_SCN_CARE_JACUZZI)"].value == "1") {
			pArray[pArray.length] = "ジャグジー";
		}
		// マッサージ
		if (elements["val(FR_SCN_CARE_MASSAGE)"].value == "1") {
			pArray[pArray.length] = "マッサージ";
		}
		// 貸しスキー
		if (elements["val(FR_SCN_CARE_SKI_RENT)"].value == "1") {
			pArray[pArray.length] = "貸しスキー";
		}
		// 貸しボード
		if (elements["val(FR_SCN_CARE_BOARD_RENT)"].value == "1") {
			pArray[pArray.length] = "貸しボード";
		}
		// 送迎あり
		if (elements["val(FR_SCN_CARE_SOGEI)"].value == "1") {
			pArray[pArray.length] = "送迎あり";
		}
		// 部屋で朝食
		if (elements["val(FR_SCN_CARE_BRK_ROOM)"].value == "1") {
			pArray[pArray.length] = "部屋で朝食";
		}
		// 個室で夕食
		if (elements["val(FR_SCN_CARE_DIN_PRV)"].value == "1") {
			pArray[pArray.length] = "個室で夕食";
		}
		// 個室で朝食
		if (elements["val(FR_SCN_CARE_BRK_PRV)"].value == "1") {
			pArray[pArray.length] = "個室で朝食";
		}
		// チェックアウト11時以降
		if (elements["val(FR_SCN_CARE_CHEKOUT_11)"].value == "1") {
			pArray[pArray.length] = "チェックアウト11時以降";
		}
	}

	this.KODAWARI_DATA = new Array();
	for (var i = 0; i < pArray.length; i++) {
		this.KODAWARI_DATA[i] = pArray[i];
	}
	if (pArray.length>0) {
		document.getElementById(this.KODAWARI_TXT_ID).innerHTML =
			'変更する&nbsp;<img src="/ui/d/cs/jalan/common/image/icon04.gif" alt="" width="17" height="19" align="absmiddle"><br>' + pArray.join(",&nbsp;");
	} else {
		document.getElementById(this.KODAWARI_TXT_ID).innerHTML =
			'設定する&nbsp;<img src="/ui/d/cs/jalan/common/image/icon04.gif" alt="" width="17" height="19" align="absmiddle">';
	}

	document.getElementById(this.KODAWARI_INPUT).value = pArray.join(",");
}
 NSSOL 070213 コメントアウト END*/
/* NSSOL 070213 追加 START */
function initKodawariForm(){
        var pArray = new Array();
        with (this.document.forms[0]) {

                // 屋外プール
                if (elements["careOutsidePool"].value == "1") {
                        pArray[pArray.length] = "屋外プール";
                }
                // ビーチまで徒歩5分
                if (elements["careBeach5"].value == "1") {
                        pArray[pArray.length] = "ビーチまで徒歩5分";
                }
                // 駅から徒歩5分以内
                if (elements["careStation5"].value == "1") {
                        pArray[pArray.length] = "駅から徒歩5分以内";
                }
                // 駐車場無料
                if (elements["carePak"].value == "1") {
                        pArray[pArray.length] = "駐車場無料";
                }
                // 禁煙ルーム
                if (elements["careNsmr"].value == "1") {
                        pArray[pArray.length] = "禁煙ルーム";
                }
                // 部屋でインターネットOK
                if (elements["careItnr"].value == "1") {
                        pArray[pArray.length] = "部屋でインターネットOK";
                }
                // 内湯・大浴場
                if (elements["careBath"].value == "1") {
                        pArray[pArray.length] = "内湯・大浴場";
                }
                // 温泉
                if (elements["careOnsen"].value == "1") {
                        pArray[pArray.length] = "温泉";
                }
                // 貸切風呂・貸切露天
                if (elements["careBathRent"].value == "1") {
                        pArray[pArray.length] = "貸切風呂・貸切露天";
                }
                // 露天風呂付き客室
                if (elements["carePribateBath"].value == "1") {
                        pArray[pArray.length] = "露天風呂付き客室";
                }
                // 部屋で夕食
                if (elements["careDinRoom"].value == "1") {
                        pArray[pArray.length] = "部屋で夕食";
                }
                // ペットOKの宿
                if (elements["carePet"].value == "1") {
                        pArray[pArray.length] = "ペットOKの宿";
                }
                // じゃらんハイクラス掲載の宿
                if (elements["careHighClass"].value == "1") {
                        pArray[pArray.length] = "じゃらんハイクラス掲載の宿";
                }
                // ポイント割引OKの宿
                if (elements["carePoint"].value == "1") {
                        pArray[pArray.length] = "ポイント割引OKの宿";
                }
                // オンラインカード決済可能なプラン
                if (elements["careCard"].value == "1") {
                        pArray[pArray.length] = "オンラインカード決済可能なプラン";
                }
                // カード決済専用プラン
//                if (elements["careCardOnly"].value == "1") {
//                        pArray[pArray.length] = "カード決済専用プラン";
//                }
                // 特別室・離れ・スイート
                if (elements["careSweet"].value == "1") {
                        pArray[pArray.length] = "特別室・離れ・スイート";
                }
                // バス・トイレ付き
                if (elements["careBt"].value == "1") {
                        pArray[pArray.length] = "バス・トイレ付き";
                }
                // エステ設備
                if (elements["careEsthetics"].value == "1") {
                        pArray[pArray.length] = "エステ設備";
                }
                // 卓球あり
                if (elements["careTakkyu"].value == "1") {
                        pArray[pArray.length] = "卓球あり";
                }
                // 展望風呂
                if (elements["careLookoutBath"].value == "1") {
                        pArray[pArray.length] = "展望風呂";
                }
                // サウナ
                if (elements["careSauna"].value == "1") {
                        pArray[pArray.length] = "サウナ";
                }
                // ジャグジー
                if (elements["careJacuzzi"].value == "1") {
                        pArray[pArray.length] = "ジャグジー";
                }
                // マッサージ
                if (elements["careMassage"].value == "1") {
                        pArray[pArray.length] = "マッサージ";
                }
                // 貸しスキー
                if (elements["careSkiRent"].value == "1") {
                        pArray[pArray.length] = "貸しスキー";
                }
                // 貸しボード
                if (elements["careBoardRent"].value == "1") {
                        pArray[pArray.length] = "貸しボード";
                }
                // 送迎あり
                if (elements["careSogei"].value == "1") {
                        pArray[pArray.length] = "送迎あり";
                }
                // 部屋で朝食
                if (elements["careBrkRoom"].value == "1") {
                        pArray[pArray.length] = "部屋で朝食";
                }
                // 個室で夕食
                if (elements["careDinPrv"].value == "1") {
                        pArray[pArray.length] = "個室で夕食";
                }
                // 個室で朝食
                if (elements["careBrkPrv"].value == "1") {
                        pArray[pArray.length] = "個室で朝食";
                }
                // チェックアウト11時以降
                if (elements["careChekout11"].value == "1") {
                        pArray[pArray.length] = "チェックアウト11時以降";
                }
                // 露天風呂
                if (elements["careOpenbath"].value == "1") {
                        pArray[pArray.length] = "露天風呂";
                }
                // 温泉掛け流し
                if (elements["careKake"].value == "1") {
                        pArray[pArray.length] = "温泉掛け流し";
                }
                // にごり湯
                if (elements["careNigori"].value == "1") {
                        pArray[pArray.length] = "にごり湯";
                }                                             
                
        }

        this.KODAWARI_DATA = new Array();
        for (var i = 0; i < pArray.length; i++) {
                this.KODAWARI_DATA[i] = pArray[i];
        }
        if (pArray.length>0) {
                document.getElementById(this.KODAWARI_TXT_ID).innerHTML =
                        '変更する&nbsp;<img src="/ui/d/cs/common/image/icon04.gif" alt="" width="17" height="19" align="absmiddle"><br>' + pArray.join(",&nbsp;");
        } else {
                document.getElementById(this.KODAWARI_TXT_ID).innerHTML =
                        '設定する&nbsp;<img src="/ui/d/cs/common/image/icon04.gif" alt="" width="17" height="19" align="absmiddle">';
        }

        //alert(document.getElementById(this.KODAWARI_INPUT).value);

        document.getElementById(this.KODAWARI_INPUT).value = pArray.join(",");

}
/* NSSOL 070213 追加 END */
/****************************/
/* NSSOL 070213 コメントアウト START
function clearKodawariValue() {
	// 屋外プール
	opener.document.forms[0].elements["val(FR_SCN_CARE_OUTSIDE_POOL)"].value = "";
	// ビーチまで徒歩5分
	opener.document.forms[0].elements["val(FR_SCN_CARE_BEACH_5)"].value = "";
	// 駅から徒歩5分以内
	opener.document.forms[0].elements["val(FR_SCN_CARE_STATION_5)"].value = "";
	// 駐車場無料
	opener.document.forms[0].elements["val(pak_flg)"].value = "";
	// 禁煙ルーム
	opener.document.forms[0].elements["val(nsm_rm_flg)"].value = "";
	// 部屋でインターネットOK
	opener.document.forms[0].elements["val(int_rm_flg)"].value = "";
	// 内湯・大浴場
	opener.document.forms[0].elements["val(uti_flg)"].value = "";
	// 温泉
	opener.document.forms[0].elements["val(osn_flg)"].value = "";
	// 貸切風呂・貸切露天
	opener.document.forms[0].elements["val(kosn_flg)"].value = "";
	// 露天風呂付き客室
	opener.document.forms[0].elements["val(FR_SCN_CARE_PRIBATE_BATH)"].value = "";
	// 部屋で夕食
	opener.document.forms[0].elements["val(FR_SCN_CARE_DIN_ROOM)"].value = "";
	// ペットOKの宿
	opener.document.forms[0].elements["val(FR_SCN_CARE_PET)"].value = "";
	// じゃらんハイクラス掲載の宿
	opener.document.forms[0].elements["val(FR_SCN_CARE_HIGH_CLASS)"].value = "";
	// ポイント割引OKの宿
	opener.document.forms[0].elements["val(FR_SCN_CARE_POINT)"].value = "";
	// 特別室・離れ・スイート
	opener.document.forms[0].elements["val(FR_SCN_CARE_SWEET)"].value = "";
	// バス・トイレ付き
	opener.document.forms[0].elements["val(FR_SCN_CARE_BT)"].value = "";
	// エステ設備
	opener.document.forms[0].elements["val(FR_SCN_CARE_ESTHETICS)"].value = "";
	// 卓球あり
	opener.document.forms[0].elements["val(FR_SCN_CARE_TAKKYU)"].value = "";
	// 展望風呂
	opener.document.forms[0].elements["val(FR_SCN_CARE_LOOKOUT_BATH)"].value = "";
	// サウナ
	opener.document.forms[0].elements["val(FR_SCN_CARE_SAUNA)"].value = "";
	// ジャグジー
	opener.document.forms[0].elements["val(FR_SCN_CARE_JACUZZI)"].value = "";
	// マッサージ
	opener.document.forms[0].elements["val(FR_SCN_CARE_MASSAGE)"].value = "";
	// 貸しスキー
	opener.document.forms[0].elements["val(FR_SCN_CARE_SKI_RENT)"].value = "";
	// 貸しボード
	opener.document.forms[0].elements["val(FR_SCN_CARE_BOARD_RENT)"].value = "";
	// 送迎あり
	opener.document.forms[0].elements["val(FR_SCN_CARE_SOGEI)"].value = "";
	// 部屋で朝食
	opener.document.forms[0].elements["val(FR_SCN_CARE_BRK_ROOM)"].value = "";
	// 個室で夕食
	opener.document.forms[0].elements["val(FR_SCN_CARE_DIN_PRV)"].value = "";
	// 個室で朝食
	opener.document.forms[0].elements["val(FR_SCN_CARE_BRK_PRV)"].value = "";
	// チェックアウト11時以降
	opener.document.forms[0].elements["val(FR_SCN_CARE_CHEKOUT_11)"].value = "";
}
 NSSOL 070213 コメントアウト END*/
/* NSSOL 070213 追加 START */
function clearKodawariValue() {

        // 屋外プール
        opener.document.forms[0].elements["careOutsidePool"].value = "";
        // ビーチまで徒歩5分
        opener.document.forms[0].elements["careBeach5"].value = "";
        // 駅から徒歩5分以内
        opener.document.forms[0].elements["careStation5"].value = "";
        // 駐車場無料
        opener.document.forms[0].elements["carePak"].value = "";
        // 禁煙ルーム
        opener.document.forms[0].elements["careNsmr"].value = "";
        // 部屋でインターネットOK
        opener.document.forms[0].elements["careItnr"].value = "";
        // 内湯・大浴場
        opener.document.forms[0].elements["careBath"].value = "";
        // 温泉
        opener.document.forms[0].elements["careOnsen"].value = "";
        // 貸切風呂・貸切露天
        opener.document.forms[0].elements["careBathRent"].value = "";
        // 露天風呂付き客室
        opener.document.forms[0].elements["carePribateBath"].value = "";
        // 部屋で夕食
        opener.document.forms[0].elements["careDinRoom"].value = "";
        // ペットOKの宿
        opener.document.forms[0].elements["carePet"].value = "";
        // じゃらんハイクラス掲載の宿
        opener.document.forms[0].elements["careHighClass"].value = "";
        // ポイント割引OKの宿
        opener.document.forms[0].elements["carePoint"].value = "";
        // 特別室・離れ・スイート
        opener.document.forms[0].elements["careSweet"].value = "";
        // バス・トイレ付き
        opener.document.forms[0].elements["careBt"].value = "";
        // エステ設備
        opener.document.forms[0].elements["careEsthetics"].value = "";
        // 卓球あり
        opener.document.forms[0].elements["careTakkyu"].value = "";
        // 展望風呂
        opener.document.forms[0].elements["careLookoutBath"].value = "";
        // サウナ
        opener.document.forms[0].elements["careSauna"].value = "";
        // ジャグジー
        opener.document.forms[0].elements["careJacuzzi"].value = "";
        // マッサージ
        opener.document.forms[0].elements["careMassage"].value = "";
        // 貸しスキー
        opener.document.forms[0].elements["careSkiRent"].value = "";
        // 貸しボード
        opener.document.forms[0].elements["careBoardRent"].value = "";
        // 送迎あり
        opener.document.forms[0].elements["careSogei"].value = "";
        // 部屋で朝食
        opener.document.forms[0].elements["careBrkRoom"].value = "";
        // 個室で夕食
        opener.document.forms[0].elements["careDinPrv"].value = "";
        // 個室で朝食
        opener.document.forms[0].elements["careBrkPrv"].value = "";
        // チェックアウト11時以降
        opener.document.forms[0].elements["careChekout11"].value = "";
        // オンラインカード決済可能なプラン
        opener.document.forms[0].elements["careCard"].value = "";
        // カード決済専用プラン
//        opener.document.forms[0].elements["careCardOnly"].value = "";
        // 露天風呂
        opener.document.forms[0].elements["careOpenbath"].value = "";
        // 温泉掛け流し
        opener.document.forms[0].elements["careKake"].value = "";
        // にごり湯
        opener.document.forms[0].elements["careNigori"].value = "";
}
/* NSSOL 070213 追加 END */
/****************************/
/* NSSOL 070213 コメントアウト START
function setKodawariValue(pKd) {
	switch (pKd) {
		case "s01":
			// 屋外プール
			opener.document.forms[0].elements["val(FR_SCN_CARE_OUTSIDE_POOL)"].value = "1";
			break;
		case "s02":
			// ビーチまで徒歩5分
			opener.document.forms[0].elements["val(FR_SCN_CARE_BEACH_5)"].value = "1";
			break;
		case "s03":
			// 駅から徒歩5分以内
			opener.document.forms[0].elements["val(FR_SCN_CARE_STATION_5)"].value = "1";
			break;
		case "s04":
			// 駐車場無料
			opener.document.forms[0].elements["val(pak_flg)"].value = "1";
			break;
		case "s05":
			// 禁煙ルーム
			opener.document.forms[0].elements["val(nsm_rm_flg)"].value = "1";
			break;
		case "s06":
			// 部屋でインターネットOK
			opener.document.forms[0].elements["val(int_rm_flg)"].value = "1";
			break;
		case "s07":
			// 内湯・大浴場
			opener.document.forms[0].elements["val(uti_flg)"].value = "1";
			break;
		case "s08":
			// 温泉
			opener.document.forms[0].elements["val(osn_flg)"].value = "1";
			break;
		case "s09":
			// 貸切風呂・貸切露天
			opener.document.forms[0].elements["val(kosn_flg)"].value = "1";
			break;
		case "s10":
			// 露天風呂付き客室
			opener.document.forms[0].elements["val(FR_SCN_CARE_PRIBATE_BATH)"].value = "1";
			break;
		case "s11":
			// 部屋で夕食
			opener.document.forms[0].elements["val(FR_SCN_CARE_DIN_ROOM)"].value = "1";
			break;
		case "s12":
			// ペットOKの宿
			opener.document.forms[0].elements["val(FR_SCN_CARE_PET)"].value = "1";
			break;
		case "s13":
			// じゃらんハイクラス掲載の宿
			opener.document.forms[0].elements["val(FR_SCN_CARE_HIGH_CLASS)"].value = "1";
			break;
		case "s14":
			// ポイント割引OKの宿
			opener.document.forms[0].elements["val(FR_SCN_CARE_POINT)"].value = "1";
			break;
		case "s15":
			// 特別室・離れ・スイート
			opener.document.forms[0].elements["val(FR_SCN_CARE_SWEET)"].value = "1";
			break;
		case "s16":
			// バス・トイレ付き
			opener.document.forms[0].elements["val(FR_SCN_CARE_BT)"].value = "1";
			break;
		case "s17":
			// エステ設備
			opener.document.forms[0].elements["val(FR_SCN_CARE_ESTHETICS)"].value = "1";
			break;
		case "s18":
			// 卓球あり
			opener.document.forms[0].elements["val(FR_SCN_CARE_TAKKYU)"].value = "1";
			break;
		case "s19":
			// 展望風呂
			opener.document.forms[0].elements["val(FR_SCN_CARE_LOOKOUT_BATH)"].value = "1";
			break;
		case "s20":
			// サウナ
			opener.document.forms[0].elements["val(FR_SCN_CARE_SAUNA)"].value = "1";
			break;
		case "s21":
			// ジャグジー
			opener.document.forms[0].elements["val(FR_SCN_CARE_JACUZZI)"].value = "1";
			break;
		case "s22":
			// マッサージ
			opener.document.forms[0].elements["val(FR_SCN_CARE_MASSAGE)"].value = "1";
			break;
		case "s23":
			// 貸しスキー
			opener.document.forms[0].elements["val(FR_SCN_CARE_SKI_RENT)"].value = "1";
			break;
		case "s24":
			// 貸しボード
			opener.document.forms[0].elements["val(FR_SCN_CARE_BOARD_RENT)"].value = "1";
			break;
		case "s25":
			// 送迎あり
			opener.document.forms[0].elements["val(FR_SCN_CARE_SOGEI)"].value = "1";
			break;
		case "s26":
			// 部屋で朝食
			opener.document.forms[0].elements["val(FR_SCN_CARE_BRK_ROOM)"].value = "1";
			break;
		case "s27":
			// 個室で夕食
			opener.document.forms[0].elements["val(FR_SCN_CARE_DIN_PRV)"].value = "1";
			break;
		case "s28":
			// 個室で朝食
			opener.document.forms[0].elements["val(FR_SCN_CARE_BRK_PRV)"].value = "1";
			break;
		case "s29":
			// チェックアウト11時以降
			opener.document.forms[0].elements["val(FR_SCN_CARE_CHEKOUT_11)"].value = "1";
			break;		
	}
}
 NSSOL 070213 コメントアウト END*/
/* NSSOL 070213 追加 START */
function setKodawariValue(pKd) {
        switch (pKd) {
                case "s01":
                        // 屋外プール
                        opener.document.forms[0].elements["careOutsidePool"].value = "1";
                        break;
                case "s02":
                        // ビーチまで徒歩5分
                        opener.document.forms[0].elements["careBeach5"].value = "1";
                        break;
                case "s03":
                        // 駅から徒歩5分以内
                        opener.document.forms[0].elements["careStation5"].value = "1";
                        break;
                case "s04":
                        // 駐車場無料
                        opener.document.forms[0].elements["carePak"].value = "1";
                        break;
                case "s05":
                        // 禁煙ルーム
                        opener.document.forms[0].elements["careNsmr"].value = "1";
                        break;
                case "s06":
                        // 部屋でインターネットOK
                        opener.document.forms[0].elements["careItnr"].value = "1";
                        break;
                case "s07":
                        // 内湯・大浴場
                        opener.document.forms[0].elements["careBath"].value = "1";
                        break;
                case "s08":
                        // 温泉
                        opener.document.forms[0].elements["careOnsen"].value = "1";
                        break;
                case "s09":
                        // 貸切風呂・貸切露天
                        opener.document.forms[0].elements["careBathRent"].value = "1";
                        break;
                case "s10":
                        // 露天風呂付き客室
                        opener.document.forms[0].elements["carePribateBath"].value = "1";
                        break;
                case "s11":
                        // 部屋で夕食
                        opener.document.forms[0].elements["careDinRoom"].value = "1";
                        break;
                case "s12":
                        // ペットOKの宿
                        opener.document.forms[0].elements["carePet"].value = "1";
                        break;
                case "s13":
                        // じゃらんハイクラス掲載の宿
                        opener.document.forms[0].elements["careHighClass"].value = "1";
                        break;
                case "s14":
                        // ポイント割引OKの宿
                        opener.document.forms[0].elements["carePoint"].value = "1";
                        break;
                case "s15":
                        // 特別室・離れ・スイート
                        opener.document.forms[0].elements["careSweet"].value = "1";
                        break;
                case "s16":
                        // バス・トイレ付き
                        opener.document.forms[0].elements["careBt"].value = "1";
                        break;
                case "s17":
                        // エステ設備
                        opener.document.forms[0].elements["careEsthetics"].value = "1";
                        break;
                case "s18":
                        // 卓球あり
                        opener.document.forms[0].elements["careTakkyu"].value = "1";
                        break;
                case "s19":
                        // 展望風呂
                        opener.document.forms[0].elements["careLookoutBath"].value = "1";
                        break;
                case "s20":
                        // サウナ
                        opener.document.forms[0].elements["careSauna"].value = "1";
                        break;
                case "s21":
                        // ジャグジー
                        opener.document.forms[0].elements["careJacuzzi"].value = "1";
                        break;
                case "s22":
                        // マッサージ
                        opener.document.forms[0].elements["careMassage"].value = "1";
                        break;
                case "s23":
                        // 貸しスキー
                        opener.document.forms[0].elements["careSkiRent"].value = "1";
                        break;
                case "s24":
                        // 貸しボード
                        opener.document.forms[0].elements["careBoardRent"].value = "1";
                        break;
                case "s25":
                        // 送迎あり
                        opener.document.forms[0].elements["careSogei"].value = "1";
                        break;
                case "s26":
                        // 部屋で朝食
                        opener.document.forms[0].elements["careBrkRoom"].value = "1";
                        break;
                case "s27":
                        // 個室で夕食
                        opener.document.forms[0].elements["careDinPrv"].value = "1";
                        break;
                case "s28":
                        // 個室で朝食
                        opener.document.forms[0].elements["careBrkPrv"].value = "1";
                        break;
                case "s29":
                        // チェックアウト11時以降
                        opener.document.forms[0].elements["careChekout11"].value = "1";
                        break;
                case "s30":
                        // オンラインカード決済可能なプラン
                        opener.document.forms[0].elements["careCard"].value = "1";
                        break;
                case "s31":
                        // カード決済専用プラン
                        opener.document.forms[0].elements["careCardOnly"].value = "1";
                        break;
                case "s32":
                        // 露天風呂
                        opener.document.forms[0].elements["careOpenbath"].value = "1";
                        break;
                case "s33":
                        // 温泉掛け流し
                        opener.document.forms[0].elements["careKake"].value = "1";
                        break;
                case "s34":
                        // にごり湯
                        opener.document.forms[0].elements["careNigori"].value = "1";
                        break;                                                                                              
               
        }
}
/* NSSOL 070213 追加 END */
/****************************/
this.KODAWARI_DATA = new Array();
function setKodawariList(pArray){
	this.KODAWARI_DATA = new Array();
	for(var i=0; i<pArray.length; i++){
		this.KODAWARI_DATA[i] = pArray[i];
	}
	if(pArray.length>0){
		document.getElementById(this.KODAWARI_TXT_ID).innerHTML = '変更する&nbsp;<img src="/ui/d/cs/common/image/icon04.gif" alt="" width="17" height="19" align="absmiddle"><br>'+pArray.join(",&nbsp;");
	}else{
		document.getElementById(this.KODAWARI_TXT_ID).innerHTML = '設定する&nbsp;<img src="/ui/d/cs/common/image/icon04.gif" alt="" width="17" height="19" align="absmiddle">';
	}

	document.getElementById(this.KODAWARI_INPUT).value = pArray.join(",");

	btnBlink();
}
/****************************/
function moreKodawariList(){
	document.getElementById(this.KODAWARI_MORE_SPEC_ID).style.display='block';
	document.getElementById(this.KODAWARI_BUTTON_ID).style.display='none';
	window.resizeTo(350, 620);
}

/************************************************
** utility **
************************************************/

/****************************/
function visibleItems(pArr){
	var len = pArr.length;
	for(var i=0; i<len; i++){
		var obj = document.getElementById(pArr[i]);
		if(obj){
			obj.style.visibility = "visible";
		}
	}
}
/****************************/
function hideItems(pArr){
	var len = pArr.length;
	for(var i=0; i<len; i++){
		var obj = document.getElementById(pArr[i]);
		if(obj){
			obj.style.visibility = "hidden";
		}
	}
}
/****************************/
function dynOpenWin(url,winname,window_width,window_height){
	param = new String();
	param = "width=" + window_width + ",height=" + window_height + ",toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=auto,resizable=1";
	NEWWIN = window.open("",winname,param);
	NEWWIN.location.href = url;
	NEWWIN.focus();
	return NEWWIN;
}
/****************************/
this.blinkArr = new Array();
this.btnObj;
this.defBtnImg;
this.blinkBtnImg;
function setBtnBlink(pBtnId, pDefImg, pBlinkImg){
try {
	uaPreload(pBlinkImg);
	this.btnObj = document.getElementById(pBtnId);
	this.defBtnImg = pDefImg;
	this.blinkBtnImg = pBlinkImg;

	for(var i=3; i<arguments.length; i++){
		this.blinkArr[i-3] = arguments[i];
		this.blinkArr[arguments[i]] = getFormValue(arguments[i]);
	}
} catch(e) {
}
}
/****************************/
function btnBlink(){
try {
	var len = this.blinkArr.length;
	for(var i=0; i<len; i++){
		var defVal = getFormValue(this.blinkArr[i]);
		var curVal = this.blinkArr[this.blinkArr[i]];
		if(defVal!=curVal){
			// NASSOL 070213 変更
			//this.btnObj.src = this.blinkBtnImg;
	                var rdm = "rdm"+Math.floor(Math.random()*1000);
	                this.btnObj.src = this.blinkBtnImg+"?"+rdm;
			return true;
		}
	}
	if(this.btnObj)
	this.btnObj.src = this.defBtnImg;
	return true;
} catch(e) {
}
}
/****************************/
this.blinkArr2 = new Array();
this.btnObj2;
this.defBtnImg2;
this.blinkBtnImg2;
function setBtnBlink2(pBtnId, pDefImg, pBlinkImg){
try {
	uaPreload(pBlinkImg);
	this.btnObj2 = document.getElementById(pBtnId);
	this.defBtnImg2 = pDefImg;
	this.blinkBtnImg2 = pBlinkImg;

	for(var i=3; i<arguments.length; i++){
		this.blinkArr2[i-3] = arguments[i];
		this.blinkArr2[arguments[i]] = getFormValue(arguments[i]);
	}
} catch(e) {
}
}
/****************************/
function btnBlink2(){
try {
	var len = this.blinkArr2.length;
	for(var i=0; i<len; i++){
		var defVal = getFormValue(this.blinkArr2[i]);
		var curVal = this.blinkArr2[this.blinkArr2[i]];
		if(defVal!=curVal){
			this.btnObj2.src = this.blinkBtnImg2;
			return true;
		}
	}
	this.btnObj2.src = this.defBtnImg2;
	return true;
} catch(e) {
}	
}
function setException(pId, pVal){
	switch(pId){
		case "childNumList" : this.CHILD_NUM_WIN = pVal; break;
	}
}
/****************************/
function getFormValue(pId){
	var obj = document.getElementById(pId);
	var tag = obj.tagName;
	switch(tag.toLowerCase()){
		case "input" :
			var type = obj.getAttribute("type");
			switch(type.toLowerCase()){
				case "text" : return obj.value; break;
                                case "hidden" : return obj.value; break; // NSSOL 070213 追加
				case "radio" : return obj.checked; break;
				case "checkbox" : return obj.checked; break;
			}
			break;
		case "textarea" : return obj.value; break;
		case "select" : 
			var idx = obj.selectedIndex;
			var ops = obj.getElementsByTagName("option");
			return ops[idx].value;
		break;
		case "div" :;
		case "td" :;
		case "span" : return obj.innerHTML;
	}
}
function uaRO(pObj, pPath){
	var tag = pObj.tagName;
	switch(tag.toLowerCase()){
		case "img" : pObj.src = pPath; break;
		case "input" : 
					var type = pObj.getAttribute("type");
					if(type.toLowerCase()=="image"){
						pObj.src = pPath;
					}
					break;
	}
}
function uaPreload(){
	var len = arguments.length;
	this.imgStore = new Array();
	for(var i=0; i<len; i++){
		imgStore[i] = new Image();
		imgStore[i].src = arguments[i];
	}
}
/****************************/
var isMac = false;
var isWin = false;
var isUnix = false;
var isNN = false;
var isIE = false;
var isFF = false;
var isOpera = false;
var brVer = null;

/****************************/
/* ブラウザエージェントプロパティ */
function checkEnv(){
	isMac = (navigator.userAgent.indexOf("Mac") != -1);
	isWin = (navigator.userAgent.indexOf("Win") != -1);
	isUnix = (navigator.userAgent.indexOf("X11") != -1);

	isNN = (navigator.appName.indexOf("Netscape") != -1);
	isIE = (navigator.appName.indexOf("Internet Explorer") != -1);
	isFF = (navigator.userAgent.indexOf("Firefox") != -1);
	isOpera = (navigator.userAgent.indexOf("Opera") != -1);

	brVer = (parseInt(navigator.appVersion));

}
checkEnv();

// @かえる Add Start Y.Yano 06.03.31
/* NSSOL 070213 コメントアウト START
function getHideChildNumList() {
	var childList = new Array();
	var len = document.forms[0].length;
	for(var i=0; i<len; i++) {
		var objName = document.forms[0].elements[i].name;
		if(objName == "val(child1_num)" || objName == "child1_num") {
			childList[0] = new Number(document.forms[0].elements[i].value);
		} else if(objName == "val(child2_num)" || objName == "child2_num") {
			childList[1] = new Number(document.forms[0].elements[i].value);
		} else if(objName == "val(child3_num)" || objName == "child3_num") {
			childList[2] = new Number(document.forms[0].elements[i].value);
		} else if(objName == "val(child4_num)" || objName == "child4_num") {
			childList[3] = new Number(document.forms[0].elements[i].value);
		} else if(objName == "val(child5_num)" || objName == "child5_num") {
			childList[4] = new Number(document.forms[0].elements[i].value);
		}
	}
	return childList;
}
 NSSOL 070213 コメントアウト END*/
/* NSSOL 070213 追加 START */
function getHideChildNumList() {
        var childList = new Array();
        var len = document.forms[0].length;
        for(var i=0; i<len; i++) {
                var objName = document.forms[0].elements[i].name;
                if(objName == "child1Num" || objName == "child1Num") {
                        childList[0] = new Number(document.forms[0].elements[i].value);
                } else if(objName == "child2Num" || objName == "child2Num") {
                        childList[1] = new Number(document.forms[0].elements[i].value);
                } else if(objName == "child3Num" || objName == "child3Num") {
                        childList[2] = new Number(document.forms[0].elements[i].value);
                } else if(objName == "child4Num" || objName == "child4Num") {
                        childList[3] = new Number(document.forms[0].elements[i].value);
                } else if(objName == "child5Num" || objName == "child5Num") {
                        childList[4] = new Number(document.forms[0].elements[i].value);
                }
        }
        return childList;
}
function getHideChildNumList2() {
        var childList = new Array();
        var len = document.forms[1].length;
        for(var i=0; i<len; i++) {
                var objName = document.forms[1].elements[i].name;
                if(objName == "child1Num" || objName == "child1Num") {
                        childList[0] = new Number(document.forms[1].elements[i].value);
                } else if(objName == "child2Num" || objName == "child2Num") {
                        childList[1] = new Number(document.forms[1].elements[i].value);
                } else if(objName == "child3Num" || objName == "child3Num") {
                        childList[2] = new Number(document.forms[1].elements[i].value);
                } else if(objName == "child4Num" || objName == "child4Num") {
                        childList[3] = new Number(document.forms[1].elements[i].value);
                } else if(objName == "child5Num" || objName == "child5Num") {
                        childList[4] = new Number(document.forms[1].elements[i].value);
                }
        }
        return childList;
}
/* NSSOL 070213 追加 END */
// @かえる Add End
// >> added kiwamiUI 2006/10/18
/****************************/
this.placeExId = "dyn-place-example";
this.placeExTxtId = "searchAreaStn";

function placeExHideFocus(evt){
	var evt = (evt) ? evt : ((window.event)? event :null);
	var target = (evt.target) ? evt.target : evt.srcElement;
	if(!checkPalNodeId(target, placeExId) && !checkPalNodeId(target, placeExId)){
		showPlaceEx(false);
	}
}
function showPlaceEx(bool){
	var elem = document.getElementById(this.placeExId);
	var pdst = document.getElementById(this.STAY_TXT_ID);
	var pdan = document.getElementById(this.ADULT_NUM_ID);
	var pdrn = document.getElementById(this.ROOM_NUM_ID);
	var pdbmin = document.getElementById(this.BADGET_MIN_ID);
	var pdbmax = document.getElementById(this.BADGET_MAX_ID);



	if(elem){
		if(bool){
			elem.style.visibility = "visible";
			hideItems(this.calHideList);
			
		}else{
			elem.style.visibility = "hidden";
			visibleItems(this.calHideList)
			document.onmousedown = null;
		}
	}
	document.onmousedown = placeExHideFocus;
}
function setTxtPlaceEx(elem){
	var txtElem = document.getElementById(this.placeExTxtId);
	if(txtElem){
			txtElem.value = elem.innerHTML;
			showPlaceEx(false);
	}
}

function writeAreaK2() {
	if(ken) {
		var areaK = '<p class="areaName" ><a href="javascript:void(0);" onclick="showAreaListK();" style="text-decoration:none !important;">'
		if(document.getElementById(AREA_INPT_K_ID).value) {
			var kenCode = document.getElementById(AREA_INPT_K_ID).value;
			var kenName = ken[kenCode].name;
			areaK += '<span id="dyn_area_txt_k" style="text-decoration:underline !important;">' + kenName + '</span></a></p></dd>';
			areaK += '<div id="dyn_area_k_list" class="dyn_area_list" style="width:100px;">';
			var index = 0;
			var kenindex;
			for(var key in ken) {
				areaK += '<div><img src="/ui/d/cs/jalan/common/image/blt_03.gif" alt="" width="4" height="7" border="0" align="absmiddle">&nbsp;<a id="' + index + '" href="javascript:void(0);" onClick="setAreaKTxt2(0, \'' + ken[key].name + '\', \'' + key + '\');" >' + ken[key].name + '</a></div>';
				if(kenCode == key)
					kenindex = index;
				index++;
			}
			areaK += '<div class="close_btn"><a href="javascript:void(0);" onClick="closeAreaListK();"><img src="/ui/d/cs/jalan/common/image/btn_close.gif" alt="" width="11" height="11" align="absmiddle">&nbsp;Close</a></div>';
			document.getElementById('td_area_k').innerHTML = areaK;
		}
	}

}

//aoyama追加終了

// 0909 検索パネル修正対応ここから

/***********************************
関数名前 ： initRoomCrackPanel
機能概要 ： 部屋割りパネル用初期化
機能説明 ： 大人人数、子供人数の表示をセット
作成日   ： 2009/09/17
************************************/
function initRoomCrackPanel(){
	// override construct method implemented miserably.
	var rc = document.getElementById('roomCrack');
	var _uaSetInstance = window.uaSetInstance;
	window.uaSetInstance = function() {
		UaCode = new UaCode();
		JalanStoreVal = new JalanStoreVal(Y_TXT_ID, M_TXT_ID, D_TXT_ID, DATE_CHECK_ID, STAY_TXT_ID, ADULT_NUM_ID, CHILD1_NUM_ID, 
			CHILD2_NUM_ID, CHILD3_NUM_ID, CHILD4_NUM_ID, CHILD5_NUM_ID, ROOM_NUM_ID, BADGET_MIN_ID, BADGET_MAX_ID,"roomCrack","roomCount");
	}
	window.setAreaATxt2 = window.setAreaATxt2||function(){};
	window.writeAreaK2 = window.writeAreaK2||function(){};
	preloadRoomCrackPanelImg();
	setTimeout(function(){
		var roomNumValue = document.getElementById(this.ROOM_NUM_ID).value;
		updateRoomNum();
		changeAdultNumElement(roomNumValue);
		setTotalAdultNum(roomNumValue);
		setTotalChildNum(roomNumValue);
	},99);
}


/***********************************
関数名前 ： preloadRoomCrackPanelImg
機能概要 ： 部屋割りパネル画像をプリロード
作成日   ： 2009/09/17
************************************/
function preloadRoomCrackPanelImg(){
	var img = new Array();
	var imgArr = [
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_01.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_02.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_03_01.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_03_02.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_03_03.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_03_04.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_03.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_04.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_icon_1.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_icon_2.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_icon_3.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_icon_4.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_icon_5.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_icon_6.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_icon_7.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_icon_8.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_icon_9.gif',
			'/ui/d/cs/jalan/common/image/searchpanel_roompanel_icon_10.gif'
			];
	for(var i=0; i<imgArr.length; i++){
		img[i] = new Image();
		img[i].src = imgArr[i]
	}
}


/***********************************
関数名前 ： getRoomCrackInputValue
機能概要 ： input(#roomCrack)のvalueを取得
作成日   ： 2009/09/17
************************************/
function getRoomCrackInputValue(){
	var roomCrackInputTag = document.getElementById('roomCrack');
	var roomCrackInputValue = roomCrackInputTag.value.split(',');
	
	return roomCrackInputValue;
}


/***********************************
関数名前 ： setRoomCrackInputValue
機能概要 ： input(#roomCrack)のvalueにセット
作成日   ： 2009/09/17
************************************/
function setRoomCrackInputValue(roomNum){
	var roomCrackInputTag = document.getElementById('roomCrack');
	var numPerRoom = new Array();
	var numAllRoom = new Array();
	
	for(var i=0; i<roomNum; i++){
		numPerRoom[i] = [
			document.getElementById('panel_adult_num_' + eval(i+1)).value,
			document.getElementById('panel_child_num_1_' + eval(i+1)).value,
			document.getElementById('panel_child_num_2_' + eval(i+1)).value,
			document.getElementById('panel_child_num_3_' + eval(i+1)).value,
			document.getElementById('panel_child_num_4_' + eval(i+1)).value,
			document.getElementById('panel_child_num_5_' + eval(i+1)).value
		]
		//1部屋あたりの各人数を連結
		numAllRoom.push(numPerRoom[i].join(''));
	}
	
	//各部屋の値をコンマで連結しinput(#roomCrack)のvalueにセット
	roomCrackInputTag.value = numAllRoom.join(',');
}


/***********************************
関数名前 ： setFirstRoomNum
機能概要 ： select(#select-adult-num)の値をinput(#roomCrack)の1部屋目にセット
作成日   ： 2009/09/17
************************************/
function setFirstRoomNum(){
	var roomCrackInputTag = document.getElementById('roomCrack');
	var dynAdultNum = document.getElementById('select-adult-num');
	
	roomCrackInputTag.value = roomCrackInputTag.value.replace(roomCrackInputTag.value.substr(0,1),dynAdultNum.value);
}


/***********************************
関数名前 ： setTotalAdultNum
機能概要 ： 大人合計人数をセット
作成日   ： 2009/09/17
************************************/
function setTotalAdultNum(roomNum){
	var adultNumElement01 = document.getElementById('adultnum-selecttag');
	var adultNumElement02 = document.getElementById('adultnum-text');
	
	//1部屋目の値のみselect(#select-adult-num)にセット
	for(var i=0; i<adultNumElement01.firstChild.length; i++){
		if(adultNumElement01.firstChild.options[i].value == getRoomCrackInputValue()[0].charAt(0)){
			adultNumElement01.firstChild.options[i].selected = true;
		}
	}
	adultNumElement02.firstChild.innerHTML = getTotalAdultNum(roomNum) + '名';
}


/***********************************
関数名前 ： getTotalAdultNum
機能概要 ： 大人合計人数を求める
作成日   ： 2009/09/17
************************************/
//090925 バリュー渡辺 納品後修正その2 ここから
function getTotalAdultNum(roomNum){
	var adultTotalNum = 0;
	var moreThanMark = '';
	for(var i=0; i<roomNum; i++){
		adultTotalNum += eval(getRoomCrackInputValue()[i].charAt(0));
		
		//9人以上なら～をつける
		if(getRoomCrackInputValue()[i].charAt(0) == 9){
			moreThanMark = '～';
		}
	}
	
	return adultTotalNum + moreThanMark;
}
//090925 バリュー渡辺 納品後修正その2 ここまで

/***********************************
関数名前 ： setTotalChildNum
機能概要 ： 子供合計人数をセット
作成日   ： 2009/09/17
************************************/
function setTotalChildNum(roomNum){
	var childNumElement = document.getElementById('childnum');
	var childNum1Input = document.getElementById('child1Num');
	var childNum2Input = document.getElementById('child2Num');
	var childNum3Input = document.getElementById('child3Num');
	var childNum4Input = document.getElementById('child4Num');
	var childNum5Input = document.getElementById('child5Num');
	
	//1部屋目の値のみinput(#child1Num～)にセット
	var child1Num = getRoomCrackInputValue()[0].charAt(1);
	if (child1Num != 0) {
		childNum1Input.value = child1Num;
	}
	var child2Num = getRoomCrackInputValue()[0].charAt(2);
	if (child2Num != 0) {
		childNum2Input.value = child2Num;
	}
	var child3Num = getRoomCrackInputValue()[0].charAt(3);
	if (child3Num != 0) {
		childNum3Input.value = child3Num;
	}
	var child4Num = getRoomCrackInputValue()[0].charAt(4);
	if (child4Num != 0) {
		childNum4Input.value = child4Num;
	}
	var child5Num = getRoomCrackInputValue()[0].charAt(5);
	if (child5Num != 0) {
		childNum5Input.value = child5Num;
	}
	
	childNumElement.firstChild.innerHTML = getTotalChildNum(roomNum) + '名';
}


/***********************************
関数名前 ： getTotalChildNum
機能概要 ： 子供合計人数を求める
作成日   ： 2009/09/17
************************************/
function getTotalChildNum(roomNum){
	var childTotalNum = 0;
		for(var i=0; i<roomNum; i++){
			childTotalNum += eval(getRoomCrackInputValue()[i].charAt(1));
			childTotalNum += eval(getRoomCrackInputValue()[i].charAt(2));
			childTotalNum += eval(getRoomCrackInputValue()[i].charAt(3));
			childTotalNum += eval(getRoomCrackInputValue()[i].charAt(4));
			childTotalNum += eval(getRoomCrackInputValue()[i].charAt(5));
		}
	return childTotalNum;
}


/***********************************
関数名前 ： changeAdultNumElement
機能概要 ： 1部屋以外を選択した場合は大人人数をテキストにする
作成日   ： 2009/09/17
************************************/
function changeAdultNumElement(roomNum){
	var adultNumElement01 = document.getElementById('adultnum-selecttag');
	var adultNumElement02 = document.getElementById('adultnum-text');
	
	if(roomNum == 1){
		adultNumElement01.style.display = '';
		adultNumElement02.style.display = 'none';
	}else{
		adultNumElement01.style.display = 'none';
		adultNumElement02.style.display = '';
	}
}


/***********************************
関数名前 ： roomHideFocus
機能概要 ： 部屋割りパネル以外をクリックでパネルを閉じる
作成日   ： 2009/09/17
************************************/
function roomHideFocus(evt){
	var evt = (evt) ? evt : ((window.event)? event :null);
	var target = (evt.target) ? evt.target : evt.srcElement;
	if(!checkPalNodeId(target, "roompanel-block")){
		closeRoomCrackPanel();
	}
}


/***********************************
関数名前 ： closeRoomCrackPanel
機能概要 ： 部屋割りパネルelementを削除
作成日   ： 2009/09/17
************************************/
function closeRoomCrackPanel(){
	if(document.getElementById('roompanel-block')){
		var objRoomPanelBlock = document.getElementById('roompanel-block');
		var objResearchButton = document.getElementById('research');
		var objParentNode = objRoomPanelBlock.parentNode;
		
		//部屋割りパネルを削除
		objParentNode.removeChild(objRoomPanelBlock);
		
		if(document.getElementById('iframe-obj')){
			var objIframe = document.getElementById('iframe-obj');
			objParentNode.removeChild(objIframe);
		}
		
		disableList();
		btnBlink();
		document.onmousedown = null;
		setShowArea();
	}
}


/***********************************
関数名前 ： showRoomCrackPanel
機能概要 ： 部屋割りパネルを生成
機能説明 ： 部屋割りパネルは部屋数、大人人数、子供人数の変更で
            生成される。但し1部屋の場合はdisplay:noneで表示されない。
作成日   ： 2009/09/17
************************************/
function showRoomCrackPanel(childNumSetFlg){
	closeCalAll();
	closeRoomCrackPanel();
	
	var objBody = document.getElementsByTagName("body").item(0);
	var roomNumValue = document.getElementById(this.ROOM_NUM_ID).value;
	var roomNumColumn = document.getElementById('room-num');
	var isIE8 = navigator.userAgent.indexOf("MSIE")!=-1 && navigator.userAgent.indexOf("Trident/4.0")!=-1;
	var isIE6 = navigator.userAgent.indexOf("MSIE 6")!=-1;
	
	//部屋定員設定が無ければ以下の値
	if(window.roomCapaMostNum == undefined){var roomCapaMostNumVal = 9;} else if (window.roomCapaMostNum >= 9) {var roomCapaMostNumVal = 9;}else{var roomCapaMostNumVal = window.roomCapaMostNum;}
	if(window.roomCapaMinNum == undefined){ var roomCapaMinNumVal = 1;}else{ var roomCapaMinNumVal = window.roomCapaMinNum;}
	if(window.childNotFlg == undefined){ var childNotFlgVal = 0;}else{ var childNotFlgVal = window.childNotFlg;}
	if(window.child1NumFlg == undefined){ var child1NumFlgVal = 1;}else{ var child1NumFlgVal = window.child1NumFlg;}
	if(window.child2NumFlg == undefined){ var child2NumFlgVal = 1;}else{ var child2NumFlgVal = window.child2NumFlg;}
	if(window.child3NumFlg == undefined){ var child3NumFlgVal = 1;}else{ var child3NumFlgVal = window.child3NumFlg;}
	if(window.child4NumFlg == undefined){ var child4NumFlgVal = 1;}else{ var child4NumFlgVal = window.child4NumFlg;}
	if(window.child5NumFlg == undefined){ var child5NumFlgVal = 1;}else{ var child5NumFlgVal = window.child5NumFlg;}
	
	//IEでフォーム部品にz-indexが効かない対策
	if(isIE && !isIE8){
		var objIframe = document.createElement('iframe');
		objIframe.setAttribute('id','iframe-obj');
		objIframe.style.border = 'none';
		objIframe.style.zIndex = '10000';
		objIframe.style.position = 'absolute';
		objBody.appendChild(objIframe);
	}
	
	var objRoomPanelBlock = document.createElement('div');
	objRoomPanelBlock.setAttribute('id','roompanel-block');
	objBody.appendChild(objRoomPanelBlock);
	
	//1部屋以外、または子供人数設定の場合はパネルを表示
	if(roomNumValue != 1 || childNumSetFlg == 1){
		if(isIE6){ objIframe.style.display = 'block'; }
		objRoomPanelBlock.style.display = 'block';
	}else{
		if(isIE6){ objIframe.style.display = 'none'; }
		objRoomPanelBlock.style.display = 'none';
	}
	
	//document左上からの座標を得る
	var roomNumColumnPosition = roomNumColumn.getBoundingClientRect();
	if(document.body.scrollTop){
		//DOCTYPEがない場合
		objRoomPanelBlock.style.top = Math.round(document.body.scrollTop + roomNumColumnPosition.top) + roomNumColumn.offsetHeight + 'px';
		objRoomPanelBlock.style.left = Math.round(document.body.scrollLeft + roomNumColumnPosition.left) - 100 + 'px';
	}else{
		//DOCTYPEがある場合
		objRoomPanelBlock.style.top = Math.round(document.documentElement.scrollTop + roomNumColumnPosition.top) + roomNumColumn.offsetHeight + 'px';
		objRoomPanelBlock.style.left = Math.round(document.documentElement.scrollLeft + roomNumColumnPosition.left) - 100 + 'px';
	}
	
	var objRoomPanelForm = document.createElement('form');
	objRoomPanelForm.setAttribute('name','roompanelForm');
	objRoomPanelForm.setAttribute('id','roompanel');
	objRoomPanelBlock.appendChild(objRoomPanelForm);
	
	for(var i=1; i<=roomNumValue; i++){
		var objRoomPanelRow = document.createElement('div');
		objRoomPanelRow.setAttribute('className','row');
		objRoomPanelRow.setAttribute('class','row');
		objRoomPanelForm.appendChild(objRoomPanelRow);
		
		var objRoomPanelCaption = document.createElement('p');
		objRoomPanelRow.appendChild(objRoomPanelCaption);
		
		var objRoomPanelCaptionImg = document.createElement('img');
		objRoomPanelCaptionImg.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_roompanel_icon_' + i + '.gif');
		objRoomPanelCaptionImg.setAttribute('border','0');
		objRoomPanelCaptionImg.setAttribute('width','60');
		objRoomPanelCaptionImg.setAttribute('height','13');
		objRoomPanelCaptionImg.setAttribute('alt',i + '部屋目');
		objRoomPanelCaption.appendChild(objRoomPanelCaptionImg);
		
		var objRoomPanelRowTable = document.createElement('table');
		objRoomPanelRowTable.setAttribute('border','0');
		objRoomPanelRowTable.setAttribute('cellpadding','0');
		objRoomPanelRowTable.setAttribute('cellspacing','0');
		objRoomPanelRow.appendChild(objRoomPanelRowTable);
		
		var objRoomPanelRowTableTbody = document.createElement('tbody');
		objRoomPanelRowTable.appendChild(objRoomPanelRowTableTbody);
		
		var objRoomPanelRowTableTr = document.createElement('tr');
		objRoomPanelRowTableTbody.appendChild(objRoomPanelRowTableTr);
		
		//大人人数
		var objRoomPanelRowTableTd01 = document.createElement('td');
		objRoomPanelRowTableTr.appendChild(objRoomPanelRowTableTd01);
		
			var objRoomPanelRowTable01 = document.createElement('table');
			objRoomPanelRowTable01.setAttribute('border','0');
			objRoomPanelRowTable01.setAttribute('cellpadding','0');
			objRoomPanelRowTable01.setAttribute('cellspacing','0');
			objRoomPanelRowTable01.setAttribute('className','adult');
			objRoomPanelRowTable01.setAttribute('class','adult');
			objRoomPanelRowTableTd01.appendChild(objRoomPanelRowTable01);
			
			var objRoomPanelRowTable01Tbody = document.createElement('tbody');
			objRoomPanelRowTable01.appendChild(objRoomPanelRowTable01Tbody);
			
			var objRoomPanelRowTable01Tr01 = document.createElement('tr');
			objRoomPanelRowTable01Tbody.appendChild(objRoomPanelRowTable01Tr01);
			
			var objRoomPanelRowTable01Th = document.createElement('th');
			objRoomPanelRowTable01Tr01.appendChild(objRoomPanelRowTable01Th);
			
			var objRoomPanelRowTable01ThImg01 = document.createElement('img');
			objRoomPanelRowTable01ThImg01.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_01.gif');
			objRoomPanelRowTable01ThImg01.setAttribute('border','0');
			objRoomPanelRowTable01ThImg01.setAttribute('width','22');
			objRoomPanelRowTable01ThImg01.setAttribute('height','10');
			objRoomPanelRowTable01ThImg01.setAttribute('alt','大人');
			objRoomPanelRowTable01Th.appendChild(objRoomPanelRowTable01ThImg01);
			
			var objRoomPanelRowTable01Tr02 = document.createElement('tr');
			objRoomPanelRowTable01Tbody.appendChild(objRoomPanelRowTable01Tr02);
			
			var objRoomPanelRowTable01Td01 = document.createElement('td');
			objRoomPanelRowTable01Tr02.appendChild(objRoomPanelRowTable01Td01);
			
			var objRoomPanelRowTable01span = document.createElement('span');
			objRoomPanelRowTable01Td01.appendChild(objRoomPanelRowTable01span);
			
			var objRoomPanelRowTable01ImgSp = document.createElement('img');
			objRoomPanelRowTable01ImgSp.setAttribute('src','/ui/d/cs/jalan/common/image/sp.gif');
			objRoomPanelRowTable01ImgSp.setAttribute('border','0');
			objRoomPanelRowTable01ImgSp.setAttribute('width','1');
			objRoomPanelRowTable01ImgSp.setAttribute('height','21');
			objRoomPanelRowTable01span.appendChild(objRoomPanelRowTable01ImgSp);
			
			var objRoomPanelRowTable01Select = document.createElement('select');
			objRoomPanelRowTable01Select.setAttribute('name','panelAdultNum_' + i);
			objRoomPanelRowTable01Select.setAttribute('id','panel_adult_num_' + i);
			objRoomPanelRowTable01Select.onchange = function(){setRoomCrackInputValue(roomNumValue);setTotalAdultNum(roomNumValue);}
			objRoomPanelRowTable01span.appendChild(objRoomPanelRowTable01Select);
			
			for(var adultNum=roomCapaMinNumVal; adultNum<=roomCapaMostNumVal; adultNum++){
				var objRoomPanelRowTable01option01 = document.createElement('option');
				objRoomPanelRowTable01option01.setAttribute('value',adultNum);
				
				if(i <= getRoomCrackInputValue().length){
					//inputタグroomCrackの部屋数内ならvalue値を元にselectedをつける
					if(adultNum == getRoomCrackInputValue()[i-1].charAt(0)){
						objRoomPanelRowTable01option01.selected = true;
					}
				}else if(adultNum == 2){
					objRoomPanelRowTable01option01.selected = true;
				}
				
				objRoomPanelRowTable01Select.appendChild(objRoomPanelRowTable01option01);
				
				//090925 バリュー渡辺 納品後修正その2 ここから
				if(adultNum == 9){
					var objRoomPanelRowTable01option01Text = document.createTextNode(adultNum + '～');
				}else{
					var objRoomPanelRowTable01option01Text = document.createTextNode(adultNum);
				}
				//090925 バリュー渡辺 納品後修正その2 ここまで
				objRoomPanelRowTable01option01.appendChild(objRoomPanelRowTable01option01Text);
			}
			var objRoomPanelRowTable01Td01Img01 = document.createElement('img');
			objRoomPanelRowTable01Td01Img01.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_txt_03_03.gif');
			objRoomPanelRowTable01Td01Img01.setAttribute('border','0');
			objRoomPanelRowTable01Td01Img01.setAttribute('width','11');
			objRoomPanelRowTable01Td01Img01.setAttribute('height','14');
			objRoomPanelRowTable01Td01Img01.setAttribute('alt','名');
			objRoomPanelRowTable01Td01.appendChild(objRoomPanelRowTable01Td01Img01);
		
		//子供人数
		var objRoomPanelRowTableTd02 = document.createElement('td');
		objRoomPanelRowTableTr.appendChild(objRoomPanelRowTableTd02);
		
			var objRoomPanelRowTable02 = document.createElement('table');
			objRoomPanelRowTable02.setAttribute('border','0');
			objRoomPanelRowTable02.setAttribute('cellpadding','0');
			objRoomPanelRowTable02.setAttribute('cellspacing','0');
			objRoomPanelRowTable02.setAttribute('className','child');
			objRoomPanelRowTable02.setAttribute('class','child');
			objRoomPanelRowTableTd02.appendChild(objRoomPanelRowTable02);
			
			var objRoomPanelRowTable02Tbody = document.createElement('tbody');
			objRoomPanelRowTable02.appendChild(objRoomPanelRowTable02Tbody);
			
			var objRoomPanelRowTable02Tr01 = document.createElement('tr');
			objRoomPanelRowTable02Tbody.appendChild(objRoomPanelRowTable02Tr01);
			
			var objRoomPanelRowTable02Th01 = document.createElement('th');
			objRoomPanelRowTable02Tr01.appendChild(objRoomPanelRowTable02Th01);
			
				var objRoomPanelRowTable02Th01Img01 = document.createElement('img');
				objRoomPanelRowTable02Th01Img01.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_02.gif');
				objRoomPanelRowTable02Th01Img01.setAttribute('border','0');
				objRoomPanelRowTable02Th01Img01.setAttribute('width','32');
				objRoomPanelRowTable02Th01Img01.setAttribute('height','10');
				objRoomPanelRowTable02Th01Img01.setAttribute('alt','小学生');
				objRoomPanelRowTable02Th01.appendChild(objRoomPanelRowTable02Th01Img01);
				
			var objRoomPanelRowTable02Th02 = document.createElement('th');
			objRoomPanelRowTable02Th02.setAttribute('colSpan','4');
			objRoomPanelRowTable02Tr01.appendChild(objRoomPanelRowTable02Th02);
				
				var objRoomPanelRowTable02Th02Img01 = document.createElement('img');
				objRoomPanelRowTable02Th02Img01.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_03.gif');
				objRoomPanelRowTable02Th02Img01.setAttribute('border','0');
				objRoomPanelRowTable02Th02Img01.setAttribute('width','22');
				objRoomPanelRowTable02Th02Img01.setAttribute('height','10');
				objRoomPanelRowTable02Th02Img01.setAttribute('alt','幼児');
				objRoomPanelRowTable02Th02.appendChild(objRoomPanelRowTable02Th02Img01);
			
			var objRoomPanelRowTable02Tr02 = document.createElement('tr');
			objRoomPanelRowTable02Tbody.appendChild(objRoomPanelRowTable02Tr02);
			
			var objRoomPanelRowTable02Td01 = document.createElement('td');
			objRoomPanelRowTable02Tr02.appendChild(objRoomPanelRowTable02Td01);
				
				var objRoomPanelRowTable02Td01Span = document.createElement('span');
				objRoomPanelRowTable02Td01.appendChild(objRoomPanelRowTable02Td01Span);
				
				var objRoomPanelRowTable02Td01ImgSp = document.createElement('img');
				objRoomPanelRowTable02Td01ImgSp.setAttribute('src','/ui/d/cs/jalan/common/image/sp.gif');
				objRoomPanelRowTable02Td01ImgSp.setAttribute('border','0');
				objRoomPanelRowTable02Td01ImgSp.setAttribute('width','1');
				objRoomPanelRowTable02Td01ImgSp.setAttribute('height','21');
				objRoomPanelRowTable02Td01Span.appendChild(objRoomPanelRowTable02Td01ImgSp);
				
				if(childNotFlgVal == 0 && child1NumFlgVal != 0){
					var objRoomPanelRowTable02Td01Select01 = document.createElement('select');
					objRoomPanelRowTable02Td01Select01.setAttribute('name','panelChildNum1_' + i);
					objRoomPanelRowTable02Td01Select01.setAttribute('id','panel_child_num_1_' + i);
					objRoomPanelRowTable02Td01Select01.onchange = function(){setRoomCrackInputValue(roomNumValue);setTotalChildNum(roomNumValue);}
					objRoomPanelRowTable02Td01Span.appendChild(objRoomPanelRowTable02Td01Select01);
					
					for(var childNum=0; childNum<=5; childNum++){
						var objRoomPanelRowTable02Td01option01 = document.createElement('option');
						objRoomPanelRowTable02Td01option01.setAttribute('value',childNum);
						
						//inputタグroomCrackの部屋割りを反映
						if(i <= getRoomCrackInputValue().length){
							//inputタグroomCrackのvalue値を元にselectedをつける
							if(childNum == getRoomCrackInputValue()[i-1].charAt(1)){
								objRoomPanelRowTable02Td01option01.selected = true;
							}
						}
						objRoomPanelRowTable02Td01Select01.appendChild(objRoomPanelRowTable02Td01option01);
						
						var objRoomPanelRowTable02Td01option01Text = document.createTextNode(childNum);
						objRoomPanelRowTable02Td01option01.appendChild(objRoomPanelRowTable02Td01option01Text);
					}
					
					var objRoomPanelRowTable02Td01Img01 = document.createElement('img');
					objRoomPanelRowTable02Td01Img01.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_txt_03_03.gif');
					objRoomPanelRowTable02Td01Img01.setAttribute('border','0');
					objRoomPanelRowTable02Td01Img01.setAttribute('width','11');
					objRoomPanelRowTable02Td01Img01.setAttribute('height','14');
					objRoomPanelRowTable02Td01Img01.setAttribute('alt','名');
					objRoomPanelRowTable02Td01.appendChild(objRoomPanelRowTable02Td01Img01);
				}else{
					var objRoomPanelRowTable02Td01Span = document.createElement('span');
					objRoomPanelRowTable02Td01.appendChild(objRoomPanelRowTable02Td01Span);
					
					var objRoomPanelRowTable02Td01option01Text = document.createTextNode('受け入れなし');
					objRoomPanelRowTable02Td01Span.appendChild(objRoomPanelRowTable02Td01option01Text);
					
					var objRoomPanelRowTable02Td01option01HiddenInput = document.createElement('input');
					objRoomPanelRowTable02Td01option01HiddenInput.setAttribute('type','hidden');
					objRoomPanelRowTable02Td01option01HiddenInput.setAttribute('value','0');
					objRoomPanelRowTable02Td01option01HiddenInput.setAttribute('id','panel_child_num_1_' + i);
					objRoomPanelRowTable02Td01Span.appendChild(objRoomPanelRowTable02Td01option01HiddenInput);
				}
			
			var objRoomPanelRowTable02Td02 = document.createElement('td');
			objRoomPanelRowTable02Tr02.appendChild(objRoomPanelRowTable02Td02);
				
				var objRoomPanelRowTable02Td02Img02 = document.createElement('img');
				objRoomPanelRowTable02Td02Img02.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_03_01.gif');
				objRoomPanelRowTable02Td02Img02.setAttribute('border','0');
				objRoomPanelRowTable02Td02Img02.setAttribute('width','66');
				objRoomPanelRowTable02Td02Img02.setAttribute('height','14');
				objRoomPanelRowTable02Td02Img02.setAttribute('alt','（食事・布団あり）');
				objRoomPanelRowTable02Td02.appendChild(objRoomPanelRowTable02Td02Img02);
				
				var objRoomPanelRowTable02Td02Br02 = document.createElement('br');
				objRoomPanelRowTable02Td02.appendChild(objRoomPanelRowTable02Td02Br02);
				
				var objRoomPanelRowTable02Td02Span = document.createElement('span');
				objRoomPanelRowTable02Td02.appendChild(objRoomPanelRowTable02Td02Span);
				
				var objRoomPanelRowTable02Td02ImgSp = document.createElement('img');
				objRoomPanelRowTable02Td02ImgSp.setAttribute('src','/ui/d/cs/jalan/common/image/sp.gif');
				objRoomPanelRowTable02Td02ImgSp.setAttribute('border','0');
				objRoomPanelRowTable02Td02ImgSp.setAttribute('width','1');
				objRoomPanelRowTable02Td02ImgSp.setAttribute('height','21');
				objRoomPanelRowTable02Td02Span.appendChild(objRoomPanelRowTable02Td02ImgSp);
				
				if(childNotFlgVal == 0 && child2NumFlgVal != 0){
					var objRoomPanelRowTable02Td02Select01 = document.createElement('select');
					objRoomPanelRowTable02Td02Select01.setAttribute('name','panelChildNum2_' + i);
					objRoomPanelRowTable02Td02Select01.setAttribute('id','panel_child_num_2_' + i);
					objRoomPanelRowTable02Td02Select01.onchange = function(){setRoomCrackInputValue(roomNumValue);setTotalChildNum(roomNumValue);}
					objRoomPanelRowTable02Td02Span.appendChild(objRoomPanelRowTable02Td02Select01);
					
					for(var childNum=0; childNum<=5; childNum++){
						var objRoomPanelRowTable02Td02option01 = document.createElement('option');
						objRoomPanelRowTable02Td02option01.setAttribute('value',childNum);
						
						//inputタグroomCrackの部屋割りを反映
						if(i <= getRoomCrackInputValue().length){
							//inputタグroomCrackのvalue値を元にselectedをつける
							if(childNum == getRoomCrackInputValue()[i-1].charAt(2)){
								objRoomPanelRowTable02Td02option01.selected = true;
							}
						}
						objRoomPanelRowTable02Td02Select01.appendChild(objRoomPanelRowTable02Td02option01);
						
						var objRoomPanelRowTable02Td02option01Text = document.createTextNode(childNum);
						objRoomPanelRowTable02Td02option01.appendChild(objRoomPanelRowTable02Td02option01Text);
					}
					
					var objRoomPanelRowTable02Td02Img01 = document.createElement('img');
					objRoomPanelRowTable02Td02Img01.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_txt_03_03.gif');
					objRoomPanelRowTable02Td02Img01.setAttribute('border','0');
					objRoomPanelRowTable02Td02Img01.setAttribute('width','11');
					objRoomPanelRowTable02Td02Img01.setAttribute('height','14');
					objRoomPanelRowTable02Td02Img01.setAttribute('alt','名');
					objRoomPanelRowTable02Td02.appendChild(objRoomPanelRowTable02Td02Img01);
				}else{
					var objRoomPanelRowTable02Td02Span = document.createElement('span');
					objRoomPanelRowTable02Td02.appendChild(objRoomPanelRowTable02Td02Span);
					
					var objRoomPanelRowTable02Td02option01Text = document.createTextNode('受け入れなし');
					objRoomPanelRowTable02Td02Span.appendChild(objRoomPanelRowTable02Td02option01Text);
					
					var objRoomPanelRowTable02Td02option01HiddenInput = document.createElement('input');
					objRoomPanelRowTable02Td02option01HiddenInput.setAttribute('type','hidden');
					objRoomPanelRowTable02Td02option01HiddenInput.setAttribute('value','0');
					objRoomPanelRowTable02Td02option01HiddenInput.setAttribute('id','panel_child_num_2_' + i);
					objRoomPanelRowTable02Td01Span.appendChild(objRoomPanelRowTable02Td02option01HiddenInput);
				}
			
			var objRoomPanelRowTable02Td03 = document.createElement('td');
			objRoomPanelRowTable02Tr02.appendChild(objRoomPanelRowTable02Td03);
				
				var objRoomPanelRowTable02Td03Img02 = document.createElement('img');
				objRoomPanelRowTable02Td03Img02.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_03_02.gif');
				objRoomPanelRowTable02Td03Img02.setAttribute('border','0');
				objRoomPanelRowTable02Td03Img02.setAttribute('width','44');
				objRoomPanelRowTable02Td03Img02.setAttribute('height','14');
				objRoomPanelRowTable02Td03Img02.setAttribute('alt','（食事あり）');
				objRoomPanelRowTable02Td03.appendChild(objRoomPanelRowTable02Td03Img02);
				
				var objRoomPanelRowTable02Td03Br02 = document.createElement('br');
				objRoomPanelRowTable02Td03.appendChild(objRoomPanelRowTable02Td03Br02);
				
				var objRoomPanelRowTable02Td03Span = document.createElement('span');
				objRoomPanelRowTable02Td03.appendChild(objRoomPanelRowTable02Td03Span);
				
				var objRoomPanelRowTable02Td03ImgSp = document.createElement('img');
				objRoomPanelRowTable02Td03ImgSp.setAttribute('src','/ui/d/cs/jalan/common/image/sp.gif');
				objRoomPanelRowTable02Td03ImgSp.setAttribute('border','0');
				objRoomPanelRowTable02Td03ImgSp.setAttribute('width','1');
				objRoomPanelRowTable02Td03ImgSp.setAttribute('height','21');
				objRoomPanelRowTable02Td03Span.appendChild(objRoomPanelRowTable02Td03ImgSp);
				
				if(childNotFlgVal == 0 && child3NumFlgVal != 0){
					var objRoomPanelRowTable02Td03Select01 = document.createElement('select');
					objRoomPanelRowTable02Td03Select01.setAttribute('name','panelChildNum3_' + i);
					objRoomPanelRowTable02Td03Select01.setAttribute('id','panel_child_num_3_' + i);
					objRoomPanelRowTable02Td03Select01.onchange = function(){setRoomCrackInputValue(roomNumValue);setTotalChildNum(roomNumValue);}
					objRoomPanelRowTable02Td03Span.appendChild(objRoomPanelRowTable02Td03Select01);
					
					for(var childNum=0; childNum<=5; childNum++){
						var objRoomPanelRowTable02Td03option01 = document.createElement('option');
						objRoomPanelRowTable02Td03option01.setAttribute('value',childNum);
						
						//inputタグroomCrackの部屋割りを反映
						if(i <= getRoomCrackInputValue().length){
							//inputタグroomCrackのvalue値を元にselectedをつける
							if(childNum == getRoomCrackInputValue()[i-1].charAt(3)){
								objRoomPanelRowTable02Td03option01.selected = true;
							}
						}
						objRoomPanelRowTable02Td03Select01.appendChild(objRoomPanelRowTable02Td03option01);
						
						var objRoomPanelRowTable02Td03option01Text = document.createTextNode(childNum);
						objRoomPanelRowTable02Td03option01.appendChild(objRoomPanelRowTable02Td03option01Text);
					}
					
					var objRoomPanelRowTable02Td03Img01 = document.createElement('img');
					objRoomPanelRowTable02Td03Img01.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_txt_03_03.gif');
					objRoomPanelRowTable02Td03Img01.setAttribute('border','0');
					objRoomPanelRowTable02Td03Img01.setAttribute('width','11');
					objRoomPanelRowTable02Td03Img01.setAttribute('height','14');
					objRoomPanelRowTable02Td03Img01.setAttribute('alt','名');
					objRoomPanelRowTable02Td03.appendChild(objRoomPanelRowTable02Td03Img01);
				}else{
					var objRoomPanelRowTable02Td03Span = document.createElement('span');
					objRoomPanelRowTable02Td03.appendChild(objRoomPanelRowTable02Td03Span);
					
					var objRoomPanelRowTable02Td03option01Text = document.createTextNode('受け入れなし');
					objRoomPanelRowTable02Td03Span.appendChild(objRoomPanelRowTable02Td03option01Text);
					
					var objRoomPanelRowTable02Td03option01HiddenInput = document.createElement('input');
					objRoomPanelRowTable02Td03option01HiddenInput.setAttribute('type','hidden');
					objRoomPanelRowTable02Td03option01HiddenInput.setAttribute('value','0');
					objRoomPanelRowTable02Td03option01HiddenInput.setAttribute('id','panel_child_num_3_' + i);
					objRoomPanelRowTable02Td01Span.appendChild(objRoomPanelRowTable02Td03option01HiddenInput);
				}
			
			var objRoomPanelRowTable02Td04 = document.createElement('td');
			objRoomPanelRowTable02Tr02.appendChild(objRoomPanelRowTable02Td04);
				
				var objRoomPanelRowTable02Td04Img02 = document.createElement('img');
				objRoomPanelRowTable02Td04Img02.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_03_03.gif');
				objRoomPanelRowTable02Td04Img02.setAttribute('border','0');
				objRoomPanelRowTable02Td04Img02.setAttribute('width','44');
				objRoomPanelRowTable02Td04Img02.setAttribute('height','14');
				objRoomPanelRowTable02Td04Img02.setAttribute('alt','（布団あり）');
				objRoomPanelRowTable02Td04.appendChild(objRoomPanelRowTable02Td04Img02);
				
				var objRoomPanelRowTable02Td04Br02 = document.createElement('br');
				objRoomPanelRowTable02Td04.appendChild(objRoomPanelRowTable02Td04Br02);
				
				var objRoomPanelRowTable02Td04Span = document.createElement('span');
				objRoomPanelRowTable02Td04.appendChild(objRoomPanelRowTable02Td04Span);
				
				var objRoomPanelRowTable02Td04ImgSp = document.createElement('img');
				objRoomPanelRowTable02Td04ImgSp.setAttribute('src','/ui/d/cs/jalan/common/image/sp.gif');
				objRoomPanelRowTable02Td04ImgSp.setAttribute('border','0');
				objRoomPanelRowTable02Td04ImgSp.setAttribute('width','1');
				objRoomPanelRowTable02Td04ImgSp.setAttribute('height','21');
				objRoomPanelRowTable02Td04Span.appendChild(objRoomPanelRowTable02Td04ImgSp);
				
				if(childNotFlgVal == 0 && child4NumFlgVal != 0){
					var objRoomPanelRowTable02Td04Select01 = document.createElement('select');
					objRoomPanelRowTable02Td04Select01.setAttribute('name','panelChildNum4_' + i);
					objRoomPanelRowTable02Td04Select01.setAttribute('id','panel_child_num_4_' + i);
					objRoomPanelRowTable02Td04Select01.onchange = function(){setRoomCrackInputValue(roomNumValue);setTotalChildNum(roomNumValue);}
					objRoomPanelRowTable02Td04Span.appendChild(objRoomPanelRowTable02Td04Select01);
					
					for(var childNum=0; childNum<=5; childNum++){
						var objRoomPanelRowTable02Td04option01 = document.createElement('option');
						objRoomPanelRowTable02Td04option01.setAttribute('value',childNum);
						
						//inputタグroomCrackの部屋割りを反映
						if(i <= getRoomCrackInputValue().length){
							//inputタグroomCrackのvalue値を元にselectedをつける
							if(childNum == getRoomCrackInputValue()[i-1].charAt(4)){
								objRoomPanelRowTable02Td04option01.selected = true;
							}
						}
						objRoomPanelRowTable02Td04Select01.appendChild(objRoomPanelRowTable02Td04option01);
						
						var objRoomPanelRowTable02Td04option01Text = document.createTextNode(childNum);
						objRoomPanelRowTable02Td04option01.appendChild(objRoomPanelRowTable02Td04option01Text);
					}
					
					var objRoomPanelRowTable02Td04Img01 = document.createElement('img');
					objRoomPanelRowTable02Td04Img01.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_txt_03_03.gif');
					objRoomPanelRowTable02Td04Img01.setAttribute('border','0');
					objRoomPanelRowTable02Td04Img01.setAttribute('width','11');
					objRoomPanelRowTable02Td04Img01.setAttribute('height','14');
					objRoomPanelRowTable02Td04Img01.setAttribute('alt','名');
					objRoomPanelRowTable02Td04.appendChild(objRoomPanelRowTable02Td04Img01);
				}else{
					var objRoomPanelRowTable02Td04Span = document.createElement('span');
					objRoomPanelRowTable02Td04.appendChild(objRoomPanelRowTable02Td04Span);
					
					var objRoomPanelRowTable02Td04option01Text = document.createTextNode('受け入れなし');
					objRoomPanelRowTable02Td04Span.appendChild(objRoomPanelRowTable02Td04option01Text);
					
					var objRoomPanelRowTable02Td04option01HiddenInput = document.createElement('input');
					objRoomPanelRowTable02Td04option01HiddenInput.setAttribute('type','hidden');
					objRoomPanelRowTable02Td04option01HiddenInput.setAttribute('value','0');
					objRoomPanelRowTable02Td04option01HiddenInput.setAttribute('id','panel_child_num_4_' + i);
					objRoomPanelRowTable02Td01Span.appendChild(objRoomPanelRowTable02Td04option01HiddenInput);
				}
			
			var objRoomPanelRowTable02Td05 = document.createElement('td');
			objRoomPanelRowTable02Tr02.appendChild(objRoomPanelRowTable02Td05);
				
				var objRoomPanelRowTable02Td05Img02 = document.createElement('img');
				objRoomPanelRowTable02Td05Img02.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_roompanel_cap_03_04.gif');
				objRoomPanelRowTable02Td05Img02.setAttribute('border','0');
				objRoomPanelRowTable02Td05Img02.setAttribute('width','64');
				objRoomPanelRowTable02Td05Img02.setAttribute('height','14');
				objRoomPanelRowTable02Td05Img02.setAttribute('alt','（食事・布団なし）');
				objRoomPanelRowTable02Td05.appendChild(objRoomPanelRowTable02Td05Img02);
				
				var objRoomPanelRowTable02Td05Br02 = document.createElement('br');
				objRoomPanelRowTable02Td05.appendChild(objRoomPanelRowTable02Td05Br02);
				
				var objRoomPanelRowTable02Td05Span = document.createElement('span');
				objRoomPanelRowTable02Td05.appendChild(objRoomPanelRowTable02Td05Span);
				
				var objRoomPanelRowTable02Td05ImgSp = document.createElement('img');
				objRoomPanelRowTable02Td05ImgSp.setAttribute('src','/ui/d/cs/jalan/common/image/sp.gif');
				objRoomPanelRowTable02Td05ImgSp.setAttribute('border','0');
				objRoomPanelRowTable02Td05ImgSp.setAttribute('width','1');
				objRoomPanelRowTable02Td05ImgSp.setAttribute('height','21');
				objRoomPanelRowTable02Td05Span.appendChild(objRoomPanelRowTable02Td05ImgSp);
				
				if(childNotFlgVal == 0 && child5NumFlgVal != 0){
					var objRoomPanelRowTable02Td05Select01 = document.createElement('select');
					objRoomPanelRowTable02Td05Select01.setAttribute('name','panelChildNum5_' + i);
					objRoomPanelRowTable02Td05Select01.setAttribute('id','panel_child_num_5_' + i);
					objRoomPanelRowTable02Td05Select01.onchange = function(){setRoomCrackInputValue(roomNumValue);setTotalChildNum(roomNumValue);}
					objRoomPanelRowTable02Td05Span.appendChild(objRoomPanelRowTable02Td05Select01);
					
					for(var childNum=0; childNum<=5; childNum++){
						var objRoomPanelRowTable02Td05option01 = document.createElement('option');
						objRoomPanelRowTable02Td05option01.setAttribute('value',childNum);
						
						//inputタグroomCrackの部屋割りを反映
						if(i <= getRoomCrackInputValue().length){
							//inputタグroomCrackのvalue値を元にselectedをつける
							if(childNum == getRoomCrackInputValue()[i-1].charAt(5)){
								objRoomPanelRowTable02Td05option01.selected = true;
							}
						}
						objRoomPanelRowTable02Td05Select01.appendChild(objRoomPanelRowTable02Td05option01);
						
						var objRoomPanelRowTable02Td05option01Text = document.createTextNode(childNum);
						objRoomPanelRowTable02Td05option01.appendChild(objRoomPanelRowTable02Td05option01Text);
					}
					
					var objRoomPanelRowTable02Td05Img01 = document.createElement('img');
					objRoomPanelRowTable02Td05Img01.setAttribute('src','/ui/d/cs/jalan/common/image/searchpanel_txt_03_03.gif');
					objRoomPanelRowTable02Td05Img01.setAttribute('border','0');
					objRoomPanelRowTable02Td05Img01.setAttribute('width','11');
					objRoomPanelRowTable02Td05Img01.setAttribute('height','14');
					objRoomPanelRowTable02Td05Img01.setAttribute('alt','名');
					objRoomPanelRowTable02Td05.appendChild(objRoomPanelRowTable02Td05Img01);
				}else{
					var objRoomPanelRowTable02Td05Span = document.createElement('span');
					objRoomPanelRowTable02Td05.appendChild(objRoomPanelRowTable02Td05Span);
					
					var objRoomPanelRowTable02Td05option01Text = document.createTextNode('受け入れなし');
					objRoomPanelRowTable02Td05Span.appendChild(objRoomPanelRowTable02Td05option01Text);
					
					var objRoomPanelRowTable02Td05option01HiddenInput = document.createElement('input');
					objRoomPanelRowTable02Td05option01HiddenInput.setAttribute('type','hidden');
					objRoomPanelRowTable02Td05option01HiddenInput.setAttribute('value','0');
					objRoomPanelRowTable02Td05option01HiddenInput.setAttribute('id','panel_child_num_5_' + i);
					objRoomPanelRowTable02Td01Span.appendChild(objRoomPanelRowTable02Td05option01HiddenInput);
				}
	}
	
	//閉じるボタン
	var objRoomPanelCloseBtnArea = document.createElement('p');
	objRoomPanelCloseBtnArea.setAttribute('id','panel-close-btn');
	objRoomPanelCloseBtnArea.style.cursor = 'pointer';
	objRoomPanelCloseBtnArea.onclick = closeRoomCrackPanel;
	objRoomPanelForm.appendChild(objRoomPanelCloseBtnArea);
	
	var objRoomPanelCloseBtnAreaImg = document.createElement('img');
	objRoomPanelCloseBtnAreaImg.setAttribute('src','/ui/d/cs/jalan/common/image/btn_close.gif');
	objRoomPanelCloseBtnAreaImg.setAttribute('width','11');
	objRoomPanelCloseBtnAreaImg.setAttribute('height','11');
	objRoomPanelCloseBtnAreaImg.setAttribute('alt','');
	objRoomPanelCloseBtnArea.appendChild(objRoomPanelCloseBtnAreaImg);
	
	var objRoomPanelCloseBtnAreaText = document.createTextNode(' Close');
	objRoomPanelCloseBtnArea.appendChild(objRoomPanelCloseBtnAreaText);
	
	if(isIE && !isIE8){
		objIframe.style.width = objRoomPanelBlock.offsetWidth;
		objIframe.style.height = objRoomPanelBlock.offsetHeight;
		objIframe.style.top = objRoomPanelBlock.offsetTop;
		objIframe.style.left = objRoomPanelBlock.offsetLeft;
	}
	
	document.onmousedown = roomHideFocus;
	
	changeAdultNumElement(roomNumValue);
	setRoomCrackInputValue(roomNumValue);
	setTotalAdultNum(roomNumValue);
	setTotalChildNum(roomNumValue);
}

/***********************************
関数名前 ： updateRoomNum
機能概要 ： 人数DOM更新
作成日   ： 2009/10/28
************************************/
function updateRoomNum(roomNum) {
	var roomCrackValue = document.getElementById('roomCrack').value;
	/*
	var roomCrackInputTag = document.getElementById('roomCrack');
	var numPerRoom = new Array();
	var numAllRoom = new Array();
	for(var i=0; i<roomNum; i++){
		numPerRoom[i] = [
			document.getElementById('panel_adult_num_' + eval(i+1)).value,
			document.getElementById('panel_child_num_1_' + eval(i+1)).value,
			document.getElementById('panel_child_num_2_' + eval(i+1)).value,
			document.getElementById('panel_child_num_3_' + eval(i+1)).value,
			document.getElementById('panel_child_num_4_' + eval(i+1)).value,
			document.getElementById('panel_child_num_5_' + eval(i+1)).value
		]
		numAllRoom.push(numPerRoom[i].join(''));
	}
	roomCrackInputTag.value = numAllRoom.join(',');*/
}


/***********************************
関数名前 ： initStayCount
機能概要 ： 泊数をデフォルトに戻す
作成日   ： 2009/09/17
************************************/
function initStayCount(){
	pObj = document.getElementById(this.STAY_TXT_ID);
	for(var i=0; i<pObj.length; i++){
		if(pObj.options[i].value == 1) pObj.options[i].selected = true;
	}
}


/***********************************
関数名前 ： disableStayDate2
機能概要 ： 日付未定時のグレーアウト項目（部屋割り対応ver）
            泊数をデフォルトに戻す、部屋数はグレーアウトしない仕様
作成日   ： 2009/09/17
************************************/
this.dateTxts2 = [this.Y_TXT_ID, this.M_TXT_ID, this.D_TXT_ID, this.STAY_TXT_ID];
function disableStayDate2(){
	pObj = document.getElementById(this.DATE_CHECK_ID);
	var sts = (pObj.checked);
	var len = this.dateTxts2.length;
	for(var i=0; i<len; i++){
		var obj = document.getElementById(this.dateTxts2[i]);
		if(obj)
			obj.disabled = (sts==true);
	}
}


/***********************************
関数名前 ： initKodawariForm2
機能概要 ： initKodawariFormの検索パネル上に内容を羅列しないver
作成日   ： 2009/09/17
************************************/
function initKodawariForm2(){
        var pArray = new Array();
        with (this.document.forms[0]) {

                // 屋外プール
                if (elements["careOutsidePool"].value == "1") {
                        pArray[pArray.length] = "屋外プール";
                }
                // ビーチまで徒歩5分
                if (elements["careBeach5"].value == "1") {
                        pArray[pArray.length] = "ビーチまで徒歩5分";
                }
                // 駅から徒歩5分以内
                if (elements["careStation5"].value == "1") {
                        pArray[pArray.length] = "駅から徒歩5分以内";
                }
                // 駐車場無料
                if (elements["carePak"].value == "1") {
                        pArray[pArray.length] = "駐車場無料";
                }
                // 禁煙ルーム
                if (elements["careNsmr"].value == "1") {
                        pArray[pArray.length] = "禁煙ルーム";
                }
                // 部屋でインターネットOK
                if (elements["careItnr"].value == "1") {
                        pArray[pArray.length] = "部屋でインターネットOK";
                }
                // 内湯・大浴場
                if (elements["careBath"].value == "1") {
                        pArray[pArray.length] = "内湯・大浴場";
                }
                // 温泉
                if (elements["careOnsen"].value == "1") {
                        pArray[pArray.length] = "温泉";
                }
                // 貸切風呂・貸切露天
                if (elements["careBathRent"].value == "1") {
                        pArray[pArray.length] = "貸切風呂・貸切露天";
                }
                // 露天風呂付き客室
                if (elements["carePribateBath"].value == "1") {
                        pArray[pArray.length] = "露天風呂付き客室";
                }
                // 部屋で夕食
                if (elements["careDinRoom"].value == "1") {
                        pArray[pArray.length] = "部屋で夕食";
                }
                // ペットOKの宿
                if (elements["carePet"].value == "1") {
                        pArray[pArray.length] = "ペットOKの宿";
                }
                // じゃらんハイクラス掲載の宿
                if (elements["careHighClass"].value == "1") {
                        pArray[pArray.length] = "じゃらんハイクラス掲載の宿";
                }
                // ポイント割引OKの宿
                if (elements["carePoint"].value == "1") {
                        pArray[pArray.length] = "ポイント割引OKの宿";
                }
                // オンラインカード決済可能なプラン
                if (elements["careCard"].value == "1") {
                        pArray[pArray.length] = "オンラインカード決済可能なプラン";
                }
                // カード決済専用プラン
//                if (elements["careCardOnly"].value == "1") {
//                        pArray[pArray.length] = "カード決済専用プラン";
//                }
                // 特別室・離れ・スイート
                if (elements["careSweet"].value == "1") {
                        pArray[pArray.length] = "特別室・離れ・スイート";
                }
                // バス・トイレ付き
                if (elements["careBt"].value == "1") {
                        pArray[pArray.length] = "バス・トイレ付き";
                }
                // エステ設備
                if (elements["careEsthetics"].value == "1") {
                        pArray[pArray.length] = "エステ設備";
                }
                // 卓球あり
                if (elements["careTakkyu"].value == "1") {
                        pArray[pArray.length] = "卓球あり";
                }
                // 展望風呂
                if (elements["careLookoutBath"].value == "1") {
                        pArray[pArray.length] = "展望風呂";
                }
                // サウナ
                if (elements["careSauna"].value == "1") {
                        pArray[pArray.length] = "サウナ";
                }
                // ジャグジー
                if (elements["careJacuzzi"].value == "1") {
                        pArray[pArray.length] = "ジャグジー";
                }
                // マッサージ
                if (elements["careMassage"].value == "1") {
                        pArray[pArray.length] = "マッサージ";
                }
                // 貸しスキー
                if (elements["careSkiRent"].value == "1") {
                        pArray[pArray.length] = "貸しスキー";
                }
                // 貸しボード
                if (elements["careBoardRent"].value == "1") {
                        pArray[pArray.length] = "貸しボード";
                }
                // 送迎あり
                if (elements["careSogei"].value == "1") {
                        pArray[pArray.length] = "送迎あり";
                }
                // 部屋で朝食
                if (elements["careBrkRoom"].value == "1") {
                        pArray[pArray.length] = "部屋で朝食";
                }
                // 個室で夕食
                if (elements["careDinPrv"].value == "1") {
                        pArray[pArray.length] = "個室で夕食";
                }
                // 個室で朝食
                if (elements["careBrkPrv"].value == "1") {
                        pArray[pArray.length] = "個室で朝食";
                }
                // チェックアウト11時以降
                if (elements["careChekout11"].value == "1") {
                        pArray[pArray.length] = "チェックアウト11時以降";
                }
                // 露天風呂
                if (elements["careOpenbath"].value == "1") {
                        pArray[pArray.length] = "露天風呂";
                }
                // 温泉掛け流し
                if (elements["careKake"].value == "1") {
                        pArray[pArray.length] = "温泉掛け流し";
                }
                // にごり湯
                if (elements["careNigori"].value == "1") {
                        pArray[pArray.length] = "にごり湯";
                }                
        }

        this.KODAWARI_DATA = new Array();
        for (var i = 0; i < pArray.length; i++) {
                this.KODAWARI_DATA[i] = pArray[i];
        }
        if (pArray.length>0) {
                document.getElementById(this.KODAWARI_TXT_ID).innerHTML =
//			'変更する&nbsp;<img src="/ui/d/cs/common/image/icon04.gif" alt="" width="17" height="19" align="absmiddle"><br>' + pArray.join(",&nbsp;");
			'こだわり条件あり';
        } else {
                document.getElementById(this.KODAWARI_TXT_ID).innerHTML =
//			'設定する&nbsp;<img src="/ui/d/cs/common/image/icon04.gif" alt="" width="17" height="19" align="absmiddle">';
			'設定する';
        }

        //alert(document.getElementById(this.KODAWARI_INPUT).value);

        //document.getElementById(this.KODAWARI_INPUT).value = pArray.join(",");
}



/***********************************
関数名前 ： setKodawariList2
機能概要 ： setKodawariListの検索パネル上に内容を羅列しないver
作成日   ： 2009/09/17
************************************/
function setKodawariList2(pArray){
	this.KODAWARI_DATA = new Array();
	for(var i=0; i<pArray.length; i++){
		this.KODAWARI_DATA[i] = pArray[i];
	}
	if(pArray.length>0){
//		document.getElementById(this.KODAWARI_TXT_ID).innerHTML = '変更する&nbsp;<img src="/ui/d/cs/common/image/icon04.gif" alt="" width="17" height="19" align="absmiddle"><br>'+pArray.join(",&nbsp;");
		document.getElementById(this.KODAWARI_TXT_ID).innerHTML = 'こだわり条件あり';
	}else{
//		document.getElementById(this.KODAWARI_TXT_ID).innerHTML = '設定する&nbsp;<img src="/ui/d/cs/common/image/icon04.gif" alt="" width="17" height="19" align="absmiddle">';
		document.getElementById(this.KODAWARI_TXT_ID).innerHTML = '設定する';
	}

	document.getElementById(this.KODAWARI_INPUT).value = pArray.join(",");

	btnBlink();
}


/***********************************
関数名前 ： closeKodawariList2
機能概要 ： closeKodawariListの検索パネル上に内容を羅列しないver
作成日   ： 2009/09/17
************************************/
function closeKodawariList2(){
	if (opener != null && !opener.closed) {
		clearKodawariValue();
		var resArr = new Array();
		var inptArr = document.getElementsByTagName("input");
		var chbArr = new Array();
		for(var k=0; k<inptArr.length; k++){
			if(inptArr[k].getAttribute("type")=="checkbox"){
				chbArr[chbArr.length] = inptArr[k];
			}
		}
		var len = chbArr.length;
		for(var i=0; i<len; i++){
			if(chbArr[i].checked){
				var label = chbArr[i].parentNode.getElementsByTagName("label");
				if(label.length>0)
					var tmpHtml = label[0].innerHTML;
					var astPos = tmpHtml.indexOf("※");
					if(astPos>-1){
						tmpHtml = tmpHtml.substring(0, astPos-1);
					}
				resArr[resArr.length] = tmpHtml;
				setKodawariValue(chbArr[i].id);
			}
		}
//		opener.setKodawariList(resArr);
		opener.setKodawariList2(resArr);
	}
	window.close();
}


// 0909 検索パネル修正対応ここまで

/***********************************
関数名前 ： initKodawariForm3
機能概要 ： こだわり条件を上限までラベルで表示
作成日   ： 2010/10/25
************************************/
function initKodawariForm3(formName){
	var pArray = new Array();
	with (this.document.forms[formName]) {
		// 屋外プール
		if (elements["careOutsidePool"].value == "1") {
			pArray[pArray.length] = "屋外プール";
		}
		// ビーチまで徒歩5分
		if (elements["careBeach5"].value == "1") {
			pArray[pArray.length] = "ビーチまで徒歩5分";
		}
		// 駅から徒歩5分以内
		if (elements["careStation5"].value == "1") {
			pArray[pArray.length] = "駅から徒歩5分以内";
		}
		// 駐車場無料
		if (elements["carePak"].value == "1") {
			pArray[pArray.length] = "駐車場無料";
		}
		// 禁煙ルーム
		if (elements["careNsmr"].value == "1") {
			pArray[pArray.length] = "禁煙ルーム";
		}
		// 部屋でインターネットOK
		if (elements["careItnr"].value == "1") {
			pArray[pArray.length] = "部屋でインターネットOK";
		}
		// 内湯・大浴場
		if (elements["careBath"].value == "1") {
			pArray[pArray.length] = "内湯・大浴場";
		}
		// 温泉
		if (elements["careOnsen"].value == "1") {
			pArray[pArray.length] = "温泉";
		}
		// 貸切風呂・貸切露天
		if (elements["careBathRent"].value == "1") {
			pArray[pArray.length] = "貸切風呂・貸切露天";
		}
		// 露天風呂付き客室
		if (elements["carePribateBath"].value == "1") {
			pArray[pArray.length] = "露天風呂付き客室";
		}
		// 部屋で夕食
		if (elements["careDinRoom"].value == "1") {
			pArray[pArray.length] = "部屋で夕食";
		}
		// ペットOKの宿
		if (elements["carePet"].value == "1") {
			pArray[pArray.length] = "ペットOKの宿";
		}
		// じゃらんハイクラス掲載の宿
		if (elements["careHighClass"].value == "1") {
			pArray[pArray.length] = "じゃらんハイクラス掲載の宿";
		}
		// ポイント割引OKの宿
		if (elements["carePoint"].value == "1") {
			pArray[pArray.length] = "ポイント割引OKの宿";
		}
		// オンラインカード決済可能なプラン
		if (elements["careCard"].value == "1") {
			pArray[pArray.length] = "オンラインカード決済可能なプラン";
		}
		// カード決済専用プラン
//		if (elements["careCardOnly"].value == "1") {
//			pArray[pArray.length] = "カード決済専用プラン";
//		}
		// 特別室・離れ・スイート
		if (elements["careSweet"].value == "1") {
			pArray[pArray.length] = "特別室・離れ・スイート";
		}
		// バス・トイレ付き
		if (elements["careBt"].value == "1") {
			pArray[pArray.length] = "バス・トイレ付き";
		}
		// エステ設備
		if (elements["careEsthetics"].value == "1") {
			pArray[pArray.length] = "エステ設備";
		}
		// 卓球あり
		if (elements["careTakkyu"].value == "1") {
			pArray[pArray.length] = "卓球あり";
		}
		// 展望風呂
		if (elements["careLookoutBath"].value == "1") {
			pArray[pArray.length] = "展望風呂";
		}
		// サウナ
		if (elements["careSauna"].value == "1") {
			pArray[pArray.length] = "サウナ";
		}
		// ジャグジー
		if (elements["careJacuzzi"].value == "1") {
			pArray[pArray.length] = "ジャグジー";
		}
		// マッサージ
		if (elements["careMassage"].value == "1") {
			pArray[pArray.length] = "マッサージ";
		}
		// 貸しスキー
		if (elements["careSkiRent"].value == "1") {
			pArray[pArray.length] = "貸しスキー";
		}
		// 貸しボード
		if (elements["careBoardRent"].value == "1") {
			pArray[pArray.length] = "貸しボード";
		}
		// 送迎あり
		if (elements["careSogei"].value == "1") {
			pArray[pArray.length] = "送迎あり";
		}
		// 部屋で朝食
		if (elements["careBrkRoom"].value == "1") {
			pArray[pArray.length] = "部屋で朝食";
		}
		// 個室で夕食
		if (elements["careDinPrv"].value == "1") {
			pArray[pArray.length] = "個室で夕食";
		}
		// 個室で朝食
		if (elements["careBrkPrv"].value == "1") {
			pArray[pArray.length] = "個室で朝食";
		}
		// チェックアウト11時以降
		if (elements["careChekout11"].value == "1") {
			pArray[pArray.length] = "チェックアウト11時以降";
		}
		// 露天風呂
		if (elements["careOpenbath"].value == "1") {
			pArray[pArray.length] = "露天風呂";
		}
		// 温泉掛け流し
		if (elements["careKake"].value == "1") {
			pArray[pArray.length] = "温泉掛け流し";
		}
		// にごり湯
		if (elements["careNigori"].value == "1") {
			pArray[pArray.length] = "にごり湯";
		}
	}
	
	var kodawariLable = "";
	this.KODAWARI_DATA = new Array();
	for (var i = 0; i < pArray.length; i++) {
		this.KODAWARI_DATA[i] = pArray[i];
		kodawariLable += "," + pArray[i];
	}
	if (kodawariLable != "") {
		kodawariLable = kodawariLable.substring(1);
		if (kodawariLable.length > 95) {
			kodawariLable = kodawariLable.substring(0, 95) + "…";
		}
	}
	if (pArray.length>0) {
		document.getElementById(this.KODAWARI_TXT_ID).innerHTML = "設定した条件を確認・変更する";
		document.getElementById(this.KODAWARI_TXT_ID2).innerHTML = kodawariLable;
	} else {
		document.getElementById(this.KODAWARI_TXT_ID).innerHTML = "こだわり条件を設定する";
		document.getElementById(this.KODAWARI_TXT_ID2).innerHTML = "";
	}
}

/***********************************
関数名前 ： setKodawariList3
機能概要 ： こだわり条件を上限までラベルで表示
作成日   ： 2010/10/25
************************************/
function setKodawariList3(pArray){
	var kodawariLable = "";
	this.KODAWARI_DATA = new Array();
	for (var i = 0; i < pArray.length; i++) {
		this.KODAWARI_DATA[i] = pArray[i];
		kodawariLable += "," + pArray[i];
	}
	if (kodawariLable != "") {
		kodawariLable = kodawariLable.substring(1);
		if (kodawariLable.length > 95) {
			kodawariLable = kodawariLable.substring(0, 95) + "…";
		}
	}
	if (pArray.length>0) {
		document.getElementById(this.KODAWARI_TXT_ID).innerHTML = "設定した条件を確認・変更する";
		document.getElementById(this.KODAWARI_TXT_ID2).innerHTML = kodawariLable;
	} else {
		document.getElementById(this.KODAWARI_TXT_ID).innerHTML = "こだわり条件を設定する";
		document.getElementById(this.KODAWARI_TXT_ID2).innerHTML = "";
	}

	document.getElementById(this.KODAWARI_INPUT).value = pArray.join(",");

	btnBlink();
}


/***********************************
関数名前 ： closeKodawariList3
機能概要 ： こだわり条件を上限までラベルで表示
作成日   ： 2010/10/25
************************************/
function closeKodawariList3(formName){
	if (opener != null && !opener.closed) {
		clearKodawariValue2(formName);
		var resArr = new Array();
		var inptArr = document.getElementsByTagName("input");
		var chbArr = new Array();
		for(var k=0; k<inptArr.length; k++){
			if(inptArr[k].getAttribute("type")=="checkbox"){
				chbArr[chbArr.length] = inptArr[k];
			}
		}
		var len = chbArr.length;
		for(var i=0; i<len; i++){
			if(chbArr[i].checked){
				var label = chbArr[i].parentNode.getElementsByTagName("label");
				if(label.length>0)
					var tmpHtml = label[0].innerHTML;
					var astPos = tmpHtml.indexOf("※");
					if(astPos>-1){
						tmpHtml = tmpHtml.substring(0, astPos-1);
					}
				resArr[resArr.length] = tmpHtml;
				setKodawariValue2(chbArr[i].id, formName);
			}
		}
		opener.setKodawariList3(resArr);
	}
	window.close();
}
/***********************************
関数名前 ： clearKodawariValue2
機能概要 ： フォーム名の変数渡し対応
作成日   ： 2010/10/25
************************************/
function clearKodawariValue2(formName) {
	with(opener.document.forms[formName]) {
		// 屋外プール
		elements["careOutsidePool"].value = "";
		// ビーチまで徒歩5分
		elements["careBeach5"].value = "";
		// 駅から徒歩5分以内
		elements["careStation5"].value = "";
		// 駐車場無料
		elements["carePak"].value = "";
		// 禁煙ルーム
		elements["careNsmr"].value = "";
		// 部屋でインターネットOK
		elements["careItnr"].value = "";
		// 内湯・大浴場
		elements["careBath"].value = "";
		// 温泉
		elements["careOnsen"].value = "";
		// 貸切風呂・貸切露天
		elements["careBathRent"].value = "";
		// 露天風呂付き客室
		elements["carePribateBath"].value = "";
		// 部屋で夕食
		elements["careDinRoom"].value = "";
		// ペットOKの宿
		elements["carePet"].value = "";
		// じゃらんハイクラス掲載の宿
		elements["careHighClass"].value = "";
		// ポイント割引OKの宿
		elements["carePoint"].value = "";
		// 特別室・離れ・スイート
		elements["careSweet"].value = "";
		// バス・トイレ付き
		elements["careBt"].value = "";
		// エステ設備
		elements["careEsthetics"].value = "";
		// 卓球あり
		elements["careTakkyu"].value = "";
		// 展望風呂
		elements["careLookoutBath"].value = "";
		// サウナ
		elements["careSauna"].value = "";
		// ジャグジー
		elements["careJacuzzi"].value = "";
		// マッサージ
		elements["careMassage"].value = "";
		// 貸しスキー
		elements["careSkiRent"].value = "";
		// 貸しボード
		elements["careBoardRent"].value = "";
		// 送迎あり
		elements["careSogei"].value = "";
		// 部屋で朝食
		elements["careBrkRoom"].value = "";
		// 個室で夕食
		elements["careDinPrv"].value = "";
		// 個室で朝食
		elements["careBrkPrv"].value = "";
		// チェックアウト11時以降
		elements["careChekout11"].value = "";
		// オンラインカード決済可能なプラン
		elements["careCard"].value = "";
		// カード決済専用プラン
//		elements["careCardOnly"].value = "";
		// 露天風呂
		elements["careOpenbath"].value = "";
		// 温泉掛け流し
		elements["careKake"].value = "";
		// にごり湯
		elements["careNigori"].value = "";
	}
}
/***********************************
関数名前 ： setKodawariValue2
機能概要 ： フォーム名の変数渡し対応
作成日   ： 2010/10/25
************************************/
function setKodawariValue2(pKd, formName) {
	
	with(opener.document.forms[formName]) {
		switch (pKd) {
			case "s01":
				// 屋外プール
				elements["careOutsidePool"].value = "1";
				break;
			case "s02":
				// ビーチまで徒歩5分
				elements["careBeach5"].value = "1";
				break;
			case "s03":
				// 駅から徒歩5分以内
				elements["careStation5"].value = "1";
				break;
			case "s04":
				// 駐車場無料
				elements["carePak"].value = "1";
				break;
			case "s05":
				// 禁煙ルーム
				elements["careNsmr"].value = "1";
				break;
			case "s06":
				// 部屋でインターネットOK
				elements["careItnr"].value = "1";
				break;
			case "s07":
				// 内湯・大浴場
				elements["careBath"].value = "1";
				break;
			case "s08":
				// 温泉
				elements["careOnsen"].value = "1";
				break;
			case "s09":
				// 貸切風呂・貸切露天
				elements["careBathRent"].value = "1";
				break;
			case "s10":
				// 露天風呂付き客室
				elements["carePribateBath"].value = "1";
				break;
			case "s11":
				// 部屋で夕食
				elements["careDinRoom"].value = "1";
				break;
			case "s12":
				// ペットOKの宿
				elements["carePet"].value = "1";
				break;
			case "s13":
				// じゃらんハイクラス掲載の宿
				elements["careHighClass"].value = "1";
				break;
			case "s14":
				// ポイント割引OKの宿
				elements["carePoint"].value = "1";
				break;
			case "s15":
				// 特別室・離れ・スイート
				elements["careSweet"].value = "1";
				break;
			case "s16":
				// バス・トイレ付き
				elements["careBt"].value = "1";
				break;
			case "s17":
				// エステ設備
				elements["careEsthetics"].value = "1";
				break;
			case "s18":
				// 卓球あり
				elements["careTakkyu"].value = "1";
				break;
			case "s19":
				// 展望風呂
				elements["careLookoutBath"].value = "1";
				break;
			case "s20":
				// サウナ
				elements["careSauna"].value = "1";
				break;
			case "s21":
				// ジャグジー
				elements["careJacuzzi"].value = "1";
				break;
			case "s22":
				// マッサージ
				elements["careMassage"].value = "1";
				break;
			case "s23":
				// 貸しスキー
				elements["careSkiRent"].value = "1";
				break;
			case "s24":
				// 貸しボード
				elements["careBoardRent"].value = "1";
				break;
			case "s25":
				// 送迎あり
				elements["careSogei"].value = "1";
				break;
			case "s26":
				// 部屋で朝食
				elements["careBrkRoom"].value = "1";
				break;
			case "s27":
				// 個室で夕食
				elements["careDinPrv"].value = "1";
				break;
			case "s28":
				// 個室で朝食
				elements["careBrkPrv"].value = "1";
				break;
			case "s29":
				// チェックアウト11時以降
				elements["careChekout11"].value = "1";
				break;
			case "s30":
				// オンラインカード決済可能なプラン
				elements["careCard"].value = "1";
				break;
			case "s31":
				// カード決済専用プラン
				elements["careCardOnly"].value = "1";
				break;
			case "s32":
				// 露天風呂
				elements["careOpenbath"].value = "1";
				break;
			case "s33":
				// 温泉掛け流し
				elements["careKake"].value = "1";
				break;
			case "s34":
				// にごり湯
				elements["careNigori"].value = "1";
				break;
		}
	}
}

//-->
