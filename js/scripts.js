

$(document).ready(function(){
  $("#whatWeDoIcon1").click(function(){
    $("#hiddenWhatWeDo1").show();
    $("#whatWeDoIcon1").hide();
    
  });
  $("#whatWeDoIcon1").mouseout(function(){
    $("#hiddenWhatWeDo1").hide();
    $("#whatWeDoIcon1").show();
  });

  $("#whatWeDoIcon2").click(function(){
    $("#hiddenWhatWeDo2").show();
    $("#whatWeDoIcon2").hide();
  });
  $("#whatWeDoIcon2").mouseout(function(){
    $("#hiddenWhatWeDo2").hide();
    $("#whatWeDoIcon2").show();
  });

  $("#whatWeDoIcon3").click(function(){
    $("#hiddenWhatWeDo3").show();
    $("#whatWeDoIcon3").hide();
  });
  $("#whatWeDoIcon3").mouseout(function(){
    $("#hiddenWhatWeDo3").hide();
    $("#whatWeDoIcon3").show();
  });
  

});