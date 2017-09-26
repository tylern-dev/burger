const path = require('path')
const connection = require(path.join(__dirname, './connection.js'));

let orm = {
    //selects all
    selectAll: function(tableName, callback){
        var queryString = "select * from ??";
        connection.query(queryString, [tableName], function(err,result){
            if(err){
                console.log(err);
            }
            console.log(result) 
            callback(result)
        })
    },
    //inserts an item into the database
    insertOne: function(tableName, valueName, value, callback){
        var queryString = `insert into ${tableName} (${valueName.toString()}) VALUES (?)`;
        /* IF THERE IS AN ERROR USE THE LINE BELOW THAT IS COMMENTED OUT AND UPDATE [] */
        // var queryString = "insert into ?? (?) values (?)";
        connection.query(queryString, [value], function(err, result){
            if(err){
                console.log(err)
            }
            console.log(result)
            callback(result)
        })
    },
    //updates an item
    updateOne: function(tableName, columnName, newValue, whereID, IDValue, callback ){
        var queryString = `UPDATE ${tableName} SET ${columnName} = ${newValue} WHERE ${whereID} = ?`;
        /* IF THERE IS AN ERROR USE THE LINE BELOW THAT IS COMMENTED OUT AND UPDATE [] */
        // var queryString = "UPDATE ?? SET ?? = ? WHERE ?? =  ?"; 
        connection.query(queryString, [IDValue], function(err, result){
            if(err){
                console.log(err);
            }
            console.log(result)
            callback(result)
        })
    }

}

module.exports = orm;