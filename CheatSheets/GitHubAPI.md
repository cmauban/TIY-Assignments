# [GitHub API](https://developer.github.com/v3/)
Application Programming Interfaces (APIs) lets programs (including scripts) talk to each other.

- The DOM is an API
- jQuery is a JavaScript file with an API

## [Authentication](https://developer.github.com/v3/#authentication)
 - Authentication is hte key to reading and writing private information via the API.

> Do I need to authenticate?

  You don't need too, but to get more requests or do anything interesting with GitHub API requires authentication.

> What can I do with an unauthenticated request?

  

> What _can't_ I do with an unauthenticated request?
  
  retreieve private information.

> How can I authenticate my request?

  there are three ways to authenticate. requests that require authentication will return `404 Not Found` instead of `403 Forbidden`. This prevents accidental leakage of private repos to unauthorized users.

1. First way -- Basic: using your GitHub username and password via Basic Authentication. `-u` flag sets the username, and cURL will prompt you for the password. 
```
$ curl -i -u <your_username> https://api.github.com/users/defunkt

Enter host password for user '<your_username>':
```
2. Second way -- Two-factor: the API will return a `401 Unauthorized` error code for the above request. The easiest way to get around that error is to create an OAuth token and use OAuth authentication instead of Basic Authentication.
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
3. Third way -- Get your own user profile: When properly authenticated, you can take advantage of the permissions associated with your GitHub account. In addition to the same set of public info you received, you also see the non-public info for your user profile.For example, you’ll see a plan object in the response which gives details about the GitHub `plan` for the account.
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

  Yes. authenticated: up to 5,000 requests per hour. unauthenticated: up to 60 requests per hour.

> Is there a way of extending that limit?

  Yes. You can fix the issue by caching API responses and using conditional requests.

> What happens when I hit the limit?

You will receive an error response.

> What if there is a lot of data returned?

> How can I ask for more (or less) data from a request?

> How do I know that there is more data available?
