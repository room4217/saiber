var name="naresh";
var country="india";
var state="ap";
var age="25";
var place="hyd";
if(name=="naresh"){
	if(country=="india"){
	  if(state=="ap"){
		if(age=="25"){
			
			if(place=="hyd"){
				document.write("yes, we have found naresh ")
			}else{
				document.write("naresh is not from gudivada")
			
		}else if(age=="24"){
			if(place=="hyd"){
				document.write("yes, we have found naresh ")
		}else{
			document.write("naresh of age 25 is not found")
		}			
	}else{
		document.write("naresh is available in this country but not in these state")
	}	
	}else{
		document.write("naresh is available but not in these country")
	}
}else{
	document.write("no naresh is not available");
}