# Discord Health Reporter

## Usage
Send message to discord channel if server is down.
By default checks every minute

## Setup
install dependencies, fill out .env file, and run
```
npm i
cp .env.example .env
npm start
```

## Using custom timer
run every 10 seconds
```
CRON_TIMER="*/10 * * * * *" npm start 
```