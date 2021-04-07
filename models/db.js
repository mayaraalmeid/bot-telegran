const Sequelize = require('sequelize')
const sequelize = new Sequelize('bottelegram', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}
/* async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;


    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:admin@localhost:3306/bottelegram");
    console.log("Conectado com Sucesso");
    global.connection = connection;
    return connection;
}


async function selectCustomers(){
    const conn = await connect();
    const data = await conn.query("SELECT DISTINCT dat FROM daniel;")
    return data;   
}
module.exports = {selectCustomers}
 */