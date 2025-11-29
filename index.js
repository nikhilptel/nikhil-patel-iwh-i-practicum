require('dotenv').config()
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

const HUBSPOT_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN
const CUSTOM_OBJECT = 'cars' 

