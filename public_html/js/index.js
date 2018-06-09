
// Use each to assign a copy of the voteAmount variable to EACH of the clickUp buttons.
var voteAmount = 0;
$('.rating').each(function(){	
			voteAmount = voteAmount;

// Use this to ensure you're attaching the event within EACH of the buttons.
// Using the classname takes the button you've clicked and continues the number on.

$(this).find(".rating-up").click(function(){	

	if(voteAmount < 1000) {
			voteAmount ++;
		$(this).siblings('.counter').text(voteAmount);
	}
	
	else {
		alert("Maximum votes reached! Stop clicking!");
	};
});


$(this).find(".rating-down").click(function(){	

	if(voteAmount > -1000) {
			voteAmount --;
		$(this).siblings('.counter').text(voteAmount);
	}
	
	else {
		alert("Minimum votes reached! Stop clicking!");
	};
});
	
	
}); // Ends the each();