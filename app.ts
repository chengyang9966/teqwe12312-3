import express from 'express';
import { initializeTask } from './src/scheduler';
import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

initializeTask();
export default app;