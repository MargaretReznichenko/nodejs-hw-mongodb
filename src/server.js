import express from 'express';
import contactsRouter from './routes/contacts.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());

// 👇 Добавляем middleware для JSON-заголовков
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.use('/contacts', contactsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

export const initializeServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};