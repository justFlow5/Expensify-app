import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  console.log("NODE_ENV",process.env.NODE_ENV)
  console.log("API_KEY",process.env.APP_KEY)

firebase.initializeApp(firebaseConfig);


const database = firebase.database();
const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider,  database as default};




// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   isSingle: false,
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   },
//   job: {
//       title: 'software developer',
//       company: 'Amazon'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// // database.ref().set('This is my data.');

// // database.ref('age').set(27);
// // database.ref('location/city').set('New York');

// // database.ref('attributes').set({
// //   height: 73,
// //   weight: 150
// // }).then(() => {
// //   console.log('Second set call worked.');
// // }).catch((e) => {
// //   console.log('Things didnt for the second error', e);
// // });

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //          console.log('The item has been removed');
// //     }).catch((err) => {
// //         console.log("This failed.", err);
// //     })


//     // database.ref().on('value', (snapshot) => {
//     //     const name = database.ref('name').once('value');
//     //     const title = database.ref('job/title').once('value');
//     //     const company = database.ref('job/company').once('value');
//     //     console.log(`${name} is a ${title} at ${company}.`);
//     // }, (err) => {
//     //     console.log('This FAILED', err);
//     // });

//     // setTimeout(() => {
//     //     database.ref('name').set('Michael');
//     // },
//     // 3000);

//     // setTimeout(() => {
//     //     database.ref('job/title').set('web-developer');
//     // },
//     // 6000);

//     // setTimeout(() => {
//     //     database.ref('job/company').set('Google');
//     // },
//     // 9000);

    
//     database.ref('expense').push({
//         description: 'electricity',
//         note: '',
//         amount: 5000,
//         createdAt: 1003332100
//     });

//     database.ref('expense').push({
//         description: 'rent',
//         note: '',
//         amount: 1092,
//         createdAt: 10000
//     });

//     database.ref('expense').push({
//         description: 'rent',
//         note: '',
//         amount: 320,
//         createdAt: 10001200011
//     })

//     // database.ref('expense').on('value', (snapshot) => {
//     //     const expenses = [];

//     //     snapshot.forEach(childSnapshot => {
//     //         const id = childSnapshot.key;
//     //         expenses.push(
//     //             {
//     //                 id,
//     //                 ...childSnapshot.val()
//     //             }
//     //         );
//     //         console.log(expenses);
//     //     })
//     // }, (err) => {
//     //     console.log('This failed.', err);
//     // })

//     database.ref('expense').on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     })