//로컬 테스트용
/*const fs = require('fs');
const data = fs.readFileSync('./model/data.json');
let exhibition = JSON.parse(data);*/

const pool = require('./dbConnection');

exports.getExhibitionList = async () => {
    let connection = await pool.getConnection(async conn => conn);
    let selectSql = 'SELECT * FROM exhibition;';
    let [result] = await connection.query(selectSql);
    connection.release();
    return result;
}

exports.getExhibitionDetail = async (id) => {
    let connection2 = await pool.getConnection(async conn => conn);
    let selectSql = 'SELECT * FROM exhibition WHERE id = ' + id + ';';
    let [result] = await connection2.query(selectSql);
    connection2.release();
    return result;
}

exports.postExhibition = async (title, image, place, content, xy) => {  
    let connection3 = await pool.getConnection(async conn => conn);
    let sql = 'INSERT INTO exhibition (title, image, place, content, xy) values(?, ?, ?, ?, ?)';
    let params = [title, image, place, content, xy];
    let ret = await connection3.query(sql, params);
    connection3.release();
    return ret;
}

exports.deleteExhibitionDetail = async (id) => {
    let connection4 = await pool.getConnection(async conn => conn);
    let selectSql = 'DELETE FROM exhibition WHERE id = ' + id + ';';
    let [result] = await connection4.query(selectSql);
    connection4.release();
    return result;
}

exports.putExhibitionDetail = async (id, title, image, place, content, xy) => {
    let connection5 = await pool.getConnection(async conn => conn);
    let sql = 'UPDATE exhibition SET title=?, image=?, place=?, content=?, xy=? WHERE id=?;';
    let params = [title, image, place, content, xy, id];
    let ret = await connection5.query(sql, params);
    connection5.release();
    return ret;
}