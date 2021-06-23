const model = require('../model/Model');

async function showExhibitionList(req, res) {
    const list = await model.getExhibitionList();
    console.log('페이지 : list');
    res.render('list', {data: list});
}

async function showExhibitionDetail(req, res) {
    try {
        const id = req.params.id;
        console.log('페이지 id : ', id);
        const info = await model.getExhibitionDetail(id);
        res.render('detail', {data2: info});
    }
    catch ( error ) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:error.msg});
    }
}

async function addExhibition(req, res) {
    const title = req.body.title;
    const image = req.body.image;
    const place = req.body.place;
    const content = req.body.content;
    const xy = req.body.xy;

    if (!title) {
        res.status(400).send({error:'title 누락'});
        return;
    }

    try {
        const result = await model.postExhibition(title, image, place, content, xy);
        res.send(result);
    }
    catch ( error ) {
        res.status(500).send(error.msg);
    }
}

async function editExhibition(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const image = req.body.image;
    const place = req.body.place;
    const content = req.body.content;
    const xy = req.body.xy;    
    try {
        console.log('페이지 수정 id : ', id);
        const info = await model.putExhibitionDetail(id, title, image, place, content, xy);
        res.send(info);
    }
    catch ( error ) {
        res.status(500).send(error.msg);
    }
}

async function deleteExhibition(req, res) {
    try {
        const id = req.params.id;
        console.log('페이지 삭제 id : ', id);
        const info = await model.deleteExhibitionDetail(id);
        res.send(info);
    }
    catch ( error ) {
        res.status(500).send(error.msg);
    }
}

exports.exhibitionController = {
    showExhibitionList,
    showExhibitionDetail,
    addExhibition,
    editExhibition,
    deleteExhibition,
}