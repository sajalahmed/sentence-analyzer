#Run Instruction
```
1. run: docker compose up -d [ this will run this applicaiton on 9090 port]
2. migrate: npm run migrate | docker compose exec -it app npm run migrate
3. test: npm test | docker compose exec -it app npm test
4. api-collection: api-doc/
```

#core work:
```
1. config docker and docker-compose
2. struct project
3. modify sequelize folder structre
3. write unit test
4. develop apis
5. keycloak configuration
6. throttle setup
7. enable log writing.
```

#Project Structure
```
├── README.md
├── api-doc
│   └── Text Analyze.postman_collection.json
├── app.js
├── docker-compose.yml
├── jest.config.js
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── constant
│   │   │   ├── code.constant.js
│   │   │   └── error.constant.js
│   │   ├── controllers
│   │   │   ├── analyze.controller.js
│   │   │   ├── keycloak.controller.js
│   │   │   └── sentence.controller.js
│   │   ├── middleware
│   │   │   ├── error.middleware.js
│   │   │   ├── index.js
│   │   │   ├── keycloak.middleware.js
│   │   │   └── rate-limit.middleware.js
│   │   ├── models
│   │   │   ├── index.js
│   │   │   ├── sentence.js
│   │   │   └── user.js
│   │   ├── repositories
│   │   │   └── sentence.repository.js
│   │   ├── services
│   │   │   ├── analyze.service.js
│   │   │   ├── keycloak.service.js
│   │   │   ├── logger.service.js
│   │   │   └── sentence.service.js
│   │   ├── utils
│   │   │   └── urlencoded.js
│   │   └── validators
│   │       ├── analyze.validator.js
│   │       └── sentence.validator.js
│   ├── config
│   │   └── db.config.js
│   ├── db
│   │   ├── migrations
│   │   │   ├── 20240711180909-create-user.js
│   │   │   └── 20240712105927-create-sentence.js
│   │   └── seeders
│   │       └── 20240712103232-UserSeeder.js
│   └── routes
│       ├── analyze.route.js
│       ├── auth.route.js
│       ├── index.js
│       └── sentence.route.js
├── storage
│   └── logs
│       └── file-2024-07-12.log.log
└── test
    ├── analyze.test.js
```