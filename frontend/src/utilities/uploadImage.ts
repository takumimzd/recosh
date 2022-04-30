import firebase, { storage } from '../../firebase'

const uploadImage = (uploadImage: File) => {
  const next = (snapshot: any) => {
    // const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    // console.log(percent + "% done");
  }

  const error = (error: any) => {
    console.log(error)
  }

  const uploadTask = storage.ref(`/images/${uploadImage.name}`).put(uploadImage)
  // eslint-disable-next-line import/no-named-as-default-member
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, next, error)

  return storage
}

export default uploadImage
