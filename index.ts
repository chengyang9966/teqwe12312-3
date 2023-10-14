import http from 'http';
import tx2 from 'tx2';
import { rescheduleTasks } from './src/scheduler';

import app from './app';

const server = http.createServer(app);

const nodeEnv = process.env.NODE_ENV || 'undefined';
const port = process.env.SERVER_PORT || 8081;

tx2.action('rescheduleTasks', (cb: any) => {
  rescheduleTasks();
  cb({ message: 'Reschedule tasks successfully!' });
});
server.listen(port, () => {
  console.log(`🚀 ${nodeEnv.toUpperCase()} @ PORT ${port}`);
});
