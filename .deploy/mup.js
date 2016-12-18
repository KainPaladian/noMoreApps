module.exports = {
  servers: {
    one: {
      host: 'ec2-35-165-32-225.us-west-2.compute.amazonaws.com',
      username: 'ec2-user',
      pem: '../documents/nomoreapps.pem'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'talkabot',
    path: '../noMoreApps-client-web',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'talkabot.com.br',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  // mongo: {
  //   oplog: true,
  //   port: 27017,
  //   servers: {
  //     one: {},
  //   },
  // },
};