/**
 * Server configuration
 */
const port = process.env.DEV ? 5000 : 8081;
const morganMode = process.env.Dev ? 'dev' : 'tiny';

/**
 * MongoDB credentials
 */
const mongoOpt = {
    user: 'admin',                            // DB Username
    pass: 'root',                             // DB 
    dbName: 'local'
  };

/**
 * MongoDB URL. Can be a local or a remote one.
 */
const mongoDB = 'mongodb://localhost:27017/local'

module.exports = {
    port,
    morganMode,
    mongoDB,
    mongoOpt
};