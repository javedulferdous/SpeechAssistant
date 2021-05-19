
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"514",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"PROD",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.staging\\..*","value","STAG"],["map","key",".*\\.quality\\..*","value","QUAL"],["map","key",".*\\.preprod.*\\..*","value","PPROD"],["map","key","nemer\\-staging\\.cartier\\.ae","value","STAG"],["map","key","^staging\\-eu01.*","value","STAG"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__55CC"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/\"ccbm\":(51|49|53|55)\/i.test(",["escape",["macro",3],8,16],")?\"refuse\":\"accept\"})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\.cartier\\.es","value","true"],["map","key","\\.cartier\\.de","value","true"],["map","key","\\.cartier\\.fr","value","true"],["map","key","\\.cartier\\.it","value","true"],["map","key","\\.cartier\\.co\\.uk","value","true"],["map","key","\\.int\\.cartier\\.com","value","true"],["map","key","stores\\.cartier\\.com\\\/en\\_gb","value","true"],["map","key","stores\\.cartier\\.com\\\/fr","value","true"],["map","key","stores\\.cartier\\.com\\\/es","value","true"],["map","key","stores\\.cartier\\.com\\\/de","value","true"],["map","key","stores\\.cartier\\.com\\\/it","value","true"],["map","key","stores\\.cartier\\.com\\\/en\\_us","value","true"],["map","key","cartiercare\\.cartier\\.com\\\/en\\-us","value","true"],["map","key","cartier\\.com\\.br","value","false"],["map","key","cartier\\.com\\\/ar\\-ae","value","false"],["map","key","cartier\\.com\\\/en\\-ae","value","false"],["map","key","cartier\\.com\\\/ar\\-sa","value","false"],["map","key","cartier\\.com\\\/en\\-sa","value","false"],["map","key","www\\.cartier\\.com\\\/","value","true"]]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",5],8,16],".replace(\/[^\u0026?=#]+(@|%40)[^@\u0026?=#]+\\.[^@\u0026?=#]+\/gi,\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"userId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function p(c){return 10\u003Ec?\"0\"+c:c}function t(c){u.lastIndex=0;return u.test(c)?'\"'+c.replace(u,function(a){var c=f[a];return\"string\"===typeof c?c:\"\\\\u\"+(\"0000\"+a.charCodeAt(0).toString(16)).slice(-4)})+'\"':'\"'+c+'\"'}function q(c,a){var l=g,d=a[c];d\u0026\u0026\"object\"===typeof d\u0026\u0026\"function\"===typeof d.toJSON\u0026\u0026(d=d.toJSON(c));\"function\"===typeof h\u0026\u0026(d=h.call(a,c,d));switch(typeof d){case \"string\":return t(d);case \"number\":return isFinite(d)?d+v:\"null\";case \"boolean\":case \"null\":return d+v;case \"object\":if(!d)return\"null\";\ng+=r;var e=[];if(\"[object Array]\"===Object.prototype.toString.apply(d)){a=d.length;for(c=0;a\u003Ec;c+=1)e[c]=q(c,d)||\"null\";var b=0===e.length?\"[]\":g?\"[\\n\"+g+e.join(\",\\n\"+g)+\"\\n\"+l+\"]\":\"[\"+e.join(\",\")+\"]\";g=l;return b}if(h\u0026\u0026\"object\"===typeof h)for(a=h.length,c=0;a\u003Ec;c+=1){if(\"string\"===typeof h[c]){var m=h[c];b=q(m,d)}b\u0026\u0026e.push(t(m)+(g?\": \":\":\")+b)}else for(m in d)Object.prototype.hasOwnProperty.call(d,m)\u0026\u0026(b=q(m,d))\u0026\u0026e.push(t(m)+(g?\": \":\":\")+b);b=0===e.length?\"{}\":g?\"{\\n\"+g+e.join(\",\\n\"+g)+\"\\n\"+l+\"}\":\n\"{\"+e.join(\",\")+\"}\";g=l;return b}}var u=\/[\\\\'\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]\/g,g,r,f={},v=String(),h,k={};f[\"\\b\"]=\"\\\\b\";f[\"   \"]=\"\\\\t\";f[\"\\n\"]=\"\\\\n\";f[\"\\f\"]=\"\\\\f\";f[\"\\r\"]=\"\\\\r\";f[\"'\"]='\\\\\"';f[\"\\\\\"]=\"\\\\\\\\\";\"function\"!==typeof Date.prototype.toJSON\u0026\u0026(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+\"-\"+p(this.getUTCMonth()+1)+\"-\"+p(this.getUTCDate())+\"T\"+p(this.getUTCHours())+\":\"+\np(this.getUTCMinutes())+\":\"+p(this.getUTCSeconds())+\"Z\":null});String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};\"function\"!==typeof k.stringify\u0026\u0026(k.stringify=function(c,a,l){r=g=\"\";if(\"number\"===typeof l)for(a=0;l\u003Ea;a+=1)r+=\" \";else if(\"string\"===typeof l\u0026\u0026(r=l),(h=a)\u0026\u0026\"function\"!==typeof a\u0026\u0026(\"object\"!==typeof a||\"number\"!==typeof a.length))throw Error(\"JSON.stringify\");return q(\"\",{\"\":c})});\"function\"!==typeof k.parse\u0026\u0026(k.parse=function(){var c,\na,g={'\"':'\"',\"\\\\\":\"\\\\\",\"\/\":\"\/\",b:\"\\b\",f:\"\\f\",n:\"\\n\",r:\"\\r\",t:\"\\t\"},d,e=function(a){throw{name:\"SyntaxError\",message:a,at:c,text:d};},b=function(b){b\u0026\u0026b!==a\u0026\u0026e(\"Expected '\"+b+\"' instead of '\"+a+\"'\");a=d.charAt(c);c+=1;return a},m=function(){var c=\"\";\"-\"===a\u0026\u0026(c=\"-\",b(\"-\"));for(;\"0\"\u003C=a\u0026\u0026\"9\"\u003E=a;)c+=a,b();if(\".\"===a)for(c+=\".\";b()\u0026\u0026\"0\"\u003C=a\u0026\u0026\"9\"\u003E=a;)c+=a;if(\"e\"===a||\"E\"===a){c+=a;b();if(\"-\"===a||\"+\"===a)c+=a,b();for(;\"0\"\u003C=a\u0026\u0026\"9\"\u003E=a;)c+=a,b()}c=+c;if(isFinite(c))return c;e(\"Bad number\")},f=function(){var c,\nd=\"\",f;if('\"'===a)for(;b();){if('\"'===a)return b(),d;if(\"\\\\\"===a)if(b(),\"u\"===a){for(c=f=0;4\u003Ec;c+=1){var h=parseInt(b(),16);if(!isFinite(h))break;f=16*f+h}d+=String.fromCharCode(f)}else if(\"string\"===typeof g[a])d+=g[a];else break;else d+=a}e(\"Bad string\")},n=function(){for(;a\u0026\u0026\" \"\u003E=a;)b()},h=function(){switch(a){case \"t\":return b(\"t\"),b(\"r\"),b(\"u\"),b(\"e\"),!0;case \"f\":return b(\"f\"),b(\"a\"),b(\"l\"),b(\"s\"),b(\"e\"),!1;case \"n\":return b(\"n\"),b(\"u\"),b(\"l\"),b(\"l\"),null}e(\"Unexpected '\"+a+\"'\")};var k=function(){n();\nswitch(a){case \"{\":a:{var c={};if(\"{\"===a){b(\"{\");n();if(\"}\"===a){b(\"}\");var d=c;break a}for(;a;){d=f();n();b(\":\");Object.hasOwnProperty.call(c,d)\u0026\u0026e(\"Duplicate key '\"+d+\"'\");c[d]=k();n();if(\"}\"===a){b(\"}\");d=c;break a}b(\",\");n()}}e(\"Bad object\");d=void 0}return d;case \"[\":a:{d=[];if(\"[\"===a){b(\"[\");n();if(\"]\"===a){b(\"]\");break a}for(;a;){d.push(k());n();if(\"]\"===a){b(\"]\");break a}b(\",\");n()}}e(\"Bad array\");d=void 0}return d;case '\"':return f();case \"-\":return m();default:return\"0\"\u003C=a\u0026\u0026\"9\"\u003E=a?m():\nh()}};return function(b,f){d=b;c=0;a=\" \";b=k();n();a\u0026\u0026e(\"Syntax error\");return\"function\"===typeof f?function w(a,c){var b,d=a[c];if(d\u0026\u0026\"object\"===typeof d)for(b in d)if(Object.prototype.hasOwnProperty.call(d,b)){var e=w(d,b);void 0!==e?d[b]=e:delete d[b]}return f.call(a,c,d)}({\"\":b},\"\"):b}}());C55.JSON=k;window.JSON||(window.JSON=k)})();"]
    },{
      "function":"__c",
      "vtp_value":"GTM-577SDR"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){\"undefined\"==typeof config55.history.configuration?(config55.history.configuration={start0:+new Date},config55.history.configuration.counter=1):(config55.history.configuration[\"start\"+config55.history.configuration.counter]=+new Date,++config55.history.configuration.counter);window.config55.hash=!1;window.config55.queryParameters.push(\"newsletterSubscription\",\"accountType\",\"resultNumber\",\"resultKeyword\",\"origin\");window.config55.queryParametersExclusion=[\"email\",\"j_username\"];\nconfig55.sendEventClassic=!0;config55.customDimProduct={2:\"productDisplay\",3:\"isEmbossed\",9:\"isEngraved\",10:\"name\",15:\"isAvailable\",16:\"isAdjusted\",17:\"productVertical\",18:\"productCollection\",20:\"productMaterialJewelry\",22:\"productMaterialStrap\",23:\"productMaterialCase\",27:\"sellable\",30:\"productSize\",31:\"variant\",32:\"isPersonalised\",33:\"productMaterialLeather\",34:\"productRef\"};window.config55.scrollNonInteractive=1;config55.history.configuration[\"lap\"+(config55.history.configuration.counter-1)]=+new Date-\nconfig55.history.configuration[\"start\"+(config55.history.configuration.counter-1)];return\"55configuration\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){if(!!window.config55)return\"55logic\";",["escape",["macro",10],8,16],";if(!Array.prototype.indexOf)Array.prototype.indexOf=function(elt){var len=this.length\u003E\u003E\u003E0,from=Number(arguments[1])||0;from=from\u003C0?Math.ceil(from):Math.floor(from);if(from\u003C0)from+=len;for(;from\u003Clen;++from)if(from in this\u0026\u0026this[from]===elt)return from;return-1};var C55=function(){var scripts=window.document.getElementsByTagName(\"script\"),sLength=scripts.length,count=0,dl,find=false;while(count\u003CsLength\u0026\u0026!find){if(\/www\\.googletagmanager\\.com\\\/gtm\\.js\\?\/.test(scripts[count].src))if(scripts[count].src.split(\"id\\x3d\")[1].split(\"\\x26l\\x3d\")[0]==\n",["escape",["macro",11],8,16],"){dl=scripts[count].src.split(\"\\x26l\\x3d\")[1];find=true}++count}this.dataLayer=dl?window[dl]||[]:window.dataLayer||[];this.insensitiveWords=new Array;this.insensitiveWords.push(\"trackSocial\",\"trackEvent\",\"virtualPageview\");this.socialInteraction=new Array;this.socialInteraction.push(\"share\",\"like\",\"tweet\",\"pin it\",\"pin\",\"+1\");this._push=this.dataLayer.push;this.history={};this.versions={};this.versions.logic=\"1.2\";this.path=\"\/\";this.domain=\"\";this.expires=(new Date(+new Date+\n15552E6)).toUTCString();this.store=!!document.cookie.match(\"__55\\x3d([^;$]*)\")?JSON.parse(document.cookie.match(\"__55\\x3d([^;$]*)\")[1]):{};this.queryParameters=new Array;this.hash=new Boolean;this.hash=false;this.membershipHierarchy=new Array;this.membershipHierarchy.push(\"non-member\",\"member\",\"1stbuyer\",\"buyer\");this.membership=\"\";this.engagementHierarchy=new Array;this.engagementHierarchy.push(\"regular\",\"sympathiser\",\"viewer\",\"subscriber\",\"ambassador\");this.engagementTopStatus=\"top_\";this.engagement=\n\"\";this.sendEventClassic=false;this.sporadicPeriod=30;this.frequentPeriod=7;this.visitorFrequencies=new Array;this.visitorFrequencies.push(\"new\",\"sporadic\",\"occasional\",\"frequent\");this.scrollElementId=\"\";this.scollLabel=\"\";this.scrollNonInteractive=false;this.scrollEnabled=true;this.scrollStepsHierarchy=new Array;this.scrollStepsHierarchy.push({value:0,name:\"fold\"},{value:25,name:\"25%\"},{value:50,name:\"50%\"},{value:75,name:\"75%\"},{value:97,name:\"100%\"});this.nbPvTpl=1;this.customDimProduct={};this.customMetProduct=\n{}};C55.prototype.saveCookie=function(){window.document.cookie=\"__55\\x3d\"+JSON.stringify(this.store)+\";expires\\x3d\"+this.expires+\";path\\x3d\"+this.path+\";domain\\x3d\"+this.domain+\";\"};C55.prototype.addDays=function(days){return(new Date(+new Date+days*864E5)).toUTCString()};C55.prototype.indexKw=function(){var i,l,idx=arguments[2],s=arguments[1],o=arguments[0];for(i=idx||0,l=o.length;i\u003Cl;++i)if(o[i].toString().toLowerCase()===s.toLowerCase())return i;return-1};window.config55=new C55;config55.dataLayer.push=\nfunction(){var args=arguments[0],idInsW=!!args.event?config55.indexKw(config55.insensitiveWords,args.event.toLowerCase()):-1;if(!!~idInsW)args.event=config55.insensitiveWords[idInsW];if(!!args.socialAction)config55.engagement=config55.engagement||\"ambassador\";return config55._push(args)};config55.setHierarchy=function(hierarchy,list){config55[hierarchy+\"Hierarchy\"]=list};config55.updateHierarchy=function(){var hierarchy=arguments[0],value=arguments[1],retro=arguments[2]?true:false,obj={};if(!!config55[hierarchy+\n\"Hierarchy\"]\u0026\u0026!!~config55[hierarchy+\"Hierarchy\"].indexOf(value)){if(retro)config55.store[hierarchy]=value;else if(config55[hierarchy+\"Hierarchy\"].indexOf(config55.store[hierarchy])\u003Cconfig55[hierarchy+\"Hierarchy\"].indexOf(value))config55.store[hierarchy]=value;config55.saveCookie();obj[hierarchy+\"Hierarchy\"]=config55.store[hierarchy];config55.dataLayer.push(obj)}};config55.getDataLayerValue=function(key){var dlLength=config55.dataLayer.length;for(var i=dlLength-1;i\u003E=0;--i)if(typeof config55.dataLayer[i][key]!=\n\"undefined\")return config55.dataLayer[i][key];return\"\"};var nodeExplorer=function(node,key,val,count){var k,r,j,checkCount=count||0;if(!!node\u0026\u0026node[key]!==undefined){if(!!val\u0026\u0026node[key]===val)return node;if(!val)return node}if(node instanceof Array\u0026\u0026checkCount\u003C5)for(k=node.length-1;k\u003E=0;k-=1){r=nodeExplorer(node[k],key,val,checkCount+1);if(r!==undefined)return r}else if(typeof node===\"object\"\u0026\u0026checkCount\u003C5)for(j in node)if(node.hasOwnProperty(j)){r=nodeExplorer(node[j],key,val,checkCount+1);if(r!==\nundefined)return r}};config55.getDataLayerObject=function(key,val){var res=nodeExplorer(this.dataLayer,key,val);return!!res?res:false};C55.prototype.getDataLayerListById=function(key){var _nodeExplorer=function(node,key,ret,count){var k,j,checkCount=count||0;if(!!node\u0026\u0026node[key]!==undefined)if(node[key])ret.push(node);if(node instanceof Array\u0026\u0026checkCount\u003C5)for(k=node.length-1;k\u003E=0;k-=1)r=_nodeExplorer(node[k],key,ret,checkCount+1);else if(typeof node===\"object\"\u0026\u0026checkCount\u003C5)for(j in node)if(node.hasOwnProperty(j))r=\n_nodeExplorer(node[j],key,ret,checkCount+1);return ret};return _nodeExplorer(this.dataLayer,key,[])};config55.inDataLayer=function(key,val){var dlLength=config55.dataLayer.length;for(var i=dlLength-1;i\u003E=0;--i)if(typeof config55.dataLayer[i][key]!=\"undefined\"\u0026\u0026config55.dataLayer[i][key]==val)return true;return false};config55.pushDL=function(){var arg=arguments[0],idInsW=!!arg?config55.indexKw(config55.insensitiveWords,arg.toLowerCase()):-1;if(!!~idInsW)arg=config55.insensitiveWords[idInsW];switch(arg){case \"trackEvent\":var eventName=\narguments[0]||undefined,eventCategory=arguments[1]||undefined,eventAction=arguments[2]||undefined,eventLabel=arguments[3]||undefined,eventValue=arguments[4]||0,eventNonInteraction=arguments[5]||false;config55.dataLayer.push({\"event\":eventName,\"eventCategory\":eventCategory,\"eventAction\":eventAction,\"eventLabel\":eventLabel,\"eventValue\":eventValue,\"eventNonInteraction\":eventNonInteraction});break;case \"trackSocial\":var eventName=arguments[0]||undefined,socialNetwork=arguments[1]||undefined,socialAction=\narguments[2]||undefined,socialTarget=arguments[3]||undefined;config55.dataLayer.push({\"event\":eventName,\"socialNetwork\":socialNetwork,\"socialAction\":socialAction,\"socialTarget\":socialTarget});break;case \"virtualPageview\":var push={};push.event=arguments[0];if(!!arguments[1])push.page=arguments[1];config55.dataLayer.push(push);break;default:throw new Error(\"Unknown argument to push in the dataLayer array.\");break}};config55.isNative=function(fn){risnative=\/\\s*\\[native code\\]\\s*\/i;try{return fn.toString().match(risnative)}catch(e){return false}};\nconfig55.enumerate=function(hasObjectKeys){return function(o){var k,rv;if(hasObjectKeys)try{rv=Object.keys(o);return rv}catch(e){}rv=[];o=!!o?!!o.callee?slice(o):o:{};for(k in o)if(rv.hasOwnProperty.call(o,k))rv.push(k);return rv}}(config55.isNative(Object.keys));config55.enumerateIterator=function(obj){var res=new Array;for(k in obj)res.push([k,obj[k]]);return res};config55.serialize=function(){var args=arguments.length\u003E1?arguments:arguments[0]!==void 0?arguments[0]:{},keys=this.enumerate(args),\ni=0,l=keys.length,str=[],_separator=\"\\x26\",_delimiter=\"\\x3d\";for(;i\u003Cl;i++)str.push(escape(keys[i])+_delimiter+encodeURIComponent(args[keys[i]]));return str.join(_separator).replace(\/%20\/g,\"+\")};config55.objectify=function(str){var o={},_separator=\/\u0026amp;|\u0026\/g,_delimiter=\"\\x3d\",pairs=!!~str.search(_separator)?str.split(_separator):str.length?[str]:[],keys=this.enumerate(pairs),i=0,l=keys.length;for(;i\u003Cl;i++)(function(pair){var pair=unescape(pair.replace(\/\\+\/g,\"%20\")),idx=pair.indexOf(_delimiter),key=\npair.split(_delimiter,1),value=pair.slice(idx+1);o[key]=value})(pairs[keys[i]]);return o};config55.URL=function(){var a=document.createElement(\"a\");return{parse:function(url){a.href=url;return{hash:a.hash,params:config55.objectify(a.search.slice(1)),pathname:a.pathname[0]!=\"\/\"?\"\/\"+a.pathname:a.pathname}}}}();",["escape",["macro",12],8,16],"();return\"55logic\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"rcms_cgGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){\"undefined\"===typeof window.config55\u0026\u0026",["escape",["macro",13],8,16],"();\"undefined\"==typeof config55.history.pagePath?(config55.history.pagePath={start0:+new Date},config55.history.pagePath.counter=1):(config55.history.pagePath[\"start\"+config55.history.pagePath.counter]=+new Date,++config55.history.pagePath.counter);config55.versions.pagePath=\"1.1\";var b=config55.dataLayer,c=function(){var d=b.length,a=!1;for(--d;0\u003C=d;--d)if(b[d].page\u0026\u0026(a=d,!\/Checkout ?Funnel\/gi.test(String(",["escape",["macro",14],8,16],"))||\n\"virtualPageview\"==b[b.length-1].event)||b[d].pageURI)return d;return\"number\"===typeof a?a:-1},k=function(){var a=b.length,c={};for(--a;0\u003C=a;--a)for(var e=0;e\u003Cwindow.config55.queryParameters.length;++e)b[a][window.config55.queryParameters[e]]\u0026\u0026!c.hasOwnProperty(window.config55.queryParameters[e])\u0026\u0026(c[window.config55.queryParameters[e]]=b[a][window.config55.queryParameters[e]]);return c},f=window.location,a=config55.URL.parse(f);f=a.pathname;var g=~c()?b[c()].pageURI?b[c()].pageURI:b[c()].page:f,h=\na.hash.slice(1),l=a.params;a=\"\";a=function(){var a=g,b=config55.serialize(l),c=config55.serialize(k());b?(a+=\"?\"+b,c\u0026\u0026(a+=\"\\x26\"+c)):c\u0026\u0026(a+=\"?\"+c);return a};\"virtualPageview\"!=b[b.length-1].event?(a=a(),window.config55.hash\u0026\u0026h\u0026\u0026(a!=g?a+=\"\\x26\"+h:a+=\"?\"+h),\"404\"==g\u0026\u0026(a=\"\/404.html?page\\x3d\"+f+\"\\x26ref\\x3d\"+window.document.referrer)):a=b[c()].pageURI?b[c()].pageURI:b[c()].page;config55.history.pagePath[\"lap\"+(config55.history.pagePath.counter-1)]=+new Date-config55.history.pagePath[\"start\"+(config55.history.pagePath.counter-\n1)];\/(?:\\?|\u0026)q=\/i.test(a)\u0026\u0026(a=a.replace(\/(\\?|\u0026)q=\/gi,\"$1kwCAR\\x3d\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],";a.match(\/\\?=$\/)?a=a.slice(0,-2):a.match(\/\\?=\u0026\/)\u0026\u0026(a=a.replace(\"\\x3d\\x26\",\"\"));for(var b=0;b\u003Cwindow.config55.queryParametersExclusion.length;b++){var c=\"(\\\\?|\\x26)\"+window.config55.queryParametersExclusion[b]+\"\\x3d[^\\x26]+\\x26?\";c=new RegExp(c,\"i\");a=a.replace(c,\"$1\")}return a=a.replace(\/[^\u0026?=#]+(@|%40)[^@\u0026?=#]+\\.[^@\u0026?=#]+\/gi,\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"msn_cgGroup"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"visitorStatus"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){\"undefined\"===typeof window.config55\u0026\u0026",["escape",["macro",13],8,16],"();\"undefined\"==typeof config55.history.engagement?(config55.history.engagement={start0:+new Date},config55.history.engagement.counter=1):(config55.history.engagement[\"start\"+config55.history.engagement.counter]=+new Date,++config55.history.engagement.counter);config55.versions.engagement=\"1.2.2\";twSubscribed=googleSubcribed=!1;var h=function(){var c=config55.dataLayer.length,b=0;for(--c;0\u003C=c;--c)config55.dataLayer[c].socialAction\u0026\u0026\n++b;return b},k=function(){var c=\"Google\";window._track55GoogleSocial=function(b){var a=\"on\"==b.state?\"+1\":\"-1\";b=b.href;g(c,a,b)}},l=function(){var c=\"facebook\",b;if(window.fbSubscribed)return!1;try{var a=FB.Event.subscribe}catch(p){return!1}window.fbSubscribed=!0;var d=0;var e=config55.enumerateIterator({\"edge.create\":\"like\",\"edge.remove\":\"unlike\",\"message.send\":\"send\"});for(b=e.length;d\u003Cb;d++)(function(b,d){a(b,function(a){g(c,d,a)})})(e[d][0],e[d][1]);return!0},m=function(){var c=\"twitter\",b=\n\"tweet\";if(window.twSubscribed)return!1;try{twttr.events.bind(\"tweet\",function(a){if(!a)return!1;a.target\u0026\u0026\"IFRAME\"==a.target.tagName?(a=a.target.src,a=a.split(\"#\")[0],a=a.split(\"?\")[1]||\"\",a=config55.objectify(a),a=a.url?unescape(a.url):void 0):a=\"\";g(c,b,a)})}catch(a){return!1}return window.twSubscribed=!0},g=function(c,b,a){c=\"string\"==typeof c?c:null;b=\"string\"==typeof b?b:null;a=\"string\"==typeof a?a:\"\";if(c\u0026\u0026b){if(b==window.lastAction)return!1;window.lastAction=b;\"unlike\"!==b\u0026\u0026\"-1\"!==b\u0026\u0026(config55.store.st=\nn());config55.dataLayer.push({event:\"trackSocial\",socialNetwork:c,socialAction:b,socialTarget:a});config55.sendEventClassic\u0026\u0026config55.dataLayer.push({event:\"trackEvent\",eventCategory:\"Social\",eventAction:b,eventLabel:c})}},f=function(c){var b=c.match(new RegExp(config55.engagementTopStatus+\"(.*)\"));c=b?b[1]:c;return config55.engagementHierarchy.indexOf(c)},n=function(){var c=15552E6,b=config55.engagementHierarchy.length-1,a=config55.store.st?f(config55.store.st):0;a=Math.min(Math.max(a,0),b);var d=\nconfig55.engagement||\"\",e=config55.store.st?!!config55.store.st.match(new RegExp(config55.engagementTopStatus+\"(.*)\")):!1,g=e\u0026\u0026config55.store.stts||NaN,h=f(d);if(!e\u0026\u0026+a\u003C+b)return config55.engagementHierarchy[b];if(+a==+b)return e\u0026\u0026+new Date-g\u003Cc||(config55.store.stts=+new Date),config55.engagementTopStatus+config55.engagementHierarchy[a];if(+a\u003E+h||!d)return config55.engagementHierarchy[a]};config55.engagement\u0026\u0026window.nbSI!=h()\u0026\u0026(f(config55.store.st||\"\")\u003Cf(config55.engagement)?config55.store.st=config55.engagement:\nf(config55.store.st)!=config55.engagementHierarchy.length-1||f(config55.engagement)!=config55.engagementHierarchy.length-1||config55.store.st.match(new RegExp(config55.engagementTopStatus+\"(.*)\"))||(config55.store.st=config55.engagementTopStatus+config55.engagementHierarchy[config55.engagementHierarchy.length-1],config55.store.stts=+new Date),window.nbSI=h());k();window.twSubscribed||m();window.fbSubscribed||l();config55.store.st||(config55.store.st=config55.engagementHierarchy[0]);config55.saveCookie();\nconfig55.history.engagement[\"lap\"+(config55.history.engagement.counter-1)]=+new Date-config55.history.engagement[\"start\"+(config55.history.engagement.counter-1)];return config55.store.st})();"]
    },{
      "function":"__v",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"transactionId"
    },{
      "function":"__v",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"transactionTotal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){\"undefined\"===typeof window.config55\u0026\u0026",["escape",["macro",13],8,16],"();\"undefined\"==typeof config55.history.membership?(config55.history.membership={start0:+new Date},config55.history.membership.counter=1):(config55.history.membership[\"start\"+config55.history.membership.counter]=+new Date,++config55.history.membership.counter);config55.versions.membership=\"1.1\";var b=config55.store.ltId||\"\",a=",["escape",["macro",21],8,16],"||\"\";if(config55.membership)config55.membershipHierarchy.indexOf(config55.store.ms)\u003C\nconfig55.membershipHierarchy.indexOf(config55.membership)\u0026\u0026(config55.store.ms=config55.membership);else{if(a||+",["escape",["macro",22],8,16],"){if(b===a)return config55.store.ms;config55.membershipHierarchy.indexOf(config55.store.ms)\u003Cconfig55.membershipHierarchy.indexOf(\"1stbuyer\")?config55.store.ms=\"1stbuyer\":config55.membershipHierarchy.indexOf(config55.store.ms)\u003Cconfig55.membershipHierarchy.indexOf(\"buyer\")\u0026\u0026(config55.store.ms=\"buyer\");config55.store.ltId=a}config55.store.ms||(config55.store.ms=config55.membershipHierarchy[0])}config55.saveCookie();\nconfig55.history.membership[\"lap\"+(config55.history.membership.counter-1)]=+new Date-config55.history.membership[\"start\"+(config55.history.membership.counter-1)];return config55.store.ms})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"language"
    },{
      "function":"__ctv"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"appointmentId"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","staging-eu01-cartier\\.demandware\\.net$","value","staging-eu01-cartier.demandware.net"],["map","key","cartier\\.com$","value",".cartier.com"],["map","key","cartier\\.cn","value",".cartier.cn"],["map","key","cartier\\.co\\.kr","value",".cartier.co.kr"],["map","key","cartier\\.de","value",".cartier.de"],["map","key","cartier\\.es","value",".cartier.es"],["map","key","cartier\\.fr","value",".cartier.fr"],["map","key","cartier\\.it","value",".cartier.it"],["map","key","cartier\\.uk","value",".cartier.uk"],["map","key","cartier\\.co\\.uk","value",".cartier.co.uk"],["map","key","cartier\\.ch","value",".cartier.ch"],["map","key","cartier\\.us","value",".cartier.us"],["map","key","cartier\\.jp","value",".cartier.jp"],["map","key","cartier\\.hk","value",".cartier.hk"],["map","key","cartier\\.com\\.br","value",".cartier.com.br"],["map","key","cartier\\.sg","value",".cartier.sg"],["map","key","cartier\\.com\\.au","value",".cartier.com.au"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var f=Math.floor(1E10*Math.random()+1),h=function(c,a,b,d){if(c\u0026\u0026a)if(b){var e=new Date;e.setTime(e.getTime()+b);document.cookie=c+\"\\x3d\"+a+(null==b?\"\":\";expires\\x3d\"+e.toUTCString())+\";path\\x3d\/\"+(d?\";domain\\x3d\"+d:\"\")}else document.cookie=c+\"\\x3d\"+a+\";path\\x3d\/\"+(d?\";domain\\x3d\"+d:\"\")},g=function(c){var a=document.cookie,b=\"\";a=a.split(\"; \");for(i=0;i\u003Ca.length;i++)a[i]=a[i].replace(\"\\x3d\",\"\\x3d\\x3d\"),a[i]=a[i].split(\"\\x3d\\x3d\"),a[i][0]==c\u0026\u0026(b=a[i][1]);return b};if(\"\"!=g(\"sizmekID\"))return g(\"sizmekID\");\nh(\"sizmekID\",f,62208E6,",["escape",["macro",28],8,16],");return f})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionDeliveryDate",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"AbTastyTestId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"AbTastyVariant"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionPaymentType",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionShippingMethod"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=window.dataLayer,a=0;a\u003Cb.length;a++){if(void 0!=b[a].currencycode)return b[a].currencycode;if(void 0!=b[a].currencyCode)return b[a].currencyCode}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"billingCountry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shippingCountry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"typeOfBuyers"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountCreationStatus"
    },{
      "function":"__k",
      "convert_undefined_to":"_not-set_",
      "vtp_decodeCookie":true,
      "vtp_name":"t2s-rank"
    },{
      "function":"__v",
      "convert_undefined_to":"_not-set_",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"kwCAR"
    },{
      "function":"__v",
      "convert_undefined_to":"_not-set_",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"searchResult"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__gaCAR"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",43],8,16],".split(\".\")[3]})();"]
    },{
      "function":"__k",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_decodeCookie":false,
      "vtp_name":"raf_ns"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"_not-set_\"==",["escape",["macro",45],8,16],"){var a=document.domain.split(\".\");a=\"com\"==a[a.length-2]||\"co\"==a[a.length-2]?a[a.length-3]+\".\"+a[a.length-2]+\".\"+a[a.length-1]:a[a.length-2]+\".\"+a[a.length-1];var b=new XMLHttpRequest;b.open(\"GET\",\"https:\/\/www.\"+a+\"\/gtmnetsrc\",!1);b.send();b=204==b.status?\"true\":\"false\";document.cookie=\"raf_ns\\x3d\"+b+\";path\\x3d\/;domain\\x3d\"+a;return b}return ",["escape",["macro",45],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"openID"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__c",
      "vtp_value":"46573917"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",2],
      "vtp_defaultValue":["template","UA-",["macro",49],"-1"],
      "vtp_map":["list",["map","key","QUAL","value",["template","UA-",["macro",49],"-2"]],["map","key","STAG","value",["template","UA-",["macro",49],"-10"]],["map","key","PPROD","value",["template","UA-",["macro",49],"-11"]]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",8]],["map","fieldName","userId","value",["macro",9]],["map","fieldName","page","value",["macro",16]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",14]],["map","index","2","group",["macro",17]],["map","index","3","group",["macro",18]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",19]],["map","index","4","dimension",["macro",20]],["map","index","5","dimension",["macro",23]],["map","index","7","dimension",["macro",24]],["map","index","8","dimension",["macro",25]],["map","index","11","dimension",["macro",26]],["map","index","12","dimension",["macro",27]],["map","index","14","dimension",["macro",29]],["map","index","19","dimension",["macro",30]],["map","index","21","dimension",["template",["macro",31]," - ",["macro",32]]],["map","index","24","dimension",["macro",33]],["map","index","25","dimension",["macro",34]],["map","index","26","dimension",["macro",35]],["map","index","28","dimension",["macro",36]],["map","index","29","dimension",["macro",37]],["map","index","41","dimension",["macro",38]],["map","index","42","dimension",["macro",39]],["map","index","43","dimension",["macro",40]],["map","index","46","dimension",["macro",41]],["map","index","47","dimension",["macro",42]],["map","index","48","dimension",["macro",29]],["map","index","49","dimension",["macro",44]],["map","index","51","dimension",["macro",46]],["map","index","53","dimension",["macro",9]],["map","index","100","dimension",["macro",47]],["map","index","101","dimension",["macro",22]],["map","index","65","dimension",["macro",5]],["map","index","70","dimension",["macro",48]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"efapiaoType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/\"ccbm\":(51|49|59|57)\/i.test(",["escape",["macro",3],8,16],")?\"refuse\":\"accept\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventNonInteraction"
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",13],8,16],"();var a={};var b=config55.getDataLayerListById(\"event\")[1];switch(b.event){case \"eeListView\":if(b=config55.getDataLayerObject(\"event\",\"eeListView\"))for(a.ecommerce=a.ecommerce||{},a.ecommerce.currencyCode=a.ecommerce.currencyCode||b.currencyCode,a.ecommerce.impressions=a.ecommerce.impressions||b.products,j=0;j\u003Ca.ecommerce.impressions.length;j++){a.ecommerce.impressions[j].list=a.ecommerce.impressions[j].listName||\"\";for(var c in config55.customDimProduct)a.ecommerce.impressions[j][\"dimension\"+\nc]=a.ecommerce.impressions[j][config55.customDimProduct[c]]||\"\";for(var d in config55.customMetProduct)a.ecommerce.impressions[j][\"metric\"+d]=a.ecommerce.impressions[j][config55.customMetProduct[d]]||\"\"}break;case \"eeListClick\":if(b=config55.getDataLayerObject(\"event\",\"eeListClick\"))for(a.ecommerce={},a.ecommerce.click={},a.ecommerce.click.actionField={},a.ecommerce.click.products=b.products,j=0;j\u003Ca.ecommerce.click.products.length;j++){a.ecommerce.click.actionField.list=b.products[j].listName||a.ecommerce.click.actionField.list||\n\"\";for(c in config55.customDimProduct)a.ecommerce.click.products[j][\"dimension\"+c]=a.ecommerce.click.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.click.products[j][\"metric\"+d]=a.ecommerce.click.products[j][config55.customMetProduct[d]]||\"\"}break;case \"eePromoView\":if(b=config55.getDataLayerObject(\"event\",\"eePromoView\"))a.ecommerce={},a.ecommerce.promoView={},a.ecommerce.promoView.promotions=b.promotions;break;case \"eePromoClick\":if(b=config55.getDataLayerObject(\"event\",\n\"eePromoClick\"))a.ecommerce={},a.ecommerce.promoClick={},a.ecommerce.promoClick.promotions=b.promotions;break;case \"addToCart\":if(b=config55.getDataLayerObject(\"event\",\"addToCart\"))for(a.ecommerce={},a.ecommerce.currencyCode=b.currencyCode,a.ecommerce.add={},a.ecommerce.add.products=b.products,j=0;j\u003Ca.ecommerce.add.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.add.products[j][\"dimension\"+c]=a.ecommerce.add.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.add.products[j][\"metric\"+\nd]=a.ecommerce.add.products[j][config55.customMetProduct[d]]||\"\"}break;case \"removeFromCart\":if(b=config55.getDataLayerObject(\"event\",\"removeFromCart\"))for(a.ecommerce={},a.ecommerce.remove={},a.ecommerce.remove.products=b.products,j=0;j\u003Ca.ecommerce.remove.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.remove.products[j][\"dimension\"+c]=a.ecommerce.remove.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.remove.products[j][\"metric\"+d]=\na.ecommerce.remove.products[j][config55.customMetProduct[d]]||\"\"}break;case \"eeCheckout\":b=config55.getDataLayerObject(\"eeAction\",\"eeCheckout\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.checkout=a.ecommerce.checkout||{};a.ecommerce.checkout.actionField=a.ecommerce.checkout.actionField||{};a.ecommerce.checkout.actionField.step=a.ecommerce.checkout.actionField.step||b.checkoutStep;a.ecommerce.checkout.actionField.option=a.ecommerce.checkout.actionField.option||\nb.checkoutOption;a.ecommerce.checkout.products=a.ecommerce.checkout.products||b.products;for(j=0;j\u003Ca.ecommerce.checkout.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.checkout.products[j][\"dimension\"+c]=a.ecommerce.checkout.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.checkout.products[j][\"metric\"+d]=a.ecommerce.checkout.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"gtm.js\":if(b=config55.getDataLayerObject(\"event\",\n\"eeCheckoutOption\"))a.ecommerce={},a.ecommerce.checkout_option={},a.ecommerce.checkout_option.actionField={},a.ecommerce.checkout_option.actionField.step=b.checkoutStep,a.ecommerce.checkout_option.actionField.option=b.checkoutOption}return a})();"]
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"__gaCAR"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"currencyCode"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"_not-set_",
      "vtp_map":["list",["map","key","EUR","value","13000"],["map","key","GBP","value","13000"],["map","key","DKK","value","10000"],["map","key","RON","value","60000"],["map","key","CZK","value","335000"],["map","key","SEK","value","140000"],["map","key","PLN","value","60000"],["map","key","HRK","value","96000"],["map","key","BGN","value","25000"],["map","key","HUF","value","4300000"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageURI"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){void 0===window.config55\u0026\u0026",["escape",["macro",13],8,16],"();var a={},e,f=config55.getDataLayerListById(\"eeAction\"),g=f.length;for(e=0;e\u003Cg;e+=1)switch(f[e].eeAction){case \"eeListView\":var b=config55.getDataLayerObject(\"eeAction\",\"eeListView\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.currencyCode=a.ecommerce.currencyCode||b.currencyCode;a.ecommerce.impressions=a.ecommerce.impressions||b.products;for(j=0;j\u003Ca.ecommerce.impressions.length;j++){a.ecommerce.impressions[j].list=\na.ecommerce.impressions[j].listName||\"\";for(var c in config55.customDimProduct)a.ecommerce.impressions[j][\"dimension\"+c]=a.ecommerce.impressions[j][config55.customDimProduct[c]]||\"\";for(var d in config55.customMetProduct)a.ecommerce.impressions[j][\"metric\"+d]=a.ecommerce.impressions[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eeListClick\":b=config55.getDataLayerObject(\"eeAction\",\"eeListClick\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.click=\na.ecommerce.click||{};a.ecommerce.click.actionField=a.ecommerce.click.actionField||{};a.ecommerce.click.actionField.list=a.ecommerce.click.actionField.list||b.list;a.ecommerce.click.products=a.ecommerce.click.products||b.products;for(j=0;j\u003Ca.ecommerce.click.products.length;j++){a.ecommerce.click.products[j].list=a.ecommerce.click.products[j].listName||\"\";for(c in config55.customDimProduct)a.ecommerce.click.products[j][\"dimension\"+c]=a.ecommerce.click.products[j][config55.customDimProduct[c]]||\"\";\nfor(d in config55.customMetProduct)a.ecommerce.click.products[j][\"metric\"+d]=a.ecommerce.click.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eeProductDetail\":b=config55.getDataLayerObject(\"eeAction\",\"eeProductDetail\");b.eeSend=b.eeSend||0;if(b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.detail=a.ecommerce.detail||{};a.ecommerce.detail.actionField=a.ecommerce.detail.actionField||{};a.ecommerce.detail.actionField.list=a.ecommerce.detail.actionField.list||\nb.list;a.ecommerce.detail.products=a.ecommerce.detail.products||b.products;for(j=0;j\u003Ca.ecommerce.detail.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.detail.products[j][\"dimension\"+c]=a.ecommerce.detail.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.detail.products[j][\"metric\"+d]=a.ecommerce.detail.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eePromoView\":b=config55.getDataLayerObject(\"eeAction\",\"eePromoView\");\nb.eeSend=b.eeSend||0;b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl\u0026\u0026(a.ecommerce=a.ecommerce||{},a.ecommerce.promoView=a.ecommerce.promoView||{},a.ecommerce.promoView.promotions=a.ecommerce.promoView.promotions||b.promotions,b.eeSend+=1);break;case \"eePromoClick\":if(b=config55.getDataLayerObject(\"eeAction\",\"eePromoClick\"))a.ecommerce={},a.ecommerce.promoClick={},a.ecommerce.promoClick.promotions=b.promotions;break;case \"eeCheckout\":b=config55.getDataLayerObject(\"eeAction\",\"eeCheckout\");b.eeSend=b.eeSend||0;if(b\u0026\u0026\nb.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.checkout=a.ecommerce.checkout||{};a.ecommerce.checkout.actionField=a.ecommerce.checkout.actionField||{};a.ecommerce.checkout.actionField.step=a.ecommerce.checkout.actionField.step||b.checkoutStep;a.ecommerce.checkout.actionField.option=a.ecommerce.checkout.actionField.option||b.checkoutOption;a.ecommerce.checkout.products=a.ecommerce.checkout.products||b.products;for(j=0;j\u003Ca.ecommerce.checkout.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.checkout.products[j][\"dimension\"+\nc]=a.ecommerce.checkout.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.checkout.products[j][\"metric\"+d]=a.ecommerce.checkout.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}break;case \"eeRefund\":if(b=config55.getDataLayerObject(\"eeAction\",\"eeRefund\"),b.eeSend=b.eeSend||0,b\u0026\u0026b.eeSend\u003Cconfig55.nbPvTpl){a.ecommerce=a.ecommerce||{};a.ecommerce.refund=a.ecommerce.refund||{};a.ecommerce.refund.actionField=a.ecommerce.refund.actionField||{};a.ecommerce.refund.actionField.id=\na.ecommerce.refund.actionField.id||b.transactionId;a.ecommerce.refund.products=a.ecommerce.refund.products||b.products;for(j=0;j\u003Ca.ecommerce.refund.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.refund.products[j][\"dimension\"+c]=a.ecommerce.refund.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.refund.products[j][\"metric\"+d]=a.ecommerce.refund.products[j][config55.customMetProduct[d]]||\"\"}b.eeSend+=1}}b=0;config55.getDataLayerValue(\"transactionTotal\")\u003E=\n",["escape",["macro",62],8,16],"\u0026\u0026b++;(1==\/fr|en_gb\/.test(",["escape",["macro",63],8,16],")||\/cartier\\.eu\/.test(",["escape",["macro",5],8,16],"))\u0026\u0026b++;\"Bank transfer\"==",["escape",["macro",33],8,16],"\u0026\u0026b++;if(config55.getDataLayerValue(\"transactionId\")\u0026\u0026(config55.getDataLayerValue(\"transactionId\")!==config55.store.eeId||config55.getDataLayerValue(\"transactionId\")===config55.store.eeId\u0026\u00261\u003Cconfig55.nbPvTpl\u0026\u0026config55.nbConversion\u0026\u0026config55.nbConversion\u003Cconfig55.nbPvTpl)\u0026\u0026!isNaN(+config55.getDataLayerValue(\"transactionTotal\"))\u0026\u00263!==b){a.ecommerce=\na.ecommerce||{};a.ecommerce.purchase=a.ecommerce.purchase||{};a.ecommerce.purchase.actionField=a.ecommerce.purchase.actionField||{};a.ecommerce.purchase.actionField.id=config55.getDataLayerValue(\"transactionId\");a.ecommerce.purchase.actionField.revenue=config55.getDataLayerValue(\"transactionTotal\");a.ecommerce.purchase.actionField.affiliation=config55.getDataLayerValue(\"transactionAffiliation\");a.ecommerce.purchase.actionField.tax=config55.getDataLayerValue(\"transactionTax\");a.ecommerce.purchase.actionField.shipping=\nconfig55.getDataLayerValue(\"transactionShipping\");a.ecommerce.purchase.actionField.coupon=config55.getDataLayerValue(\"transactionCoupon\");a.ecommerce.currencyCode=config55.getDataLayerValue(\"transactionCurrency\")||config55.getDataLayerValue(\"currencyCode\");a.ecommerce.purchase.products=config55.getDataLayerValue(\"transactionProducts\")||config55.getDataLayerValue(\"products\");for(j=0;j\u003Ca.ecommerce.purchase.products.length;j++){for(c in config55.customDimProduct)a.ecommerce.purchase.products[j][\"dimension\"+\nc]=a.ecommerce.purchase.products[j][config55.customDimProduct[c]]||\"\";for(d in config55.customMetProduct)a.ecommerce.purchase.products[j][\"metric\"+d]=a.ecommerce.purchase.products[j][config55.customMetProduct[d]]||\"\"}config55.store.eeId=config55.getDataLayerValue(\"transactionId\");config55.saveCookie();config55.nbConversion=config55.nbConversion||0;config55.nbConversion++}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"!=typeof mediaDataLayer){for(var a=0;a\u003C=mediaDataLayer.length;a++)if(\"undefined\"!=typeof mediaDataLayer[a].event\u0026\u0026\"pageviewCallback\"==mediaDataLayer[a].event)return;window.mediaDataLayer.push({event:\"pageviewCallback\"})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"checkoutStep"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dimension44"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dimension45"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",43],8,16],".split(\".\")[2]+\".\"+",["escape",["macro",43],8,16],".split(\".\")[3]})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"socialAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialTarget",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialNetwork",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-ya-track"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",14]],["map","index","2","group",["macro",17]],["map","index","3","group",["macro",18]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":"cartier",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",8]],["map","fieldName","page","value",["macro",63]],["map","fieldName","cookieName","value",["macro",60]],["map","fieldName","allowLinker","value","true"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",19]],["map","index","4","dimension",["macro",20]],["map","index","5","dimension",["macro",23]],["map","index","7","dimension",["macro",47]],["map","index","8","dimension",["macro",22]],["map","index","11","dimension",["macro",26]],["map","index","12","dimension",["macro",27]],["map","index","14","dimension",["macro",29]],["map","index","19","dimension",["macro",30]],["map","index","21","dimension",["template",["macro",31]," - ",["macro",32]]],["map","index","24","dimension",["macro",33]],["map","index","25","dimension",["macro",34]],["map","index","26","dimension",["macro",35]],["map","index","28","dimension",["macro",36]],["map","index","29","dimension",["macro",37]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"q",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=void 0,b=",["escape",["macro",80],8,16],";b\u0026\u0026(a=b.split(\"storeID\\x3d\"),a=a[1]);return a})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"r",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "convert_case_to":1,
      "vtp_component":"QUERY",
      "vtp_queryKey":"storetype",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productRef"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"gaEventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"gaEventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"gaEventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"gaEventLabel"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"productLine",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productCollection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products.0.sellable"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productId"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"productName",
      "vtp_dataLayerVersion":2
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__c",
      "vtp_value":"G-Y7CLGJBK5Z"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"boutiqueName",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"boutiqueId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"visitPurpose"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"appointmentFormat"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotions.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"boutiqueSearchTerm"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"locationSearched"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subfilter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contactCountrySelected"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"countrySelected"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"sellable",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"page",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoInteractions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"requestCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newsletterSubOrigin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"citySelected"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"boutiqueFilter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nameOfTheVideo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pushNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pushDescription"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"categoryOrCollectionName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tabName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"footerLink"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"firstLevel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"secondLevel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"thirdLevel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fourthLevel"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"homepageVersion"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adaptive"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"desktop\";\/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune\/.test(navigator.userAgent)\u0026\u0026(a=\"mobile\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",139],8,16],"?",["escape",["macro",139],8,16],":",["escape",["macro",140],8,16],"})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newsletterSubscription"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"funnelStep"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productModel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productMaterial"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"strapType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"strapColor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contactNumberClicked"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productSubMenuClicked"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productMetal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"typeStone"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"stoneColor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productSize"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"headerLink"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"subHeaderLink"
    },{
      "function":"__v",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sliderLink"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"24493",
      "vtp_map":["list",["map","key","^www\\.cartier\\.cn$","value","151949"],["map","key","^(www|ca)\\.cartier\\.com$","value","160797"],["map","key","^www\\.cartier\\.es$","value","202089"],["map","key","^www\\.cartier\\.(sg|hk)|^www\\.au\\.cartier\\.com$|^www\\.cartier\\.com\\.au","value","148021"],["map","key","preprod","value","152266"],["map","key","^www\\.cartier\\.jp$","value","206081"],["map","key","^www\\.ru\\.cartier\\.com$|^www\\.staging\\.ru\\.cartier\\.com$","value","206496"],["map","key","^www\\.cartier\\.co\\.kr$","value","202527"],["map","key","^www\\.cartier\\.com\\.br$|^www\\.cartier\\.mx$","value","202308"],["map","key","^www\\.cartier\\.de$|^www\\.cartier\\.it$|^www\\.cartier\\.fr$","value","202746"],["map","key","^www\\.cartier\\.eu$|^int\\.cartier\\.com$","value","24493"],["map","key","^www\\.cartier\\.ch$","value","166757"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionIdMedallia"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"en",
      "vtp_name":"siteLanguage"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=window.dataLayer,d=[],a=b.length-1;0\u003Ca;a--)if(b[a].products){for(var c=0;c\u003Cb[a].products.length;c++)d.push(b[a].products[c].productRef);return d}})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",99],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_map":["list",["map","key","\\.cartier\\.","value","Internal"],["map","key","(?!\\.cartier\\.)","value","External"]]
    },{
      "function":"__remm",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(www\\.cartier\\.com)|(stores\\.cartier\\.com\\\/en_us)","value","d1xqz5swk3dyh"],["map","key","(\\.cartier\\.jp)|(stores\\.cartier\\.com\\\/ja)","value","d243ygykfxngl9"],["map","key","(\\.cartier\\.co\\.uk)|(stores\\.cartier\\.com\\\/en_gb)","value","d26eufcawwi37e"],["map","key","(\\.cartier\\.(fr|es|it|de|ch|cn|hk|sg|))|(\\.int\\.cartier\\.com)|(stores\\.cartier\\.com\\\/(fr|es|it|de|en_ch|en_hk|en_sg|zh))","value","d2wi0zd8hr0kno"],["map","key","((au|ca)\\.cartier\\.com)|(stores\\.cartier\\.com\\\/(en_au|en_ca|fr_ca|en_ca))|(\\.cartier\\.com\\.au)","value","d2wi0zd8hr0kno"]]
    },{
      "function":"__remm",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(www\\.cartier\\.com)|(stores\\.cartier\\.com\\\/en_us)","value","d3371502"],["map","key","(\\.cartier\\.jp)|(stores\\.cartier\\.com\\\/ja)","value","669bb43d"],["map","key","((au|ca)\\.cartier\\.com)|(stores\\.cartier\\.com\\\/(en_au|en_ca|fr_ca|en_ca))|(\\.cartier\\.com\\.au)","value","f8e366da"],["map","key","(\\.cartier\\.(fr|es|it|de|ch|cn|hk|sg|))|(\\.int\\.cartier\\.com)|(stores\\.cartier\\.com\\\/(fr|es|it|de|en_ch|en_hk|en_sg|zh))","value","f8e366da"],["map","key","(\\.cartier\\.co\\.uk)|(stores\\.cartier\\.com\\\/en_gb)","value","4bcf651f"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*\\.co\\.uk)|(stores\\.cartier\\.com\/en_gb)","value","442b03418ef0b"],["map","key","(.*\\.hk)|(stores\\.cartier\\.com\\\/(zh_hk|en_hk))","value","0f60a52c0257c"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\.mx","value","1374842"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\.mx","value","217740"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"StockPopin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"skuinstockList"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"skuoutstockList"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventOnPageLoad"
    },{
      "function":"__remm",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","cartiercare\\.staging\\.cartier\\.","value","true"],["map","key","cartiercare\\.preprod\\.cartier\\.","value","true"],["map","key","cartiercare\\.cartier\\.","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_map":["list",["map","key","(www\\.cartier\\.co\\.uk)|(stores\\.cartier\\.com\\\/en_gb)","value","4R7F8IH9VF3QEE"],["map","key","(staging|quality|preprod)\\.cartier\\.(co\\.uk|de|fr|es|it|jp|com)","value","VQT7YK22YVYOGY"],["map","key","(www\\.cartier\\.fr)|(stores\\.cartier\\.com\\\/fr\\\/)","value","SRKJ7VL7TU3PJ7"],["map","key","(www\\.cartier\\.de)|(stores\\.cartier\\.com\\\/de)","value","IMLP912U5P7AHQ"],["map","key","(www\\.cartier\\.es)|(stores\\.cartier\\.com\\\/es\\\/)","value","4WKB0IMZDBX9S9"],["map","key","(www\\.cartier\\.com\\\/)|(stores\\.cartier\\.com\\\/(en_us|en-us))","value","E0G2U891DI6YCS"],["map","key","(www\\.cartier\\.jp)|(stores\\.cartier\\.com\\\/ja)","value","DQMBSWL2JKWAC6"],["map","key","(www\\.cartier\\.it)|(stores\\.cartier\\.com\\\/it)","value","AOW5FB9EC2IHXW"],["map","key","(ca\\.cartier\\.com)|(stores\\.cartier\\.com\\\/(fr|en)_ca\\\/)","value","8L6466PC2IFBE2"],["map","key","www\\.int\\.cartier\\.com","value","TEZ9H96ZHHVUZQ"],["map","key","(int\\.(preprod(2)|staging)\\.cartier\\.com)","value","5K7JL29T5FLC5L"]]
    },{
      "function":"__v",
      "vtp_name":"siteSearchResults",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"siteSearchTerm",
      "vtp_dataLayerVersion":2
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_map":["list",["map","key","www\\.cartier\\.com\\\/|stores\\.cartier\\.com\\\/en_us\\\/","value","23BDB7D2-4873-4648-2A8E-73E4BAD4EE5A"],["map","key","www\\.cartier\\.fr\\\/|stores\\.cartier\\.com\\\/fr\\\/","value","0BF4AF9D-646F-126B-1205-575ABB2BAE51"],["map","key","www\\.cartier\\.ch\\\/|stores\\.cartier\\.com\\\/(fr_ch|de_ch|it_ch|en_ch)\\\/","value","3C92692C-0611-0212-D510-0B1BBF03FC84"],["map","key","www\\.cartier\\.de\\\/|stores\\.cartier\\.com\\\/de\\\/","value","B9A889D8-E294-E936-0209-3FA53E40585E"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"_not-set_",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\.cartier\\.co\\.uk|stores\\.cartier\\.com\\\/en\\_gb\\\/","value","app_100121321"],["map","key","\\.cartier\\.fr|stores\\.cartier\\.com\\\/fr\\\/","value","app_100121393"],["map","key","\\.cartier\\.de|stores\\.cartier\\.com\\\/de\\\/","value","app_100121394"],["map","key","\\.cartier\\.ch\\\/de\\-ch\\\/|stores\\.cartier\\.com\\\/de_ch\\\/","value","app_100121399"],["map","key","\\.cartier\\.ch\\\/$|cartier\\.ch\\\/fr\\-ch\\\/|stores\\.cartier\\.com\\\/fr_ch\\\/","value","app_100121398"],["map","key","\\.cartier\\.ch\\\/en\\-ch\\\/|stores\\.cartier\\.com\\\/en_ch\\\/","value","app_100121396"],["map","key","\\.cartier\\.it|stores\\.cartier\\.com\\\/it\\\/","value","app_100121395"],["map","key","www\\.cartier\\.com\\\/|stores\\.cartier\\.com\\\/en_us\\\/","value","app_100121426"],["map","key","ca\\.cartier\\.com\\\/en\\-ca\\\/|ca\\.cartier\\.com\\\/$|stores\\.cartier\\.com\\\/en_ca\\\/","value","app_100121444"],["map","key","ca\\.cartier\\.com\\\/fr\\-ca\\\/|stores\\.cartier\\.com\\\/fr_ca\\\/","value","app_100121447"],["map","key","\\.cartier\\.mx|stores\\.cartier\\.com\\\/es_mx\\\/","value","app_100123052"],["map","key","\\.cartier\\.cn|stores\\.cartier\\.com\\\/zh_cn\\\/","value","app_100121410"],["map","key","\\.cartier\\.sg\\\/zh\\-sg\\\/|stores\\.cartier\\.com\\\/zh_sg\\\/|\\\/sg\\\/singapore\\\/zh\\_sg\\\/","value","app_100121420"],["map","key","\\.cartier\\.sg\\\/$|\\.cartier\\.sg\\\/en\\-sg\\\/|stores\\.cartier\\.com\\\/en_sg\\\/","value","app_100121419"],["map","key","\\.cartier\\.hk\\\/$|\\.cartier\\.hk\\\/zh\\-hk\\\/|stores\\.cartier\\.com\\\/zh_hk\\\/","value","app_100121418"],["map","key","\\.cartier\\.hk\\\/en\\-hk\\\/|stores\\.cartier\\.com\\\/en_hk\\\/","value","app_100121417"],["map","key","\\.cartier\\.com\\.au|stores\\.cartier\\.com\\\/en_au\\\/|au\\.cartier\\.com","value","app_100121421"],["map","key","\\.cartier\\.jp|stores\\.cartier\\.com\\\/ja\\\/","value","app_100121422"],["map","key","\\.cartier\\.ch\\\/it\\-ch\\\/|stores\\.cartier\\.com\\\/it_ch\\\/","value","app_100121409"],["map","key","\\.cartier.es|stores\\.cartier\\.com\\\/es\\\/","value","app_100121428"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eeAction"
    },{
      "function":"__jsm",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_javascript":["template","(function(){for(var b=window.dataLayer,d=[],a=b.length-1;0\u003Ca;a--)if(b[a].products){for(var c=0;c\u003Cb[a].products.length;c++)d.push(b[a].products[c].isAvailable);return d}})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_javascript":["template","(function(){for(var b=window.dataLayer,d=[],a=b.length-1;0\u003Ca;a--)if(b[a].products){for(var c=0;c\u003Cb[a].products.length;c++)d.push(b[a].products[c].price);return d}})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_javascript":["template","(function(){for(var b=window.dataLayer,d=[],a=b.length-1;0\u003Ca;a--)if(b[a].products){for(var c=0;c\u003Cb[a].products.length;c++)d.push(b[a].products[c].productVertical);return d}})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_javascript":["template","(function(){for(var b=window.dataLayer,d=[],a=b.length-1;0\u003Ca;a--)if(b[a].products){for(var c=0;c\u003Cb[a].products.length;c++)d.push(b[a].products[c].productCollection);return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=window.dataLayer,d=[],a=b.length-1;0\u003Ca;a--)if(b[a].products){for(var c=0;c\u003Cb[a].products.length;c++)d.push(b[a].products[c].name);return d}})();"]
    },{
      "function":"__c",
      "vtp_value":"Purchase"
    },{
      "function":"__v",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"_not-set_",
      "vtp_name":"transactionShipping"
    },{
      "function":"__v",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTax"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=0,c=",["escape",["macro",108],8,16],",a=0;a\u003Cc.length;a++)b+=c[a].quantity;return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,d=-a.getTimezoneOffset(),e=0\u003C=d?\"+\":\"-\",b=function(c){c=Math.abs(Math.floor(c));return(10\u003Ec?\"0\":\"\")+c};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+e+b(d\/60)+\":\"+b(d%60)})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",24],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","US","value","2792005782"],["map","key","GB","value","2635229648"],["map","key","FR","value","3326240934"],["map","key","DE","value","345576428"],["map","key","HK","value","864475082"],["map","key","ES","value","3288429412"],["map","key","IT","value","1015796928"],["map","key","NL|FI","value","3348972114"],["map","key","CH","value","904231618"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageType"
    },{
      "function":"__c",
      "vtp_value":"79f17dc7-1d82-46c1-81a4-c6f8ac9cd703"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":false,
      "vtp_defaultValue":"_not-set_",
      "vtp_map":["list",["map","key","\\.cartier\\.hk\\\/zh\\-hk\\\/","value","zh_HK"],["map","key","\\.cartier\\.hk\\\/en\\-hk.*","value","en_GB"],["map","key","\\.cartier\\.hk","value","zh_HK"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www\\.cartier\\.fr","value","9b5cd556-67ea-46fe-8074-17a20b9c1193"],["map","key","www\\.preprod2\\.cartier\\.fr","value","staging-d79d00c8-ae39-4d79-923a-49a36d1b9e63"]]
    },{
      "function":"__jsm",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_javascript":["template","(function(){for(var b=window.dataLayer,d=[],a=b.length-1;0\u003Ca;a--)if(b[a].products){for(var c=0;c\u003Cb[a].products.length;c++)d.push(b[a].products[c].id);return d}})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_javascript":["template","(function(){for(var b=window.dataLayer,d=[],a=b.length-1;0\u003Ca;a--)if(b[a].products){for(var c=0;c\u003Cb[a].products.length;c++)d.push(b[a].products[c].productVertical);return d}})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"_not-set_",
      "convert_undefined_to":"_not-set_",
      "vtp_javascript":["template","(function(){for(var b=window.dataLayer,d=[],a=b.length-1;0\u003Ca;a--)if(b[a].products){for(var c=0;c\u003Cb[a].products.length;c++)d.push(b[a].products[c].variant);return d}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"theMaisonSubCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"otherPageName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"visitorCity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"visitorYearOfBirth"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"visitorGender"
    },{
      "function":"__k",
      "vtp_name":"__55"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"creationSelected"
    },{
      "function":"__v",
      "vtp_name":"serviceSubCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productLineTicked"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"messageCardType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":true,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"stockAvailability"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sizeSelected"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",30],8,16],")switch(",["escape",["macro",30],8,16],"){case \"yes\":case \"Yes\":return\"with transactionDeliveryDate\";case \"no\":case \"No\":return\"without transactionDeliveryDate\";default:return null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",43],8,16],".split(\".\")[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var a=\/__utma=([^;$]*)\/g;a=a.exec(document.cookie)||[];return a.length?a[1].split(\".\")[4]:void 0}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no",
      "vtp_name":"bookAppointment"
    },{
      "function":"__c",
      "vtp_value":"d3371502"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(a,b){return a+b}for(var a=window.dataLayer,d=[],b=0;b\u003Ca.length;b++)if(a[b].products){for(var c=0;c\u003Ca[b].products.length;c++)d.push(parseFloat(a[b].products[c].price)*parseFloat(a[b].products[c].quantity)),parseFloat(a[b].products[c].price),parseFloat(a[b].products[c].quantity);break}return a=d.reduce(e,0)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no",
      "vtp_name":"contactAmbassador"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",43],8,16],".split(\".\")[1]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no",
      "vtp_name":"deliveryError"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"undefined\",b=",["escape",["macro",84],8,16],";b\u0026\u0026(a=b.innerText);return a})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*\\.cartier\\.com\\\/(en-us|en_us)\\\/)|(.*\\.cartier\\.com\\\/.*\\\/(en_us|en-us))","value","en"],["map","key",".*\\.cartier\\.co\\.uk","value","en"],["map","key","(.*\\.cartier\\.fr)|(.*\\.cartier\\.com\\\/fr)","value","fr"],["map","key","(.*\\.cartier\\.it)|(.*\\.cartier\\.com\\\/it)","value","it"],["map","key","(.*\\.cartier\\.es)|(.*\\.cartier\\.com\\\/es)","value","es"],["map","key","(.*\\.cartier\\.de)|(.*\\.cartier\\.com\\\/de)","value","de"],["map","key","(.*\\.cartier\\.cn)|(.*\\.cartier\\.com\\\/zh)","value","cn"],["map","key","(.*\\.cartier\\.jp)|(.*\\.cartier\\.com\\\/jp)","value","ja"],["map","key",".*\\.cartier\\.hk\/$","value","en"],["map","key",".*\\.cartier\\.hk\/zh-hk\/","value","cn"],["map","key",".*\\.cartier\\.hk\/en-hk\/","value","en"],["map","key",".*\\.cartier\\.sg\/$","value","en"],["map","key",".*\\.cartier\\.sg\/en-sg\/","value","en"],["map","key",".*\\.cartier\\.sg\/zh-sg\/","value","cn"],["map","key",".*\\.cartier\\.ch\/de-ch\/","value","de"],["map","key",".*\\.cartier\\.ch\/en-ch\/","value","en"],["map","key",".*\\.cartier\\.ch\/it-ch\/","value","it"],["map","key",".*\\.cartier\\.ch\/fr-ch\/","value","fr"],["map","key",".*\\.cartier\\.ch\/$","value","fr"],["map","key",".*\\.au\\..*|\\.com\\.au","value","en"],["map","key","(.*\\.)?ca\\.cartier\\.com\/en\\-ca\/","value","en"],["map","key","(.*\\.)?ca\\.cartier\\.com$","value","en"],["map","key",".*\\.cartier\\.mx","value","es"],["map","key","www\\.cartier\\.com\\\/ar\\-ae\\\/","value","ar"],["map","key","www\\.cartier\\.com\\\/en\\-ae\\\/","value","en"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no",
      "vtp_name":"loginFailed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no",
      "vtp_name":"productEngraving"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"no",
      "vtp_name":"stockAvailability"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"productPrice"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.search;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"stepFunnel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"body \\x3e div.cclist.ccpane\");return a.style.visibility})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"_not-set_",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\.cartier\\.mx|stores\\.cartier\\.com\\\/es_mx\\\/","value","pk_70a66d2dadc44f578111ba1c6a4f75ba"],["map","key","cartiermx\\.myvtex\\.com","value","pk_713b7a8627824ea2951e7ea75d51b301"]]
    },{
      "function":"__c",
      "vtp_value":["macro",233]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"_not-set_",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\.cartier\\.mx|stores\\.cartier\\.com\\\/es_mx\\\/","value","mtwopd78zl1cvi3pen1s"],["map","key","cartiermx\\.myvtex\\.com","value","melkyfqjou8ghcyfkfsh"]]
    },{
      "function":"__c",
      "vtp_value":["macro",235]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"_not-set_",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\.cartier\\.mx|stores\\.cartier\\.com\\\/es_mx\\\/","value","false"],["map","key","cartiermx\\.myvtex\\.com","value","true"]]
    },{
      "function":"__c",
      "vtp_value":["macro",237]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"variant"
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":2,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"===typeof window.config55\u0026\u0026",["escape",["macro",13],8,16],"();",["escape",["macro",172],8,16],"\u0026\u0026",["escape",["macro",173],8,16],"\u0026\u0026config55.pushDL(\"trackEvent\",\"Shopping bag\",\"Product \"+",["escape",["macro",172],8,16],".toLowerCase(),",["escape",["macro",173],8,16],");",["escape",["macro",172],8,16],"\u0026\u0026",["escape",["macro",174],8,16],"\u0026\u0026config55.pushDL(\"trackEvent\",\"Shopping bag\",\"Product \"+",["escape",["macro",172],8,16],".toLowerCase(),",["escape",["macro",174],8,16],");\n\"subscribeNewsletterBoutiqueAppointment\"==",["escape",["macro",175],8,16],"\u0026\u0026dataLayer.push({event:\"trackEvent\",eventCategory:\"Nesletter form\",eventAction:\"Newsletter subscription\",eventLabel:\"Subscribe To The Newsletter from Boutique appointment\"});\"bookAnAppointmentConfirmation\"==",["escape",["macro",175],8,16],"\u0026\u0026dataLayer.push({event:\"trackEvent\",eventCategory:\"Contact confirmation\",eventAction:\"Book an appointment\",eventLabel:\"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":491
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function f(a,e){if(\"undefined\"!==typeof a){for(var d=\"\",b=0;b\u003Ca.length;b++){var c=a[b];0!==b\u0026\u0026(d+=\"|\");d+=\"CR\"+c[e]}return d}}function g(a,e){if(\"undefined\"!==typeof a){for(var d=\"\",b=0;b\u003Ca.length;b++){var c=a[b];0!==b\u0026\u0026(d+=\"|\");d+=c[e]}return d}}customerId=",["escape",["macro",177],8,16],";var h={code_page:\"Homepage\",url:!1,params:[{variable_t2s:\"cID\",value:customerId,fonction:null},{variable_t2s:\"pID\",value:\"1000\",fonction:null},{variable_t2s:\"eN\",value:\"view\",fonction:null}]},k={code_page:\"Product pages\",\nurl:!1,params:[{variable_t2s:\"cID\",value:customerId,fonction:null},{variable_t2s:\"pID\",value:\"1200\",fonction:null},{variable_t2s:\"eN\",value:\"view\",fonction:null},{variable_t2s:\"iID\",value:\"CR\"+",["escape",["macro",164],8,16],",fonction:null}]},l={code_page:\"Product listing pages\",url:!1,params:[{variable_t2s:\"cID\",value:customerId,fonction:null},{variable_t2s:\"pID\",value:\"1400\",fonction:null},{variable_t2s:\"eN\",value:\"view\",fonction:null}]},m={code_page:\"Categories or collections listing pages\",url:!1,params:[{variable_t2s:\"cID\",\nvalue:customerId,fonction:null},{variable_t2s:\"pID\",value:\"2200\",fonction:null},{variable_t2s:\"eN\",value:\"view\",fonction:null}]},n={code_page:\"Product line homepages\",url:!1,params:[{variable_t2s:\"cID\",value:customerId,fonction:null},{variable_t2s:\"pID\",value:\"2201\",fonction:null},{variable_t2s:\"eN\",value:\"view\",fonction:null}]},p={code_page:\"Maison pages\",url:!1,params:[{variable_t2s:\"cID\",value:customerId,fonction:null},{variable_t2s:\"pID\",value:\"2202\",fonction:null},{variable_t2s:\"eN\",value:\"view\",\nfonction:null}]},q={code_page:\"Services pages\",url:!1,params:[{variable_t2s:\"cID\",value:customerId,fonction:null},{variable_t2s:\"pID\",value:\"2203\",fonction:null},{variable_t2s:\"eN\",value:\"view\",fonction:null}]},r={code_page:null,url:\"\/shopping-bag\/checkout-page\/confirm_purchase\",params:[{variable_t2s:\"cID\",value:customerId,fonction:null},{variable_t2s:\"pID\",value:\"2400\",fonction:null},{variable_t2s:\"eN\",value:\"view\",fonction:null},{variable_t2s:\"oID\",value:",["escape",["macro",21],8,16],",fonction:null},{variable_t2s:\"iID\",\nvalue:null,fonction:f(",["escape",["macro",108],8,16],",\"productRef\")},{variable_t2s:\"qTE\",value:null,fonction:g(",["escape",["macro",108],8,16],",\"quantity\")}]},t={code_page:null,url:\"\/shopping-bag\",params:[{variable_t2s:\"cID\",value:customerId,fonction:null},{variable_t2s:\"pID\",value:\"1600\",fonction:null},{variable_t2s:\"eN\",value:\"view\",fonction:null},{variable_t2s:\"iID\",value:null,fonction:f(",["escape",["macro",108],8,16],",\"productRef\")},{variable_t2s:\"qTE\",value:null,fonction:g(",["escape",["macro",108],8,16],",\"quantity\")}]},u={code_page:\"Errors pages\",\nurl:!1,params:[{variable_t2s:\"cID\",value:customerId,fonction:null},{variable_t2s:\"pID\",value:\"3600\",fonction:null},{variable_t2s:\"eN\",value:\"view\",fonction:null}]},v={variable_t2s:\"cID\",value:customerId,fonction:null};var w=",["escape",["macro",178],8,16],"\u0026\u00260===Number(",["escape",["macro",178],8,16],")?\"3400\":\"2000\";var x={pages:[h,k,l,m,n,p,q,r,t,u,{code_page:\"Search pages\",url:!1,params:[v,{variable_t2s:\"pID\",value:null,fonction:w},{variable_t2s:\"eN\",value:\"view\",fonction:null},{variable_t2s:\"iID\",value:",["escape",["macro",179],8,16],",\nfonction:null},{variable_t2s:\"kw\",value:",["escape",["macro",179],8,16],",fonction:null}]}],getParams:function(){var a=!1,e=",["escape",["macro",17],8,16],",d=\"undefined\"==",["escape",["macro",63],8,16],"?",["escape",["macro",117],8,16],":",["escape",["macro",63],8,16],";$.each(this.pages,function(b,c){if(d\u0026\u0026-1\u003Cd.indexOf(c.url))return a=c.params,!1});a||$.each(this.pages,function(b,c){if(c.code_page===e)return a=c.params,!1});a\u0026\u0026(window._t2sparams=window._t2sparams||{},$.each(a,function(b,c){b=!1;c.value\u0026\u0026(b=c.value);c.fonction\u0026\u0026(b=\"\"+c.fonction);b\u0026\u0026\n(_t2sparams[c.variable_t2s]=b)}));return a}},y=setInterval(function(){if(\"undefined\"!==typeof dataLayer){window.clearInterval(y);var a=x.getParams();if((!_t2sparams||\"2400\"!=_t2sparams.pID||_t2sparams.oID\u0026\u0026!(_t2sparams.oID\u0026\u0026-1\u003C_t2sparams.oID.indexOf(\"not-set\")))\u0026\u0026a){_t2sparams.hasRankOption=!0;a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\"==document.location.protocol?\"https:\/\/static.target2sell.com\/t2s.min.js\":\"http:\/\/s3.target2sell.com\/t2s.min.js\";var e=document.getElementsByTagName(\"script\")[0];\ne.parentNode.insertBefore(a,e)}}},200)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":493
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"437870",
      "tag_id":70
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":478
    },{
      "function":"__lcl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "tag_id":481
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Efapiao",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",51],
      "vtp_eventAction":["macro",52],
      "vtp_eventLabel":"-",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":486
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":492
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",54],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",55],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",51],
      "vtp_eventAction":["macro",56],
      "vtp_eventLabel":["macro",57],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",58],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",59],
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",16]],["map","fieldName","cookieDomain","value",["macro",28]],["map","fieldName","cookieName","value",["macro",60]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":494
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",54],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",55],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",51],
      "vtp_eventAction":["macro",56],
      "vtp_eventLabel":["macro",57],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",58],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",59],
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",16]],["map","fieldName","cookieDomain","value",["macro",28]],["map","fieldName","cookieName","value",["macro",60]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":495
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",103,0]],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"cartier",
      "vtp_decorateFormsAutoLink":false,
      "vtp_gaSettings":["macro",51],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",16]],["map","fieldName","cookieDomain","value",["macro",28]],["map","fieldName","cookieName","value",["macro",60]],["map","fieldName","allowLinker","value","true"],["map","fieldName","hitCallback","value",["macro",65]],["map","fieldName","pageURI","value",["macro",63]],["map","fieldName","checkoutStep","value",["macro",66]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","41","dimension",["macro",38]],["map","index","42","dimension",["macro",39]],["map","index","43","dimension",["macro",40]],["map","index","44","dimension",["macro",67]],["map","index","45","dimension",["macro",68]],["map","index","46","dimension","_not-set_"],["map","index","47","dimension","_not-set_"],["map","index","48","dimension","_not-set_"],["map","index","49","dimension",["macro",69]],["map","index","50","dimension","_not-set_"],["map","index","51","dimension","_not-set_"],["map","index","52","dimension",["macro",44]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false,
      "tag_id":496
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"cartier",
      "vtp_decorateFormsAutoLink":false,
      "vtp_gaSettings":["macro",51],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",16]],["map","fieldName","cookieDomain","value",["macro",28]],["map","fieldName","cookieName","value",["macro",60]],["map","fieldName","allowLinker","value","true"],["map","fieldName","hitCallback","value",["macro",65]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":497
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",103,0]],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"cartier",
      "vtp_decorateFormsAutoLink":false,
      "vtp_gaSettings":["macro",51],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",64],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",16]],["map","fieldName","cookieDomain","value",["macro",28]],["map","fieldName","cookieName","value",["macro",60]],["map","fieldName","allowLinker","value","true"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","41","dimension",["macro",38]],["map","index","42","dimension",["macro",39]],["map","index","43","dimension",["macro",40]],["map","index","44","dimension",["macro",67]],["map","index","45","dimension",["macro",68]],["map","index","46","dimension","_not-set_"],["map","index","47","dimension","_not-set_"],["map","index","48","dimension","_not-set_"],["map","index","49","dimension",["macro",69]],["map","index","50","dimension","_not-set_"],["map","index","51","dimension","_not-set_"],["map","index","52","dimension",["macro",44]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false,
      "tag_id":498
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",16]],["map","fieldName","cookieDomain","value",["macro",28]],["map","fieldName","cookieName","value",["macro",60]]],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",71],
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",51],
      "vtp_socialActionTarget":["macro",72],
      "vtp_socialNetwork":["macro",73],
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "vtp_enableGA4Schema":false,
      "tag_id":499
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",16]],["map","fieldName","cookieDomain","value",["macro",28]],["map","fieldName","cookieName","value",["macro",60]]],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",71],
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",51],
      "vtp_socialActionTarget":["macro",72],
      "vtp_socialNetwork":["macro",73],
      "vtp_trackingId":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "vtp_enableGA4Schema":false,
      "tag_id":500
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Yext - Store locator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Click - Index",
      "vtp_eventLabel":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":502
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Yext - Store locator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Search",
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":503
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":"Share",
      "vtp_gaSettings":["macro",76],
      "vtp_socialActionTarget":["macro",5],
      "vtp_socialNetwork":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "vtp_enableGA4Schema":false,
      "tag_id":504
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Yext - Store locator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Click - Book an Appointment",
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":505
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Yext - Store locator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Click - Boutique Details",
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":506
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Yext - Store locator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Click - CTA",
      "vtp_eventLabel":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":507
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Yext - Store locator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Filters used - Radius",
      "vtp_eventLabel":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":508
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Yext - Store locator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Filters used - Store Type",
      "vtp_eventLabel":["macro",83],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":509
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Yext - Store locator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Click - Geolocation",
      "vtp_eventLabel":"-",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":510
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Yext - Store locator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Click - Get directions",
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":511
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Yext - Store locator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Click - Search results",
      "vtp_eventLabel":"-",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":512
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Yext - Store locator",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Click - Ride there with Uber",
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":513
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":548
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",16]],["map","fieldName","cookieDomain","value",["macro",28]],["map","fieldName","cookieName","value",["macro",60]]],
      "vtp_eventCategory":"Scroll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",51],
      "vtp_eventAction":["template",["macro",85],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":566
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",78],"-",["macro",87]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":567
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Santos Limited Edition",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",51],
      "vtp_eventAction":["template","Number Selection Validation - ",["macro",88]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1584
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",89],
      "vtp_eventCategory":["macro",90],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",51],
      "vtp_eventAction":["macro",91],
      "vtp_eventLabel":["macro",92],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1662
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1706
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1708
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Shopping bag",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",51],
      "vtp_eventAction":"add cart embossing",
      "vtp_eventLabel":["template",["macro",94]," - ",["macro",95]," - ",["macro",96]," - ",["macro",97]," - ",["macro",98]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1721
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Footer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",51],
      "vtp_eventAction":"Newsletter - Click Proceed",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1738
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Footer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",51],
      "vtp_eventAction":"Newsletter - Form Submitted",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1740
    },{
      "function":"__gaawe",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_eventName":"session_start",
      "vtp_eventParameters":["list",["map","name","containerID","value",["macro",100]],["map","name","containerVersion","value",["macro",101]],["map","name","containerName","value","CAR - Main"],["map","name","hostname","value",["macro",1]]],
      "vtp_measurementId":"none",
      "vtp_measurementIdOverride":["macro",102],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "vtp_enableMoreSettingsOption":false,
      "tag_id":1832
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Boutique Appointment Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",51],
      "vtp_eventAction":"Confirmation",
      "vtp_eventLabel":["template",["macro",103],"  - ",["macro",104]," - ",["macro",105]," - ",["macro",106]," - ",["macro",27]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1841
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-TTN4KLZ","nickname","CAR - Media"]],
      "vtp_boundaries":["list"],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","ecl"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","jsm"],["map","typeId","html"],["map","typeId","bzi"],["map","typeId","yieldify"],["map","typeId","hjtc"],["map","typeId","cegg"],["map","typeId","abtGeneric"],["map","typeId","img"],["map","typeId","twitter_website_tag"],["map","typeId","tg"],["map","typeId","baut"],["map","typeId","pntr"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"],["map","typeId","gaawc"],["map","typeId","gaawe"],["map","typeId","automl"]],
      "tag_id":1855
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-W2VXSS8","nickname","CAR - Cookie Consent"]],
      "vtp_boundaries":["list",["zb","_re",["macro",1],"\\.cartier\\.cn",true,true]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":1856
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-PW4THCM","nickname","CCP"]],
      "vtp_boundaries":["list",["zb","_sw",["macro",1],"cartiercare",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","gaawc"],["map","typeId","gaawe"],["map","typeId","gcs"],["map","typeId","automl"],["map","typeId","opt"],["map","typeId","tg"],["map","typeId","jsm"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"]],
      "tag_id":1857
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WHDQ8QH","nickname","CAR - Media BR"]],
      "vtp_boundaries":["list",["zb","_re",["macro",5],"(www\\.cartier\\.com\\.br|stores\\.cartier\\.com\\\/pt_br)",false,true]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":1858
    },{
      "function":"__cl",
      "tag_id":1859
    },{
      "function":"__cl",
      "tag_id":1860
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"687584_1187",
      "tag_id":1861
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"687584_1188",
      "tag_id":1862
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"687584_1189",
      "tag_id":1863
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"687584_1190",
      "tag_id":1864
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"687584_1191",
      "tag_id":1865
    },{
      "function":"__cl",
      "tag_id":1866
    },{
      "function":"__cl",
      "tag_id":1867
    },{
      "function":"__cl",
      "tag_id":1868
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"687584_1195",
      "tag_id":1869
    },{
      "function":"__cl",
      "tag_id":1870
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"687584_1197",
      "tag_id":1871
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"687584_1198",
      "tag_id":1872
    },{
      "function":"__cl",
      "tag_id":1873
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"687584_1480",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1874
    },{
      "function":"__hl",
      "tag_id":1875
    },{
      "function":"__hl",
      "tag_id":1876
    },{
      "function":"__cl",
      "tag_id":1877
    },{
      "function":"__cl",
      "tag_id":1878
    },{
      "function":"__cl",
      "tag_id":1879
    },{
      "function":"__cl",
      "tag_id":1880
    },{
      "function":"__cl",
      "tag_id":1881
    },{
      "function":"__cl",
      "tag_id":1882
    },{
      "function":"__cl",
      "tag_id":1883
    },{
      "function":"__cl",
      "tag_id":1884
    },{
      "function":"__cl",
      "tag_id":1885
    },{
      "function":"__cl",
      "tag_id":1886
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"===typeof window.config55\u0026\u0026",["escape",["macro",13],8,16],"();\nswitch(",["escape",["macro",107],8,16],"){case \"addToCart\":config55.pushDL(\"trackEvent\",\"Cart\",\"Add To Cart\",",["escape",["macro",108],8,16],"[0].productVertical+\" - \"+",["escape",["macro",108],8,16],"[0].productCollection+\" - \"+",["escape",["macro",108],8,16],"[0].sellable+\" - \"+",["escape",["macro",108],8,16],"[0].id+\" - \"+",["escape",["macro",108],8,16],"[0].name);break;case \"removeFromCart\":config55.pushDL(\"trackEvent\",\"Cart\",\"Remove from cart\",",["escape",["macro",108],8,16],"[0].productVertical+\" - \"+",["escape",["macro",108],8,16],"[0].productCollection+\" - \"+",["escape",["macro",108],8,16],"[0].sellable+\n\" - \"+",["escape",["macro",108],8,16],"[0].id+\" - \"+",["escape",["macro",108],8,16],"[0].name);break;case \"eePromoClick\":config55.pushDL(\"trackEvent\",\"Internal Marketing\",\"Promotion Click\",",["escape",["macro",109],8,16],");break;case \"eePromoView\":config55.pushDL(\"trackEvent\",\"Internal Marketing\",\"Promotion Impression\",",["escape",["macro",109],8,16],",\"\",1,!0);break;case \"eeListClick\":config55.pushDL(\"trackEvent\",\"Product list\",\"Product click\",",["escape",["macro",108],8,16],"[0].id);break;case \"eeListView\":config55.pushDL(\"trackEvent\",\"Product list\",\n",["escape",["macro",108],8,16],"[0].name,",["escape",["macro",108],8,16],"[0].id,1,!0);break;case \"eeCheckout\":config55.pushDL(\"trackEvent\",\"Enhanced Ecommerce\",\"eeCheckout\");break;case \"eeCheckoutOption\":config55.pushDL(\"trackEvent\",\"Enhanced Ecommerce\",\"eeCheckoutOption\");break;case \"boutiqueSearch\":",["escape",["macro",110],8,16],"?config55.pushDL(\"trackEvent\",\"Boutique - Search\",\"Search\",",["escape",["macro",110],8,16],"):",["escape",["macro",111],8,16],"?config55.pushDL(\"trackEvent\",\"Boutique - Search\",\"Search\",",["escape",["macro",111],8,16],"):config55.pushDL(\"trackEvent\",\n\"Boutique - Search\",\"Search\",\"N\/A\");break;case \"filterClick\":(\/\\\/Search\\-Results\/i.test(",["escape",["macro",63],8,16],")||\/Product listing pages\/.test(",["escape",["macro",17],8,16],"))\u0026\u0026config55.pushDL(\"trackEvent\",",["escape",["macro",17],8,16],",\"Filter - \"+",["escape",["macro",112],8,16],",",["escape",["macro",113],8,16],");break;case \"storelocatorPage\":",["escape",["macro",103],8,16],"?config55.pushDL(\"trackEvent\",\"Store locator Page\",\"bookanappointment\",",["escape",["macro",103],8,16],"):config55.pushDL(\"trackEvent\",\"Store locator Page\",\"bookanappointment\");break;\ncase \"contactCountrySelect\":",["escape",["macro",114],8,16],"?config55.pushDL(\"trackEvent\",\"Contact\",\"Country selection\",",["escape",["macro",114],8,16],"):",["escape",["macro",115],8,16],"?config55.pushDL(\"trackEvent\",\"Contact\",\"Country selection\",",["escape",["macro",115],8,16],"):config55.pushDL(\"trackEvent\",\"Contact\",\"Country selection\",\"N\/A\");break;case \"cartEngraving\":config55.pushDL(\"trackEvent\",\"Shopping bag\",\"Engraving validation\",",["escape",["macro",108],8,16],"[0].productVertical+\" - \"+",["escape",["macro",108],8,16],"[0].productCollection+\" - \"+",["escape",["macro",108],8,16],"[0].sellable+\n\" - \"+",["escape",["macro",108],8,16],"[0].id+\" - \"+",["escape",["macro",108],8,16],"[0].name);break;case \"cartAdjustement\":config55.pushDL(\"trackEvent\",\"Shopping bag\",\"Adjustement validation\",",["escape",["macro",108],8,16],"[0].productVertical+\" - \"+",["escape",["macro",108],8,16],"[0].productCollection+\" - \"+",["escape",["macro",108],8,16],"[0].sellable+\" - \"+",["escape",["macro",108],8,16],"[0].id+\" - \"+",["escape",["macro",108],8,16],"[0].name);break;case \"cartMessageCard\":config55.pushDL(\"trackEvent\",\"Shopping bag\",\"Message card validation\",",["escape",["macro",108],8,16],"[0].productVertical+\n\" - \"+",["escape",["macro",108],8,16],"[0].productCollection+\" - \"+",["escape",["macro",108],8,16],"[0].id+\" - \"+",["escape",["macro",108],8,16],"[0].name);break;case \"productSizeDropdown\":",["escape",["macro",88],8,16],"?config55.pushDL(\"trackEvent\",\"Product Page\",\"Size Selection\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],"):config55.pushDL(\"trackEvent\",\"Product Page\",\"Size Selection\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\n\" - \"+",["escape",["macro",97],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"gaEvent\":config55.pushDL(\"trackEvent\",",["escape",["macro",55],8,16],",",["escape",["macro",56],8,16],",",["escape",["macro",57],8,16],");window.mediaDataLayer.push({event:\"trackEvent\",eventCategory:",["escape",["macro",55],8,16],",eventAction:",["escape",["macro",56],8,16],",eventLabel:",["escape",["macro",57],8,16],"});break;case \"AbTastyLoaded\":config55.pushDL(\"trackEvent\",\"AbTasty\",\"Test loaded\",",["escape",["macro",31],8,16],"+\" - \"+",["escape",["macro",32],8,16],",\"\",!0);break;case \"social\":config55.pushDL(\"trackSocial\",\n",["escape",["macro",73],8,16],",",["escape",["macro",71],8,16],",",["escape",["macro",16],8,16],");config55.pushDL(\"trackEvent\",\"Social\",",["escape",["macro",71],8,16],",",["escape",["macro",73],8,16],");mediaDataLayer.push({event:\"trackSocial\",socialNetwork:",["escape",["macro",73],8,16],",socialAction:",["escape",["macro",71],8,16],"});break;case \"virtualPageview\":mediaDataLayer.push({event:\"virtualPageview\",page:",["escape",["macro",117],8,16],"});break;case \"productWishlistAdd\":window.mediaDataLayer.push({event:\"productWishlistAdd\"});",["escape",["macro",97],8,16],"?config55.pushDL(\"trackEvent\",\n\"Product Page\",\"Add Selection to Wishlist\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",97],8,16],"+\" - \"+",["escape",["macro",98],8,16],"):config55.pushDL(\"trackEvent\",\"Product Page\",\"Add Selection to Wishlist\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productEngraving\":",["escape",["macro",97],8,16],"?config55.pushDL(\"trackEvent\",\"Product Page\",\"Engraving\",\n",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",97],8,16],"+\" - \"+",["escape",["macro",98],8,16],"):config55.pushDL(\"trackEvent\",\"Product Page\",\"Engraving\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productAdjustment\":",["escape",["macro",88],8,16],"?config55.pushDL(\"trackEvent\",\"Product Page\",\" Bracelet Adjustement\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\n\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],"):config55.pushDL(\"trackEvent\",\"Product Page\",\" Bracelet Adjustement\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",97],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productShare\":",["escape",["macro",88],8,16],"?config55.pushDL(\"trackEvent\",\"Product Page\",\"Share\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\n\" - \"+",["escape",["macro",98],8,16],"):config55.pushDL(\"trackEvent\",\"Product Page\",\"Share\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",97],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productVideo\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Video Played - \"+",["escape",["macro",118],8,16],",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",97],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productVideoStatus\":config55.pushDL(\"trackEvent\",\n\"Product Page\",\"Video Played - \"+",["escape",["macro",119],8,16],",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",97],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"contactEmail\":config55.pushDL(\"trackEvent\",\"Contact\",\"Contact by Email\");break;case \"contactPopinDisplayed\":config55.pushDL(\"trackEvent\",\"Contact Pop-in\",\"Initiated\");break;case \"contactSubmit\":config55.pushDL(\"trackEvent\",\"Contact Pop-in\",\"Submit\",",["escape",["macro",120],8,16],",40);break;case \"subscribeNewsletter\":config55.pushDL(\"trackEvent\",\n\"Contact Pop-in\",\"Newsletter Subscription\",\"Subscribe To The Newsletter from \"+",["escape",["macro",121],8,16],");break;case \"contactConfirmation\":config55.pushDL(\"trackEvent\",\"Contact Confirmation Pop-in\",\"OK\");mediaDataLayer.push({event:\"trackEvent\",eventAction:\"OK\"});break;case \"servicesNewsletterSubscription\":config55.pushDL(\"trackEvent\",\"Services\",\"Account Creation\",\"NewsletterSubscription\",20);break;case \"servicesAccountCreation1\":config55.pushDL(\"trackEvent\",\"Services\",\"Account Creation\",\"\",50);break;\ncase \"servicesAccountCreation2\":config55.pushDL(\"trackEvent\",\"Services\",\"Account Creation\",\"Additional information\",10);break;case \"cartierLogout\":config55.pushDL(\"trackEvent\",\"My Cartier\",\"Logout\");break;case \"boutiqueSearchCountry\":config55.pushDL(\"trackEvent\",\"Boutique - Search\",\"Boutique Country Selection\",",["escape",["macro",115],8,16],");break;case \"boutiqueSearchCity\":config55.pushDL(\"trackEvent\",\"Boutique - Search\",\"Boutique City Selection\",",["escape",["macro",122],8,16],");break;case \"boutiqueSearchAddFilter\":config55.pushDL(\"trackEvent\",\n\"Boutique - Search\",\"Add Filter\",",["escape",["macro",123],8,16],");break;case \"boutiqueSearchRemoveFilter\":config55.pushDL(\"trackEvent\",\"Boutique - Search\",\"Remove Filter\",",["escape",["macro",123],8,16],");break;case \"boutiquePrint\":config55.pushDL(\"trackEvent\",\"My Cartier - My boutique\",\"Print Boutique\",",["escape",["macro",103],8,16],");break;case \"videoInteraction\":config55.pushDL(\"trackEvent\",\"Video\",",["escape",["macro",118],8,16],",",["escape",["macro",124],8,16],");break;case \"videoStatus\":config55.pushDL(\"trackEvent\",\"Video\",",["escape",["macro",119],8,16],",\n",["escape",["macro",124],8,16],");break;case \"wishlistStockPopIn\":config55.pushDL(\"trackEvent\",\"Shopping bag\",\"Add to wishlist - out of stock pop-in\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",125],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productLineHomepage\":config55.pushDL(\"trackEvent\",\"Homepage\",\"Product Line\",",["escape",["macro",94],8,16],");break;case \"pushHomepage\":config55.pushDL(\"trackEvent\",\"Homepage\",",["escape",["macro",126],8,16],",",["escape",["macro",127],8,16],");break;case \"videoHomepage\":config55.pushDL(\"trackEvent\",\n\"Homepage\",\"Video Interaction\",",["escape",["macro",118],8,16],");break;case \"videoStatusHomepage\":config55.pushDL(\"trackEvent\",\"Homepage\",\"Video Status\",",["escape",["macro",119],8,16],");break;case \"wishlistAddHomepage\":config55.pushDL(\"trackEvent\",\"Homepage\",\"Add Selection to Wishlist\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"wishlistAddCategoriesOrCollectionsListing\":config55.pushDL(\"trackEvent\",\"Collections \\x26 Categories Listing Pages\",\n\"Add Selection to Wishlist\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"categoriesOrCollectionsPushProduct\":config55.pushDL(\"trackEvent\",\"Collections \\x26 Categories Listing Pages\",\"Product push\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"videoCategoriesOrCollectionsListing\":config55.pushDL(\"trackEvent\",\n\"Collections \\x26 Categories Listing Pages\",\"Video Interaction\",",["escape",["macro",118],8,16],");break;case \"videoStatusCategoriesOrCollectionsListing\":config55.pushDL(\"trackEvent\",\"Collections \\x26 Categories Listing Pages\",\"Video Status\",",["escape",["macro",119],8,16],");break;case \"categoriesOrCollectionsListingPage\":config55.pushDL(\"trackEvent\",\"Collections \\x26 Categories Listing Pages\",\"View All\");break;case \"categoriesOrCollectionsPush\":config55.pushDL(\"trackEvent\",\"Collections \\x26 Categories Listing Pages\",\n\"Push\"+",["escape",["macro",128],8,16],",\"Discover\");break;case \"backInStock\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Back in stock\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productDescription\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Description\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");\nbreak;case \"productEmbossing\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Embossing\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productPageForm\":config55.pushDL(\"trackEvent\",\"Product Page\",",["escape",["macro",129],8,16],",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"callCenter\":config55.pushDL(\"trackEvent\",\n\"Product Page\",\"Call center\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productSFY\":config55.pushDL(\"trackEvent\",\"Product Page\",\"SFY\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productPageTab\":config55.pushDL(\"trackEvent\",\"Product Page\",",["escape",["macro",130],8,16],",",["escape",["macro",94],8,16],"+\n\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productSticker\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Dots\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productZoom\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Zoom\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\n\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"footer\":config55.pushDL(\"trackEvent\",\"Footer\",",["escape",["macro",131],8,16],");break;case \"menu\":config55.pushDL(\"trackEvent\",\"Menu - \"+",["escape",["macro",132],8,16],",",["escape",["macro",133],8,16],",",["escape",["macro",134],8,16],"+\" - \"+",["escape",["macro",135],8,16],");dataLayer.push({firstLevel:void 0,secondLevel:void 0,thirdLevel:void 0,fourthLevel:void 0});break;case \"productListingPage\":config55.pushDL(\"trackEvent\",\"Product Listing Pages\",\"View All\");break;case \"wishlistAddProductListing\":config55.pushDL(\"trackEvent\",\n\"Product Listing Pages\",\"Add Selection to Wishlist\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");window.mediaDataLayer.push({event:\"wishlistAddProductListing\"});break;case \"gtm.linkClick\":\"nav-link\"==",["escape",["macro",136],8,16],"\u0026\u0026\"rouge\"==",["escape",["macro",137],8,16],".toLowerCase()\u0026\u0026config55.pushDL(\"trackEvent\",\"Homepage\",\"Click on Homepage push\",",["escape",["macro",138],8,16],"+\" - Push: HpPushId - Push Content: HpPushContent\");\nbreak;case \"findBoutiqueStep1\":config55.pushDL(\"trackEvent\",\"Product page\",\"Find in a boutique - Initiated\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"findBoutiqueStep2\":config55.pushDL(\"virtualPageview\",",["escape",["macro",98],8,16],"+\"\/findeBoutique\");break;case \"findBoutiqueStep3\":config55.pushDL(\"virtualPageview\",",["escape",["macro",98],8,16],"+\"\/findeBoutique\/\"+",["escape",["macro",103],8,16],"+\"\/appointmentForm\");\nbreak;case \"findBoutiqueStep4\":config55.pushDL(\"virtualPageview\",",["escape",["macro",98],8,16],"+\"\/findeBoutique\/\"+",["escape",["macro",103],8,16],"+\"\/appointmentAsked\");config55.pushDL(\"trackEvent\",\"Product page\",\"Find in a boutique - Submit\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],"+\" - \"+",["escape",["macro",103],8,16],");break;case \"backInStockOpen\":config55.pushDL(\"virtualPageview\",\"\/\"+",["escape",["macro",141],8,16],"+\"\/\"+",["escape",["macro",98],8,16],"+\n\"\/\"+",["escape",["macro",142],8,16],"+\"\/Back-in-stock-Pop-In\");config55.pushDL(\"trackEvent\",\"Product page\",\" Back in stock - Initiated\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"backInStockLogin\":\"existing\"==",["escape",["macro",143],8,16],"?config55.pushDL(\"virtualPageview\",\"\/\"+",["escape",["macro",141],8,16],"+\"\/\"+",["escape",["macro",98],8,16],"+\"\/\"+",["escape",["macro",142],8,16],"+\"\/backInStock\/Login?account\\x3d\"+",["escape",["macro",143],8,16],"):\nconfig55.pushDL(\"virtualPageview\",\"\/\"+",["escape",["macro",141],8,16],"+\"\/\"+",["escape",["macro",98],8,16],"+\"\/\"+",["escape",["macro",142],8,16],"+\"\/backInStock\/Login?account\\x3d\"+",["escape",["macro",143],8,16],"+\"\\x26newsletter\\x3d\"+",["escape",["macro",144],8,16],");break;case \"backInStockValidate\":config55.pushDL(\"virtualPageview\",\"\/\"+",["escape",["macro",141],8,16],"+\"\/\"+",["escape",["macro",98],8,16],"+\"\/\"+",["escape",["macro",142],8,16],"+\"\/backInStock\/Submit\");config55.pushDL(\"trackEvent\",\"Product page\",\" Back in stock - submit\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\n\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"appointmentConfirmation\":var page=",["escape",["macro",117],8,16],",ajout=\"\/boutiqueAppointmentConfirmation\",sortie=\/\\?\/.test(page)?page.replace(\"?\",ajout+\"?\"):\/#\/.test(page)?page.replace(\"#\",ajout+\"#\"):page+ajout;window.dataLayer.push({event:\"virtualPageview\",pageURI:sortie});break;case \"funnelSteps\":config55.pushDL(\"virtualPageview\",",["escape",["macro",16],8,16],"+\"\/\"+",["escape",["macro",145],8,16],");break;case \"servicesPage\":config55.pushDL(\"trackEvent\",\n\"Service pages\",",["escape",["macro",146],8,16],");break;case \"strapConfiguratorCollectionSelection\":config55.pushDL(\"trackEvent\",\"Strap Configurator\",\"Collection selection\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],");break;case \"strapConfiguratorModelSelection\":config55.pushDL(\"trackEvent\",\"Strap Configurator\",\"Model selection\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",147],8,16],");break;case \"strapConfiguratorMaterialSelection\":config55.pushDL(\"trackEvent\",\"Strap Configurator\",\n\"Material selection\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",148],8,16],");break;case \"strapConfiguratorColor\":config55.pushDL(\"trackEvent\",\"Strap Configurator\",\"Color selection - \"+",["escape",["macro",149],8,16],"+\" - \"+",["escape",["macro",150],8,16],",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"strapConfiguratorAddToCart\":config55.pushDL(\"trackEvent\",\"Strap Configurator\",\n\"Add to Cart\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");window.mediaDataLayer.push({event:\"strapConfiguratorAddToCart\"});break;case \"strapConfiguratorBookAnApp\":config55.pushDL(\"trackEvent\",\"Strap Configurator\",\"bookanappointment\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"productChangeMyStrap\":config55.pushDL(\"trackEvent\",\n\"Product Page\",\"Change My Strap\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"suggestionPopInAddToCart\":config55.pushDL(\"trackEvent\",\"Suggestion Pop-in Product Page\",\"Add to Cart\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");window.mediaDataLayer.push({event:\"suggestionPopInAddToCart\"});break;\ncase \"suggestionPopInChangeMyStrap\":config55.pushDL(\"trackEvent\",\"Suggestion Pop-in Product Page\",\"Change my strap\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"strapColor\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Color selection - \"+",["escape",["macro",149],8,16],"+\" - \"+",["escape",["macro",150],8,16],",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\n\" - \"+",["escape",["macro",98],8,16],");break;case \"strapSectionBookAnApp\":config55.pushDL(\"trackEvent\",\"Strap Module\",\"bookanappointment\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"bsaodPage\":config55.pushDL(\"trackEvent\",\"Find a Boutique Page\",\"bookanappointment\",",["escape",["macro",103],8,16],");break;case \"contactSendMail\":config55.pushDL(\"trackEvent\",\"Contact page\",\"Send Mail\");break;case \"contactContactNb\":config55.pushDL(\"trackEvent\",\n\"Contact\",\"Contact Number Clicked\",",["escape",["macro",151],8,16],");break;case \"contactFindBoutique\":config55.pushDL(\"trackEvent\",\"Contact\",\"Find a boutique\");break;case \"productRequestInfoSubmit\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Request Information - Submit\",",["escape",["macro",120],8,16],",40);mediaDataLayer.push({event:\"trackEvent\",eventAction:\"Request Information - Submit\"});break;case \"productContactAmbassadorFieldSubmit\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Contact An Ambassador - Submit\",\n",["escape",["macro",120],8,16],",40);mediaDataLayer.push({event:\"trackEvent\",eventAction:\"Contact An Ambassador - Submit\"});break;case \"productSubMenu\":config55.pushDL(\"trackEvent\",\"Product Page\",",["escape",["macro",152],8,16],",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",97],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"boutiqueGeolocateMe\":config55.pushDL(\"trackEvent\",\"Boutique - Search\",\"Geolocate me\");break;case \"boutiqueSearchMore\":config55.pushDL(\"trackEvent\",\n\"Boutique - Search Results\",\"Read More\",",["escape",["macro",103],8,16],");break;case \"boutiqueSearchNbClick\":config55.pushDL(\"trackEvent\",\"Boutique - Search Results\",\"Contact Number Clicked\",",["escape",["macro",103],8,16],");break;case \"boutiqueSearchMap\":config55.pushDL(\"trackEvent\",\"Boutique - Search Results\",\"Show Map\",",["escape",["macro",103],8,16],");break;case \"boutiqueDetailShowMap\":config55.pushDL(\"trackEvent\",\"Boutique - Details\",\"Show Map\",",["escape",["macro",103],8,16],");break;case \"boutiqueDetailSendMail\":config55.pushDL(\"trackEvent\",\n\"Boutique - Details\",\"Send Mail\",",["escape",["macro",103],8,16],");break;case \"boutiqueDetailNbClick\":config55.pushDL(\"trackEvent\",\"Boutique - Details\",\"Contact Number Clicked\");break;case \"cartSizeDropdown\":config55.pushDL(\"trackEvent\",\"Shopping bag\",\"Size Selection\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",97],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"product360\":config55.pushDL(\"trackEvent\",\"Product Page\",\"360\",",["escape",["macro",94],8,16],"+\n\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"amuletteConfiguratorCategorySelectionPLP\":config55.pushDL(\"trackEvent\",\"Amulette Configurator\",\"PLP\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",153],8,16],");break;case \"amuletteConfiguratorMetal\":config55.pushDL(\"trackEvent\",\"Amulette Configurator\",\"Configurator page\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",153],8,16],"+\n\" - \"+",["escape",["macro",154],8,16],");break;case \"amuletteConfiguratorStone\":config55.pushDL(\"trackEvent\",\"Amulette Configurator\",\"Configurator page\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",153],8,16],"+\" - \"+",["escape",["macro",155],8,16],"+\" - \"+",["escape",["macro",156],8,16],");break;case \"amuletteConfiguratorSize\":config55.pushDL(\"trackEvent\",\"Amulette Configurator\",\"Configurator page\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",153],8,16],"+\" - \"+",["escape",["macro",157],8,16],");\nbreak;case \"amuletteConfiguratorFindInStore\":config55.pushDL(\"trackEvent\",\"Amulette Configurator\",\"Configurator page\",\"Find in store - \"+",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",153],8,16],");break;case \"amuletteConfiguratorFinalizeMyCreation\":config55.pushDL(\"trackEvent\",\"Amulette Configurator\",\"Configurator page\",\"Finalize my creation - \"+",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",153],8,16],");break;case \"amuletteConfiguratorStoneDiscover\":config55.pushDL(\"trackEvent\",\n\"Amulette Configurator\",\"Configurator page\",\"Discover - \"+",["escape",["macro",156],8,16],");break;case \"amuletteConfiguratorFindABoutique\":config55.pushDL(\"trackEvent\",\"Amulette Configurator\",\"Configurator page\",\"Find a boutique - \"+",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",153],8,16],");break;case \"amuletteConfiguratorBookAnApp\":config55.pushDL(\"trackEvent\",\"Amulette Configurator\",\"Configurator page\",\"Book an app - \"+",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+\n",["escape",["macro",153],8,16],");break;case \"socialEvent\":config55.pushDL(\"trackSocial\",",["escape",["macro",73],8,16],",",["escape",["macro",71],8,16],",document.location.href);break;case \"giftFinderFindAGift\":config55.pushDL(\"trackEvent\",\"Gift Finder\",\"Find the perfect gift\");break;case \"giftFinderFilters\":config55.pushDL(\"trackEvent\",\"Gift Finder\",\"Filters - \"+",["escape",["macro",132],8,16],",",["escape",["macro",133],8,16],");break;case \"giftFinderSeeResults\":config55.pushDL(\"trackEvent\",\"Gift Finder\",\"See Results\");break;case \"giftFinderDiscover\":config55.pushDL(\"trackEvent\",\n\"Gift Finder\",\"Discover\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"giftFinderViewMore\":config55.pushDL(\"trackEvent\",\"Gift Finder\",\"View More\");break;case \"giftFinderVideo\":config55.pushDL(\"trackEvent\",\"Gift Finder\",\"Video Status\",",["escape",["macro",118],8,16],");break;case \"ATBpopin\":config55.pushDL(\"trackEvent\",\"ATB pop-in\",",["escape",["macro",146],8,16],",",["escape",["macro",88],8,16],");break;case \"vignetteClick\":config55.pushDL(\"trackEvent\",\n\"Product Listing Pages\",\"Vignettes\",",["escape",["macro",88],8,16],");break;case \"header\":config55.pushDL(\"trackEvent\",\"Header\",",["escape",["macro",158],8,16],"+\" - \"+",["escape",["macro",159],8,16],");break;case \"contactUsPage\":config55.pushDL(\"trackEvent\",\"Contact us page\",",["escape",["macro",146],8,16],");break;case \"FAQPage\":config55.pushDL(\"trackEvent\",\"FAQ pages\",",["escape",["macro",146],8,16],");break;case \"findBoutique\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Find a boutique\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\n\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"backInStockShoppingBag\":config55.pushDL(\"trackEvent\",\"Product Page\",\"Back in stock\",",["escape",["macro",94],8,16],"+\" - \"+",["escape",["macro",95],8,16],"+\" - \"+",["escape",["macro",116],8,16],"+\" - \"+",["escape",["macro",88],8,16],"+\" - \"+",["escape",["macro",98],8,16],");break;case \"ConfirmationPage\":config55.pushDL(\"trackEvent\",\"Confirmation Page\",",["escape",["macro",146],8,16],");break;case \"sliderCategoriesorCollectionPages\":config55.pushDL(\"trackEvent\",\n\"Collections \\x26 Categories Listing Pages\",\"Slider\",",["escape",["macro",160],8,16],");break;case \"MyCartierPage\":config55.pushDL(\"trackEvent\",\"linkTitle\",",["escape",["macro",146],8,16],")};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/we\/",["escape",["macro",161],3],"\/onsite\/embed.js\" async\u003E\u003C\/script\u003E "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":112
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",71,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar rafContext=[];rafContext[0]=",["escape",["macro",17],8,16],";rafContext[3]=",["escape",["macro",162],8,16],";rafContext[6]=",["escape",["macro",25],8,16],";rafContext[7]=",["escape",["macro",24],8,16],";rafContext[8]=",["escape",["macro",163],8,16],";rafContext[13]=",["escape",["macro",35],8,16],";rafContext[24]=",["escape",["macro",33],8,16],";rafContext[25]=",["escape",["macro",34],8,16],";rafContext[28]=",["escape",["macro",36],8,16],";rafContext[29]=",["escape",["macro",37],8,16],";rafContext[30]=",["escape",["macro",32],8,16],";rafContext[31]=",["escape",["macro",31],8,16],";rafContext[40]=",["escape",["macro",164],8,16],";\nrafContext[50]=",["escape",["macro",22],8,16],";rafContext[51]=",["escape",["macro",21],8,16],";rafContext[52]=",["escape",["macro",165],8,16],";rafContext[2]=",["escape",["macro",63],8,16],";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":429
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/try.abtasty.com\/a27d5cef3f7327d341a1c6721480f03c.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":475
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/",["escape",["macro",166],3],".cloudfront.net\/",["escape",["macro",167],3],".js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":479
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-conversion=\"true\" data-gtmsrc=\"\/\/",["escape",["macro",166],3],".cloudfront.net\/",["escape",["macro",167],3],".js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":480
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa=window._uxa||[];window._uxa.push([\"trackPageview\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")]);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":482
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa=window._uxa||[];window._uxa.push([\"trackPageview\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")+\"?cs-popin-connexion\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":483
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window._uxa=window._uxa||[];var b=0;try{if(\"undefined\"!==typeof dataLayer)for(var a=0;a\u003CdataLayer.length;a++){window._uxa.push([\"setCustomVariable\",1,\"msn_cgGroup\",dataLayer[a].msn_cgGroup,3]);window._uxa.push([\"setCustomVariable\",2,\"rcms_cgGroup\",dataLayer[a].rcms_cgGroup,3]);window._uxa.push([\"setCustomVariable\",3,\"visitorStatus\",dataLayer[a].visitorStatus,3]);window._uxa.push([\"setCustomVariable\",4,\"checkoutStep\",dataLayer[a].checkoutStep,3]);if(\"undefined\"!==typeof dataLayer[a].cartProducts){for(var e=\nb=0;e\u003CdataLayer[a].cartProducts.length;e++)b=\"undefined\"!==typeof dataLayer[a].cartProducts[e].quantity?b+Number(dataLayer[a].cartProducts[e].quantity):b+1;window._uxa.push([\"setCustomVariable\",6,\"cart_qty\",b,3])}window._uxa.push([\"setCustomVariable\",7,\"currencyCode\",dataLayer[a].currencyCode,3]);window._uxa.push([\"setCustomVariable\",8,\"accountCreationStatus\",dataLayer[a].accountCreationStatus,3]);window._uxa.push([\"setCustomVariable\",9,\"typeOfBuyers\",dataLayer[a].typeOfBuyers,3]);window._uxa.push([\"setCustomVariable\",\n10,\"shippingCountry\",dataLayer[a].shippingCountry,3]);window._uxa.push([\"setCustomVariable\",11,\"billingCountry\",dataLayer[a].billingCountry,3]);window._uxa.push([\"setCustomVariable\",12,\"transactionPaymentType\",dataLayer[a].transactionPaymentType,3]);window._uxa.push([\"setCustomVariable\",13,\"transactionShippingMethod\",dataLayer[a].transactionShippingMethode,3])}}catch(g){}try{if(\"object\"==typeof window.ABTasty.results){window._uxa=window._uxa||[];b=\"\";for(var c in window.ABTasty.results)if(window.ABTasty.results.hasOwnProperty(c)){var f=\nwindow.ABTasty.results[c],d;for(d in f)f.hasOwnProperty(d)\u0026\u0026\"variationID\"===d\u0026\u0026null!==f[d]\u0026\u0026(b+=\"[\"+c+\"\\x3d\"+f[d]+\"]\")}window._uxa.push([\"setCustomVariable\",20,\"ABTasty\",b])}}catch(g){}\"undefined\"===typeof CS_CONF?(window._uxa.push([\"setPath\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")]),c=document.createElement(\"script\"),c.type=\"text\/javascript\",c.async=!0,c.src=\"\/\/t.contentsquare.net\/uxa\/",["escape",["macro",169],7],".js\",document.getElementsByTagName(\"head\")[0].appendChild(c)):window._uxa.push([\"trackPageview\",\nwindow.location.pathname+window.location.hash.replace(\"#\",\"?__\")])})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":484
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa=window._uxa||[];window._uxa.push([\"ecommerce:addTransaction\",{id:\"",["escape",["macro",21],7],"\",revenue:\"",["escape",["macro",22],7],"\"}]);window._uxa.push([\"ecommerce:send\"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":485
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/gis.goinstore.com\/gis\/script\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":489
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E_hdw_delay_pix=function(b,c){return window.setTimeout(function(){var a=document.createElement(\"img\");a.src=b;a.width=1;a.height=1;document.body.appendChild(a)},1E3*c)};_hdw_delay_pix(\"\/\/pixel.mathtag.com\/event\/js?mt_id\\x3d",["escape",["macro",170],7],"\\x26mt_adid\\x3d",["escape",["macro",171],7],"\\x26mt_exem\\x3d\\x26mt_excl\\x3d\\x26v1\\x3d\\x26v2\\x3d\\x26v3\\x3d\\x26s1\\x3d\\x26s2\\x3d\\x26s3\\x3d\",60);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":490
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,b,a){(b[a]=b[a]||[]).push(function(){try{b.yaCounter42719589=new Ya.Metrika({id:42719589,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0})}catch(f){}});var e=d.getElementsByTagName(\"script\")[0],c=d.createElement(\"script\");a=function(){e.parentNode.insertBefore(c,e)};c.type=\"text\/javascript\";c.async=!0;c.src=\"https:\/\/mc.yandex.ru\/metrika\/watch.js\";\"[object Opera]\"==b.opera?d.addEventListener(\"DOMContentLoaded\",a,!1):a()})(document,window,\"yandex_metrika_callbacks\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/42719589\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":501
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function e(a){b.BOOMR_onload=a\u0026\u0026a.timeStamp||(new Date).getTime()}if(!window.BOOMR||!window.BOOMR.version){var a=document.createElement(\"iframe\"),b=window;b.addEventListener?b.addEventListener(\"load\",e,!1):b.attachEvent\u0026\u0026b.attachEvent(\"onload\",e);a.src=\"javascript:void(0)\";a.title=\"\";a.role=\"presentation\";(a.frameElement||a).style.cssText=\"width:0;height:0;border:0;display:none;\";var f=document.getElementsByTagName(\"script\")[0];f.parentNode.insertBefore(a,f);try{var c=a.contentWindow.document}catch(g){var d=\ndocument.domain;a.src=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+d+\"';void(0);\";c=a.contentWindow.document}c.open()._l=function(){var a=this.createElement(\"script\");d\u0026\u0026(this.domain=d);a.id=\"boomr-if-as\";a.src=\"https:\/\/s.go-mpulse.net\/boomerang\/8RDMS-WUAPT-WKJGD-G5ZST-MQEMR\";BOOMR_lstart=(new Date).getTime();this.body.appendChild(a)};c.write('\\x3cbody onload\\x3d\"document._l();\"\\x3e');c.close()}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":528
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function e(a){b.BOOMR_onload=a\u0026\u0026a.timeStamp||(new Date).getTime()}if(!window.BOOMR||!window.BOOMR.version){var a=document.createElement(\"iframe\"),b=window;b.addEventListener?b.addEventListener(\"load\",e,!1):b.attachEvent\u0026\u0026b.attachEvent(\"onload\",e);a.src=\"javascript:void(0)\";a.title=\"\";a.role=\"presentation\";(a.frameElement||a).style.cssText=\"width:0;height:0;border:0;display:none;\";var f=document.getElementsByTagName(\"script\")[0];f.parentNode.insertBefore(a,f);try{var c=a.contentWindow.document}catch(g){var d=\ndocument.domain;a.src=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+d+\"';void(0);\";c=a.contentWindow.document}c.open()._l=function(){var a=this.createElement(\"script\");d\u0026\u0026(this.domain=d);a.id=\"boomr-if-as\";a.src=\"https:\/\/s.go-mpulse.net\/boomerang\/3U5UD-A3KVH-XWX9Q-ND4WL-URRMD\";BOOMR_lstart=(new Date).getTime();this.body.appendChild(a)};c.write('\\x3cbody onload\\x3d\"document._l();\"\\x3e');c.close()}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":529
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",26,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar formattingFunction=function(b,a){return a.replace(\/\\+(\\d{0,2})(\\d{0,2})(\\d{0,3})(\\d{0,2})(\\d{0,3})(\\d*)\/,\"+$1 (0)$2 $3 $4 $5 $6\")},__fs_conf=__fs_conf||[];__fs_conf.push([\"setAdv\",{id:\"ade8c329-0800-42a1-a6a5-336ebf43dd5f\",formatting_function:formattingFunction}]);__fs_conf.push([\"setCookieDomain\",\".cartier.de\"]);__fs_conf.push([\"autoInvoke\",!1]);\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/analytics.freespee.com\/js\/external\/fs.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E__fs_dncs_instance.loadEvent();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":537
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",26,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar formattingFunction=function(b,a){return a.replace(\/\\+(\\d{0,2})(\\d{0,2})(\\d{0,3})(\\d{0,2})(\\d*)\/,\"+$1 (0)$2 $3 $4 $5\")},__fs_conf=__fs_conf||[];__fs_conf.push([\"setAdv\",{id:\"c3259e49-d720-43de-b097-4d2258a590b9\",formatting_function:formattingFunction}]);__fs_conf.push([\"setCookieDomain\",\".cartier.ch\"]);__fs_conf.push([\"autoInvoke\",!1]);\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/analytics.freespee.com\/js\/external\/fs.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E__fs_dncs_instance.loadEvent();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":538
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",26,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar formattingFunction=function(b,a){return a.replace(\/\\+(\\d{0,2})(\\d{0,1})(\\d{0,2})(\\d{0,2})(\\d{0,2})(\\d*)\/,\"+$1 (0) $2 $3 $4 $5 $6\")},__fs_conf=__fs_conf||[];__fs_conf.push([\"setAdv\",{id:\"35141c19-1fc8-4056-b5dc-4c16a4a8edce\",formatting_function:formattingFunction}]);__fs_conf.push([\"setCookieDomain\",\".cartier.fr\"]);__fs_conf.push([\"autoInvoke\",!1]);\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/analytics.freespee.com\/js\/external\/fs.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E__fs_dncs_instance.loadEvent();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":539
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",26,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar formattingFunction=function(b,a){return a.replace(\/\\+(\\d{0,2})(\\d{0,2})(\\d{0,4})(\\d*)\/,\"+$1 (0)$2 $3 $4\")},__fs_conf=__fs_conf||[];__fs_conf.push([\"setAdv\",{id:\"7d90c12e-601f-45df-89e4-e82d0c6cdcaa\",formatting_function:formattingFunction}]);__fs_conf.push([\"setCookieDomain\",\".cartier.co.uk\"]);__fs_conf.push([\"autoInvoke\",!1]);\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/analytics.freespee.com\/js\/external\/fs.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E__fs_dncs_instance.loadEvent();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":540
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",26,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar formattingFunction=function(b,a){return a.replace(\/\\+(\\d{0,2})(\\d{0,3})(\\d{0,2})(\\d{0,2})(\\d{0,2})(\\d*)\/,\"+$1 $2 $3 $4 $5\")},__fs_conf=__fs_conf||[];__fs_conf.push([\"setAdv\",{id:\"2056be9f-d174-42de-bc42-7dfe5b29e398\",requested_ndc:\"3491\",formatting_function:formattingFunction}]);__fs_conf.push([\"setCookieDomain\",\".cartier.es\"]);__fs_conf.push([\"autoInvoke\",!1]);\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/analytics.freespee.com\/js\/external\/fs.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E__fs_dncs_instance.loadEvent();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":542
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/www.rtb123.com\/tags\/",["escape",["macro",180],7],"\/btp.js\";var b=document.getElementsByTagName(\"head\")[0];b?b.appendChild(a,b):(b=document.getElementsByTagName(\"script\")[0]).parentNode.insertBefore(a,b)}();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":564
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.sprChatSettings=window.sprChatSettings||{};window.sprChatSettings={appId:\"",["escape",["macro",181],7],"\"};\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=window,a=d.sprChat;if(\"function\"===typeof a)a(\"update\",d.sprChatSettings);else{var b=document,c=function(){c.m(arguments)};c.q=[];c.m=function(b){c.q.push(b)};d.sprChat=c;a=function(){var a=b.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/prod2-live-chat.sprinklr.com\/api\/livechat\/handshake\/widget\/\"+d.sprChatSettings.appId;var c=b.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c)};(b.attachEvent?\"complete\"===b.readyState:\"loading\"!==b.readyState)?\na():b.addEventListener(\"DOMContentLoaded\",a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":568
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _y_account=\"YT-000124-1\",_y_domain_id=\"0391\";\n_y_trackPage=function(){var a=[];\"NA\"!==",["escape",["macro",9],8,16],"\u0026\u0026a.push({id:",["escape",["macro",9],8,16],"||\"\",src:\"userid;web_login\"});a.push({id:Ytrack.getParamValue(\"PMID\")||Ytrack.getParamValue(\"PMID\",void 0,document.referrer)||Ytrack.getParamValue(\"pmid\")||Ytrack.getParamValue(\"pmid\",void 0,document.referrer)||\"\",src:\"email;email_click\"});a=a.find(function(a){return a.id\u0026\u0026a.src?a:\"\"});_y_cleanDL=function(a){return\"_not-set_\"===a?\"\":a};a\u0026\u0026(_wt1Q.push([\"setVisitorParam\",\"_PmId\",a.id]),_wt1Q.push([\"setVisitorParam\",\n\"_PmSrc\",a.src]),_wt1Q.push([\"setCustomData\",1,a.id]),_wt1Q.push([\"setCustomData\",2,a.src]));_wt1Q.push([\"setCustomData\",3,_y_cleanDL(",["escape",["macro",18],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",4,_y_cleanDL(",["escape",["macro",182],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",5,_y_cleanDL(",["escape",["macro",94],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",6,_y_cleanDL(",["escape",["macro",95],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",7,_y_cleanDL(",["escape",["macro",63],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",8,_y_cleanDL(",["escape",["macro",19],8,16],")||\n\"\"]);_wt1Q.push([\"setCustomData\",9,_y_cleanDL(",["escape",["macro",164],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",10,_y_cleanDL(",["escape",["macro",183],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",11,_y_cleanDL(",["escape",["macro",184],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",12,_y_cleanDL(",["escape",["macro",185],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",13,_y_cleanDL(",["escape",["macro",186],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",14,_y_cleanDL(",["escape",["macro",187],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",15,_y_cleanDL(",["escape",["macro",21],8,16],")||\n\"\"]);_wt1Q.push([\"setCustomData\",16,_wt1Q.getCookie(\"sizmekID\")||\"\"]);_wt1Q.push([\"setCustomData\",17,_wt1Q.getCookie(\"__gaCAR\")||\"\"]);a=_wt1Q.getCookie(\"__gaCAR\").split(\".\").slice(2).join(\".\");_wt1Q.push([\"setCustomData\",18,a||\"\"]);_wt1Q.push([\"setCustomData\",19,_y_cleanDL(",["escape",["macro",17],8,16],")||\"\"]);_wt1Q.push([\"setCustomData\",20,_y_cleanDL(",["escape",["macro",14],8,16],")||\"\"]);_wt1Q.push([\"trackPage\",{}]);_ytimg=document.createElement(\"img\");_ytimg.src=\"https:\/\/idsync.rlcdn.com\/456769.gif?partner_uid\\x3d\"+\na;document.head.appendChild(_ytimg)};window.WTTAG_BEFORE_ONLOAD=!0;window.ytrackAsyncInit=function(){var a=window._wt1Q||[];window.Ytrack.init({account:_y_account,domain_id:_y_domain_id,domain_version:\"1\"});a.setTrackAccept(!0);_y_trackPage()};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/prod-js.aws.y-track.com\/\"+_y_account+\"\/v5\/tracker.min.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":570
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.sprChatSettings=window.sprChatSettings||{};window.sprChatSettings={appId:\"",["escape",["macro",181],7],"\"};\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=window,a=d.sprChat;if(\"function\"===typeof a)a(\"update\",d.sprChatSettings);else{var b=document,c=function(){c.m(arguments)};c.q=[];c.m=function(b){c.q.push(b)};d.sprChat=c;a=function(){var a=b.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/prod2-live-chat.sprinklr.com\/api\/livechat\/handshake\/widget\/\"+d.sprChatSettings.appId;var c=b.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c)};(b.attachEvent?\"complete\"===b.readyState:\"loading\"!==b.readyState)?\na():b.addEventListener(\"DOMContentLoaded\",a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1547
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.abtasty.send(\"transaction\",{tid:",["escape",["macro",21],8,16],",ta:",["escape",["macro",188],8,16],",tr:",["escape",["macro",22],8,16],",ts:",["escape",["macro",189],8,16],",tt:",["escape",["macro",190],8,16],",tc:",["escape",["macro",61],8,16],",pm:",["escape",["macro",33],8,16],",sm:",["escape",["macro",34],8,16],",icn:",["escape",["macro",191],8,16],"});\nfor(var j=0;j\u003Cwindow.dataLayer.length;j++)if(!0===Array.isArray(window.dataLayer[j].products))for(var i=0;i\u003Cwindow.dataLayer[j].products.length;i++)window.abtasty.send(\"item\",{tid:",["escape",["macro",21],8,16],",\"in\":window.dataLayer[j].products[i].name,ip:window.dataLayer[j].products[i].price,iq:window.dataLayer[j].products[i].quantity,ic:window.dataLayer[j].products[i].id,iv:window.dataLayer[j].products[i].category});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1675
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",93,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.sprChat(\"updateConversationContext\",{context:{\"5ea7fa9e87651f356209878f\":[",["escape",["macro",21],8,16],"],\"5ea7faaa87651f3562098823\":[",["escape",["macro",22],8,16],"],\"5ea93d8f87e2aae87adcf128\":[",["escape",["macro",61],8,16],"],\"5f40b2658ff1cd29497698b7\":[",["escape",["macro",192],8,16],"]}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1731
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cnoscript\u003E \u003Ciframe src=\"\/\/nojscontainer.pepperjam.com\/",["escape",["macro",193],3],".html\" width=\"1\" height=\"1\" frameborder=\"0\"\u003E\u003C\/iframe\u003E \u003C\/noscript\u003E \u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"\/\/container.pepperjam.com\/",["escape",["macro",193],7],".js\";var a=document.getElementsByTagName(\"head\")[0];a?a.appendChild(b,a):(a=document.getElementsByTagName(\"script\")[0],a.parentNode.insertBefore(b,a))})();\u003C\/script\u003E "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1760
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar CRL8_SITENAME=\"cartier-h2m4mj\";\n!function(){var a=window.crl8=window.crl8||{},e=!1,f=[];a.ready=function(c){e?c():f.push(c)};a.pixel=a.pixel||function(){a.pixel.q.push(arguments)};a.pixel.q=a.pixel.q||[];var b=window.document,d=b.createElement(\"script\"),g=a.debug||-1!==b.location.search.indexOf(\"crl8-debug\\x3dtrue\")?\"js\":\"min.js\";d.src=b.location.protocol+\"\/\/cdn.curalate.com\/sites\/\"+CRL8_SITENAME+\"\/site\/latest\/site.\"+g;d.onload=function(){e=!0;f.forEach(function(c){c()})};b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(d,\nb.nextSibling)}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1792
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/gis.GoInstore.com\/gis\/script\/",["escape",["macro",195],3],"?locale=",["escape",["macro",196],12],"\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1796
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",98,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar userID=\"\";try{userId=JSON.parse(localSorage.getItem(\"gis\"))[\"gis-chat-call-user-uuid\"]}catch(a){console.warn(\"GIS: GoInStore user idmissing. Proceeding with null userId.\")}\nvar data={gisAccount:\"",["escape",["macro",195],7],"\",gisUserId:JSON.parse(localStorage.getItem(\"gis\"))[\"gis-chat-call-user-uuid\"],transaction:{id:\"",["escape",["macro",21],7],"\",customerId:\"",["escape",["macro",9],7],"\",source:website,type:\"",["escape",["macro",33],7],"\",currency:\"",["escape",["macro",61],7],"\",shipping:\"",["escape",["macro",189],7],"\",tax:\"",["escape",["macro",190],7],"\",totalValue:\"",["escape",["macro",22],7],"\",totalValueincludesShipping:!0,valuesIncludeTax:!0,items:[{sku:\"",["escape",["macro",88],7],"\",name:\"",["escape",["macro",98],7],"\",quantity:\"",["escape",["macro",191],7],"\",\ncategory:\"",["escape",["macro",153],7],"\"}]}},encodedData=escape(btoa(JSON.stringify(data))),img=document.createElement(\"img\");img.src=\"https:\/\/gis.goinstore.com\/gis\/track\/purchase?data\\x3d\"+encodedData;img.width=1;img.height=1;img.border=0;\u003C\/script\u003E\n        \n    "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1810
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.HeroWebPluginSettings={applicationId:\"",["escape",["macro",197],7],"\"};\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.HeroObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/cdn.usehero.com\/loader.js\",\"hero\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1851
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ehero(\"track\",{type:\"ecommerce:detail\",products:[{id:\"",["escape",["macro",198],7],"\",name:\"",["escape",["macro",187],7],"\",price:\"",["escape",["macro",184],7],"\",currency:\"",["escape",["macro",61],7],"\",brand:\"CAR\",category:\"",["escape",["macro",199],7],"\",variant:\"",["escape",["macro",200],7],"\",location:\"",["escape",["macro",5],7],"\"}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1853
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ehero(\"track\",{type:\"ecommerce:purchase\",purchase:{id:\"",["escape",["macro",21],7],"\",subtotal:\"",["escape",["macro",22],7],"\",currency:\"",["escape",["macro",61],7],"\",total:\"",["escape",["macro",22],7],"\",tax:\"",["escape",["macro",190],7],"\",shippingCost:\"",["escape",["macro",189],7],"\",shippingMethod:\"",["escape",["macro",34],7],"\"},products:[{id:\"",["escape",["macro",198],7],"\",quantity:\"",["escape",["macro",191],7],"\",name:\"",["escape",["macro",187],7],"\",price:\"",["escape",["macro",184],7],"\",currency:\"",["escape",["macro",61],7],"\",brand:\"CAR\",category:\"",["escape",["macro",185],7],"\",variant:\"",["escape",["macro",200],7],"\",\nlocation:\"",["escape",["macro",5],7],"\"}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1854
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar ADLOOP=function(x){function n(a){return\"undefined\"!==typeof a\u0026\u0026a}function t(a){return\"string\"===typeof a}function B(a){return\"object\"===typeof a\u0026\u0026a instanceof Array}function D(a){return\"function\"===typeof a}function R(a){return new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds()))}function q(a,d){d=d||window.location.href;a=a||\"\";a=a.replace(\/[\\[\\]]\/g,\"\\\\$\\x26\");var c=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\",\"i\");return(c=\nc.exec(d))\u0026\u0026c[2]?decodeURIComponent(c[2]):\"\"}function u(a){if(t(a))return a.split(\"\").reduce(function(d,c,k){k=Math.pow(64,a.length-1-k);c=M.indexOf(c);return d+k*c},0)}function J(a){if(!t(a))return\"\";a=a.match(\/^([^\\\/]+:\\\/\\\/)?([^\\\/]+)\/);return B(a)\u0026\u0026a[2]||\"\"}function E(a){a=a||window.location.href;a=J(a);var d=a.split(\".\"),c=d.length;2\u003Cc\u0026\u0026(a=d[c-2]+\".\"+d[c-1],2==d[c-2].length\u0026\u00262==d[c-1].length\u0026\u0026(a=d[c-3]+\".\"+a));return a}function S(a,v){function c(){var b=p.getCampaignParameters();var a=\"\";for(var m=\nd.TS_FROM_ORIGIN,l=4;0\u003C=l;l--){var f=Math.pow(64,l),g=Math.floor(m\/f),c=M[g];c||(c=\"outofb\"+g);a+=c;m-=g*f}m=864E5;l=new Date;f=l.getTime();l.setTime(f+365*m);m=l;l=D();if(l){var h=b;b=\"\";f=J(window.document.referrer||\"\").toLowerCase()||null;a:{for(c=97;122\u003E=c;c++)if(g=String.fromCharCode(c),q(\"adl\"+g+\"id\")||q(\"al\"+g+\"id\"))break a;g=void 0}c=T(h)||h;var y=q(\"adlch\")||q(\"alch\");if(y)b=y;else if(h)b=e(h)||H.getChannelCodeFromCampaignCode(c);else if(g)b=g?d.COST_ID_CHAN[g]||\"ZZ\"+g:null;else if(f){if(-1===\nf.indexOf(\"mail\")){var r=A(f);b=r.channelCode}b||(b=F(f));b||(b=H.getSourceByAffiliate(f));b||(b=-1!==f.indexOf(E())?\"IN\":H.getDefaultAffiliateChannel()||\"UN\")}else b=window.location\u0026\u0026-1\u003Cwindow.location.href.indexOf(\"cdn.ampproject\")?\"SOa\":\"DR\";if(!(h=p.externalId())){h=[];y=\"0123456789abcdef\";for(var v=0;36\u003Ev;v++)h[v]=y.substr(Math.floor(16*Math.random()),1);h[14]=\"4\";h[19]=y.substr(h[19]\u00263|8,1);h[8]=h[13]=h[18]=h[23]=\"-\";h=h.join(\"\")}r={campaignCode:c,v4uuid:h,channelCode:b,tRefSEng:r\u0026\u0026r.tRefSEng,\ntRefKwd:r\u0026\u0026r.tRefKwd,tRefDomain:f,costId:g}}else r={};b=(b=p.readCookie(p.getTrackingCookieName()))?z(b):void 0;c=r;g=a;f=b;if(n(f))if(n(c)){h=c;y=g;v=f;var L=30,t=k(h);h=t===v.campaignCode\u0026\u0026h.channelCode===v.channelCode?u(y)-u(v.timestamp)\u003CL:void 0;h?f=!0:(h=3600,f=n(c.costId)||\"DR\"!==c.channelCode||n(c.campaignCode)||\"\"!==(window.document.referrer||\"\")?void 0:u(g)-u(f.timestamp)\u003Ch)}else f=void 0;else f=void 0;l\u0026\u0026!f?(l=r,b=r.costId,g=l.channelCode||\"\",c=N(b)||\"\",f=k(l),b=(h=q(\"adlch\")||q(\"alch\"))?\nh:\"SO\"!==g.substring(0,2)\u0026\u0026\"DR\"!==g.substring(0,2)\u0026\u0026c?b?d.COST_ID_CHAN[b]||\"ZZ\"+b:null:g,a=G(p.getTrackingCookieName(),l.v4uuid,b,f,a,m)):(m=a,(a=b)?(a.dimension=null,a=I(a),(l=z(a))?(b=l.timestamp,f=u(b)+d.ORIGIN_UTC_TIME\/d.TIME_ACCURACY,g=new Date,g.setHours(0,0,0),g=g.getTime()\/d.TIME_ACCURACY,!n(b)||g\u003C=f||(l.timestamp=m,a=I(l))):a=void 0,a={clickCode:a,viewCode:null,clickDimension:p.generateClickDimension()}):a=void 0);void 0!==r.v4uuid\u0026\u0026(r=r.v4uuid,m=document.createElement(\"div\"),m.innerHTML=\n\"\\x3cimg border\\x3d'0' hspace\\x3d'0' vspace\\x3d'0' width\\x3d'1' height\\x3d'1' src\\x3d'\"+d.LIVERAMP_URL+r+\"'\/\\x3e\");p.updateTracking(a)}function k(b){var a=b.channelCode||\"\";var e=p.getPageSource(),c=b.campaignCode||\"\",d=N(b.costId)||\"\";return(a=\"SOa\"===a.substring(0,3)||\"DR\"==a.substring(0,2)?e:\"SO\"===a.substring(0,2)\u0026\u0026\"SOa\"!==a.substring(0,3)?b.tRefSEng+\":\"+e:c+(c\u0026\u0026d?\"_._\":\"\")+d)||b.tRefDomain}function G(b,a,e,c,f,g){var K=Date.now()-6048E5,l=z(p.readCookie(b))||{};e={uuid:l.uuid||a,timestamp:f,\nchannelCode:e,campaignCode:c};c=Object.assign({dimension:p.generateClickDimension()},e);p.writeCookie(b,I(c),g);if(b=p.readCookie(d.VIEW_CODE_COOKE_NAME)){var m=U(b);m=m.views.filter(function(b){b=u(b.timestamp)*d.TIME_ACCURACY+d.ORIGIN_UTC_TIME;return b\u003E=K});m=m.sort(function(b,a){return u(b.timestamp)-u(a.timestamp)});m=0\u003Cm.length?w({uuid:l.uuid||a,views:m},d.OMNITURE_VIEW_CODE_LIMIT):null;p.writeCookie(d.VIEW_CODE_COOKE_NAME,\"\",g)}return{clickCode:I(e),viewCode:m||null,clickDimension:c.dimension}}\nfunction z(b){var a=\/^(([^_]+)?_)?([^:]*):([^\\|]*)\\|([^|]+)\\|*(.*$)\/;if(t(b)\u0026\u0026(b=b.match(a),B(b)))return{dimension:b[2],uuid:b[3],timestamp:b[4],channelCode:b[5],campaignCode:b[6]}}function I(b){var a={dimension:\"\",uuid:\"\",timestamp:\"\",channelCode:\"\",campaignCode:\"\"};b=Object.assign({},a,b);return(b.dimension?b.dimension+\"_\":\"\")+b.uuid+\":\"+b.timestamp+\"|\"+b.channelCode+\"|\"+b.campaignCode}function U(b){if(t(b))return{uuid:\"\",views:b.split(\":\").map(V).filter(n)||[]}}function V(b){var a=\/^v\\|([^|]+)\\|?(.*)\/;\nif(t(b)\u0026\u0026(b=b.match(a),B(b)))return{timestamp:b[1],others:b[2]}}function w(b,a){function e(a){return\"object\"!==typeof a||null===a?\"\":\"v|\"+a.timestamp+\"|\"+a.others}function c(b,e){return\"number\"===typeof a\u0026\u0026!isNaN(a)\u0026\u0026b.length+e.length\u003E=a?b:b+\":\"+e}var d={uuid:\"\",views:[]};b=Object.assign({},d,b);return d=b.views.map(e).reduce(c,b.uuid)}function D(){var a=window.document.referrer||\"\";if(p.isValidationPage()||L(H.getInternalReferrerExcludeRegexp())\u0026\u0026n(p.readCookie(p.getTrackingCookieName())))return!1;\nif(!n(a))return!0;var e=d.IGNORED_REFERRERS.some(function(b){return-1\u003Ca.indexOf(b)});return!e||!n(p.readCookie(p.getTrackingCookieName()))}function A(a){var b=d.ORGANIC_SEARCH_PROVIDERS.filter(function(b){return-1!==a.indexOf(O(b).domain)})[0];if(!b)return{};b=O(b);return{tRefSEng:b.engine,channelCode:\"SOu\"}}function F(a){var b=d.SOCIAL_MEDIA_PROVIDERS.filter(function(b){var e=a.indexOf(b);return-1!==e\u0026\u0026(\"t.co\"!==b||\"t.co\"===b\u0026\u00260===e)})[0];return b?\"SMn\":null}function O(a){a=a.split(\"|\");return{domain:a[0],\nengine:a[1],queryParameter:a[2]}}function e(a){return d.CAMPAIGN_PARAMETER_DELIMITERS.reduce(function(b,e){if(b)return b;var c=a.split(e);return 1\u003E=c.length||2!==c[0].length\u0026\u00263!==c[0].length?null:c[0]},null)}function T(a){return d.CAMPAIGN_PARAMETER_DELIMITERS.reduce(function(b,e){if(b)return b;var c=a.split(e);return 1\u003E=c.length||2!==c[0].length\u0026\u00263!==c[0].length?null:a.substr(a.indexOf(e)+e.length)},null)}function N(a){var b=q(\"adlcoid\")||q(\"alcoid\");return b?b:a?q(\"adl\"+a+\"id\")||q(\"al\"+a+\"id\"):\nnull}function L(a){var b=window.document.referrer||\"\";if(n(a)\u0026\u0026b)return a.test(J(b))}function x(){try{var a=E();\"cartier.cn\"!=a\u0026\u0026c()}catch(K){console.log(\"Adloop Error:\",K)}}function C(){\"test\"!==(window\u0026\u0026window.ADLOOP_ENV?window.ADLOOP_ENV:\"production\")\u0026\u0026x()}var H=a,p=v;return{performTracking:c,track:x,trackImmediately:C}}function W(a){function d(c){return C(a.campaignCodeToChannelCode,c,z)}function c(c){return C(a.affiliateToChannelCode,c,null)}function k(){return a.internalReferrerExcludeRegexp}\nfunction G(){return n}var z=\"UN\",n=\"RE\",q={internalReferrerExcludeRegexp:new RegExp(E(),\"i\"),campaignCodeToChannelCode:[],affiliateToChannelCode:[]};a=Object.assign({},q,a);return{getChannelCodeFromCampaignCode:d,getSourceByAffiliate:c,getInternalReferrerExcludeRegexp:k,getDefaultAffiliateChannel:G}}function C(a,d,c){var k;if(B(a)\u0026\u0026t(d))return d=d.toLowerCase(),a.some(function(a){if(\"object\"!==typeof a||null===a)return!1;if(t(a.pattern)\u0026\u00260===d.indexOf(a.pattern))return k=a.code,!0;var c=a.pattern;\nif((c=\"object\"===typeof c\u0026\u0026c instanceof RegExp)\u0026\u0026a.pattern.test(d))return k=a.code,!0}),k||c}function X(a){function d(a){a+=\"\\x3d\";for(var c=document.cookie.split(\";\"),e=0;e\u003Cc.length;e++){for(var d=c[e];\" \"==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(a))return decodeURIComponent(d.substring(a.length,d.length))}return\"\"}function c(){if(D(a.getPageSource))return a.getPageSource.apply(null,F);if(!window.location||!window.location.pathname)return\"\";var c=window.location.pathname;if(window.location\u0026\u0026\n-1!==window.location.href.indexOf(\"cdn.ampproject\")){var d=E();return c.substr(c.lastIndexOf(d)+d.length,c.length)}return c}function k(){if(D(a.externalId))return a.externalId.apply(null,F)}function G(a,c,d){d=\"expires\\x3d\"+d.toUTCString();window.document.cookie=a+\"\\x3d\"+encodeURIComponent(c)+\";\"+d+\";path\\x3d\/;domain\\x3d\"+E()}function z(){var a={};for(var c,d,k=0;k\u003CP.length;k++)c=P[k],d=q(c),a[c]=d?d:\"\";if(a.utm_id)return a.utm_id;a=[a.utm_source,a.utm_medium,a.utm_campaign,a.utm_term,a.utm_content].join(\"~.~\");\nreturn\"~.~~.~~.~~.~\"===a?\"\":a}function t(c){c=c||{};var d=c.clickCode;var e=c.viewCode;c=c.clickDimension;if(d||e)!0===a.useGoogleTagManager?(google_tag_manager[",["escape",["macro",100],8,16],"].dataLayer.set(c,d),e\u0026\u0026google_tag_manager[",["escape",["macro",100],8,16],"].dataLayer.set(a.viewDimension,e)):(window.ga(a.customTracker+\"set\",c,d),e\u0026\u0026(d={},d[a.viewDimension]=e,window.ga(a.customTracker+\"send\",\"pageview\",d)))}function u(){return Q}function w(){}function x(){a:{var c=d(Q);if(n(c)\u0026\u0026(c=c.split(\":\")[0],c=c.split(\"_\"),\n2==c.length)){c=c[0];break a}c=void 0}if(c)return c;c=Math.floor(Math.random()*a.clickDimensions.length);return\"dimension\"+a.clickDimensions[c]}function A(){return Y}function B(){return D(a.isValidationPage)?a.isValidationPage.apply(null,Array.prototype.slice(aruments,0)):!1}var F,C={useGoogleTagManager:!1,clickDimensions:[],viewDimension:null,getPageSource:null,isValidationPage:null,externalId:null,customTracker:\"\"};a=Object.assign({},C,a);return F={readCookie:d,writeCookie:G,getCampaignParameters:z,\nupdateTracking:t,getTrackingCookieName:u,cookieLifetime:w,generateClickDimension:x,getProviderName:A,isValidationPage:B,getPageSource:c,externalId:k}}\"function\"!=typeof Object.assign\u0026\u0026Object.defineProperty(Object,\"assign\",{value:function(a,d){if(null==a)throw new TypeError(\"Cannot convert undefined or null to object\");for(var c=Object(a),k=1;k\u003Carguments.length;k++){var n=arguments[k];if(null!=n)for(var q in n)Object.prototype.hasOwnProperty.call(n,q)\u0026\u0026(c[q]=n[q])}return c},writable:!0,configurable:!0});\nvar M=\"-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz\".split(\"\"),d={SOCIAL_MEDIA_PROVIDERS:\"asmallworld. badoo. dailymotion. del.icio.us digg. facebook. flickr. foursquare. friendster. hello. hootsuite. hyves.nl linkedin. livejournal. meetup. myspace. netvibes. pinterest. plus.url.google. plus.google. popurls. reddit. skyrock. slideshare. stumbleupon. t.co trombi. tumblr. twitter. viadeo. vimeo. weibo. xing. yammer. yelp. youtube.\".split(\" \"),ORGANIC_SEARCH_PROVIDERS:\"about.com|AB|terms ask.com|AK|q alice.com|AL|qs aol.|AO|q alltheweb.com|AT|q altavista.com|AV|q baidu.com|BA|wd bing.com|BI|q cnn.comSEARCH|CN|query daum.net|DA|q ekolay.net|EK|q eniro.se|EN|search_word google.|GG|q kvasir.no|KV|q lycos.com|LY|query mamma.com|MA|query msn.com|MS|q mynet.com|MY|q naver.com|NA|query najdi.org.mk|NJ|q search.netscape.com|NS|query online.onetcenter.org|ON|qt orange.fr|OR|kw ozu.es|OZ|q pchome.com|PC|q qwant.com|QW|q rambler.ru|RB|words search.com|SH|q szukacz.pl|SK|q sesam.no|SS|q seznam.cz|SZ|q terra.com|TR|query search.free.fr|FR|qs search.gmx.net|GM|q search.lilo.org|LI|q duckduckgo.com|DU|q searchnow.com|NO|q search.virgilio.it|VI|qs hellosearch.fr|HE|q wp.pl|WI|szukaj yahoo.com|YH|p yam.com|YM|k yandex.com|YX|text\".split(\" \"),\nIGNORED_REFERRERS:\"paybox paypal ogone be2bill wlp-acs.com payment.amazon 3dsecure tapbuy\".split(\" \"),COST_ID_CHAN:{b:\"SEb\",g:\"SEg\",f:\"SMf\",s:\"COg\",m:\"COb\",t:\"AFt\",d:\"DIs\",a:\"DId\",y:\"DIy\",e:\"DIe\"},TIME_ACCURACY:1E3};d.NOW_UTC_TIME=R(new Date);d.ORIGIN_UTC_TIME=(new Date(\"Tue Oct 01 2013 00:00:00 GMT+0000\")).getTime();d.TS_FROM_ORIGIN=Math.floor((d.NOW_UTC_TIME-d.ORIGIN_UTC_TIME)\/d.TIME_ACCURACY);d.LIFETIME_COOKIE_NAME=\"s_CLT\";d.CAMPAIGN_PARAMETER_DELIMITERS=[\"|\",\"__\"];d.VIEW_CODE_COOKE_NAME=\"adl_v\";\nd.OMNITURE_VIEW_CODE_LIMIT=256;d.LIVERAMP_URL=\"https:\/\/idsync.rlcdn.com\/710229.gif?partner_uid\\x3d\";var P=\"utm_id utm_source utm_medium utm_campaign utm_term utm_content\".split(\" \"),Q=\"adl_ga\",Y=\"googleAnalytics\",w=W({campaignCodeToChannelCode:[],affiliateToChannelCode:[]}),A=X({useGoogleTagManager:!0,clickDimensions:[\"44\",\"45\"],viewDimension:\"\",isValidationPage:null,getPageSource:null,externalId:null});w=S(w,A);A=w.performTracking;w.trackImmediately();x.performTracking=A;return x}({});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":565
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"PROD"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"refuse"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\.cartier\\.cn)|(stores\\.cartier\\.com\/zh_cn)"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/home\/homepage"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"efapiao"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\.cn"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"cartier\\.(com|us)"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"trackEvent"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",53],
      "arg1":"accept"
    },{
      "function":"_eq",
      "arg0":["macro",53],
      "arg1":"refuse"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"virtualPageview"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"\\d"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"\\d"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"0"
    },{
      "function":"_sw",
      "arg0":["macro",70],
      "arg1":"secure"
    },{
      "function":"_ew",
      "arg0":["macro",70],
      "arg1":"www.cartier.cn"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_ew",
      "arg0":["macro",70],
      "arg1":"preprod.cartier.cn"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"trackSocial"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"todirectory"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"(^$|((^|,)687584_1190($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"\/search"
    },{
      "function":"_re",
      "arg0":["macro",79],
      "arg1":"."
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"stores\\."
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"facebook|instagram|pinterest|tumblr|twitter|youtube",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"(^$|((^|,)687584_1197($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",74],
      "arg1":"bookanappointment"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"boutiquedetails",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"(^$|((^|,)687584_1187($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"cta"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"(^$|((^|,)687584_1189($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"findALocation"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"(^$|((^|,)687584_1191($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",82],
      "arg1":"\\d"
    },{
      "function":"_re",
      "arg0":["macro",83],
      "arg1":"."
    },{
      "function":"_eq",
      "arg0":["macro",83],
      "arg1":"undefined"
    },{
      "function":"_css",
      "arg0":["macro",84],
      "arg1":".Search-geolocationButton"
    },{
      "function":"_css",
      "arg0":["macro",84],
      "arg1":".Search-geolocationIcon"
    },{
      "function":"_css",
      "arg0":["macro",84],
      "arg1":".Search-geolocationText"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(driving)?direction(s)?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"(^$|((^|,)687584_1195($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"businessname"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"(^$|((^|,)687584_1188($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",74],
      "arg1":"uber"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"(^$|((^|,)687584_1198($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",75],
      "arg1":"(^$|((^|,)687584_1480($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"replaceState|pushState|popstate",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"\\\/news\\.html",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Select_number_pop-in_validate"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"NebulaCXgaTriggerEvent"
    },{
      "function":"_cn",
      "arg0":["macro",93],
      "arg1":"orderPlaced"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"cartiermx\\.myvtex\\.com|\\.cartier\\.mx|stores\\.cartier\\.com\\\/es_mx\\\/"
    },{
      "function":"_re",
      "arg0":["macro",63],
      "arg1":".*\\\/shopping-bag\\\/checkout-page\\\/payment,summary"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"cartiermx\\.myvtex\\.com|\\.cartier\\.mx|stores\\.cartier\\.com\\\/es_mx\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"cartEmbossing"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"footerNewsletter"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"footerNewsletterSubscription"
    },{
      "function":"_re",
      "arg0":["macro",99],
      "arg1":".*\\.cartier\\..*\/.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"appointmentConfirmation"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(?!(gtm\\.(js|dom|load)|trackEvent|trackSocial))"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"shopping-bag\/checkout-page\/confirm_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"PPROD"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"AE"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"SA"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\.cartier\\.ae)|(stores\\.cartier\\.com\/ar_ae)|(\\.cartier\\.com\\\/(en|ar)\\-ae)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"www\\.cartier\\.com\\\/$|(\\\/en-us\\\/)|(\\\/en_us\\\/)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(.*\\.au\\.cartier\\.com)|(stores\\.cartier\\.com\\\/en_au)|(\\.cartier\\.com\\.au)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\.cartier\\.jp)|(stores\\.cartier\\.com\/ja)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\.cartier\\.co\\.uk)|(stores\\.cartier\\.com\/en_gb)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(ca\\.cartier\\.com)|(stores\\.cartier\\.com\/en_ca\/)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(.*\\.fr)|(.*\\.com\\\/fr)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\.cartier\\.es)|(stores\\.cartier\\.com\/es\/)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\.cartier\\.it)|(stores\\.cartier\\.com\/it)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(.*\\.de)|(.*\\.com\\\/de)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\.cartier\\.ch)|(stores\\.cartier\\.com\/(fr|de|it|en)_ch\/)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\.cartier\\.hk)|(stores\\.cartier\\.com\/(zh|en)_hk)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\.cartier\\.sg)|(stores\\.cartier\\.com\/(zh_hans|en_sg))"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(int\\.cartier\\.com)|(int\\.preprod(2)\\.cartier.com)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.cn|stores\\.cartier\\.com\\\/zh_cn\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"\\d",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"\\d",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",117],
      "arg1":"\/confirm_purchase",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"www\\.*\\.com"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\.cartier\\.jp"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":".*\\.co\\.uk"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(ca\\.cartier\\.com\/en\\-ca\/)|(ca\\.cartier\\.com\/$)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*\\.fr"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*\\.es"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*\\.it"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*\\.de"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\.cartier\\.ch"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*\\.hk"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*\\.sg"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*\\.com\\.au|.*\\.au\\..*"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"(int\\.cartier\\.com)|(int\\.preprod(2)\\.cartier.com)"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"\\w"
    },{
      "function":"_re",
      "arg0":["macro",63],
      "arg1":"\\\/Shopping-Bag\\\/Pop-in_Login"
    },{
      "function":"_cn",
      "arg0":["macro",168],
      "arg1":"cross-button js-close"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":".*\\.hk"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"preprod|quality|staging",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/fr-ch\/collections\/montres\/horlogerie-masculine\/santos-de-cartier"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"\\\/fr-ch\\\/maison\\\/events\\\/cartier-live\\.html|\\\/fr-ch\\\/maison\\\/evenements\\\/cartier-live\\.html"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\.cartier\\.mx)|(stores\\.cartier\\.com\/es_mx)"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(ca\\.cartier\\.com)|(stores\\.cartier\\.com\\\/(fr|en)_ca\\\/)"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(\\\/billing-form.delivery-option)|(\\\/billing-form.payment-summary)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",176],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(stores\\.cartier\\.com\/ru\/)|(ru\\.cartier\\.com)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"secure\\.wwww\\.cartier\\.cn"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"secure\\.www\\.((tw|ru|en)\\.)?cartier\\.((com(\\.br)?|(co\\.kr))|ch|ae|mx)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"stores\\.cartier\\.com"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\\/fr_ch\\\/|\/de_ch|\/it_ch)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\\/es\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"www\\.cartier\\.fr\\\/$|(\\\/fr\\\/)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.co\\.uk|stores\\.cartier\\.com\/en_gb",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"preprod\\.au\\.cartier\\.com|stores\\.cartier\\.com\\\/en_au\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"ca\\.cartier\\.com\\\/en\\-ca\\\/|ca\\.cartier\\.com\\\/|stores\\.cartier\\.com\\\/en_ca\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"ca\\.cartier\\.com\\\/fr\\-ca\\\/|stores\\.cartier\\.com\\\/fr_ca\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.ch\\\/de\\-ch\\\/|stores\\.cartier\\.com\\\/de_ch\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.ch\\\/en\\-ch\\\/|stores\\.cartier\\.com\\\/en_ch\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.de|stores\\.cartier\\.com\\\/de\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.hk\\\/en\\-hk\\\/|stores\\.cartier\\.com\\\/en_hk\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.hk\\\/|\\.cartier\\.hk\\\/zh\\-hk\\\/|stores\\.cartier\\.com\\\/zh_hk\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.it|stores\\.cartier\\.com\\\/it\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.jp|stores\\.cartier\\.com\\\/ja\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.mx|stores\\.cartier\\.com\\\/es_mx\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.sg\\\/|\\.cartier\\.sg\\\/en\\-sg\\\/|stores\\.cartier\\.com\\\/en_sg\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.sg\\\/zh\\-sg\\\/|stores\\.cartier\\.com\\\/zh_sg\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"www\\.cartier\\.com\\\/|stores\\.cartier\\.com\\\/en_us\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.ch\\\/it\\-ch\\\/|stores\\.cartier\\.com\\\/it_ch\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier.es|stores\\.cartier\\.com\\\/es\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"cartiercare\\.",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.it|stores\\.cartier\\.com\\\/it\\\/"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"\"ccbm\":(63|61|59|57),\"ccus\"",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.co\\.uk|stores\\.cartier\\.com\/en_gb"
    },{
      "function":"_eq",
      "arg0":["macro",168],
      "arg1":"ccfx-close ccb-close-icon"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier.es|stores\\.cartier\\.com\\\/es\\\/"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.fr|stores\\.cartier\\.com\\\/fr\\\/"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.com\\\/|stores\\.cartier\\.com\\\/en_us\\\/"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"www\\.cartier\\.com\\\/|stores\\.cartier\\.com\\\/en_us\\\/"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.ch\\\/de\\-ch\\\/|stores\\.cartier\\.com\\\/de_ch\\\/"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.ch\\\/en\\-ch\\\/|stores\\.cartier\\.com\\\/en_ch\\\/"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.ch\\\/$|cartier\\.ch\\\/fr\\-ch\\\/|stores\\.cartier\\.com\\\/fr_ch\\\/"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.ch\\\/it\\-ch\\\/|stores\\.cartier\\.com\\\/it_ch\\\/"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.de|stores\\.cartier\\.com\\\/de\\\/"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.ch\\\/$|cartier\\.ch\\\/fr\\-ch\\\/|stores\\.cartier\\.com\\\/fr_ch\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"\\.cartier\\.com\\.au|stores\\.cartier\\.com\\\/en_au\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",63],
      "arg1":"\\\/shopping\\-bag",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(\\.cartier\\.ae)|(stores\\.cartier\\.com\/ar_sa)|(\\.cartier\\.com\\\/(en|ar)\\-sa)"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"www\\.preprod\\.cartier\\.de",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"www\\.preprod\\.cartier\\.fr",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"www\\.preprod\\.cartier\\.co\\.uk",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"www\\.preprod\\.cartier.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"www\\.preprod\\.cartier\\.fr"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"www\\.preprod\\.cartier\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"www\\.cartier\\.hk",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"www\\.cartier\\.es",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"www\\.cartier\\.it",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"FI|NL"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"www\\.cartier\\.ch",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\.cartier\\.cn"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"nemer\\-staging\\.cartier\\.ae",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",194],
      "arg1":"homepage"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"HK"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"product page"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"Category\/Collection"
    },{
      "function":"_re",
      "arg0":["macro",63],
      "arg1":"\\\/zh_hk\\\/maison|\/en_hk\/maison",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"\/stories"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"contact-us"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"preprod2\\.cartier\\.fr|stores\\.cartier\\.com\\\/fr\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"www\\.preprod2\\.cartier\\.fr"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"Product pages"
    }],
  "rules":[
    [["if",0],["add",2,9,11,38,39,40,41,72,0,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,61,62,63,64,65,66,67,68,69]],
    [["if",0,5],["add",3],["block",85,86,87,88,89]],
    [["if",0,6],["add",4]],
    [["if",7],["add",5]],
    [["if",0,9],["add",6]],
    [["if",10],["add",7,8]],
    [["if",14],["add",9,11]],
    [["if",15,16,19,20,21],["unless",17,18],["add",10,75]],
    [["if",15,16,19,21,22],["unless",17,18],["add",10]],
    [["if",23],["add",12,13]],
    [["if",24,25,26],["add",14]],
    [["if",0,27,28,29],["add",15]],
    [["if",25,30,31],["add",16]],
    [["if",32,33],["add",17]],
    [["if",25,34,35],["add",18]],
    [["if",25,36,37],["add",19]],
    [["if",25,38,39],["add",19]],
    [["if",0,27,29,40],["add",20]],
    [["if",0,27,29,41],["unless",42],["add",21]],
    [["if",33,43],["add",22]],
    [["if",33,44],["add",22]],
    [["if",33,45],["add",22]],
    [["if",25,46,47],["add",23]],
    [["if",33,46],["add",23]],
    [["if",25,48,49],["add",24]],
    [["if",25,50,51],["add",25]],
    [["if",2,3,4],["add",26],["block",2,5,7,8,14,15,16,17,18,19,20,21,22,23,24,25,27,28,29,30,33,34,35,37,70,71,72,73,74,75,76,77,78,79,80,81,0,1,83,84,85,86,87,88,89,90,92,93,95,96,101,102]],
    [["if",52,53],["add",27]],
    [["if",54,55,56],["add",28]],
    [["if",57],["add",29]],
    [["if",58],["add",30]],
    [["if",2,59,60],["add",31]],
    [["if",14,61,62],["add",32]],
    [["if",63],["add",33]],
    [["if",64],["add",34]],
    [["if",65],["add",35]],
    [["if",0],["unless",66],["add",36]],
    [["if",67],["add",37]],
    [["if",21],["add",57]],
    [["if",68],["add",70]],
    [["if",0,1],["add",71],["block",91]],
    [["if",14,69,70],["add",71,72]],
    [["if",0,73],["add",73]],
    [["if",0,74],["add",74,1,90,92]],
    [["if",0,75],["add",74]],
    [["if",0,76],["add",74,1]],
    [["if",0,77],["add",74,78,1,88]],
    [["if",0,78],["add",74]],
    [["if",0,79],["add",74,1,87]],
    [["if",0,80],["add",74,1,89]],
    [["if",0,81],["add",74,1]],
    [["if",0,82],["add",74,1,85,90]],
    [["if",0,83],["add",74,86,90]],
    [["if",0,84],["add",74,78]],
    [["if",0,85],["add",74]],
    [["if",0,86],["add",74,1]],
    [["if",1,21,87],["add",74,93]],
    [["if",0,15,16,91],["add",75]],
    [["if",0,15,16,92],["add",75]],
    [["if",0,15,16,93],["add",75,79,1]],
    [["if",0,15,16,94],["add",75]],
    [["if",0,15,16,95],["add",75]],
    [["if",0,15,16,96],["add",75]],
    [["if",0,15,16,97],["add",75]],
    [["if",0,15,16,98],["add",75]],
    [["if",0,15,16,99],["add",75]],
    [["if",0,15,16,100],["add",75,79]],
    [["if",0,15,16,101],["add",75]],
    [["if",0,15,16,102],["add",75]],
    [["if",14,16,103,104],["add",75]],
    [["if",33,93,105,106],["add",76]],
    [["if",33,105,106,107],["add",76]],
    [["if",14,93,105],["add",77]],
    [["if",14,105,107],["add",77]],
    [["if",0,109],["add",80]],
    [["if",0,110],["add",80]],
    [["if",0,111],["add",81]],
    [["if",0,112],["add",1]],
    [["if",0,115],["add",82]],
    [["if",21,116],["add",83]],
    [["if",0,117],["add",84]],
    [["if",0,118,119],["add",86]],
    [["if",0,118,120],["add",89]],
    [["if",0,121],["add",90]],
    [["if",21,70,122],["add",91]],
    [["if",21,70,123],["add",91]],
    [["if",21,70,124],["add",91]],
    [["if",21,70,125],["add",91]],
    [["if",21,70,126],["add",91]],
    [["if",21,70,127],["add",91]],
    [["if",21,70,87],["add",91]],
    [["if",21,70,128],["add",91]],
    [["if",21,70,129],["add",91]],
    [["if",21,70,130],["add",91]],
    [["if",21,70,131],["add",91]],
    [["if",21,70,132],["add",91]],
    [["if",21,70,133],["add",91]],
    [["if",21,70,134],["add",91]],
    [["if",21,70,135],["add",91]],
    [["if",21,70,136],["add",91]],
    [["if",21,70,137],["add",91]],
    [["if",21,70,138],["add",91]],
    [["if",1,21,140,141],["add",93]],
    [["if",1,21,141,142],["add",93]],
    [["if",1,33,140,143],["add",93]],
    [["if",1,33,142,143],["add",93]],
    [["if",1,33,143,144],["add",93]],
    [["if",1,21,141,144],["add",93]],
    [["if",1,21,141,145],["add",93]],
    [["if",1,33,143,145],["add",93]],
    [["if",1,33,143,146],["add",93]],
    [["if",1,21,141,147],["add",93]],
    [["if",21,111],["add",93]],
    [["if",21,112],["add",93]],
    [["if",1,21,134],["add",93]],
    [["if",1,21,135],["add",93]],
    [["if",1,33,143,148],["add",93]],
    [["if",1,33,143,149],["add",93]],
    [["if",1,33,143,150],["add",93]],
    [["if",1,33,143,151],["add",93]],
    [["if",1,33,143,152],["add",93]],
    [["if",1,21,141,152],["add",93]],
    [["if",1,21,153],["add",93]],
    [["if",1,21,137],["add",93]],
    [["if",1,21,127],["add",93]],
    [["if",1,21,126],["add",93]],
    [["if",1,21,130],["add",93]],
    [["if",1,21,129],["add",93]],
    [["if",1,21,154],["add",93]],
    [["if",1,21,132],["add",93]],
    [["if",21,88,89],["add",94]],
    [["if",1,15,16,21],["add",95]],
    [["if",14,157],["add",96]],
    [["if",14,158],["add",96]],
    [["if",14,159],["add",96]],
    [["if",14,160],["add",96]],
    [["if",0,157],["add",96]],
    [["if",0,161],["add",96]],
    [["if",0,159],["add",96]],
    [["if",0,162],["add",96]],
    [["if",14,163],["add",96]],
    [["if",0,163],["add",96]],
    [["if",14,164],["add",96]],
    [["if",0,164],["add",96]],
    [["if",14,165],["add",96]],
    [["if",0,165],["add",96]],
    [["if",14,166],["add",96]],
    [["if",0,166],["add",96]],
    [["if",14,167],["add",96]],
    [["if",0,167],["add",96]],
    [["if",0,170],["add",97]],
    [["if",0,171,172],["add",98]],
    [["if",0,172,173],["add",98]],
    [["if",0,172,174],["add",98]],
    [["if",0,175],["add",98]],
    [["if",0,172,176],["add",98]],
    [["if",0,172,177],["add",98]],
    [["if",0,70,88,89,172],["add",98,99]],
    [["if",21,70,178],["add",100]],
    [["if",21,179,180],["add",101]],
    [["if",0,15,16,179],["add",102]],
    [["if",2],["unless",1],["block",2]],
    [["if",2],["unless",8],["block",5]],
    [["if",2,11],["block",7,9,10,12]],
    [["if",2,12],["block",7,9,10,12]],
    [["if",2,4,13],["block",8,11,13,33,96]],
    [["if",2,3],["block",9,10,11,12,13]],
    [["if",0,71],["block",71,72]],
    [["if",0,72],["block",71,72]],
    [["if",0,88,89,90],["block",74]],
    [["if",0,108],["block",78,79]],
    [["if",0,113],["block",1]],
    [["if",0,114],["block",1]],
    [["if",2,139],["block",91,93]],
    [["if",2,155],["block",93]],
    [["if",21,156],["block",93]],
    [["if",21,73],["block",93]],
    [["if",168,169],["block",96]]]
},
"runtime":[[50,"__hjtc",[46,"a"],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","encodeUriComponent"]],[52,"d",["require","injectScript"]],[52,"e",["require","makeString"]],[52,"f",["require","setInWindow"]],["b","hj","hj.q"],[52,"g",[17,[15,"a"],"hotjar_site_id"]],["f","_hjSettings",[8,"hjid",[15,"g"],"hjsv",7,"scriptSource","gtm"]],["d",[0,[0,"https://static.hotjar.com/c/hotjar-",["c",["e",[15,"g"]]]],".js?sv\u003d7"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__hjtc":{"access_globals":{"keys":[{"key":"hj","read":true,"write":true,"execute":false},{"key":"hj.q","read":true,"write":true,"execute":false},{"key":"_hjSettings","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.hotjar.com\/c\/hotjar-*"]}}}

,"security_groups":{
"nonGoogleScripts":["__hjtc"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},fa=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}},ha="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var na=ia,oa=function(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Bi=b.prototype},pa=this||self,ta=function(a){if(a&&a!=pa)return qa(a.document);null===sa&&(sa=qa(pa.document));return sa},ua=/^[\w+/_-]+[=]{0,2}$/,sa=null,qa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&ua.test(c))return c}return""},va=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},wa=function(a,b){function c(){}c.prototype=b.prototype;a.Bi=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ui=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},ya=function(a){return a};var za=function(a,b){this.g=a;this.o=b};var Aa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Ba=function(){this.D={};this.s=!1;this.J={}};Ba.prototype.get=function(a){return this.D["dust."+a]};Ba.prototype.set=function(a,b){this.s||(a="dust."+a,this.J.hasOwnProperty(a)||(this.D[a]=b))};Ba.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};var Da=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.o=new Ba;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(Aa(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};ba=k.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"===a){if(!Aa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else Aa(a)?this.g[Number(a)]=b:this.o.set(a,b)};ba.get=function(a){return"length"===a?this.length():Aa(a)?this.g[Number(a)]:this.o.get(a)};ba.length=function(){return this.g.length};ba.Mb=function(){for(var a=Da(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new k(a)};
var Ea=function(a,b){if(Aa(b))delete a.g[Number(b)];else{var c=a.o,d;d="dust."+b;c.s||c.J.hasOwnProperty(d)||delete c.D[d]}};ba=k.prototype;ba.pop=function(){return this.g.pop()};ba.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.g.shift()};ba.splice=function(a,b,c){return new k(this.g.splice.apply(this.g,arguments))};ba.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};
ba.has=function(a){return Aa(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Fa=function(){function a(f,g){if(b[f]){if(b[f].zc+g>b[f].max)throw Error("Quota exceeded");b[f].zc+=g}}var b={},c=void 0,d=void 0,e={$h:function(f){c=f},rf:function(){c&&a(c,1)},bi:function(f){d=f},Ra:function(f){d&&a(d,f)},yi:function(f,g){b[f]=b[f]||{zc:0};b[f].max=g},Ch:function(f){return b[f]&&b[f].zc||0},reset:function(){b={}},mh:a};e.onFnConsume=e.$h;e.consumeFn=e.rf;e.onStorageConsume=e.bi;e.consumeStorage=e.Ra;e.setMax=e.yi;e.getConsumed=e.Ch;e.reset=e.reset;e.consume=e.mh;return e};var Ga=function(a,b){this.J=a;this.U=function(c,d,e){return c.apply(d,e)};this.s=b;this.o=new Ba;this.g=this.D=void 0};Ga.prototype.add=function(a,b){Ha(this,a,b,!1)};var Ha=function(a,b,c,d){if(!a.o.s)if(a.J.Ra(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.J["dust."+b]=!0}else a.o.set(b,c)};
Ga.prototype.set=function(a,b){this.o.s||(!this.o.has(a)&&this.s&&this.s.has(a)?this.s.set(a,b):(this.J.Ra(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Ga.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.s?this.s.get(a):void 0};Ga.prototype.has=function(a){return!!this.o.has(a)||!(!this.s||!this.s.has(a))};var Ja=function(a){var b=new Ga(a.J,a);a.D&&(b.D=a.D);b.U=a.U;b.g=a.g;return b};var Ka=function(){},La=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},Ma=function(a){return"number"==typeof a&&!isNaN(a)},Na=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Pa=function(a,b){if(a&&Na(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ra=function(a,b){if(!Ma(a)||
!Ma(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ta=function(a,b){for(var c=new Sa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ua=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Va=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Wa=function(a){return Math.round(Number(a))||0},ab=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},bb=function(a){var b=[];if(Na(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},cb=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},db=function(){return(new Date).getTime()},Sa=function(){this.prefix="gtm.";this.values={}};Sa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Sa.prototype.get=function(a){return this.values[this.prefix+a]};
var eb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},gb=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},kb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},lb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},nb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ob=function(a,b){var c=A;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=Oa(b,d))return}return d},
pb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},qb=function(a){var b=[];Ua(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var rb=function(a,b){Ba.call(this);this.g=a;this.U=b};oa(rb,Ba);rb.prototype.toString=function(){return this.g};rb.prototype.Mb=function(){return new k(Da(this))};rb.prototype.o=function(a,b){a.J.rf();return this.U.apply(tb(this,a),Array.prototype.slice.call(arguments,1))};var tb=function(a,b){var c=function(d,e){this.o=d;this.s=e};c.prototype.g=function(d){var e=this.s;return Na(d)?vb(e,d):d};c.prototype.J=function(d){return wb(this.s,d)};c.prototype.D=function(){return b.J};return new c(a,b)};
rb.prototype.Ta=function(a,b){try{return this.o.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var wb=function(a,b){for(var c,d=0;d<b.length&&!(c=vb(a,b[d]),c instanceof za);d++);return c},vb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof rb))throw Error("Attempting to execute non-function "+b[0]+".");return c.o.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.D;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var xb=function(){Ba.call(this)};oa(xb,Ba);xb.prototype.Mb=function(){return new k(Da(this))};var yb={control:function(a,b){return new za(a,this.g(b))},fn:function(a,b,c){var d=this.s,e=this.g(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.D().Ra(a.length+f.length);return new rb(a,function(){return function(g){var h=Ja(d);void 0===h.g&&(h.g=this.s.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.g(l[m]),l[m]instanceof za)return l[m];for(var p=e.get("length"),n=
0;n<p;n++)n<l.length?h.add(e.get(n),l[n]):h.add(e.get(n),void 0);h.add("arguments",new k(l));var t=wb(h,f);if(t instanceof za)return"return"===t.g?t.o:t}}())},list:function(a){var b=this.D();b.Ra(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.g(arguments[d]);"string"===typeof e&&b.Ra(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.D(),c=new xb,d=0;d<arguments.length-1;d+=2){var e=this.g(arguments[d])+"",f=this.g(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ra(g);c.set(e,f)}return c},undefined:function(){}};var zb=function(){this.s=Fa();this.g=new Ga(this.s)},Ab=function(a,b,c){var d=new rb(b,c);d.s=!0;a.g.set(b,d)};zb.prototype.Ec=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};zb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=vb(this.g,arguments[c]);return b};zb.prototype.D=function(a,b){var c=Ja(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=vb(c,arguments[e]);return d};var Bb=function(a){if(a instanceof Bb)return a;this.va=a};Bb.prototype.toString=function(){return String(this.va)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Cb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Db=function(a){if(null==a)return String(a);var b=Cb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Eb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Fb=function(a){if(!a||"object"!=Db(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Eb(a,"constructor")&&!Eb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Eb(a,b)},E=function(a,b){var c=b||("array"==Db(a)?[]:{}),d;for(d in a)if(Eb(a,d)){var e=a[d];"array"==Db(e)?("array"!=Db(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):Fb(e)?(Fb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var Hb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Da(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Oa(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.Mb(),n=0;n<p.length();n++)m[p.get(n)]=g(h.get(p.get(n)));return m}if(h instanceof xb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof rb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Gb(u[v],b,!!c);var w=b?b.J:Fa(),y=new Ga(w);
b&&(y.g=b.g);return g(h.o.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Gb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Oa(d,
h);if(-1<l)return e[l];if(Na(h)||Va(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Fb(h)){var n=new xb;d.push(h);e.push(n);f(h,n);return n}if("function"===typeof h){var t=new rb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Hb(this.g(v[w]),b,!!c);return g((0,this.s.U)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Ib=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Jb=function(a){if(void 0===a||Na(a)||Fb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Kb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.o(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.o(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.o(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.o(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ib(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ea(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.o(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ib(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.o(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ea(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Lb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Mb=new za("break"),Nb=new za("continue"),Rb=function(a,b){return this.g(a)+this.g(b)},Sb=function(a,b){return this.g(a)&&this.g(b)},Tb=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Oa(Lb,b))return Gb(a[b].apply(a,Ib(c)),this.s);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof rb){var e=Ib(c);e.unshift(this.s);return d.o.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Oa(Kb.supportedMethods,b)){var f=Ib(c);
f.unshift(this.s);return Kb[b].apply(a,f)}}if(a instanceof rb||a instanceof xb){if(a.has(b)){var g=a.get(b);if(g instanceof rb){var h=Ib(c);h.unshift(this.s);return g.o.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof rb?a.g:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Ib(c))}if(a instanceof Bb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Ub=function(a,b){a=this.g(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.s;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.g(b);c.set(a,d);return d},Wb=function(a){var b=Ja(this.s),c=wb(b,Array.prototype.slice.apply(arguments));if(c instanceof za)return c},Xb=function(){return Mb},Yb=function(a){for(var b=this.g(a),c=0;c<b.length;c++){var d=this.g(b[c]);if(d instanceof za)return d}},Zb=function(a){for(var b=this.s,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.g(arguments[c+1]);Ha(b,d,e,
!0)}}},$b=function(){return Nb},ac=function(a,b,c){var d=new k;b=this.g(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.s.add(a,this.g(f))},bc=function(a,b){return this.g(a)/this.g(b)},cc=function(a,b){a=this.g(a);b=this.g(b);var c=a instanceof Bb,d=b instanceof Bb;return c||d?c&&d?a.va==b.va:!1:a==b},dc=function(a){for(var b,c=0;c<arguments.length;c++)b=this.g(arguments[c]);return b};
function ec(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=wb(f,d);if(g instanceof za){if("break"===g.g)break;if("return"===g.g)return g}}}function fc(a,b,c){if("string"===typeof b)return ec(a,function(){return b.length},function(f){return f},c);if(b instanceof xb||b instanceof k||b instanceof rb){var d=b.Mb(),e=d.length();return ec(a,function(){return e},function(f){return d.get(f)},c)}}
var gc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return fc(function(e){d.set(a,e);return d},b,c)},hc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return fc(function(e){var f=Ja(d);Ha(f,a,e,!0);return f},b,c)},ic=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return fc(function(e){var f=Ja(d);f.add(a,e);return f},b,c)},kc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return jc(function(e){d.set(a,e);return d},b,c)},lc=
function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return jc(function(e){var f=Ja(d);Ha(f,a,e,!0);return f},b,c)},nc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return jc(function(e){var f=Ja(d);f.add(a,e);return f},b,c)};
function jc(a,b,c){if("string"===typeof b)return ec(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return ec(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var oc=function(a,b,c,d){function e(p,n){for(var t=0;t<f.length();t++){var r=f.get(t);n.add(r,p.get(r))}}var f=this.g(a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.s;d=this.g(d);var h=Ja(g);for(e(g,h);vb(h,b);){var l=wb(h,d);if(l instanceof za){if("break"===l.g)break;if("return"===l.g)return l}var m=Ja(g);e(h,m);vb(m,c);h=m}},pc=function(a){a=this.g(a);var b=this.s,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},qc=function(a,b){var c;a=this.g(a);b=this.g(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof xb||a instanceof k||a instanceof rb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:Aa(b)&&(c=a[b]);else if(a instanceof Bb)return;return c},rc=function(a,b){return this.g(a)>this.g(b)},
sc=function(a,b){return this.g(a)>=this.g(b)},tc=function(a,b){a=this.g(a);b=this.g(b);a instanceof Bb&&(a=a.va);b instanceof Bb&&(b=b.va);return a===b},uc=function(a,b){return!tc.call(this,a,b)},vc=function(a,b,c){var d=[];this.g(a)?d=this.g(b):c&&(d=this.g(c));var e=this.J(d);if(e instanceof za)return e},wc=function(a,b){return this.g(a)<this.g(b)},xc=function(a,b){return this.g(a)<=this.g(b)},yc=function(a,b){return this.g(a)%this.g(b)},Ec=function(a,b){return this.g(a)*this.g(b)},Fc=function(a){return-this.g(a)},
Gc=function(a){return!this.g(a)},Hc=function(a,b){return!cc.call(this,a,b)},Ic=function(){return null},Jc=function(a,b){return this.g(a)||this.g(b)},Kc=function(a,b){var c=this.g(a);this.g(b);return c},Lc=function(a){return this.g(a)},Mc=function(a){return Array.prototype.slice.apply(arguments)},Nc=function(a){return new za("return",this.g(a))},Oc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof rb||
a instanceof k||a instanceof xb)&&a.set(b,c);return c},Pc=function(a,b){return this.g(a)-this.g(b)},Qc=function(a,b,c){a=this.g(a);var d=this.g(b),e=this.g(c);if(!Na(d)||!Na(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.g(d[h]))if(f=this.g(e[h]),f instanceof za){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.g(e[e.length-1]),f instanceof za&&("return"===f.g||"continue"===
f.g)))return f},Rc=function(a,b,c){return this.g(a)?this.g(b):this.g(c)},Sc=function(a){a=this.g(a);return a instanceof rb?"function":typeof a},Tc=function(a){for(var b=this.s,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Uc=function(a,b,c,d){var e=this.g(d);if(this.g(c)){var f=this.J(e);if(f instanceof za){if("break"===f.g)return;if("return"===f.g)return f}}for(;this.g(a);){var g=this.J(e);if(g instanceof za){if("break"===g.g)break;if("return"===g.g)return g}this.g(b)}},
Vc=function(a){return~Number(this.g(a))},Wc=function(a,b){return Number(this.g(a))<<Number(this.g(b))},Xc=function(a,b){return Number(this.g(a))>>Number(this.g(b))},Yc=function(a,b){return Number(this.g(a))>>>Number(this.g(b))},Zc=function(a,b){return Number(this.g(a))&Number(this.g(b))},$c=function(a,b){return Number(this.g(a))^Number(this.g(b))},dd=function(a,b){return Number(this.g(a))|Number(this.g(b))};var fd=function(){this.g=new zb;ed(this)};fd.prototype.Ec=function(a){return gd(this.g.o(a))};
var id=function(a,b){return gd(hd.g.D(a,b))},ed=function(a){var b=function(d,e){var f=a.g,g=String(e);yb.hasOwnProperty(d)&&Ab(f,g||d,yb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Ab(a.g,String(d),e)};c(0,Rb);c(1,Sb);c(2,Tb);c(3,Ub);c(53,Wb);c(4,Xb);c(5,Yb);c(52,Zb);c(6,$b);c(9,Yb);c(50,ac);c(10,bc);c(12,cc);c(13,dc);c(47,gc);c(54,hc);c(55,ic);c(63,oc);c(64,kc);c(65,lc);c(66,nc);c(15,pc);c(16,qc);c(17,qc);c(18,rc);c(19,sc);c(20,tc);c(21,uc);c(22,vc);
c(23,wc);c(24,xc);c(25,yc);c(26,Ec);c(27,Fc);c(28,Gc);c(29,Hc);c(45,Ic);c(30,Jc);c(32,Kc);c(33,Kc);c(34,Lc);c(35,Lc);c(46,Mc);c(36,Nc);c(43,Oc);c(37,Pc);c(38,Qc);c(39,Rc);c(40,Sc);c(41,Tc);c(42,Uc);c(58,Vc);c(57,Wc);c(60,Xc);c(61,Yc);c(56,Zc);c(62,$c);c(59,dd)},kd=function(){var a=hd,b=jd();Ab(a.g,"require",b)},ld=function(a,b){a.g.g.U=b};
function gd(a){if(a instanceof za||a instanceof rb||a instanceof k||a instanceof xb||a instanceof Bb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var md=[],nd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},od=function(a){return nd[a]},pd=/[\x00\x22\x26\x27\x3c\x3e]/g;md[3]=function(a){return String(a).replace(pd,od)};var td=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ud={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},vd=function(a){return ud[a]};md[7]=function(a){return String(a).replace(td,vd)};
md[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(td,vd)+"'"}};var Bd=/['()]/g,Cd=function(a){return"%"+a.charCodeAt(0).toString(16)};md[12]=function(a){var b=
encodeURIComponent(String(a));Bd.lastIndex=0;return Bd.test(b)?b.replace(Bd,Cd):b};var Dd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ed={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Fd=function(a){return Ed[a]};md[16]=function(a){return a};var Id;
var Jd=[],Kd=[],Ld=[],Md=[],Nd=[],Od={},Pd,Qd,Rd,Sd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Td=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Od[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.nf&&b.nf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):Id(c,e,b)},Vd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Ud(a[e],b,c));return d},Ud=function(a,b,c){if(Na(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Ud(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Jd[f];if(!g||b.Id(g))return;c[f]=!0;try{var h=Vd(g,b,c);h.vtp_gtmEventId=b.id;d=Td(h,b);Rd&&(d=Rd.oh(d,h))}catch(y){b.Cf&&b.Cf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Ud(a[l],b,c)]=Ud(a[l+1],b,c);return d;case "template":d=[];for(var m=
!1,p=1;p<a.length;p++){var n=Ud(a[p],b,c);Qd&&(m=m||n===Qd.oc);d.push(n)}return Qd&&m?Qd.rh(d):d.join("");case "escape":d=Ud(a[1],b,c);if(Qd&&Na(a[1])&&"macro"===a[1][0]&&Qd.Nh(a))return Qd.gi(d);d=String(d);for(var t=2;t<a.length;t++)md[a[t]]&&(d=md[a[t]](d));return d;case "tag":var r=a[1];if(!Md[r])throw Error("Unable to resolve tag reference "+r+".");return d={uf:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Wd(u,b,c),w=!!a[4];return w||2!==v?w!==
(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Wd=function(a,b,c){try{return Pd(Vd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Xd=function(){var a=function(b){return{toString:function(){return b}}};return{Tf:a("consent"),ie:a("convert_case_to"),je:a("convert_false_to"),ke:a("convert_null_to"),me:a("convert_true_to"),ne:a("convert_undefined_to"),Li:a("debug_mode_metadata"),Qa:a("function"),Gg:a("instance_name"),Hg:a("live_only"),Ig:a("malware_disabled"),Jg:a("metadata"),Oi:a("original_activity_id"),Pi:a("original_vendor_template_id"),Lg:a("once_per_event"),af:a("once_per_load"),ef:a("setup_tags"),ff:a("tag_id"),hf:a("teardown_tags")}}();var Yd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};oa(Yd,Error);function Zd(a,b){if(Na(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Zd(a[c],b[c])}};var $d=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};oa($d,Error);var be=function(){return function(a,b){a instanceof $d||(a=new $d(a,ae));b&&a.g.push(b);throw a;}};function ae(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ma(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var ce=null,fe=function(a){function b(n){for(var t=0;t<n.length;t++)d[n[t]]=!0}var c=[],d=[];ce=de(a);for(var e=0;e<Kd.length;e++){var f=Kd[e],g=ee(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<Md.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},ee=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ce(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=ce(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},de=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Wd(Ld[c],a));return b[c]}};var ge={oh:function(a,b){b[Xd.ie]&&"string"===typeof a&&(a=1==b[Xd.ie]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Xd.ke)&&null===a&&(a=b[Xd.ke]);b.hasOwnProperty(Xd.ne)&&void 0===a&&(a=b[Xd.ne]);b.hasOwnProperty(Xd.me)&&!0===a&&(a=b[Xd.me]);b.hasOwnProperty(Xd.je)&&!1===a&&(a=b[Xd.je]);return a}};var he=function(){this.g={}};function ie(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Yd(c,d,g);}}function je(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));ie(e,b,d,g);ie(f,b,d,g)}}}};var ne=function(a){var b=ke.F,c=this;this.o=new he;this.g={};var d={},e=je(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ua(a,function(f,g){var h={};Ua(g,function(l,m){var p=le(l,m);h[l]=p.assert;d[l]||(d[l]=p.P)});c.g[f]=function(l,m){var p=h[l];if(!p)throw me(l,{},"The requested permission "+l+" is not configured.");var n=Array.prototype.slice.call(arguments,0);p.apply(void 0,n);e.apply(void 0,n)}})},pe=function(a){return oe.g[a]||
function(){}};function le(a,b){var c=Sd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=me;try{return Td(c)}catch(d){return{assert:function(e){throw new Yd(e,{},"Permission "+e+" is unknown.");},P:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function me(a,b,c){return new Yd(a,b,c)};var qe=!1;var re={};re.Gi=ab('');re.vh=ab('');var se=qe,te=re.vh,ue=re.Gi;
var Le=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Me=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Le(b,"/*")&&(b=b.slice(0,-2));Le(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Ne=/^[a-z0-9-]+$/i,Oe=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Qe=function(a,b){var c;if(!(c=!Pe(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Ne.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Oe.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),n=p.slice(0,p.indexOf("/")),t;var r=l.hostname,u=n;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=p.slice(p.indexOf("/"));h=Me(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Pe=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Te=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Ue={Fn:"function",DustMap:"Object",List:"Array"},G=function(a,b,c){for(var d=0;d<b.length;d++){var e=Te.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof rb?p="Fn":l instanceof k?p="List":l instanceof xb?p="DustMap":
l instanceof Bb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Ue[h]||h)+".");}}};function Ve(a){return""+a}
function We(a,b){var c=[];return c};var Xe=function(a,b){var c=new rb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.g(d[e]);return b.apply(this,d)});c.s=!0;return c},Ye=function(a,b){var c=new xb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];La(e)?c.set(d,Xe(a+"_"+d,e)):(Ma(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.s=!0;return c};var Ze=function(a,b){G(this.o.g,["apiName:!string","message:?string"],arguments);var c={},d=new xb;return d=Ye("AssertApiSubject",c)};var $e=function(a,b){G(this.o.g,["actual:?*","message:?string"],arguments);var c={},d=new xb;return d=Ye("AssertThatSubject",c)};function af(a){return function(){for(var b=[],c=this.s,d=0;d<arguments.length;++d)b.push(Hb(arguments[d],c));return Gb(a.apply(null,b))}}var cf=function(){for(var a=Math,b=bf,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=af(a[e].bind(a)))}return c};var df=function(a){var b;return b};var ef=function(a){var b;return b};var ff=function(a){G(this.o.g,["uri:!string"],arguments);return encodeURI(a)};var gf=function(a){G(this.o.g,["uri:!string"],arguments);return encodeURIComponent(a)};var hf=function(a){G(this.o.g,["message:?string"],arguments);};var jf=function(a,b){G(this.o.g,["min:!number","max:!number"],arguments);return Ra(a,b)};var kf=function(a,b,c){var d=a.s.g;if(!d)throw Error("Missing program state.");d.$g.apply(null,Array.prototype.slice.call(arguments,1))};var lf=function(){kf(this,"read_container_data");var a=new xb;a.set("containerId",'GTM-577SDR');a.set("version",'514');a.set("environmentName",'');a.set("debugMode",se);a.set("previewMode",ue);a.set("environmentMode",te);a.s=!0;return a};var mf=function(){return(new Date).getTime()};var nf=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof rb)return"function";if(a instanceof Bb){a=a.va;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var of=function(a){function b(c){return function(d){try{return c(d)}catch(e){(se||ue)&&a.call(this,e.message)}}}return{parse:b(function(c){return Gb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Hb(c))})}};var pf=function(a){return Wa(Hb(a,this.s))};var qf=function(a){return Number(Hb(a,this.s))};var rf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var sf=function(a,b,c){var d=null,e=!1;return e?d:null};var bf="floor ceil round max min abs pow sqrt".split(" ");var tf=function(){var a={};return{Dh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},zi:function(b,c){a[b]=c},reset:function(){a={}}}},uf=function(a,b){G(this.o.g,["apiName:!string","mock:?*"],arguments);};var vf=function(){this.g={};this.o={}};vf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
vf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:La(b)?Xe(a,b):Ye(a,b)};
var wf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=La(c)?Xe(b,c):Ye(b,c)};function xf(){var a={};return a};var H={Cb:"_ee",ud:"_syn",Si:"_uei",od:"_eu",Qi:"_pci",bd:"event_callback",ic:"event_timeout",ka:"gtag.config",Ma:"gtag.get",oa:"purchase",cb:"refund",La:"begin_checkout",$a:"add_to_cart",ab:"remove_from_cart",bg:"view_cart",se:"add_to_wishlist",Aa:"view_item",qe:"view_promotion",pe:"select_promotion",Xc:"select_item",bc:"view_item_list",oe:"add_payment_info",ag:"add_shipping_info",Da:"value_key",Ca:"value_callback",la:"allow_ad_personalization_signals",kd:"restricted_data_processing",tb:"allow_google_signals",
ma:"cookie_expires",hc:"cookie_update",zb:"session_duration",ra:"user_properties",Pa:"transport_url",R:"ads_data_redaction",C:"ad_storage",K:"analytics_storage",he:"region",Uf:"wait_for_update"};H.Se=[H.oa,H.cb,H.La,H.$a,H.ab,H.bg,H.se,H.Aa,H.qe,H.pe,H.bc,H.Xc,H.oe,H.ag];H.Re=[H.la,H.tb,H.hc];H.Te=[H.ma,H.ic,H.zb];var yf={},zf=function(a,b){yf[a]=yf[a]||[];yf[a][b]=!0},Af=function(a){for(var b=[],c=yf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){zf("GTM",a)};function Bf(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Bf);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}wa(Bf,Error);Bf.prototype.name="CustomError";var Cf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");Bf.call(this,d+c[e])};wa(Cf,Bf);Cf.prototype.name="AssertionError";var Df=function(a,b){throw new Cf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Ef=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ff=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Gf,Hf=function(){if(void 0===Gf){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ya,createScript:ya,createScriptURL:ya})}catch(c){pa.console&&pa.console.error(c.message)}Gf=a}else Gf=a}return Gf};var Jf=function(a,b){this.g=b===If?a:""};Jf.prototype.toString=function(){return"TrustedResourceUrl{"+this.g+"}"};var If={};var Kf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Lf;a:{var Mf=pa.navigator;if(Mf){var Nf=Mf.userAgent;if(Nf){Lf=Nf;break a}}Lf=""}var Of=function(a){return-1!=Lf.indexOf(a)};var Qf=function(a,b,c){this.g=c===Pf?a:""};Qf.prototype.toString=function(){return"SafeHtml{"+this.g+"}"};var Rf=function(a){if(a instanceof Qf&&a.constructor===Qf)return a.g;Df("expected object of type SafeHtml, got '"+a+"' of type "+va(a));return"type_error:SafeHtml"},Pf={},Sf=new Qf(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Pf);var Tf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Uf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Rf(Sf);return!c.parentElement}),Vf=function(a,b){if(a.tagName&&Tf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Uf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Rf(b)};var Wf=function(a){var b=Hf(),c=b?b.createHTML(a):a;return new Qf(c,null,Pf)};var A=window,M=document,Xf=navigator,Yf=M.currentScript&&M.currentScript.src,Zf=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},$f=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ag=function(a,b,c){var d=M.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Hf(),g=f?f.createScriptURL(a):a;e=new Jf(g,If);var h;a:{try{var l=d&&d.ownerDocument,m=l&&(l.defaultView||l.parentWindow);
m=m||pa;if(m.Element&&m.Location){h=m;break a}}catch(w){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var p;var n=typeof d;if("object"==n&&null!=d||"function"==n)try{p=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(w){p="<object could not be stringified>"}else p=void 0===d?"undefined":null===d?"null":typeof d;Df("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",p)}var t;e instanceof Jf&&e.constructor===Jf?t=e.g:(Df("expected object of type TrustedResourceUrl, got '"+e+"' of type "+va(e)),t="type_error:TrustedResourceUrl");d.src=t;var r=ta(d.ownerDocument&&d.ownerDocument.defaultView);r&&d.setAttribute("nonce",r);$f(d,b);c&&(d.onerror=c);var u=ta();u&&d.setAttribute("nonce",u);var v=M.getElementsByTagName("script")[0]||M.body||M.head;v.parentNode.insertBefore(d,v);return d},bg=function(){if(Yf){var a=Yf.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},eg=function(a,b){var c=M.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=M.body&&M.body.lastChild||M.body||M.head;d.parentNode.insertBefore(c,d);$f(c,b);void 0!==a&&(c.src=a);return c},fg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},hg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){A.setTimeout(a,0)},ig=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},jg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kg=function(a){var b=M.createElement("div");Vf(b,Wf("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},lg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},mg=function(a){Xf.sendBeacon&&Xf.sendBeacon(a)||fg(a)},ng=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var og={},pg=function(a){return void 0==og[a]?!1:og[a]};var qg=[];function rg(){var a=Zf("google_tag_data",{});a.ics||(a.ics={entries:{},set:sg,update:tg,addListener:ug,notifyListeners:vg,active:!1});return a.ics}
function sg(a,b,c,d,e,f){var g=rg();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var n=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:n};h[a]=t;n&&A.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,wg(a),vg(),zf("TAGGING",2))},f)}}}
function tg(a,b){var c=rg();c.active=!0;if(void 0!=b){var d=xg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=xg(a);f.quiet?(f.quiet=!1,wg(a)):g!==d&&wg(a)}}function ug(a,b){qg.push({qf:a,yh:b})}function wg(a){for(var b=0;b<qg.length;++b){var c=qg[b];Na(c.qf)&&-1!==c.qf.indexOf(a)&&(c.Gf=!0)}}function vg(a){for(var b=0;b<qg.length;++b){var c=qg[b];if(c.Gf){c.Gf=!1;try{c.yh({pf:a})}catch(d){}}}}
var xg=function(a){var b=rg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},yg=function(a){return!(rg().entries[a]||{}).quiet},zg=function(){return pg("gtag_cs_api")?rg().active:!1},Ag=function(a,b){rg().addListener(a,b)},Bg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!yg(b[e]))return!0;return!1}if(c()){var d=!1;Ag(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Cg=function(a,b){if(!1===xg(b)){var c=!1;Ag([b],function(d){!c&&xg(b)&&(a(d),c=!0)})}};var Dg=[H.C,H.K],Eg=function(a){var b=a[H.he];b&&I(40);var c=a[H.Uf];c&&I(41);for(var d=Na(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Dg.length;f++){var g=Dg[f],h=a[Dg[f]],l=d[e];rg().set(g,h,l,"US","US-VA",c)}},Fg=function(a,b){for(var c=0;c<Dg.length;c++){var d=Dg[c],e=a[Dg[c]];rg().update(d,e)}rg().notifyListeners(b)},Gg=function(a){var b=xg(a);return void 0!=b?b:!0},Hg=function(){for(var a=[],b=0;b<Dg.length;b++){var c=xg(Dg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Ig=function(a,b){Bg(a,b)};var Kg=function(a){return Jg?M.querySelectorAll(a):null},Lg=function(a,b){if(!Jg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!M.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Mg=!1;if(M.querySelectorAll)try{var Ng=M.querySelectorAll(":root");Ng&&1==Ng.length&&Ng[0]==M.documentElement&&(Mg=!0)}catch(a){}var Jg=Mg;var Og=function(a){if(M.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!A.getComputedStyle)return!0;var c=A.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=A.getComputedStyle(d,
null))}return!1};
var Pg=function(){var a=M.body,b=M.documentElement||a&&a.parentElement,c,d;if(M.compatMode&&"BackCompat"!==M.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};I(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Qg=function(a){var b=Pg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Xg=/:[0-9]+$/,Yg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},ah=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Zg(a.protocol)||Zg(A.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
A.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||A.location.hostname).replace(Xg,"").toLowerCase());return $g(a,b,c,d,e)},$g=function(a,b,c,d,e){var f,g=Zg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=bh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Xg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||zf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Oa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Yg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Zg=function(a){return a?a.replace(":",
"").toLowerCase():""},bh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},ch=function(a){var b=M.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||zf("TAGGING",1),c="/"+c);var d=b.hostname.replace(Xg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},dh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=ch(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var eh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),fh=new RegExp(/support|noreply/i),gh=["SCRIPT","IMG","SVG","PATH","BR"],hh=["BR"];function ih(a){var b;if(a===M.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=ih(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var lh=function(){var a=!0;var b=a,c;var d=[],e=M.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=gh.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=hh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var p=c,n=p.elements,t=[],r=0;r<n.length;r++){var u=n[r],v=u.textContent;u.value&&(v=u.value);if(v){var w=v.match(eh);if(w){var y=w[0],x;if(A.location){var z=$g(A.location,"host",!0);x=0<=y.toLowerCase().indexOf(z)}else x=!1;x||t.push({element:u,Vc:y})}}}var B;for(var C=[],D=10<t.length?"3":p.status,F=0;F<t.length&&
10>F;F++){var K=t[F].element,O=t[F].Vc,aa=!1;C.push({Vc:O,querySelector:ih(K),tagName:K.tagName,isVisible:!Og(K),type:1,Ic:!!aa})}return{elements:C,status:D}};var ke={},Q=null,zh=Math.random();ke.F="GTM-577SDR";ke.vc="161";ke.Ni="";ke.Vf="";var Ah={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Bh={__paused:!0,__tg:!0},Ch;for(Ch in Ah)Ah.hasOwnProperty(Ch)&&(Bh[Ch]=!0);var Dh="www.googletagmanager.com/gtm.js";
var Eh=Dh,Fh=ab(""),Gh=null,Hh=null,Ih="//www.googletagmanager.com/a?id="+ke.F+"&cv=514",Jh={},Kh={},Lh=function(){var a=Q.sequence||1;Q.sequence=a+1;return a};var Mh={},Nh=new Sa,Oh={},Ph={},Sh={name:"dataLayer",set:function(a,b){E(pb(a,b),Oh);Qh()},get:function(a){return Rh(a,2)},reset:function(){Nh=new Sa;Oh={};Qh()}},Rh=function(a,b){return 2!=b?Nh.get(a):Th(a)},Th=function(a,b){var c=a.split(".");b=b||[];for(var d=Oh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Oa(b,d))return}return d},Uh=function(a,b){Ph.hasOwnProperty(a)||(Nh.set(a,b),E(pb(a,b),Oh),Qh())},Qh=function(a){Ua(Ph,function(b,c){Nh.set(b,c);E(pb(b,
void 0),Oh);E(pb(b,c),Oh);a&&delete Ph[b]})},Vh=function(a,b,c){Mh[a]=Mh[a]||{};var d=1!==c?Th(b):Nh.get(b);"array"===Db(d)||"object"===Db(d)?Mh[a][b]=E(d):Mh[a][b]=d},Wh=function(a,b){if(Mh[a])return Mh[a][b]},Xh=function(a,b){Mh[a]&&delete Mh[a][b]};var $h={},ai=function(a,b){if(A._gtmexpgrp&&A._gtmexpgrp.hasOwnProperty(a))return A._gtmexpgrp[a];void 0===$h[a]&&($h[a]=Math.floor(Math.random()*b));return $h[a]};var bi=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function ci(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var ei=function(a,b,c,d){return di(d)?ci(a,String(b||document.cookie),c):[]},hi=function(a,b,c,d,e){if(di(e)){var f=fi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=gi(f,function(g){return g.Cc},b);if(1===f.length)return f[0].id;f=gi(f,function(g){return g.Sb},c);return f[0]?f[0].id:void 0}}};function ii(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ei(b,f,!1,d).indexOf(c)}
var mi=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!di(c.ya))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ji(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Xh);g=e(g,"samesite",
c.si);c.wi&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=ki(),n=void 0,t=!1,r=0;r<p.length;++r){var u="none"!==p[r]?p[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){n=w;continue}t=!0;if(!li(u,c.path)&&ii(v,a,b,c.ya))return 0}if(n&&!t)throw n;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return li(m,c.path)?1:ii(g,a,b,c.ya)?0:1},ni=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return mi(a,b,c)};
function gi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function fi(a,b,c){for(var d=[],e=ei(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Cc:1*l[0]||1,Sb:1*l[1]||1}))}}return d}
var ji=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},oi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,pi=/(^|\.)doubleclick\.net$/i,li=function(a,b){return pi.test(document.location.hostname)||"/"===b&&oi.test(a)},ki=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;pi.test(e)||oi.test(e)||a.push("none");
return a},di=function(a){if(!pg("gtag_cs_api")||!a||!zg())return!0;if(!yg(a))return!1;var b=xg(a);return null==b?!0:!!b};var qi=function(){for(var a=Xf.userAgent+(M.cookie||"")+(M.referrer||""),b=a.length,c=A.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^bi(a)&2147483647,Math.round(db()/1E3)].join(".")},ti=function(a,b,c,d,e){var f=ri(b);return hi(a,f,si(c),d,e)},ui=function(a,b,c,d){var e=""+ri(c),f=si(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ri=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},si=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function vi(a,b,c){var d,e=a.Rb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||db())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var wi=["1"],xi={},Bi=function(a){var b=yi(a.prefix);xi[b]||zi(b,a.path,a.domain)||(Ai(b,qi(),a),zi(b,a.path,a.domain))};function Ai(a,b,c){var d=ui(b,"1",c.domain,c.path),e=vi(c);e.ya="ad_storage";ni(a,d,e)}function zi(a,b,c){var d=ti(a,b,c,wi,"ad_storage");d&&(xi[a]=d);return d}function yi(a){return(a||"_gcl")+"_au"};function Ci(){for(var a=Di,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ei(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Di,Fi;
function Gi(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Fi[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Di=Di||Ei();Fi=Fi||Ci();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Hi;var Pi=function(){var a=Ii,b=Ji,c=Ki(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){gg(M,"mousedown",d);gg(M,"keyup",d);gg(M,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Qi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ki().decorators.push(f)},Ri=function(a,b,c){for(var d=Ki().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==M.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[n])||p&&0<=l[n].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&kb(e,g.callback())}}return e},Ki=function(){var a=Zf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Si=/(.*?)\*(.*?)\*(.*)/,Ti=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ui=/^(?:www\.|m\.|amp\.)+/,Vi=/([^?#]+)(\?[^#]*)?(#.*)?/;function Wi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Yi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Di=Di||Ei();Fi=Fi||Ci();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,n=m+2<h.length,t=h.charCodeAt(m),r=p?h.charCodeAt(m+1):0,u=n?h.charCodeAt(m+2):0,v=t>>2,w=(t&3)<<4|r>>4,y=(r&15)<<2|u>>6,x=u&63;n||(x=64,p||(y=64));l.push(Di[v],Di[w],Di[y],Di[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Xi(z),
z].join("*")},Xi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Hi)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Hi=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Hi[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},$i=function(){return function(a){var b=ch(A.location.href),
c=b.search.replace("?",""),d=Yg(c,"_gl",!1,!0)||"";a.query=Zi(d)||{};var e=ah(b,"fragment").match(Wi("_gl"));a.fragment=Zi(e&&e[3]||"")||{}}},aj=function(a){var b=$i(),c=Ki();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(kb(d,e.query),a&&kb(d,e.fragment));return d},Zi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Si.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Xi(h,p)){l=!0;break a}l=!1}if(l){for(var n={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)n[t[r]]=Gi(t[r+1]);return n}}}}catch(u){}};function bj(a,b,c,d){function e(p){var n=p,t=Wi(a).exec(n),r=n;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}p=r;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Vi.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function cj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Ri(b,1,c),e=Ri(b,2,c),f=Ri(b,3,c);if(lb(d)){var g=Yi(d);c?dj("_gl",g,a):ej("_gl",g,a,!1)}if(!c&&lb(e)){var h=Yi(e);ej("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],n=a;if(n.tagName){if("a"===n.tagName.toLowerCase()){ej(m,p,n,void 0);break a}if("form"===n.tagName.toLowerCase()){dj(m,p,n);break a}}"string"==typeof n&&bj(m,p,n,void 0)}}
function ej(a,b,c,d){if(c.href){var e=bj(a,b,c.href,void 0===d?!1:d);Kf.test(e)&&(c.href=e)}}
function dj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=M.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=bj(a,b,c.action);Kf.test(m)&&(c.action=m)}}}
var Ii=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||cj(e,e.hostname)}}catch(g){}},Ji=function(a){try{if(a.action){var b=ah(ch(a.action),"host");cj(a,b)}}catch(c){}},fj=function(a,b,c,d){Pi();Qi(a,b,"fragment"===c?2:1,!!d,!1)},gj=function(a,b){Pi();Qi(a,[$g(A.location,"host",!0)],b,!0,!0)},hj=function(){var a=M.location.hostname,b=Ti.exec(M.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ui,""),l=e.replace(Ui,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},ij=function(a,b){return!1===a?!1:a||b||hj()};var jj=/^\w+$/,kj=/^[\w-]+$/,lj=/^~?[\w-]+$/,mj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},nj=function(){if(!pg("gtag_cs_api")||!zg())return!0;var a=xg("ad_storage");return null==a?!0:!!a},oj=function(a,b){yg("ad_storage")?nj()?a():Cg(a,"ad_storage"):b?zf("TAGGING",3):Bg(function(){oj(a,!0)},["ad_storage"])},rj=function(a){var b=[];if(!M.cookie)return b;var c=ei(a,M.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=pj(c[d]);e&&-1===Oa(b,e)&&b.push(e)}return qj(b)};
function sj(a){return a&&"string"==typeof a&&a.match(jj)?a:"_gcl"}
var uj=function(){var a=ch(A.location.href),b=ah(a,"query",!1,void 0,"gclid"),c=ah(a,"query",!1,void 0,"gclsrc"),d=ah(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Yg(e,"gclid",!1,void 0);c=c||Yg(e,"gclsrc",!1,void 0)}return tj(b,c,d)},tj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(kj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":pg("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},wj=function(a){var b=uj();oj(function(){vj(b,a)})};
function vj(a,b,c){function d(l,m){var p=xj(l,e);p&&ni(p,m,f)}b=b||{};var e=sj(b.prefix);c=c||db();var f=vi(b,c,!0);f.ya="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.ij?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var zj=function(a,b){var c=aj(!0);oj(function(){for(var d=sj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==mj[f]){var g=xj(f,d),h=c[g];if(h){var l=Math.min(yj(h),db()),m;b:{for(var p=l,n=ei(g,M.cookie,void 0,"ad_storage"),t=0;t<n.length;++t)if(yj(n[t])>p){m=!0;break b}m=!1}if(!m){var r=vi(b,l,!0);r.ya="ad_storage";ni(g,h,r)}}}}vj(tj(c.gclid,c.gclsrc),b)})},xj=function(a,b){var c=mj[a];if(void 0!==c)return b+c},yj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function pj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Aj=function(a,b,c,d,e){if(Na(b)){var f=sj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=xj(a[l],f);if(m){var p=ei(m,M.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};oj(function(){fj(g,b,c,d)})}},qj=function(a){return a.filter(function(b){return lj.test(b)})},Bj=function(a,b){for(var c=sj(b.prefix),d={},e=0;e<a.length;e++)mj[a[e]]&&(d[a[e]]=mj[a[e]]);oj(function(){Ua(d,function(f,g){var h=ei(c+g,M.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=yj(l),
p={};p[f]=[pj(l)];vj(p,b,m)}})})};function Cj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Dj=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(zg()){var c=uj();if(Cj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);gj(function(){return d},3);gj(function(){var e={};return e._up="1",e},1)}}},Ej=function(){var a;if(nj()){for(var b=[],c=M.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ae:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].ae]||(g[b[h].ae]=[]),g[b[h].ae].push({timestamp:l[1],Ah:l[2]}))}a=g}else a={};return a};var Fj=/^\d+\.fls\.doubleclick\.net$/;function Gj(a,b){yg(H.C)?Gg(H.C)?a():Cg(a,H.C):b?I(42):Ig(function(){Gj(a,!0)},[H.C])}function Hj(a){var b=ch(A.location.href),c=ah(b,"host",!1);if(c&&c.match(Fj)){var d=ah(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ij(a,b,c){if("aw"==a||"dc"==a){var d=Hj("gcl"+a);if(d)return d.split(".")}var e=sj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Gg(H.C)&&c,g;g=uj()[a]||[];if(0<g.length)return f?["0"]:g}var h=xj(a,e);return h?rj(h):[]}
var Jj=function(a){var b=Hj("gac");if(b)return!Gg(H.C)&&a?"0":decodeURIComponent(b);var c=Ej(),d=[];Ua(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Ah);g=qj(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Kj=function(a,b){var c=uj().dc||[];Gj(function(){Bi(b);var d=xi[yi(b.prefix)],e=!1;if(d&&0<c.length){var f=Q.joined_au=Q.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;mg(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=yi(b.prefix),p=xi[m];p&&Ai(m,p,b)}})};var Lj=/[A-Z]+/,Mj=/\s/,Nj=function(a){if(q(a)&&(a=cb(a),!Mj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Lj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Pj=function(a){for(var b={},c=0;c<a.length;++c){var d=Nj(a[c]);d&&(b[d.id]=d)}Oj(b);var e=[];Ua(b,function(f,g){e.push(g)});return e};
function Oj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Qj=function(){var a=!1;return a};var Sj=function(a,b,c,d){return(2===Rj()||d||"http:"!=A.location.protocol?a:b)+c},Rj=function(){var a=bg(),b;if(1===a)a:{var c=Eh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=M.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var gk=function(a){return Gg(H.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=dh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},hk=function(){var a;if(!(a=Fh)){var b;if(!0===A._gtmdgs)b=!0;else{var c=Xf&&Xf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Wa("1");return ai(1,100)<d?ai(2,2):-1},ik=function(a){var b;return b};var jk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),kk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},lk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},mk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ok=function(a){var b;Rh("gtm.allowlist")&&I(52);b=Rh("gtm.allowlist");b||(b=Rh("gtm.whitelist"));b&&I(9);
var c=b&&nb(bb(b),kk),d;Rh("gtm.blocklist")&&I(51);d=Rh("gtm.blocklist");d||(d=Rh("gtm.blacklist"));d||(d=Rh("tagTypeBlacklist"))&&I(3);d?I(8):d=[];nk()&&(d=bb(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Oa(bb(d),"google")&&I(2);var e=
d&&nb(bb(d),lk),f={};return function(g){var h=g&&g[Xd.Qa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Kh[h]||[],m=a(h,l);if(b){var p;if(p=m)a:{if(0>Oa(c,h))if(l&&0<l.length)for(var n=0;n<l.length;n++){if(0>Oa(c,l[n])){I(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var r=0<=Oa(e,h);if(r)t=r;else{var u=Ta(e,l||[]);u&&I(10);t=u}}var v=!m||t;v||!(0<=Oa(l,"sandboxedScripts"))||c&&-1!==Oa(c,"sandboxedScripts")||(v=Ta(e,mk));return f[h]=v}},
nk=function(){return jk.test(A.location&&A.location.hostname)};var pk={active:!0,isAllowed:function(){return!0}},qk=function(a){var b=Q.zones;return b?b.checkState(ke.F,a):pk},rk=function(a){var b=Q.zones;!b&&a&&(b=Q.zones=a());return b};var sk=function(){},tk=function(){};var uk=!1,vk=0,wk=[];function xk(a){if(!uk){var b=M.createEventObject,c="complete"==M.readyState,d="interactive"==M.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){uk=!0;for(var e=0;e<wk.length;e++)N(wk[e])}wk.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function yk(){if(!uk&&140>vk){vk++;try{M.documentElement.doScroll("left"),xk()}catch(a){A.setTimeout(yk,50)}}}var zk=function(a){uk?a():wk.push(a)};var Ak={},Bk={},Ck=function(a,b,c,d){if(!Bk[a]||Bh[b]||"__zone"===b)return-1;var e={};Fb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return Bk[a].tags.push(e)-1},Dk=function(a,b,c,d){if(Bk[a]){var e=Bk[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ek(a){for(var b=Ak[a]||[],c=0;c<b.length;c++)b[c]();Ak[a]={push:function(d){d(ke.F,Bk[a])}}}
var Hk=function(a,b,c){Bk[a]={tags:[]};La(b)&&Fk(a,b);c&&A.setTimeout(function(){return Ek(a)},Number(c));return Gk(a)},Fk=function(a,b){Ak[a]=Ak[a]||[];Ak[a].push(gb(function(){return N(function(){b(ke.F,Bk[a])})}))};function Gk(a){var b=0,c=0,d=!1;return{add:function(){c++;return gb(function(){b++;d&&b>=c&&Ek(a)})},Zg:function(){d=!0;b>=c&&Ek(a)}}};var Ik=function(){function a(d){return!Ma(d)||0>d?0:d}if(!Q._li&&A.performance&&A.performance.timing){var b=A.performance.timing.navigationStart,c=Ma(Sh.get("gtm.start"))?Sh.get("gtm.start"):0;Q._li={cst:a(c-b),cbt:a(Hh-b)}}};var Mk={},Nk=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]},Ok=!1;
var Pk=function(a){A.GoogleAnalyticsObject||(A.GoogleAnalyticsObject=a||"ga");var b=A.GoogleAnalyticsObject;if(A[b])A.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);A[b]=c}Ik();return A[b]},Qk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Nk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Rk=function(a){};
var Tk=function(a){},Sk=function(){return A.GoogleAnalyticsObject||"ga"},Uk=function(a,b){return function(){var c=Nk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Zk=function(){return"&tc="+Md.filter(function(a){return a}).length},bl=function(){2022<=$k().length&&al()},dl=function(){cl||(cl=A.setTimeout(al,500))},al=function(){cl&&(A.clearTimeout(cl),cl=void 0);void 0===el||fl[el]&&!gl&&!hl||(il[el]||jl.Oh()||0>=kl--?(I(1),il[el]=!0):(jl.mi(),fg($k()),fl[el]=!0,ll=ml=nl=hl=gl=""))},$k=function(){var a=el;if(void 0===a)return"";var b=Af("GTM"),c=Af("TAGGING");return[ol,fl[a]?"":"&es=1",pl[a],b?"&u="+b:"",c?"&ut="+c:"",Zk(),gl,hl,nl?nl:"",ml,ll,"&z=0"].join("")},
ql=function(){return[Ih,"&v=3&t=t","&pid="+Ra(),"&rv="+ke.vc].join("")},rl="0.005000">Math.random(),ol=ql(),sl=function(){ol=ql()},fl={},gl="",hl="",ll="",ml="",nl="",el=void 0,pl={},il={},cl=void 0,jl=function(a,b){var c=0,d=0;return{Oh:function(){if(c<a)return!1;db()-d>=b&&(c=0);return c>=a},mi:function(){db()-d>=b&&(c=0);c++;d=db()}}}(2,1E3),kl=1E3,tl=function(a,b,c){if(rl&&!il[a]&&b){a!==el&&(al(),el=a);var d,e=String(b[Xd.Qa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;gl=gl?gl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Od[g]?"1":"2")+d;ll=ll?ll+"."+h:"&ti="+h;dl();bl()}},ul=function(a,b,c){if(rl&&!il[a]){a!==el&&(al(),el=a);var d=c+b;hl=hl?hl+"."+d:"&epr="+d;dl();bl()}},vl=function(a,b,c){};
var wl=function(){return!1},xl=function(){var a={};return function(b,c,d){}};function yl(a,b,c,d){var e=Md[a],f=zl(a,b,c,d);if(!f)return null;var g=Ud(e[Xd.ef],c,[]);if(g&&g.length){var h=g[0];f=yl(h.index,{M:f,L:1===h.uf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function zl(a,b,c,d){function e(){if(f[Xd.Ig])h();else{var w=Vd(f,c,[]);var z=Ck(c.id,String(f[Xd.Qa]),Number(f[Xd.ff]),w[Xd.Jg]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var F=db()-D;tl(c.id,Md[a],"5");Dk(c.id,z,"success",
F);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var F=db()-D;tl(c.id,Md[a],"6");Dk(c.id,z,"failure",F);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;tl(c.id,f,"1");var C=function(){var F=db()-D;tl(c.id,f,"7");Dk(c.id,z,"exception",F);B||(B=!0,h())};var D=db();try{Td(w,c)}catch(F){C(F)}}}var f=Md[a],g=b.M,h=b.L,l=b.terminate;if(c.Id(f))return null;var m=Ud(f[Xd.hf],c,[]);if(m&&m.length){var p=m[0],n=yl(p.index,{M:g,L:h,terminate:l},c,d);if(!n)return null;g=n;h=2===p.uf?l:n}if(f[Xd.af]||f[Xd.Lg]){var t=f[Xd.af]?Nd:c.Ci,r=g,u=h;if(!t[a]){e=gb(e);
var v=Al(a,t,e);g=v.M;h=v.L}return function(){t[a](r,u)}}return e}function Al(a,b,c){var d=[],e=[];b[a]=Bl(d,e,c);return{M:function(){b[a]=Cl;for(var f=0;f<d.length;f++)d[f]()},L:function(){b[a]=Dl;for(var f=0;f<e.length;f++)e[f]()}}}function Bl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Cl(a){a()}function Dl(a,b){b()};var Gl=function(a,b,c){for(var d=[],e=0;e<Md.length;e++)if(a[e]){var f=Md[e];var g=c.add();try{var h=yl(e,{M:g,L:g,terminate:g},b,e);if(h){var l=d,m=l.push,p=e,n=f["function"];if(!n)throw"Error: No function name given for function call.";var t=Od[n];m.call(l,{Of:p,Hf:t?t.priorityOverride||0:0,Ec:h})}else El(e,b),g()}catch(u){g()}}c.Zg();d.sort(Fl);for(var r=0;r<d.length;r++)d[r].Ec();return 0<d.length};
function Fl(a,b){var c,d=b.Hf,e=a.Hf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Of,h=b.Of;f=g>h?1:g<h?-1:0}return f}function El(a,b){if(!rl)return;var c=function(d){var e=b.Id(Md[d])?"3":"4",f=Ud(Md[d][Xd.ef],b,[]);f&&f.length&&c(f[0].index);tl(b.id,Md[d],e);var g=Ud(Md[d][Xd.hf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Hl=!1,Ml=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Hl)return!1;Hl=!0}var d=qk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=qk(Number.MAX_SAFE_INTEGER)}rl&&!il[b]&&el!==b&&(al(),el=b,ll=gl="",pl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,dl());var f={id:b,name:c,Id:ok(d.isAllowed),Ci:[],Cf:function(){I(6)},nf:Il(b)},g=Hk(b,a.eventCallback,a.eventTimeout);Jl(b);
var h=fe(f);e&&(h=Kl(h));var l=Gl(h,f,g);"gtm.js"!==c&&"gtm.sync"!==c||Tk(ke.F);switch(c){case "gtm.init":I(19),l&&I(20)}return Ll(h,l)};function Il(a){return function(b){rl&&(Jb(b)||vl(a,"input",b))}}
function Jl(a){Vh(a,"event",1);Vh(a,"ecommerce",1);Vh(a,"gtm");Vh(a,"eventModel");}function Kl(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Ah[String(Md[c][Xd.Qa])]&&(b[c]=!0);return b}function Ll(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Md[c]&&!Bh[String(Md[c][Xd.Qa])])return!0;return!1}function Nl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return ch(""+c+b).href}}function Ol(a,b){return Pl()?Nl(a,b):void 0}function Pl(){var a=!1;return a};var Ql=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.g={};this.globalConfig={};this.M=function(){};this.L=function(){};this.eventId=void 0},Rl=function(a){var b=new Ql;b.eventModel=a;return b},Sl=function(a,b){a.targetConfig=b;return a},Tl=function(a,b){a.containerConfig=b;return a},Ul=function(a,b){a.g=b;return a},Vl=function(a,b){a.globalConfig=b;return a},Wl=function(a,b){a.M=b;return a},Xl=function(a,b){a.L=b;return a};
Ql.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.g[a])return this.g[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Yl=function(a){function b(e){Ua(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ua(c,function(e){d.push(e)});return d};var Zl;if(3===ke.vc.length)Zl="g";else{var $l="G";Zl=$l}
var am={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Zl,OPT:"o"},bm=function(a){var b=ke.F.split("-"),c=b[0].toUpperCase(),d=am[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===ke.vc.length){var g="w";f="2"+g}else f="";return f+d+ke.vc+e};var cm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var dm=function(){return Of("iPhone")&&!Of("iPod")&&!Of("iPad")};Of("Opera");Of("Trident")||Of("MSIE");Of("Edge");!Of("Gecko")||-1!=Lf.toLowerCase().indexOf("webkit")&&!Of("Edge")||Of("Trident")||Of("MSIE")||Of("Edge");-1!=Lf.toLowerCase().indexOf("webkit")&&!Of("Edge")&&Of("Mobile");Of("Macintosh");Of("Windows");Of("Linux")||Of("CrOS");var em=pa.navigator||null;em&&(em.appVersion||"").indexOf("X11");Of("Android");dm();Of("iPad");Of("iPod");dm()||Of("iPad")||Of("iPod");Lf.toLowerCase().indexOf("kaios");var fm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var gm=function(){};var hm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},im=function(a,b){this.o=a;this.g=null;this.D={};this.U=0;this.J=void 0===b?500:b;this.s=null};oa(im,gm);
var km=function(a){return"function"===typeof a.o.__tcfapi||null!=jm(a)};
im.prototype.addEventListener=function(a){var b={},c=Ff(function(){return a(b)}),d=0;-1!==this.J&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.J));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=hm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{lm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};im.prototype.removeEventListener=function(a){a&&a.listenerId&&lm(this,"removeEventListener",null,a.listenerId)};
var nm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=mm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&mm(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?mm(a.purpose.legitimateInterests,
b)&&mm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},mm=function(a,b){return!(!a||!a[b])},lm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(jm(a)){om(a);var f=++a.U;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},jm=function(a){if(a.g)return a.g;a.g=fm(a.o,"__tcfapiLocator");return a.g},om=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},cm(a.o,a.s))};var pm={1:0,3:0,4:0,7:3,9:3,10:3};function qm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var rm=qm("",550),sm=qm("",500);function tm(){var a=Q.tcf||{};return Q.tcf=a}
var um=function(a,b){this.s=a;this.g=b;this.o=db();},vm=function(a){},wm=function(a){},Cm=function(){var a=tm(),b=new im(A,3E3),c=new um(b,a);if((xm()?!0===A.gtag_enable_tcf_support:!1!==A.gtag_enable_tcf_support)&&!a.active&&("function"===typeof A.__tcfapi||km(b))){a.active=!0;a.Tb={};ym();var d=setTimeout(function(){zm(a);Am(a);d=null},sm);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)zm(a),Am(a),vm(c);else{var f;if(!1===e.gdprApplies)f=Bm(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in pm)if(pm.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var p;var n=l;!1===n.gdprApplies?p=!0:(void 0===n.internalErrorState&&(n.internalErrorState=hm(n)),p="error"===n.cmpStatus||0!==n.internalErrorState||"loaded"===n.cmpStatus&&("tcloaded"===n.eventStatus||"useractioncomplete"===n.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:nm(l,"1",0):!1}else g[h]=nm(e,h,pm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Tb=f,Am(a),vm(c))}}),wm(c)}catch(e){d&&(clearTimeout(d),d=null),zm(a),Am(a)}}};function zm(a){a.type="e";a.tcString="tcunavailable";a.Tb=Bm()}function ym(){var a={};Eg((a.ad_storage="denied",a.wait_for_update=rm,a))}
var xm=function(){var a=!1;a=!0;return a};function Bm(){var a={},b;for(b in pm)pm.hasOwnProperty(b)&&(a[b]=!0);return a}function Am(a){var b={};Fg((b.ad_storage=a.Tb["1"]?"granted":"denied",b))}
var Dm=function(){var a=tm();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Em=function(){var a=tm();return a.active?a.tcString||"":""},Fm=function(a){if(!pm.hasOwnProperty(String(a)))return!0;var b=tm();return b.active&&b.Tb?!!b.Tb[String(a)]:!0};function Gm(a){var b=String(A.location).split(/[?#]/)[0],c=ke.Vf||A._CONSENT_MODE_SALT;return a?c?String(bi(b+a+c)):"0":""}
function Hm(a,b,c){function d(p){var n;Q.reported_gclid||(Q.reported_gclid={});n=Q.reported_gclid;var t=f+(p?"gcu":"gcs");if(!n[t]){n[t]=!0;var r=[],u=function(z,B){B&&r.push(z+"="+encodeURIComponent(B))},v="https://www.google.com";if(zg()){var w=Gg(H.C);u("gcs",Hg());p&&u("gcu","1");Q.dedupe_gclid||(Q.dedupe_gclid=""+qi());u("rnd",Q.dedupe_gclid);if((!f||g&&"aw.ds"!==g)&&Gg(H.C)){var y=rj("_gcl_aw");
u("gclaw",y.join("."))}u("url",String(A.location).split(/[?#]/)[0]);u("dclid",Im(b,h));!w&&b&&(v="https://pagead2.googlesyndication.com")}u("gdpr_consent",Em());"1"===aj(!1)._up&&u("gtm_up","1");u("gclid",Im(b,f));u("gclsrc",g);u("gtm",bm(!c));var x=v+"/pagead/landing?"+r.join("&");mg(x)}}var e=uj(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=zg();if(l||m)m?Ig(function(){d();Gg(H.C)||
Cg(function(p){return d(!0,p.pf)},H.C)},[H.C]):d()}function Im(a,b){var c=a&&!Gg(H.C);return b&&c?"0":b}var rn=function(){var a=!0;Fm(7)&&Fm(9)&&Fm(10)||(a=!1);var b=!0;b=!1;b&&!qn()&&(a=!1);return a},qn=function(){var a=!0;Fm(3)&&Fm(4)||(a=!1);return a};var Pn=!1;function Qn(){var a=Q;return a.gcq=a.gcq||new Rn}
var Sn=function(a,b,c){Qn().register(a,b,c)},Tn=function(a,b,c,d){Qn().push("event",[b,a],c,d)},Un=function(a,b){Qn().push("config",[a],b)},Vn=function(a,b,c,d){Qn().push("get",[a,b],c,d)},Wn=function(a){return Qn().getRemoteConfig(a)},Xn={},Yn=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.o={};this.s=null;this.g=!1},Zn=function(a,b,c,d,e){this.type=a;this.s=b;this.W=c||"";this.g=d;this.o=e},Rn=function(){this.s={};this.o={};this.g=[]},$n=function(a,b){var c=Nj(b);return a.s[c.containerId]=
a.s[c.containerId]||new Yn},ao=function(a,b,c){if(b){var d=Nj(b);if(d&&1===$n(a,b).status){$n(a,b).status=2;var e={};rl&&(e.timeoutId=A.setTimeout(function(){I(38);dl()},3E3));a.push("require",[e],d.containerId);Xn[d.containerId]=db();if(Qj()){}else{var g=
"/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Ol(c,g)||h;ag(l)}}}},bo=function(a,b,c,d){if(d.W){var e=$n(a,d.W),f=e.s;if(f){var g=E(c),h=E(e.targetConfig[d.W]),l=E(e.containerConfig),m=E(e.o),p=E(a.o),n=Rh("gtm.uniqueEventId"),t=Nj(d.W).prefix,r=Xl(Wl(Vl(Ul(Tl(Sl(Rl(g),h),l),m),p),function(){ul(n,t,"2");}),function(){
ul(n,t,"3");});try{ul(n,t,"1");f(d.W,b,d.s,r)}catch(u){ul(n,t,"4");}}}};ba=Rn.prototype;
ba.register=function(a,b,c){var d=$n(this,a);if(3!==d.status){d.s=b;d.status=3;if(c){d.o=c}var e=Nj(a),f=Xn[e.containerId];if(void 0!==f){var g=Q[e.containerId].bootstrap,h=e.prefix.toUpperCase();Q[e.containerId]._spx&&(h=h.toLowerCase());var l=Rh("gtm.uniqueEventId"),m=h,p=db()-g;if(rl&&!il[l]){l!==el&&(al(),el=l);var n=m+"."+Math.floor(g-f)+"."+Math.floor(p);ml=
ml?ml+","+n:"&cl="+n}delete Xn[e.containerId]}this.flush()}};ba.push=function(a,b,c,d){var e=Math.floor(db()/1E3);ao(this,c,b[0][H.Pa]||this.o[H.Pa]);Pn&&c&&$n(this,c).g&&(d=!1);this.g.push(new Zn(a,e,c,b,d));d||this.flush()};ba.insert=function(a,b,c){var d=Math.floor(db()/1E3);0<this.g.length?this.g.splice(1,0,new Zn(a,d,c,b,!1)):this.g.push(new Zn(a,d,c,b,!1))};
ba.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)Pn?!e.W||$n(this,e.W).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==$n(this,e.W).status&&!a){Pn&&this.g.push.apply(this.g,c);return}rl&&A.clearTimeout(e.g[0].timeoutId);break;case "set":Ua(e.g[0],function(t,r){E(pb(t,r),b.o)});break;case "config":var f=e.g[0],g=!!f[H.nc];delete f[H.nc];var h=$n(this,e.W),l=Nj(e.W),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.W]={});h.g&&g||bo(this,H.ka,f,e);h.g=!0;delete f[H.Cb];m?E(f,h.containerConfig):E(f,h.targetConfig[e.W]);Pn&&(d=!0);break;case "event":bo(this,e.g[1],e.g[0],e);break;case "get":var p={},n=(p[H.Da]=e.g[0],p[H.Ca]=e.g[1],p);bo(this,H.Ma,n,e)}this.g.shift()}Pn&&(this.g.push.apply(this.g,c),d&&this.flush())};ba.getRemoteConfig=function(a){return $n(this,a).o};function co(a,b,c){};function eo(a,b,c,d){};function fo(a){};var go=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||ig(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},ho=function(a){Q.hasOwnProperty("autoEventsSettings")||(Q.autoEventsSettings={});var b=Q.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},io=function(a,b,c){ho(a)[b]=c},jo=function(a,b,c,d){var e=ho(a),f=eb(e,b,d);e[b]=c(f)},ko=function(a,b,c){var d=ho(a);return eb(d,b,c)};var lo={},mo=[];
var to=function(a,b){};

function vo(a,b){};var wo=/^\s*$/,xo,yo=!1;
function Jo(a,b){}function Ko(a,b,c){};function Lo(a,b){
return!0};function Mo(a,b){var c;return c};function No(a){};function Oo(a){};var Po=!1,Qo=[];function Ro(){if(!Po){Po=!0;for(var a=0;a<Qo.length;a++)N(Qo[a])}}var So=function(a){Po?N(a):Qo.push(a)};function To(a){G(this.o.g,["listener:!Fn"],arguments);kf(this,"process_dom_events","window","load");So(Hb(a))};function Uo(a,b){var c;var e=!1;var f=Gb(c,this.s,e);void 0===f&&void 0!==c&&I(45);return f};function Vo(a){var b;var f=!1;var g=Gb(b,this.s,f);void 0===g&&void 0!==b&&I(45);return g};function Wo(a,b){var c=null,d=!1;G(this.o.g,["functionPath:!string","arrayPath:!string"],arguments);kf(this,"access_globals","readwrite",a);kf(this,"access_globals","readwrite",b);var e=[];
var f=a.split("."),g=ob(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!La(l))return null;if(l)return Gb(l,this.s,d);var m;l=function(){if(!La(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),n=ob(p,e),t=p[p.length-1];if(void 0===n)throw Error("Path "+p+" does not exist.");m=n[t];void 0===m&&(m=[],n[t]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};
return Gb(c,this.s,d)};function Xo(a){var b;var h=!1;return Gb(b,this.s,h)};var Yo=function(a){var b;return b};function Zo(a,b){b=void 0===b?!0:b;var c;return c};function $o(a){var b=null;return b};function ap(a,b){var c;return c};function bp(a,b){var c;return c};function cp(a){var b="";return b};function dp(a,b){var c;return c};function ep(a){var b="";return b};function fp(){kf(this,"get_user_agent");return A.navigator.userAgent};function gp(a,b){};var hp={};
function ip(a,b,c,d){G(this.o.g,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);kf(this,"inject_script",a);var e=this.s,f=function(){b instanceof rb&&b.Ta(e)},g=function(){c instanceof rb&&c.Ta(e)};if(!d){ag(a,f,g);return}var h=d;hp[h]?(hp[h].onSuccess.push(f),hp[h].onFailure.push(g)):(hp[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=hp[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(p){N(p);return 0}},
g=function(){for(var l=hp[h].onFailure,m=0;m<l.length;m++)N(l[m]);hp[h]=null},ag(a,f,g));};var jp=function(){return!1},kp={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function lp(){};function mp(a){var b=void 0;return b};function np(a,b){var c=!1;return c};function op(){var a="";return a};function pp(){var a="";return a};function qp(a,b,c,d){d=void 0===d?!1:d;};function rp(a,b,c){};function sp(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function tp(a){G(this.o.g,["consentSettings:!DustMap"],arguments);for(var b=a.Mb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==H.he&&kf(this,"access_consent",e,"write")}Eg(Hb(a))};function up(a,b,c){G(this.o.g,["path:!string","value:?*","overrideExisting:?boolean"],arguments);kf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=A,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Hb(b,this.s,d),!0;return!1};function vp(a,b,c){};var wp=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function xp(a,b,c){var d=this;}
;var yp={},zp={};yp.getItem=function(a){var b=null;return b};
yp.setItem=function(a,b){};
yp.removeItem=function(a){};yp.clear=function(){};var Ap=function(a){var b;return b};var jd=function(){var a=new vf;Qj()?(a.add("injectHiddenIframe",Ka),a.add("injectScript",Ka)):(a.add("injectHiddenIframe",gp),a.add("injectScript",ip));var b=rp;a.add("Math",cf());a.add("TestHelper",xf());a.add("addEventCallback",fo);a.add("aliasInWindow",Lo);a.add("assertApi",Ze);a.add("assertThat",$e);a.add("callInWindow",
Mo);a.add("callLater",No);a.add("copyFromDataLayer",Uo);a.add("copyFromWindow",Vo);a.add("createArgumentsQueue",Wo);a.add("createQueue",Xo);a.add("decodeUri",df);a.add("decodeUriComponent",ef);a.add("encodeUri",ff);a.add("encodeUriComponent",gf);a.add("fail",hf);a.add("fromBase64",Yo,!("atob"in A));a.add("generateRandom",jf);a.add("getContainerVersion",lf);a.add("getCookieValues",Zo);a.add("getQueryParameters",ap);a.add("getReferrerQueryParameters",bp);a.add("getReferrerUrl",cp);a.add("getTimestamp",
mf);a.add("getTimestampMillis",mf);a.add("getType",nf);a.add("getUrl",ep);a.add("localStorage",kp,!jp());a.add("logToConsole",lp);a.add("makeInteger",pf);a.add("makeNumber",qf);a.add("makeString",rf);a.add("makeTableMap",sf);a.add("mock",uf);a.add("queryPermission",np);a.add("readCharacterSet",op);a.add("readTitle",pp);a.add("sendPixel",b);a.add("setCookie",sp);a.add("setInWindow",up);a.add("sha256",xp);a.add("templateStorage",yp);a.add("toBase64",Ap,!("btoa"in A));a.add("JSON",of(function(c){var d=this.s.g;d&&d.log.call(this,"error",c)}));

return function(c){var d;
if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.o.hasOwnProperty(c))b:{var f=this.s.g;if(f){var g=f.Lb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var hd,oe;
function Bp(){var a=data.runtime||[],b=data.runtime_lines;hd=new fd;Cp();Id=function(e,f,g){Dp(f);var h=new xb;Ua(f,function(r,u){var v=Gb(u);void 0===v&&void 0!==u&&I(44);h.set(r,v)});hd.g.g.D=be();var l={$g:pe(e),eventId:void 0!==g?g.id:void 0,Lb:function(){return e},log:function(){}};if(wl()){var m=xl(),p=void 0,n=void 0;l.ja={o:{},g:function(r,u,v){1===u&&(p=r);7===u&&(n=v);m(r,u,v)},s:tf()};l.log=function(r,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:r,source:n,message:v})}}}var t=
id(l,[e,h]);hd.g.g.D=void 0;t instanceof za&&"return"===t.g&&(t=t.o);return Hb(t)};kd();for(var c=0;c<a.length;c++){var d=a[c];if(!Na(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Zd(d,b[c]);hd.Ec(d)}}function Dp(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;La(b)&&(a.gtmOnSuccess=function(){N(b)});La(c)&&(a.gtmOnFailure=function(){N(c)})}
function Cp(){var a=hd;Q.SANDBOXED_JS_SEMAPHORE=Q.SANDBOXED_JS_SEMAPHORE||0;ld(a,function(b,c,d){Q.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Q.SANDBOXED_JS_SEMAPHORE--}})}function Ep(a){void 0!==a&&Ua(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Kh[e]=Kh[e]||[];Kh[e].push(b)}})};var Fp="HA GF G UA AW DC".split(" "),Gp=!1,Hp={},Ip=!1;function Jp(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.bd]&&(c.eventCallback=b[H.bd]),b[H.ic]&&(c.eventTimeout=b[H.ic]));return c}function Kp(){return Gp}
var Np={config:function(a){var b;return b},consent:function(a){function b(){Kp()&&
E(a[2],{subcommand:a[1]})}if(3===a.length){I(39);var c=Lh(),d=a[1];"default"===d?(b(),Eg(a[2])):"update"===d&&(b(),Fg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&q(b)){var c;if(2<a.length){if(!Fb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=Jp(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return Ip=!0,Kp(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=oe.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Fb(a[1])?b=E(a[1]):3==a.length&&q(a[1])&&(b={},Fb(a[2])||Na(a[2])?b[a[1]]=
E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Op={policy:!0};var Pp=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Rp=function(a){var b=Qp(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var hq=function(a){if(gq(a))return a;this.g=a};hq.prototype.Gh=function(){return this.g};var gq=function(a){return!a||"object"!==Db(a)||Fb(a)?!1:"getUntrustedUpdateValue"in a};hq.prototype.getUntrustedUpdateValue=hq.prototype.Gh;var iq=[];var lq=!1,mq=function(a){return A["dataLayer"].push(a)},nq=function(a){var b=Q["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function oq(a){var b=a._clear;Ua(a,function(d,e){"_clear"!==d&&(b&&Uh(d,void 0),Uh(d,e))});Gh||(Gh=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Lh(),a["gtm.uniqueEventId"]=c,Uh("gtm.uniqueEventId",c));return Ml(a)}function pq(){var a=iq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Va(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function qq(){for(var a=!1;!lq&&0<iq.length;){
lq=!0;delete Oh.eventModel;Qh();var d=iq.shift();if(null!=d){var e=gq(d);if(e){var f=d;d=gq(f)?f.getUntrustedUpdateValue():void 0;for(var g=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],h=0;h<g.length;h++){var l=g[h],m=Rh(l,1);if(Na(m)||Fb(m))m=E(m);Ph[l]=m}}try{if(La(d))try{d.call(Sh)}catch(y){}else if(Na(d)){var p=d;if(q(p[0])){var n=p[0].split("."),t=n.pop(),r=p.slice(1),u=Rh(n.join("."),2);if(void 0!==u&&null!==u)try{u[t].apply(u,r)}catch(y){}}}else{if(Va(d)){a:{var v=
d;if(v.length&&q(v[0])){var w=Np[v[0]];if(w&&(!e||!Op[v[0]])){d=w(v);break a}}d=void 0}if(!d){lq=!1;continue}}a=oq(d)||a}}finally{e&&Qh(!0)}}lq=!1}return!a}function rq(){var a=qq();try{Pp(A["dataLayer"],ke.F)}catch(b){}return a}
var tq=function(){var a=Zf("dataLayer",[]),b=Zf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};zk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});So(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<Q.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new hq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);iq.push.apply(iq,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return qq()&&h};var d=a.slice(0);iq.push.apply(iq,d);sq()&&N(rq)},sq=function(){var a=!0;return a};var uq={};uq.oc=new String("undefined");
var vq=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===uq.oc?b:a[d]);return c.join("")}};vq.prototype.toString=function(){return this.g("undefined")};vq.prototype.valueOf=vq.prototype.toString;uq.Og=vq;uq.sd={};uq.rh=function(a){return new vq(a)};var wq={};uq.ni=function(a,b){var c=Lh();wq[c]=[a,b];return c};uq.sf=function(a){var b=a?0:1;return function(c){var d=wq[c];if(d&&"function"===typeof d[b])d[b]();wq[c]=void 0}};uq.Nh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};uq.gi=function(a){if(a===uq.oc)return a;var b=Lh();uq.sd[b]=a;return'google_tag_manager["'+ke.F+'"].macro('+b+")"};uq.Yh=function(a,b,c){a instanceof uq.Og&&(a=a.g(uq.ni(b,c)),b=Ka);return{Gd:a,M:b}};var xq=["input","select","textarea"],yq=["button","hidden","image","reset","submit"],zq=function(a){var b=a.tagName.toLowerCase();return!Pa(xq,function(c){return c===b})||"input"===b&&Pa(yq,function(c){return c===a.type.toLowerCase()})?!1:!0},Aq=function(a){return a.form?a.form.tagName?a.form:M.getElementById(a.form):lg(a,["form"],100)},Bq=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(zq(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Cq=!!A.MutationObserver,Dq=void 0,Eq=function(a){if(!Dq){var b=function(){var c=M.body;if(c)if(Cq)(new MutationObserver(function(){for(var e=0;e<Dq.length;e++)N(Dq[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gg(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Dq.length;e++)N(Dq[e])}))})}};Dq=[];M.body?b():N(b)}Dq.push(a)};var Qq=A.clearTimeout,Rq=A.setTimeout,R=function(a,b,c){if(Qj()){b&&N(b)}else return ag(a,b,c)},Sq=function(){return new Date},Tq=function(){return A.location.href},Uq=function(a){return ah(ch(a),"fragment")},Vq=function(a){return bh(ch(a))},Wq=function(a,b){return Rh(a,b||2)},Xq=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=mq(a)):d=mq(a);return d},Yq=function(a,b){A[a]=b},S=function(a,b,c){b&&
(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},Zq=function(a,b,c){return ei(a,b,void 0===c?!0:!!c)},$q=function(a,b,c){return 0===ni(a,b,c)},ar=function(a,b){if(Qj()){b&&N(b)}else eg(a,b)},br=function(a){return!!ko(a,"init",!1)},cr=function(a){io(a,"init",!0)},dr=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Eh;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Sj("https://","http://",c))},er=function(a,
b){var c=a[b];return c},fr=function(a,b,c){rl&&(Jb(a)||vl(c,b,a))};
var gr=uq.Yh;function Dr(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Er=new Sa;function Fr(a,b){function c(g){var h=ch(g),l=ah(h,"protocol"),m=ah(h,"host",!0),p=ah(h,"port"),n=ah(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,n]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Gr(a){return Hr(a)?1:0}
function Hr(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Na(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(Gr(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Dr(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Oa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var p=a.ignore_case?"i":void 0;try{var n=String(c)+p,t=Er.get(n);t||(t=new RegExp(c,p),Er.set(n,t));m=t.test(b)}catch(r){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Fr(b,c)}return!1};var Ir=encodeURI,W=encodeURIComponent,Jr=fg;var Kr=function(a,b){if(!a)return!1;var c=ah(ch(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Lr=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};var ys=null,zs=[],As=0,Bs=null;function Cs(a){if(!A.MutationObserver)return!1;try{return ys||(ys=new MutationObserver(Ds),ys.observe(M.documentElement,{subtree:!0,childList:!0,attributes:!0,characterData:!0}),As=db()),zs.push(a),!0}catch(b){return!1}}function Ds(){var a=db()-As;0<=a?(Bs&&(A.clearTimeout(Bs),Bs=null),Es()):Bs||(Bs=A.setTimeout(function(){Es();Bs=null},0-a))}
function Es(){As=db();var a=zs;zs=[];for(var b=fa(a),c=b.next();!c.done;c=b.next()){var d=c.value;d()}ys&&(ys.takeRecords(),zs.length||(ys&&(ys.disconnect(),ys=null),Bs&&(A.clearTimeout(Bs),Bs=null)))};function qt(){return A.gaGlobal=A.gaGlobal||{}}var rt=function(){var a=qt();a.hid=a.hid||Ra();return a.hid},st=function(a,b){var c=qt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var $t=window,au=document,bu=function(a){var b=$t._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===$t["ga-disable-"+a])return!0;try{var c=$t.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ci("AMP_TOKEN",String(au.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return au.getElementById("__gaOptOutExtension")?!0:!1};var cu={};function eu(a){delete a.eventModel[H.Cb];gu(a.eventModel)}
var gu=function(a){Ua(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ra]||{};Ua(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var ju=function(a,b,c){Tn(b,c,a)},ku=function(a,b,c){Tn(b,c,a,!0)},ru=function(a,b){};
function lu(a,b){}var Z={h:{}};
Z.h.gaawe=["google"],function(){function a(d,e,f){for(var g=0;g<e.length;g++)d.hasOwnProperty(e[g])&&(d[e[g]]=f(d[e[g]]))}function b(d,e,f){var g={id:"transaction_id",revenue:"value",list:"item_list_name"},h={click:H.Xc,detail:H.Aa,add:H.$a,remove:H.ab,checkout:H.La,checkout_option:"checkout_option",purchase:H.oa,refund:H.cb},l={},m=function(r,u){l[r]=l[r]||u},p=function(r,u,v){v=void 0===v?!1:v;c.push(6);if(r){l.items=l.items||[];for(var w={},y=0;y<r.length;w={Xa:w.Xa},y++)w.Xa={},Ua(r[y],function(z){return function(B,
C){v&&"id"===B?z.Xa.promotion_id=C:v&&"name"===B?z.Xa.promotion_name=C:z.Xa[B]=C}}(w)),l.items.push(w.Xa)}if(u)for(var x in u)g.hasOwnProperty(x)?m(g[x],u[x]):m(x,u[x])},n;"dataLayer"===d.vtp_getEcommerceDataFrom?(n=Wh(d.vtp_gtmEventId,"eventModel"))||(n=Wh(d.vtp_gtmEventId,"ecommerce")):n=d.vtp_ecommerceMacroData;if(Fb(n)){c.push(5);for(var t in n)n.hasOwnProperty(t)&&("currencyCode"===t?m("currency",n.currencyCode):"impressions"===t&&e===H.bc?p(n.impressions,null):"promoClick"===t&&e===H.pe?p(n.promoClick.promotions,
n.promoClick.actionField,!0):"promoView"===t&&e===H.qe?p(n.promoView.promotions,n.promoView.actionField,!0):h.hasOwnProperty(t)?e===h[t]&&p(n[t].products,n[t].actionField):l[t]=n[t]);E(l,f)}}var c=[];(function(d){Z.__gaawe=d;Z.__gaawe.i="gaawe";Z.__gaawe.m=!0;Z.__gaawe.priorityOverride=0})(function(d){var e=String(d.vtp_measurementIdOverride||d.vtp_measurementId),f=String(d.vtp_eventName);if("_"===f.charAt(0))N(d.vtp_gtmOnFailure);else{var g={};c=[];d.vtp_sendEcommerceData&&(0<=H.Se.indexOf(f)||"checkout_option"===
f)&&b(d,f,g);var h=Lr(d.vtp_eventParameters,"name","value"),l;for(l in h)h.hasOwnProperty(l)&&(g[l]=h[l]);if(g.hasOwnProperty(H.ra)||d.vtp_userProperties){var m=g[H.ra]||{};E(Lr(d.vtp_userProperties,"name","value"),m);g[H.ra]=m}gu(g);0<c.length&&(g[H.od]=c);a(g,H.Re,function(p){return ab(p)});a(g,H.Te,function(p){return Number(p)});Tn(f,g,e);N(d.vtp_gtmOnSuccess)}})}();Z.h.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.i="ctv";Z.__ctv.m=!0;Z.__ctv.priorityOverride=0})(function(){return"514"})}();
Z.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],B=x.split(","),C=0;C<B.length;C++){var D=Number(B[C]);if(isNaN(D))return[];p.test(B[C])||z.push(D)}return z}function c(){var x=0,z=0;return function(){var B=Pg(),C=B.height;x=Math.max(v.scrollLeft+B.width,x);z=Math.max(v.scrollTop+C,z);return{zd:x,Ad:z}}}function d(){r=S("self");
u=r.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,z,B,C){var D=l(z),F={},K;for(K in D){F.Ya=K;if(D.hasOwnProperty(F.Ya)){var O=Number(F.Ya);x<O||(Xq({event:"gtm.scrollDepth","gtm.scrollThreshold":O,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[F.Ya].join(",")}),jo("sdl",z,function(aa){return function(ca){delete ca[aa.Ya];return ca}}(F),{}))}F={Ya:F.Ya}}}function f(){var x=y(),z=x.zd,B=x.Ad,C=z/v.scrollWidth*100,D=B/v.scrollHeight*100;e(z,
"horiz.pix",n.sc,t.Ue);e(C,"horiz.pct",n.qc,t.Ue);e(B,"vert.pix",n.sc,t.jf);e(D,"vert.pct",n.qc,t.jf);io("sdl","pending",!1)}function g(){var x=250,z=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(x=50,z=!0);var B=0,C=!1,D=function(){C?B=Rq(D,x):(B=0,f(),br("sdl")&&!a()&&(hg(r,"scroll",F),hg(r,"resize",F),io("sdl","init",!1)));C=!1},F=function(){z&&y();B?C=!0:(B=Rq(D,x),io("sdl","pending",!0))};return F}function h(x,z,B){if(z){var C=b(String(x));jo("sdl",B,function(D){for(var F=0;F<
C.length;F++){var K=String(C[F]);D.hasOwnProperty(K)||(D[K]=[]);D[K].push(z)}return D},{})}}function l(x){return ko("sdl",x,{})}function m(x){N(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,D=x.vtp_verticalThresholdUnits,F=x.vtp_verticalThresholdsPixels,K=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case n.sc:h(B,z,"horiz.pix");break;case n.qc:h(C,z,"horiz.pct")}switch(D){case n.sc:h(F,z,"vert.pix");
break;case n.qc:h(K,z,"vert.pct")}br("sdl")?ko("sdl","pending")||(w||(d(),w=!0),N(function(){return f()})):(d(),w=!0,v&&(cr("sdl"),io("sdl","pending",!0),N(function(){f();if(a()){var O=g();gg(r,"scroll",O);gg(r,"resize",O)}else io("sdl","init",!1)})))}var p=/^\s*$/,n={qc:"PERCENT",sc:"PIXELS"},t={jf:"vertical",Ue:"horizontal"},r,u,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.i="sdl";Z.__sdl.m=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):So(function(){m(x)})})}();

Z.h.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.i="jsm";Z.__jsm.m=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=S("google_tag_manager");var d=c&&c.e&&c.e(b);fr(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.h.c=["google"],function(){(function(a){Z.__c=a;Z.__c.i="c";Z.__c.m=!0;Z.__c.priorityOverride=0})(function(a){fr(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.h.e=["google"],function(){(function(a){Z.__e=a;Z.__e.i="e";Z.__e.m=!0;Z.__e.priorityOverride=0})(function(a){return String(Wh(a.vtp_gtmEventId,"event"))})}();
Z.h.f=["google"],function(){(function(a){Z.__f=a;Z.__f.i="f";Z.__f.m=!0;Z.__f.priorityOverride=0})(function(a){var b=Wq("gtm.referrer",1)||M.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ah(ch(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Vq(String(b)):String(b)})}();
Z.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=go(c,"gtm.click");Xq(d)}}(function(b){Z.__cl=b;Z.__cl.i="cl";Z.__cl.m=!0;Z.__cl.priorityOverride=0})(function(b){if(!br("cl")){var c=S("document");gg(c,"click",a,!0);cr("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.h.j=["google"],function(){(function(a){Z.__j=a;Z.__j.i="j";Z.__j.m=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=S(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];fr(c,"j",a.vtp_gtmEventId);return c})}();Z.h.k=["google"],function(){(function(a){Z.__k=a;Z.__k.i="k";Z.__k.m=!0;Z.__k.priorityOverride=0})(function(a){return Zq(a.vtp_name,Wq("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.i="access_globals";Z.__access_globals.m=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,n,t){if(!q(t))throw d(p,{},"Key must be a string.");if("read"===n){if(-1<Oa(e,t))return}else if("write"===n){if(-1<Oa(f,t))return}else if("readwrite"===n){if(-1<Oa(f,t)&&-1<Oa(e,t))return}else if("execute"===n){if(-1<Oa(g,t))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+n);throw d(p,{},"Prohibited "+n+" on global variable: "+
t+".");},P:a}})}();
Z.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.i="u";Z.__u.m=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Wq("gtm.url",1))||Tq();var d=b[a("vtp_component")];if(!d||"URL"==d)return Vq(String(c));var e=ch(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Na(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var n=ah(e,"QUERY",void 0,void 0,m[p]);if(void 0!=n&&(!l||""!==n)){f=n;break a}}f=void 0}else f=ah(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.h.v=["google"],function(){(function(a){Z.__v=a;Z.__v.i="v";Z.__v.m=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Wq(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;fr(d,"v",a.vtp_gtmEventId);return d})}();
Z.h.ua=["google"],function(){function a(n){return Gg(n)}function b(n,t){if(zg()&&!e[n]){var r=function(){var u=Nk(),v="gtm"+Lh(),w=m(t),y={name:v};l(w,y,!0);u("create",n,y);u(function(){u.remove(v)})};Cg(r,H.K);Cg(r,H.C);e[n]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(n,t,r){var u=0;if(n)for(var v in n)if(!h[v]&&n.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?ab(n[v]):n[v];"anonymizeIp"!=v||w||
(w=void 0);t[v]=w;u++}return u},m=function(n){var t={};n.vtp_gaSettings&&E(Lr(n.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);E(Lr(n.vtp_fieldsToSet,"fieldName","value"),t);Gg(H.K)||(t.storage="none");Gg(H.C)||(t.allowAdFeatures=!1,t.storeGac=!1);rn()||(t.allowAdFeatures=!1);qn()||(t.allowAdPersonalizationSignals=!1);n.vtp_transportUrl&&(t._x_19=n.vtp_transportUrl);
return t},p=function(n){function t(xa,Y){void 0!==Y&&F("set",xa,Y)}var r={},u={},v={},w={};if(n.vtp_gaSettings){var y=n.vtp_gaSettings;E(Lr(y.vtp_contentGroup,"index","group"),u);E(Lr(y.vtp_dimension,"index","dimension"),v);E(Lr(y.vtp_metric,"index","metric"),w);var x=E(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=
void 0;x.vtp_metric=void 0;n=E(n,x)}E(Lr(n.vtp_contentGroup,"index","group"),u);E(Lr(n.vtp_dimension,"index","dimension"),v);E(Lr(n.vtp_metric,"index","metric"),w);var z=m(n),B=Pk(n.vtp_functionName);if(La(B)){var C="",D="";n.vtp_setTrackerName&&"string"==typeof n.vtp_trackerName?""!==n.vtp_trackerName&&(D=n.vtp_trackerName,C=D+"."):(D="gtm"+Lh(),C=D+".");var F=function(xa){var Y=[].slice.call(arguments,0);Y[0]=C+Y[0];B.apply(window,Y)},K=function(xa,Y){return void 0===Y?Y:xa(Y)},O=function(xa,Y){if(Y)for(var Xa in Y)Y.hasOwnProperty(Xa)&&
F("set",xa+Xa,Y[Xa])},aa=function(){var xa={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},Y={},Xa=(Y[H.Xc]="click",Y[H.Aa]="detail",Y[H.$a]="add",Y[H.ab]="remove",Y[H.La]="checkout",Y[H.oa]="purchase",Y[H.cb]="refund",Y),mc={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_category:"category",item_variant:"variant",index:"position",
promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},zc=function($a,Qa){for(var jb in $a)xa.hasOwnProperty(jb)&&($a[Qa]=$a[Qa]||{},$a[Qa].actionField=$a[Qa].actionField||{},$a[Qa].actionField[xa[jb]]=$a[jb])},hb=function($a){for(var Qa=[],jb={},ub=0;ub<$a.length;jb={rb:jb.rb},ub++)jb.rb={},Ua($a[ub],function(Vb){return function(Cc,cd){mc.hasOwnProperty(Cc)?Vb.rb[mc[Cc]]=cd:Vb.rb[Cc]=cd}}(jb)),Qa.push(jb.rb);return Qa},ib=function($a,Qa,jb){if(!Fb(Qa))return!1;
for(var ub=eb(Object(Qa),jb,[]),Vb=0;ub&&Vb<ub.length;Vb++)F($a,ub[Vb]);return!!ub&&0<ub.length},V;if(n.vtp_useEcommerceDataLayer){var Ya=!1;n.vtp_useGA4SchemaForEcommerce&&(V=Wh(n.vtp_gtmEventId,"eventModel"),Ya=!!V);Ya||(V=Wq("ecommerce",1))}else n.vtp_ecommerceMacroData&&(V=n.vtp_ecommerceMacroData.ecommerce,!V&&n.vtp_useGA4SchemaForEcommerce&&
(V=n.vtp_ecommerceMacroData));if(!Fb(V))return;V=Object(V);if(n.vtp_useGA4SchemaForEcommerce){V.currencyCode=V.currencyCode||V.currency;var Za=String(Wh(n.vtp_gtmEventId,"event"));if("view_item_list"===Za&&!V.impressions&&V.items)V.impressions=hb(V.items);else if("view_promotion"===Za&&!V.promoView&&V.items)V.promoView={},V.promoView.promotions=hb(V.items);else if("select_promotion"===Za&&!V.promoClick)V.items&&(V.promoClick={},V.promoClick.promotions=hb(V.items)),zc(V,"promoClick");else if(Xa.hasOwnProperty(Za)){var ad=
Xa[Za];V[ad]||(V.items&&(V[ad]={},V[ad].products=hb(V.items)),zc(V,ad))}}var Ee=eb(z,"currencyCode",V.currencyCode);void 0!==Ee&&F("set","&cu",Ee);ib("ec:addImpression",V,"impressions");if(ib("ec:addPromo",V[V.promoClick?"promoClick":"promoView"],"promotions")&&V.promoClick){F("ec:setAction","promo_click",V.promoClick.actionField);return}for(var Ac="detail checkout checkout_option click add remove purchase refund".split(" "),Fe="refund purchase remove checkout checkout_option add click detail".split(" "),
Bc=0;Bc<Ac.length;Bc++){var Gd=V[Ac[Bc]];if(Gd){ib("ec:addProduct",Gd,"products");F("ec:setAction",Ac[Bc],Gd.actionField);if(rl)for(var bd=0;bd<Fe.length;bd++){var Ge=V[Fe[bd]];if(Ge){Ge!==Gd&&I(13);break}}break}}},ca={name:D};l(z,ca,!0);var ra=n.vtp_trackingId||r.trackingId;B("create",ra,ca);F("set","&gtm",bm(!0));
zg()&&(F("set","&gcs",Hg()),b(ra,n));z._x_19&&(null==Yf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,B(Uk(D,String(z._x_20)))));n.vtp_enableRecaptcha&&F("require","recaptcha","recaptcha.js");(function(xa,Y){void 0!==n[Y]&&F("set",xa,n[Y])})("nonInteraction","vtp_nonInteraction");O("contentGroup",u);O("dimension",v);O("metric",w);var L={};l(z,L,!1)&&F("set",L);var J;
n.vtp_enableLinkId&&F("require","linkid","linkid.js");F("set","hitCallback",function(){var xa=z&&z.hitCallback;La(xa)&&xa();n.vtp_gtmOnSuccess()});if("TRACK_EVENT"==n.vtp_trackType){n.vtp_enableEcommerce&&(F("require","ec","ec.js"),aa());var X={hitType:"event",eventCategory:String(n.vtp_eventCategory||r.category),eventAction:String(n.vtp_eventAction||r.action),eventLabel:K(String,n.vtp_eventLabel||r.label),eventValue:K(Wa,n.vtp_eventValue||
r.value)};l(J,X,!1);F("send",X);}else if("TRACK_SOCIAL"==n.vtp_trackType){var P={hitType:"social",socialNetwork:String(n.vtp_socialNetwork),socialAction:String(n.vtp_socialAction),socialTarget:String(n.vtp_socialActionTarget)};l(J,P,!1);F("send",P);}else if("TRACK_TRANSACTION"==n.vtp_trackType){}else if("TRACK_TIMING"==
n.vtp_trackType){}else if("DECORATE_LINK"==n.vtp_trackType){}else if("DECORATE_FORM"==n.vtp_trackType){}else if("TRACK_DATA"==n.vtp_trackType){}else{n.vtp_enableEcommerce&&(F("require","ec","ec.js"),aa());if(n.vtp_doubleClick||"DISPLAY_FEATURES"==n.vtp_advertisingFeaturesType){var Ob=
"_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","displayfeatures",void 0,{cookieName:Ob})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==n.vtp_advertisingFeaturesType){var mb="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","adfeatures",{cookieName:mb})}J?F("send","pageview",J):F("send","pageview");n.vtp_autoLinkDomains&&Qk(C,n.vtp_autoLinkDomains,!!n.vtp_useHashAutoLink,!!n.vtp_decorateFormsAutoLink);
ab(z.urlPassthrough)&&Rk(C)}if(!c){var sb=n.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";n.vtp_useInternalVersion&&!n.vtp_useDebugVersion&&(sb="internal/"+sb);c=!0;var Pb=Ol(z._x_19,"/analytics.js"),Qb=Sj("https:","http:","//www.google-analytics.com/"+sb,z&&!!z.forceSSL);R("analytics.js"===sb&&Pb?Pb:Qb,function(){var xa=Nk();xa&&xa.loaded||n.vtp_gtmOnFailure();},
n.vtp_gtmOnFailure)}}else N(n.vtp_gtmOnFailure)};(function(n){Z.__ua=n;Z.__ua.i="ua";Z.__ua.m=!0;Z.__ua.priorityOverride=0})(function(n){Ig(function(){p(n)},[H.K,H.C])})}();



Z.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.i="inject_script";Z.__inject_script.m=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(Qe(ch(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},P:a}})}();


Z.h.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.i="cid";Z.__cid.m=!0;Z.__cid.priorityOverride=0})(function(){return ke.F})}();


Z.h.aev=["google"],function(){function a(r,u){var v=Wh(r,"gtm");if(v)return v[u]}function b(r,u,v,w){w||(w="element");var y=r+"."+u,x;if(p.hasOwnProperty(y))x=p[y];else{var z=a(r,w);if(z&&(x=v(z),p[y]=x,n.push(y),35<n.length)){var B=n.shift();delete p[B]}}return x}function c(r,u,v){var w=a(r,t[u]);return void 0!==w?w:v}function d(r,u){if(!r)return!1;var v=e(Tq());Na(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++){var x=u[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(B){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(r))return!1}else{var z=x;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;w.push(e(z))}}}return!Kr(r,w)}function e(r){m.test(r)||(r="http://"+r);return ah(ch(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+r,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return ig(r,"value");case "button":return jg(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)zq(r.elements[v])&&
u++;return u}}function l(r,u,v){var w=a(r,"interactedFormField");return w&&ig(w,u)||v}var m=/^https?:\/\//i,p={},n=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.i="aev";Z.__aev.m=!0;Z.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,w,jg)||v;case "URL":var x;a:{var z=String(a(u,"elementUrl")||v||""),B=ch(z),C=String(r.vtp_component||"URL");switch(C){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,r.vtp_affiliatedDomains);break a;default:x=ah(B,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
w,v);else{var F=r.vtp_attribute,K=a(u,"element");D=K&&ig(K,F)||v||""}return D;case "MD":var O=r.vtp_mdValue,aa=b(u,"MD",Lq);return O&&aa?Oq(aa,O)||v:aa||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var ca=c(u,w,v);fr(ca,"aev",r.vtp_gtmEventId);return ca}})}();Z.h.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.i="gas";Z.__gas.m=!0;Z.__gas.priorityOverride=0})(function(a){var b=E(a),c=b;c[Xd.Qa]=null;c[Xd.Gg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.h.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:Tq()}function b(f,g){gg(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:Vq(l),N:Uq(l)})})}function c(f,g){gg(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:Vq(l),N:Uq(l)})})}function d(f,g,h){var l=g.history,m=l[f];if(La(m))try{l[f]=function(p,n,t){m.apply(l,[].slice.call(arguments,0));h({source:f,state:p,url:Vq(Tq()),
N:Uq(Tq())})}}catch(p){}}function e(){var f={source:null,state:S("history").state||null,url:Vq(Tq()),N:Uq(Tq())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.N!=g.N){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.N,"gtm.newUrlFragment":g.N,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;Xq(m)}}}(function(f){Z.__hl=f;Z.__hl.i="hl";Z.__hl.m=!0;Z.__hl.priorityOverride=
0})(function(f){var g=S("self");if(!br("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);cr("hl")}N(f.vtp_gtmOnSuccess)})}();
Z.h.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.i="remm";Z.__remm.m=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}fr(f,"remm",a.vtp_gtmEventId);return f})}();
Z.h.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.i="smm";Z.__smm.m=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Lr(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;fr(d,"smm",a.vtp_gtmEventId);return d})}();



Z.h.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.i="paused";Z.__paused.m=!0;Z.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Z.h.zone=[],function(){function a(p){for(var n=p.vtp_boundaries||[],t=0;t<n.length;t++)if(!n[t])return!1;return!0}function b(p){var n=ke.F,t=n+":"+p.vtp_gtmTagId,r=Wq("gtm.uniqueEventId")||0,u=rk(function(){return new g}),v=a(p),w=p.vtp_enableTypeRestrictions?p.vtp_whitelistedTypes.map(function(D){return D.typeId}):null;w=w&&nb(w,f);if(u.registerZone(t,r,v,w))for(var y=p.vtp_childContainers.map(function(D){return D.publicId}),x=0;x<y.length;x++){var z=String(y[x]);if(u.registerChild(z,n,t)){var B=
0!==z.indexOf("GTM-");if(B){var C=function(D,F){Xq(arguments)};C("js",new Date);m?(C("config",z),l||dr(z,B)):(Q.addTargetToGroup(z),Un({},z))}else dr(z,B)}}}var c={active:!1,isAllowed:function(){return!1},Ph:function(){return!1}},d={active:!0,isAllowed:function(){return!0},Ph:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.g={};this.o={}};g.prototype.checkState=function(p,n){var t=
this.g[p];if(!t)return d;var r=this.checkState(t.Ef,n);if(!r.active)return c;for(var u=[],v=0;v<t.ee.length;v++){var w=this.o[t.ee[v]];w.Pb(n)&&u.push(w)}return u.length?{active:!0,isAllowed:function(y,x){x=x||[];var z=r.isAllowed;if(!z(y,x))return!1;for(var B=0;B<u.length;++B)if(u[B].isAllowed(y,x))return!0;return!1}}:c};g.prototype.unregisterChild=function(p){delete this.g[p]};g.prototype.registerZone=function(p,n,t,r){var u=this.o[p];if(u)return u.s(n,t),!1;if(!t)return!1;this.o[p]=new h(n,r);
return!0};g.prototype.registerChild=function(p,n,t){var r=this.g[p];if(!r&&Q[p]||r&&r.Ef!==n)return!1;if(r)return r.ee.push(t),!1;this.g[p]={Ef:n,ee:[t]};return!0};var h=function(p,n){this.g=[{eventId:p,Pb:!0}];this.o=null;if(n){this.o={};for(var t=0;t<n.length;t++)this.o[n[t]]=!0}};h.prototype.s=function(p,n){var t=this.g[this.g.length-1];p<=t.eventId||t.Pb!=n&&this.g.push({eventId:p,Pb:n})};h.prototype.Pb=function(p){if(!this.g||0==this.g.length)return!1;for(var n=this.g.length-1;0<=n;n--)if(this.g[n].eventId<=
p)return this.g[n].Pb;return!1};h.prototype.isAllowed=function(p,n){n=n||[];if(!this.o||e[p]||this.o[p])return!0;for(var t=0;t<n.length;++t)if(this.o[n[t]])return!0;return!1};var l=!1;var m=!0;m=!1;(function(p){Z.__zone=p;Z.__zone.i="zone";Z.__zone.m=
!0;Z.__zone.priorityOverride=0})(function(p){b(p);N(p.vtp_gtmOnSuccess)})}();
Z.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=M.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,$f(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var n=
[];h.firstChild;)n.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,n,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var c=function(d){if(M.body){var e=d.vtp_gtmOnFailure,f=gr(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.Gd,h=f.M;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(M.body,kg(g),h,e)()}else Rq(function(){c(d)},200)};Z.__html=c;Z.__html.i="html";Z.__html.m=
!0;Z.__html.priorityOverride=0}();






Z.h.lcl=[],function(){function a(){var c=S("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Af||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=lg(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=ko("lcl",h?"nv.mwt":"mwt",0),m;m=h?ko("lcl","nv.ids",[]):ko("lcl","ids",[]);if(m.length){var p=go(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var n=String(er(g,"rel")||""),t=!!Pa(n.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&I(36);var r=S((er(g,"target")||"_self").substring(1)),u=!0;if(Xq(p,nq(function(){var v;if(v=u&&r){var w;a:if(t){var y;try{var x=void 0;x={bubbles:!0};y=new MouseEvent(f.type,x)}catch(z){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Af=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(r.location.href=er(g,"href"))}),l))u=!1;else return f.preventDefault&&
f.preventDefault(),f.returnValue=!1}else Xq(p,function(){},l||2E3);return!0}}};gg(c,"click",e,!1);gg(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=er(d,"href"),g=f.indexOf("#"),h=er(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=Vq(f),m=Vq(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.i="lcl";Z.__lcl.m=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?
!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};jo("lcl","mwt",h,0);e||jo("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};jo("lcl","ids",l,[]);e||jo("lcl","nv.ids",l,[]);br("lcl")||(a(),cr("lcl"));N(c.vtp_gtmOnSuccess)})}();


var su={};su.macro=function(a){if(uq.sd.hasOwnProperty(a))return uq.sd[a]},su.onHtmlSuccess=uq.sf(!0),su.onHtmlFailure=uq.sf(!1);su.dataLayer=Sh;su.callback=function(a){Jh.hasOwnProperty(a)&&La(Jh[a])&&Jh[a]();delete Jh[a]};su.bootstrap=0;su._spx=!1;function tu(){Q[ke.F]=su;kb(Kh,Z.h);Qd=Qd||uq;Rd=ge}
function uu(){og.gtm_3pds=!0;og.gtag_cs_api=!0;Q=A.google_tag_manager=A.google_tag_manager||{};Cm();if(Q[ke.F]){var a=Q.zones;a&&a.unregisterChild(ke.F);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)Jd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Md.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Ld.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],n={},t=0;t<p.length;t++)n[p[t][0]]=Array.prototype.slice.call(p[t],1);Kd.push(n)}Od=Z;Pd=Gr;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Bp();oe=new ne(r);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Kh[x]=w}Ep(v);tu();tq();
uk=!1;vk=0;if("interactive"==M.readyState&&!M.createEventObject||"complete"==M.readyState)xk();else{gg(M,"DOMContentLoaded",xk);gg(M,"readystatechange",xk);if(M.createEventObject&&M.documentElement.doScroll){var z=!0;try{z=!A.frameElement}catch(K){}z&&yk()}gg(A,"load",xk)}Po=!1;"complete"===M.readyState?Ro():gg(A,"load",Ro);
a:{if(!rl)break a;A.setInterval(sl,864E5);}Hh=(new Date).getTime();}}
(function(a){var e=!0;
e=!1;if(e){a();return}var f=function(){var m=A["google.tagmanager.debugui2.queue"];m||(m=[],A["google.tagmanager.debugui2.queue"]=m,ag("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===ah(A.location,"query",
!1,void 0,"gtm_debug");if(!g&&M.referrer){var h=ch(M.referrer);g="tagassistant.google.com"===$g(h,"host")}if(!g){var l=ei("__TAG_ASSISTANT");g=l.length&&l[0].length}A.__TAG_ASSISTANT_API&&(g=!0);if(g&&Yf){f().push({messageType:"CONTAINER_STARTING",data:{scriptSource:Yf,resume:function(){a()}}});return}a()})(uu);

})()
