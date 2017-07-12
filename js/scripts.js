// business logic
// var pigLatinFunction = function(regularText) {
//   return false;
// };





// user interface logic
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    //line below assigns the variable regularText to equal the input value regualrText(from the form imput id = regularText)
    var regularTextInput = $("input#regularText").val();
    // var result = pigLatinFunction(regularText);
    // $(".result").text(result);
    $(".regularText").text(regularTextInput);
    $("#result").show();
  });
});
