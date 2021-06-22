const movieModel = require('../model/Model');

function showExhibitionList(req, res) {
    const movieList = movieModel.getExhibitionList();
    //const result = { data:movieList, count:movieList.length };
    console.log('페이지 - list');
    res.render('list', {data: movieList});
}

async function addExhibition(req, res) {
    console.log(req.body);
    const title = req.body.title;
    const image = req.body.image;
    const place = req.body.place;
    const content = req.body.content;

    if (!title) {
        res.status(400).send({error:'title 누락'});
        return;
    }
    else if (!image){
        res.status(400).send({error:'image 누락'});
        return;
    }
    else if (!place){
        res.status(400).send({error:'place 누락'});
        return;
    }
    else if (!content){
        res.status(400).send({error:'content 누락'});
        return;
    }

    try {
        const result = await movieModel.addExhibition(title, image, place, content);
        res.send({msg:'success', data:result});
    }
    catch ( error ) {
        res.status(500).send(error.msg);
    }
}

async function showExhibitionDetail(req, res) {
    try {
        const id = req.params.id;
        console.log('페이지 id : ', id);
        const info = await movieModel.getExhibitionDetail(id);
        res.send(info);
    }
    catch ( error ) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:error.msg});
    }
}



function editExhibition(req, res) {
    
}

function deleteExhibition(req, res) {
    
}

exports.exhibitionController = {
    showExhibitionList,
    showExhibitionDetail,
    addExhibition,
    editExhibition,
    deleteExhibition,
}