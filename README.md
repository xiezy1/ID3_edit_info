图片大小不能超过 600X600 像素 否则不显示

config.json 参数含义

    title 歌曲名
    artist 歌手
    album 专辑
    music_dir 歌曲地址 暂时不支持网络地址
    cover_dir 封面地址 暂时不支持网络地址

支持批量处理

多文件案例：

```json
    [
        文件1
        {
            "title": "Falling U",
            "artist": "T-ara",
            "album": "Absolute First Album",
            "music_dir": "./1.mp3",
            "cover_dir": "./1.jpg"
        },
		文件2
        {
            "title": "Falling U",
            "artist": "T-ara",
            "album": "Absolute First Album",
            "music_dir": "./1.mp3",
            "cover_dir": "./1.jpg"
        }
    ]
```

注意：执行成功后为替换原文件 如有需求请提前备份
