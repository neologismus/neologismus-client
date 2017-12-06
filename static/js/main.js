// DOM is ready
$(document).ready(function () {
  function search1() 
  {
	  var text1 = self.f1.word.value;
	  self.location="result-search.html?="+text1;
  };
  
  function loadsearch1()
  {
	  var paramValue = &(document).location.href.split("=")[1];
      &(document).getElementById("res1").value = paramValue;
  };

    return false;
  });
});
