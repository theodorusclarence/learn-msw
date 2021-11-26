/* eslint-disable @typescript-eslint/no-var-requires */

import { MSW_FLAG } from '@/constants/env';

if (MSW_FLAG) {
  if (typeof window === 'undefined') {
    const { server } = require('./server');
    server.listen();
  } else {
    const { worker } = require('./browser');
    worker.start();
  }
}

export {};
