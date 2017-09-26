const path = require('path');
const orm = require(path.join(__dirname, '../config/orm.js'));

//using the orm we built for updating the database specific to the burger data
let burger = {
    all: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insert: function(burgerName, callback){
        orm.insertOne("burgers","burger_name", burgerName, function(res){
            callback(res);
        });
    },
    update: function(burgerID, callback){
        orm.updateOne("burgers","devoured", true, "id", burgerID, function(res){
            callback(res);
        });
    }
}

module.exports = burger;