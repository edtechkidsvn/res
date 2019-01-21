/**
 * development config
 * will replace database config if NODE_ENV === 'development'
 */
export const envConfig: any = {
  database: {
    MONGODB_URI: "mongodb://admin:admin1@ds163054.mlab.com:63054/",
    MONGODB_DB_MAIN: "res",
  }
};
