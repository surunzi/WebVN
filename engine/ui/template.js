webvn.use(["ui"], function (s, ui) { ui.createTemplate({
    "cg": "<div class=\"title\">CG鉴赏</div>\r\n<ul class=\"container\">\r\n    <li>\r\n        <img class=\"th\" src=\"/asset/test/cg1.bmp\">\r\n    </li>\r\n    <li>\r\n        <img class=\"th\" src=\"/asset/test/cg2.bmp\">\r\n    </li>\r\n    <li>\r\n        <img class=\"th\" src=\"/asset/test/cg3.bmp\">\r\n    </li>\r\n    <li>\r\n        <img class=\"th\" src=\"/asset/test/cg4.bmp\">\r\n    </li>\r\n    <li>\r\n        <img class=\"th\" src=\"/asset/test/cg5.bmp\">\r\n    </li>\r\n    <li>\r\n        <img class=\"th\" src=\"/asset/test/cg6.bmp\">\r\n    </li>\r\n</ul>\r\n<div class=\"close button\">关闭</div>\r\n<img class=\"viewer\" class=\"hidden fill\" src=\"\" />\r\n",
    "dialog": "<div class=\"name\"></div>\r\n<div class=\"content\">\r\n    <img class=\"face\" src=\"\"/>\r\n    <span class=\"text\"></span>\r\n</div>",
    "menu": "<ul>\r\n    <li class=\"start\">开始游戏</li>\r\n    <li class=\"load\">读取存档</li>\r\n    <li class=\"cg\">图像鉴赏</li>\r\n    <li class=\"music\">音乐鉴赏</li>\r\n    <li class=\"setting\">环境设定</li>\r\n</ul>"
});});