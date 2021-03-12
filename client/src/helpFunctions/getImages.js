export const getImages = (setImageList) => {
    fetch('http://localhost:3001/getimages')
    .then(res => res.json())
    .then(json => setImageList(json));
};
