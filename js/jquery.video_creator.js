(function() {
    $.fn.video_creator = function(options) {
        var param = {
            width: 640,
            height: 360,
            target: ''
        }

        var set = $.fn.extend(param, options);

        return this.each(function() {
            var url = $(this).prop('href'),
                id = '',
                matches = '',
                result = '';

            // Youtube
            if (-1 !== url.toLowerCase().indexOf('youtube')) {
                matches = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                id = matches[1];
                result = '<iframe width="' + set.width + '" height="' + set.height + '" src="//www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe>';
            }

            // Vimeo
            if (-1 !== url.toLowerCase().indexOf('vimeo')) {
                matches = url.match(/\/\/(www\.)?vimeo.com\/(\d+)($|\/)/);
                id = matches[2];
                result = '<iframe src="http://player.vimeo.com/video/' + id + '?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="' + set.width + '" height="' + set.height + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
            }

            $(this).on('click', function() {
                if ('' === set.target) {
                    $(this).replaceWith(result);
                } else {
                    $(set.target).html(result);
                }

                return false;
            });
        });
    }
}(jQuery));
