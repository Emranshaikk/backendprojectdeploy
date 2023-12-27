require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubdata = {
  "login": "Emranshaikk",
  "id": 112551285,
  "node_id": "U_kgDOBrVldQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/112551285?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Emranshaikk",
  "html_url": "https://github.com/Emranshaikk",
  "followers_url": "https://api.github.com/users/Emranshaikk/followers",
  "following_url": "https://api.github.com/users/Emranshaikk/following{/other_user}",
  "gists_url": "https://api.github.com/users/Emranshaikk/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Emranshaikk/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Emranshaikk/subscriptions",
  "organizations_url": "https://api.github.com/users/Emranshaikk/orgs",
  "repos_url": "https://api.github.com/users/Emranshaikk/repos",
  "events_url": "https://api.github.com/users/Emranshaikk/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Emranshaikk/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Shaik Imran",
  "company": null,
  "blog": "",
  "location": "Hyderabad",
  "email": null,
  "hireable": null,
  "bio": "I am learning DevOps and empowering others.",
  "twitter_username": "Imranshaikdev",
  "public_repos": 18,
  "public_gists": 0,
  "followers": 2,
  "following": 9,
  "created_at": "2022-08-31T10:13:31Z",
  "updated_at": "2023-12-24T20:41:01Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('Hi Shaik')
})

app.get("/login", (req, res) => {
    res.send('<h1> Master the Backend project </h1>')
})

app.get("/signup", (req, res)=>{
    res.send("sign up here")
})

app.get("/youtube", (req, res)=>{
    res.send("chai aur code")
} )

app.get("/github", (req, res) => {
  res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

