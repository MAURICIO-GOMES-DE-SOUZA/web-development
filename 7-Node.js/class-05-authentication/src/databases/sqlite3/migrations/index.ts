import { sqliteconection } from ".."
import { tableUsers } from "./tableUsers"

export async function  runMigrations() {
    const schemas = [tableUsers].join("");

    sqliteconection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.log(error)
    )
}