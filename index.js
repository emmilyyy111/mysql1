const mysql = require('mysql')
const { dbconfig } = require('./dbconfig')
const db = mysql.createConnection(dbconfig)
connection.connect()
db.query('SELECT * FROM customers', (err, rows) => {
    if(err){
        console.error('Error from MYSQL: ', err)
    }
    console.log('Got back ROWS: ', rows)
})
db.end()

