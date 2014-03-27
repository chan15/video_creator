video_creator
=============

jQuery Video Creator

This plugin can create YouTube of Vimeo iframe video by click hyper link with youtube or vimeo video

### HTML

````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Video</title>
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="js/jquery.video_creator.js"></script>
    <script>
    $(function() {
        $('a').video_creator({
            width: 200,
            height: 100,
            target: '#video'
        });
    });
    </script>
</head>
<body>
<a href="https://www.youtube.com/watch?v=p6oaqY6flJg">Youtube</a>
<a href="http://vimeo.com/89495751">Vimeo</a>
<div id="video"></div>
</body>
</html>
````

### Options

- width
- height
- target

If target was not give, it will replace hyper link itself.
