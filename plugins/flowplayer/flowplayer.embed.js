(function(){function a(b,c){if(b.substring(0,4)=="http"){return b}if(c){return c+(c.substring(c.length-1)!="/"?"/":"")+b}c=location.protocol+"//"+location.host;if(b.substring(0,1)=="/"){return c+b}var d=location.pathname;d=d.substring(0,d.lastIndexOf("/"));return c+d+"/"+b}$f.addPlugin("embed",function(d){var b=this;var c=b.getConfig(true);var e={width:b.getParent().clientWidth||"100%",height:b.getParent().clientHeight||"100%",url:a(b.getFlashParams().src),index:-1,allowfullscreen:true,allowscriptaccess:"always",id:"_"+b.id()};$f.extend(e,d);e.src=e.url;e.w3c=true;delete c.playerId;delete e.url;delete e.index;this.getEmbedCode=function(h,f){f=typeof f=="number"?f:e.index;if(f>=0){c.playlist=[b.getPlaylist()[f]]}f=0;$f.each(c.playlist,function(){c.playlist[f++].url=a(this.url,this.baseUrl)});var g=flashembed.getHTML(e,{config:c});if(!h){g=g.replace(/\</g,"&lt;").replace(/\>/g,"&gt;")}return g};return b})})();