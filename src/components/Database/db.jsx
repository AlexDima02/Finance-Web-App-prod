// import * as Database from 'rxdb';
// import { createRxDatabase } from 'rxdb';
// import accountsSchema from './Schema';
import Dexie from "dexie";


// Database plugins
// import { addRxPlugin } from 'rxdb';
// import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
// import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

// addRxPlugin(RxDBDevModePlugin);

// Create database 
const db = new Dexie('myDatabase');
db.version(5).stores({
  data: '++id, name, type, ammounts, currency', // Primary key and indexed props
  items: '++id, name, from, money, date, currency',
});












// const initialize = async () => {

//     // Debug errors
//     if (process.env.NODE_ENV !== "production") {
//         await import('rxdb/plugins/dev-mode').then(
//             module => addRxPlugin(module)
//         );
//     }

//     // create RxDB database
//     const db = await createRxDatabase({
//         name: 'test_database',
//         storage: getRxStorageDexie(),       // <- RxStorage
//         password: 'myPassword',             // <- password (optional)
//         multiInstance: true,                // <- multiInstance (optional, default: true)
//         eventReduce: true 
//     });
  
//     // create a collection
//     const collection = await db.addCollections({
        
//         characters: {
//             schema: accountsSchema
//         },
    
//     });
  
  
//     return db;

// };

// export { initialize };
export default db;
// export default class db extends Database{
    
//     constructor(data){
        
//         this.db = new PouchDB(data);
        


//     }
  
    
//     async showData() {

//         let allData = await this.db.allDocs({   include_docs: true  });
//         let data = {};
        
//         allData.rows.forEach(n => data[n.id] = n.doc);
        
//         return data;
//     }

//     async createData(someData){

//         someData.createdAt = new Date();
//         someData.updatedAt = new Date();


//         const res = await this.db.post({...someData});

//         return res;
//     }
    
// }


// This dont even being taken into consideration
// module.exports = {db};
// The problem is still that the module is not being exported because the class cant extend an empty object
