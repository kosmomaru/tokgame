function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}
var f_param = gup( 'f' );
var f_text;
switch (f_param){
case "news":
f_text = "content_title.gif"
break;
case "register":
f_text = "reg_title.gif"
break;
case "stat":
f_text = "stat_title.gif"
break;
case "lk":
f_text = "lk_title.gif"
break;
case "vote":
f_text = "bonus_title.gif"
break;
case "forget":
f_text = "pass_title.gif"
break;
case "webmoney":
f_text = "donate1_title.gif"
break;
case "download":
f_text = "files_title.gif"
break;
case "rules":
f_text = "rules_titile.gif"
break;
case "about":
f_text = "about_title.gif"
break;
case "contacts":
f_text = "contacts_title.gif"
break;
default : f_text = "content_title.gif";
}
window.document.getElementById('ptitle').innerHTML = "<img src='templates/default/images/" + f_text + "' />";