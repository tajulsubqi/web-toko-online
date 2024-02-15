import {
  collection,
  getDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
  addDoc,
} from "firebase/firestore"
import app from "./init"
import bcrypt from "bcrypt"

const firestore = getFirestore(app)

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName))
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return data
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapShot = await getDoc(doc(firestore, collectionName, id))
  const data = snapShot.data()

  return data
}

export async function signUp(
  userData: {
    fullname: string
    email: string
    password: string
    role?: string
  },
  callback: Function,
) {
  const q = query(collection(firestore, "users"), where("email", "==", userData.email))

  const snapShot = await getDocs(q)
  const data = snapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  if (data.length > 0) {
    callback(false)
  } else {
    if (!userData.role) {
      userData.role = "member"
    }

    // Hash password
    userData.password = await bcrypt.hash(userData.password, 10)

    await addDoc(collection(firestore, "users"), userData)
      .then(() => callback(true))
      .catch((error) => console.log(error))

    callback(false)
  }
}
