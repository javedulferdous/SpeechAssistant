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
try {
	if("undefined"==typeof usi_cookies&&(usi_cookies={expire_time:{minute:60,hour:3600,two_hours:7200,four_hours:14400,day:86400,week:604800,two_weeks:1209600,month:2592e3,year:31536e3,never:31536e4},max_cookies_count:15,max_cookie_length:1e3,update_window_name:function(e,o,i){try{var n=-1;if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n=t.getTime()}var r=window.top||window,s=0;null!=o&&-1!=o.indexOf("=")&&(o=o.replace(new RegExp("=","g"),"USIEQLS")),null!=o&&-1!=o.indexOf(";")&&(o=o.replace(new RegExp(";","g"),"USIPRNS"));for(var u=r.name.split(";"),c="",a=0;a<u.length;a++){var l=u[a].split("=");3==l.length?(l[0]==e&&(l[1]=o,l[2]=n,s=1),null!=l[1]&&"null"!=l[1]&&(c+=l[0]+"="+l[1]+"="+l[2]+";")):""!=u[a]&&(c+=u[a]+";")}0==s&&(c+=e+"="+o+"="+n+";"),r.name=c}catch(e){}},flush_window_name:function(e){try{for(var o=window.top||window,i=o.name.split(";"),n="",t=0;t<i.length;t++){var r=i[t].split("=");3==r.length&&(0==r[0].indexOf(e)||(n+=i[t]+";"))}o.name=n}catch(e){}},get_from_window_name:function(e){try{for(var o=(window.top||window).name.split(";"),i=0;i<o.length;i++){var n=o[i].split("=");if(3==n.length){if(n[0]==e)if(-1!=(t=n[1]).indexOf("USIEQLS")&&(t=t.replace(new RegExp("USIEQLS","g"),"=")),-1!=t.indexOf("USIPRNS")&&(t=t.replace(new RegExp("USIPRNS","g"),";")),!("-1"!=n[2]&&usi_cookies.datediff(n[2])<0))return"undefined"==typeof usi_cookieless&&usi_cookies.create_cookie(n[0],t,usi_cookies.datediff(n[2])/1e3),usi_results=[t,n[2]],usi_results}else if(2==n.length){var t;if(n[0]==e)return-1!=(t=n[1]).indexOf("USIEQLS")&&(t=t.replace(new RegExp("USIEQLS","g"),"=")),-1!=t.indexOf("USIPRNS")&&(t=t.replace(new RegExp("USIPRNS","g"),";")),usi_results=[t,(new Date).getTime()+6048e5],usi_results}}}catch(e){}return null},datediff:function(e){return e-(new Date).getTime()},count_cookies:function(e){return e=e||"usi_",usi_cookies.search_cookies(e).length},root_domain:function(){try{var e=document.domain.split("."),o=e[e.length-1];if("com"==o||"net"==o||"org"==o||"us"==o||"co"==o||"ca"==o)return e[e.length-2]+"."+e[e.length-1]}catch(e){}return document.domain},create_cookie:function(e,o,i){if(!1!==navigator.cookieEnabled){var n="";if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n="; expires="+t.toGMTString()}var r="samesite=none;";0==location.href.indexOf("https://")&&(r+="secure;");var s=usi_cookies.root_domain();"undefined"!=typeof usi_parent_domain&&-1!=document.domain.indexOf(usi_parent_domain)&&(s=usi_parent_domain),document.cookie=e+"="+encodeURIComponent(o)+n+"; path=/;domain="+s+"; "+r}},read_cookie:function(e){if(!1===navigator.cookieEnabled)return null;for(var o=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var t=i[n];" "==t.charAt(0);)t=t.substring(1,t.length);if(0==t.indexOf(o))return decodeURIComponent(t.substring(o.length,t.length))}return null},del:function(e){usi_cookies.set(e,null,-100)},get:function(e){var o=null,i=usi_cookies.get_from_window_name(e);if(null!=i&&i.length>1)try{o=decodeURIComponent(i[0])}catch(e){return i[0]}else o=usi_cookies.read_cookie(e);return null==o?null:o},get_json:function(e){var o=null,i=usi_cookies.get(e);if(null==i)return null;try{o=JSON.parse(i)}catch(e){i=i.replace(/\\"/g,'"');try{o=JSON.parse(JSON.parse(i))}catch(e){try{o=JSON.parse(i)}catch(e){}}}return o},search_cookies:function(e){e=e||"";var o=[];return document.cookie.split(";").forEach(function(i){var n=i.split("=")[0].trim();""!==e&&0!==n.indexOf(e)||o.push(n)}),o},set:function(e,o,i,n){"undefined"!=typeof usi_nevercookie&&(n=!1),void 0===i&&(i=-1);try{o=o.replace(/(\r\n|\n|\r)/gm,"")}catch(e){}if("undefined"==typeof usi_windownameless&&usi_cookies.update_window_name(e+"",o+"",i),"undefined"==typeof usi_cookieless||n||null==o){if(null!=o){if(null==usi_cookies.read_cookie(e))if(!n)if(usi_cookies.search_cookies("usi_").length+1>usi_cookies.max_cookies_count)return void usi_cookies.report_error('Set cookie "'+e+'" failed. Max cookies count is '+usi_cookies.max_cookies_count);o.length>usi_cookies.max_cookie_length&&(usi_cookies.report_error('Cookie "'+e+'" truncated ('+o.length+"). Max single-cookie length is "+usi_cookies.max_cookie_length),o=o.substring(0,usi_cookies.max_cookie_length-1))}usi_cookies.create_cookie(e,o,i)}},set_json:function(e,o,i,n){var t=JSON.stringify(o).replace(/^"/,"").replace(/"$/,"");usi_cookies.set(e,t,i,n)},flush:function(e){e=e||"usi_";var o,i,n,t=document.cookie.split(";");for(o=0;o<t.length;o++)0==(i=t[o]).trim().toLowerCase().indexOf(e)&&(n=i.trim().split("=")[0],usi_cookies.del(n));usi_cookies.flush_window_name(e)},print:function(){for(var e=document.cookie.split(";"),o="",i=0;i<e.length;i++){var n=e[i];0==n.trim().toLowerCase().indexOf("usi_")&&(console.log(n.trim()+" (cookie)"),o+=","+n.trim().toLowerCase().split("=")[0]+",")}var t=(window.top||window).name.split(";");for(i=0;i<t.length;i++){var r=t[i].split("=");if(3==r.length&&0==r[0].indexOf("usi_")&&-1==o.indexOf(","+r[0]+",")){var s=r[1];-1!=s.indexOf("USIEQLS")&&(s=s.replace(new RegExp("USIEQLS","g"),"=")),-1!=s.indexOf("USIPRNS")&&(s=s.replace(new RegExp("USIPRNS","g"),";")),console.log(r[0]+"="+s+" (window.name)")}}},value_exists:function(){var e,o;for(e=0;e<arguments.length;e++)if(""===(o=usi_cookies.get(arguments[e]))||null===o||"null"===o||"undefined"===o)return!1;return!0},report_error:function(e){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(e)}},"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.gup))try{""!=usi_commons.gup("usi_email_id")&&usi_cookies.set("usi_email_id",usi_commons.gup("usi_email_id").split(".")[0],Number(usi_commons.gup("usi_email_id").split(".")[1]),!0)}catch(e){usi_commons.report_error(e)}
"undefined"==typeof usi_dom&&(usi_dom={},usi_dom.get_elements=function(e,t){return t=t||document,Array.prototype.slice.call(t.querySelectorAll(e))},usi_dom.count_elements=function(e,t){return t=t||document,usi_dom.get_elements(e,t).length},usi_dom.get_nth_element=function(e,t,n){var o=null;n=n||document;var r=usi_dom.get_elements(t,n);return r.length>=e&&(o=r[e-1]),o},usi_dom.get_first_element=function(e,t){if(""===(e||""))return null;if(t=t||document,"[object Array]"===Object.prototype.toString.call(e)){for(var n=null,o=0;o<e.length;o++){var r=e[o];if(null!=(n=usi_dom.get_first_element(r,t)))break}return n}return t.querySelector(e)},usi_dom.get_element_text_no_children=function(e,t){var n="";if(null==t&&(t=!1),null!=(e=e||document)&&null!=e.childNodes)for(var o=0;o<e.childNodes.length;++o)3===e.childNodes[o].nodeType&&(n+=e.childNodes[o].textContent);return!0===t&&(n=usi_dom.clean_string(n)),n.trim()},usi_dom.clean_string=function(e){if("string"==typeof e){return(e=(e=(e=(e=(e=(e=(e=e.replace(/[\u2010-\u2015\u2043]/g,"-")).replace(/[\u2018-\u201B]/g,"'")).replace(/[\u201C-\u201F]/g,'"')).replace(/\u2024/g,".")).replace(/\u2025/g,"..")).replace(/\u2026/g,"...")).replace(/\u2044/g,"/")).replace(/[^\x20-\xFF\u0100-\u017F\u0180-\u024F\u20A0-\u20CF]/g,"").trim()}},usi_dom.encode=function(e){if("string"==typeof e){var t=encodeURIComponent(e);return t=t.replace(/[-_.!~*'()]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},usi_dom.get_closest=function(e,t){for(e=e||document,"function"!=typeof Element.prototype.matches&&(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});null!=e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},usi_dom.get_classes=function(e){var t=[];return null!=e&&null!=e.classList&&(t=Array.prototype.slice.call(e.classList)),t},usi_dom.add_class=function(e,t){if(null!=e){var n=usi_dom.get_classes(e);-1===n.indexOf(t)&&(n.push(t),e.className=n.join(" "))}},usi_dom.string_to_decimal=function(e){var t=null;if("string"==typeof e)try{var n=parseFloat(e.replace(/[^0-9\.-]+/g,""));!1===isNaN(n)&&(t=n)}catch(e){usi_commons.log("Error: "+e.message)}return t},usi_dom.string_to_integer=function(e){var t=null;if("string"==typeof e)try{var n=parseInt(e.replace(/[^0-9-]+/g,""));!1===isNaN(n)&&(t=n)}catch(e){usi_commons.log("Error: "+e.message)}return t},usi_dom.get_currency_string_from_content=function(e){if("string"!=typeof e)return"";try{e=e.trim();var t=e.match(/^([^\$]*?)(\$(?:[\,\,]?\d{1,3})+(?:\.\d{2})?)(.*?)$/)||[];return 4===t.length?t[2]:""}catch(e){return usi_commons.log("Error: "+e.message),""}},usi_dom.get_absolute_url=function(){var e;return function(t){return(e=e||document.createElement("a")).href=t,e.href}}(),usi_dom.format_number=function(e,t){var n="";if("number"==typeof e){t=t||0;var o=e.toFixed(t).split(/\./g);if(1==o.length||2==o.length)n=o[0].replace(/./g,function(e,t,n){return t&&"."!==e&&(n.length-t)%3==0?","+e:e}),2==o.length&&(n+="."+o[1])}return n},usi_dom.format_currency=function(e,t,n){var o="";return e=Number(e),!1===isNaN(e)&&("object"==typeof Intl&&"function"==typeof Intl.NumberFormat?(t=t||"en-US",n=n||{style:"currency",currency:"USD"},o=e.toLocaleString(t,n)):o=e),o},usi_dom.to_decimal_places=function(e,t){if(null!=e&&"number"==typeof e&&null!=t&&"number"==typeof t){if(0==t)return parseFloat(Math.round(e));for(var n=10,o=1;o<t;o++)n*=10;return parseFloat(Math.round(e*n)/n)}return null},usi_dom.trim_string=function(e,t,n){return n=n||"",(e=e||"").length>t&&(e=e.substring(0,t),""!==n&&(e+=n)),e},usi_dom.attach_event=function(e,t,n){var o=usi_dom.find_supported_element(e,n);usi_dom.detach_event(e,t,o),o.addEventListener?o.addEventListener(e,t,!1):o.attachEvent("on"+e,t)},usi_dom.detach_event=function(e,t,n){var o=usi_dom.find_supported_element(e,n);o.removeEventListener?o.removeEventListener(e,t,!1):o.detachEvent("on"+e,t)},usi_dom.find_supported_element=function(e,t){return(t=t||document)===window?window:!0===usi_dom.is_event_supported(e,t)?t:t===document?window:usi_dom.find_supported_element(e,document)},usi_dom.is_event_supported=function(e,t){return null!=t&&void 0!==t["on"+e]},usi_dom.is_defined=function(e,t){if(null==e)return!1;if(""===(t||""))return!1;var n=!0,o=e;return t.split(".").forEach(function(e){!0===n&&(null==o||"object"!=typeof o||!1===o.hasOwnProperty(e)?n=!1:o=o[e])}),n},usi_dom.observe=function(e,t,n){var o=location.href,r=window.MutationObserver||window.WebkitMutationObserver;return t=t||{onUrlUpdate:!1,observerOptions:{childList:!0,subtree:!0}},function(e,n){var i=null,u=function(){var e=location.href;t.onUrlUpdate&&e!==o?(n(),o=e):n()};return r?(i=new r(function(e){var r=location.href,i=e[0].addedNodes.length||e[0].removedNodes.length;i&&t.onUrlUpdate&&r!==o?(n(),o=r):i&&n()})).observe(e,t.observerOptions):window.addEventListener&&(e.addEventListener("DOMNodeInserted",u,!1),e.addEventListener("DOMNodeRemoved",u,!1)),i}}(),usi_dom.params_to_object=function(e){var t={};""!=(e||"")&&e.split("&").forEach(function(e){var n=e.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):1===n.length&&(t[decodeURIComponent(n[0])]=null)});return t},usi_dom.object_to_params=function(e){var t=[];if(null!=e)for(var n in e)!0===e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+(null==e[n]?"":encodeURIComponent(e[n])));return t.join("&")},usi_dom.interval_with_timeout=function(e,t,n,o){if("function"!=typeof e)throw new Error("usi_dom.interval_with_timeout(): iterationFunction must be a function");if(null==t)t=function(e){return e};else if("function"!=typeof t)throw new Error("usi_dom.interval_with_timeout(): timeoutCallback must be a function");if(null==n)n=function(e){return e};else if("function"!=typeof n)throw new Error("usi_dom.interval_with_timeout(): completeCallback must be a function");var r=(o=o||{}).intervalMS||20,i=o.timeoutMS||2e3;if("number"!=typeof r)throw new Error("usi_dom.interval_with_timeout(): intervalMS must be a number");if("number"!=typeof i)throw new Error("usi_dom.interval_with_timeout(): timeoutMS must be a number");var u=!1,l=new Date,a=setInterval(function(){var o=new Date-l;if(o>=i)return clearInterval(a),t({elapsedMS:o});!1===u&&(u=!0,e(function(e,t){if(u=!1,!0===e)return clearInterval(a),(t=t||{}).elapsedMS=new Date-l,n(t)}))},r)},usi_dom.load_external_stylesheet=function(e,t,n){if(""!==(e||"")){""===(t||"")&&(t="usi_stylesheet_"+(new Date).getTime());var o={url:e,id:t},r=document.getElementsByTagName("head")[0];if(null!=r){var i=document.createElement("link");i.type="text/css",i.rel="stylesheet",i.id=o.id,i.href=e,usi_dom.attach_event("load",function(){if(null!=n)return n(null,o)},i),r.appendChild(i)}}else if(null!=n)return n(null,o)},usi_dom.ready=function(e){void 0!==document.readyState&&"complete"===document.readyState?e():window.addEventListener?window.addEventListener("load",e,!0):window.attachEvent?window.attachEvent("onload",e):setTimeout(e,5e3)},usi_dom.fit_text=function(e,t){t||(t={});var n={multiLine:!0,minFontSize:.1,maxFontSize:20,widthOnly:!1},o={};for(var r in n)t.hasOwnProperty(r)?o[r]=t[r]:o[r]=n[r];var i=Object.prototype.toString.call(e);function u(e,t){var n,o,r,i,u,l,a,s;r=e.innerHTML,u=parseInt(window.getComputedStyle(e,null).getPropertyValue("font-size"),10),i=function(e){var t=window.getComputedStyle(e,null);return(e.clientWidth-parseInt(t.getPropertyValue("padding-left"),10)-parseInt(t.getPropertyValue("padding-right"),10))/u}(e),o=function(e){var t=window.getComputedStyle(e,null);return(e.clientHeight-parseInt(t.getPropertyValue("padding-top"),10)-parseInt(t.getPropertyValue("padding-bottom"),10))/u}(e),i&&(t.widthOnly||o)||(t.widthOnly?usi_commons.log("Set a static width on the target element "+e.outerHTML):usi_commons.log("Set a static height and width on the target element "+e.outerHTML)),-1===r.indexOf("textFitted")?((n=document.createElement("span")).className="textFitted",n.style.display="inline-block",n.innerHTML=r,e.innerHTML="",e.appendChild(n)):n=e.querySelector("span.textFitted"),t.multiLine||(e.style["white-space"]="nowrap"),l=t.minFontSize,s=t.maxFontSize;for(var c=l,d=1e3;l<=s&&d>0;)d--,a=s+l-.1,n.style.fontSize=a+"em",n.scrollWidth/u<=i&&(t.widthOnly||n.scrollHeight/u<=o)?(c=a,l=a+.1):s=a-.1;n.style.fontSize!==c+"em"&&(n.style.fontSize=c+"em")}"[object Array]"!==i&&"[object NodeList]"!==i&&"[object HTMLCollection]"!==i&&(e=[e]);for(var l=0;l<e.length;l++)u(e[l],o)});

	if (typeof usi_app === 'undefined') {
		usi_app = {};
		usi_app.main = function () {
			usi_app.url = location.href.toLowerCase();
			usi_app.cart = usi_app.url.indexOf("/cart") != -1;
			usi_app.register = usi_app.url.indexOf("/register") != -1;
			if (document.getElementById("cartItemCount") != null) {
				usi_app.cart_items = document.getElementById("cartItemCount").textContent.trim();
			}
			usi_app.checkout = usi_app.url.indexOf("/checkout") != -1;
			usi_app.confirmation = usi_app.url.indexOf("orderconfirmation") != -1;
			if (usi_app.confirmation) {
				if (typeof USI_orderID == "undefined") {
					usi_commons.load_script("https://www.upsellit.com/active/totalwine_pixel.jsp");
				}
				return;
			}
			if (usi_app.url.indexOf('usi_enable') > -1) {
				usi_cookies.set('usi_enable', '1', usi_cookies.expire_time.day);
			}
			if (usi_app.cart) setTimeout("usi_app.scrape_cart()", 1500*1);
			if (usi_app.checkout) {
				usi_app.scrape_checkout();
				usi_app.add_hound_pixel();
			}
			if (usi_app.url.indexOf("quiz") == -1 && usi_cookies.value_exists("usi_prod_pic_1","usi_prod_price_1","usi_prod_name_1")) {
				if (!usi_app.cart) usi_app.load();
			}
		};
		usi_app.scrape_cart = function() {
			if (document.getElementsByClassName("shopping-cart-prodImg").length > 0) {
				usi_cookies.set("usi_prod_pic_1", document.getElementsByClassName("shopping-cart-prodImg")[0].getElementsByTagName("img")[0].src, 24*60*60);
				usi_cookies.set("usi_prod_name_1", document.getElementsByClassName("shopping-cart-prodImg")[0].getElementsByTagName("img")[0].alt, 24*60*60);
				usi_cookies.set("usi_prod_price_1", document.getElementsByClassName("price-text")[0].innerHTML.replace(/[^0-9.]+/g,""), 24*60*60);
			} else {
				for (var i=0; i<document.getElementsByTagName("img").length; i++) {
					if (document.getElementsByTagName("img")[i].getAttribute("class") != null && document.getElementsByTagName("img")[i].getAttribute("class").indexOf("itemImage__") != -1) {
						usi_cookies.set("usi_prod_pic_1", document.getElementsByTagName("img")[i].src, 24*60*60);
						usi_cookies.set("usi_prod_name_1", document.getElementsByTagName("img")[i].alt, 24*60*60);
					}
				}
				for (var i=0; i<document.getElementsByTagName("div").length; i++) {
					if (document.getElementsByTagName("div")[i].getAttribute("class") != null && document.getElementsByTagName("div")[i].getAttribute("class").indexOf("productTotal__") != -1) {
						usi_cookies.set("usi_prod_price_1", document.getElementsByTagName("div")[i].innerHTML.replace(/[^0-9.]+/g,""), 24*60*60);
					}
				}
			}
			if (document.getElementById("globalStoreName_desktop") != null && document.getElementById("globalStoreName_desktop").innerHTML.indexOf(", ") != -1) {
				var usi_state =  document.getElementById("globalStoreName_desktop").innerHTML;
				usi_state = usi_state.substring(usi_state.indexOf(", ")+2, usi_state.length);
				if (usi_state.length == 2) usi_cookies.set("usi_state", usi_state, 24*60*60);
			} else if (document.getElementsByClassName("delivery-content shipping-icon-txt").length > 0) {
				var usi_full_state = document.getElementsByClassName("delivery-content shipping-icon-txt")[0].getElementsByTagName("span")[0].innerHTML;
				usi_state = usi_app.get_abbrv(usi_full_state);
				if (usi_state.length == 2) usi_cookies.set("usi_state", usi_state, 24*60*60);
			} else {
				for (var i=0; i<document.getElementsByTagName("span").length; i++) {
					if (document.getElementsByTagName("span")[i].getAttribute("class") != null && document.getElementsByTagName("span")[i].getAttribute("class").indexOf("shoppingState__") != -1) {
						var usi_full_state = document.getElementsByTagName("span")[i].innerHTML;
						usi_state = usi_app.get_abbrv(usi_full_state);
						if (usi_state.length == 2) usi_cookies.set("usi_state", usi_state, 24*60*60);
					}
				}
			}
			usi_app.load();
		};
		usi_app.add_hound_pixel = function(){
			var buttons = document.getElementsByTagName("button");
			var found = 0;
			for (var i = 0; i < buttons.length; i++) {
				if (buttons[i].textContent.toLowerCase().indexOf("place order") != -1) {
					found = 1;
					buttons[i].addEventListener("click", function(){
						usi_commons.load_script("//www.upsellit.com/hound/pixel.jsp?companyID=3973");
					});
				}
			}
			if (found == 0) {
				setTimeout(usi_app.add_hound_pixel, 1000);
			}
		};
		usi_app.get_abbrv = function(state) {
			if (state=="Alabama") return "AL";
			if (state=="Alaska") return "AK";
			if (state=="Arizona") return "AZ";
			if (state=="Arkansas") return "AR";
			if (state=="California") return "CA";
			if (state=="Colorado") return "CO";
			if (state=="Connecticut") return "CT";
			if (state=="Delaware") return "DE";
			if (state=="Florida") return "FL";
			if (state=="Georgia") return "GA";
			if (state=="Hawaii") return "HI";
			if (state=="Idaho") return "ID";
			if (state=="Illinois") return "IL";
			if (state=="Indiana") return "IN";
			if (state=="Iowa") return "IA";
			if (state=="Kansas") return "KS";
			if (state=="Kentucky") return "KY";
			if (state=="Louisiana") return "LA";
			if (state=="Maine") return "ME";
			if (state=="Maryland") return "MD";
			if (state=="Massachusetts") return "MA";
			if (state=="Michigan") return "MI";
			if (state=="Minnesota") return "MN";
			if (state=="Mississippi") return "MS";
			if (state=="Missouri") return "MO";
			if (state=="Montana") return "MT";
			if (state=="Nebraska") return "NE";
			if (state=="Nevada") return "NV";
			if (state=="New Hampshire") return "NH";
			if (state=="New Jersey") return "NJ";
			if (state=="New Mexico") return "NM";
			if (state=="New York") return "NY";
			if (state=="North Carolina") return "NC";
			if (state=="North Dakota") return "ND";
			if (state=="Ohio") return "OH";
			if (state=="Oklahoma") return "OK";
			if (state=="Oregon") return "OR";
			if (state=="Pennsylvania") return "PA";
			if (state=="Rhode Island") return "RI";
			if (state=="South Carolina") return "SC";
			if (state=="South Dakota") return "SD";
			if (state=="Tennessee") return "TN";
			if (state=="Texas") return "TX";
			if (state=="Utah") return "UT";
			if (state=="Vermont") return "VT";
			if (state=="Virginia") return "VA";
			if (state=="Washington") return "WA";
			if (state=="West Virginia") return "WV";
			if (state=="Wisconsin") return "WI";
			if (state=="Wyoming") return "WY";
			return "";
		};
		usi_app.scrape_checkout = function() {
			if (document.getElementsByClassName("right-nav-pr-mix").length > 0 && document.getElementsByClassName("right-nav-pr-mix")[0].innerHTML.indexOf("$") != -1 && document.getElementsByClassName("right-nav-img").length > 0 && document.getElementsByClassName("right-nav-img")[0].getElementsByTagName("img").length > 0) {
				var usi_img = document.getElementsByClassName("right-nav-img")[0].getElementsByTagName("img")[0].src;
				var usi_name = document.getElementsByClassName("right-nav-img")[0].getElementsByTagName("img")[0].alt;
				var usi_price = document.getElementsByClassName("right-nav-pr-mix")[0].innerHTML;
				usi_price = usi_price.substring(usi_price.indexOf("$")+1, usi_price.length).replace(/[^0-9.]+/g,"");
				usi_cookies.set("usi_prod_pic_1", usi_img, 24*60*60);
				usi_cookies.set("usi_prod_name_1", usi_name, 24*60*60);
				usi_cookies.set("usi_prod_price_1", usi_price, 24*60*60);
				if (document.getElementById("state") != null) usi_cookies.set("usi_state", document.getElementById("state").value, 24*60*60);
				else if (document.getElementsByClassName("anHeaderStore").length > 0) {
					if (document.getElementsByClassName("anHeaderStore")[0].innerHTML.indexOf(";") != -1) {
						var usi_state = document.getElementsByClassName("anHeaderStore")[0].innerHTML;
						usi_state = usi_state.substring(usi_state.indexOf(";")+1, usi_state.length);
						if (usi_state.length == 2) usi_cookies.set("usi_state", usi_state, 24*60*60);
					}
				}
			}
		};
		usi_app.load = function() {
			if (usi_app.cart || usi_app.checkout || (usi_app.register && usi_app.cart_items > 0)) {
				usi_commons.load_precapture("GdNdeJrQnnO05zh06weCBzh", "28069");
			}
		};
		usi_app.check_for_change = function(){
			if (usi_app.current_page == undefined || usi_app.current_page != location.href) {
				usi_app.current_page = location.href;
				usi_dom.ready(function(){
					try {
						usi_app.main();
					} catch (err) {
						usi_commons.report_error(err);
					}
				});
				usi_commons.log("USI: running main");
			}
		};
		setInterval(usi_app.check_for_change, 1000);
	}
}
catch (err) {
	usi_commons.report_error(err);
}
