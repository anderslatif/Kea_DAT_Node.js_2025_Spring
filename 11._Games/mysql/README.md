# Running the example

## About

This example runs a MySQL server instance in a Docker container. The setup is defined [docker-compose.yml](./docker-compose.yml)

The database is initialized with the schema as defined in [`schema.sql`](./schema.sql). The file also seeds the database with some initial data.

Node.js uses the `mysql2` package as the MySQL driver. 

---

## Get started

1. Start Docker and run the following command in this folder:

```bash
$ docker-compose up
```

Note that the MySQL server exposes port `3307` instead of the default `3306` port. This is to avoid conflicts with locally running 


2. Copy the `.env.sample` file to `.env`. The values should be:

```env
MYSQL_ROOT_PASSWORD=rootpass
MYSQL_DATABASE=appdb
MYSQL_USER=appuser
MYSQL_PASSWORD=apppass
MYSQL_PORT=3307
```

3. Install the `mysql2` driver:

```bash
$ npm install
```

4. Run the file:

```bash
$ node ./showcaseMySQL.js
```

You should be seeing the following output:

```javascript
[
  {
    id: 1,
    title: 'Tux Kart',
    short_description: null,
    genre: null,
    runtime_environment_id: 1
  },
  {
    id: 2,
    title: 'Hogwarts Legacy',
    short_description: null,
    genre: null,
    runtime_environment_id: null
  }
]
```