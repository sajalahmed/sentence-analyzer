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
    └── sentence.test.js

```