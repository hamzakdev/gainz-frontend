import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import app from './firebase'
import axios from 'axios'
import { registerSuccess } from '../redux/userRedux';


// UPLOADING PROFILE PICTURE TO FIREBASE WHILE REGISTERING A NEW USER

export const firebaseRegister = async(dispatch,pfp,name,email,password)=>{
    if(pfp){
        const filename = new Date().getTime() + pfp.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, filename)
        const uploadTask = uploadBytesResumable(storageRef, pfp);
    
    
        uploadTask.on('state_changed', 
        (snapshot) => {
          const progress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;  
            case 'running':
              console.log('Upload is running');
              break;
              default:
          }	
        }, 
        (error) => {
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            const uploadFile = async ()=>{
                const {data} = await axios.post(`https://jungle-green-sea-urchin-wig.cyclic.app/api/users/register`, {name,email,password, profilePic:downloadURL}, {headers: {"Content-Type":"application/json", }});
        dispatch(registerSuccess(data))

            }
            uploadFile()
        
         
           
          });
      }
      );
    }
}






