import express from 'express';
import router from './routes.js';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log('\nServer listening on port ' + port);
});
