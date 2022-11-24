rs.initiate({
  _id: "rs-shard-03",
  version: 1,
  members: [
    { _id: 0, host: "shard03n01:27017" },
    { _id: 1, host: "shard03n02:27017" },
  ],
},{
  force: true
});