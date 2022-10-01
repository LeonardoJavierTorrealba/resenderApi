import sql from 'mssql';

const connection = {
    
    startConnection: async(dbSettings) => {
        const pool = await sql.connect(dbSettings);            
        return pool;                
    },

    dynamicSettings:{
        setDBSettings: async(srv, db) => {
            let dbSettings = {user: 'appsgc',
            password: 'UsrSgc159',
            server: srv,
            database: db,
            setTimeout: 900000,
            connectionTimeout: 900000,
            requesTimeout: 900000,
            pool:{ idleTimeoutMillis: 90000 },
            options:{
                encrypt: false, //pasar a true si lo llego a deployar en azure. 
                trustServerCertificate: true, //poner en true si trabajo en local
                }
            }
        
            return dbSettings; 
        }
    },

    staticSettings: {
        prodMega:  {
            user: 'desa',
            password: 'AdMiN5811',
            server: 'ARBUESRV251',
            database: 'MegatlonSGC_Prod_01',
            setTimeout: 300000,
            connectionTimeout: 300000,
            requestTimeout: 300000,
            pool:{
                idleTimeoutMillis: 300000
                },
            options:{
                encrypt: false, //pasar a true si lo llego a deployar en azure. 
                trustServerCertificate: true, //poner en true si trabajo en local
                trustedconnection: true
                }
            },
        qa: {
            user: 'desa',
            password: 'AdMiN5811',
            server: 'ARBUESRV018',
            database: 'MegatlonSGC_Test',
            setTimeout: 900000,
            connectionTimeout: 900000,
            requesTimeout: 900000,
            pool:{
                idleTimeoutMillis: 90000
                },
            options:{
                encrypt: false, //pasar a true si lo llego a deployar en azure. 
                trustServerCertificate: true, //poner en true si trabajo en local
                trustedconnection: true
                }            
        }        
    },
    
    endPoints:{
        replyToMega: "https://mega-sgc-api.azurewebsites.net/api/WebHook/Invoice/Single/Result",
        replyToFiter: "https://fiter-sgc-api.azurewebsites.net/api/WebHook/Invoice/Single/Result",
        resendToMega: "https://mgft-invoicer-api.azurewebsites.net/api/v1/Webhook/ReSendTo/",
        updateByVoucher: "https://mgft-invoicer-api.azurewebsites.net/api/v1/UpdateVoucher/"
    }
}
    


export default connection;
    




