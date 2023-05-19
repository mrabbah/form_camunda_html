$(document).ready(function(){
    $("#myForm").submit(function(e){
        e.preventDefault();  // Prevent the form from submitting normally

        var meal = $("#meal").val();
        var trancheJour = $("#trancheJour").val();
        var taskid = $("#taskid").val();

        var url = 'http://localhost:8080/engine-rest/task/' + taskid + '/complete';

        var data = {
            "variables": {
                "plat": { "value": meal },
                "trancheJour": { "value": trancheJour }
            },
            "withVariablesInReturn": true
        };
        
        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response){
                console.log(response);
            },
            error: function(error){
                console.log('Error: ', error);
            }
        });
    });
});
