/*

Shopping Guarantee Loader
Copyright 2020, buySAFE, Inc.
20200219
*/
var bs_R=window.bs_R||{},buySAFE=window.buySAFE||{},_GUARANTEE=window._GUARANTEE||buySAFE;
(function(a,b){if(!a.sRoot){a.sRootHost="https://seal.buysafe.com";a.sRoot=a.sRootHost+"/private/rollover/";for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var c=f[d].src.substr(0,100);if(c=c.match(/((.*)\/private\/.*\/)rollover(?:\.unpacked)?\.js/i)||c.match(/()(.*)\/Web\/Seal\/gjs.aspx/i)){a.sRootHost=c[2];a.sRoot=c[1]||a.sRootHost+"/private/rollover/";break}}}a.aExecQ=a.aExecQ||[];a.onEvent=function(a,b,c){if(a){var e=a.addEventListener;a=a.attachEvent;e?e(b,c,!1):a&&a("on"+
b,c)}};a.onLoad=function(b,c){if(b)if(a.fOnLoad||c)b();else a.onEvent(window,"load",b)};a.AddJS=function(b,c,d){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=b;a.onLoad(function(){window.setTimeout(function(){var a=document.getElementsByTagName("script")[0];a&&a.parentNode&&a.parentNode.insertBefore(e,a)},c||10)},!d)};b.Loaded||(b.Hash||(b.Hash=""),b.Guarantee||(b.Guarantee={order:"",total:"",email:""}),b.Seal||(b.Seal={bgcolor:"#FFFFFF"}),b.Button||(b.Button={bgcolor:"#FFFFFF"}),
b.Loaded=1)})(bs_R,buySAFE);var buySAFESealConfig=buySAFE.Seal,buySAFEButtonConfig=buySAFE.Button;
(function(a){function b(b,c){c[b]||(c[b]=function(){a.aExecQ.push([b,c,arguments])})}a.onLoad(function(){a.fOnLoad=1});for(var f=[["+AffiliateSeal"],["+Button"],["+ButtonAjax"],["+ButtonAjaxInvisible"],["+ButtonInvisible"],["+Guarantee"],["+Kickers"],["+Seal"],["+TrustRatingSeal"],["+TrustSeal"],["buysafeGetAffiliateURL"],["Display",1]],d=[{},{pre:"WriteBuySafe"},{pre:"Write",obj:"buySAFE"}],c=0;c<f.length;c++)for(var g=1;g<d.length;g++){var k=d[g],h=f[c];h[g]||(h=h[0].replace(/^\+/,k.pre),b(h,k.obj&&
window[k.obj]||window))}a.AddJS(a.sRoot+"rollover.core.js",100)})(bs_R);
//  Client specific code
var buySAFE = window.buySAFE || {};
var _GUARANTEE = window._GUARANTEE || buySAFE;
if(!_GUARANTEE.Guarantee)  _GUARANTEE.Guarantee = { order:'', total:'', email:'' };
_GUARANTEE.Hash = 'uHBSOgdoj1aFU3XIypd45W9ei0AP9UsJ5NfUPQoeBbex4hqbkzLW4%2fStlMT61aHvBs%2bVtbulNNVElvfzoj2nYA%3d%3d';
_GUARANTEE.EnableClientDisplay = 1;
_GUARANTEE.Guarantee.hidden = 1;
_GUARANTEE.QuickLinkGA = 'TEST';
_GUARANTEE.FPC = 1;
_GUARANTEE.NoWarn = 1;
//CJSS
_GUARANTEE.Responsive = {
  Breakpoints : [ 480, 768 ],
  Seal : { Breakpoint : 1 },
  Kickers : {'Kicker Custom 2_1' : [ 'Mobile', '2', '2' ],
             'Kicker Custom Minimal1_1' : [ 'Minimal1', 'Minimal1', 'Minimal1' ]}
};


if (document.location.href.match(/\/\D+\d*\D\d*\D*html/i)) {
  if (screen.width < 480) {
    _GUARANTEE.InsertKickers = [{"loc":"First","anchorTagName":"DIV","anchorID":"ProductDetailsItems","anchorClass":"","path":[],"kickerType":"Kicker Custom Mobile","kickerStyle":"margin:10px 0 20px 0;","containerTagName":"DIV","containerStyle":"text-align:center;"}];
}   else {_GUARANTEE.InsertKickers = [{"loc":"After","anchorTagName":"DIV","anchorID":"","anchorClass":"span-minheight","path":["c0"],"kickerType":"Kicker Custom 2","kickerStyle":"margin:20px 0 20px 0;","containerTagName":"DIV","containerStyle":"text-align:center;"}];
}
} 
else if (document.location.href.match(/\/basket/i)) {
  if (screen.width < 480) {
    _GUARANTEE.InsertKickers = [{"loc":"After","anchorTagName":"DIV","anchorID":"NewCartCouponCode","anchorClass":"hidden-phone","path":[],"kickerType":"Kicker Custom 2","kickerStyle":"margin:20px 0 10px 0;","containerTagName":"DIV","containerStyle":"text-align:center;"}];
}   else {_GUARANTEE.InsertKickers = [{"loc":"After","anchorTagName":"DIV","anchorID":"NewCartCouponCode","anchorClass":"hidden-phone","path":[],"kickerType":"Kicker Custom 2","kickerStyle":"margin:20px 0 0 0;","containerTagName":"","containerStyle":""}];
}
} 
else if (document.location.href.match(/\/checkout/i)) {
  _GUARANTEE.InsertKickers = [{"loc":"After","anchorTagName":"DIV","anchorID":"OrderSummary","anchorClass":"","path":[],"kickerType":"Kicker Custom Minimal1","kickerStyle":"","containerTagName":"DIV","containerStyle":"text-align:center;"}];
}  
else {
  if (screen.width < 480) {
    _GUARANTEE.InsertKickers = [{"loc":"After","anchorTagName":"DIV","anchorID":"CategoryList","anchorClass":"","path":["pN"],"kickerType":"Kicker Custom Mobile","kickerStyle":"margin:10px 0 10px 0;","containerTagName":"DIV","containerStyle":"text-align:center;"}];
}
}


if (screen.width < 480) {
  _GUARANTEE.WriteSeal = function(){};
}

_GUARANTEE.WriteSeal();
//CJSE
