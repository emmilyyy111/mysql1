const mysql = require('mysql') // importing mysql library we added from npm
const { dbconfig } = require('./dbconfig') // uses our secrets
const db = mysql.createConnection(dbconfig) // makes connection
db.connect() // opens connection

const pet = {
    name: "brinx",
    type: "dog",
    size: "large"
}
const customer_name = 'Dan'



db.query(`INSERT INTO pets VALUES (null,
    (select id from customers where first_name = "${customer_name}"), "${pet.name}", "${pet.type}", "${pet.size}")`,
    (err, results) => {
        if (err) {
            console.error(err)
        }
        console.log(results)
    })
db.end() // closes the connection



