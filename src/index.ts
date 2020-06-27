import app from './app';

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`[SERVER] Running at http://localhost:${port}`);
});