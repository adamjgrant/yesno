# yesno.vote

A simple website for voting yes or no on issues.

# Data modeling

- Comments
- Issues
- Opinions
- Users

All objects can be rated by logged in users.

## Comments
Belongs to Issue

Maybe comments can be added by people tweeting to it with the link to the website, and a hash tag for the topic.

## Issues

Has many Opinions

## Opinions

Belongs to one Issue
Belongs to one User
Has many Comments

Is either a yes or no (Yes attribute is true or false.)

## Users
Has many Opinions

# References

- Integrating social login: [sourcey.com](http://sourcey.com/rails-4-omniauth-using-devise-with-twitter-facebook-and-linkedin/)
