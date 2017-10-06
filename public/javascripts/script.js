$("#loginform").submit(function(e){
    $("#err").empty();
    e.preventDefault();
    $.post('/login', $(this).serialize(), function(data) {
        console.log(data.errormsg);
        if(data.errormsg) {
            $("#err").append("<p>" + data.errormsg +"</p>")
        }
    })
})