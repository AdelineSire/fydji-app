# Fydji-app

## Application architecture

This repo contains "App", the blue part of the architecture shown below.

![architecture diagram](/Fydji.drawio.png)

## Features

### Data processing

- Takes raw data from job offers in the database
- Counts specified keywords
- Formats salary
- Extracts host name from URL
- Saves the reult in the database

### Subscribtion handling

- Saves new users in the database
- Removes users from the database when they unsubscribe

### Emails sending

- Gets job offers data from the database
- Fills the email template with data
- Gets users emails from the database
- Sends an email to all registered users
- Marks job offers as sent in the database to prevent from sending them multiple times

## Installation

### Environment variables

| Clé              | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| `EMAIL_HOST`     | email sender parameter                                      |
| `EMAIL_USERNAME` | idem                                                        |
| `EMAIL_PASSWORD` | idem                                                        |
| `EMAIL_PORT`     | idem                                                        |
| `MONGODB_URI`    | Database URI                                                |
| `HOST`           | Hostname of the application for the image sent in the email |
