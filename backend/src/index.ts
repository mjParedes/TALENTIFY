import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import authRoute from './routes/auth.route'
import userRoutes from "./routes/userRoutes"
import companyRoute from './routes/company.route'



dotenv.config();
const app = express();

app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}))
app.use(express.json())

// Enrutamiento prefijado
app.use('/api/auth', authRoute)
// app.use('/api/users')
app.use('/api/company', companyRoute)
// app.use('/api/offers')
// app.use('/api/profiles')
// app.use('/api/applications')

app.use('/api/users', userRoutes);

app.get("/api/", (req, res) => {
  res.send("Welcome to TALENTIFY.COM- We make it happen ");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}/api/`);
});
