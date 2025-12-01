require('dotenv').config()
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')


const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

const HUBSPOT_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN
const CUSTOM_OBJECT = '2-221866144'   


app.get('/', async (req, res) => {
  try {
    const url = `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT}?properties=car_name,make,year`
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${HUBSPOT_TOKEN}` }
    })

    res.render('homepage', {
      title: "Homepage | Integrating with HubSpot Practicum",
      records: response.data.results
    })
  } catch (err) {
    console.log(err)
    res.send("Error loading homepage")
  }
})



app.listen(3000, () => console.log("Server running on http://localhost:3000"))
