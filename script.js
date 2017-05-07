$(document).ready(function(){
    $("#newQuote").on("click", function(){
      $.ajax({
        url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote",
        dataType: 'JSONP',
        type: 'GET',
        jsonpCallback:"parseQuote"
      });
    })
})

function parseQuote(data){
  $("#content").html(JSON.stringify(data.quoteText).replace(/\"+/g, ""));
  if (data.quoteAuthor != "") {
    $("#cite span i").html(JSON.stringify(data.quoteAuthor).replace(/\"+/g, ""));
  } else {
    $("#cite span").html("unknown");
  }
  changeColor();
}

var colorIndex = 0;
function changeColor() {
  var pallete = {
    0:"#34495E",
    1:"#A93226",
    2:"#884EA0",
    3:"#2471A3",
    4:"#17A589",
    5:"#229954",
    6:"#D4AC0D",
    7:"#CA6F1E",
    8:"#707B7C",
    9:"#CB4335",
    10:"#7D3C98",
    11:"#2E86C1",
    12:"#138D75"
  }
  console.log("colorIndex"); // color test
  console.log(colorIndex);
  $(".quote-card").css("color", pallete[colorIndex]);
  $("body").css("background", pallete[colorIndex]);
  colorIndex = (colorIndex + 1) % 13;
}
