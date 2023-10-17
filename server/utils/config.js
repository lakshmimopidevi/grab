import dotenv from "dotenv";

dotenv.config();

export const Server = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || "development",
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/grabbit",
    JWT_SECRET: process.env.JWT_SECRET || "cZNBhV5EMOeJjqp4y3Of3JGVb0+DfMfUK6SeAiLmqwI=",
    EMAIL: process.env.EMAIL || "gracie79@ethereal.email",
    PASSWORD: process.env.PASSWORD || "P5adXq1UFrNBKUUfWd"
}
