import fetch from 'node-fetch'

let lotesPrimeros = [
    '2002-4282',
    '2002-4274',
    '2002-4267',
    '2002-4257',
    '2002-4245',
    '2002-4239',
    '2002-4228',
    '2002-4218',
    '2002-4212',
    '2002-4189',
    '2002-4188',
    '2002-4161',
    '2002-4160',
    '2002-4159',
    '2002-4154',
    '2002-4147',
    '2002-4140'
]

let arrayRes = [];
       
const configs = {
    method: "POST",
    headers: {
        "ReplyTo": 'https://fiter-sgc-api.azurewebsites.net/api/WebHook/Invoice/Batch/Result',
        "Content-Type": "application/json", 
        "Connection":"keep-alive"
    }
}


for (const batch of lotesPrimeros) {
   const result = await fetch('https://mgft-invoicer-api.azurewebsites.net/api/v1/Webhook/Batch/ReSendBatch/' + batch, configs);
   const resultjson = await result.json();
   console.log(resultjson);
   console.log();
   arrayRes.push(result);
}

//78-16



