const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://saiabhiramraja:ABHI123@in-aws.0xwy9.mongodb.net/store?retryWrites=true&w=majority&appName=in-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')