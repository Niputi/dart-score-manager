const { Server } = require('hapi')

async function start () {
  const server = new Server({ port: 3000 })

  await server.register([
    require('hapi-nuxt'),
    {
      // @ts-ignore
      plugin: require('nes'),
      options: {
        onConnection: function (socket) {
          console.log({ id: socket.id })
        },
        headers: null
      }
    }
  ])

  server.subscription('/api/chatroom/{id}')

  server.route({
    method: 'POST',
    path: '/api/dartgame/501/{id*}',
    handler: (request, h) => {
      const roomId = request.params.id
      server.publish(`/api/chatroom/${roomId}`, request.payload)
      console.log(request.payload)

      return h.response({ message: 'succes' }).code(200)
    }
  })

  await server.start()

  console.log(`Hapi server listening on http://localhost:3000`)
}

start().catch(console.error)
