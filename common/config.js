import { config as configDotenv } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

configDotenv({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT;
const SLACK_TOKEN = process.env.SLACK_TOKEN;
const SUNG_SOO_6 = process.env.SUNG_SOO_6;
const SUNG_SOO_STATION = process.env.SUNG_SOO_STATION;

export { PORT, SLACK_TOKEN, SUNG_SOO_6, SUNG_SOO_STATION }
