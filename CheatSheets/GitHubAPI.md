# [GitHub API](https://developer.github.com/v3/)
Application Programming Interfaces (APIs) lets programs (including scripts) talk to each other.

- The DOM is an API
- jQuery is a JavaScript file with an API

## [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate?

> What can I do with an unauthenticated request?

> What _can't_ I do with an unauthenticated request?

> How can I authenticate my request?
there are three ways to authenticate. requests that require authentication will return `404 Not Found` instead of `403 Forbidden`. This prevents accidental leakage of private repos to unauthorized users.

1. First way -- with some description of what that is
```
// and perhaps some code example?
```
2. Second way -- and more descriptive text
```
// and another code example
```
3. Third way -- yep, include a short description
```
// with another code example
```

## [Users](https://developer.github.com/v3/users/)

> How do I ask the API for the profile information for a specific user?

> Is there a limit to the number of requests I can make?
yes. authenticated: up to 5,000 requests per hour. unauthenticated: up to 60 requests per hour.

Is there a way of extending that limit?
Yes. You can fix the issue by caching API responses and using conditional requests.

What happens when I hit the limit?
You will receive an error response.

What if there is a lot of data returned?

How can I ask for more (or less) data from a request?

How do I know that there is more data available?
