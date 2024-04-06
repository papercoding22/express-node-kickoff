require('module-alias/register');

import app from '@/app';

const port = 3000;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
