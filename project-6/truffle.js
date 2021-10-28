module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 200000
  },
};