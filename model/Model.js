const fs = require('fs');

const data = fs.readFileSync('./model/data.json');
let exhibition = JSON.parse(data);
console.log('data loaded');

exports.getExhibitionList = () => {
    if (exhibition) {
        return exhibition;
    }
    else {
        return [];
    }
}

exports.getExhibitionDetail = (id) => {
    return new Promise((resolve, reject) => {
        for (var temp of exhibition ) {
            if ( temp.id == id ) {
                resolve(temp);
                return;
            }
        }
        reject({msg:'Can not find exhibition', code:404});
    });
}

exports.addExhibition = (title, image, place, content) => {    
    return new Promise((resolve, reject) => {
        let last = this.exhibition[exhibition.length - 1];
        let id = last.id + 1;

        let newExhibition = {id, title, image, place, content};
        exhibition.push(newExhibition);

        resolve(newExhibition);
    });
}