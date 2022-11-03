#!/usr/bin/env node

const program = require("commander");

program
  .version("0.0.1")
  .option("-n, --yourname [yourname]", "Your name")
  .option("-g, --glad", "Tell us you are happy");
program.parse();
const option = program.opts();
console.log(option);
if (program.yourname) {
  console.log(
    `Hello, ${program.yourname}! ${
      program.glad ? "I am very happy to see you!" : ""
    }`
  );
}
