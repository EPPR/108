// EPPR : Clase 108 NODE + NGROK
// Ejemplo : node ~/node/ngrok/index.js 8080 > ~/ngrok.log
const ngrok = require('ngrok');
var myArgs = process.argv.slice(2);
(async () => {
    const port = myArgs[0] ? myArgs[0] : 8080;
    const url = await ngrok.connect(port);
    console.log(url);
})();