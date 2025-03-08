import express from 'express';
import userRouter from './presentation/routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});
