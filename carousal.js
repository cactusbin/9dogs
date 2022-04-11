var position = 0;

$(function() {
    $( "#carousal-right" ).click(function() {
	if (position == $( ".carousal-content" ).length - 2) {
	    position++;
	    $( ".carousal-content" ).eq(position-1).addClass("carousal-content-hidden");
	} else if (position == $( ".carousal-content" ).length - 1) {
	    $( ".carousal-content" ).eq(position).addClass("carousal-content-hidden");
	    position = 0;
	    $( ".carousal-content" ).eq(position).removeClass("carousal-content-hidden");
	    $( ".carousal-content" ).eq(position+1).removeClass("carousal-content-hidden");
	} else {
	    position++;
	    $( ".carousal-content" ).eq(position-1).addClass("carousal-content-hidden");
	    $( ".carousal-content" ).eq(position+1).removeClass("carousal-content-hidden");
	}
    });
    
    $( "#carousal-left" ).click(function() {
	if (position == $( ".carousal-content" ).length - 1) {
	    position--;
	    $( ".carousal-content" ).eq(position).removeClass("carousal-content-hidden");
	} else if (position > 0) {
	    position--;
	    $( ".carousal-content" ).eq(position).removeClass("carousal-content-hidden");
	    $( ".carousal-content" ).eq(position+2).addClass("carousal-content-hidden");
	}
    });
});
