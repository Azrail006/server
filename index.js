// const morgan = require("morgan");
const express  = require("express")
const multer  = require("multer");
const upload = multer({dest: "files"})
const productsRouter = require('./routes/products.routes')
const app = express(); 
const PORT = 3000;

const storageConfig = multer.diskStorage(
    {
       destination: (req, file, cb) =>{
        cb(null, "files")
       },
       filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
    }
)

app.use(express.static(__dirname));
app.use(multer({storage: storageConfig}).single("filedata"))
app.get("/upload", function (req, res, next) {
    let filedata = req.file;
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});



app.use(express.json());
app.use('/api', productsRouter)
app.listen(PORT, () => console.log(`server runing ${PORT}`))




















