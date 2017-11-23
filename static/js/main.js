// DOM is ready
$(document).ready(function () {
  // Bind click event
  $(document).forms["search1"].click(function () {
	  var text1 = $.submit();
    
	$.ajax({
		type: "POST",
		url: $SCRIPT_ROOT + "/result1/",
		data: text1,
		success: function(data){
			document.getElementById("res1").value = text1;
		}
	});

    return false;
  });
});
