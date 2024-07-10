# mongodb-memory-server-handler

The module handles [mongodb-memory-server](https://www.npmjs.com/package/mongodb-memory-server) connections and clearing database collections.

Created to work with [mochajs](https://mochajs.org/) BDD and TDD.

### Function
The functionality is build to test code functionality at ease. With minimal additional coding required for setting up the mongodb-memory-server.

#### connectDb
Initiates MongoDB Server and creates connection to the database.

#### clearDb
Clears all database collections.

#### closeDb
Drops the database, closes the connection and stops the MongoDB server.

### Usage with mochajs

Initiating connection at the start of the test
```
import { connectDb, clearDb, closeDb } from "mongodb-memory-server-handler";

describe("Referral Service Test", () => {
    before(async() => {
        await connectDb();
    })
```

Clearing collection after every test case
```
afterEach(async () => {
    await clearDb();
});
```

Closing database connection after test run
```
after(async () => {
    await closeDb();
});
```