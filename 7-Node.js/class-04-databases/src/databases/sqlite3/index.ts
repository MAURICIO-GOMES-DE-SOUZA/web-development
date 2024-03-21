import sqlite3 from "sqlite3";
import * as sqlite from "sqlite";
import path from "path";

export async function sqliteConection(): Promise<sqlite.Database> {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database,
  });
  return database
}
//este arquivo vai ser default vamos só compiar e colar