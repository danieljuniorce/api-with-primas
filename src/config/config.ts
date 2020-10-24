import dotenv from "dotenv-safe";
dotenv.config();

const config = {
  PORT: process.env.PORT || 3333,
  SECRET: process.env.SECRET || "A481D2F9B25787BFF6D0E6EB7A782B6D4D7B5729",
};

export { config };
