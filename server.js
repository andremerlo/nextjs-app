const express = require('express')
const next = require('next')
const url = require('url');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      return app.render(req, res, '/', req.query)
    })
    
    server.get('/test', (req, res) => {
      return app.render(req, res, '/example', req.query)
    })

    server.get(/^\/([a-z0-9]+)\/$/i, (req, res) => {
      return app.render(req, res, '/showcase/home', req.query)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready and running on http://localhost:${port}`)
    })
  })