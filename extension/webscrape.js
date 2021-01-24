
var productOverview = document.getElementById("productOverview_feature_div");
var rows = productOverview.getElementsByClassName("a-normal")[0].getElementsByTagName('tbody')[0].rows

var brand;

for (var i = 0, row; row = rows[i]; i++) {
	if(row.innerText.includes("Brand")){
		console.log(row.cells[1].innerText);
		brand = row.cells[1].innerText;
	}

}


// also get the ingredient list

var importantInfo = document.getElementById("important-information");
var children = importantInfo.children;
for (var i = 0; i < children.length; i++) {
	var heading = children.getElementsByClassName("h4")
	// we have a heading
	if(heading.length > 0){
		// if we have a heading, it might be "Ingredients"
		if(heading[0].textContent == "Ingredients"){
			// if it is, let's gather all the ingredients! 
			
		}
	}
  var tableChild = children[i];
  // Do stuff
}


JSON.stringify([document.getElementById("productTitle").innerHTML.trim(), brand])

// document.all[0].outerHTML
// brand