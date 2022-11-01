#! /usr/bin/env node
// goal: will write a tsconfig.json to your root directory

import * as path from "path";
import inquirer from "inquirer";
import { promises as fs } from "fs";

const main = async () => {
	const { selectedTech } = await inquirer.prompt([
		{
			type: "list",
			message: "Pick the technology you're using:",
			name: "selectedTech",
			choices: ["react", "node"],
		},
	]);

	const configPath = path.resolve(__dirname, `tsconfig.${selectedTech}.json`);

	try {
		const data = await fs.readFile(configPath, "utf8");
		const configLocation = path.join(process.cwd(), "tsconfig.json");
		await fs.writeFile(configLocation, data);
	} catch (error) {
		console.error(error);
	}
};

main();
