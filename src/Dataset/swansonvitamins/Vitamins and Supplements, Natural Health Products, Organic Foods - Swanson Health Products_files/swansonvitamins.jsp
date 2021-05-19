Array.prototype.filter||(Array.prototype.filter=function(t,e){"use strict";if("Function"!=typeof t&&"function"!=typeof t||!this)throw new TypeError;var r=this.length>>>0,n=new Array(r),o=this,l=0,i=-1;if(void 0===e)for(;++i!==r;)i in this&&t(o[i],i,o)&&(n[l++]=o[i]);else for(;++i!==r;)i in this&&t.call(e,o[i],i,o)&&(n[l++]=o[i]);return n.length=l,n}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var e,r;if(null===this||void 0===this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(e=arguments[1]),r=0;r<o;){var l;r in n&&(l=n[r],t.call(e,l,r,n)),r++}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){var r;if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return-1;var l=0|e;if(l>=o)return-1;for(r=Math.max(l>=0?l:o-Math.abs(l),0);r<o;){if(r in n&&n[r]===t)return r;r++}return-1}),document.getElementsByClassName||(document.getElementsByClassName=function(t){var e,r,n,o=document,l=[];if(o.querySelectorAll)return o.querySelectorAll("."+t);if(o.evaluate)for(r=".//*[contains(concat(' ', @class, ' '), ' "+t+" ')]",e=o.evaluate(r,o,null,0,null);n=e.iterateNext();)l.push(n);else for(e=o.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+t+"(\\s|$)"),n=0;n<e.length;n++)r.test(e[n].className)&&l.push(e[n]);return l}),document.querySelectorAll||(document.querySelectorAll=function(t){var e,r=document.createElement("style"),n=[];for(document.documentElement.firstChild.appendChild(r),document._qsa=[],r.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),r.parentNode.removeChild(r);document._qsa.length;)(e=document._qsa.shift()).style.removeAttribute("x-qsa"),n.push(e);return document._qsa=null,n}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null}),Object.keys||(Object.keys=function(){"use strict";var t=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=r.length;return function(o){if("function"!=typeof o&&("object"!=typeof o||null===o))throw new TypeError("Object.keys called on non-object");var l,i,s=[];for(l in o)t.call(o,l)&&s.push(l);if(e)for(i=0;i<n;i++)t.call(o,r[i])&&s.push(r[i]);return s}}()),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),window.hasOwnProperty=window.hasOwnProperty||Object.prototype.hasOwnProperty;
if (typeof usi_commons === 'undefined') {
	usi_commons = {
		
		debug:location.href.indexOf("usidebug") != -1,
		
		log:function(msg) {
			if (this.debug) {
				if (msg instanceof Error) {
					console.log(msg.name + ': ' + msg.message);
				} else {
					console.log.apply(console, arguments);
				}
			}
		},
		log_error: function(msg) {
			if (this.debug) {
				if (msg instanceof Error) {
					console.log('%c USI Error:', usi_commons.log_styles.error, msg.name + ': ' + msg.message);
				} else {
					console.log('%c USI Error:', usi_commons.log_styles.error, msg);
				}
			}
		},
		log_success: function(msg) {
			if (this.debug) {
				console.log('%c USI Success:', usi_commons.log_styles.success, msg);
			}
		},
		dir:function(obj) {
			if (this.debug) {
				console.dir(obj);
			}
		},
		log_styles: {
			error: 'color: red; font-weight: bold;',
			success: 'color: green; font-weight: bold;'
		},
		domain: "https://www.upsellit.com",
		cdn: "https://upsellit-14516.kxcdn.com",
		is_mobile: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()),
		device: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()) ? 'mobile' : 'desktop',
		gup:function(name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regexS = "[\\?&]" + name + "=([^&#\\?]*)";
			var regex = new RegExp(regexS);
			var results = regex.exec(window.location.href);
			if (results == null) return "";
			else return results[1];
		},
		load_script:function(source, callback) {
			if (source.indexOf("//www.upsellit.com") == 0) source = "https:"+source; //upgrade non-secure requests
			var docHead = document.getElementsByTagName("head")[0];
			if (top.location != location) docHead = parent.document.getElementsByTagName("head")[0];
			var newScript = document.createElement('script');
			newScript.type = 'text/javascript';
			newScript.src = source;
			if (typeof callback == "function") newScript.onload = callback;
			docHead.appendChild(newScript);
		},
		load_display:function(usiQS, usiSiteID, usiKey, callback) {
			usiKey = usiKey || "";
			var source = this.domain + "/launch.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&keys=" + usiKey;
			this.load_script(source, callback);
		},
		load_facebook:function(usiQS, usiSiteID, usiKey) {
		},
		load_view:function(usiHash, usiSiteID, usiKey, callback) {
			if (typeof(usi_force) != "undefined" || location.href.indexOf("usi_force") != -1 || (usi_cookies.get("usi_sale") == null && usi_cookies.get("usi_launched") == null && usi_cookies.get("usi_launched"+usiSiteID) == null)) {
				usiKey = usiKey || "";
				var usi_append = "";
				if (this.gup("usi_force_date") != "") usi_append = "&usi_force_date=" + this.gup("usi_force_date");
				else if (typeof usi_cookies !== 'undefined' && usi_cookies.get("usi_force_date") != null) usi_append = "&usi_force_date=" + usi_cookies.get("usi_force_date");
				if (typeof usi_cookies !== 'undefined' && usi_cookies.get("usi_id_cache") != null) usi_append += "&usi_id_cache=" + usi_cookies.get("usi_id_cache");
				if (this.debug) usi_append += "&usi_referrer="+encodeURIComponent(location.href);
				var source = this.domain + "/view.jsp?hash=" + usiHash + "&siteID=" + usiSiteID + "&keys=" + usiKey + usi_append;
				if (typeof(this.last_view) !== "undefined" && this.last_view == usiSiteID+"_"+usiKey) return;
				this.last_view = usiSiteID+"_"+usiKey;
				if (typeof usi_js !== 'undefined' && typeof usi_js.cleanup === 'function') usi_js.cleanup();
				this.load_script(source, callback);
			}
		},
		load_precapture:function(usiQS, usiSiteID, callback) {
			var source = this.domain + "/hound/monitor.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&domain=" + encodeURIComponent(this.domain);
			this.load_script(source, callback);
		},
		load_mail:function(qs, siteID, callback) {
			var source = this.domain + "/mail.jsp?qs=" + qs + "&siteID=" + siteID + "&domain=" + encodeURIComponent(this.domain);
			this.load_script(source, callback);
		},
		send_prod_rec:function(siteID, info, real_time) {
			var result = false;
			try {
				var data = [siteID, info.name, info.link, info.pid, info.price, info.image];
				if (data.indexOf(undefined) == -1) {
					var queryString = [siteID, info.name.replace(/\|/g, "&#124;"), info.link, info.pid, info.price, info.image].join("|");
					if (info.extra) queryString += "|" + info.extra;
					var filetype = real_time ? "jsp" : "js";
					this.load_script(this.domain + "/active/pv2." + filetype + "?" + encodeURIComponent(queryString));
					result = true;
				}
			} catch (e) {
				this.report_error(e);
				result = false;
			}
			return result;
		},
		report_error:function(err) {
			if (err == null) return;
			if (typeof err === 'string') err = new Error(err);
			if (!(err instanceof Error)) return;
			if (typeof(usi_commons.error_reported) !== "undefined") {
			    return;
            }
            usi_commons.error_reported = true;
			if (location.href.indexOf('usishowerrors') !== -1) throw err;
			else usi_commons.load_script(usi_commons.domain + '/err.jsp?oops=' + encodeURIComponent(err.message) + '-' + encodeURIComponent(err.stack));
			usi_commons.log_error(err.message);
			usi_commons.dir(err);
		},
		gup_or_get_cookie: function(name, expireSeconds, forceCookie) {
			if (typeof usi_cookies === 'undefined') {
				usi_commons.log_error('usi_cookies is not defined');
				return;
			}
			expireSeconds = (expireSeconds || usi_cookies.expire_time.day);
			if (name == "usi_enable") expireSeconds = usi_cookies.expire_time.hour;
			var value = null;
			var qsValue = usi_commons.gup(name);
			if (qsValue !== '') {
				value = qsValue;
				usi_cookies.set(name, value, expireSeconds, forceCookie);
			} else {
				value = usi_cookies.get(name);
			}
			return (value || '');
		}
	};
}
if (window.usi_app === undefined) {
	try {
		if("undefined"==typeof usi_cookies&&(usi_cookies={expire_time:{minute:60,hour:3600,two_hours:7200,four_hours:14400,day:86400,week:604800,two_weeks:1209600,month:2592e3,year:31536e3,never:31536e4},max_cookies_count:15,max_cookie_length:1e3,update_window_name:function(e,o,i){try{var n=-1;if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n=t.getTime()}var r=window.top||window,s=0;null!=o&&-1!=o.indexOf("=")&&(o=o.replace(new RegExp("=","g"),"USIEQLS")),null!=o&&-1!=o.indexOf(";")&&(o=o.replace(new RegExp(";","g"),"USIPRNS"));for(var u=r.name.split(";"),c="",a=0;a<u.length;a++){var l=u[a].split("=");3==l.length?(l[0]==e&&(l[1]=o,l[2]=n,s=1),null!=l[1]&&"null"!=l[1]&&(c+=l[0]+"="+l[1]+"="+l[2]+";")):""!=u[a]&&(c+=u[a]+";")}0==s&&(c+=e+"="+o+"="+n+";"),r.name=c}catch(e){}},flush_window_name:function(e){try{for(var o=window.top||window,i=o.name.split(";"),n="",t=0;t<i.length;t++){var r=i[t].split("=");3==r.length&&(0==r[0].indexOf(e)||(n+=i[t]+";"))}o.name=n}catch(e){}},get_from_window_name:function(e){try{for(var o=(window.top||window).name.split(";"),i=0;i<o.length;i++){var n=o[i].split("=");if(3==n.length){if(n[0]==e)if(-1!=(t=n[1]).indexOf("USIEQLS")&&(t=t.replace(new RegExp("USIEQLS","g"),"=")),-1!=t.indexOf("USIPRNS")&&(t=t.replace(new RegExp("USIPRNS","g"),";")),!("-1"!=n[2]&&usi_cookies.datediff(n[2])<0))return"undefined"==typeof usi_cookieless&&usi_cookies.create_cookie(n[0],t,usi_cookies.datediff(n[2])/1e3),usi_results=[t,n[2]],usi_results}else if(2==n.length){var t;if(n[0]==e)return-1!=(t=n[1]).indexOf("USIEQLS")&&(t=t.replace(new RegExp("USIEQLS","g"),"=")),-1!=t.indexOf("USIPRNS")&&(t=t.replace(new RegExp("USIPRNS","g"),";")),usi_results=[t,(new Date).getTime()+6048e5],usi_results}}}catch(e){}return null},datediff:function(e){return e-(new Date).getTime()},count_cookies:function(e){return e=e||"usi_",usi_cookies.search_cookies(e).length},root_domain:function(){try{var e=document.domain.split("."),o=e[e.length-1];if("com"==o||"net"==o||"org"==o||"us"==o||"co"==o||"ca"==o)return e[e.length-2]+"."+e[e.length-1]}catch(e){}return document.domain},create_cookie:function(e,o,i){if(!1!==navigator.cookieEnabled){var n="";if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n="; expires="+t.toGMTString()}var r="samesite=none;";0==location.href.indexOf("https://")&&(r+="secure;");var s=usi_cookies.root_domain();"undefined"!=typeof usi_parent_domain&&-1!=document.domain.indexOf(usi_parent_domain)&&(s=usi_parent_domain),document.cookie=e+"="+encodeURIComponent(o)+n+"; path=/;domain="+s+"; "+r}},read_cookie:function(e){if(!1===navigator.cookieEnabled)return null;for(var o=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var t=i[n];" "==t.charAt(0);)t=t.substring(1,t.length);if(0==t.indexOf(o))return decodeURIComponent(t.substring(o.length,t.length))}return null},del:function(e){usi_cookies.set(e,null,-100)},get:function(e){var o=null,i=usi_cookies.get_from_window_name(e);if(null!=i&&i.length>1)try{o=decodeURIComponent(i[0])}catch(e){return i[0]}else o=usi_cookies.read_cookie(e);return null==o?null:o},get_json:function(e){var o=null,i=usi_cookies.get(e);if(null==i)return null;try{o=JSON.parse(i)}catch(e){i=i.replace(/\\"/g,'"');try{o=JSON.parse(JSON.parse(i))}catch(e){try{o=JSON.parse(i)}catch(e){}}}return o},search_cookies:function(e){e=e||"";var o=[];return document.cookie.split(";").forEach(function(i){var n=i.split("=")[0].trim();""!==e&&0!==n.indexOf(e)||o.push(n)}),o},set:function(e,o,i,n){"undefined"!=typeof usi_nevercookie&&(n=!1),void 0===i&&(i=-1);try{o=o.replace(/(\r\n|\n|\r)/gm,"")}catch(e){}if("undefined"==typeof usi_windownameless&&usi_cookies.update_window_name(e+"",o+"",i),"undefined"==typeof usi_cookieless||n||null==o){if(null!=o){if(null==usi_cookies.read_cookie(e))if(!n)if(usi_cookies.search_cookies("usi_").length+1>usi_cookies.max_cookies_count)return void usi_cookies.report_error('Set cookie "'+e+'" failed. Max cookies count is '+usi_cookies.max_cookies_count);o.length>usi_cookies.max_cookie_length&&(usi_cookies.report_error('Cookie "'+e+'" truncated ('+o.length+"). Max single-cookie length is "+usi_cookies.max_cookie_length),o=o.substring(0,usi_cookies.max_cookie_length-1))}usi_cookies.create_cookie(e,o,i)}},set_json:function(e,o,i,n){var t=JSON.stringify(o).replace(/^"/,"").replace(/"$/,"");usi_cookies.set(e,t,i,n)},flush:function(e){e=e||"usi_";var o,i,n,t=document.cookie.split(";");for(o=0;o<t.length;o++)0==(i=t[o]).trim().toLowerCase().indexOf(e)&&(n=i.trim().split("=")[0],usi_cookies.del(n));usi_cookies.flush_window_name(e)},print:function(){for(var e=document.cookie.split(";"),o="",i=0;i<e.length;i++){var n=e[i];0==n.trim().toLowerCase().indexOf("usi_")&&(console.log(n.trim()+" (cookie)"),o+=","+n.trim().toLowerCase().split("=")[0]+",")}var t=(window.top||window).name.split(";");for(i=0;i<t.length;i++){var r=t[i].split("=");if(3==r.length&&0==r[0].indexOf("usi_")&&-1==o.indexOf(","+r[0]+",")){var s=r[1];-1!=s.indexOf("USIEQLS")&&(s=s.replace(new RegExp("USIEQLS","g"),"=")),-1!=s.indexOf("USIPRNS")&&(s=s.replace(new RegExp("USIPRNS","g"),";")),console.log(r[0]+"="+s+" (window.name)")}}},value_exists:function(){var e,o;for(e=0;e<arguments.length;e++)if(""===(o=usi_cookies.get(arguments[e]))||null===o||"null"===o||"undefined"===o)return!1;return!0},report_error:function(e){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(e)}},"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.gup))try{""!=usi_commons.gup("usi_email_id")&&usi_cookies.set("usi_email_id",usi_commons.gup("usi_email_id").split(".")[0],Number(usi_commons.gup("usi_email_id").split(".")[1]),!0)}catch(e){usi_commons.report_error(e)}
"undefined"==typeof usi_dom&&(usi_dom={},usi_dom.get_elements=function(e,t){return t=t||document,Array.prototype.slice.call(t.querySelectorAll(e))},usi_dom.count_elements=function(e,t){return t=t||document,usi_dom.get_elements(e,t).length},usi_dom.get_nth_element=function(e,t,n){var o=null;n=n||document;var r=usi_dom.get_elements(t,n);return r.length>=e&&(o=r[e-1]),o},usi_dom.get_first_element=function(e,t){if(""===(e||""))return null;if(t=t||document,"[object Array]"===Object.prototype.toString.call(e)){for(var n=null,o=0;o<e.length;o++){var r=e[o];if(null!=(n=usi_dom.get_first_element(r,t)))break}return n}return t.querySelector(e)},usi_dom.get_element_text_no_children=function(e,t){var n="";if(null==t&&(t=!1),null!=(e=e||document)&&null!=e.childNodes)for(var o=0;o<e.childNodes.length;++o)3===e.childNodes[o].nodeType&&(n+=e.childNodes[o].textContent);return!0===t&&(n=usi_dom.clean_string(n)),n.trim()},usi_dom.clean_string=function(e){if("string"==typeof e){return(e=(e=(e=(e=(e=(e=(e=e.replace(/[\u2010-\u2015\u2043]/g,"-")).replace(/[\u2018-\u201B]/g,"'")).replace(/[\u201C-\u201F]/g,'"')).replace(/\u2024/g,".")).replace(/\u2025/g,"..")).replace(/\u2026/g,"...")).replace(/\u2044/g,"/")).replace(/[^\x20-\xFF\u0100-\u017F\u0180-\u024F\u20A0-\u20CF]/g,"").trim()}},usi_dom.encode=function(e){if("string"==typeof e){var t=encodeURIComponent(e);return t=t.replace(/[-_.!~*'()]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},usi_dom.get_closest=function(e,t){for(e=e||document,"function"!=typeof Element.prototype.matches&&(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});null!=e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},usi_dom.get_classes=function(e){var t=[];return null!=e&&null!=e.classList&&(t=Array.prototype.slice.call(e.classList)),t},usi_dom.add_class=function(e,t){if(null!=e){var n=usi_dom.get_classes(e);-1===n.indexOf(t)&&(n.push(t),e.className=n.join(" "))}},usi_dom.string_to_decimal=function(e){var t=null;if("string"==typeof e)try{var n=parseFloat(e.replace(/[^0-9\.-]+/g,""));!1===isNaN(n)&&(t=n)}catch(e){usi_commons.log("Error: "+e.message)}return t},usi_dom.string_to_integer=function(e){var t=null;if("string"==typeof e)try{var n=parseInt(e.replace(/[^0-9-]+/g,""));!1===isNaN(n)&&(t=n)}catch(e){usi_commons.log("Error: "+e.message)}return t},usi_dom.get_currency_string_from_content=function(e){if("string"!=typeof e)return"";try{e=e.trim();var t=e.match(/^([^\$]*?)(\$(?:[\,\,]?\d{1,3})+(?:\.\d{2})?)(.*?)$/)||[];return 4===t.length?t[2]:""}catch(e){return usi_commons.log("Error: "+e.message),""}},usi_dom.get_absolute_url=function(){var e;return function(t){return(e=e||document.createElement("a")).href=t,e.href}}(),usi_dom.format_number=function(e,t){var n="";if("number"==typeof e){t=t||0;var o=e.toFixed(t).split(/\./g);if(1==o.length||2==o.length)n=o[0].replace(/./g,function(e,t,n){return t&&"."!==e&&(n.length-t)%3==0?","+e:e}),2==o.length&&(n+="."+o[1])}return n},usi_dom.format_currency=function(e,t,n){var o="";return e=Number(e),!1===isNaN(e)&&("object"==typeof Intl&&"function"==typeof Intl.NumberFormat?(t=t||"en-US",n=n||{style:"currency",currency:"USD"},o=e.toLocaleString(t,n)):o=e),o},usi_dom.to_decimal_places=function(e,t){if(null!=e&&"number"==typeof e&&null!=t&&"number"==typeof t){if(0==t)return parseFloat(Math.round(e));for(var n=10,o=1;o<t;o++)n*=10;return parseFloat(Math.round(e*n)/n)}return null},usi_dom.trim_string=function(e,t,n){return n=n||"",(e=e||"").length>t&&(e=e.substring(0,t),""!==n&&(e+=n)),e},usi_dom.attach_event=function(e,t,n){var o=usi_dom.find_supported_element(e,n);usi_dom.detach_event(e,t,o),o.addEventListener?o.addEventListener(e,t,!1):o.attachEvent("on"+e,t)},usi_dom.detach_event=function(e,t,n){var o=usi_dom.find_supported_element(e,n);o.removeEventListener?o.removeEventListener(e,t,!1):o.detachEvent("on"+e,t)},usi_dom.find_supported_element=function(e,t){return(t=t||document)===window?window:!0===usi_dom.is_event_supported(e,t)?t:t===document?window:usi_dom.find_supported_element(e,document)},usi_dom.is_event_supported=function(e,t){return null!=t&&void 0!==t["on"+e]},usi_dom.is_defined=function(e,t){if(null==e)return!1;if(""===(t||""))return!1;var n=!0,o=e;return t.split(".").forEach(function(e){!0===n&&(null==o||"object"!=typeof o||!1===o.hasOwnProperty(e)?n=!1:o=o[e])}),n},usi_dom.observe=function(e,t,n){var o=location.href,r=window.MutationObserver||window.WebkitMutationObserver;return t=t||{onUrlUpdate:!1,observerOptions:{childList:!0,subtree:!0}},function(e,n){var i=null,u=function(){var e=location.href;t.onUrlUpdate&&e!==o?(n(),o=e):n()};return r?(i=new r(function(e){var r=location.href,i=e[0].addedNodes.length||e[0].removedNodes.length;i&&t.onUrlUpdate&&r!==o?(n(),o=r):i&&n()})).observe(e,t.observerOptions):window.addEventListener&&(e.addEventListener("DOMNodeInserted",u,!1),e.addEventListener("DOMNodeRemoved",u,!1)),i}}(),usi_dom.params_to_object=function(e){var t={};""!=(e||"")&&e.split("&").forEach(function(e){var n=e.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):1===n.length&&(t[decodeURIComponent(n[0])]=null)});return t},usi_dom.object_to_params=function(e){var t=[];if(null!=e)for(var n in e)!0===e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+(null==e[n]?"":encodeURIComponent(e[n])));return t.join("&")},usi_dom.interval_with_timeout=function(e,t,n,o){if("function"!=typeof e)throw new Error("usi_dom.interval_with_timeout(): iterationFunction must be a function");if(null==t)t=function(e){return e};else if("function"!=typeof t)throw new Error("usi_dom.interval_with_timeout(): timeoutCallback must be a function");if(null==n)n=function(e){return e};else if("function"!=typeof n)throw new Error("usi_dom.interval_with_timeout(): completeCallback must be a function");var r=(o=o||{}).intervalMS||20,i=o.timeoutMS||2e3;if("number"!=typeof r)throw new Error("usi_dom.interval_with_timeout(): intervalMS must be a number");if("number"!=typeof i)throw new Error("usi_dom.interval_with_timeout(): timeoutMS must be a number");var u=!1,l=new Date,a=setInterval(function(){var o=new Date-l;if(o>=i)return clearInterval(a),t({elapsedMS:o});!1===u&&(u=!0,e(function(e,t){if(u=!1,!0===e)return clearInterval(a),(t=t||{}).elapsedMS=new Date-l,n(t)}))},r)},usi_dom.load_external_stylesheet=function(e,t,n){if(""!==(e||"")){""===(t||"")&&(t="usi_stylesheet_"+(new Date).getTime());var o={url:e,id:t},r=document.getElementsByTagName("head")[0];if(null!=r){var i=document.createElement("link");i.type="text/css",i.rel="stylesheet",i.id=o.id,i.href=e,usi_dom.attach_event("load",function(){if(null!=n)return n(null,o)},i),r.appendChild(i)}}else if(null!=n)return n(null,o)},usi_dom.ready=function(e){void 0!==document.readyState&&"complete"===document.readyState?e():window.addEventListener?window.addEventListener("load",e,!0):window.attachEvent?window.attachEvent("onload",e):setTimeout(e,5e3)},usi_dom.fit_text=function(e,t){t||(t={});var n={multiLine:!0,minFontSize:.1,maxFontSize:20,widthOnly:!1},o={};for(var r in n)t.hasOwnProperty(r)?o[r]=t[r]:o[r]=n[r];var i=Object.prototype.toString.call(e);function u(e,t){var n,o,r,i,u,l,a,s;r=e.innerHTML,u=parseInt(window.getComputedStyle(e,null).getPropertyValue("font-size"),10),i=function(e){var t=window.getComputedStyle(e,null);return(e.clientWidth-parseInt(t.getPropertyValue("padding-left"),10)-parseInt(t.getPropertyValue("padding-right"),10))/u}(e),o=function(e){var t=window.getComputedStyle(e,null);return(e.clientHeight-parseInt(t.getPropertyValue("padding-top"),10)-parseInt(t.getPropertyValue("padding-bottom"),10))/u}(e),i&&(t.widthOnly||o)||(t.widthOnly?usi_commons.log("Set a static width on the target element "+e.outerHTML):usi_commons.log("Set a static height and width on the target element "+e.outerHTML)),-1===r.indexOf("textFitted")?((n=document.createElement("span")).className="textFitted",n.style.display="inline-block",n.innerHTML=r,e.innerHTML="",e.appendChild(n)):n=e.querySelector("span.textFitted"),t.multiLine||(e.style["white-space"]="nowrap"),l=t.minFontSize,s=t.maxFontSize;for(var c=l,d=1e3;l<=s&&d>0;)d--,a=s+l-.1,n.style.fontSize=a+"em",n.scrollWidth/u<=i&&(t.widthOnly||n.scrollHeight/u<=o)?(c=a,l=a+.1):s=a-.1;n.style.fontSize!==c+"em"&&(n.style.fontSize=c+"em")}"[object Array]"!==i&&"[object NodeList]"!==i&&"[object HTMLCollection]"!==i&&(e=[e]);for(var l=0;l<e.length;l++)u(e[l],o)});
"undefined"==typeof usi_date&&(usi_date={},usi_date.PSTOffsetMinutes=480,usi_date.localOffsetMinutes=(new Date).getTimezoneOffset(),usi_date.offsetDeltaMinutes=usi_date.localOffsetMinutes-usi_date.PSTOffsetMinutes,usi_date.toPST=function(e){return!1===usi_date.is_date(e)?e:new Date(e.getTime()+60*usi_date.offsetDeltaMinutes*1e3)},usi_date.add_hours=function(e,t){return!1===usi_date.is_date(e)?e:new Date(e.getTime()+60*t*60*1e3)},usi_date.add_minutes=function(e,t){return!1===usi_date.is_date(e)?e:new Date(e.getTime()+60*t*1e3)},usi_date.add_seconds=function(e,t){return!1===usi_date.is_date(e)?e:new Date(e.getTime()+1e3*t)},usi_date.get_week_number=function(e){var t={year:-1,weekNumber:-1};try{if(usi_date.is_date(e)){var a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()));a.setUTCDate(a.getUTCDate()+4-(a.getUTCDay()||7));var s=new Date(Date.UTC(a.getUTCFullYear(),0,1)),i=Math.ceil(((a-s)/864e5+1)/7);t.year=a.getUTCFullYear(),t.weekNumber=i}}catch(e){}finally{return t}},usi_date.is_date=function(e){return null!=e&&"object"==typeof e&&e instanceof Date==!0&&!1===isNaN(e.getTime())},usi_date.is_date_within_range=function(e,t,a){if(void 0===e&&(e=usi_date.set_date()),!1===usi_date.is_date(e))return!1;var s=usi_date.string_to_date(t,!1),i=usi_date.string_to_date(a,!1),r=usi_date.toPST(e);return r>=s&&r<i},usi_date.is_after=function(e){try{var t=usi_date.set_date(),a=new Date(e);return t.getTime()>a.getTime()}catch(e){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(e)}return!1},usi_date.is_before=function(e){try{var t=usi_date.set_date(),a=new Date(e);return t.getTime()<a.getTime()}catch(e){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(e)}return!1},usi_date.is_between=function(e,t){return usi_date.is_after(e)&&usi_date.is_before(t)},usi_date.is_date_after=function(e,t){if(!1===usi_date.is_date(e))return!1;var a=usi_date.string_to_date(t,!1);return usi_date.toPST(e)>a},usi_date.is_date_before=function(e,t){if(!1===usi_date.is_date(e))return!1;var a=usi_date.string_to_date(t,!1);return usi_date.toPST(e)<a},usi_date.string_to_date=function(e,t){t=t||!1;var a=null,s=/^[0-2]?[0-9]\/[0-3]?[0-9]\/\d{4}(\s[0-2]?[0-9]\:[0-5]?[0-9](?:\:[0-5]?[0-9])?)?$/.exec(e),i=/^(\d{4}\-[0-2]?[0-9]\-[0-3]?[0-9])(\s[0-2]?[0-9]\:[0-5]?[0-9](?:\:[0-5]?[0-9])?)?$/.exec(e);if(2===(s||[]).length){if(a=new Date(e),""===(s[1]||"")&&!0===t){var r=new Date;a=usi_date.add_hours(a,r.getHours()),a=usi_date.add_minutes(a,r.getMinutes()),a=usi_date.add_seconds(a,r.getSeconds())}}else if(3===(i||[]).length){var u=i[1].split(/\-/g),o=u[1]+"/"+u[2]+"/"+u[0];return o+=i[2]||"",usi_date.string_to_date(o,t)}return a},usi_date.set_date=function(){var e=new Date,t=usi_commons.gup("usi_force_date");if(""!==t){t=decodeURIComponent(t);var a=usi_date.string_to_date(t,!0);null!=a?(e=a,usi_cookies.set("usi_force_date",t,usi_cookies.expire_time.hour),usi_commons.log("Date forced to: "+e)):usi_cookies.del("usi_force_date")}else e=null!=usi_cookies.get("usi_force_date")?usi_date.string_to_date(usi_cookies.get("usi_force_date"),!0):new Date;return e},usi_date.diff=function(e,t,a,s){null==s&&(s=1),""!=(a||"")&&(a=usi_date.get_units(a));var i=null;if(!0===usi_date.is_date(t)&&!0===usi_date.is_date(e))try{var r=Math.abs(t-e);switch(a){case"ms":i=r;break;case"seconds":i=usi_dom.to_decimal_places(parseFloat(r)/parseFloat(1e3),s);break;case"minutes":i=usi_dom.to_decimal_places(parseFloat(r)/parseFloat(1e3)/parseFloat(60),s);break;case"hours":i=usi_dom.to_decimal_places(parseFloat(r)/parseFloat(1e3)/parseFloat(60)/parseFloat(60),s);break;case"days":i=usi_dom.to_decimal_places(parseFloat(r)/parseFloat(1e3)/parseFloat(60)/parseFloat(60)/parseFloat(24),s)}}catch(e){i=null}return i},usi_date.convert_units=function(e,t,a,s){var i=null,r=null;switch(usi_date.get_units(t)){case"days":i=1e6*e*1e3*60*60*24;break;case"hours":i=1e6*e*1e3*60*60;break;case"minutes":i=1e6*e*1e3*60;break;case"seconds":i=1e6*e*1e3;break;case"ms":i=1e6*e}switch(usi_date.get_units(a)){case"days":r=usi_dom.to_decimal_places(parseFloat(i)/parseFloat(1e6)/parseFloat(1e3)/parseFloat(60)/parseFloat(60)/parseFloat(24),s);break;case"hours":r=usi_dom.to_decimal_places(parseFloat(i)/parseFloat(1e6)/parseFloat(1e3)/parseFloat(60)/parseFloat(60),s);break;case"minutes":r=usi_dom.to_decimal_places(parseFloat(i)/parseFloat(1e6)/parseFloat(1e3)/parseFloat(60),s);break;case"seconds":r=usi_dom.to_decimal_places(parseFloat(i)/parseFloat(1e6)/parseFloat(1e3),s);break;case"ms":r=usi_dom.to_decimal_places(parseFloat(i)/parseFloat(1e6),s)}return r},usi_date.get_units=function(e){var t="";switch(e.toLowerCase()){case"days":case"day":case"d":t="days";break;case"hours":case"hour":case"hrs":case"hr":case"h":t="hours";break;case"minutes":case"minute":case"mins":case"min":case"m":t="minutes";break;case"seconds":case"second":case"secs":case"sec":case"s":t="seconds";break;case"ms":case"milliseconds":case"millisecond":case"millis":case"milli":t="ms"}return t});
'undefined'==typeof usi_url&&(usi_url={},usi_url.URL=function(a){a=a||location.href;var b=document.createElement('a');if(b.href=a,this.full=b.href||'',this.protocol=(b.protocol||'').split(':')[0],this.host=b.host||'',-1!=this.host.indexOf(':')&&(this.host=this.host.substring(0,this.host.indexOf(':'))),this.port=b.port||'',this.hash=b.hash||'',this.baseURL='',this.tld='',this.domain='',this.subdomain='',this.domain_tld='',''!==this.protocol&&''!==this.host){this.baseURL=this.protocol+'://'+this.host+'/';var c=this.host.split(/\./g);if(2<=c.length){if(-1<['co','com','org','net','int','edu','gov','mil'].indexOf(c[c.length-2])&&2===c[c.length-1].length){var d=c.pop(),e=c.pop();this.tld=e+'.'+d}else this.tld=c.pop()}0<c.length&&(this.domain=c.pop(),0<c.length&&(this.subdomain=c.join('.'))),this.domain_tld=this.domain+'.'+this.tld}var f=b.pathname||'';0!==f.indexOf('/')&&(f='/'+f),this.path=new usi_url.Path(f),this.params=new usi_url.Params((b.search||'').substr(1))},usi_url.URL.prototype.build=function(a,b,c){var d='';return''!==this.protocol&&''!==this.host&&(null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!0),!0==a&&(d+=this.protocol+':'),d+='//'+this.host,''!==this.port&&(d+=':'+this.port),!0==b&&(d+=this.path.full,!0==c&&0<Object.keys(this.params.parameters).length&&(d+='?',d+=this.params.build()))),d},usi_url.Path=function(a){a=a||'',this.full=a,this.directories=[],this.filename='';for(var b=a.substr(1).split(/\//g);0<b.length;)1===b.length?this.filename=b.shift():this.directories.push(b.shift());this.has_directory=function(a){return-1<this.directories.indexOf(a)},this.contains=function(a){return-1<this.full.indexOf(a)}},usi_url.Params=function(a){a=a||'',this.full=a,this.parameters=function(a){var b={};if(1===a.length&&''===a[0])return b;for(var c,d,e,f=0;f<a.length;f++)if(e=a[f].split('='),c=e[0]&&e[0].replace(/\+/g,' '),d=e[1]&&e[1].replace(/\+/g,' '),1===e.length)b[c]='';else try{b[c]=decodeURIComponent(d)}catch(a){b[c]=d}return b}(a.split('&')),this.count=Object.keys(this.parameters).length,this.get=function(a){return a in this.parameters?this.parameters[a]:null},this.has=function(a){return a in this.parameters},this.set=function(a,b){this.parameters[a]=b,this.count=Object.keys(this.parameters).length},this.remove=function(a){!0===this.has(a)&&delete this.parameters[a],this.count=Object.keys(this.parameters).length},this.build=function(){var a=this,b=[];for(var c in a.parameters)!0===a.parameters.hasOwnProperty(c)&&b.push(c+'='+encodeURIComponent(a.parameters[c]));return b.join('&')},this.remove_usi_params=function(a){var b=this;for(var c in a=a||[],-1===a.indexOf('usi_')&&a.push('usi_'),b.parameters)if(!0===b.parameters.hasOwnProperty(c)){var d=!1;a.forEach(function(a){0===c.indexOf(a)&&(d=!0)}),d&&b.remove(c)}},this.remove_all=function(){var a=this;for(var b in a.parameters)!0===a.parameters.hasOwnProperty(b)&&a.remove(b)}});
"undefined"==typeof usi_ajax&&(usi_ajax={},usi_ajax.get=function(e,t){try{return usi_ajax.get_with_options({url:e},t)}catch(e){usi_commons.report_error(e)}},usi_ajax.get_with_options=function(e,t){null==t&&(t=function(){});var r={};if((e=e||{}).headers=e.headers||[],null==XMLHttpRequest)return t(new Error("XMLHttpRequest not supported"),r);if(""===(e.url||""))return t(new Error("url cannot be blank"),r);try{var a=new XMLHttpRequest;a.open("GET",e.url,!0),a.setRequestHeader("Content-type","application/json"),e.headers.forEach(function(e){""!==(e.name||"")&&""!==(e.value||"")&&a.setRequestHeader(e.name,e.value)}),a.onreadystatechange=function(){if(4===a.readyState){r.status=a.status,r.responseText=a.responseText||"";var e=null;return 0!==String(a.status).indexOf("2")&&(e=new Error("http.status: "+a.status)),t(e,r)}},a.send()}catch(e){return usi_commons.report_error(e),t(e,r)}},usi_ajax.post=function(e,t,r){try{return usi_ajax.post_with_options({url:e,params:t},r)}catch(e){usi_commons.report_error(e)}},usi_ajax.post_with_options=function(e,t){null==t&&(t=function(){});var r={};if((e=e||{}).headers=e.headers||[],e.paramsDataType=e.paramsDataType||"string",e.params=e.params||"",null==XMLHttpRequest)return t(new Error("XMLHttpRequest not supported"),r);if(""===(e.url||""))return t(new Error("url cannot be blank"),r);try{var a=new XMLHttpRequest;a.open("POST",e.url,!0),"formData"===e.paramsDataType||("object"===e.paramsDataType?(a.setRequestHeader("Content-type","application/json; charset=utf-8"),e.params=JSON.stringify(e.params)):a.setRequestHeader("Content-type","application/x-www-form-urlencoded")),e.headers.forEach(function(e){""!==(e.name||"")&&""!==(e.value||"")&&a.setRequestHeader(e.name,e.value)}),a.onreadystatechange=function(){if(4===a.readyState){r.status=a.status,r.responseText=a.responseText||"",r.responseURL=a.responseURL||"";var e=null;return 0!==String(a.status).indexOf("2")&&(e=new Error("http.status: "+a.status)),t(e,r)}},a.send(e.params)}catch(e){return usi_commons.report_error(e),t(e,r)}},usi_ajax.form_post=function(e,t,r){try{r=r||"post";var a=document.createElement("form");a.setAttribute("method",r),a.setAttribute("action",e),null!=t&&"object"==typeof t&&Object.keys(t).forEach(function(e){var r=document.createElement("input");r.setAttribute("type","hidden"),r.setAttribute("name",e),r.setAttribute("value",t[e]),a.appendChild(r)}),document.body.appendChild(a),a.submit()}catch(e){usi_commons.report_error(e)}},usi_ajax.put_with_options=function(e,t){null==t&&(t=function(){});var r={};if((e=e||{}).headers=e.headers||[],null==XMLHttpRequest)return t(new Error("XMLHttpRequest not supported"),r);if(""===(e.url||""))return t(new Error("url cannot be blank"),r);try{var a=new XMLHttpRequest;a.open("PUT",e.url,!0),a.setRequestHeader("Content-type","application/json"),e.headers.forEach(function(e){""!==(e.name||"")&&""!==(e.value||"")&&a.setRequestHeader(e.name,e.value)}),a.onreadystatechange=function(){if(4===a.readyState){r.status=a.status,r.responseText=a.responseText||"";var e=null;return 0!==String(a.status).indexOf("2")&&(e=new Error("http.status: "+a.status)),t(e,r)}},a.send()}catch(e){return usi_commons.report_error(e),t(e,r)}},usi_ajax.get_with_script=function(e,t,r){try{var a={};null==t&&(t=!0);var n="usi_"+(new Date).getTime(),s=document.getElementsByTagName("head")[0];top.location!=location&&(s=parent.document.getElementsByTagName("head")[0]);var o=document.createElement("script");o.id=n,o.type="text/javascript",o.src=e,o.addEventListener("load",function(){if(!0===t&&s.removeChild(o),null!=r)return r(null,a)}),s.appendChild(o)}catch(e){usi_commons.report_error(e)}},usi_ajax.listener=function(e){if(null==e&&(e=!1),null!=XMLHttpRequest){var t=this;t.ajax=new Object,t.clear=function(){t.ajax.requests=[],t.ajax.registeredRequests=[],t.ajax.scriptLoads=[],t.ajax.registeredScriptLoads=[]},t.clear(),t.register=function(e,r,a){try{var n={method:e=(e||"*").toUpperCase(),url:r=r||"*",callback:a=a||function(){}};t.ajax.registeredRequests.push(n)}catch(e){usi_commons.report_error(e)}},t.registerScriptLoad=function(e,r){try{var a={url:e=e||"*",callback:r=r||function(){}};t.ajax.registeredScriptLoads.push(a)}catch(e){usi_commons.report_error(e)}},t.registerFormSubmit=function(t,r){try{null!=t&&usi_dom.attach_event("submit",function(a){if(!0===e&&usi_commons.log("USI AJAX: form submit"),null!=a&&!0===a.returnValue){a.preventDefault();var n={action:t.action,data:{},e:a},s=["submit"];if(Array.prototype.slice.call(t.elements).forEach(function(e){try{-1===s.indexOf(e.type)&&("checkbox"===e.type?!0===e.checked&&(n.data[e.name]=e.value):n.data[e.name]=e.value)}catch(e){usi_commons.report_error(e)}}),null!=r)return r(null,n);a.returnValue=!0}},t)}catch(e){usi_commons.report_error(e)}},t.listen=function(){try{t.ajax.originalOpen=XMLHttpRequest.prototype.open,t.ajax.originalSend=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.open=function(r,a){r=(r||"").toUpperCase(),a=a||"",a=usi_dom.get_absolute_url(a),!0===e&&usi_commons.log("USI AJAX: open["+r+"]: "+a);var n={method:r,url:a,openDate:new Date};t.ajax.requests.push(n);var s=null;t.ajax.registeredRequests.forEach(function(e){e.method!=r&&"*"!=e.method||(a.indexOf(e.url)>-1||"*"==e.url)&&(s=e)}),null!=s&&(!0===e&&usi_commons.log("USI AJAX: Registered URL["+r+"]: "+a),this.requestObj=n,this.requestObj.callback=s.callback),t.ajax.originalOpen.apply(this,arguments)},XMLHttpRequest.prototype.send=function(r){var a=this;null!=a.requestObj&&(!0===e&&usi_commons.log("USI AJAX: Send Registered URL["+a.requestObj.method+"]: "+a.requestObj.url),""!=(r||"")&&(a.requestObj.params=r),a.addEventListener?a.addEventListener("readystatechange",function(){t.ajax.readyStateChanged(a)},!1):t.ajax.proxifyOnReadyStateChange(a)),t.ajax.originalSend.apply(a,arguments)},t.ajax.readyStateChanged=function(t){if(4===t.readyState&&null!=t.requestObj&&(t.requestObj.completedDate=new Date,!0===e&&usi_commons.log("Completed: "+t.requestObj.url),null!=t.requestObj.callback)){var r={requestObj:t.requestObj,responseText:t.responseText};return t.requestObj.callback(null,r)}},t.ajax.proxifyOnReadyStateChange=function(e){var r=e.onreadystatechange;null!=r&&(e.onreadystatechange=function(){t.ajax.readyStateChanged(e),r()})},document.head.addEventListener("load",function(e){if(null!=e&&null!=e.target&&""!=(e.target.src||"")){var r=e.target.src,a={url:r=usi_dom.get_absolute_url(r),completedDate:new Date};t.ajax.scriptLoads.push(a);var n=null;if(t.ajax.registeredScriptLoads.forEach(function(e){(r.indexOf(e.url)>-1||"*"==e.url)&&(n=e)}),null!=n&&null!=n.callback)return n.callback(null,a)}},!0),usi_commons.log("USI AJAX: listening ...")}catch(e){usi_commons.report_error(e),usi_commons.log("usi_ajax.listener ERROR: "+e.message)}},t.unregisterAll=function(){t.ajax.registeredRequests=[],t.ajax.registeredScriptLoads=[]}}});
"undefined"==typeof usi_split_test&&(usi_split_test={split_test_name:"usi_dice_roll",split_group:"-1",split_siteID:"-1",split_test_cookie_length:7,get_split_var:function(t){if(t=t||"",null==usi_cookies.get("usi_visitor_id"+t)){var i="v_"+Math.random().toString(36).substring(7)+"_"+Math.round((new Date).getTime()/1e3)+"_"+t;return usi_cookies.set("usi_visitor_id"+t,i,86400*this.split_test_cookie_length,!0),i}return usi_cookies.get("usi_visitor_id"+t)},report_test:function(t,i){var s=document.getElementsByTagName("head")[0],e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","//www.upsellit.com/utility/split_test.jsp?siteID="+t+"&group="+i+"&usi_visitor_id="+this.get_split_var(t)),s.appendChild(e),void 0!==usi_split_test.set_verification&&setTimeout("usi_split_test.set_verification("+i+");",1e3)},get_group:function(t){return usi_cookies.get(this.split_test_name+t)},instantiate:function(t,i,s){null==usi_cookies.get(this.split_test_name+t)||s?(0===i||i&&""!=i?this.split_group=i:Math.random()>.5?this.split_group="0":this.split_group="1",this.report_test(t,this.split_group),usi_cookies.set(this.split_test_name+t,this.split_group,86400*this.split_test_cookie_length,!0)):this.split_group=usi_cookies.get(this.split_test_name+t)}});

		usi_cookieless = true;
		usi_app = {};
		usi_app.main = function () {

			// General
			usi_app.url = new usi_url.URL();
			usi_app.now = usi_date.set_date();
			usi_app.coupon = usi_cookies.value_exists("usi_coupon_applied") ? "" : usi_commons.gup_or_get_cookie("usi_coupon", usi_cookies.expire_time.week, true);
			usi_app.force_group = usi_commons.gup_or_get_cookie('usi_force_group');
			usi_app.remove_source_code = usi_commons.gup_or_get_cookie('usi_remove_source_code', usi_cookies.expire_time.week, true);
			
			usi_app.recommendation_site = "18642";

			// Pages
			usi_app.is_savings_event_page = usi_app.url.path.full === "/lp/savingsevent.html" || usi_app.url.path.full === "/lp/savingsevent2.html";
			usi_app.is_product_page = typeof window['tealium_event'] != "undefined" && window['tealium_event'] == "product_view"; // var from site
			usi_app.is_toprated_page = usi_app.url.path.full === "/toprated";
			usi_app.is_query_page = usi_app.url.path.full === "/q";
			usi_app.is_cart_page = usi_app.url.path.full === "/cart";
			usi_app.is_checkout_page = usi_app.url.path.full === "/order";
			usi_app.is_confirmation_page = usi_app.url.path.full === "/ThankYou";

			// Flags
			usi_app.force_group = usi_commons.gup_or_get_cookie('usi_force_group');
			usi_app.is_logged_in = window.dataLayer != null && dataLayer.loggedIn;
			usi_app.is_enabled = usi_commons.gup_or_get_cookie("usi_enable", usi_cookies.expire_time.day, true) != "";
			usi_app.is_suppressed = usi_app.is_confirmation_page;

			// Product page comparisons
			usi_app.product_page_skus = ["JR063","NTN010","NW644","KY085","DRH001","ET284","GLF069","JR095","GLF208","RNL064","NFC017","NSL051","BR010","NWF921","SBT003","GLF006","HAR002","AFR004","HS027","DYH022","BR005","DYH012","BR006","NFC042","BNR009","GLF229","OPT021","TER018","BNR010","GLF230","OPT023","TER017","GLF144","GLF240","VEG036","GLF145","GLF241","SNW028","VEG035","ATN014","ATN010","ATN009","BNN046","GE019","IR079","IR094","IR146","JR162","NTP072","PGL063","PRN151","SN311","SN795","VTN035","ZOU011","ATN038","ATN039","BAR093","BAR096","CBD019","CBD020","CBD021","CV003","CV005","CV013","CV016","CV017","CV018","CV019","GLF284","GLF285","GLF286","HMP006","HMP007","HMP008","IR119","IR120","NLC004","SLR471","SLR474","SN959","TM085","CHW020","CV001","CV002","HMP005","IR170","IR171","IR172","LE223","SN252","JR030","NFC058","SUS008","JR040","SN135","DB106","SN136","NFC026","LE042","BLU063","ET450","HRG007","HRG166","LE112","LE378","NFC129","PRN087","QNL003","SN450","BLU064","LE210","LE113","LFH032","JR001","NBL006","CNT159","TH196","SN159","AC009","AC063","AC075","AC078","AC088","AC111","AC112","AC114","AC117","LE198","NWF1045","NFC058","SUS008","JR223","TH196","NW753","TL095","NW759","TL924","NWF084","TL041","NAT060","JR099","KL484","KL482","NN038","PF079","WA049","TL168","SLR200","TL927","NW150","NW350","SLG251","CNT182","NMA001","OGX010","ARC058","HBL003","NWF1124","SN119","SLG251","TL175","TL176","NWF1240","NVT011","NVT001","NVT002","NVT007","NVT010","NVT012","RBL110","RNL196","SH445","SH446","SH455","RBL035","VFS001","NA613","NTN027","NW976","HER004","HER038","NRN001","NRN067","NTM019","NTP314","NW796","OAD002","SMA003","VFS003","VFS016","MGF098","JR090","TL038","FRN003","NWF133","SLG290","NW257","SLR235","TL946","NW109","NW133","SLR263","TL026","LFT023","TL013","TL061","NW357","TL674","WA021","NW134","SUS019","HTG011","AMZ001","AMZ024","AMZ032","AMZ033","AMZ034","AMZ038","AMZ060","AMZ064","AMZ065","AMZ070","AMZ014","AMZ030","AMZ005","AMZ071","AMZ006","AMZ002","AMZ007","AMZ062","AMZ069","AMZ039","AMZ008","AMZ011","AMZ009","AMZ072","AMZ013","SH405","SH430"];
			usi_app.product_page_skus_swanson = ["SWA033","SWA034","SWA035","SWA037","SWA038","SWA040","SWA044","SWA046","SWA047","SWA048","SWD066","SWE010","SWF006","SWF006","SWF018","SWF035","SWF035","SWF082","SWF096","SWF101","SWF195","SWF195","SWF198","SWH202","SWU1052","SWU1052","SWU1052","SWU1052","SWU1053","SWU1053","SWU1053","SWU1053","SWU1054","SWU1054","SWU1054","SWU1055","SWU1055","SWU1055","SWU1055","SWU1063","SWU1066","SWU1068","SWU1077","SWU1077","SWU1077","SWU1077","SWU1077","SWU1077","SWU1077","SWU1077","SWU1077","SWU1077","SWU1077","SWU1077","SWU1077","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1080","SWU1081","SWU1081","SWU1081","SWU1081","SWU1081","SWU1081","SWU1081","SWU110","SWU114","SWU122","SWU122","SWU122","SWU217","SWU217","SWU218","SWU218","SWU275","SWU305","SWU377","SWU377","SWU377","SWU377","SWU377","SWU377","SWU377","SWU377","SWU377","SWU377","SWU393","SWU458","SWU460","SWU481","SWU518","SWU656","SWU673","SWU712","SWU716","SWU781","SWU781","SWU781","SWU781","SWU781","SWU781","SWU781","SWU781","SWU781","SWU818","SWU823","SWU842","SWU842","SWU937","SWU991","SW018","SW018","SW021","SW021","SW1002","SW1121","SW1171","SW1208","SW1208","SW1215","SW1215","SW1215","SW1215","SW131","SW1311","SW1331","SW1333","SW140","SW140","SW141","SW1446","SW1446","SW1476","SW1476","SW1476","SW1502","SW151","SW151","SW152","SW1523","SW1731","SW1732","SW1732","SW1732","SW1732","SW1732","SW1756","SW1756","SW1756","SW1756","SW1756","SW1757","SW1757","SW1758","SW1758","SW1758","SW1759","SW1759","SW1759","SW1759","SW1759","SW1759","SW1759","SW1759","SW1759","SW1759","SW1759","SW1760","SW268","SW268","SW348","SW348","SW348","SW415","SW477","SW498","SW504","SW505","SW679","SW826","SW851","SW852","SW855","SW922","SW923","SW924","SW976","SW994","SW999","SWR076","SWR067","SWR076","SWR067","SWR067","SWR067","SWB006","SWR067","SWR076","SWR076","SWR067","STB002","PNN003","SWR067","BOR004","SWR067","STB002","SWR067","SW1401","SWR067","SWR067","SWR067","SWR067","SWR067","SWR067","SWE059","SWE059"];

			usi_app.national_brand_prod = {};
			usi_app.swanson_brand_prod = {};

			if (usi_cookies.value_exists("usi_add_product_page_item")) {
				usi_cookies.del("usi_add_product_page_item");
				setTimeout(function () {
					if (document.getElementById('addToOrder')) {
						document.getElementById('addToOrder').click();
					}
				}, 500);
				return;
			}

			// Collect product page data
			if (usi_app.is_product_page) {
				usi_app.product_page_data = usi_app.send_product_data();
				// lift test
				var control_site_id = '32385';
				usi_split_test.instantiate(control_site_id, usi_app.force_group);
				if (usi_split_test.get_group(control_site_id) == '1') {
					// load site
					usi_commons.log("Split Group: USI");
					usi_app.init_product_page_comparisons();
				} else {
					usi_commons.log("Split Group: Control");
				}
			}

			var first_product, first_product_id;
			if (usi_app.is_toprated_page) {
				if (usi_dom.get_first_element(".productName a") != null) {
					first_product = usi_dom.get_first_element(".productName a").getAttribute("title").split(" - ");
					first_product_id = first_product[first_product.length - 1];
					usi_cookies.set("usi_prod_pid_1", first_product_id, usi_cookies.expire_time.week);
				}
			}

			if (usi_app.is_query_page) {
				if (usi_dom.get_first_element(".product__name") != null) {
					first_product = usi_dom.get_first_element(".product__name").getAttribute("title").split(" - ")
					first_product_id = first_product[first_product.length - 1];
					usi_cookies.set("usi_prod_pid_1", first_product_id, usi_cookies.expire_time.week);
				}
			}

			if (usi_app.is_savings_event_page) {
				usi_cookies.set("usi_prod_pid_1", "popular", usi_cookies.expire_time.week);
			}

			if (usi_dom.get_first_element(".cart__count") != null && usi_dom.get_first_element(".cart__count").textContent === "0" && usi_cookies.value_exists("usi_active_cart")) {
				usi_cookies.del("usi_active_cart");
			}

			// listen for cart posts
			usi_app.setup_listener("https://www.swansonvitamins.com/cart.add.ajax.do?", usi_app.handle_ajax_response);

			// Reload page thru affiliate link if needed
			if (usi_app.is_checkout_page && usi_cookies.value_exists("usi_reload_aff_link")) {
				usi_cookies.del("usi_reload_aff_link");
				var usi_aff_link = "https://click.linksynergy.com/deeplink?id=JNLJ1ZP2xGI&mid=43671&murl=https%3A%2F%2Fwww.swansonvitamins.com%2Forder";
				usi_app.link_injection(usi_aff_link);
			}

			// Check suppressions
			if (usi_app.is_suppressed) {
				usi_commons.log("Company is suppressed");
				return;
			}

			// Update source code from url param per client's request
			if (usi_app.remove_source_code && location.href.indexOf('SourceCode=') !== -1) {
				usi_commons.log('[ main ] Updating source code param from url...');
				try {
					// Make sure this doesn't happen repeatedly
					usi_app.remove_source_code = false
					usi_cookies.del("usi_remove_source_code");
					// Build new url, removing params
					var new_url_arr = location.href.replace('?', '&').split("&"), new_url = window.location.pathname;
					new_url_arr.forEach(function (el) {
						if (el.indexOf('usi_remove_source_code=') === -1) {
							if (el.indexOf('SourceCode=') !== -1) {
								// updating Source Code bsed on date
								var source_code_arr = el.split("=");
								if (usi_date.is_date_within_range(usi_app.now, '2020-01-14 21:00', '2020-01-31 21:00')) {
									source_code_arr[1] = "INTAVL8A2";
								} else {
									source_code_arr[1] = "INTAUKDA";
								}
								var source_code = source_code_arr.join("=");
								new_url += (new_url.indexOf('?') === -1 ? '?' : '&') + source_code;
							} else if (el.indexOf('http') === -1) {
								new_url += (new_url.indexOf('?') === -1 ? '?' : '&') + el;
							}
						}
					});
					usi_commons.log(new_url)
					// Perform action
					window.history.replaceState({}, document.title, new_url);
				} catch (err) {
					usi_commons.report_error("[ main ] Error when removing source code param from URL");
					usi_commons.report_error(err);
				}
			}

			// Apply coupons
			if (usi_app.is_cart_page && usi_app.coupon != "") {
				setTimeout(function () {
					usi_app.apply_coupon();
				}, 5000);
				return;
			}

			// Save cart data
			if (usi_app.is_cart_page) {
				usi_app.save_cart();
			}

			// Load campaigns
			usi_app.load();
		};

		usi_app.init_product_page_comparisons = function () {
			var sku = window['utag']['data']['product_id'];
			var idx = usi_app.product_page_skus.indexOf(sku);
			if (sku && idx !== -1) {
				usi_commons.log("[ init_product_page_comparisons ] National brand SKU detected:", sku);
				// Get all data needed for product on current page
				usi_app.get_national_brand_prod(1, function (national_brand_prod) {
					if (national_brand_prod) {
						usi_app.national_brand_prod = national_brand_prod;
						usi_commons.log("[ init_product_page_comparisons ] national_brand_prod:", usi_app.national_brand_prod);
						if (usi_app.national_brand_prod.name && usi_app.national_brand_prod.pic && usi_app.national_brand_prod.price && usi_app.national_brand_prod.size) {
							// Get all data needed for Swanson brand equivalent product
							usi_app.get_swanson_brand_prod(idx, function (swanson_brand_prod) {
								usi_app.swanson_brand_prod = swanson_brand_prod;
								usi_commons.log("[ init_product_page_comparisons ] swanson_brand_prod:", swanson_brand_prod);
								if (usi_app.swanson_brand_prod.name && usi_app.swanson_brand_prod.pic && usi_app.swanson_brand_prod.price && usi_app.swanson_brand_prod.size && usi_app.swanson_brand_prod.add_to_cart_url && Number(usi_app.swanson_brand_prod.price) < Number(usi_app.national_brand_prod.price)) {
									if (usi_commons.device === "desktop") {
										// Display TT on CTA hover
										var cta_el = usi_dom.get_first_element("#addToOrder");
										if (cta_el) {
											usi_app.attach_hover_event(cta_el);
										}
									} else if (usi_commons.device === "mobile") {
										// Load solution normally on mobile devices
										usi_commons.log("[ init_product_page_comparisons ] * * * Load Product Page Comparison TT (mobile)");
										usi_commons.load_view("ecJoXNxFyiYC3i9o1QFyg8z", "25950", usi_commons.device);
									}
								}
							});
						}
					}
				});
			}
		};

		usi_app.attach_hover_event = function (el) {
			// Apply listener
			usi_dom.attach_event("mouseenter", function () {
				// Reset launch conditions
				if (typeof usi_js !== 'undefined') {
					usi_js.cleanup();
				}
				// Display TT on CTA hover
				usi_commons.log("[ init_product_page_comparisons ] * * * Load Product Page Comparison TT (desktop)");
				usi_commons.load_view("ecJoXNxFyiYC3i9o1QFyg8z", "25950", usi_commons.device);
			}, el);
			usi_commons.log("[ attach_hover_event ] Hover event attached");
		};

		usi_app.get_national_brand_prod = function (attempt, callback) {
			// Exit condition
			if (attempt >= 5) {
				return;
			}
			// Scrape window object
			var prod = {};
			var data = window['dataLayer'];
			if (data) {

				// name
				prod.name = data['productName'];

				// pic
				var pic_el = usi_dom.get_first_element("#item-detail-wrap img");
				if (pic_el) {
					prod.pic = pic_el.src;
				}

				// Set default pic if there is no image on the page
				if (!prod.pic) {
					prod.pic = "https://media.swansonvitamins.com/images/common/error/missing.jpg";
				}

				// price
				prod.price = data['productPrice'];

				// size
				var size_input_el = usi_dom.get_first_element("#other-size-select");
				if (size_input_el) {
					var selected_idx = size_input_el.options.selectedIndex;
					var option_el = size_input_el.options[selected_idx];
					if (option_el) {
						prod.size = option_el.innerText;
					}
				} else {
					// Check if it's one size
					var one_size_el = usi_dom.get_first_element(".one-size-text .one-size");
					if (one_size_el) {
						prod.size = one_size_el.innerText;
					}
				}

				if (typeof callback === "function") {
					callback(prod);
				}
			} else {
				// No page object, try again
				setTimeout(function () {
					usi_app.get_national_brand_prod(attempt + 1, callback);
				}, 1000);
			}
		};

		usi_app.get_swanson_brand_prod = function (idx, cb) {
			var prod = {};
			var sku = usi_app.product_page_skus_swanson[idx];
			if (sku) {
				prod.sku = sku;
				var url = "https://www.swansonvitamins.com/omniture.ajax.do?t=layout.item.detail.products&in1=" + sku;
				usi_ajax.get(url, function (err, response) {
					if (err != null) {
						usi_commons.log_error(err);
					} else {
						if (response.status === 200 && response.responseText) {
							var el = document.createElement('div');
							el.innerHTML = response.responseText;

							// pic
							var img_el = usi_dom.get_first_element(".product-link-idp img", el);
							if (img_el) {
								prod.pic = img_el.src;
							}
							// Set default pic if there is no image on the page
							if (!prod.pic) {
								prod.pic = "https://media.swansonvitamins.com/images/common/error/missing.jpg";
							}

							// size
							var size_el = usi_dom.get_first_element(".carousel-product-serving", el);
							if (size_el) {
								prod.size = size_el.innerText;
							}

							var pdp_link_el = usi_dom.get_first_element('.review-stars__center-num', el);
							if (pdp_link_el) {
								prod.pdp_url = pdp_link_el.href.split("?")[0];
							}

							var link_el = usi_dom.get_first_element('a[data-target="#addToCart"]', el);
							if (link_el) {
								// name
								prod.name = link_el.getAttribute('data-content');

								// price
								prod.price = link_el.getAttribute('data-cost');

								// price
								prod.add_to_cart_url = "https://www.swansonvitamins.com" + link_el.getAttribute('href');
							}

							if (typeof cb === "function") {
								cb(prod);
							}
						}
					}
				});
			}
		};

		usi_app.load = function () {
			// usi_commons.log("usi_app.load()");
			var required_cookies = usi_cookies.value_exists("usi_subtotal", "usi_prod_pic_1", "usi_prod_name_1");

			if (!usi_app.is_logged_in && (usi_app.is_toprated_page || usi_app.is_query_page || usi_app.is_savings_event_page)) {
				// Top Rate or Query Page LC
				usi_commons.load_view("StUOajBCwyr0OIhc5HyJKA1", "26376", usi_commons.device);
			} else if (required_cookies) {
				if (usi_app.is_logged_in) {
					// no solution for active cart / logged in users
				} else {
					/* LC, active cart, logged out users - ADA compliant graphics */
					usi_commons.load_view("MB4ven4JeufUU2bPSxXWEJ1", "22962", usi_commons.device + "_updated");
				}
			}
		};

		usi_app.apply_coupon = function () {
			// usi_commons.log("usi_app.apply_coupon()");
			var coupon_input = usi_dom.get_first_element(".cart-promo-code-form__input");
			var coupon_button = usi_dom.get_first_element(".promo-form");
			if (coupon_input !== null && coupon_button !== null) {
				coupon_input.value = usi_app.coupon;
				usi_cookies.del("usi_coupon");
				coupon_button.disabled = false;
				coupon_button.click();
				usi_commons.log("[ apply_coupon ] Coupon applied");
			} else {
				usi_commons.log("[ apply_coupon ] Coupon elements missing, trying again");
				setTimeout(usi_app.apply_coupon, 1000);
			}
		};

		usi_app.scrape_product_page = function () {
			// usi_commons.log("usi_app.scrape_product_page()");
			try {
				var product_wrapper = usi_dom.get_first_element("#inner-store-content");
				var product = {};
				product.link = usi_dom.get_first_element('[property="og:url"]').content;
				product.image = usi_dom.get_first_element('[property="og:image"]').content;
				//product.name = usi_dom.get_first_element(".item-detail-item-name", product_wrapper).innerHTML.trim();
				product.name = document.getElementsByClassName("item-detail-item-name")[document.getElementsByClassName("item-detail-item-name").length-1].innerHTML.trim();
				product.pid = dataLayer.product; //dataLayer from site
				product.price = usi_dom.string_to_decimal(usi_dom.get_first_element('[property="og:price:amount"]').content).toFixed(2);
				try {
					product.extra = encodeURIComponent(JSON.stringify({
						stock: usi_dom.get_first_element('[property="og:availability"]').content.trim(),
						rating: usi_dom.get_first_element('[property="og:rating"]').content.trim()
					}));
				} catch (err) {
					usi_commons.report_error(err);
				}
				return product
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.load_product_data = function (options) {
			// usi_commons.log("usi_app.load_product_data()");
			try {
				usi_app.product_rec_callback = options.callback;
				var queryStr = "";
				if (options.siteID) queryStr += '?siteID=' + options.siteID;
				if (options.pid) queryStr += '&pid=' + options.pid;
				if (options.less_expensive || usi_app.url.params.has('usi_less_expensive')) queryStr += '&less_expensive=1';
				if (options.rows) queryStr += '&rows=' + options.rows;
				if (options.days_back) queryStr += '&days_back=' + options.days_back;
				if (options.match) queryStr += '&match=' + options.match;
				if (options.nomatch) queryStr += '&nomatch=' + options.nomatch;
				if (options.force_exact) queryStr += '&force_exact=' + options.force_exact;
				usi_commons.load_script(usi_commons.cdn+'/utility/product_recommendations.jsp' + queryStr);
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.send_lc_data = function () {
			var cookies = usi_app.get_cookie_names("usi_prod");
			cookies.push("usi_subtotal");
			usi_js.send_data("usi_newsubtotal", (usi_cookies.get("usi_subtotal") * 0.85).toFixed(2));
			cookies.forEach(function (c) {
				if (c) usi_js.send_data(c, usi_cookies.get(c));
			});
			usi_app.load_product_data({
				siteID: usi_app.recommendation_site,
				pid: usi_cookies.get("usi_prod_pid_1"),
				nomatch: "Out of stock",
				callback: function () {
					if (typeof (usi_app.product_rec['product3']) != "undefined") {
						for (var i = 1; i <= 3; i++) {
							for (var p in usi_app.product_rec["product" + i]) {
								if (usi_app.product_rec["product" + i].hasOwnProperty(p)) {
									usi_js.send_data("usi_recc_" + p + "_" + i, usi_app.product_rec["product" + i][p]);
								}
							}
						}
					}
				}
			});

			if (usi_date.is_date_within_range(usi_app.now, '2020-01-14 21:00', '2020-01-31 21:00')) {
				if (usi_cookies.value_exists("usi_active_cart")) {
					usi_js.send_data("usi_link", "https://click.linksynergy.com/deeplink?id=JNLJ1ZP2xGI&mid=43671&murl=https%3A%2F%2Fwww.swansonvitamins.com%2FShoppingBag%3Fusi_remove_source_code%3D1%26usi_coupon%3D{{db_promo:5050_20p-toprated-email-new}}");
				} else {
					usi_js.send_data("usi_link", "https://click.linksynergy.com/deeplink?id=JNLJ1ZP2xGI&mid=43671&murl=https%3A%2F%2Fwww.swansonvitamins.com%2Ftoprated%3Fusi_remove_source_code%3D1%26usi_coupon%3D{{db_promo:5050_20p-toprated-email-new}}");
				}
			} else {
				if (usi_cookies.value_exists("usi_active_cart")) {
					usi_js.send_data("usi_link", "https://click.linksynergy.com/deeplink?id=JNLJ1ZP2xGI&mid=43671&murl=https%3A%2F%2Fwww.swansonvitamins.com%2FShoppingBag%3Fusi_remove_source_code%3D1%26usi_coupon%3D{{db_promo:5050_15p-toprated-email}}");
				} else {
					if (usi_app.is_toprated_page || usi_app.is_query_page) {
						usi_js.send_data("usi_link", "https://click.linksynergy.com/deeplink?id=JNLJ1ZP2xGI&mid=43671&murl=https%3A%2F%2Fwww.swansonvitamins.com%2Ftoprated%3Fusi_remove_source_code%3D1%26usi_coupon%3D{{db_promo:5050_15p-toprated-email}}");
					} else if (usi_app.url.path.full === "/lp/savingsevent.html") {
						usi_js.send_data("usi_link", "https://click.linksynergy.com/deeplink?id=JNLJ1ZP2xGI&mid=43671&murl=https%3A%2F%2Fwww.swansonvitamins.com%2Flp%2Fsavingsevent.html%3Fusi_remove_source_code%3D1%26usi_coupon%3D{{db_promo:5050_15p-toprated-email}}");
					} else if (usi_app.url.path.full === "/lp/savingsevent2.html") {
						usi_js.send_data("usi_link", "https://click.linksynergy.com/deeplink?id=JNLJ1ZP2xGI&mid=43671&murl=https%3A%2F%2Fwww.swansonvitamins.com%2Flp%2Fsavingsevent2.html%3Fusi_remove_source_code%3D1%26usi_coupon%3D{{db_promo:5050_15p-toprated-email}}");
					}
				}
			}
		};

		usi_app.get_cookie_names = function (prefix) {
			try {
				var cookies = typeof usi_cookieless != "undefined" ? window.name : document.cookie;
				return cookies.split(";").map(function (c) {
					return c.indexOf(prefix) == 0 ? c.split("=")[0] : "";
				}).filter(function (i) {
					return i;
				});
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.send_product_data = function () {
			// usi_commons.log("usi_app.send_product_data()");
			var current_prod = usi_app.scrape_product_page();
			if (usi_cookies.get("usi_send_recs") == null) {
				if (Math.random() < .5) {
					usi_cookies.set("usi_send_recs", "1", 24*60*60);
				} else {
					usi_cookies.set("usi_send_recs", "0", 24*60*60);
				}
			}
			if (usi_cookies.get("usi_send_recs") == "1") {
				usi_commons.send_prod_rec(usi_app.recommendation_site, current_prod, true);
			}
			usi_commons.log('[ send_product_data ] current_prod:', current_prod);
			return current_prod;
		};

		usi_app.save_cart = function () {
			// usi_commons.log("usi_app.save_cart()");
			var prod_prefix = "usi_prod_";

			// Delete existing cookies
			usi_cookies.flush(prod_prefix);

			usi_app.prod_array = usi_app.scrape_cart();
			if (typeof usi_app.prod_array != "undefined") {
				usi_app.save_array({
					prefix: prod_prefix,
					array: usi_app.prod_array,
					max: 3
				});
			}
			usi_commons.log("[ save_cart ] prod_array:", usi_app.prod_array);

			var cart_total = usi_app.scrape_total();
			if (typeof cart_total != "undefined" && cart_total > 0) {
				usi_cookies.set("usi_subtotal", encodeURIComponent(cart_total), usi_cookies.expire_time.week);
			}
			usi_commons.log("[ save_cart ] cart_total: $", cart_total);
		};

		usi_app.save_array = function (options) {
			// usi_commons.log("usi_app.save_array()");
			try {
				options.array.forEach(function (product, index) {
					var prop;
					if (index >= options.max) return;
					for (prop in product) {
						if (product.hasOwnProperty(prop)) {
							usi_cookies.set(options.prefix + prop + "_" + (index + 1), encodeURIComponent(product[prop]), usi_cookies.expire_time.week);
						}
					}
				});
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.scrape_total = function () {
			// usi_commons.log("usi_app.scrape_total()");
			try {
				var subtotal = usi_dom.get_first_element(".cart-subtotal-price");
				if (subtotal != null) {
					subtotal = usi_dom.string_to_decimal(subtotal.innerHTML).toFixed(2);
					return subtotal;
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.scrape_cart = function () {
			// usi_commons.log("usi_app.scrape_cart()");
			try {
				var cart_rows = usi_dom.get_elements(".cart-item");
				var prod_array = [], product;
				// Scrape cart info
				cart_rows.forEach(function (row) {
					product = {};
					product.pid = row.querySelector(".cart-item-details").textContent.split("·")[0].trim();
					product.pic = row.querySelector(".cart-item-pic img").src;
					product.name = row.querySelector(".cart-item-pic img").alt.trim();
					
					prod_array.push(product);
				});
				return prod_array;
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.setup_listener = function (url, callback) {
			usi_commons.log("usi_app.setup_listener()");
			usi_app.ajaxListener = new usi_ajax.listener();
			usi_app.ajaxListener.register('GET', url, callback);
			usi_app.ajaxListener.listen();
		};

		usi_app.handle_ajax_response = function (err, response) {
			usi_commons.log("usi_app.handle_ajax_response()");
			if (response) {
				usi_commons.log("response", response.responseText)
				usi_cookies.set("usi_active_cart", "1", usi_cookies.expire_time.week, true);
				usi_app.load();
			} else {
				usi_commons.report_error(err);
			}
		};

		// Append an iframe into the DOM with the given destination
		usi_app.link_injection = function(destination) {
			var usi_dynamic_div = document.createElement("div");
			usi_dynamic_div.innerHTML = "<iframe style='width:1px;height:1px' src='"+destination+"'></iframe>";
			document.getElementsByTagName('body')[0].appendChild(usi_dynamic_div);
		};

		usi_app.ready = function (func) {
			if (typeof (document.readyState) != "undefined" && document.readyState === "complete") {
				func();
			} else if (window.addEventListener) {
				window.addEventListener('load', func, true);
			} else if (window['attachEvent']) {
				window['attachEvent']('onload', func);
			} else {
				setTimeout(func, 5000);
			}
		};

		usi_app.ready(function () {
			try {
				usi_app.main();
			} catch (err) {
				usi_commons.report_error(err);
			}
		});

	} catch(err) {
		usi_commons.report_error(err);
	}
}
