import {
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import {db} from './firebase';
import {Notification} from '../components/Notifications';

export const getNotificationsFromFirestore = async () => {
  try {
    const queryDocumentData = collectionGroup(db, 'notifications');
    const snaps = await getDocs(queryDocumentData);
    const notifications: Notification[] = snaps.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        createdAt: data.createdAt.toDate().toString(),
        title: data.title,
        description: data.description,
      };
    });

    return notifications;
  } catch (error) {
    console.error('Error getting user from Firestore:', error);
    throw new Error('Error getting user from Firestore.');
  }
};
