import Database from 'better-sqlite3';

const db = new Database('trainers.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS trainers (
    id TEXT PRIMARY KEY,
    name TEXT,
    expertise TEXT,
    availability TEXT,
    contact TEXT
  );
  
  CREATE TABLE IF NOT EXISTS opportunities (
    id TEXT PRIMARY KEY,
    title TEXT,
    type TEXT,
    location TEXT,
    status TEXT
  );
  
  CREATE TABLE IF NOT EXISTS tasks (
    id TEXT PRIMARY KEY,
    description TEXT,
    assignedTo TEXT,
    deadline TEXT,
    status TEXT
  );
`);

export default db;