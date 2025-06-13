import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCjmXXC7G9Wz1sLtyHIXev8vpluFaj4g1Y",
  authDomain: "quillora-5b29d.firebaseapp.com",
  projectId: "quillora-5b29d",
  storageBucket: "quillora-5b29d.firebasestorage.app",
  messagingSenderId: "348331199058",
  appId: "1:348331199058:web:242e5961f228fdb1d6ad8b",
  measurementId: "G-NEQC72VDPX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;