import app from "./server.js";
import dotenv from 'dotenv';
import mongodb from 'mongodb';


dotenv.config()
async function main() {
    const port = process.env.PORT || 8000;

    app.listen(port, () => {
        console.log('Server is running on port:', port);
    });
}

console.log("The port is", process.env.URI)

main().catch(console.error);
