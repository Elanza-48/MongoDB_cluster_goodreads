rs.initiate({
  _id: "rs-shard-01",
  version: 1,
  members: [
    { _id: 0, host: "shard01n01:27017"},
    { _id: 1, host: "shard01n02:27017"},
  ],
},{
  force:true
});