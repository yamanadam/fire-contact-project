//* ADD USER */
import { firebase } from "./firebase";
import { getDatabase, ref, set, push } from "firebase/database";

export const addUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    name: info.name,
    phone: info.phone,
    gender: info.gender,
  });
};

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, "users/" + userId), {
//     username: name,
//     email: email,
//     profile_picture: imageUrl,
//   });
// }
