import subsidiariesDB from './db/subsidiariesDB.js'
import connection from './db/connection.js';
import documentsDAO from './db/documentsDAO.js'


// let sub = subsidiariesDB.Production[18];
// console.log(sub);

//             var dbSettings = await connection.dynamicSettings.setDBSettings(sub.server, sub.dataBase);
//             try {            
//                 var pool = await connection.startConnection(dbSettings);
//                 var result = await pool.request().query(documentsDAO.getPendingsBySubsidiary(sub.idSucursal)); 
//                 console.log(result.recordset);
                
//             }
//             catch(error){
//                 console.log(error);
//             }

let stateDoc = "Pendiente"

switch (stateDoc) {
    case "Aprobado":  console.log('#0ced2a'); 
            console.log("salgo por aprobado");               
        break;
    case "Cargando...":  console.log('white');
    console.log("salgo por cargando");                     
        break;
    case 'Pendiente':  console.log('yellow');        
    console.log("salgo por pendiente");                             
        break;
    default: console.log('red');
    console.log("salgo por otra cosa"); 
    console.log(stateDoc);                   
}