# Petful

Petful is an app for a shelter that only can hold one dog and one cat at a time. Users to add their name to a queue for pet adoption. When the pet is available, the user can choose if they want to keep it.

This project utilizes the queue data structure, using JavaScript classes.

This is a repository of the Petful server.

View the live app [Here](https://petful-client-template-eight.vercel.app/)

Check out the client repository [Here](https://github.com/Rachanastasia/petful-client)

## Images

![](screenshots/petful-screenshot-1.png)

![](screenshots/petful-screenshot-2.png)

![](screenshots/petful-screenshot-3.png)

## Tech Stack

- Node.js
- Express
- Deployed with Heroku

## How to use the API

Access the API by making a request to [https://petful-rachel.herokuapp.com](https://petful-rachel.herokuapp.com)

### /api/people

#### GET

Get all people in the queue.

#### POST

Add person to queue. Send {person: name} in request body.

#### DELETE

Remove first person in queue.

### /api/pets

#### GET

Returns the cat and dog at the head of the queue

### /api/cats

#### GET

Gets the cat at the head of the queue

#### DELETE

Removes the cat at the front of the queue and moves it to the back of the queue

### /api/dogs

#### GET

Gets the dog at the head of the queue

#### DELETE

Removes the dog at the front of the queue and moves it to the back of the queue
