const express = require("express");
const app = express();
const path = require("path");

const file = {
    new: (fileName) => {
        fileName = fileName.startsWith("/") ? fileName.substring(1) : fileName;
        let newRoot = file.root.endsWith("/") || file.root == "" ? file.root : `${file.root}/`;

        return path.join(__dirname, `${newRoot}${fileName}`);
    },
    root: "",
    this: __filename,
    router: {
        port: app.listen,
        get: (fileName, path) => {
            app.get(path || "/", (req, res) => {
                res.sendFile(file.new(fileName));
            })
        },
        post: (fileName, path) => {
            app.post(path || "/", (req, res) => {
                res.sendFile(file.new(fileName));
            })
        },
        put: (fileName, path) => {
            app.put(path || "/", (req, res) => {
                res.sendFile(file.new(fileName));
            })
        },
        delete: (fileName, path) => {
            app.delete(path || "/", (req, res) => {
                res.sendFile(file.new(fileName));
            })
        }
    }
}

module.exports = file;