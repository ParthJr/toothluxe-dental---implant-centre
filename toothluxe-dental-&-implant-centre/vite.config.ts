import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { processConsultation } from './api/consultations.ts';

function consultationsApiPlugin(): Plugin {
  return {
    name: 'toothluxe-consultations-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/api/consultations' || url === '/api/consultations/') {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const parsed = JSON.parse(body || '{}');
                const result = processConsultation(parsed);
                const statusCode = result.success ? 200 : (result.errors?.mobileNumber?.includes('Duplicate') ? 429 : 400);
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = statusCode;
                res.end(JSON.stringify(result));
              } catch {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 500;
                res.end(JSON.stringify({ success: false, message: 'Invalid JSON request format' }));
              }
            });
            return;
          }

          if (req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({
              status: 'online',
              service: 'TOOTHLUXE Consultations API',
              endpoint: '/api/consultations',
            }));
            return;
          }

          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }

        // Pass all other requests to Vite
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), consultationsApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

