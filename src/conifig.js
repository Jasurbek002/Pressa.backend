const dotenv = require('dotenv');
dotenv.config()


const pgConfig ={
    user:process.env.PGUSER,
    host:process.env.PGHOST,
    password:process.env.PGPASSWORD,
    database:process.env.PGDATABASE
}

const secretkey = process.env.SECRETKEY

module.exports = {
    pgConfig, secretkey
}