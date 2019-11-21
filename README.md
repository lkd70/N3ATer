# N3ATer
The third iteration of NEATer - The simply `neat` solution to Evony account management

## Getting Started

installing and running N3ATer is as simple as:

```bash
> git clone https://github.com/LKD70/N3ATer
> cd N3ATer
> npm install
> cp .env.example .env
> vi .env # Open the .env file in your editor of choice
> npm test # Or `npm start` for production

```

## Configuration

All configuration is handled in the `.env` file.
This is an environment file for Node.js
All options are documented in the default file named `.env.example`

## Creating A User Profile

Creating a user profile is currently handled through a GraphQL mutation.

The mutation returns a `token` which is supplied as the `x-token` when you're attempting to authorize yourself.

```json
mutation {
  signUp(username: "LKD70", email:"LKD70@MyEmail.com", password: "MySecurePassword123") {
    token
  }
}
```


## Posting Account Data

N3ATer would be useless without some account data.
In order to add data, we generate a private_key on the User profile object

Here's how to get the private_key using a GraphQL query in a cURL request:

```curl
curl 'http://localhost:3500/graphql/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3500' -H 'x-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDY5ZTkzZGFjZmI0NDM3OGJhYjE5YiIsImVtYWlsIjoic29tZXVzZXJlbWFpQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiTEtEZDcwIiwicHJpdmF0ZV9rZXkiOiIwOWU4MDd6cXN5b25hM2J5eDV6eGc2NSIsInB1YmxpY19rZXkiOiJzcTc4bWRnc2FpcXY0cG56cDhpdWsiLCJpYXQiOjE1NzQzNDYzODcsImV4cCI6MTU3NDM0ODE4N30._o7V2J0eXbgo5niuEGU4q6_sPKXyK5MA87JAQB5wHaE' --data-binary '{"query":"query {\n  me {\n    private_key\n  }\n}"}' --compressed
```

This will return a JSON object like the following:

```json
{
  "data": {
    "me": {
      "private_key": "some_private_key"
    }
  }
}
```

Once you have your private key, you can POST your Evony account details using the following script:

```ActionScript
key = "some_private_key"

post /json "http://localhost:3500/graphql" {time: date().getTime(), "query":'mutation{updateAccountWithKey(private_key:"'+key+'",playerBeanObject: '+json_encode(json_encode(player))+'){id\}}'}
result = json_decode($result)
echo result['errors'] ? "an error occurred: {json_encode(result)}" : "Account updated: {result.data.updateAccountWithKey.id}"
```

## Regenerate private_key

Given someone your private_key by mistake? Not a problem!
You can generate a new one simply by using the GraphQL mutation `renewPrivateKey`

```json
mutation {
    renewPrivateKey {
        private_key
    }
}
```

## Development Status

Please note, this is still in early development (less than a days work so far...)
In the future, authentication methods through Passport will be added, as well as a front-end.