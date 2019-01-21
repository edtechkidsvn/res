// default config
const config: any = {
  port: process.env.PORT || 3000,
  env: 'development',
  database: {
    MONGODB_URI: "mongodb://admin:admin1@ds163054.mlab.com:63054/",
    MONGODB_DB_MAIN: "res",
  }
};

// Set the current environment or default to 'development'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
config.env = process.env.NODE_ENV;

export default config;
