
import Push from 'push.js';

export const initNotifications = async () => {
  const permission = await Push.Permission.request();
  return permission === Push.Permission.GRANTED;
};

export const sendWeatherAlert = (title, body) => {
  Push.create(title, {
    body,
    icon: '/images/icon.png',
    timeout: 5000
  });
};
