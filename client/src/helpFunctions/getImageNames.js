import axios from 'axios';
export const getImageNames = (setImageList) => {
   axios.get("http://localhost:3001/getimages").then((response) =>{
       setImageList(response.data);
   }).catch((error) =>{
       if (error) {
           console.log(error);
       }
   });
};
