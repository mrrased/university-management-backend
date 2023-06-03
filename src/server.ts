import mongoose from 'mongoose';
import Config from './Config/index';
import app from "./app";

async function main() {

    try {
        await mongoose.connect(Config.database_url as string);
        console.log(`Database is connected successfully`)

        app.listen(Config.port, () => {
            console.log(`Application listening on port ${Config.port}`)
        })

    } catch (err) {
        console.log("Failed to connect database", err);
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();

// university-admin
// sZvbyqs6aMsaiYD4