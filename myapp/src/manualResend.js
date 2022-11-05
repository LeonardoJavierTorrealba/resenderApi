import fetch from 'node-fetch'

let lotesPrimeros = [
    'c99466f281c14141b033aae473ea0cea-MjAxNi01MzYzNzk=',
    '2c7b71227cc54f56acf385e6672155bf-MjAxNi01MzU3OTA=',
    'fd5ebc77f96b4be09239a69f16b64e21-MjAxNi01MzU3NzQ=',
    '8611461d27e441af9df7a3506e3cc467-MjAxNi01MzU3NjU=',
    '75cc497fca0b469b9eb8f933b24d2329-MjAxNi01MzU3Mjk=',
    'b92736587b7842ab974b3ed2a71dced8-MjAxNi01MzYzMDU=',
    '41f0d8dd6d09440ca4ccbf3cf4c8c83d-MjAxNi01MzYyODg=',
    '20402f5a89654906b45c48e4cbb7646d-MjAxNi01MzYwNzY=',
    '4606de27444d45eebb409fdd8ccd08e7-MjAxNi01MzU4MDg=',
    '8535941932ea466d802f661434fdbde5-MjAxNi01MzYyNzk=',
    '14a1837d6cc44dbeb8004ff5ad6f2550-MjAxNi01MzYyNzc=',
    '1b4e8a4175b44a4d8a6b8239241658e1-MjAxNi01MzYyMjE=',
    '78aceb55e73c46aaa53a60994732f9b4-MjAxNi01MzYyMTY='
]
       
const configs = {
    method: "POST",
    headers: {
        // "ReplyTo": 'https://mega-sgc-api.azurewebsites.net/api/WebHook/Invoice/Batch/Result',
        "ReplyTo": 'https://fiter-sgc-api.azurewebsites.net/api/WebHook/Invoice/Single/Result',
        "Content-Type": "application/json", 
        "Connection":"keep-alive"
    }
}

for (const reference of lotesPrimeros) {

    try {
    // Reenvío de Batchs
    // const result = await fetch('https://mgft-invoicer-api.azurewebsites.net/api/v1/Webhook/Batch/ReSendBatch/' + reference, configs);

    //Reenvío de Single
    const result = await fetch('https://mgft-invoicer-api.azurewebsites.net/api/v1/Webhook/ReSendTo/' + reference, configs);
   const resultjson = await result.json();
   console.log(resultjson);      
    } catch (error) {
        console.log(error);
    }


}


