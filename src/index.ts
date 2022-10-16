#! /usr/bin/env node
// goal: will write a tsconfig.json to your root directory

import * as path from "path";
import { promises as fs } from "fs";

const config = path.resolve(__dirname, "tsconfig.react.json");

const main = async () => {
	try {
		const data = await fs.readFile(config, "utf8");
		const configLocation = path.join(process.cwd(), "tsconfig.json");
		await fs.writeFile(configLocation, data);
	} catch (error) {
		console.log(error);
	}
};

main().then(() => console.log("Worked Successfully!"));
