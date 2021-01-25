import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDUw9gGtaHHfYli3O_po72blyw_xlrmtGc",
  authDomain: "crown-db-8527e.firebaseapp.com",
  databaseURL: "https://crown-db-8527e.firebaseio.com",
  projectId: "crown-db-8527e",
  storageBucket: "crown-db-8527e.appspot.com",
  messagingSenderId: "1003625067979",
  appId: "1:1003625067979:web:164e6579f1ba163181724e",
  measurementId: "G-BN0LM8Y0ZR",
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        creatAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
export const addCollectionAndDocument = async (collectionKey, ObjectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  ObjectToAdd.forEach((element) => {
    const newDocumentRef = collectionRef.doc();

    batch.set(newDocumentRef, element);
  });
  return await batch.commit();
};
export const addMesseges=async(message)=>{

 firestore.collection("messages").doc().set(message)
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}
export const convertCollectionSnapshotToMap = (collection) => {
  const collectionArray = collection.docs.map((document) => {
    const { items, title } = document.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: document.id,
      title,
      items,
    };
  });
  return collectionArray.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
