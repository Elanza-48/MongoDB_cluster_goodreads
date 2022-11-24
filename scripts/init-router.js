
globalConcerns= (w)=>{
  return {
    "setDefaultRWConcern" : 1,
    "defaultWriteConcern" : {
      "w" : w
    },
    "defaultReadConcern" : { "level" : "majority" }
  }
}

db.adminCommand(globalConcerns(2));

sh.addShard("rs-shard-01/shard01n01:27017,shard01n02:27017");
sh.addShard("rs-shard-02/shard02n01:27017,shard02n02:27017");
sh.addShard("rs-shard-03/shard03n01:27017,shard03n02:27017");

db.adminCommand(globalConcerns(1));