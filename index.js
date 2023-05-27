// const morgan = require("morgan");
const express  = require("express")
const multer  = require("multer");
const productsRouter = require('./routes/products.routes')
const app = express(); 
const PORT = 3000;

  
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

 
app.use(multer({storage:storageConfig}).single("filedata"));
app.post("/upload", function (req, res, next) {
   
    let filedata = req.file;
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});



app.use(express.json());
app.use('/api', productsRouter)
app.listen(PORT, () => console.log(`server runing ${PORT}`))




















// app.get('/getUser', function(req, res){
//     fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err, data){
//         console.log(data);
//         res.end(data); 
//     });
// })


// let user = {
//     "user5": {
//         "id":5,
//         "name":"onion",
//         "price":"100",
//         "remaining_goods":"10"
//       },
      
// } 

// app.post('/addUser', function(req, res){
//     fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err, data){
//         data = JSON.parse(data);
        
//         data["user5"] = user["user5"];
//         console.log(data);
//         res.end(JSON.stringify(data));
//     });
// })
// app.post('/:id', function (req, res) {
    
//     fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
//        var user = JSON.parse( data );
//        var user = user["user" + req.params.id] 
//        console.log( user );
//        res.end( JSON.stringify(user));
//     });
//  })








// // const server = http.createServer((req, res) => {
// //     const body = [];
// //     req.on('data', (chunk) => {
// //        body.push(chunk);
// //     });

// //     req.on('end', () => {
// //         const requestBody = Buffer.concat(body).toString();
// //         requestBody.split('=').map(r => {
// //             console.log(r)
// //         })
// //         const name = requestBody.split('=')[requestBody.split('=').length - 1];
// //        fs.writeFileSync('./photo/apple.png', Buffer.from);
// //         });
// //         get('/getUser', function(req, res){
// //             fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err, data){
// //                 console.log(data);
// //                 res.end(data); // you can also use res.send()
// //             });
// //         })
        
// //         // Create a server to listen at port 8080
// //         let server = app.listen(3000, function(){
// //             let host = server.address().address
// //             let port = server.address().port
// //             console.log("REST API demo app listening at http://%s:%s", host, port)
// //         })

    
    
// //     if ((req.method == "POST") && req.url == "/1") {
// //         res.write("POST1")
// //         res.end()
// //     }
// //     else if ((req.method == "POST") && req.url == "/2") {
// //         res.write("POST2")
// //         res.end()
// //     }
// //      if ((req.method == "GET") && req.url == "/1") {
// //         res.write("GET1")
// //         res.end()
// //     }
// //     else if ((req.method == "GET") && req.url == "/2") {
// //         res.write("GET2")
// //         res.end()
// //     }


// //     // if (req.method == "GET") {
// //     //     res.write("GET")
// //     //     res.end()
// //     // }
// //     // else if (req.method == "POST"){
// //     //     req.write("POST1")
// //     //     res.end()
// //     // }

// // })

// // server.listen(3000, () => {
// //     console.log('Server running')
// // });



// // request.post({
// //     url: 'http://localhost:3000/1',
// //     data: {
// //         note: 'photo',
// //         file: fs.createReadStream('./photo'),
// //         filename: 'pmg.jpeg',
// //     },
// // }, function(error, response, body) {
// //     console.log("BODY: " + body);
// //     console.log("RESPONSE: " + JSON.stringify(response) );
// // });

