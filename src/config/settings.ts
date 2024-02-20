import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

export const SETTINGS = {
	PORT: process.env.PORT || 4000,
};

export const OPENAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const DB_PARAMS = {
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017',
  DATABASE: process.env.DATABASE || 'chatbotdb',
};

export const TABLES = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  ANNUAL: 'annual',
};

export const METHODS = {
  FIND: "FIND",
  COUNT: "COUNT",
};
