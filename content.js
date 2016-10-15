
/*On page load, define firstDate to determine the extent of "boringness"
  to apply to reddit.
*/
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
	var posts = []
	$(".thing").each(function(i, e){
		posts.push(e)
	})

	return posts;
}

function removeVideoPosts(){
	$("div.expando-button").parent().parent().remove();
}

$(document).ready(function(){
	init();
})