module.exports = {
  servers: {
    one: {
      host: 'ec2-35-165-116-78.us-west-2.compute.amazonaws.com',
      username: 'ubuntu',
      pem: '../../documents/NoMoreApps.pem'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'talkabot-admin',
    path: '../',
    servers: {
      one: {}
    },
    env: {
      ROOT_URL: 'http://admin.talkabot.com.br',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },
  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
  buildOptions: {
      serverOnly: true,
      debug: false,
      cleanAfterBuild: true
  }
};