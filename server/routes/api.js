import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';
import {myConnect} from '../db';
import Friend from '../friend';

const router = express.Router();

router.get('/people', (req, res) => {
  let pal = new Friend({firstName: "Troy", lastName: "Miles", gender: "Male"});
  // pal.save((err, pal) => {
  //   if(err){
  //     console.log("WTF!");
  //   }
  //   console.log("Eureka!");

  Friend.find((err, pals) => {
    const time = new Date();
    res.write("Hello API People: " + time.toISOString() + " " + pals[0]);
    res.end();
  });
  console.log("Exit People API");
});

router.get('/', (req, res) => {
  const time = new Date();
  res.write("Hello API: " + time.toISOString());
  res.end();
});

module.exports = router;
