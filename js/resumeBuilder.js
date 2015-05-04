
/*Ivar awesomeThoughts = "I am Himakiran and i am AWESOME";
$("#main").append(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);*/
var formattedName,formattedRole;
formattedName = HTMLheaderName.replace("%data%","Chundi Himakiran Kumar");
formattedRole = HTMLheaderRole.replace("%data%","Director Information Security");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);