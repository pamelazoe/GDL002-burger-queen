import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDENzy-F6b1xHfUuxcu2AYEpp06st7xsRA",
    authDomain: "burger-queen-spa.firebaseapp.com",
    databaseURL: "https://burger-queen-spa.firebaseio.com",
    projectId: "burger-queen-spa",
    storageBucket: "burger-queen-spa.appspot.com",
    messagingSenderId: "316963188460",
    appId: "1:316963188460:web:12cc03dedda8da18"
  };

  firebase.initializeApp(firebaseConfig);

//   firebase.database().ref().set({
//     menu:{  
//         meal:{
//             hamburger:{
//                 item:'Hamburguesa',
//                 flavor: ['Res', 'Pollo', 'Vegetales']}
//         }
//     }
//     });

const database = firebase.database();
database.ref('menu')
.once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
})
.catch((e) => {
    console.log('Error fetching data', e)
})