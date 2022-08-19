const { multiplier } = require("./helper/Multiplier.js");
const argv = require("./config/yargs.js");

console.clear();

multiplier(argv.b, argv.l, argv.s)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
