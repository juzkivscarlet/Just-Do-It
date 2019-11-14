var connection = require('./connection.js');

var Song = function(title, tasks, table) {
    this.title = title;
    this.tasks = tasks;
    this.id = orm.songs.length;
    this.table = table;
};

var orm = {
    songs: [],
    gatherSongs: function() {
        connection.query(`select * from songs`, function(err,res) {
            if(err) throw err;
            
            // if(orm.songs.length!=0) orm.songs = [];
            for(var i=0; i<res.length; i++) {
                orm.gatherAllTodos(res[i]);
                // console.log(res[i].table_name);
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
            orm.songs.push(new Song(data.title, taskList, data.table_name));
        });
    }, 
    listData: function() {
        console.log(orm.songs);
    }
};

module.exports = {
    orm: orm,
    gatherSongs: orm.gatherSongs,
    gatherTodos: orm.gatherTodos,
    songs: orm.songs
};