//Q1

function seen () {
    $("#para").show();
}

function unseen () {
    $("#para").hide();
}

//Q2
function jqueryAjax(){

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/12",
        type: "GET",
        success:function(data){
            console.log(data);
        },
        erroe:function(err){
            console.log(err);
        }
    })
};
$("#button").click(function(){
    jqueryAjax();
})