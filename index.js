const fs = require("fs");
const nodeID3 = require("node-id3");
const list = require("./config.json");

class ID3 {
    constructor(option) {
        for (let key in option) {
            this[key] = option[key];
        }
    }

    generateTags() {
        return {
            title: this.title,
            artist: this.artist,
            album: this.album,
            image: this.readFileSync(),
        };
    }

    readFileSync() {
        try {
            return fs.readFileSync(this.cover_dir);
        } catch (error) {
            console.log("图片读取异常");
            return "";
        }
    }

    writeID3() {
        return new Promise((resolve, reject) => {
            nodeID3.update(this.generateTags(), this.music_dir, function (err) {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    start() {
        this.writeID3().then(() => {
            console.log(`${this.title} 追加成功`);
        });
    }
}

function start() {
    list.forEach((v) => {
        new ID3(v).start();
    });
}
start();
