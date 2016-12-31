// jQuery Lighter Plugin
(function(){var g,h,e,f=function(b,a){return function(){return b.apply(a,arguments)}};g=jQuery;h=(function(){function a(){}a.transitions={webkitTransition:&quot;webkitTransitionEnd&quot;,mozTransition:&quot;mozTransitionEnd&quot;,oTransition:&quot;oTransitionEnd&quot;,transition:&quot;transitionend&quot;};a.transition=function(k){var c,l,d,b;c=k[0];b=this.transitions;for(d in b){l=b[d];if(c.style[d]!=null){return l}}};a.execute=function(d,b){var c;c=this.transition(d);if(c!=null){return d.one(c,b)}else{return b()}};return a})();e=(function(){a.settings={padding:40,dimensions:{width:960,height:540},template:&quot;<div class='lighter fade'>\n  <div class='lighter-container'>\n    <span class='lighter-content'/>\n    <a class='lighter-close'>&#215;</a>\n    <a class='lighter-prev'>&#8249;</a>\n    <a class='lighter-next'>&#8250;</a>\n  </div>\n  <div class='lighter-overlay'/>\n</div>&quot;};a.lighter=function(c,d){var b;if(d==null){d={}}b=c.data(&quot;_lighter&quot;);if(!b){b=new a(c,d);c.data(&quot;_lighter&quot;,b)}return b};a.prototype.$=function(b){return this.$lighter.find(b)};function a(c,b){if(b==null){b={}}this.show=f(this.show,this);this.hide=f(this.hide,this);this.toggle=f(this.toggle,this);this.keyup=f(this.keyup,this);this.align=f(this.align,this);this.resize=f(this.resize,this);this.process=f(this.process,this);this.href=f(this.href,this);this.type=f(this.type,this);this.image=f(this.image,this);this.prev=f(this.prev,this);this.next=f(this.next,this);this.close=f(this.close,this);this.$=f(this.$,this);this.$el=c;if((this.$el.data(&quot;width&quot;)!=null)&amp;&amp;(this.$el.data(&quot;height&quot;)!=null)){if(b.dimensions==null){b.dimensions={width:this.$el.data(&quot;width&quot;),height:this.$el.data(&quot;height&quot;)}}}this.settings=g.extend({},a.settings,b);this.$lighter=g(this.settings.template);this.$overlay=this.$(&quot;.lighter-overlay&quot;);this.$content=this.$(&quot;.lighter-content&quot;);this.$container=this.$(&quot;.lighter-container&quot;);this.$close=this.$(&quot;.lighter-close&quot;);this.$prev=this.$(&quot;.lighter-prev&quot;);this.$next=this.$(&quot;.lighter-next&quot;);this.$body=this.$(&quot;.lighter-body&quot;);this.width=this.settings.dimensions.width;this.height=this.settings.dimensions.height;this.align();this.process()}a.prototype.close=function(b){if(b!=null){b.preventDefault()}if(b!=null){b.stopPropagation()}return this.hide()};a.prototype.next=function(b){if(b!=null){b.preventDefault()}return b!=null?b.stopPropagation():void 0};a.prototype.prev=function(){if(typeof event!==&quot;undefined&quot;&amp;&amp;event!==null){event.preventDefault()}return typeof event!==&quot;undefined&quot;&amp;&amp;event!==null?event.stopPropagation():void 0};a.prototype.image=function(b){return b.match(/\.(jpeg|jpg|jpe|gif|png|bmp)$/i)};a.prototype.type=function(b){if(b==null){b=this.href()}return this.settings.type||(this.image(b)?&quot;image&quot;:void 0)};a.prototype.href=function(){return this.$el.attr(&quot;href&quot;)};a.prototype.process=function(){var j,c,d,b=this;d=this.type(j=this.href());this.$content.html((function(){switch(d){case&quot;image&quot;:return g(&quot;<img/>&quot;).attr({src:j});default:return g(j)}})());switch(d){case&quot;image&quot;:c=new Image();c.src=j;return c.onload=function(){return b.resize(c.width,c.height)}}};a.prototype.resize=function(b,c){this.width=b;this.height=c;return this.align()};a.prototype.align=function(){var d,b,c;b=Math.max((d=this.height)/(g(window).height()-this.settings.padding),(c=this.width)/(g(window).width()-this.settings.padding));if(b&gt;1){d=Math.round(d/b)}if(b&gt;1){c=Math.round(c/b)}return this.$container.css({height:d,width:c,margin:&quot;-&quot;+(d/2)+&quot;px -&quot;+(c/2)+&quot;px&quot;})};a.prototype.keyup=function(b){if(b.target.form!=null){return}if(b.which===27){this.close()}if(b.which===37){this.prev()}if(b.which===39){return this.next()}};a.prototype.toggle=function(b){if(b==null){b=&quot;on&quot;}g(window)[b](&quot;resize&quot;,this.align);g(document)[b](&quot;keyup&quot;,this.keyup);this.$overlay[b](&quot;click&quot;,this.close);this.$close[b](&quot;click&quot;,this.close);this.$next[b](&quot;click&quot;,this.next);return this.$prev[b](&quot;click&quot;,this.prev)};a.prototype.hide=function(){var d,b,c=this;d=function(){return c.toggle(&quot;off&quot;)};b=function(){return c.$lighter.remove()};d();this.$lighter.removeClass(&quot;fade&quot;);this.$lighter.position();this.$lighter.addClass(&quot;fade&quot;);return h.execute(this.$container,b)};a.prototype.show=function(){var d,b,c=this;b=function(){return c.toggle(&quot;on&quot;)};d=function(){return g(document.body).append(c.$lighter)};d();this.$lighter.addClass(&quot;fade&quot;);this.$lighter.position();this.$lighter.removeClass(&quot;fade&quot;);return h.execute(this.$container,b)};return a})();g.fn.extend({lighter:function(a){if(a==null){a={}}return this.each(function(){var b,c,d;b=g(this);d=g.extend({},g.fn.lighter.defaults,typeof a===&quot;object&quot;&amp;&amp;a);c=typeof a===&quot;string&quot;?a:a.action;if(c==null){c=&quot;show&quot;}return e.lighter(b,d)[c]()})}})}).call(this);
