import {useState, useRef} from 'react'


export default function UploadAvatar({onAvatarLoad}){  //{onAvatarLoad}
  const inputRef = useRef(null);
  const [image, setImage] = useState();


  function handleImageClick(){
    inputRef.current.click()
  }

 const handleImageChange = (e)=>{
    const file = e.target.files[0];
    setImage(file);
    if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result);
            localStorage.setItem('avatar', reader.result);
          };
          reader.readAsDataURL(file);
        }
         onAvatarLoad && onAvatarLoad(true);
  }

  return(
    <>
  <div className= 'avatar' onClick={handleImageClick}>
  {image ? (<img src={image}/>) : 
  (<div className ='centered'>Choose profile photo</div>)}

  <input 
  type='file' 
  ref={inputRef} 
  style = {{display: 'none'}}
  onChange = {handleImageChange}/>
 </div>

 </>
  )
}