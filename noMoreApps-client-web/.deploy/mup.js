module.exports = {
  servers: {
    one: {
      host: '35.165.241.74',
      username: 'ubuntu',
      pem: '../../documents/NoMoreApps.pem'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  // Install MongoDB on the server. Does not destroy the local MongoDB on future setups
  "setupMongo": false,

  meteor: {
    name: 'noMoreApps-client-web',
    path: '../',
    servers: {
      one: {}
    },
    env: {
      PORT:3000,
      ROOT_URL: 'http://web.talkabot.com.br',
      MONGO_URL: 'mongodb://talkabot:talkabot1@ds151068.mlab.com:51068/talkabot'
    },
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 30
  },
  // mongo: { 
  //   oplog: true,
  //   port: 27017,
  //   servers: {
  //     one: {},
  //   },
  // },
  buildOptions: {
      serverOnly: true,
      debug: false,
      cleanAfterBuild: true
  }
};