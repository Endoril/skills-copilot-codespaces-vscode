// Create web server to handle comment functions

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db');

// Get all comments for a post
router.get('/post/:id', function(req, res) {
  var id = req.params.id;
  var sql = 'SELECT * FROM Comments WHERE post_id = ?';
  db.query(sql, [id], function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.json(result);
    }
  });
});

// Get all comments for a user
router.get('/user/:id', function(req, res) {
  var id = req.params.id;
  var sql = 'SELECT * FROM Comments WHERE user_id = ?';
  db.query(sql, [id], function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.json(result);
    }
  });
});

// Post a comment
router.post('/', function(req, res) {
  var comment = req.body;
  var sql = 'INSERT INTO Comments SET ?';
  db.query(sql, comment, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.json(result);
    }
  });
});

// Delete a comment
router.delete('/:id', function(req, res) {
  var id = req.params.id;
  var sql = 'DELETE FROM Comments WHERE id = ?';
  db.query(sql, [id], function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.json(result);
    }
  });
});

module.exports = router;