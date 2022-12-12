import subsidiariesDB from './db/subsidiariesDB.js'
import connection from './db/connection.js';
import documentsDAO from './db/documentsDAO.js'
import sql from 'mssql';
import moment from 'moment/moment.js';


function diasEnUnMes(fecha) {
    let YYYYM = moment(fecha).format('YYYY-M')    
    let result = moment(YYYYM, 'YYYY-M').daysInMonth();
	return result;
}

// console.log(diasEnUnMes(10, 2022));


function sumarDias(fecha, daysAdd){
   let result =  moment(fecha).add(daysAdd, 'days').format('YYYY-MM-DD HH:mm:ss.000');
    return fecha;
}

let fecha = new Date('2022-10-31');
// console.log(sumarDias(fecha, 20));


let row = {
    fechaInicio: '2022-10-01 00:00:00.000',
    fechaFin: '2022-09-01 00:00:00.000'
}

let momentfecha = moment(row.fechaInicio).format('YYYY-MM-DD HH:mm:ss.000');

let daysAdd = (diasEnUnMes(momentfecha)) -1;
console.log(daysAdd);
// row.fechaFin = moment(momentfecha).add(daysAdd, 'days').format('YYYY-MM-DD HH:mm:ss.000');
// console.log(row.fechaFin);



















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

// let stateDoc = "Pendiente"

// switch (stateDoc) {
//     case "Aprobado":  console.log('#0ced2a'); 
//             console.log("salgo por aprobado");               
//         break;
//     case "Cargando...":  console.log('white');
//     console.log("salgo por cargando");                     
//         break;
//     case 'Pendiente':  console.log('yellow');        
//     console.log("salgo por pendiente");                             
//         break;
//     default: console.log('red');
//     console.log("salgo por otra cosa"); 
//     console.log(stateDoc);                   
// }