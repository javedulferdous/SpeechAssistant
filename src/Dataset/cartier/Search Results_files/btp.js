//Cartier

if(!!~window.location.href.toLowerCase().indexOf('order-confirmation') && document.querySelector('.c-order-confirmation__heading__order-number') && document.querySelector(".c-order-confirm-price__tr__td__price")){
	window.cybOrderData = {
		order_id: document.querySelector('.c-order-confirmation__heading__order-number').innerText.match(/[0-9]+/)[0],
		value: document.querySelector(".c-order-confirm-price__tr__td__price").textContent.match(/[0-9.,]+/)[0].replace(",","")
	}
	createCybbaPixel("//secure.adnxs.com/px?id=1411156&seg=23824199&order_id="+cybOrderData.order_id+"&value="+cybOrderData.value+"&other=[USD]&t=2");
	//createCybbaPixel("//secure.adnxs.com/seg?add=23824199&t=2");
	let cybItemArr = localStorage.getItem('ProdArrCyb') === null ? [] : localStorage.getItem('ProdArrCyb');
	window._vteq = window._vteq || [];
	window._vteq.push({
		confirmation: {
			items: [],
			orderId: cybOrderData.order_id,
			total: cybOrderData.value
		}
	});/*
	try{
		if(typeof productsarr != "undefined"){
			productsarr.forEach(function(element){
				var cybProdCatTemp = element.category;
				if(!!~cybProdCatTemp.indexOf("jewelry")){
					createCybbaPixel("//secure.adnxs.com/seg?add=23824523&t=2");
				}else if(!!~cybProdCatTemp.indexOf("watch")){
					createCybbaPixel("//secure.adnxs.com/seg?add=23824524&t=2");
				}else if(!!~cybProdCatTemp.indexOf("engage")){
					createCybbaPixel("//secure.adnxs.com/seg?add=23824525&t=2");
				}else if(!!~cybProdCatTemp.indexOf("access")){
					createCybbaPixel("//secure.adnxs.com/seg?add=23824528&t=2");
				}else if(!!~cybProdCatTemp.indexOf("fragranc")){
					createCybbaPixel("//secure.adnxs.com/seg?add=23824530&t=2");
				}else if(!!~cybProdCatTemp.indexOf("gift")){
					createCybbaPixel("//secure.adnxs.com/seg?add=23824531&t=2");
				}else if(!!~cybProdCatTemp.indexOf("service")){
					createCybbaPixel("//secure.adnxs.com/seg?add=23824533&t=2");
				}else if(!!~cybProdCatTemp.indexOf("maison")){
					createCybbaPixel("//secure.adnxs.com/seg?add=23824538&t=2");
				}
			});
		}
		var cybConvTotal = Number(document.querySelector(".c-order-confirm-price__tr__td__price").textContent.match(/[0-9.,]+/)[0].replace(",",""));
		if(cybConvTotal <= 1000){
			createCybbaPixel("//secure.adnxs.com/seg?add=23892799&t=2");
		}else if(cybConvTotal > 1000 && cartTotalCyb <= 3000){
			createCybbaPixel("//secure.adnxs.com/seg?add=23892813&t=2");
		}else if(cybConvTotal > 3000 && cartTotalCyb <= 10000){
			createCybbaPixel("//secure.adnxs.com/seg?add=23892814&t=2");
		}else if(cybConvTotal > 10000){
			createCybbaPixel("//secure.adnxs.com/seg?add=23892815&t=2");
		}
	}catch(e){}*/
}

let cybFW = !!~document.cookie.indexOf('cybfwtest') ? "//d2rp1k1dldbai6.cloudfront.net/csp_safe_latest.min.js" : "//d2rp1k1dldbai6.cloudfront.net/cybba_latest.min.js";
try{ var shopUrlCYB = 'cartier.com'
!function(){var tCyb=function(tCyb){var eCyb=document.createElement("script");eCyb.type="text/javascript",eCyb.async=!0,eCyb.src=tCyb;var nCyb=document.getElementsByTagName("script")[0];nCyb.parentNode.insertBefore(eCyb,nCyb)},eCyb=Math.floor(5e4*Math.random());tCyb(cybFW),tCyb("https://files1.cybba.solutions/"+shopUrlCYB+"/loader.min.js?v="+eCyb),window._vteq=window._vteq||[],setTimeout(function(){window._vtsdk||tCyb("https://storage.googleapis.com/cybcdn/"+shopUrlCYB+"/loader.js?v="+eCyb)},1100),setTimeout(function(){"nestedVarDefined"in window&&!nestedVarDefined("_vtsdk.state.eventQueue")&&"_vtsdk"in window&&_vtsdk.init()},3e3)}();
}catch(e){}

!!~window.location.href.indexOf('/shopping-bag.html') && waitForElementCYB()

