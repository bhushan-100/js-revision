const course = {
    coursename :"Be the best coder",
    price:"555",
    instructor:"Bhushan"
}
const {instructor: I}=course
console.log(I)
//array bhi destrcuture hota hai but rarely used hota hai
const github = JSON.parse(`{
  "login": "bhushan-100",
  "id": 129850459,
  "node_id": "U_kgDOB71cWw",
  "avatar_url": "https://avatars.githubusercontent.com/u/129850459?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/bhushan-100",
  "html_url": "https://github.com/bhushan-100",
  "followers_url": "https://api.github.com/users/bhushan-100/followers",
  "following_url": "https://api.github.com/users/bhushan-100/following{/other_user}",
  "gists_url": "https://api.github.com/users/bhushan-100/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/bhushan-100/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/bhushan-100/subscriptions",
  "organizations_url": "https://api.github.com/users/bhushan-100/orgs",
  "repos_url": "https://api.github.com/users/bhushan-100/repos",
  "events_url": "https://api.github.com/users/bhushan-100/events{/privacy}",
  "received_events_url": "https://api.github.com/users/bhushan-100/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Bhushan Jadhav",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "TE CSE student at SPIT Mumbai",
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-04-04T10:26:12Z",
  "updated_at": "2025-06-28T10:13:57Z"
}`)
console.log(github)
//API can return array of ojects like this or mixture of objects, strings ,arrays etc.
//here it was object is json format