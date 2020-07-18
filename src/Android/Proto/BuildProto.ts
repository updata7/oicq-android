const Path = require('path')
const Fs = require('fs')
const Pbjs = require("protobufjs/cli/pbjs")
const Pbts = require("protobufjs/cli/pbts")

interface Temp {
    Filename: string,
    Filepath: string
}

Fs.readdir(Path.join(__dirname, "Source"), (err, data) => {
    if (!err) {
        let SrcProto: Array<Temp> = []
        data.map((value) => {
            if (value.indexOf(".proto") > 0) {
                SrcProto.push({
                    Filepath: Path.join(__dirname, "Source", value),
                    Filename: value.replace(".proto", "")
                })
            }
        })
        SrcProto.map((value) => {
            let JsPath = Path.join(__dirname, "Build", value.Filename + ".js")
            let TsPath = Path.join(__dirname, "Build", value.Filename + ".d.ts")
            Pbjs.main(["--target", "static-module", '-w', 'commonjs', value.Filepath], (err, output) => {
                if (err) {
                    console.log(err)
                } else {
                    let JsFile = Fs.openSync(JsPath, "w+")
                    Fs.writeSync(JsFile, Buffer.from(output))
                    Fs.closeSync(JsFile)
                    Pbts.main([JsPath], (error2, output2) => {
                        if (error2) {
                        } else {
                            let TsFile = Fs.openSync(TsPath, "w+")
                            Fs.writeSync(TsFile, Buffer.from(output2))
                            Fs.closeSync(TsFile)
                        }
                    })
                }
            });


        })
    }

})