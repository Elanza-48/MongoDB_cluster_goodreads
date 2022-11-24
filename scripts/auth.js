if (db.getUser("admin") === null) { 
  db.createUser({
    user: "admin",
    pwd: "password",
    roles: [
      {
        "role" : "root",
        "db" : "admin"
      }
    ]
  });
}