function waitForElementCYB(){
	if(typeof versaTag !== "undefined" ){
		window.cartArrayCyb = [];
		window.cybSkues = versaTag.activityParams.productid.split(',');
		cybSkues.forEach(cybProdParse);
		localStorage.setItem('ProdArrCyb',JSON.stringify(cartArrayCyb));
	}else{
		setTimeout(waitForElementCYB, 250);
	}
}
function cybProdParse(item,index){
	cartArrayCyb.push({id:cybSkues[index].toLowerCase()});
}

if(!!~window.location.href.toLowerCase().indexOf('shopping-bag')){
	createCybbaPixel("//secure.adnxs.com/seg?add=23824191&t=2");
	var cybTotalInt = setInterval(cybTotalChk,1000);
	function cybTotalChk(){
		if(document.querySelector(".cart-summary__sub-total-row--semibold .cart-summary__sub-total-value")){
			clearInterval(cybTotalInt);
			var cartTotalCyb = Number(document.querySelector(".cart-summary__sub-total-row--semibold .cart-summary__sub-total-value").textContent.match(/[0-9.,]+/)[0].replace(",",""));
			if(cartTotalCyb <= 1000){
				createCybbaPixel("//secure.adnxs.com/seg?add=23824507&t=2");
			}else if(cartTotalCyb > 1000 && cartTotalCyb <= 3000){
				createCybbaPixel("//secure.adnxs.com/seg?add=23824509&t=2");
			}else if(cartTotalCyb > 3000 && cartTotalCyb <= 10000){
				createCybbaPixel("//secure.adnxs.com/seg?add=23824510&t=2");
			}else if(cartTotalCyb > 10000){
				createCybbaPixel("//secure.adnxs.com/seg?add=23824512&t=2");
			}
		}
	}
}else if(!!~window.location.href.toLowerCase().indexOf('billing-form')){
	createCybbaPixel("//secure.adnxs.com/seg?add=23824192&t=2");
}else if(document.querySelector(".c-pdp")){
	var cybSegment = "23824189";
	try{
		var cybProdCat = document.querySelector("#content .breadcrumb").textContent.toLowerCase();
		!!~cybProdCat.indexOf("jewelry")?cybSegment+=",23824240":!!~cybProdCat.indexOf("watch")?cybSegment+=",23824259":!!~cybProdCat.indexOf("engage")?cybSegment+=",23824267":!!~cybProdCat.indexOf("access")?cybSegment+=",23824278":!!~cybProdCat.indexOf("fragranc")?cybSegment+=",23824287":!!~cybProdCat.indexOf("gift")?cybSegment+=",23824304":!!~cybProdCat.indexOf("service")?cybSegment+=",23824315":!!~cybProdCat.indexOf("maison")?cybSegment+=",23824332":""
	}catch(e){}
	createCybbaPixel("//secure.adnxs.com/seg?add="+cybSegment+"&t=2");
}
if(document.querySelector(".c-breadcrumb__list-item.active span")){
	var cybCategory = document.querySelector(".c-breadcrumb__list-item.active span").textContent.toLowerCase();
	if(!!~cybCategory.indexOf("love")){
		createCybbaPixel("//secure.adnxs.com/seg?add=23824363&t=2");
	}else if(!!~cybCategory.indexOf("just")){
		createCybbaPixel("//secure.adnxs.com/seg?add=23824378&t=2");
	}else if(!!~cybCategory.indexOf("clash")){
		createCybbaPixel("//secure.adnxs.com/seg?add=23824393&t=2");
	}else if(!!~cybCategory.indexOf("pasha")){
		createCybbaPixel("//secure.adnxs.com/seg?add=23824407&t=2");
	}else if(!!~cybCategory.indexOf("ballon")){
		createCybbaPixel("//secure.adnxs.com/seg?add=23824435&t=2");
	}else if(!!~cybCategory.indexOf("panth")){
		createCybbaPixel("//secure.adnxs.com/seg?add=23824456&t=2");
	}
}
if(!!~window.location.href.toLowerCase().indexOf('collections/gifts')){
	createCybbaPixel("//secure.adnxs.com/seg?add=24646053&t=2");
}
if(document.querySelector(".c-myaccount__info.js-myaccount-flag.logged-user")){
	createCybbaPixel("//secure.adnxs.com/seg?add=23824513&t=2");
}
createCybbaPixel("//secure.adnxs.com/seg?add=23824188&t=2");

function createCybbaPixel(src){
	var input = document.createElement('img');
	input.setAttribute('src',src);
	input.setAttribute('width', 0);
	input.setAttribute('height', 0);
	input.setAttribute('alt', "");
	input.setAttribute('style', "display:none !important;");
	document.body.appendChild(input); 
}