!function (factory) {
    FileManager = factory();
}(function () {

    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
    }

    var filedata = atv.fsGetList(getURLParameter('target'));
    var filelist = JSON.parse(filedata);
    var grid = document.getElementsByClassName("grid")[0];

    filelist.forEach(function (file) {
        grid.appendChild(genFileElement(file));
    });

    function testMarquee() {
        $('.filename').children().each(function () {
            if ($('.grid-sizer').width() - 26 < $(this).width()) {
                var txt = $(this).html();
                if (!txt.includes('<marquee>')) {
                    $(this).html('<marquee>' + txt + '</marquee>');
                }
            }
        });
    }

    testMarquee();

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });

    function makeUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (a, b) {
            return b = Math.random() * 16, (a == 'y' ? b & 3 | 8 : b | 0).toString(16);
        });
    }

    function genFileElement(file) {
        var filename = document.createElement('div');
        filename.className = 'filename unselectable';
        filename.innerHTML = "<span id='" + file.filename + "'>" + file.filename + "</span>";

        var img = document.createElement('img');
        img.className = 'thumbnail';
        img.src = file.thumbnail;

        var elem = document.createElement('div');
        elem.className = 'grid-item';
        elem.appendChild(img);
        elem.appendChild(filename);

        return elem;
    }

    var FileManager = function () {
        var self = this;

        this.replyHandlers = {};
        this.eventEaten = false;
        this.pressTimer = null;

        $grid.on('mouseup', '.grid-item', function () {
            if (self.eventEaten) return;
            self.eventEaten = true;
            clearTimeout(self.pressTimer);
            var filename = $(this).find('span').text();

            var id = makeUUID();
            self.replyHandlers[id] = this;
            atv.fsTap(id, filename);
        });

        $grid.on('mousedown', '.grid-item', function () {
            self.eventEaten = false;
            var filename = $(this).find('span').text();
            var handler = this;
            self.pressTimer = window.setTimeout(function () {
                if (self.eventEaten) return;
                self.eventEaten = true;
                clearTimeout(self.pressTimer);

                var id = makeUUID();
                self.replyHandlers[id] = handler;
                atv.fsLongPress(id, filename);
            }, 500);
        });
    };

    FileManager.prototype.add = function (file) {
        var $elems = $(genFileElement(file));
        $grid.append($elems).masonry('appended', $elems);
        testMarquee();
    };

    FileManager.prototype.rm = function (id) {
        var handler = this.replyHandlers[id];
        delete this.replyHandlers[id];
        $grid.masonry('remove', handler).masonry();
    };

    FileManager.prototype.rename = function (id, filename) {
        var handler = this.replyHandlers[id];
        delete this.replyHandlers[id];
        var spanid = $(handler).find('span').text();

        var elem = document.getElementById(spanid);
        elem.id = filename;
        elem.textContent = filename;

        testMarquee();
    };

    FileManager.prototype.cancel = function (id) {
        delete this.replyHandlers[id];
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = FileManager;
        } else {
            exports.FileManager = FileManager;
        }
    } else {
        return FileManager;
    }
});

