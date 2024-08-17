const express = require('express')
const app = express()
const port = 3000
const testData  = require('./data')
app.get('/ok', (req, res) => {
  res.send('Hello World!')
  get()
})
app.get('/users', (req, res) => {
    res.json(testData.users);
  });


//   const express = require('express');
  const axios = require('axios');
  
//   const app = express();
//   const PORT = 9876;
  const WINDOW_SIZE = 10;
  
  let storedNumbers = [];
  
  app.get('/numbers/:numberid', async (req, res) => {
      const numberId = req.params.numberid;
      try {
          const response = await axios.get("http://20.244.56.144/test/even");
      } catch (error) {
          console.error(error);
          res.status(500).send('Error fetching numbers');
      }
  });
  
 






app.listen(port, () => {
  console.log(`working ${port}`)
})