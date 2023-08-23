// get the client
export default function handler(req, res){
const mysql = require('mysql2');

const{firstname,lastname,username,password,status} = req.body

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS, 
  database: process.env.DB_DATABASE
});

  if(req.method === 'GET'){
    try{
    connection.query(
      'SELECT * FROM tbl_users',
      function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        res.status(200).json({user: results});
      }
    );
  } catch (error){
    return res.status(500).json({ message: error.message});
  }

  } else if (req.method === 'POST'){
    try{
    res.status(200).json({firstname,lastname,username,password,status});
    const results = connection.query('INSERT INTO tbl_users SET ?',{
      firstname,lastname,username,password,status,
    });
    return res.status(200).json({...req.body, id: results.insertId});
    //res.status(200).json({firstname});
  } catch (error){
    return res.status(500).json({ message: error.message});
  }

  } else if (req.method === 'PUT'){
    try{
      res.status(200).json({
        method: 'แก้ไขสำเร็จ'
      });
    const results = connection.query("UPDATE tbl_users SET ? WHERE id = ?",[
      req.body,
      req.body.id,
    ]);
    return res.status(200).json({...req.body, id: results.insertId});
  } catch (error){
    return res.status(500).json({ message: error.message});
  }
    //res.status(200).json({method:'PUT'});
  } else {
    try{
      res.status(200).json({
        method: 'ลบสำเร็จ'
      });
      const results = connection.query("DELETE FROM tbl_users WHERE id = ?",[req.query.id,]);
      return res.status(200).json({...req.body, id: results.insertId});
    } catch (error){
      return res.status(500).json({ message: error.message});
    }
  }
}

// export default function handler(req, res) {
    //res.status(200).json([
    //{ id:'1', firstname:'Benjarat', lastname:'Muangsan', username:'BenJax', password:'300947',status:'admin'},
    //{ id:'2', firstname:'Benjarat', lastname:'Muangsan', username:'BenJax', password:'300947',status:'user'}
//])
