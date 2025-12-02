const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'ASHEN-MD=wUYGxaCI#468vQKjU7nMqADWh1bxHp2aqWLROjElOba2ZYSO_rFo' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'ASHEN-MD7' : process.env.SESSION_NAME, 

};

