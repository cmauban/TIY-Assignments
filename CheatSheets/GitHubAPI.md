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
###2. Second way -- Two-factor:
the API will return a `401 Unauthorized` error code for the above request. The easiest way to get around that error is to create an OAuth token and use OAuth authentication instead of Basic Authentication.
```
$ curl -i -u <your_username> https://api.github.com/users/defunkt

Enter host password for user '<your_username>':

HTTP/1.1 401 Unauthorized
X-GitHub-OTP: required; :2fa-type

{
  "message": "Must specify two-factor authentication OTP code.",
  "documentation_url": "https://developer.github.com/v3/auth#working-with-two-factor-authentication"
}
```
###3. Third way -- Get your own user profile:
When properly authenticated, you can take advantage of the permissions associated with your GitHub account. In addition to the same set of public info you received, you also see the non-public info for your user profile.For example, you’ll see a plan object in the response which gives details about the GitHub `plan` for the account.
```
$ curl -i -u <your_username> https://api.github.com/user

{
  ...
  "plan": {
    "space": 2516582,
    "collaborators": 10,
    "private_repos": 20,
    "name": "medium"
  }
  ...
}
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


###Fetching
- What are the endpoints for fetching…

- the profile data for a user?

the organizations a user belongs to?
- GET /users/:username/orgs

the repositories a user has created?
- GET /users/:username/repors

- a filtered list of repositories?

- a sorted list of repositories?

- public events for a user?

- When fetching public events for a user…

- How many results are returned by default?

- What limitations exist on fetching more results?

- What is the basic structure of the results?

- What fields are included in each result?

- What are the data types for each field?

- What are some of the different values for the type field?
