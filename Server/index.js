import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/routes-path'; 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen( PORT, function(){
 console.log(`server is running on PORT ${PORT}`)
});

export default app; 