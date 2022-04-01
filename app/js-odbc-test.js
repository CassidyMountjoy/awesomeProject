import {CreateServerConnection} from "mdb-server/lib/driver";
import {rawColumnToType} from "mdb-server/lib/utils";

let conn = CreateServerConnection(
    {
        username: "system",
        password: "biglove",
        serverAddress: "0.0.0.0",
        serverPort: "8080",
        databaseName: "master",
        parameters: new Map([["interpolateParams", true]])
    }
)
//
// try {
//     await conn.connect()
// } catch (err) {
//     throw new err
// }
//
// let resp;
// try {
//     resp = await conn.exec("CREATE DATABASE main")
// } catch (err) {
//     conn.close()
//     throw new err
// }
//
// try {
//     resp = await conn.exec("USE main")
// } catch (err) {
//     conn.close()
//     throw new err
// }
//
// await conn.storeFile("myFile", "drop_test.go")
//
// conn.close()

/*
let resp;
try {
    resp = await conn.exec("CREATE DATABASE main")
} catch (err) {
    conn.close()
    throw new err
}

console.log(resp.getAffectedRows())
console.log(resp.getLastInsertId())

try {
    resp = await conn.exec("CREATE DATABASE main")
} catch (err) {
    conn.close()
    throw new err
}

try {
    resp = await conn.exec("USE main")
} catch (err) {
    conn.close()
    throw new err
}

let rows;
try {
    rows = await conn.query("SELECT * FROM sys_session")
} catch (err) {
    conn.close()
    throw new err
}


for (const row of rows) {
    const row_column = row.get("user_id")
    console.log(rawColumnToType(row_column))
}*/

