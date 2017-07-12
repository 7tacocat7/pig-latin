// business logic
//var alaphabet = [A,a,B,b,C,c,D,d,E,e,F,f,G,g,H,h,I,i,J,j,K,k,J,j,L,l,M,m,N,n,O,o,P,p,Q,q,R,r,S,s,T,t,U,u,V,v,W,w,X,x,Y,y,Z,z];


// if (regularWordArray(0) ===));

// current.indexOf(elem) !== -1)
  var vowels = ['a','e','i','o','u'];

// user interface logic
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    //line below assigns the variable regularText to equal the input value regualrText(from the form imput id = regularText)

    //declaired a " " as the variable seperator to use to split input into an array of words
    var seperator = ("");
    var regularTextInput = $("input#regularText").val();
    var regularWordArray = regularTextInput.split(seperator);

    for (var i = 0; i < regularTextInput.length; i++) {
      if ( vowels.includes(regularTextInput.charAt(0)) ) {
        alert("we have a vowel first");
        return ;
      } if else
    }

    // alert(regularWordArray);
    // $(".regularText").text(regularTextInput);
    // $("#result").show();
  });
});
