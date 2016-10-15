
/*On page load, define firstDate to determine the extent of "boringness"
  to apply to reddit.
*/
function init(){
	chrome.storage.sync.get("firstDate", function (obj) {
    	if (!obj.firstDate){
			chrome.storage.sync.set({
      			"firstDate": Date.now()
    		});
    	}

		//get number of days elapsed since firstDate
		days = (Date.now() - obj.firstDate)/86400000;
		return days
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

function removeVideoPosts(days){
	$("div.expando-button").parent().parent().each();
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
	numDays = init();

	//week 1: upvote, trending content 
	removeUpvoteNumbers();
	removeTrending();
	removeVideoPosts(numDays);

	//week 2:  sidebar, account activity
	if (days >= 7){
		removeSideBox();
		removeSideContent();
		removeAccountActivity();
	}

	//week 3:  search, taglines, goldad
	if (days >= 14){
		removeGoldAd();
		removeSearch();
	}
	
})