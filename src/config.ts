import dotenv from 'dotenv';
dotenv.config();

export const { PGPORT, PGHOST, PGUSERNAME, PGDATABASE, PGPASSWORD } =
   process.env;

// console.log('Loaded env:', {
//    PGPORT,
//    PGHOST,
//    PGUSERNAME,
//    PGDATABASE,
//    PGPASSWORD,
// });
