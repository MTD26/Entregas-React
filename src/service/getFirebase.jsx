import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCCnx8_jhiSJhIg4Ul6F6lBRJDHJp9ETTM",
    authDomain: "tiendamarcos-1662d.firebaseapp.com",
    projectId: "tiendamarcos-1662d",
    storageBucket: "tiendamarcos-1662d.appspot.com",
    messagingSenderId: "1063308008256",
    appId: "1:1063308008256:web:bd6ebd96a919d36f8278a5"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){
    return firebase.firestore(app)

}
