rs.initiate({
  _id: "rs-shard-02",
  version: 1,
  members: [
    { _id: 0, host: "shard02n01:27017" },
    { _id: 1, host: "shard02n02:27017" },
  ],
},{
  force: true
});