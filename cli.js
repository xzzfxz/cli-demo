#!/usr/bin/env node

const program = require("commander");
const inquirer = require("inquirer");
const ora = require("ora");
const download = require("download-git-repo");
// const { errLog, successLog } = require("../src/log.js");

program
  .command("create <projectName>")
  .version("0.0.1")
  .option("-t, --template <template>", "PC or H5", "PC")
  .action((projectName) => {
    console.log(projectName);
    inquirer
      .prompt([
        {
          type: "list",
          name: "template",
          message: "请选择模板类型",
          choices: ["PC", "H5"],
        },
      ])
      .then((answer) => {
        console.log(answer, "==");
        const spinner = ora();
        spinner.text = "正在下载模板";
        spinner.start();
        try {
          download(
            "direct:https://git.qmhost1.com/broker-solution/plugin-clients/qm-vue3-tpl.git#master",
            projectName,
            { clone: true },
            function (err) {
              if (err) {
                console.log(err);
                spinner.fail("模板下载失败");
              } else {
                spinner.succeed("模板下载成功");
              }
            }
          );
        } catch (err) {
          console.log("******************");
          console.log(err);
          spinner.fail("模板下载失败2");
        }
      });
  });

program.parse(process.argv);

// const option = program.opts();
// console.log(option);
