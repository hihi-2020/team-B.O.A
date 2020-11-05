const server = require('./server')

const PORT = process.env.PORT || 3000

<<<<<<< HEAD
||||||| 013d491
const server = express()
server.use(express.static('public'))

=======


>>>>>>> 0b2112ec500d8ddd7564729f1a1339dd220b8bf6
server.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
})
