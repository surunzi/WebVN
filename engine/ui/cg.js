webvn.use(['ui', 'select', 'config', 'storage', 'util'], function (ui, select, config, storage, util) {
    "use strict";
    var exports = ui.create('cg', 'div');

    var conf = config.create('uiCg');

    var asset = storage.createAsset(conf.get('path'), conf.get('extension'));

    var $el = exports.$el;
    $el.addClass('fill');

    var tpl = ui.getTemplate('cg');
    exports.body(tpl);

    // Init cg
    var $container = $el.find('.container');
    var cg = conf.get('cg');
    var pageSize = 6,
        pageCount = Math.ceil(cg.length / pageSize);
    function page(num) {
        var html = '',
            start = (num - 1) * pageSize,
            end = start + pageSize;
        if (end > cg.length) {
            end = cg.length;
        }
        for (; start < end; start++) {
            html += '<li><img class="th" src="' + asset.get(cg[start]) + '"></li>';
        }
        $container.html(html);
    }
    page(1);
    // Append Button
    var $pagination = $el.find('.pagination');
    if (pageCount > 1) {
        console.log(pageCount);
        var html = '';
        for (var i = 0; i < pageCount; i++) {
            html += '<li class="button pa" data-num="' + (i+1) + '">' + (i+1) + '</li>';
        }
        $pagination.html(html);
    }

    var $viewer = $el.find('.viewer');
    $viewer.on('click', function () {
        var $this = select.get(this);
        $this.fadeOut(300);
    });

    exports.event({
        'click .close': function () {
            hide();
        },
        'click li img': function () {
            var $this = select.get(this),
                src = $this.attr('src');
            $viewer.find('img').attr('src', src);
            $viewer.removeClass('hidden').fadeIn(300);
        },
        'click .pagination li': function () {
            var $this = select.get(this);
            page(Number($this.attr('data-num')));
        }
    });

    exports.show = function () {
        $el.fadeIn(300);
    };

    var hide = exports.hide = function () {
        $el.fadeOut(300);
    };
});