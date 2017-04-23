import mongoose from 'mongoose';
import serverConfig from './config';

mongoose.Promise = global.Promise;

class db {
  connection;

  constructor(url, callback){
    this.connection = mongoose.connect(url, (error) => {
      if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
      } else {
        console.log("MongoDB is online");
      }
    });
  }
}

export const myConnect = new db(serverConfig.mongoURL);
