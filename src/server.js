const config = require('./config')
const app = require('./modules/app/app')
const port = config.PORT || 8080

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${port}.`)
})
