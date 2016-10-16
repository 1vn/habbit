
/*On page load, define firstDate to determine the extent of "boringness"
  to apply to reddit.
*/
function init(callback){
	chrome.storage.sync.get("firstDate", function (obj) {
    	if (!obj.firstDate){
			chrome.storage.sync.set({
      			"firstDate": Date.now()
    		});
    	}

		//get number of days elapsed since firstDate
		days = (Date.now() - obj.firstDate)/86400000;
		callback(days)
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
	numSkips= Math.round(100/(days*3 + 30));

	console.log("percent skipped: "+ (days*3 + 30)+"%")
	console.log("Before count: "+$("div.expando-button").length)

	$("div.expando-button").parent().parent().each(function(i, e){
		console.log("i is: "+i+" and numSkips is: "+numSkips)
		if(i%numSkips==0){
			console.log("i is: "+i+" and numSkips is: "+numSkips)
			e.remove();
		}
	})

	console.log("After count: "+$("div.expando-button").length)
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
	$(".trending-subreddits").remove();
}

function removeExternalLinks(){
	$(".thing[data-type='link']").each(function(i, e){
		console.log(e.dataset)
		if(e.dataset.domain.indexOf("self.") < 0){
			e.remove()
		}
	})
}


$(document).ready(function(){
	init(function(days){
		//var days = 8
		//var days = 15
		//var days = 22

		//week 1: upvote, trending content 
		removeUpvoteNumbers();
		removeTrending();
		removeVideoPosts(days);

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

		//week 4: externalLinks
		if (days >= 21){
			removeExternalLinks();
		}

	});	
	
})