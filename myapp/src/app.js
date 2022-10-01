import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';
import bp from 'body-parser';
import cors from 'cors';
import config from './config.js';
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const _dirname = typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url))

var app = express();

app.options('*', cors())

app.listen(config.port, () => {
  console.log(`Servidor ${config.port} andando`); 
})


app.set('views', path.join(_dirname, 'views'));


//Middlewares
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(_dirname, 'public')));
app.use(cors());

//entryRutas
app.use('/', indexRouter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})


export default app;
