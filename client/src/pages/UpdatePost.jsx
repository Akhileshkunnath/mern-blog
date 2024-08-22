import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage"
import {app} from "../firebase"
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UpdatePost = () => {
  const [file, setFile] = useState(null);
  const [imageUploadProgress , setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null)
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const {postId} = useParams();
  const {currentUser} = useSelector(state=>state.user)
  const navigate = useNavigate();

  useEffect(()=>{
    try {
      const fetchPost = async()=>{
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();
        if(!res.ok){
            console.log(data.message);
            setPublishError(data.message)
            return;
        }
        if(res.ok) {
            setPublishError(null)
            setFormData(data.posts[0]);

        }
      }

      fetchPost();
        
    } catch (error) {
        console.log(error)
        
    }


  },[postId])
  
  

  const handleUploadImage = async()=>{
    try {
      if(!file){
        setImageUploadError("please select an image")
        return;
      }
      setImageUploadError(null)

      const storage = getStorage(app);

      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file); 

      uploadTask.on(
        "state_changed",
        (snapshot)=>{
          const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          setImageUploadProgress(progress.toFixed(0))
        }, (error)=>{
          setImageUploadError("image uplaod failed");
          setImageUploadProgress(null);
        }, ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
            setImageUploadError(null);
          setImageUploadProgress(null);
          setFormData({...formData, image:downloadURL})
          });
        }
      )
      
    } catch (error) {

      setImageUploadError("image upload failed");
      imageUploadProgress(null);
      
    }

  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try {
      const res = await fetch(`/api/post/updatepost/${formData._id}/${currentUser._id}`, {
        method:"PUT",
        headers :{
          "Content-Type" : "application/json",
        },
        body : 
          JSON.stringify(formData)
        
      });

      const data = await res.json();

      if(!res.ok) {
        setPublishError(data.message);
        return
      }
     
       if(res.ok) {
        setPublishError(null)
        navigate(`/post/${data.slug}`)
       }
    } catch (error) {
      setPublishError("something went wrong")
      
    }

  }
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>

        <h1 className='text-center text-3xl my-7 font-semibold'>Update a post</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

            <div className='flex flex-col gap-4 md:flex-row justify-between'>
                <TextInput className='flex-1' type='text' placeholder='Title' required id='title' onChange={(e)=>{setFormData({...formData, title: e.target.value})}}
                
                value={formData.title}/>
           <Select onChange={(e)=>{
            setFormData({...formData, category : e.target.value})
           }} value={formData.category}>
            <option value={"uncategorized"}>Select a Category</option>
            <option value={"JavaScript"}>JavaScript</option>
            <option value={"reactjs"}>React.JS</option>
            <option value={"nextjs"}>Next.JS</option>
            
           </Select>
            </div>

            <div className='flex gap-4 justify-between border-4 border-teal-500 border-dotted p-3'>
                <FileInput type="file" accept='image/*' onChange={(e)=>{setFile(e.target.files[0])}}/>
                <Button type="button" gradientDuoTone={"purpleToBlue"} size={"sm"} outline onClick={handleUploadImage} disabled={imageUploadProgress}>
                  
                  {
                    imageUploadProgress ? (
                      <div className='w-16 h-16'>
                        <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress || 0 } %`}/>

                      </div>
                      
                    ) : "Upload Image"
                  }
               
                  </Button>

            
            </div>
            {
              imageUploadError && (<Alert color={"failure"}>{imageUploadError}</Alert>)
            }
            {
              formData.image && (<img src={formData.image} alt='upload' className='w-full h-72 object-cover'/>)
            }
            <ReactQuill value={formData.content} className='h-72 mb-12' theme='snow' placeholder='write something...' required onChange={(value)=>{
                 setFormData({...formData, content : value})
            }}/>
            <Button type='submit' gradientDuoTone={"purpleToPink"}>Update post</Button>

            {
              publishError && <Alert className='mt-5' color={"failure"}>{publishError}</Alert>
            }


        </form>

        
        
        </div>
  )
}

export default UpdatePost