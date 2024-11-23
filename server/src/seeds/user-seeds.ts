import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'JollyGuru', password: 'password' },
    { username: 'SunnyScribe', password: 'password' },
    { username: 'RadiantComet', password: 'password' },
  ], { individualHooks: true });
};


// SIGNUP
// GRAB USERNAME AND PASSWORD FROM FRONTEND
// HASH THE PASSWORD IN THE SERVER SIDE (AUTH.TS) (/SIGNUP ROUTE)
// STORED IN THE TABLE

// LOGIN
// LOGIN FORM IN THE FRONTNED (REACT)
// PASSES THE DETAILS TO THE BACKED (AUTH-ROUTES.TS --> login)
// CHECK IF USERNAME IS SAME (john)
  // GET THE PASSWORD OF THAT USER FROM TABLE (john's HASHED password)
  // COMPARE HASHED PASSOWRD WITH PASSWORD FROM THE FORM
  // GENERATE A TOKEN USING JWT IN SERVERSIDE
  // PASS THE TOKEN IN THE FRONTEND

// FRONTEND
  // STORES THAT TOKEN IN LOCALSTORAGE
  // GOT TO A DIFFERENT PAGE IF USER TOKEN NOT EXPIRED IT WONT ASK FOR DETAILS ( HEADER FROM FRONTEND)