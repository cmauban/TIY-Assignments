# [GitHub API](https://developer.github.com/v3/)
Application Programming Interfaces (APIs) allows programs (including scripts) talk to each other.
Versus- User inferfaces that allow humans to interact with the program.

APIs used in browsers, scripts and websites that share functionailty with other programs or sites so that programmers can interact with them rather than writing something from scratch.

APIs let you write code that will make a request asking another program or script to do something. They also specify the format in which the response will be given (so that the response can be understood).

- The DOM is an API
- DOM API: pieces- `.querySelector`
- jQuery's interface is written in a JavaScript file with an API
- the DOM and jQuery APIs allow you to access and update a webpage that is loaded in the browser and respond to events.
- jQuery API: functions invoked in a JS function.
- JavaScript API: it's an API for the HTML content. create an obj, call its methods, access its properties, and respond to its events.
- HTML API: angle brackets, = "", all pieces to tell the browser what to do.
- Facebook, Google+ and Twitter APIs let you access and update profiles and create status updates on their platforms.
- MODERNIZER: a script you can use in your pages to tell whether the browser supports features of HTML, CSS, and JS. When you include modernizr script in your page, it adds an object called `Modernizer` which tests whether the browser supports the features that you specified that it should test for. Each feature you want to test becomes a property of that modernizr object and their values are a Boolean that tell you if a feature is supported.

- `geolocation`: how to tell where the user is located
- `localStorage`: store info in the browser (even when user closes tab/window)
- `sessionStorage`: store info in the browser while a tab/window is open

- any headers beginning with `X-` are custom headers and are not included in the HTTP spec. Headers tell you everything you need to know about your current rate limit status.
 - `X-RateLimit-Limit`: the max number of requests that the consumer is permitted to make per hour
 - `X-RateLimit-Remaining`: the number of requests remaining in the current rate limit window
 - `X-RateLimit-Reset`: the time at which the current rate limit window resets in UTC epoch seconds
 
- USER AGENT REQUIRED: all API requests MUST include a valid `User-Agent` header. Requests with no user-agent header will be rejected. ex: `User-Agent: Awesome-Octocat-App`

## [Authentication](https://developer.github.com/v3/#authentication)
 - Authentication is hte key to reading and writing private information via the API.

> Do I need to authenticate?

  You don't need too, but to get more requests or do anything interesting with GitHub API requires authentication.

> What can I do with an unauthenticated request?

  You can make up to 60 requests per hour. Unauthenticated requests are associated with your IP address and not the user making requests.

> What _can't_ I do with an unauthenticated request?
  
  retreieve private information.

> How can I authenticate my request?

  there are three ways to authenticate. requests that require authentication will return `404 Not Found` instead of `403 Forbidden`. This prevents accidental leakage of private repos to unauthorized users. 3 forms:

###1. First way -- HTTP Basic:
using your GitHub username and password via Basic Authentication. `-u` flag sets the username, and cURL will prompt you for the password. `https://USERNAME:PASSWORD@api.github.com/`
```
$ curl -i -u <your_username> https://api.github.com/users/defunkt

Enter host password for user '<your_username>':
```
###2. Second way -- OAuth2 Token (sent as a parameter):
```
$ curl https://api.github.com/?access_token=OAUTH-TOKEN
```
###3. Third way -- OAuth2 Token (sent in a header)
When properly authenticated, you can take advantage of the permissions associated with your GitHub account. In addition to the same set of public info you received, you also see the non-public info for your user profile.For example, you’ll see a plan object in the response which gives details about the GitHub `plan` for the account.
```
$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```

##OAuth:
Basic isn't ideal because you shouldn't give your github username and password to anyone. Applications that need to read or write private information using the API on behalf of another user should use OAuth.
  - OAuth uses tokens, instead of usernames and passwords.
  - tokens provide 2 big features:
    - REVOKABLE ACCESS: users can revoke authorization to third party apps at any time
    - LIMITED ACCESS: users can review the specific access that a token will provide before authorizing a third party app

Normally, tokens are created via a web flow. An application sends users to GitHub to log in. GitHub then presents a dialog indicating the name of the app, as well as the level of access the app has once it’s authorized by the user. After a user authorizes access, GitHub redirects the user back to the application


## [Users](https://developer.github.com/v3/users/)

> How do I ask the API for the profile information for a specific user?
  
  `GET /user/:username` Note: the returned email is the user's publicly visible email address
  
> How do I ask the API for the repository listing for a specific user?

  `GET /user/repos`

> How do I ask the API for the recent, public activity for a specific user?

  `GET /users/:username/repos`

> Is there a limit to the number of requests I can make?

  Yes. authenticated: up to 5,000 requests per hour. unauthenticated: up to 60 requests per hour. Get your current rate limit status- `GET /rate_limit` Accessing this endpoint does not count againt your rate limit.

> Is there a way of extending that limit?

  Yes. You can fix the issue by caching API responses and using conditional requests.

> What happens when I hit the limit?

You will receive an error response. `X-RateLimit-Remaining:0`

> What if there is a lot of data returned?

> How can I ask for more (or less) data from a request?

> How do I know that there is more data available?


##Fetching

###What are the endpoints for fetching…
- An endpoint is any URL that the API understands and will return info back

the profile data for a user?
- https://api.github.com/users/USERNAME

the organizations a user belongs to?
- https://api.github.com/users/USERNAME/orgs
- GET /users/USERNAME/orgs

the repositories a user has created?
- https://api.github.com/users/USERNAME/repos
- GET /users/USERNAME/repors

a filtered list of repositories?
- you can use parameters such as `visibility`, `affilitiation`, `type` and `direction` to filter results.

a sorted list of repositories?
- use the `sort` parameter to sort the results into `created`, `updated pushed`, and `full_name`

public events for a user?
- https://api.github.com/users/USERNAME/events/public

###When fetching public events for a user…

How many results are returned by default?
- the fixed page size is 30 items. Fetching up to 10 pages is supported, for a total of 300 events.

What limitations exist on fetching more results?
- only events created within the past 90 days will be included in timelimes. events older than 90 days wont be included.

What is the basic structure of the results?
- x

What fields are included in each result?
- type, public, payload, repo(id,name,URL), actor (id, login, gravatar_id, avatar_url, url) org(id, login, gravatar_id, url, avatar_url), created_at and id.

What are the data types for each field?
- all data types are represented as Strings expect for the id field. id is represented as a number and the "public" filed which is a Boolean.

What are some of the different values for the type field?
- links, file paths, strings, empty strings, string of numbers, Numbers
```
[
  {
    "type": "Event",
    "public": true,
    "payload": {
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "actor": {
      "id": 1,
      "login": "octocat",
      "gravatar_id": "",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "url": "https://api.github.com/users/octocat"
    },
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "created_at": "2011-09-06T17:26:27Z",
    "id": "12345"
  }
]
```
##How can I use the Github API to...
get all the comments for a particular issue?

add a comment to an issue?

##How can I use the jQuery API to...

get the HTML contents of an element?

create a new HTML element?

add an HTML element to the page?

##How can I use the Lodash API to...

replace placeholders with values from an object?

repeat code for every item of an array?
