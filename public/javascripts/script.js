$("#loginform").submit(function(e){
    $("#err").empty();
    e.preventDefault();
    $.post('/signup', $(this).serialize(), function(data) {
        console.log(data);
        if(data.errormsg) {
            $("#err").append("<p>" + data.errormsg +"</p>")
        }
    })
})