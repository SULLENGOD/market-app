import dotenv from 'dotenv';
dotenv.config();
import app from "./App";


function main() {
    app.listen(app.get('port'));
    const log = {
        "server status": "online",
        "port": app.get('port')
    }

    console.log(JSON.stringify(log, null, 2))
};

main();