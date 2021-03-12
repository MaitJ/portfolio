const fs = require('fs');

const getImageArray = () => {
    const dir = '../client/public/galeriipildid';
    const files = fs.readdirSync(dir);
    const returnArray = files.map((value, index) => {
        return { "key" : index, "img" : value};

    });

    return returnArray;
};

module.exports.getImageArray = getImageArray;