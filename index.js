require('dotenv/config');
const axios = require('axios');
const CronJob = require('cron').CronJob;

const sendError = async (content) => {
  const username = 'HealthBot';
  await axios.post(
    process.env.WEBHOOK_URL,
    {
      content,
      avatar_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/OOjs_UI_icon_alert_destructive.svg/1200px-OOjs_UI_icon_alert_destructive.svg.png',
      username,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

new CronJob(
  process.env.CRON_TIMER ?? '* * * * *',
  async () => {
    try {
      const { data } = await axios.get(process.env.SERVER_URL);
      if (!data) {
        sendError('[ERROR] Server is down!');
        return;
      }
    } catch (error) {
      console.log('error', error);
      sendError('[ERROR] Server is down!');
    }
  },
  null,
  true,
  'America/Toronto',
  null,
  true
);
