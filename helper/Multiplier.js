const fs = require("fs");
const { argv } = require("process");
const colors = require("colors");

const multiplier = async (base, list, stopNum) => {
  try {
    let output = "";

    for (let i = 1; i <= stopNum; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log("====================".rainbow);
      console.log(`   Tabla del ${base}`.trap.green.bold);
      console.log("====================".rainbow);
      console.log(output.rainbow);
    }

    fs.writeFileSync(`./output/multiply_by_${base}.txt`, output);

    return `** file multiply by ${base} was created **`.rainbow;
  } catch (error) {
    throw error;
  }
};

module.exports = { multiplier };
