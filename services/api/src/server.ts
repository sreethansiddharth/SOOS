import { app } from './app.js';
import { config } from './config/index.js';

app.listen(config.port, () => {
  console.log(`[Aether API] Server listening on http://127.0.0.1:${config.port}`);
  console.log(`[Aether API] Region: ${config.awsRegion} | In-Memory DDB Fallback: ${config.useInMemoryDdb}`);
});
