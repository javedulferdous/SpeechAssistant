window.onerror = function( ) { return true; }
var sirefurl = top.document.referrer;
var sipageurl = new String( top.document.URL );
if (true)
{ if((sipageurl.split('/')[2] != sirefurl.split('/')[2])){ 
var url = '//dms.netmng.com/si/CM/Tracking/ClickTracking.aspx?siclientid=2537&jscript=0';
var proto = window.location.protocol.toLowerCase();
if(proto=='https:') url = proto + url;
else url = 'http:' + url;
var now = new Date();
url += '&timecode=' + now.getTime();
if(sirefurl!=null) url += '&sirefurl=' + escape(sirefurl);
if(sipageurl!=null) url += '&sipageurl=' + escape(sipageurl);
if(sirefurl=='') url += '&sichannel=Direct';
var siimage = new Image( );
siimage.src = url;
}}
