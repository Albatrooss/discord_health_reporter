# Discord Health Reporter

## Usage
Send message to discord channel if server is down.
By default checks every minute

## Setup

install dependencies, fill out .env file
```
npm i
cp .env.example .env
```
In discord - edit channel - add Integrations
* Create webhook
* copy url
* add to .env under WEBHOOK_URL
* add url to server health to SERVER_URL

Start the app
```
npm start
```

## Using custom timer
run every 10 seconds
```
CRON_TIMER="*/10 * * * * *" npm start 
```