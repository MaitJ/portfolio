import axios from 'axios';
export const getImages = (setImageList) => {
   axios.get("http://localhost:3001/getimages").then((response) =>{
       setImageList(response.data);
   }).catch((error) =>{
       if (error) {
           console.log(error);
       }
   });
};
