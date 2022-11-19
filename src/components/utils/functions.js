//* ADD USER */
import { firebase } from "./firebase";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import { toastSuccessNotify } from "./toastify";

export const addUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    name: info.name,
    phone: info.phone,
    gender: info.gender,
  });
  toastSuccessNotify("Successfully added");
};

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, "users/" + userId), {
//     username: name,
//     email: email,
//     profile_picture: imageUrl,
//   });
// }

//* READ INFO */

// import { getDatabase, ref, onValue} from "firebase/database";

// const db = getDatabase();
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

export const useFetch = () => {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setList(userArray);
      setLoading(false);
    });
  }, []);
  return { loading, list };
};

//* DELETE */

export const handleDelete = (id) => {
  const db = getDatabase(firebase);
  //   const userRef = ref(db, "users/");
  remove(ref(db, "users/" + id));
  toastSuccessNotify("Successfully deleted");
};

//* EDİT */

export const upDataUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const updates = {};
  updates["users/" + info.id] = info;
  toastSuccessNotify("Successfully edited");
  return update(ref(db), updates);
};
