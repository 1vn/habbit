function init(){
	chrome.storage.sync.get("firstDate", function (obj) {
    	if (!obj.firstDate){
			chrome.storage.sync.set({
      			"firstDate": Date.now()
    		});
    		return;
    	}
  		console.log(obj.firstDate)
	});
}

function removeUpvoteNumbers(){
	$(".score").html("");
}

function getAllPosts(){
	$(".thing").each(function(i, e){
		e
	})
}

$(document).ready(function(){
	init()
	getAllPosts()
})