#!/usr/bin/env node
"use strict";

/**
 * What does this script do?
 * 
 * It takes all source files and format them the way I (LGK) like them.
 * 4 spaces indent instead of 2 spaces and use double quotes (") instead of single quotes (').
 * 
 * The script is especially made for projects created with "create-react-app".
 * And it is designed for the use with Visual Studio Code. If you use other editors, it might not work as expected.
 * 
 * You should run the script only once. If you use it more than once, you might get 8 spaces indent instead of 4 😅.
 * After running the script, you can devare it from your project folder.
 */

var fs = require("fs");
var path = require("path");

var vsCodeSettingsFolder = "./.vscode";
var vsCodeSettingsFile = vsCodeSettingsFolder + "/settings.json";

var sourcesFolder = "./src";

var extToFormat = [".js", ".css"];

var vsCodeSettingsFolderDidExistBefore = fs.existsSync(vsCodeSettingsFolder);

if (process.argv && process.argv[2]) {
    sourcesFolder = process.argv[2];
}

// First create VS Code settings for workspace

// Create folder if it doesn't exist
if (!vsCodeSettingsFolderDidExistBefore) {
    fs.mkdirSync(vsCodeSettingsFolder);
}

if (fs.existsSync(vsCodeSettingsFile)) {
    throw [
        "The settings file \"", vsCodeSettingsFile, "\" already exists.\n",
        "This script needs to create this file and will devare it then again.\n",
        "To make this work, please rename the file before running this script and then rename it again after the script has finished."
    ].join(" ");
}

fs.writeFileSync(
    vsCodeSettingsFile,
    JSON.stringify({
        "editor.detectIndentation": false,
        "editor.tabSize": 4
    })
);

// Now replace all 2x spaces with 4x spaces

function doStuffWithFolder(folder) {
    var files = fs.readdirSync(folder);
    files.forEach(file => {
        var filePath = path.join(folder, file);

        if (fs.lstatSync(filePath).isDirectory()) {
            doStuffWithFolder(filePath);
        }

        if (extToFormat.indexOf(path.extname(file)) > -1) {
            // This file should be formatted

            var data = fs.readFileSync(filePath, "utf8");

            data = data.replace(/  /g, "    ").replace(/'/g, '"');

            fs.writeFileSync(filePath, data);
        }
    });
}

doStuffWithFolder(sourcesFolder);

setTimeout(() => {
    // Devare file again
    fs.unlinkSync(vsCodeSettingsFile);

    // If .vscode folder didn't exist before, devare it again
    if (!vsCodeSettingsFolderDidExistBefore) {
        fs.rmdirSync(vsCodeSettingsFolder);
    }
}, 3000);