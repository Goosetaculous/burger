var mysql =  require('mysql')

var connection =  mysql.createConnection({
    port: 3306,
    host: "192.232.216.141",
    user: "goose_ucsd1",
    password:"P)o9I*u7",
    database:"goose_UCSDHW"
})

connection.connect( (err)=>{
    if(err){
        console.log("Error connecting: "+ err.stack)
    }else {
        console.log("Connected as id ")
    }
})

module.exports = connection