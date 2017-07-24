var connection =  require("../config/connection")

function printQuestionMarks(num){
    var arr =[]
    for(let i = 0; i< num; i++){
        arr.push("?")
    }
    return arr
}

function executeSQL(sql){
    connection.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        return result
    })
}

var orm = {
    selectAll: (tableInput, cb)=>{
        var queryString = `SELECT * FROM ${tableInput};`
        // connection.query(queryString, (err,result)=>{
        //     if(err){
        //         throw err
        //     }
        //     cb(result)
        // })
        cb(executeSQL(queryString))
    },
    //vals =  array
    insertOne: (table,col,vals,cb)=>{
        var queryString = `INSERT INTO ${table} (${col}) VALUES(${printQuestionMarks(vals.length)})`
        console.log(`INSERT STRING ${queryString}`)
        cb(executeSQL(queryString))


    },
    updateOne: (table, col,val,conditionCol,conditionVal,cb)=>{
        var queryString = `UPADATE  ${table} SET ${col} = ${val} WHERE ${conditionCol} =  ${conditionVal} `
        console.log(`UPDATE STRING ${queryString}`)
        cb(executeSQL(queryString))

    }
}
module.exports =  orm