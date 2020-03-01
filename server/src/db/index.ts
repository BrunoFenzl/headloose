import mongoose from 'mongoose';

export { ComponentModel } from './component.model';

export function init(): void {
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Database connected.');
  });
}