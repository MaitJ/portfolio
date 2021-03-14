const fs = require('fs');
const sizeOf = require('image-size');

const getImageArray = () => {
    const dir = '../client/public/galeriipildid';
    const files = fs.readdirSync(dir);
    const returnArray = files.map((value, index) => {
        const {width, height} = sizeOf(dir + "/" + value);
        return { "key" : index, "img" : value, "width": width, "height": height};

    });

    return returnArray;
};

module.exports.getImageArray = getImageArray;