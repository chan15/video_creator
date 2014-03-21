video_creator
=============

jQuery Video Creator

This plugin can create YouTube of Vimeo iframe video by click hyper link with youtube or vimeo video

### HTML

<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Video&lt;/title&gt;
    &lt;script src=&quot;http://code.jquery.com/jquery-1.11.0.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;js/jquery.video_creator.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
    $(function() {
        $(&#39;a&#39;).video_creator({
            width: 200,
            height: 100,
            target: &#39;#video&#39;
        });
    });
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;a href=&quot;https://www.youtube.com/watch?v=p6oaqY6flJg&quot;&gt;Youtube&lt;/a&gt;
&lt;a href=&quot;http://vimeo.com/89495751&quot;&gt;Vimeo&lt;/a&gt;
&lt;div id=&quot;video&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

### Options
<pre>
width
height
target
</pre>

If target was not give, it will replace hyper link itself.