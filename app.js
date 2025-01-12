const express = require('express');
var cors = require('cors');
const RoomModel = require('./roomModel');
const config = require('./config')

const app = express();

function parseStringSupDoub(text, id){
  const parseString = (JSON.parse(text.substring(6))).roomRateDates;

  let roomData = [];
  
  parseString.forEach(element => {
  
  if (id == 1)
  {
    if (element.roomRateId == 1355836)
      roomData.push(new RoomModel(element.roomRateId, element.availability, element.rate, element.date))
  }
  if (id == 2)
    {
      if (element.roomRateId == 1355837)
        roomData.push(new RoomModel(element.roomRateId, element.availability, element.rate, element.date))
    }
  if (id == 3)
    {
      if (element.roomRateId == 1355828)
        roomData.push(new RoomModel(element.roomRateId, element.availability, element.rate, element.date))
    }
  if (id == 4)
    {
      if (element.roomRateId == 1355829)
        roomData.push(new RoomModel(element.roomRateId, element.availability, element.rate, element.date))
    }
  if (id == 5)
    {
      if (element.roomRateId == 1355834)
        roomData.push(new RoomModel(element.roomRateId, element.availability, element.rate, element.date))
    }
    if (id == 6)
      {
        if (element.roomRateId == 1355835)
          roomData.push(new RoomModel(element.roomRateId, element.availability, element.rate, element.date))
      }
    if (id == 7)
      {
        if (element.roomRateId == 1355832)
          roomData.push(new RoomModel(element.roomRateId, element.availability, element.rate, element.date))
      }
    if (id == 8)
      {
        if (element.roomRateId == 1355833)
          roomData.push(new RoomModel(element.roomRateId, element.availability, element.rate, element.date))
    }
    if (id == 9)
      {
        if (element.roomRateId == 1355830)
          roomData.push(new RoomModel(element.roomRateId, element.availability, element.rate, element.date))
      }
    if (id == 10)
      {
        if (element.roomRateId == 1384460)
            roomData.push(new RoomModel(element.roomRateId, element.availability, element.rate, element.date))
      }

  });
  return roomData;

}



app.use(cors())

app.get('/siteminderavailability', async (req, res) => {
    const date = req.query.date
    const cookies = req.query.cookies
    try {
      const response = await fetch(`https://app-apac.siteminder.com/web/extranet/reloaded/hoteliers/33387/inventory?startDate=${date}`, {
        headers: {
          'Cookie': cookies,
        }
      });
  
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
  
      const data = await response.text();
      const id = req.query.id;
     
      var result = parseStringSupDoub(data, id);
      res.send(result);
  
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
app.get('/', (req, res) => {
  res.send('Hello!');
})

app.listen(5000, () => {
    console.log('Server listening on port 5000');
  });