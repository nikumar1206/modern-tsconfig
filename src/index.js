#! /usr/bin/env node
import * as path from "path";
import { promises as fs } from "fs";
const __dirname = path.resolve();
const pathToConfig = path.join(__dirname, "tsconfig.react.json");
console.log(pathToConfig);
const files = await fs.readdir(__dirname);
console.log(__dirname);
console.log(files);
const main = async () => {
    try {
        const data = await fs.readFile(pathToConfig, "utf8");
        await fs.writeFile("tsconfig.json", data);
    }
    catch (error) {
        console.log(error);
    }
};
try {
    await main();
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=index.js.map