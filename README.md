## About
This is a sample setup of mongoDB cluster for storing goodread book records of 1 million.
The dataset has been acquired from kaggle open datasets repository, and will be used for Elastic search analytics.

---
### Cluster architecture.

- ROUTER
    - router-01 (replica)
    - router-02 (replica)

- CONFIG SERVER (replica)
    - mongo-config-01 (replica)
    - mongo-config-02 (replica)

- SHARDS
    - rs-shard-01
        - shard-01-node-01 (primary)
        - shard-01-node-02 (secondary)
    - rs-shard-02
        - shard-02-node-01 (primary)
        - shard-02-node-02 (secondary)
    - rs-shard-03
        - shard-03-node-01 (primary)
        - shard-03-node-02 (secondary)
        - 
---
*Need docker compose v2+*