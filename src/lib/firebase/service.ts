import {
  collection,
  getDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"
import app from "./init"

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

// service untuk sign in
export async function retrieveDataByField(
  collectionName: string,
  field: string,
  value: string,
) {
  const q = query(collection(firestore, collectionName), where(field, "==", value))

  const snapShot = await getDocs(q)
  const data = snapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return data
}

// service untuk add (panggil dimana yang dibutuhkan)
export async function adddata(collectionName: string, data: any, callback: Function) {
  await addDoc(collection(firestore, collectionName), data)
    .then(() => {
      callback(true)
    })
    .catch((error) => {
      callback(false)
      console.log(error)
    })
}

// service untuk update
export async function updateData(
  collectionName: string,
  id: string,
  data: any,
  callback: Function,
) {
  const docRef = doc(firestore, collectionName, id)
  await updateDoc(docRef, data)
    .then(() => {
      callback(true)
    })
    .catch((error) => {
      callback(false)
      console.log(error)
    })
}

// service untuk delete
export const deleteData = async (
  collectionName: string,
  id: string,
  callback: Function,
) => {
  const docRef = doc(firestore, collectionName, id)
  await deleteDoc(docRef)
    .then(() => {
      callback(true)
    })
    .catch((error) => {
      callback(false)
      console.log(error)
    })
}
