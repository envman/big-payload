const express = require('express')

const app = express()

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  const all = []

  for (let i = 0; i < 1000000; i++) {
    all.push({
     "id": "63a11a07-91f5-b536-d73f-12cfbaf8ecfa",
     "sourceHubId": "13a11a07-91f5-b536-d73f-12cfbaf8ecfa",
     "sourceHubName": "Hub 1",
     "message": "Commented!",
     "type": "Comment",
     "createdBy": "Development",
     "createdUtc": "01/01/2018",
     "status": "Sent",
     "incoming": "true"
    })
  }

  all.push({
   "id": "63a11a07-91f5-b536-d73f-12cfbaf8ecfa",
   "sourceHubId": "13a11a07-91f5-b536-d73f-12cfbaf8ecfa",
   "sourceHubName": "Hub 1",
   "message": "Commented!",
   "type": "Testing",
   "createdBy": "Development",
   "createdUtc": "01/01/2018",
   "status": "Sent",
   "incoming": "true"
  })

  console.time('lol')

  res.json(all)

  console.timeEnd('lol')
})

app.listen(8080)
