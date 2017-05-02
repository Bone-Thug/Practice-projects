//$(document).ready(function(){
//    var likeBtnIndex = 0;
//    var likesArr = [];
//    $("#addBtn").on("click", function(){
//        likesArr.push(0);
//        
//        var input = $("#input").val();
//        $("ul").append("<li>" + input + " <button id='" + likeBtnIndex + "' data-count=0>like</button> <span></span></li>");
//        
//        $("#" + likeBtnIndex).on("click", function(){
//            var likesNum = $(this).attr("data-count");
//            console.log(likesNum);
//            likesNum++;
//            $(this).siblings().html(likesNum);
//            $(this).attr("data-count", likesNum);
//        });
//        
//        likeBtnIndex++
//    });
//    
//});

$(document).ready(function () {
            $("#submit").on("click", function () {
                        var nameVal = $('input.input').val()
                        var gameName = $('#game').val()
                        var highS = $('#input2').val()
                        var date = $('#input3').val()
                        $('table').append(`<tr>
  <td>${nameVal}</td>
    <td>${gameName}</td>
    <td>${highS}</td>
    <td>${date}</td>
</tr>`)
        console.log(nameVal + gameName + highS + date)
    })
})

$('table').append(`<tr>
  <td>${nameVal}</td>
    <td>${gameName}</td>
    <td>${highS}</td>
    <td>${date}</td>
</tr>`)