import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import handler, { processConsultation } from './api/consultations.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Consultation API Route
app.all('/api/consultations', (req, res) => {
  handler(req, res);
});

// Production static assets
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// SPA fallback
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start server if executed directly
if (process.env.NODE_ENV === 'production' || !process.env.VITE) {
  app.listen(PORT, () => {
    console.log(`TOOTHLUXE server running on http://localhost:${PORT}`);
  });
}

export default app;
