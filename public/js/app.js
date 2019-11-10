$(function() {

    $(".song-btn").on("click", function() {
        var id = $(this).data("id");
        var table = $(this).data('table');
        $("button").removeClass("btn-success").addClass("btn-primary");
        $(this).removeClass("btn-primary").addClass("btn-success");

        $.ajax("/"+table).then(function(res) {
            writeTasks(table,res);
        });
    });

    var writeTasks = function(song,data) {
        console.log(data);

        $("#taskView").empty();
        $("#taskView").html("<h4>To-dos</h4><br>");

        var list = $("<div>");

        for(var i=0; i<data.length; i++) {
            var item = $("<p>").text(data[i].task);
            if(data[i].completed=="no") {
                item.append(" (Not completed)").addClass("font-weight-bold");
                var markDoneBtn = $("<button>").attr('role','button').addClass("btn btn-success btn-sm").addClass("mark-done").html("&#10004;").attr('data-task',data[i].id);
                
                markDoneBtn.on("click", function() {
                    markTaskDone(song,$(this).attr('data-task'));
                });
                item.append(markDoneBtn);
            }
            list.append(item);
        }

        $("#taskView").append(list);
    };

    var markTaskDone = function(song,task) {
        $.ajax(`/${song}/${task}`, {
            type: "PUT"
        }).then(function() {
            location.assign("/");
        });
    };

});
