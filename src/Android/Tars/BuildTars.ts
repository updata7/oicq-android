const {execSync} = require('child_process')
const path = require('path');
const fs = require('fs')
let SourcePath = path.join(__dirname, "Source")
let BuildPath = path.join(__dirname, "Build")

fs.readdir(SourcePath, (error, data) => {
    data.map((value) => {
        execSync(`tars2node.exe --ts --dir=${BuildPath}  --base=${SourcePath}  ${path.join(SourcePath, value)}`, {cwd: __dirname})
    })
})
