import { messaging } from '../firebase';
import { getToken } from 'firebase/messaging';

export const requestNotificationPermission = async () => {
  try {
    await Notification.requestPermission();
    const token = await getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' });
    console.log('Notification permission granted. Token:', token);
    // Send this token to your server to associate it with the user
  } catch (error) {
    console.error('Unable to get permission for notifications', error);
  }
};

export const setupPushNotifications = () => {
  messaging.onMessage((payload) => {
    console.log('Message received:', payload);
    // Display the notification to the user
    new Notification(payload.notification.title, {
      body: payload.notification.body,
      icon: '/icon-192x192.png'
    });
  });
};
