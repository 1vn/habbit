
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
	$(".score").remove();
	$(".arrow.up").css("background", "none");
	$(".arrow.down").css("background", "none");
	$(".arrow").css("cursor", "default");
}


function getAllPosts(){
	var posts = []
	$(".thing").each(function(i, e){
		posts.push(e)
	})

	return posts;
}

function removeSideBox(){
	$(".sidebox").remove();
}

function removeSearch(){
	$("#search").remove();
}

function removeVideoPosts(){
	$("div.expando-button").parent().parent().remove();
}

function removeSideContent(){
	$(".sidecontentbox").remove();
}

function removeAccountActivity(){
	$(".account-activity-box").remove();
}

function removeGoldAd(){
	$(".goldvertisement").remove();
}

function removeTrending(){
	$(".trending-subreddits-content").remove();
}

$(document).ready(function(){
	init();
	removeUpvoteNumbers();
	removeVideoPosts();
	removeSearch();
	removeSideBox();
	removeSideContent();
	removeAccountActivity();
	removeGoldAd();
	removeTrending();
})