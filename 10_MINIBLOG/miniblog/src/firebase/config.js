import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCA0G8ztZVl6s531Hi-i-FoRk2cwzs3UVw",
	authDomain: "miniblog-4aa20.firebaseapp.com",
	projectId: "miniblog-4aa20",
	storageBucket: "miniblog-4aa20.firebasestorage.app",
	messagingSenderId: "987586245192",
	appId: "1:987586245192:web:c19f06c146d8df81739e7d",
	measurementId: "G-2HTW8ZBNR0",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
