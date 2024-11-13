import { openDB } from 'idb';

const dbPromise = openDB('ble-festival-db', 1, {
  upgrade(db) {
    db.createObjectStore('events');
    db.createObjectStore('userRegistrations');
  },
});

export const saveEventOffline = async (event) => {
  const db = await dbPromise;
  await db.put('events', event, event.id);
};

export const getOfflineEvents = async () => {
  const db = await dbPromise;
  return db.getAll('events');
};

export const saveUserRegistrationOffline = async (registration) => {
  const db = await dbPromise;
  await db.put('userRegistrations', registration, registration.id);
};

export const getOfflineUserRegistrations = async () => {
  const db = await dbPromise;
  return db.getAll('userRegistrations');
};
