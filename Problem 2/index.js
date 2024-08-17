const express = require('express')
const app = express()
const port = 4000
app.get('/', (req, res) => {
  res.send('working')
  get()
})




  
  
  app.get('/test/companies/', async (req, res) => {

      const details = req.params.numberid;
      try {
          
        if ("amz" = details){
            console.log("true");
        }
      } catch (error) {
          console.error(error);
          res.status(500).send('Error fetching numbers');
      }
  });
  
 






app.listen(port, () => {
  console.log(`working ${port}`)
})