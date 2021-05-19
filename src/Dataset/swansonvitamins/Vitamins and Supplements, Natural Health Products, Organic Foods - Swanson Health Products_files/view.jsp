if("undefined"==typeof usi_cookies&&(usi_cookies={expire_time:{minute:60,hour:3600,two_hours:7200,four_hours:14400,day:86400,week:604800,two_weeks:1209600,month:2592e3,year:31536e3,never:31536e4},max_cookies_count:15,max_cookie_length:1e3,update_window_name:function(e,o,i){try{var n=-1;if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n=t.getTime()}var r=window.top||window,s=0;null!=o&&-1!=o.indexOf("=")&&(o=o.replace(new RegExp("=","g"),"USIEQLS")),null!=o&&-1!=o.indexOf(";")&&(o=o.replace(new RegExp(";","g"),"USIPRNS"));for(var u=r.name.split(";"),c="",a=0;a<u.length;a++){var l=u[a].split("=");3==l.length?(l[0]==e&&(l[1]=o,l[2]=n,s=1),null!=l[1]&&"null"!=l[1]&&(c+=l[0]+"="+l[1]+"="+l[2]+";")):""!=u[a]&&(c+=u[a]+";")}0==s&&(c+=e+"="+o+"="+n+";"),r.name=c}catch(e){}},flush_window_name:function(e){try{for(var o=window.top||window,i=o.name.split(";"),n="",t=0;t<i.length;t++){var r=i[t].split("=");3==r.length&&(0==r[0].indexOf(e)||(n+=i[t]+";"))}o.name=n}catch(e){}},get_from_window_name:function(e){try{for(var o=(window.top||window).name.split(";"),i=0;i<o.length;i++){var n=o[i].split("=");if(3==n.length){if(n[0]==e)if(-1!=(t=n[1]).indexOf("USIEQLS")&&(t=t.replace(new RegExp("USIEQLS","g"),"=")),-1!=t.indexOf("USIPRNS")&&(t=t.replace(new RegExp("USIPRNS","g"),";")),!("-1"!=n[2]&&usi_cookies.datediff(n[2])<0))return"undefined"==typeof usi_cookieless&&usi_cookies.create_cookie(n[0],t,usi_cookies.datediff(n[2])/1e3),usi_results=[t,n[2]],usi_results}else if(2==n.length){var t;if(n[0]==e)return-1!=(t=n[1]).indexOf("USIEQLS")&&(t=t.replace(new RegExp("USIEQLS","g"),"=")),-1!=t.indexOf("USIPRNS")&&(t=t.replace(new RegExp("USIPRNS","g"),";")),usi_results=[t,(new Date).getTime()+6048e5],usi_results}}}catch(e){}return null},datediff:function(e){return e-(new Date).getTime()},count_cookies:function(e){return e=e||"usi_",usi_cookies.search_cookies(e).length},root_domain:function(){try{var e=document.domain.split("."),o=e[e.length-1];if("com"==o||"net"==o||"org"==o||"us"==o||"co"==o||"ca"==o)return e[e.length-2]+"."+e[e.length-1]}catch(e){}return document.domain},create_cookie:function(e,o,i){if(!1!==navigator.cookieEnabled){var n="";if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n="; expires="+t.toGMTString()}var r="samesite=none;";0==location.href.indexOf("https://")&&(r+="secure;");var s=usi_cookies.root_domain();"undefined"!=typeof usi_parent_domain&&-1!=document.domain.indexOf(usi_parent_domain)&&(s=usi_parent_domain),document.cookie=e+"="+encodeURIComponent(o)+n+"; path=/;domain="+s+"; "+r}},read_cookie:function(e){if(!1===navigator.cookieEnabled)return null;for(var o=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var t=i[n];" "==t.charAt(0);)t=t.substring(1,t.length);if(0==t.indexOf(o))return decodeURIComponent(t.substring(o.length,t.length))}return null},del:function(e){usi_cookies.set(e,null,-100)},get:function(e){var o=null,i=usi_cookies.get_from_window_name(e);if(null!=i&&i.length>1)try{o=decodeURIComponent(i[0])}catch(e){return i[0]}else o=usi_cookies.read_cookie(e);return null==o?null:o},get_json:function(e){var o=null,i=usi_cookies.get(e);if(null==i)return null;try{o=JSON.parse(i)}catch(e){i=i.replace(/\\"/g,'"');try{o=JSON.parse(JSON.parse(i))}catch(e){try{o=JSON.parse(i)}catch(e){}}}return o},search_cookies:function(e){e=e||"";var o=[];return document.cookie.split(";").forEach(function(i){var n=i.split("=")[0].trim();""!==e&&0!==n.indexOf(e)||o.push(n)}),o},set:function(e,o,i,n){"undefined"!=typeof usi_nevercookie&&(n=!1),void 0===i&&(i=-1);try{o=o.replace(/(\r\n|\n|\r)/gm,"")}catch(e){}if("undefined"==typeof usi_windownameless&&usi_cookies.update_window_name(e+"",o+"",i),"undefined"==typeof usi_cookieless||n||null==o){if(null!=o){if(null==usi_cookies.read_cookie(e))if(!n)if(usi_cookies.search_cookies("usi_").length+1>usi_cookies.max_cookies_count)return void usi_cookies.report_error('Set cookie "'+e+'" failed. Max cookies count is '+usi_cookies.max_cookies_count);o.length>usi_cookies.max_cookie_length&&(usi_cookies.report_error('Cookie "'+e+'" truncated ('+o.length+"). Max single-cookie length is "+usi_cookies.max_cookie_length),o=o.substring(0,usi_cookies.max_cookie_length-1))}usi_cookies.create_cookie(e,o,i)}},set_json:function(e,o,i,n){var t=JSON.stringify(o).replace(/^"/,"").replace(/"$/,"");usi_cookies.set(e,t,i,n)},flush:function(e){e=e||"usi_";var o,i,n,t=document.cookie.split(";");for(o=0;o<t.length;o++)0==(i=t[o]).trim().toLowerCase().indexOf(e)&&(n=i.trim().split("=")[0],usi_cookies.del(n));usi_cookies.flush_window_name(e)},print:function(){for(var e=document.cookie.split(";"),o="",i=0;i<e.length;i++){var n=e[i];0==n.trim().toLowerCase().indexOf("usi_")&&(console.log(n.trim()+" (cookie)"),o+=","+n.trim().toLowerCase().split("=")[0]+",")}var t=(window.top||window).name.split(";");for(i=0;i<t.length;i++){var r=t[i].split("=");if(3==r.length&&0==r[0].indexOf("usi_")&&-1==o.indexOf(","+r[0]+",")){var s=r[1];-1!=s.indexOf("USIEQLS")&&(s=s.replace(new RegExp("USIEQLS","g"),"=")),-1!=s.indexOf("USIPRNS")&&(s=s.replace(new RegExp("USIPRNS","g"),";")),console.log(r[0]+"="+s+" (window.name)")}}},value_exists:function(){var e,o;for(e=0;e<arguments.length;e++)if(""===(o=usi_cookies.get(arguments[e]))||null===o||"null"===o||"undefined"===o)return!1;return!0},report_error:function(e){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(e)}},"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.gup))try{""!=usi_commons.gup("usi_email_id")&&usi_cookies.set("usi_email_id",usi_commons.gup("usi_email_id").split(".")[0],Number(usi_commons.gup("usi_email_id").split(".")[1]),!0)}catch(e){usi_commons.report_error(e)}
if (typeof usi_js === 'undefined') {
	usi_js = {
		campaign: {
			id: '2227093956655323993460',
			site_id: 26376,
			config_id: 45224,
			company_id: 5050,
			key: 'desktop',
			link: '',
			deep_link: 'https://click.linksynergy.com/deeplink?id=JNLJ1ZP2xGI&mid=43671&murl=',
			domains: '',
			host: 'https://www.upsellit.com',
			images: 'https://upsellit-14516.kxcdn.com',
			launch_cookie: 1209600,
			click_cookie: 0,
			sale_window: 1209600,
			force_load: (location.href.indexOf('usi_force=') !== -1 || typeof usi_force !== 'undefined'),
			email_id: '26378',
			coupon: 'dynamic:15p-toprated',
			reuse_coupon: false,
			cookie_append: ''
		},
		launch: {
			enabled: true,
			suppress: false,
			sales_suppression: false,
			launched: false,
			launch_methods: '1,',
			confirm_msg: "",
			suppress_on_back: 0,
			launch_delay: 0,
			content_start: 100,
			exit_area: 29,
			speed_upward: 850,
			time_above_y: 300,
			time_hover_requirement: 500,
			any_trajectory: 0,
			no_pop_quadrant: 8,
			no_mouse_move: 0,
			tab_detection_time: 500,
			backtrap_timestamp_difference: 100,
			backtrap_load_delay: 0,
			backtrap_placement_delay: 50,
			backtrap_check_against_event_state: 1,
			delay_div_placement: 0,
			close_on_esc: 1,
			do_not_encode_deeplink: 1,
			previous_selected: null
		},
		visitor: {
			ip: '68.10.127.219',
			country: 'us',
			city: 'Norfolk',
			state: 'VA',
			zip: '23518'
		},
		machine: {
			is_mobile: (/iphone|ipod|ipad|android|blackberry|iemobile/i).test(navigator.userAgent.toLowerCase()),
			is_tablet: (/tablet|ipad/i).test(navigator.userAgent.toLowerCase()),
			is_mac: navigator.platform.toUpperCase().indexOf('MAC')>=0,
			is_chrome_iphone: (/iphone|ipod|ipad/i).test(navigator.userAgent.toLowerCase()) && (/crios/i).test(navigator.userAgent.toLowerCase())
		},
		display_vars: {
			width: '743px',
			height: '542px',
			top: '',
			left: '',
			right: '',
			bottom: '',
			mobilefit: 0,
			background: "/chatskins/5050/SwansonHealth-LC-9-2018-dsktp-v3BG.png",
			p1: "/chatskins/5050/SwansonHealth-LC-9-2018-dsktp-v2P1.png",
			p2: "/chatskins/5050/SwansonHealth-LC-9-2018-dsktp-v2P2.png",
			brand_link: '',
			emailsuccess: "/images/validate-success.png",
			emailerror: "/images/validate-error.png",
			transition_speed: 500.0,
			countdown: '',
			enable_shadow: 1,
			shadow_opacity: 50,
			shadow_close_on_click: 1,
			shadow_transition_css: '#usi_shadow {background-color:#000000; opacity: 0.5;filter: alpha(opacity=50);} #usi_shadow.usi_show_shadow_css {display:block;visibility:visible;} #usi_shadow.usi_hide_shadow_css {display:none;visibility:hidden;}',
			shadow_css: '#usi_shadow {background-color:#000000; opacity: 0.5;filter: alpha(opacity=50);} #usi_shadow.usi_show_shadow_css {display:block;visibility:visible;} #usi_shadow.usi_hide_shadow_css {display:none;visibility:hidden;}',
			display_css: ".usi_display {left:50%;margin-left:-371px;top:50%;margin-top:-271px;width:743px;height:542px;}#usi_close { position:absolute;left:85%;top:0px;width:15%;height:15%;z-index:2000000300;cursor:pointer;border:none;background:none;margin:0;padding:0; } #usi_content { position:absolute;left:0px;top:0px;width:100%;height:100%;z-index:2000000200; } #usi_background { position:absolute;left:0px;top:0px;width:100%;height:100%;z-index:2000000100; } #usi_page { position:absolute;left:0px;top:0px;width:100%;height:100%;z-index:2000000150; } .usi_display * {padding:0 0 0 0;margin:0 0 0 0;color:#000000;font-weight:normal;font-size:12pt;text-decoration:none;line-height:12pt;box-shadow: none;border: none; outline: none;text-align: left;font-family: Helvetica, Arial, sans-serif;float:none;} .usi_quickhide_css {display:none;visibility:hidden;} button#usi_close, button#usi_close:hover, button#usi_close:active, button#usi_close:focus { background:none;border:none;cursor:pointer; }.usi_sr_only { position: absolute !important; clip: rect(1px 1px 1px 1px); clip: rect(1px, 1px, 1px, 1px); }",
			transition_css: '.usi_display.usi_show_css {transition:transform 0.5s ease; transform: translate(0px, 0px); } .usi_display.usi_hide_css {transition:transform 0.5s ease; transform: translate(0px, -2000px); }',
			notransition_css: '.usi_display.usi_show_css {display:block;visibility:visible;} .usi_display.usi_hide_css {display:none;visibility:hidden;}',
			css: ".usi_display * {  font-size: 1em;  line-height: 1;  box-sizing: border-box;}.usi_display [aria-hidden=true] {  max-height: inherit !important;  visibility: inherit !important;}#usi_background img {  max-width: 100%;  max-height: 100%;}#usi_page img {  max-width: 100%;  max-height: 100%;}#usi_close {  position:absolute;  left: 75% !important;  top: 0;  width: 12% !important;  height: 15%;  z-index:2000000300; }/* Submit Button */.usi_submitbutton:hover, .usi_submitbutton:active, .usi_submitbutton:focus {  background: none !important;  border: none !important;  outline: none !important;  box-shadow: none !important;}.usi_submitbutton {  position: absolute;  top: 74%;  left: 27%;  width: 46.5%;  height: 14%;  display: inline-block;  background: none;  border: none;  margin: 0;  padding: 0;  cursor: pointer;  max-height: inherit;  outline: none;}/* Lead Capture */#usi_email_container {  position: absolute;  top: 64%;  left: 27%;  width: 46%;  height: 8%;  padding-left: 8%;}#usi_email {font-style: normal; box-shadow: none; padding: 2% 8% 0% 20%; width: 100%; height: 100%; border: none; outline: none; background-color: transparent; color: #666; text-align: left; font-size: 12pt;}#usi_email::-ms-clear {  display: none;}#usi_email_good_container {  position: absolute;  top: 0;  bottom: 0;  margin: auto;  right: 2%;  width: 14px;  height: 14px;}/* Disclaimer */.usi_disclaimer {  position: absolute;  top: 91%;  left: 0%;  width: 100%;  text-align: center;  color: #666;  font-size: .7em;}.usi_disclaimer a {  text-align: center;  color: #666;  font-size: 1em;  text-decoration: underline !important;}"
		},
		timers: {
			display_timer: -1,
			verify_email_loop_id: -1
		},
		mouse_info: {
			trajectory: 'down',
			on_page_timestamp: -1,
			last_mouse_y: -1,
			last_mouse_x: -1,
			is_runnable: 1,
			is_mouse_over_page: 0,
			last_seen_timestamp: -1,
			total_time_over_page: 0
		},
		page_status: {
			focus: 'focus',
			focused_at_exit: 0,
			resize_happened: 0,
			back_set: false,
			location_hash: "",
			back_state_set_time: -1,
			script_id: 0,
			back_means_exit: 1,
			email_last: "",
			error_reported: 0,
			at_page_bottom: false,
			unload_called: false
		},
		REACTIVE_METHOD: '0',
		PREDICTIVE_METHOD: '1',
		PROACTIVE_METHOD: '3',
		BACKBUTTON_TRAP: '5',
		SCROLL_BOTTOM: '7',
		privacy_disclaimer_options: {},
		trace_items:[],
		add_class: function (element, className) {
			if (element != null) {
				var classes = usi_js.get_classes(element);
				if (classes.indexOf(className) === -1) {
					classes.push(className);
					element.className = classes.join(' ');
				}
			}
		},
		attach_event:function(eventname, func, node) {
			usi_js.trace('attach_event(' + eventname + ')');
			var attachToNode = usi_js.find_supported_node(eventname, node);
			if (attachToNode.addEventListener) {
				attachToNode.addEventListener(eventname, func, false);
			} else {
				attachToNode.attachEvent('on' + eventname, func);
			}
		},
		build:function() {
			usi_js.trace('build()');
			if (typeof(usi_commons) !== "undefined" && typeof(usi_commons.cdn) !== "undefined") usi_js.campaign.images = usi_commons.cdn;
			if (location.href.indexOf("usi_flush") != -1) usi_cookies.flush();
			if (location.href.indexOf("usi_print") != -1) usi_cookies.print();
			if (!usi_js.display_allowed(true)) return;
			window.onerror = usi_js.error_report;
			if (usi_js.launch.delay_div_placement == 0) {
				if (usi_js.transitions_allowed())
					usi_js.place_css(usi_js.display_vars.display_css + usi_js.display_vars.shadow_transition_css + usi_js.display_vars.transition_css);
				else
					usi_js.place_css(usi_js.display_vars.display_css + usi_js.display_vars.shadow_css + usi_js.display_vars.notransition_css);
				usi_js.place_div();
			}
			usi_js.set_triggers();
			usi_js.campaign.tracking_link = usi_js.campaign.host+'/link.jsp?id='+usi_js.campaign.id+'&cid='+usi_js.campaign.company_id+'&sid='+usi_js.campaign.site_id+'&duration='+usi_js.campaign.sale_window;
			if (location.href.indexOf("usi_launch") != -1) usi_js.display(true);
		},
		check_blur_default:function(elmt) {
			usi_js.trace('check_blur_default()');
			if (elmt.value == "") {
				elmt.value = elmt.title;
				elmt.style.color = "#000000";
			}
		},
		check_data_exists:function(obj) {
			usi_js.trace('check_data_exists()');
			for (var i in obj) {
				if (obj[i] == null && obj.hasOwnProperty(i)) {
					usi_js.launch.suppress = true;
				}
			}
		},
		check_focus_default:function(elmt) {
			usi_js.trace('check_focus_default()');
			if (elmt.title == elmt.value) {
				elmt.value = "";
				elmt.style.color = "#000000";
			}
		},
		check_for_change_events:function(iterations) {
			usi_js.trace('check_for_change_events()');
			var usi_display = document.getElementById("usi_display");
			var usi_shadow = document.getElementById("usi_shadow");
			usi_js.log((new Date()).getTime() + " check_for_change_events: usi_js.page_status.focus: " + usi_js.page_status.focus + ", usi_js.page_status.resize_happened: " + usi_js.page_status.resize_happened);
			if (usi_js.page_status.focus == 'blur' || usi_js.page_status.resize_happened == 1) {
				usi_js.log("check_for_change_events: hiding because of blur");
				usi_cookies.del("usi_launched"+usi_js.campaign.cookie_append);
				setTimeout(usi_js.launch_cookie_del, 1500);
				usi_js.launch.launched = false;
				if (usi_display != null) usi_display.className = "usi_quickhide_css usi_display";
				if (usi_shadow != null) usi_shadow.className = "usi_quickhide_css usi_display";
			} else if (iterations > 0) {
				usi_js.log("check_for_change_events iterations: " + iterations);
				setTimeout(function(){
					usi_js.check_for_change_events(iterations - 1);
				}, 250);
			}
		},
		cleanup:function() {
			usi_js.trace('cleanup()');
			var usi_display = document.getElementById("usi_display");
			var usi_shadow = document.getElementById("usi_shadow");
			var usi_style_tag = document.getElementsByClassName("usi_style_tag");
			usi_js.stop_mouse_monitor();
			usi_js.stop_focus_monitor();
			usi_js.stop_timers();
			if (usi_display != null && usi_display.parentNode != null) {
				usi_display.parentNode.removeChild(usi_display);
			}
			if (usi_shadow != null && usi_shadow.parentNode != null) {
				usi_shadow.parentNode.removeChild(usi_shadow);
			}
			if (typeof(usi_js.countdown_vars) != "undefined") {
				clearInterval(usi_js.countdown_vars.timer_id);
			}
			if (typeof usi_commons != "undefined") {
				usi_commons.last_view = "";
			}
			var itrs = 0;
			while (itrs < 10 && usi_style_tag.length) {
				itrs++;
				usi_style_tag[0].parentNode.removeChild(usi_style_tag[0]);
			}
			usi_js.detach_event("popstate", usi_js.check_back_state, window);
			delete usi_js;
		},
		close:function() {
			usi_js.trace('close()');
			if (!usi_js.pre_close()) return;
			usi_js.remove_display_div();
			usi_js.remove_shadow_div();
			if (usi_js.launch.close_on_esc == 1) usi_js.detach_event("keyup", usi_js.monitor_for_esc);
			usi_js.detach_event("orientationchange", usi_js.mobilefit_delay, window);
			usi_js.detach_event("resize", usi_js.mobilefit_delay, window);
			usi_js.post_close();
			usi_js.post_close = function() {};
			if (usi_js.launch.previous_selected != null) {
				usi_js.launch.previous_selected.focus();
			}
		},
		countdown_initiate:function(str) {
			usi_js.trace('countdown_initiate()');
			if (str == "eod" || str.indexOf("-") != -1) usi_js.countdown_to(str);
			else if (str.split(":").length == 4) usi_js.countdown(str.split(":")[0], str.split(":")[1], str.split(":")[2], str.split(":")[3]);
			else if (str.split(":").length == 3) usi_js.countdown(0, str.split(":")[0], str.split(":")[1], str.split(":")[2]);
			else if (str.split(":").length == 2) usi_js.countdown(0, 0, str.split(":")[0], str.split(":")[1]);
			else if (str.split(":").length == 1) usi_js.countdown(0, 0, 0, str.split(":")[0]);
		},
		countdown_to:function(date) {
			usi_js.trace('countdown_to()');
			usi_js.load_js("utility/countdown.jsp?date="+encodeURIComponent(date));
		},
		countdown_finished:function() {
			usi_js.trace('countdown_finished()');
		},
		countdown:function(d, h, m, s) {
			usi_js.trace('countdown()');
			if (typeof(usi_js.countdown_vars) != "undefined") {
				clearInterval(usi_js.countdown_vars.timer_id);
			}
			usi_js.countdown_vars = {};
			d = parseInt(d,10);
			h = parseInt(h,10);
			m = parseInt(m,10);
			s = parseInt(s,10);
			if(d < 0 || h < 0 || m < 0 || s <0 || isNaN(d) || isNaN(h) || isNaN(m) || isNaN(s)) { return; }

			usi_js.countdown_vars.days = d;
			usi_js.countdown_vars.hours = h;
			usi_js.countdown_vars.minutes = m;
			usi_js.countdown_vars.seconds = s;
			usi_js.countdown_vars.updateTimer = function(days,hrs,mins,secs) {
				if (document.getElementById("usi_days") != null) document.getElementById("usi_days").innerHTML = (days < 10 ? days : days);
				if (document.getElementById("usi_hours") != null) document.getElementById("usi_hours").innerHTML = (hrs < 10 ? '0'+hrs : hrs);
				if (document.getElementById("usi_minutes") != null) document.getElementById("usi_minutes").innerHTML = (mins < 10 ? '0'+mins : mins);
				if (document.getElementById("usi_seconds") != null) document.getElementById("usi_seconds").innerHTML = (secs < 10 ? '0'+secs : secs);
			};
			usi_js.countdown_vars.updateTimer(d, h, m, s);
			usi_js.countdown_vars.doCountDown = function() {
				if(usi_js.countdown_vars.seconds == 0) {
					if(usi_js.countdown_vars.minutes == 0) {
						if(usi_js.countdown_vars.hours == 0) {
							if(usi_js.countdown_vars.days == 0) {
								clearInterval(usi_js.countdown_vars.samay);
								usi_js.countdown_finished();
								return;
							} else {
								usi_js.countdown_vars.hours=23;
								usi_js.countdown_vars.minutes=59;
								usi_js.countdown_vars.seconds=60;
								usi_js.countdown_vars.days--;
							}
						} else {
							usi_js.countdown_vars.minutes=59;
							usi_js.countdown_vars.seconds=60;
							usi_js.countdown_vars.hours--;
						}
					} else {
						usi_js.countdown_vars.seconds=60;
						usi_js.countdown_vars.minutes--;
					}
				}
				usi_js.countdown_vars.seconds--;
				usi_js.countdown_vars.updateTimer(usi_js.countdown_vars.days,usi_js.countdown_vars.hours,usi_js.countdown_vars.minutes,usi_js.countdown_vars.seconds);
			};
			usi_js.countdown_vars.timer_id = setInterval(usi_js.countdown_vars.doCountDown,1000);
		},
		custom_alert:function(msg) {
			alert(msg);
		},
		current_time:function() {
			var d = new Date();
			return d.getTime();
		},
		deep_link:function(destination) {
			usi_js.trace('deep_link()');
			if (usi_js.campaign.click_cookie > 0) usi_cookies.set('usi_launched' + usi_js.campaign.cookie_append, 't' + usi_js.current_time(), usi_js.campaign.click_cookie, true);
			usi_cookies.set("usi_click_id", usi_js.campaign.id, usi_js.campaign.sale_window, true);
			top.location.href = usi_js.get_deep_link(destination);
		},
		deep_link_new_window:function(destination) {
			usi_js.trace('deep_link()');
			if (usi_js.campaign.click_cookie > 0) usi_cookies.set('usi_launched' + usi_js.campaign.cookie_append, 't' + usi_js.current_time(), usi_js.campaign.click_cookie, true);
			usi_cookies.set("usi_click_id", usi_js.campaign.id, usi_js.campaign.sale_window, true);
			window.open(usi_js.get_deep_link(destination));
		},
		launch_cookie_set:function() {
			usi_cookies.set("usi_launched"+usi_js.campaign.cookie_append, "t"+usi_js.current_time(), usi_js.campaign.launch_cookie, true);
		},
		launch_cookie_del:function() {
			usi_cookies.del("usi_launched"+usi_js.campaign.cookie_append);
		},
		detach_event:function(eventname, func, node) {
			usi_js.trace('detach_event(' + eventname + ')');
			var removeFromNode = usi_js.find_supported_node(eventname, node);
			if (removeFromNode.removeEventListener) {
				removeFromNode.removeEventListener(eventname, func, false);
			} else {
				removeFromNode.detachEvent('on' + eventname, func);
			}
		},
		display_allowed:function(aggressive) {
			usi_js.trace('display_allowed()');
			if (usi_js.launch.launched) {
				usi_js.log("display_allowed: not launching because already launched");
				return false;
			} else if (!usi_js.launch.enabled) {
				usi_js.log("display_allowed: not launching because enabled == false");
				return false;
			} else if (!usi_js.campaign.force_load && usi_js.launch.sales_suppression) {
				usi_js.log("display_allowed: not launching because sales_suppression == true");
				return false;
			} else if (!usi_js.campaign.force_load && typeof(usi_pixel) !== "undefined") {
				usi_js.log("display_allowed: not launching because usi_pixel on the page");
				return false;
			} else if (!aggressive && usi_js.launch.suppress) {
				usi_js.log("display_allowed: not launching because suppress == true");
				return false;
			} else if (!usi_js.pre_display()) {
				usi_js.log("display_allowed: not launching because of pre_display check");
				return false;
			} else if (!aggressive && usi_js.mouse_info.is_mouse_over_page == 1 && usi_js.launch.launch_methods.indexOf(usi_js.PROACTIVE_METHOD) != -1) {
				usi_js.log("display_allowed: not launching because mouse is over page");
				return false;
			} else if (!usi_js.campaign.force_load && usi_cookies.get("usi_launched"+usi_js.campaign.cookie_append) != null) {
				usi_js.log("display_allowed: not launching because launch suppressed");
				return false;
			} else if (!usi_js.campaign.force_load && usi_cookies.get("usi_sale") != null) {
				usi_js.log("display_allowed: not launching because sale suppressed");
				return false;
			} else if (!usi_js.campaign.force_load && usi_cookies.get("usi_suppress"+usi_js.campaign.cookie_append) != null) {
				usi_js.log("display_allowed: not launching because cookie suppressed");
				return false;
			} else if (usi_js.launch.launch_methods.indexOf(usi_js.SCROLL_BOTTOM) > -1 && !usi_js.page_status.at_page_bottom) {
				usi_js.log('display_allowed: not launching because not at bottom of page');
				return false;
			}
			return true;
		},
		display:function(aggressive) {
			usi_js.trace('display()');
			usi_js.launch.previous_selected = document.activeElement;
			if (usi_js.launch.delay_div_placement == 1) {
				if (usi_js.transitions_allowed())
					usi_js.place_css(usi_js.display_vars.display_css + usi_js.display_vars.shadow_transition_css + usi_js.display_vars.transition_css);
				else
					usi_js.place_css(usi_js.display_vars.display_css + usi_js.display_vars.shadow_css + usi_js.display_vars.notransition_css);
				usi_js.place_div();
			}
			var usi_display = document.getElementById("usi_display");
			var usi_close = document.getElementById("usi_close");
			if (usi_close != null) usi_js.attach_event("click", usi_js.close, usi_close);
			if (!usi_js.display_allowed(aggressive)) return;
			if (usi_display != null) {
				usi_js.launch.launched = true;
				usi_display.style.display = 'block';
				setTimeout(function(){
					usi_js.remove_class(usi_display, 'usi_hide_css');
					usi_js.remove_class(usi_display, 'usi_quickhide_css');
					usi_js.add_class(usi_display, 'usi_show_css');
				}, 20);
				if (usi_js.display_vars.enable_shadow > 0) {
					usi_js.drop_shadow();
				}
			}
			usi_js.load_js('load.jsp?id='+usi_js.campaign.id+'&sid='+usi_js.campaign.site_id+'&url='+encodeURIComponent(location.href));
			if (usi_js.campaign.launch_cookie != 0) setTimeout(usi_js.launch_cookie_set, 1500);
			usi_js.remove_onbeforeunload();
			if (usi_js.page_status.focused_at_exit == 1 && usi_js.launch.launch_methods.indexOf(usi_js.PREDICTIVE_METHOD) != -1) { usi_js.start_tab_detection(); }
			if (usi_js.display_vars.p2 != "") usi_js.preload_img(usi_js.campaign.images+usi_js.display_vars.p2);
			usi_js.timers.verify_email_loop_id = setInterval(usi_js.verify_email_loop, 1000);
			if (usi_js.display_vars.mobilefit == 1) {
				usi_js.attach_event("orientationchange", usi_js.mobilefit_delay, window);
				usi_js.attach_event("resize", usi_js.mobilefit_delay, window);
				usi_js.mobilefit();
			} else {
				usi_js.fix_to_top();
			}
			if (usi_js.launch.close_on_esc == 1) usi_js.attach_event("keyup", usi_js.monitor_for_esc);
			usi_js.post_display();
			usi_js.focus_proper_element();
			usi_js.place_alt();
			if (usi_js.display_vars.countdown != "") { usi_js.countdown_initiate(usi_js.display_vars.countdown); }
		},
		drop_shadow:function() {
			usi_js.trace('drop_shadow()');
			if (document.getElementById("usi_shadow") == null) {
				var shadow_div = document.createElement('div');
				shadow_div.setAttribute('id',"usi_shadow");
				shadow_div.style.zIndex = 2000000000;
				shadow_div.style.left = '0px';
				shadow_div.style.top = '0px';
				shadow_div.style.width = '100%';
				shadow_div.style.height = '100%';
				shadow_div.style.position = 'fixed';
				shadow_div.className = "usi_hide_shadow_css";
				document.getElementsByTagName('body')[0].appendChild(shadow_div);
				if (!usi_js.machine.is_mobile && usi_js.display_vars.brand_link != "") {
					usi_js.place_css('.USI_bottom_powered_by{left:0px;bottom:20px;z-index:2000000002;display:block;visibility: visible;position:fixed;_position:absolute;_top:expression(document.body.scrollTop+document.body.clientHeight-this.clientHeight);}');
					var usi_bottom_powered=document.createElement("div");
					usi_bottom_powered.innerHTML = '<div class="USI_bottom_powered_by" id="usi_bottom_powered_by"><a target="_new" href="'+usi_js.display_vars.brand_link+'?'+document.domain+'"><img src="'+usi_js.campaign.images+'/images/upsellitpoweredby2.png" alt="Powered by USI" border="0" onerror="usi_js.error_report_image(event, this);"/></a></div>';
					shadow_div.appendChild(usi_bottom_powered);
				}
				setTimeout(function(){
					document.getElementById("usi_shadow").className = "usi_show_shadow_css";
				}, 20);
				if (usi_js.display_vars.shadow_close_on_click == 1 || usi_js.machine.is_mobile) {
					setTimeout(function () {
						usi_js.set_shadow_click_close();
					}, 2000);
				}
			} else {
				setTimeout(function(){
					document.getElementById("usi_shadow").className = "usi_show_shadow_css";
				}, 20);
			}
		},
		error_report:function(usi_msg, usi_url, usi_linenumber) {
			usi_js.trace('error_report()');
			if (usi_url.indexOf("upsellit.com") != -1) {
				if(usi_js.page_status.error_reported == 0) {
					usi_js.page_status.error_reported = 1;
					usi_js.load_js('err.jsp?oops='+encodeURIComponent(usi_msg)+'-'+encodeURIComponent(usi_url)+'-'+encodeURIComponent(usi_linenumber));
				}
			}
			return true;
		},
		error_report_image:function(event, img) {
			usi_js.trace('error_report_image()');
			usi_js.launch.enabled = false;
			usi_js.launch.suppress = true;
			return true;
		},
		escape_quotes: function(string){
			return string.replace(/"/g, '\\"').replace(/'/g, "\\'");
		},
		find_supported_node:function(eventname, node) {
			node = (node || document);
			if (node === window) {
				return window;
			} else if (usi_js.is_event_supported(eventname, node) === true) {
				return node;
			} else {
				if (node === document) {
					return window;
				} else {
					return usi_js.find_supported_node(eventname, document);
				}
			}
		},
		fix_to_top:function() {
			usi_js.trace('fix_to_top()');
			var usi_display = document.getElementById("usi_display");
			if (window.innerHeight < Number(usi_js.display_vars.height.replace("px",""))) {
				usi_display.style.position = "absolute";
				usi_display.style.top = "0px";
				usi_display.style.marginTop="0px";
			}
		},
		focus_proper_element:function() {
			
			try {
				if (document.getElementById("usi_submitbutton") != null) {
					document.getElementById("usi_submitbutton").focus();
				} else if (document.getElementsByClassName("usi_submitbutton").length > 0) {
					document.getElementsByClassName("usi_submitbutton")[0].focus();
				}
			} catch(e) {}
			
		},
		get_classes: function (element) {
			var classes = [];
			if (element != null && element.classList != null) {
				classes = Array.prototype.slice.call(element.classList);
			}
			return classes;
		},
		get_hash:function() {
			if (location.href.indexOf("#") == -1) return "";
			var usi_hash = location.href.substring(location.href.indexOf("#")+1, location.href.length);
			if (usi_hash == "") return "usi_blank";
			return usi_hash;
		},
		get_deep_link:function(destination) {
			usi_js.trace('get_deep_link()');
			if ((destination || '') === '') {
				destination = location.href;
			}
			var usi_url = encodeURIComponent(usi_js.campaign.deep_link + encodeURIComponent(destination));
			if (usi_js.launch.do_not_encode_deeplink == 1) {
				usi_url = encodeURIComponent(usi_js.campaign.deep_link + destination);
			}
			var redirectLink = usi_js.campaign.tracking_link+"&url="+usi_url;
			usi_js.trace('redirectLink: ' + redirectLink);
			return redirectLink;
		},
		get_session:function() {
			usi_js.trace('get_session()');
			var sess = null;
			if (usi_cookies.get("usi_sess") != null) {
				sess = usi_cookies.get("usi_sess");
			} else {
				sess = "usi_sess_"+usi_js.campaign.site_id +"_"+ Math.round(1000 * Math.random()) + "_" + (new Date()).getTime();
				usi_cookies.set("usi_sess", sess, 30*24*60*60, true);
			}
			return sess;
		},
		is_event_supported:function(eventname, node) {
			return (node != null && typeof node['on' + eventname] !== 'undefined');
		},
		link:function(destination) {
			usi_js.trace('link()');
			if (usi_js.campaign.click_cookie > 0) usi_cookies.set("usi_launched"+usi_js.campaign.cookie_append, "t"+usi_js.current_time(), usi_js.campaign.click_cookie, true);
			usi_cookies.set("usi_click_id", usi_js.campaign.id, usi_js.campaign.sale_window, true);
			if (!destination) destination = usi_js.campaign.link;
			if ((!destination || destination == "") && usi_js.campaign.deep_link != "") usi_js.deep_link();
			else if (!destination || destination == "") usi_js.link_clicked();
			else top.location.href = usi_js.campaign.tracking_link+"&url="+encodeURIComponent(destination);
		},
		link_new_window:function(destination) {
			usi_js.trace('link()');
			if (usi_js.campaign.click_cookie > 0) usi_cookies.set("usi_launched"+usi_js.campaign.cookie_append, "t"+usi_js.current_time(), usi_js.campaign.click_cookie, true);
			usi_cookies.set("usi_click_id", usi_js.campaign.id, usi_js.campaign.sale_window, true);
			if (!destination) destination = usi_js.campaign.link;
			if ((!destination || destination == "") && usi_js.campaign.deep_link != "") usi_js.deep_link();
			else if (!destination || destination == "") usi_js.link_clicked();
			else window.open(usi_js.campaign.tracking_link+"&url="+encodeURIComponent(destination));
		},
		link_callback:function() {
			usi_js.link_callback = function() {};
			usi_js.trace('link_callback()');
			usi_js.close();
		},
		link_clicked:function() {
			usi_js.trace('link_clicked()');
			usi_cookies.set("usi_click_id", usi_js.campaign.id, usi_js.campaign.sale_window, true);
			if (usi_js.campaign.click_cookie > 0) usi_cookies.set("usi_launched"+usi_js.campaign.cookie_append, "t"+usi_js.current_time(), usi_js.campaign.click_cookie, true);
			usi_js.load_js(usi_js.campaign.tracking_link+"&ajax=1");
		},
		link_injection:function(destination, callback) {
			usi_js.trace('link_injection()');
			if (!destination && usi_js.campaign.link != "") {
				destination = usi_js.campaign.link;
			} else if (!destination && usi_js.campaign.deep_link != "") {
				destination = usi_js.campaign.deep_link + encodeURIComponent(location.href);
				if (usi_js.launch.do_not_encode_deeplink == 1) {
					destination = usi_js.campaign.deep_link + location.href;
				}
			}
			var iframe = document.createElement("iframe");
			iframe.style.width = "1px";
			iframe.style.height = "1px";
			iframe.src = destination;
			if (typeof callback == "function") iframe.onload = callback;
			document.getElementsByTagName('body')[0].appendChild(iframe);
			usi_js.link_clicked();
		},
		load_js:function(js_url) {
			usi_js.trace('load_js(' + js_url + ')');
			usi_js.page_status.script_id++;
			var USI_headID = document.getElementsByTagName("head")[0];
			var USI_dynScript = document.createElement("script");
			USI_dynScript.setAttribute("id","usi_AJAXScript"+usi_js.page_status.script_id);
			USI_dynScript.setAttribute("type","text/javascript");
			if (js_url.indexOf("http") == 0) {
				USI_dynScript.setAttribute("src",js_url);
			} else {
				USI_dynScript.setAttribute("src",usi_js.campaign.host+"/"+js_url);
			}
			USI_headID.appendChild(USI_dynScript);
		},
		load_page:function(usi_page) {
			usi_js.trace('load_page()');
			var usi_change_made = 0;
			if (document.getElementById("usi_page") != null) {
				if (typeof(usi_js.display_vars["p"+usi_page]) != "undefined") {
					document.getElementById("usi_page").innerHTML = '<img src="'+usi_js.campaign.images+usi_js.display_vars["p"+usi_page]+'" aria-hidden="true" alt="" style="width:100%;height:100%;" onerror="usi_js.error_report_image(event, this);"/>';
					usi_change_made = 1;
				}
			}
			if (document.getElementById('usi_content') != null) {
				if (typeof(usi_js.display_vars["p"+usi_page+"_html"]) == "string") {
					document.getElementById('usi_content').innerHTML = usi_js.display_vars["p"+usi_page+"_html"];
					usi_change_made = 1;
				} else if (typeof(usi_js.display_vars["p"+usi_page+"_html"]) == "function") {
					document.getElementById('usi_content').innerHTML = usi_js.display_vars["p"+usi_page+"_html"]();
					usi_change_made = 1;
				}
			}
			if (usi_change_made == 0 && usi_page == 2) {
				if (usi_js.campaign.link != "") {
					usi_js.link();
				} else if (usi_js.campaign.deep_link != "") {
					usi_js.deep_link();
				}
			}
		},
		log:function(message) {
			
		},
		mobilefit:function() {
			usi_js.trace('mobilefit()');
			var usi_display = document.getElementById("usi_display");
			if (usi_display != null) {
				usi_display.style.height = "1px";
				usi_display.style.width = "1px";
				var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
				var window_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
				var display_height = window_height;
				var display_width = window_width;
				if ((usi_js.display_vars.height || "") != "") {
					display_height = parseInt(usi_js.display_vars.height.replace("px", ""));
				}
				if ((usi_js.display_vars.width || "") != "") {
					display_width = parseInt(usi_js.display_vars.width.replace("px", ""));
				}
				var max_width, max_height, new_font_size;
				if (typeof(usi_js.display_vars.font_size) === "undefined") {
					usi_js.display_vars.font_size = window.getComputedStyle(usi_display).getPropertyValue("font-size").replace("px", "")
				}
				if (usi_js.machine.is_tablet && (window_height > display_height) && (window_width > display_width)) {
					max_width = display_width;
					max_height = display_height;
				} else if ((window_height/window_width) > (display_height/display_width)) {
					max_width = window_width;
					max_height = window_width * (display_height/display_width);
				} else {
					max_width = window_height * (display_width/display_height);
					max_height = window_height;
				}
				new_font_size = max_width / (display_width / usi_js.display_vars.font_size);
				if (usi_js.display_vars.top == "" && usi_js.display_vars.bottom == "") {
					usi_display.style.top = "0px";
					usi_display.style.marginTop = "0px";
				}
				if (usi_js.display_vars.right == "" && usi_js.display_vars.left == "") {
					usi_display.style.left = "50%";
					usi_display.style.marginLeft = "-" + (max_width * .5) + "px";
				}
				usi_display.style.fontSize = new_font_size + "px";
				usi_display.style.height = max_height + "px";
				usi_display.style.width = max_width + "px";
				if (max_width < 145) {
					usi_js.close();
				}
			}
		},
		mobilefit_delay:function() {
			usi_js.trace('mobilefit_delay()');
			setTimeout(usi_js.mobilefit, 500);
		},
		monitor_for_esc:function(event) {
			usi_js.trace('monitor_for_esc()');
			if(event.which == 27) {
				usi_js.log('usi: escape clicked');
				usi_js.close();
			}
		},
		mouse_out:function(event) {
			var e = event.toElement || event.relatedTarget;
			if (e == null || e.nodeName === 'HTML') {
				usi_js.mouse_info.is_mouse_over_page = 0;
				if (usi_js.mouse_info.last_seen_timestamp != -1) usi_js.mouse_info.total_time_over_page += (Number(new Date()) - usi_js.mouse_info.last_seen_timestamp);
				if (usi_js.page_status.unload_called) {
					usi_js.log('usi: suppressing because page is currently unloading');
					return;
				}
				if (usi_js.mouse_info.total_time_over_page < usi_js.launch.time_hover_requirement) {
					usi_js.log('usi: not on page long enough: ' + usi_js.mouse_info.total_time_over_page);
					return;
				}
				if (usi_js.launch.any_trajectory == 0 && usi_js.mouse_info.last_mouse_y > usi_js.launch.exit_area) {
					usi_js.log('usi: exit from non-top movement area ' + usi_js.mouse_info.last_mouse_y);
					return;
				}
				if ((Number(new Date()) - usi_js.mouse_info.on_page_timestamp) > usi_js.launch.speed_upward ) {
					if ((Number(new Date()) - usi_js.mouse_info.on_page_timestamp) > 100000) {
						usi_js.log('usi: did not move mouse down to content (starts at '+usi_js.launch.content_start+' px)');
					} else {
						usi_js.log('usi: slow approach: ' + (Number(new Date()) - usi_js.mouse_info.on_page_timestamp) + 'ms');
					}
					return;
				}
				var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
				if (!usi_js.machine.is_mac && usi_js.mouse_info.last_mouse_x/window_width <= usi_js.launch.no_pop_quadrant/100) {
					usi_js.log('usi: too far to the left ' + (usi_js.mouse_info.last_mouse_x/window_width) + '%');
					return;
				}
				usi_js.mouse_info.last_seen_timestamp = Number(new Date());
				if ((usi_js.launch.any_trajectory == 1 || usi_js.mouse_info.trajectory == 'up') && usi_js.timers.display_timer == -1) {
					usi_js.log('usi: up and out!');
					if (usi_js.launch.launch_methods.indexOf(usi_js.PREDICTIVE_METHOD) != -1) {
						if (usi_js.page_status.focus == 'focus') usi_js.page_status.focused_at_exit = 1;
						else usi_js.page_status.focused_at_exit = 0;
						usi_js.timers.display_timer = setTimeout(function(){
							usi_js.display(false);
						}, usi_js.launch.time_above_y );
					}
				} else if (usi_js.mouse_info.trajectory == 'down') {
					usi_js.log('usi: mouse moving down');
				} else if (usi_js.timers.display_timer != -1) {
					usi_js.log('usi: timer to launch seems to be running...');
				}
			}
		},
		mouse_over:function(event) {
			if (usi_js.launch.no_mouse_move == 1) usi_js.mouse_move(event);
			usi_js.log('usi: usi_js.mouse_info.is_mouse_over_page = 1');
			if (usi_js.mouse_info.is_mouse_over_page == 0) {
				usi_js.mouse_info.last_seen_timestamp = Number(new Date());
			}
			usi_js.mouse_info.is_mouse_over_page = 1;
			if (usi_js.timers.display_timer != -1) {
				clearTimeout(usi_js.timers.display_timer);
				usi_js.timers.display_timer = -1;
			}
		},
		mouse_move:function(event) {
			var mouseX = document.all? event.clientX: event.pageX - ((document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft);
			var mouseY = document.all? event.clientY: event.pageY - ((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop);
			if (mouseY > usi_js.launch.content_start) {
				usi_js.mouse_info.on_page_timestamp = Number(new Date());
			}
			if (usi_js.mouse_info.last_mouse_y >= mouseY) {
				usi_js.mouse_info.trajectory = 'up';
			} else {
				usi_js.mouse_info.trajectory = 'down';
			}
			usi_js.mouse_info.last_mouse_y = mouseY;
			usi_js.mouse_info.last_mouse_x = mouseX;
		},
		onbeforeunload_called:function() {
			if (typeof(usi_js) !== "undefined") {
				usi_js.page_status.unload_called = true;
			}
		},
		place_alt:function() {
			try {
				if (document.getElementById('usi_background_img') != null && document.getElementsByClassName("usi_sr_only").length > 0) {
					document.getElementById('usi_background_img').setAttribute('alt', document.getElementsByClassName("usi_sr_only")[0].innerHTML);
				}
			} catch(e) {}
        },
		place_css:function(css) {
			usi_js.trace('place_css()');
			var usi_css = document.createElement("style");
			usi_css.type = "text/css";
			if(usi_css.styleSheet) usi_css.styleSheet.cssText = css;
			else usi_css.innerHTML = css;
			usi_css.className = "usi_style_tag";
			document.getElementsByTagName('head')[0].appendChild(usi_css);
		},
		place_div:function() {
			usi_js.trace('place_div()');
			if (document.getElementById("usi_display") == null) {
				var display_div = document.createElement("div");
				display_div.setAttribute("id","usi_display");
				display_div.style.zIndex = 2000010000;
				display_div.style.position = 'fixed';
				display_div.style.display = 'none';
				display_div.setAttribute("role", "alertdialog");
				display_div.setAttribute("aria-label", "usi_display");
				display_div.setAttribute("aria-modal", "true");
				display_div.className = "usi_hide_css usi_display";
				
					var usi_container = document.createElement("div");
					usi_container.setAttribute("id","usi_container");
					document.getElementsByTagName("body")[0].appendChild(usi_container);
					usi_container.appendChild(display_div);
				
				display_div.innerHTML += '<button type="button" id="usi_close" alt="Close" aria-label="Close"></button>';
				display_div.innerHTML += '<div id="usi_content"></div>';
				/** Test Data: START */
				
				if (usi_cookies.get("usi_enable") == "2") {
				    usi_js.load_js("utility/testing_util.jsp");
                }
				/** Test Data: END */
				/** Extra Javascript: START */
				usi_js.product = {}; 

usi_js.click_cta = function() {
  usi_cookies.set("usi_remove_source_code", "1", usi_cookies.expire_time.hour, true);
  usi_js.deep_link(location.href); 
};

usi_js.submit_success = function() {
	usi_app.send_lc_data();
}

usi_js.display_vars.p1_html = [
  '<div id="usi_email_container">',
    '<input title="Enter Your Email" value="Enter Your Email" type="text" name="usi_email" id="usi_email" onfocus="usi_js.check_focus_default(this)" onblur="usi_js.check_blur_default(this)" onkeydown="if (event.keyCode == 13) { usi_js.submit(); return false; }" />',
    '<div id="usi_email_good_container">',
      '<img id="usi_email_good" src="', usi_js.campaign.images, '/images/spacer.gif" style="width:14px; height:14px;" border="0" alt="" />',
    '</div>',
  '</div>',
  '<div class="usi_disclaimer">By providing your email address you are consenting to the terms of this <a href="https://www.swansonvitamins.com/help/security-privacy/security-privacy-information/security-and-privacy-information.html" target="_blank">privacy policy</a>.</div>',
  '<button class="usi_submitbutton" onclick="usi_js.submit();" type="button" alt="Claim Offer" aria-label="Claim Offer"></button>',
  '<div class="usi_sr_only">Limited Time Offer! 15 percent off plus free shipping with your order of 50 dollars or more. Our special offer will be delivered by email or you can claim now below.</div>'
].join('');

usi_js.display_vars.p2_html = [
  '<button class="usi_submitbutton" onclick="usi_js.click_cta();" type="button" alt="Apply Coupon Now" aria-label="Apply Coupon Now"></button>',
  '<div class="usi_sr_only">Thank you! Please allow 2 to 3 minutes for delivery. Check your spam folder, just in case.</div>'
].join('');
				/** Extra Javascript: END */
				if (typeof(usi_js.display_vars.css) != "undefined" && usi_js.display_vars.css != "") {
					usi_js.place_css(usi_js.display_vars.css);
				}
				if (usi_js.display_vars.background != "") {
					if (usi_js.display_vars.background.indexOf(".mp4") != -1) {
						display_div.innerHTML += [
							'<div id="usi_background">',
								'<video class="usi_video" preload="true" muted="true" autoplay="true" loop="true" src="',usi_js.campaign.images+usi_js.display_vars.background,'" alt="" style="width:100%;height:100%;" id="usi_background_video" onerror="usi_js.error_report_image(event, this);"/>',
							'</div>'
						].join('');
					} else {
						display_div.innerHTML += [
							'<div id="usi_background">',
								'<img src="',usi_js.campaign.images+usi_js.display_vars.background,'" aria-hidden="true" alt="" style="width:100%;height:100%;" id="usi_background_img" onerror="usi_js.error_report_image(event, this);"/>',
							'</div>'
						].join('');
					}
				}
				if (usi_js.display_vars.p1 != "") {
					display_div.innerHTML += [
						'<div id="usi_page"></div>'
					].join('');
				}
				usi_js.load_page(1);
			}
		},
		post_set_backtrap:function() {},
		post_close:function() {
			usi_js.trace('post_close()');
		},
		post_display:function() {
			usi_js.trace('post_display()');
		},
		pre_close:function() {
			usi_js.trace('pre_close()');
			return true;
		},
		pre_display:function() {
			usi_js.trace('pre_display()');
			return true;
		},
		preload_img:function(src) {
			usi_js.trace('preload_img(' + src + ')');
			if (typeof(src) != "undefined" && src != null && src.indexOf("//") != -1) {
				var img_preloader= document.createElement("div");
				document.getElementsByTagName('body')[0].appendChild(img_preloader);
				img_preloader.innerHTML = '<div style="position:absolute;left:-2000px;top:-2000px;"><img src="'+src+'" onerror="usi_js.error_report_image(event, this);"/></div>';
				var imageArray = new Image();
				imageArray.src = src;
			}
		},
		print_trace:function() {
			usi_js.log('--- VIEW TRACE ---');
			usi_js.trace_items.forEach(function(trace_item) {
				usi_js.log(trace_item);
			});
			usi_js.log('--- END VIEW TRACE ---');
		},
		pull_coupon:function(coupon) {
			usi_js.trace('pull_coupon(' + coupon + ')');
			if (usi_js.campaign.reuse_coupon && usi_cookies.get("usi_coupon") != null) {
				return usi_js.promo_callback(usi_cookies.get("usi_coupon"));
			}
			if (!coupon) usi_js.load_js("utility/promo.jsp?promo_desc="+usi_js.campaign.coupon.replace("dynamic:","")+"&companyID="+usi_js.campaign.company_id+"&id=" + usi_js.campaign.id+"&session="+usi_js.get_session());
			else usi_js.load_js("utility/promo.jsp?promo_desc="+coupon+"&companyID="+usi_js.campaign.company_id+"&id="+usi_js.campaign.id+"&session="+usi_js.get_session());
		},
		promo_callback:function(usi_promo) {
			usi_js.trace('promo_callback(' + usi_promo + ')');
			usi_cookies.set("usi_coupon", encodeURIComponent(usi_promo), usi_cookies.expire_time.day, true);
			if (usi_js.campaign.email_id != 0) {
				usi_js.send_data("usi_coupon", usi_promo);
			}
			usi_js.load_page(2);
		},
		register_onbeforeunload:function() {
			usi_js.trace('register_onbeforeunload()');
			usi_js.attach_event('beforeunload', usi_js.onbeforeunload_called, window);
		},
		remove_class: function (element, className) {
			if (element != null) {
				var existingClasses = usi_js.get_classes(element);
				var newClasses = [];
				existingClasses.forEach(function (existingClass) {
					if (existingClass !== className) {
						newClasses.push(existingClass);
					}
				});
				element.className = newClasses.join(' ');
			}
		},
		remove_onbeforeunload:function() {
			usi_js.trace('remove_onbeforeunload()');
			setTimeout(function(){
				usi_js.detach_event('beforeunload', usi_js.onbeforeunload_called, window);
			}, 2000);
		},
		remove_display_div:function() {
			usi_js.trace('remove_display_div()');
			if (document.getElementById("usi_display") != null) {
				document.getElementById("usi_display").className = "usi_hide_css usi_display";
				setTimeout(function(){
					document.getElementById("usi_display").style.display="none";
				}, usi_js.display_vars.transition_speed);
			}
		},
		remove_js:function(usi_js_id) {
			usi_js.trace('remove_js()');
			var scriptToRemove = document.getElementById("usi_AJAXScript"+usi_js_id);
			if (scriptToRemove != null) {
				document.getElementsByTagName("head")[0].removeChild(scriptToRemove);
			}
		},
		remove_shadow_div:function() {
			usi_js.trace('remove_shadow_div()');
			if (document.getElementById("usi_shadow") != null) {
				document.getElementById("usi_shadow").style.display = "none";
			}
		},
		send_data:function(name, value) {
			usi_js.trace('send_data(' + name + ' = ' + value + ')');
			usi_js.load_js("hound/saveData.jsp?siteID=" + usi_js.campaign.email_id + "&onsite_configID=" + usi_js.campaign.config_id + "&USI_value=" + encodeURIComponent(value) + "&USI_name=" + encodeURIComponent(name) + "&USI_Session=" + usi_js.get_session() + "&id=" + usi_js.campaign.id + "&bustCache=" + (new Date()).getTime());
		},
		set_backtrap:function() {
			usi_js.trace('set_backtrap()');
			if (usi_js.campaign.domains != "") {
				for (var i=0; i<usi_js.campaign.domains.split(",").length; i++) {
					if (document.referrer.toLowerCase().indexOf(usi_js.campaign.domains.split(",")[i].trim()) != -1) {
						usi_js.page_status.back_means_exit = 0;
					}
				}
			}
			if (usi_js.page_status.back_means_exit == 1 && usi_js.launch.launch_methods.indexOf(usi_js.BACKBUTTON_TRAP) != -1) {
				if (history.pushState) {
					usi_js.check_back_state = function(event) {
						if (usi_js.page_status.back_means_exit == 1 && usi_js.launch.launch_methods.indexOf(usi_js.BACKBUTTON_TRAP) != -1) {
							if (usi_js.page_status.back_set && usi_js.page_status.location_hash == usi_js.get_hash() && (usi_js.launch.backtrap_check_against_event_state == 0 || event.state == null || event.state.usi_back != null)) {
								usi_js.detach_event("popstate", usi_js.check_back_state, window);
								if (usi_js.current_time() - usi_js.page_status.back_state_set_time > usi_js.launch.backtrap_timestamp_difference) {
									usi_js.display(false);
								}
							}
						}
					};
					usi_js.attach_event("popstate", usi_js.check_back_state, window);
					setTimeout(usi_js.set_backtrap_timeout, usi_js.launch.backtrap_placement_delay);
				}
			}
		},
		set_backtrap_timeout:function() {
			usi_js.page_status.location_hash = usi_js.get_hash();
			usi_js.page_status.back_state_set_time = usi_js.current_time();
			history.pushState({"usi_back":"true"+Math.random()}, null, location.href);
			usi_js.page_status.back_set = true;
			usi_js.log('Backtrap set');
			usi_js.trace('Backtrap set');
			usi_js.post_set_backtrap();
		},
		set_backtrap_delay:function() {
			if (typeof(document.readyState) != "undefined" && document.readyState !== "complete") {
				setTimeout(usi_js.set_backtrap_delay, 1500);
			} else {
				setTimeout(usi_js.set_backtrap, 10+usi_js.launch.backtrap_load_delay);
				usi_js.detach_event("scroll", usi_js.set_backtrap_delay, window);
			}
		},
		set_shadow_click_close:function() {
			usi_js.trace('set_shadow_click_close()');
			if (document.getElementById("usi_shadow") != null) {
				document.getElementById("usi_shadow").onclick = usi_js.close;
			}
		},
		set_coupon:function() {
			usi_js.trace('set_coupon()');
			usi_cookies.set("usi_coupon", encodeURIComponent(usi_js.campaign.coupon), usi_cookies.expire_time.day, true);
		},
		set_triggers:function() {
			usi_js.trace('set_triggers(' + usi_js.launch.launch_methods + ')');
			if (usi_js.launch.launch_methods.indexOf(usi_js.PREDICTIVE_METHOD) != -1) {
				usi_js.start_mouse_monitor();
				usi_js.register_onbeforeunload();
			}
			if (usi_js.launch.launch_methods.indexOf(usi_js.BACKBUTTON_TRAP) != -1) {
				if (usi_js.machine.is_chrome_iphone) usi_js.attach_event("scroll", usi_js.set_backtrap_delay, window);
				else usi_js.set_backtrap_delay();
			}
			if (usi_js.launch.launch_methods.indexOf(usi_js.PROACTIVE_METHOD) != -1) {
				usi_js.timers.display_timer = setTimeout(function(){
					usi_js.display(false);
				}, 10+usi_js.launch.launch_delay);
			}
			if (usi_js.launch.tab_detection_time > 0) {
				usi_js.start_focus_monitor();
			}
			if (usi_js.launch.launch_methods.indexOf(usi_js.SCROLL_BOTTOM) > -1) {
				usi_js.start_scroll_monitor();
			}
		},
		start_focus_monitor:function() {
			usi_js.trace('start_focus_monitor()');
			usi_js.attach_event("focus", usi_js.window_focus, window);
			usi_js.attach_event("blur", usi_js.window_blur, window);
			usi_js.attach_event("resize", usi_js.window_resize, window);
		},
		start_tab_detection:function() {
			usi_js.trace('start_tab_detection()');
			if (usi_js.launch.tab_detection_time > 0) {
				usi_js.page_status.resize_happened = 0;
				setTimeout(function(){
					usi_js.check_for_change_events(usi_js.launch.tab_detection_time/250);
				}, 250);
			}
		},
		start_mouse_monitor:function() {
			usi_js.trace('start_mouse_monitor()');
			usi_js.attach_event("mouseout", usi_js.mouse_out);
			usi_js.attach_event("mouseover", usi_js.mouse_over);
			if (usi_js.launch.no_mouse_move == 0) usi_js.attach_event("mousemove", usi_js.mouse_move);
		},
		stop_mouse_monitor:function() {
			usi_js.trace('stop_mouse_monitor()');
			usi_js.detach_event("mouseout", usi_js.mouse_out);
			usi_js.detach_event("mouseover", usi_js.mouse_over);
			if (usi_js.launch.no_mouse_move == 0) usi_js.detach_event("mousemove", usi_js.mouse_move);
		},
		stop_timers:function() {
			usi_js.trace('stop_timers()');
			clearInterval(usi_js.timers.display_timer);
			clearInterval(usi_js.timers.verify_email_loop_id);
		},
		stop_focus_monitor:function() {
			usi_js.trace('stop_focus_monitor()');
			usi_js.detach_event("focus", usi_js.window_focus, window);
			usi_js.detach_event("blur", usi_js.window_blur, window);
			usi_js.detach_event("resize", usi_js.window_resize, window);
		},
		start_scroll_monitor: function() {
			usi_js.trace('start_scroll_monitor()');
			usi_js.attach_event('scroll', function() {
				var pageOffset = window.pageYOffset;
				var pageHeight = document.body.scrollHeight;
				var scrollDistance = window.innerHeight + Math.ceil(pageOffset);
				if (usi_js.page_status.at_page_bottom) return;
				if (scrollDistance >= pageHeight) {
					usi_js.page_status.at_page_bottom = true;
					usi_js.display(false);
				}
			}, window);
		},
		submit_product:function() {
			usi_js.trace('submit_product()');
			for (var key in usi_js.product) {
				if (usi_js.product.hasOwnProperty(key)) {
					var obj = usi_js.product[key];
					usi_js.send_data(key, obj);
				}
			}
		},
		submit_success:function() {
			usi_js.trace('submit_success()');
		},
		submit:function() {
			usi_js.trace('submit()');
			var usi_email = document.getElementById("usi_email");
			if (usi_email != null && usi_js.validate_email(usi_email.value.trim())) {
				usi_js.send_data("usi_email", usi_email.value.trim());
				usi_js.submit_product();
			} else if (usi_email != null) {
				usi_js.custom_alert("Please enter a valid email address");
				usi_email.focus();
				return;
			}
			usi_js.submit_success();
			if (usi_js.campaign.coupon.indexOf("dynamic:") != -1) {
				usi_js.pull_coupon();
			} else if (usi_js.campaign.coupon != "") {
				usi_js.set_coupon();
				usi_js.load_page(2);
			} else {
				usi_js.load_page(2);
			}
		},
		suppress:function(seconds) {
			usi_js.trace('suppress(' + seconds + ')');
			seconds = seconds || 30*24*60*60;
			usi_js.launch.enabled = false;
			usi_js.launch.suppress = true;
			usi_cookies.set("usi_suppress"+usi_js.campaign.cookie_append, "t"+usi_js.current_time(), seconds, true);
		},
		trace:function(trace_item) {
			usi_js.trace_items.push(trace_item);
		},
		transitions_allowed:function() {
			usi_js.trace('transitions_allowed()');
			var p = document.createElement('p').style;
			var allowed = ('transition' in p || 'WebkitTransition' in p || 'MozTransition' in p || 'msTransition' in p || 'OTransition' in p);
			if (!allowed) usi_js.display_vars.transition_speed = 0;
			return allowed;
		},
		validate_email:function(email) {
			usi_js.trace('validate_email(' + email + ')');
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		verify_email_loop_result:function(isokay) {
			var emailCheck = document.getElementById("usi_email_good");
			if (emailCheck != null) {
				if (!isokay && emailCheck.src.indexOf(usi_js.display_vars.emailerror) == -1) {
					emailCheck.src = usi_js.campaign.images + usi_js.display_vars.emailerror;
					emailCheck.alt = "Invalid Email";
				} else if (isokay && emailCheck.src.indexOf(usi_js.display_vars.emailsuccess) == -1) {
					emailCheck.src = usi_js.campaign.images + usi_js.display_vars.emailsuccess;
					emailCheck.alt = "Valid Email";
				}
			}
		},
		verify_email_loop:function() {
			usi_js.trace('verify_email_loop()');
			if (document.getElementById("usi_email") != null) {
				var emailInput = document.getElementById("usi_email");
				var email = emailInput.value;
				if (usi_js.page_status.email_last != email && email != emailInput.title) {
					usi_js.page_status.email_last = email;
					usi_js.verify_email_loop_result(usi_js.validate_email(email.trim()));
				}
			} else {
				clearInterval(usi_js.timers.verify_email_loop_id);
			}
		},
		window_resize:function(event) {
			usi_js.trace('window_resize()');
			usi_js.page_status.resize_happened = 1;
		},
		window_blur:function(event) {
			usi_js.trace('window_blur()');
			usi_js.page_status.focus = 'blur';
		},
		window_focus:function(event) {
			usi_js.trace('window_focus()');
			usi_js.page_status.focus = 'focus';
		}
	};
	usi_js.build();
}