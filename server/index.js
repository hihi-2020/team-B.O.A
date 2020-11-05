const server = require('./server')

const PORT = process.env.PORT || 3000

const server = express()
server.use(express.static('public'))

server.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
})
