import subsidiariesDB from './db/subsidiariesDB.js'
import connection from './db/connection.js';
import documentsDAO from './db/documentsDAO.js'


let sub = subsidiariesDB.Production[18];
console.log(sub);

            var dbSettings = await connection.dynamicSettings.setDBSettings(sub.server, sub.dataBase);
            try {            
                var pool = await connection.startConnection(dbSettings);
                var result = await pool.request().query(documentsDAO.getPendingsBySubsidiary(sub.idSucursal)); 
                console.log(result.recordset);
                
            }
            catch(error){
                console.log(error);
            }