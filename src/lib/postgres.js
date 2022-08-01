const {Pool} = require('pg')

const {pgConfig} = require('../conifig.js')

const pool = new Pool(pgConfig)

async function fetch(sql,...params){
    const cilent = await pool.connect()
    try {
        const {rows:[row]} = await cilent.query(sql,params.length ? params : null)
        return row
    } catch (error) {
        console.log(error)
    }finally{
        await cilent.release()
    }
}

async function fetchAll(sql,...params){
    const cilent = await pool.connect()
    try {
        const {rows} = await cilent.query(sql,params.length ? params : null)
        return rows
    } catch (error) {
        console.log(error)
    }finally{
        await cilent.release()
    }
}

module.exports = {
    fetch, fetchAll    
}