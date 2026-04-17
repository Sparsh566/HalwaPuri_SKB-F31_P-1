import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import organizationRoutes from './routes/organizations';
import facilityRoutes from './routes/facilities';
import internalSupplierRoutes from './routes/suppliersInternal';
import externalSupplierRoutes from './routes/supplierExternal';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/organizations', organizationRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/internal/suppliers', internalSupplierRoutes);
app.use('/api/supplier', externalSupplierRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
