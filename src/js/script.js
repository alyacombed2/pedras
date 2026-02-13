import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA1f0gUxxIUCAVsirkQeluTPIvX2HVX7a0",
    authDomain: "pedra-533d4.firebaseapp.com",
    projectId: "pedra-533d4",
    storageBucket: "pedra-533d4.firebasestorage.app",
    messagingSenderId: "395241620914",
    appId: "1:395241620914:web:400c78f9a77db4903490ab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ref = doc(db, "likes", "contador");

async function loadLikes(){
    const snap = await getDoc(ref);
    document.getElementById("curtidas").textContent =
        snap.data().valor + " curtidas";
}

loadLikes();

document.getElementById("curtirBtn").onclick = async () => {
    await updateDoc(ref, { valor: increment(1) });
    loadLikes();
};
