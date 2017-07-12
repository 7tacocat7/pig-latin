// business logic
// var pigLatinFunction = function(regularText) {
//   return false;
// };





// user interface logic
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    //line below assigns the variable regularText to equal the input value regualrText(from the form imput id = regularText)

    //declaired a " " as the variable seperator to use to split input into an array of words
    var seperator = (" ");
    var regularTextInput = $("input#regularText").val();
    var regularTextWordArray = regularTextInput.split(seperator);
    var wordArray = regularTextWordArray.slice();
    alert(wordArray);
    // alert(regularTextWordArray);
    $(".regularText").text(regularTextInput);
    $("#result").show();
  });
});
