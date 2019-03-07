const request = new XMLHttpRequest();
request.open('GET', "https://e-services.herokuapp.com/v1", false, "lavrentijs","lavr123")
request.onreadystatechange = function() {
        // D some business logics here if you receive return
   if(request.readyState === 4 && request.status === 200) {
       console.log(request.responseText);
   }
}
request.send()
------
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
-------
const cors = require('@koa/cors');


app.use(cors());