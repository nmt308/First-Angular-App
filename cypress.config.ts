import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1340,
  viewportHeight: 760,
  e2e: {
    baseUrl: 'http://localhost:4200',
  },
});
