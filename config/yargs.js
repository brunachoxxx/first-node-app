const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: "true",
    describe: "The number you want to multiply by.",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "Print the table on console",
  })
  .option("s", {
    alias: "stop",
    type: "number",
    default: 10,
    describe: "Stop the table in the designed number",
  })
  .check((argv, options) => {
    if (argv.b === NaN) {
      console.log("must be a nunmber");
    }
    return true;
  }).argv;

module.exports = argv;
