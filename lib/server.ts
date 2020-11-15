import dotenv from 'dotenv';
import app from './config/app.js';

// App config
dotenv.config();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${PORT}`);
});
