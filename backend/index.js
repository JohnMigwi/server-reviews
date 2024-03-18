import app from "./server.js";
import dotenv from 'dotenv';
import mongodb from 'mongodb';

async function main() {
    dotenv.config();
    const port = process.env.PORT || 8000;

    app.listen(port, () => {
        console.log('Server is running on port:', port);
    });
}

main().catch(console.error);
