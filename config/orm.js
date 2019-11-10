var connection = require('./connection.js');

var songs = [];

var Song = function(title, tasks, table) {
    this.title = title;
    this.tasks = tasks;
    this.id = songs.length;
    this.table = table;
};

var orm = {
    gatherSongs: function() {
        connection.query(`select * from songs`, function(err,res) {
            if(err) throw err;
            
            if(songs.length!=0) songs = [];
            for(var i=0; i<res.length; i++) {
                orm.gatherAllTodos(res[i]);
            }
        });
    }, 
    gatherAllTodos: function(data) {
        connection.query(`select * from ??`, [data.table_name], function(err,resp) {
            var taskList = [];
            for(var j=0; j<resp.length; j++) {
                var newTask = {
                    task: resp[j].task
                };
                if(resp[j].completed=="yes") newTask.completed = true;
                else newTask.completed = false;
                taskList.push(newTask);
            }
            songs.push(new Song(data.title, taskList, data.table_name));
        });
    }, 
    listData: function() {
        console.log(songs);
    }
};

module.exports = {
    orm: orm,
    gatherSongs: orm.gatherSongs,
    gatherTodos: orm.gatherTodos,
    songs: songs
};