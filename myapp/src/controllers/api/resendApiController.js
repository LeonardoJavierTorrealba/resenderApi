import connection from '../../db/connection.js';
import documentsDAO from '../../db/documentsDAO.js';
import fetch from 'node-fetch';
import subsidiariesDB from '../../db/subsidiariesDB.js';
import { response } from 'express';

const resendApiController = {

    

    getProcessBySub: async(req, res) => {
                
        const subsidiaries = subsidiariesDB.Production;
        const dbsResponses = {
            documents: [],
            errors: []
        };
    
        for (let sub of subsidiaries){
            var dbSettings = await connection.dynamicSettings.setDBSettings(sub.server, sub.dataBase);
            try {            
                var pool = await connection.startConnection(dbSettings);
                var result = await pool.request().query(documentsDAO.getPendingsBySubsidiary(sub.idSucursal)); 
                console.log(result.recordset);
                pool.close();
                
            }
            catch (error) {
                console.log(error);
                dbsResponses.errors.push(`No se pudo conectar a la Sucursal ${sub.name}`)
           }
    
    
            try {
                if (result.recordset.length > 0) {
                    let data = result.recordset
                    console.log(data);

                    dbsResponses.documents.push(data);
                }
            } catch (error) {
                console.log(`Sin respuesta de la sub ${sub.name}`);                
            }        

        
            
        } 
        
        dbsResponses.documents = dbsResponses.documents.flatMap(obj => obj)
        res.json(dbsResponses)
        

        },



    
        getProcessFromProd01: async(req, res) => {
            const dbsResponses = {
                documents:"" ,
                errors:""
            };
            try {
                let pool = await connection.startConnection(connection.staticSettings.prodMega);
                var result = await pool.request().query(documentsDAO.getPendingsProd01()); 
                dbsResponses.documents = result.recordset
                console.log(dbsResponses.documents);
            } catch (error) {
                dbsResponses.errors = `No fue posible conectarse a Central`
                console.log(error);
            }                      

            res.json(dbsResponses);


        },

        resendToMega: async(req, res) => {

            let data = req.body;
            let arrayRes = []
            let resUpdate = ""
            let resResend = ""

            const configsResend = {
                method: "POST",
                headers: {
                    "ReplyTo": 'https://mega-sgc-api.azurewebsites.net/api/WebHook/Invoice/Single/Result',
                    "Content-Type": "application/json"
                }
            }

            const configsUpdate = {
                method: "POST",
                headers: {                    
                    "Content-Type": "application/json"
                }
            }


            for (const document of data) {
                // let urlUpdate = connection.endPoints.updateByVoucher + document.invoicerReference;
                let urlResend = connection.endPoints.resendToMega + document.invoicerReference;
                // let responseUpdate = await fetch(urlUpdate, configsUpdate)                
                let responseResend = await fetch(urlResend, configsResend);
                
               
               
                try {    
                    // resUpdate = await responseUpdate.json();
                    resResend = await responseResend.json();
                    console.log(resUpdate);                    
                    console.log(resResend);                    

                    // let resultUpdate =  await JSON.parse(resUpdate.status.description);  
                    let result = await JSON.parse(resResend.results);                                       
                    

                    if(result.status.description == 'success'){
                        
                        document.status = 'Aprobado';                        
                        
                    arrayRes.push(document);
                    console.log(`Documento ${document.idDocumento} de ${document.nombreSucursal}: Aprobado`);
                    }
                    else{
                        document.status = 'No Aprobado'
                        arrayRes.push(document);
                        resResend = `Documento ${document.idDocumento} de ${document.nombreSucursal}: No pudo aprobarse`
                        console.log(resResend);


                    }
                } catch (error) {
                    document.status = 'Error en la solicitud'
                    arrayRes.push(document);
                    resResend = `Documento ${document.idDocumento} de ${document.nombreSucursal}: No pudo aprobarse`
                    console.log(resResend);       
                    
                }             
            }                
            
            res.json(arrayRes);

        }
}


export default resendApiController;