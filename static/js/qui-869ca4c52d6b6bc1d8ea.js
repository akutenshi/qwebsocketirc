/* qwebirc -- Copyright (C) 2008-2012 Chris Porter and the qwebirc project --- All rights reserved. */

QWEBIRC_BUILD="869ca4c52d6b6bc1d8ea";
//MooTools, <http://mootools.net>, My Object Oriented (JavaScript) Tools. Copyright (c) 2006-2009 Valerio Proietti, <http://mad4milk.net>, MIT Style License.

var MooTools={version:"1.2.5",build:"008d8f0f2fcc2044e54fdd3635341aaab274e757"};var Native=function(l){l=l||{};var a=l.name;var j=l.legacy;var b=l.protect;var c=l.implement;var i=l.generics;var g=l.initialize;var h=l.afterImplement||function(){};var d=g||j;i=i!==false;d.constructor=Native;d.$family={name:"native"};if(j&&g){d.prototype=j.prototype;}d.prototype.constructor=d;if(a){var f=a.toLowerCase();d.prototype.$family={name:f};Native.typize(d,f);}var k=function(o,m,p,n){if(!b||n||!o.prototype[m]){o.prototype[m]=p;}if(i){Native.genericize(o,m,b);}h.call(o,m,p);return o;};d.alias=function(o,m,q){if(typeof o=="string"){var p=this.prototype[o];if((o=p)){return k(this,m,o,q);}}for(var n in o){this.alias(n,o[n],m);}return this;};d.implement=function(n,m,q){if(typeof n=="string"){return k(this,n,m,q);}for(var o in n){k(this,o,n[o],m);}return this;};if(c){d.implement(c);}return d;};Native.genericize=function(b,c,a){if((!a||!b[c])&&typeof b.prototype[c]=="function"){b[c]=function(){var d=Array.prototype.slice.call(arguments);return b.prototype[c].apply(d.shift(),d);};}};Native.implement=function(d,c){for(var b=0,a=d.length;b<a;b++){d[b].implement(c);}};Native.typize=function(a,b){if(!a.type){a.type=function(c){return($type(c)===b);};}};(function(){var a={Array:Array,Date:Date,Function:Function,Number:Number,RegExp:RegExp,String:String};for(var j in a){new Native({name:j,initialize:a[j],protect:true});}var d={"boolean":Boolean,"native":Native,object:Object};for(var c in d){Native.typize(d[c],c);}var h={Array:["concat","indexOf","join","lastIndexOf","pop","push","reverse","shift","slice","sort","splice","toString","unshift","valueOf"],String:["charAt","charCodeAt","concat","indexOf","lastIndexOf","match","replace","search","slice","split","substr","substring","toLowerCase","toUpperCase","valueOf"]};for(var f in h){for(var b=h[f].length;b--;){Native.genericize(a[f],h[f][b],true);}}})();var Hash=new Native({name:"Hash",initialize:function(a){if($type(a)=="hash"){a=$unlink(a.getClean());}for(var b in a){this[b]=a[b];}return this;}});Hash.implement({forEach:function(b,c){for(var a in this){if(this.hasOwnProperty(a)){b.call(c,this[a],a,this);}}},getClean:function(){var b={};for(var a in this){if(this.hasOwnProperty(a)){b[a]=this[a];}}return b;},getLength:function(){var b=0;for(var a in this){if(this.hasOwnProperty(a)){b++;}}return b;}});Hash.alias("forEach","each");Array.implement({forEach:function(c,d){for(var b=0,a=this.length;b<a;b++){c.call(d,this[b],b,this);}}});Array.alias("forEach","each");function $A(b){if(b.item){var a=b.length,c=new Array(a);while(a--){c[a]=b[a];}return c;}return Array.prototype.slice.call(b);}function $arguments(a){return function(){return arguments[a];};}function $chk(a){return !!(a||a===0);}function $clear(a){clearTimeout(a);clearInterval(a);return null;}function $defined(a){return(a!=undefined);}function $each(c,b,d){var a=$type(c);((a=="arguments"||a=="collection"||a=="array")?Array:Hash).each(c,b,d);}function $empty(){}function $extend(c,a){for(var b in (a||{})){c[b]=a[b];}return c;}function $H(a){return new Hash(a);}function $lambda(a){return($type(a)=="function")?a:function(){return a;};}function $merge(){var a=Array.slice(arguments);a.unshift({});return $mixin.apply(null,a);}function $mixin(f){for(var d=1,a=arguments.length;d<a;d++){var b=arguments[d];if($type(b)!="object"){continue;}for(var c in b){var h=b[c],g=f[c];f[c]=(g&&$type(h)=="object"&&$type(g)=="object")?$mixin(g,h):$unlink(h);}}return f;}function $pick(){for(var b=0,a=arguments.length;b<a;b++){if(arguments[b]!=undefined){return arguments[b];}}return null;}function $random(b,a){return Math.floor(Math.random()*(a-b+1)+b);}function $splat(b){var a=$type(b);return(a)?((a!="array"&&a!="arguments")?[b]:b):[];}var $time=Date.now||function(){return +new Date;};function $try(){for(var b=0,a=arguments.length;b<a;b++){try{return arguments[b]();}catch(c){}}return null;}function $type(a){if(a==undefined){return false;}if(a.$family){return(a.$family.name=="number"&&!isFinite(a))?false:a.$family.name;}if(a.nodeName){switch(a.nodeType){case 1:return"element";case 3:return(/\S/).test(a.nodeValue)?"textnode":"whitespace";}}else{if(typeof a.length=="number"){if(a.callee){return"arguments";}else{if(a.item){return"collection";}}}}return typeof a;}function $unlink(c){var b;switch($type(c)){case"object":b={};for(var f in c){b[f]=$unlink(c[f]);}break;case"hash":b=new Hash(c);break;case"array":b=[];for(var d=0,a=c.length;d<a;d++){b[d]=$unlink(c[d]);}break;default:return c;}return b;}Array.implement({every:function(c,d){for(var b=0,a=this.length;b<a;b++){if(!c.call(d,this[b],b,this)){return false;}}return true;},filter:function(d,f){var c=[];for(var b=0,a=this.length;b<a;b++){if(d.call(f,this[b],b,this)){c.push(this[b]);}}return c;},clean:function(){return this.filter($defined);},indexOf:function(c,d){var a=this.length;for(var b=(d<0)?Math.max(0,a+d):d||0;b<a;b++){if(this[b]===c){return b;}}return -1;},map:function(d,f){var c=[];for(var b=0,a=this.length;b<a;b++){c[b]=d.call(f,this[b],b,this);}return c;},some:function(c,d){for(var b=0,a=this.length;b<a;b++){if(c.call(d,this[b],b,this)){return true;}}return false;},associate:function(c){var d={},b=Math.min(this.length,c.length);for(var a=0;a<b;a++){d[c[a]]=this[a];}return d;},link:function(c){var a={};for(var f=0,b=this.length;f<b;f++){for(var d in c){if(c[d](this[f])){a[d]=this[f];delete c[d];break;}}}return a;},contains:function(a,b){return this.indexOf(a,b)!=-1;},extend:function(c){for(var b=0,a=c.length;b<a;b++){this.push(c[b]);}return this;},getLast:function(){return(this.length)?this[this.length-1]:null;},getRandom:function(){return(this.length)?this[$random(0,this.length-1)]:null;},include:function(a){if(!this.contains(a)){this.push(a);}return this;},combine:function(c){for(var b=0,a=c.length;b<a;b++){this.include(c[b]);}return this;},erase:function(b){for(var a=this.length;a--;a){if(this[a]===b){this.splice(a,1);}}return this;},empty:function(){this.length=0;return this;},flatten:function(){var d=[];for(var b=0,a=this.length;b<a;b++){var c=$type(this[b]);if(!c){continue;}d=d.concat((c=="array"||c=="collection"||c=="arguments")?Array.flatten(this[b]):this[b]);}return d;},hexToRgb:function(b){if(this.length!=3){return null;}var a=this.map(function(c){if(c.length==1){c+=c;}return c.toInt(16);});return(b)?a:"rgb("+a+")";},rgbToHex:function(d){if(this.length<3){return null;}if(this.length==4&&this[3]==0&&!d){return"transparent";}var b=[];for(var a=0;a<3;a++){var c=(this[a]-0).toString(16);b.push((c.length==1)?"0"+c:c);}return(d)?b:"#"+b.join("");}});String.implement({test:function(a,b){return((typeof a=="string")?new RegExp(a,b):a).test(this);},contains:function(a,b){return(b)?(b+this+b).indexOf(b+a+b)>-1:this.indexOf(a)>-1;},trim:function(){return this.replace(/^\s+|\s+$/g,"");},clean:function(){return this.replace(/\s+/g," ").trim();},camelCase:function(){return this.replace(/-\D/g,function(a){return a.charAt(1).toUpperCase();});},hyphenate:function(){return this.replace(/[A-Z]/g,function(a){return("-"+a.charAt(0).toLowerCase());});},capitalize:function(){return this.replace(/\b[a-z]/g,function(a){return a.toUpperCase();});},escapeRegExp:function(){return this.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1");},toInt:function(a){return parseInt(this,a||10);},toFloat:function(){return parseFloat(this);},hexToRgb:function(b){var a=this.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);return(a)?a.slice(1).hexToRgb(b):null;},rgbToHex:function(b){var a=this.match(/\d{1,3}/g);return(a)?a.rgbToHex(b):null;},stripScripts:function(b){var a="";var c=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){a+=arguments[1]+"\n";return"";});if(b===true){$exec(a);}else{if($type(b)=="function"){b(a,c);}}return c;},substitute:function(a,b){return this.replace(b||(/\\?\{([^{}]+)\}/g),function(d,c){if(d.charAt(0)=="\\"){return d.slice(1);}return(a[c]!=undefined)?a[c]:"";});}});try{delete Function.prototype.bind;}catch(e){}Function.implement({extend:function(a){for(var b in a){this[b]=a[b];}return this;},create:function(b){var a=this;b=b||{};return function(d){var c=b.arguments;c=(c!=undefined)?$splat(c):Array.slice(arguments,(b.event)?1:0);if(b.event){c=[d||window.event].extend(c);}var f=function(){return a.apply(b.bind||null,c);};if(b.delay){return setTimeout(f,b.delay);}if(b.periodical){return setInterval(f,b.periodical);}if(b.attempt){return $try(f);}return f();};},run:function(a,b){return this.apply(b,$splat(a));},pass:function(a,b){return this.create({bind:b,arguments:a});},bind:function(b,a){return this.create({bind:b,arguments:a});},bindWithEvent:function(b,a){return this.create({bind:b,arguments:a,event:true});},attempt:function(a,b){return this.create({bind:b,arguments:a,attempt:true})();},delay:function(b,c,a){return this.create({bind:c,arguments:a,delay:b})();},periodical:function(c,b,a){return this.create({bind:b,arguments:a,periodical:c})();}});Number.implement({limit:function(b,a){return Math.min(a,Math.max(b,this));},round:function(a){a=Math.pow(10,a||0);return Math.round(this*a)/a;},times:function(b,c){for(var a=0;a<this;a++){b.call(c,a,this);}},toFloat:function(){return parseFloat(this);},toInt:function(a){return parseInt(this,a||10);}});Number.alias("times","each");(function(b){var a={};b.each(function(c){if(!Number[c]){a[c]=function(){return Math[c].apply(null,[this].concat($A(arguments)));};}});Number.implement(a);})(["abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","max","min","pow","sin","sqrt","tan"]);Hash.implement({has:Object.prototype.hasOwnProperty,keyOf:function(b){for(var a in this){if(this.hasOwnProperty(a)&&this[a]===b){return a;}}return null;},hasValue:function(a){return(Hash.keyOf(this,a)!==null);},extend:function(a){Hash.each(a||{},function(c,b){Hash.set(this,b,c);},this);return this;},combine:function(a){Hash.each(a||{},function(c,b){Hash.include(this,b,c);},this);return this;},erase:function(a){if(this.hasOwnProperty(a)){delete this[a];}return this;},get:function(a){return(this.hasOwnProperty(a))?this[a]:null;},set:function(a,b){if(!this[a]||this.hasOwnProperty(a)){this[a]=b;}return this;},empty:function(){Hash.each(this,function(b,a){delete this[a];},this);return this;},include:function(a,b){if(this[a]==undefined){this[a]=b;}return this;},map:function(b,c){var a=new Hash;Hash.each(this,function(f,d){a.set(d,b.call(c,f,d,this));},this);return a;},filter:function(b,c){var a=new Hash;Hash.each(this,function(f,d){if(b.call(c,f,d,this)){a.set(d,f);}},this);return a;},every:function(b,c){for(var a in this){if(this.hasOwnProperty(a)&&!b.call(c,this[a],a)){return false;}}return true;},some:function(b,c){for(var a in this){if(this.hasOwnProperty(a)&&b.call(c,this[a],a)){return true;}}return false;},getKeys:function(){var a=[];Hash.each(this,function(c,b){a.push(b);});return a;},getValues:function(){var a=[];Hash.each(this,function(b){a.push(b);});return a;},toQueryString:function(a){var b=[];Hash.each(this,function(g,f){if(a){f=a+"["+f+"]";}var d;switch($type(g)){case"object":d=Hash.toQueryString(g,f);break;case"array":var c={};g.each(function(j,h){c[h]=j;});d=Hash.toQueryString(c,f);break;default:d=f+"="+encodeURIComponent(g);}if(g!=undefined){b.push(d);}});return b.join("&");}});Hash.alias({keyOf:"indexOf",hasValue:"contains"});function Class(b){if(b instanceof Function){b={initialize:b};}var a=function(){Object.reset(this);if(a._prototyping){return this;}this._current=$empty;var c=(this.initialize)?this.initialize.apply(this,arguments):this;delete this._current;delete this.caller;return c;}.extend(this);a.implement(b);a.constructor=Class;a.prototype.constructor=a;return a;}Function.prototype.protect=function(){this._protected=true;return this;};Object.reset=function(a,c){if(c==null){for(var f in a){Object.reset(a,f);}return a;}delete a[c];switch($type(a[c])){case"object":var d=function(){};d.prototype=a[c];var b=new d;a[c]=Object.reset(b);break;case"array":a[c]=$unlink(a[c]);break;}return a;};new Native({name:"Class",initialize:Class}).extend({instantiate:function(b){b._prototyping=true;var a=new b;delete b._prototyping;return a;},wrap:function(a,b,c){if(c._origin){c=c._origin;}return function(){if(c._protected&&this._current==null){throw new Error('The method "'+b+'" cannot be called.');}var f=this.caller,g=this._current;this.caller=g;this._current=arguments.callee;var d=c.apply(this,arguments);this._current=g;this.caller=f;return d;}.extend({_owner:a,_origin:c,_name:b});}});Class.implement({implement:function(a,d){if($type(a)=="object"){for(var f in a){this.implement(f,a[f]);}return this;}var g=Class.Mutators[a];if(g){d=g.call(this,d);if(d==null){return this;}}var c=this.prototype;switch($type(d)){case"function":if(d._hidden){return this;}c[a]=Class.wrap(this,a,d);break;case"object":var b=c[a];if($type(b)=="object"){$mixin(b,d);}else{c[a]=$unlink(d);}break;case"array":c[a]=$unlink(d);break;default:c[a]=d;}return this;}});Class.Mutators={Extends:function(a){this.parent=a;this.prototype=Class.instantiate(a);this.implement("parent",function(){var b=this.caller._name,c=this.caller._owner.parent.prototype[b];if(!c){throw new Error('The method "'+b+'" has no parent.');}return c.apply(this,arguments);}.protect());},Implements:function(a){$splat(a).each(function(b){if(b instanceof Function){b=Class.instantiate(b);}this.implement(b);},this);}};var Chain=new Class({$chain:[],chain:function(){this.$chain.extend(Array.flatten(arguments));return this;},callChain:function(){return(this.$chain.length)?this.$chain.shift().apply(this,arguments):false;},clearChain:function(){this.$chain.empty();return this;}});var Events=new Class({$events:{},addEvent:function(c,b,a){c=Events.removeOn(c);if(b!=$empty){this.$events[c]=this.$events[c]||[];this.$events[c].include(b);if(a){b.internal=true;}}return this;},addEvents:function(a){for(var b in a){this.addEvent(b,a[b]);}return this;},fireEvent:function(c,b,a){c=Events.removeOn(c);if(!this.$events||!this.$events[c]){return this;}this.$events[c].each(function(d){d.create({bind:this,delay:a,"arguments":b})();},this);return this;},removeEvent:function(b,a){b=Events.removeOn(b);if(!this.$events[b]){return this;}if(!a.internal){this.$events[b].erase(a);}return this;},removeEvents:function(c){var d;if($type(c)=="object"){for(d in c){this.removeEvent(d,c[d]);}return this;}if(c){c=Events.removeOn(c);}for(d in this.$events){if(c&&c!=d){continue;}var b=this.$events[d];for(var a=b.length;a--;a){this.removeEvent(d,b[a]);}}return this;}});Events.removeOn=function(a){return a.replace(/^on([A-Z])/,function(b,c){return c.toLowerCase();});};var Options=new Class({setOptions:function(){this.options=$merge.run([this.options].extend(arguments));if(!this.addEvent){return this;}for(var a in this.options){if($type(this.options[a])!="function"||!(/^on[A-Z]/).test(a)){continue;}this.addEvent(a,this.options[a]);delete this.options[a];}return this;}});var Browser=$merge({Engine:{name:"unknown",version:0},Platform:{name:(window.orientation!=undefined)?"ipod":(navigator.platform.match(/mac|win|linux/i)||["other"])[0].toLowerCase()},Features:{xpath:!!(document.evaluate),air:!!(window.runtime),query:!!(document.querySelector)},Plugins:{},Engines:{presto:function(){return(!window.opera)?false:((arguments.callee.caller)?960:((document.getElementsByClassName)?950:925));},trident:function(){return(!window.ActiveXObject)?false:((window.XMLHttpRequest)?((document.querySelectorAll)?6:5):4);},webkit:function(){return(navigator.taintEnabled)?false:((Browser.Features.xpath)?((Browser.Features.query)?525:420):419);},gecko:function(){return(!document.getBoxObjectFor&&window.mozInnerScreenX==null)?false:((document.getElementsByClassName)?19:18);}}},Browser||{});Browser.Platform[Browser.Platform.name]=true;Browser.detect=function(){for(var b in this.Engines){var a=this.Engines[b]();if(a){this.Engine={name:b,version:a};this.Engine[b]=this.Engine[b+a]=true;break;}}return{name:b,version:a};};Browser.detect();Browser.Request=function(){return $try(function(){return new XMLHttpRequest();},function(){return new ActiveXObject("MSXML2.XMLHTTP");},function(){return new ActiveXObject("Microsoft.XMLHTTP");});};Browser.Features.xhr=!!(Browser.Request());Browser.Plugins.Flash=(function(){var a=($try(function(){return navigator.plugins["Shockwave Flash"].description;},function(){return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");})||"0 r0").match(/\d+/g);return{version:parseInt(a[0]||0+"."+a[1],10)||0,build:parseInt(a[2],10)||0};})();function $exec(b){if(!b){return b;}if(window.execScript){window.execScript(b);}else{var a=document.createElement("script");a.setAttribute("type","text/javascript");a[(Browser.Engine.webkit&&Browser.Engine.version<420)?"innerText":"text"]=b;document.head.appendChild(a);document.head.removeChild(a);}return b;}Native.UID=1;var $uid=(Browser.Engine.trident)?function(a){return(a.uid||(a.uid=[Native.UID++]))[0];}:function(a){return a.uid||(a.uid=Native.UID++);};var Window=new Native({name:"Window",legacy:(Browser.Engine.trident)?null:window.Window,initialize:function(a){$uid(a);if(!a.Element){a.Element=$empty;if(Browser.Engine.webkit){a.document.createElement("iframe");}a.Element.prototype=(Browser.Engine.webkit)?window["[[DOMElement.prototype]]"]:{};}a.document.window=a;return $extend(a,Window.Prototype);},afterImplement:function(b,a){window[b]=Window.Prototype[b]=a;}});Window.Prototype={$family:{name:"window"}};new Window(window);var Document=new Native({name:"Document",legacy:(Browser.Engine.trident)?null:window.Document,initialize:function(a){$uid(a);a.head=a.getElementsByTagName("head")[0];a.html=a.getElementsByTagName("html")[0];if(Browser.Engine.trident&&Browser.Engine.version<=4){$try(function(){a.execCommand("BackgroundImageCache",false,true);});}if(Browser.Engine.trident){a.window.attachEvent("onunload",function(){a.window.detachEvent("onunload",arguments.callee);a.head=a.html=a.window=null;});}return $extend(a,Document.Prototype);},afterImplement:function(b,a){document[b]=Document.Prototype[b]=a;}});Document.Prototype={$family:{name:"document"}};new Document(document);var Element=new Native({name:"Element",legacy:window.Element,initialize:function(a,b){var c=Element.Constructors.get(a);if(c){return c(b);}if(typeof a=="string"){return document.newElement(a,b);}return document.id(a).set(b);},afterImplement:function(a,b){Element.Prototype[a]=b;if(Array[a]){return;}Elements.implement(a,function(){var c=[],h=true;for(var f=0,d=this.length;f<d;f++){var g=this[f][a].apply(this[f],arguments);c.push(g);if(h){h=($type(g)=="element");}}return(h)?new Elements(c):c;});}});Element.Prototype={$family:{name:"element"}};Element.Constructors=new Hash;var IFrame=new Native({name:"IFrame",generics:false,initialize:function(){var g=Array.link(arguments,{properties:Object.type,iframe:$defined});var d=g.properties||{};var c=document.id(g.iframe);var f=d.onload||$empty;delete d.onload;d.id=d.name=$pick(d.id,d.name,c?(c.id||c.name):"IFrame_"+$time());c=new Element(c||"iframe",d);var b=function(){var h=$try(function(){return c.contentWindow.location.host;});if(!h||h==window.location.host){var i=new Window(c.contentWindow);new Document(c.contentWindow.document);$extend(i.Element.prototype,Element.Prototype);}f.call(c.contentWindow,c.contentWindow.document);};var a=$try(function(){return c.contentWindow;});((a&&a.document.body)||window.frames[d.id])?b():c.addListener("load",b);return c;}});var Elements=new Native({initialize:function(g,b){b=$extend({ddup:true,cash:true},b);g=g||[];if(b.ddup||b.cash){var h={},f=[];for(var c=0,a=g.length;c<a;c++){var d=document.id(g[c],!b.cash);if(b.ddup){if(h[d.uid]){continue;}h[d.uid]=true;}if(d){f.push(d);}}g=f;}return(b.cash)?$extend(g,this):g;}});Elements.implement({filter:function(a,b){if(!a){return this;}return new Elements(Array.filter(this,(typeof a=="string")?function(c){return c.match(a);}:a,b));}});(function(){var d;try{var a=document.createElement("<input name=x>");d=(a.name=="x");}catch(b){}var c=function(f){return(""+f).replace(/&/g,"&amp;").replace(/"/g,"&quot;");};Document.implement({newElement:function(f,g){if(g&&g.checked!=null){g.defaultChecked=g.checked;}if(d&&g){f="<"+f;if(g.name){f+=' name="'+c(g.name)+'"';}if(g.type){f+=' type="'+c(g.type)+'"';}f+=">";delete g.name;delete g.type;}return this.id(this.createElement(f)).set(g);},newTextNode:function(f){return this.createTextNode(f);},getDocument:function(){return this;},getWindow:function(){return this.window;},id:(function(){var f={string:function(i,h,g){i=g.getElementById(i);return(i)?f.element(i,h):null;},element:function(g,j){$uid(g);if(!j&&!g.$family&&!(/^object|embed$/i).test(g.tagName)){var h=Element.Prototype;for(var i in h){g[i]=h[i];}}return g;},object:function(h,i,g){if(h.toElement){return f.element(h.toElement(g),i);}return null;}};f.textnode=f.whitespace=f.window=f.document=$arguments(0);return function(h,j,i){if(h&&h.$family&&h.uid){return h;}var g=$type(h);return(f[g])?f[g](h,j,i||document):null;};})()});})();if(window.$==null){Window.implement({$:function(a,b){return document.id(a,b,this.document);}});}Window.implement({$$:function(a){if(arguments.length==1&&typeof a=="string"){return this.document.getElements(a);}var g=[];var c=Array.flatten(arguments);for(var d=0,b=c.length;d<b;d++){var f=c[d];switch($type(f)){case"element":g.push(f);break;case"string":g.extend(this.document.getElements(f,true));}}return new Elements(g);},getDocument:function(){return this.document;},getWindow:function(){return this;}});Native.implement([Element,Document],{getElement:function(a,b){return document.id(this.getElements(a,true)[0]||null,b);},getElements:function(a,d){a=a.split(",");var c=[];var b=(a.length>1);a.each(function(f){var g=this.getElementsByTagName(f.trim());(b)?c.extend(g):c=g;},this);return new Elements(c,{ddup:b,cash:!d});}});(function(){var i={},g={};var j={input:"checked",option:"selected",textarea:(Browser.Engine.webkit&&Browser.Engine.version<420)?"innerHTML":"value"};var c=function(m){return(g[m]||(g[m]={}));};var h=function(o,m){if(!o){return;}var n=o.uid;if(m!==true){m=false;}if(Browser.Engine.trident){if(o.clearAttributes){var r=m&&o.cloneNode(false);o.clearAttributes();if(r){o.mergeAttributes(r);}}else{if(o.removeEvents){o.removeEvents();}}if((/object/i).test(o.tagName)){for(var q in o){if(typeof o[q]=="function"){o[q]=$empty;}}Element.dispose(o);}}if(!n){return;}i[n]=g[n]=null;};var d=function(){Hash.each(i,h);if(Browser.Engine.trident){$A(document.getElementsByTagName("object")).each(h);}if(window.CollectGarbage){CollectGarbage();}i=g=null;};var k=function(o,m,t,n,q,s){var p=o[t||m];var r=[];while(p){if(p.nodeType==1&&(!n||Element.match(p,n))){if(!q){return document.id(p,s);}r.push(p);}p=p[m];}return(q)?new Elements(r,{ddup:false,cash:!s}):null;};var f={html:"innerHTML","class":"className","for":"htmlFor",defaultValue:"defaultValue",text:(Browser.Engine.trident||(Browser.Engine.webkit&&Browser.Engine.version<420))?"innerText":"textContent"};var b=["compact","nowrap","ismap","declare","noshade","checked","disabled","readonly","multiple","selected","noresize","defer"];var l=["value","type","defaultValue","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","maxLength","readOnly","rowSpan","tabIndex","useMap"];b=b.associate(b);Hash.extend(f,b);Hash.extend(f,l.associate(l.map(String.toLowerCase)));var a={before:function(n,m){if(m.parentNode){m.parentNode.insertBefore(n,m);}},after:function(n,m){if(!m.parentNode){return;}var o=m.nextSibling;(o)?m.parentNode.insertBefore(n,o):m.parentNode.appendChild(n);},bottom:function(n,m){m.appendChild(n);},top:function(n,m){var o=m.firstChild;(o)?m.insertBefore(n,o):m.appendChild(n);}};a.inside=a.bottom;Hash.each(a,function(m,n){n=n.capitalize();Element.implement("inject"+n,function(o){m(this,document.id(o,true));return this;});Element.implement("grab"+n,function(o){m(document.id(o,true),this);return this;});});Element.implement({set:function(q,n){switch($type(q)){case"object":for(var o in q){this.set(o,q[o]);}break;case"string":var m=Element.Properties.get(q);(m&&m.set)?m.set.apply(this,Array.slice(arguments,1)):this.setProperty(q,n);}return this;},get:function(n){var m=Element.Properties.get(n);return(m&&m.get)?m.get.apply(this,Array.slice(arguments,1)):this.getProperty(n);},erase:function(n){var m=Element.Properties.get(n);(m&&m.erase)?m.erase.apply(this):this.removeProperty(n);return this;},setProperty:function(n,o){var m=f[n];if(o==undefined){return this.removeProperty(n);}if(m&&b[n]){o=!!o;}(m)?this[m]=o:this.setAttribute(n,""+o);return this;},setProperties:function(m){for(var n in m){this.setProperty(n,m[n]);}return this;},getProperty:function(n){var m=f[n];var o=(m)?this[m]:this.getAttribute(n,2);return(b[n])?!!o:(m)?o:o||null;},getProperties:function(){var m=$A(arguments);return m.map(this.getProperty,this).associate(m);},removeProperty:function(n){var m=f[n];(m)?this[m]=(m&&b[n])?false:"":this.removeAttribute(n);return this;},removeProperties:function(){Array.each(arguments,this.removeProperty,this);return this;},hasClass:function(m){return this.className.contains(m," ");},addClass:function(m){if(!this.hasClass(m)){this.className=(this.className+" "+m).clean();}return this;},removeClass:function(m){this.className=this.className.replace(new RegExp("(^|\\s)"+m+"(?:\\s|$)"),"$1");return this;},toggleClass:function(m){return this.hasClass(m)?this.removeClass(m):this.addClass(m);},adopt:function(){Array.flatten(arguments).each(function(m){m=document.id(m,true);if(m){this.appendChild(m);}},this);return this;},appendText:function(n,m){return this.grab(this.getDocument().newTextNode(n),m);},grab:function(n,m){a[m||"bottom"](document.id(n,true),this);return this;},inject:function(n,m){a[m||"bottom"](this,document.id(n,true));return this;},replaces:function(m){m=document.id(m,true);m.parentNode.replaceChild(this,m);return this;},wraps:function(n,m){n=document.id(n,true);return this.replaces(n).grab(n,m);},getPrevious:function(m,n){return k(this,"previousSibling",null,m,false,n);},getAllPrevious:function(m,n){return k(this,"previousSibling",null,m,true,n);},getNext:function(m,n){return k(this,"nextSibling",null,m,false,n);},getAllNext:function(m,n){return k(this,"nextSibling",null,m,true,n);},getFirst:function(m,n){return k(this,"nextSibling","firstChild",m,false,n);},getLast:function(m,n){return k(this,"previousSibling","lastChild",m,false,n);},getParent:function(m,n){return k(this,"parentNode",null,m,false,n);},getParents:function(m,n){return k(this,"parentNode",null,m,true,n);},getSiblings:function(m,n){return this.getParent().getChildren(m,n).erase(this);},getChildren:function(m,n){return k(this,"nextSibling","firstChild",m,true,n);},getWindow:function(){return this.ownerDocument.window;},getDocument:function(){return this.ownerDocument;},getElementById:function(p,o){var n=this.ownerDocument.getElementById(p);if(!n){return null;}for(var m=n.parentNode;m!=this;m=m.parentNode){if(!m){return null;}}return document.id(n,o);},getSelected:function(){return new Elements($A(this.options).filter(function(m){return m.selected;}));},getComputedStyle:function(n){if(this.currentStyle){return this.currentStyle[n.camelCase()];}var m=this.getDocument().defaultView.getComputedStyle(this,null);return(m)?m.getPropertyValue([n.hyphenate()]):null;},toQueryString:function(){var m=[];this.getElements("input, select, textarea",true).each(function(n){if(!n.name||n.disabled||n.type=="submit"||n.type=="reset"||n.type=="file"){return;}var o=(n.tagName.toLowerCase()=="select")?Element.getSelected(n).map(function(p){return p.value;}):((n.type=="radio"||n.type=="checkbox")&&!n.checked)?null:n.value;$splat(o).each(function(p){if(typeof p!="undefined"){m.push(n.name+"="+encodeURIComponent(p));}});});return m.join("&");},clone:function(p,m){p=p!==false;var s=this.cloneNode(p);var o=function(w,v){if(!m){w.removeAttribute("id");}if(Browser.Engine.trident){w.clearAttributes();w.mergeAttributes(v);w.removeAttribute("uid");if(w.options){var x=w.options,t=v.options;for(var u=x.length;u--;){x[u].selected=t[u].selected;}}}var y=j[v.tagName.toLowerCase()];if(y&&v[y]){w[y]=v[y];}};if(p){var q=s.getElementsByTagName("*"),r=this.getElementsByTagName("*");for(var n=q.length;n--;){o(q[n],r[n]);}}o(s,this);return document.id(s);},destroy:function(){Element.empty(this);Element.dispose(this);h(this,true);return null;},empty:function(){$A(this.childNodes).each(function(m){Element.destroy(m);});return this;},dispose:function(){return(this.parentNode)?this.parentNode.removeChild(this):this;},hasChild:function(m){m=document.id(m,true);if(!m){return false;}if(Browser.Engine.webkit&&Browser.Engine.version<420){return $A(this.getElementsByTagName(m.tagName)).contains(m);}return(this.contains)?(this!=m&&this.contains(m)):!!(this.compareDocumentPosition(m)&16);},match:function(m){return(!m||(m==this)||(Element.get(this,"tag")==m));}});Native.implement([Element,Window,Document],{addListener:function(p,o){if(p=="unload"){var m=o,n=this;o=function(){n.removeListener("unload",o);m();};}else{i[this.uid]=this;}if(this.addEventListener){this.addEventListener(p,o,false);}else{this.attachEvent("on"+p,o);}return this;},removeListener:function(n,m){if(this.removeEventListener){this.removeEventListener(n,m,false);}else{this.detachEvent("on"+n,m);}return this;},retrieve:function(n,m){var p=c(this.uid),o=p[n];if(m!=undefined&&o==undefined){o=p[n]=m;}return $pick(o);},store:function(n,m){var o=c(this.uid);o[n]=m;return this;},eliminate:function(m){var n=c(this.uid);delete n[m];return this;}});window.addListener("unload",d);})();Element.Properties=new Hash;Element.Properties.style={set:function(a){this.style.cssText=a;},get:function(){return this.style.cssText;},erase:function(){this.style.cssText="";}};Element.Properties.tag={get:function(){return this.tagName.toLowerCase();}};Element.Properties.html=(function(){var c=document.createElement("div");var a={table:[1,"<table>","</table>"],select:[1,"<select>","</select>"],tbody:[2,"<table><tbody>","</tbody></table>"],tr:[3,"<table><tbody><tr>","</tr></tbody></table>"]};a.thead=a.tfoot=a.tbody;var b={set:function(){var f=Array.flatten(arguments).join("");var g=Browser.Engine.trident&&a[this.get("tag")];if(g){var h=c;h.innerHTML=g[1]+f+g[2];for(var d=g[0];d--;){h=h.firstChild;}this.empty().adopt(h.childNodes);}else{this.innerHTML=f;}}};b.erase=b.set;return b;})();if(Browser.Engine.webkit&&Browser.Engine.version<420){Element.Properties.text={get:function(){if(this.innerText){return this.innerText;}var a=this.ownerDocument.newElement("div",{html:this.innerHTML}).inject(this.ownerDocument.body);var b=a.innerText;a.destroy();return b;}};}(function(){Element.implement({scrollTo:function(i,j){if(b(this)){this.getWindow().scrollTo(i,j);}else{this.scrollLeft=i;this.scrollTop=j;}return this;},getSize:function(){if(b(this)){return this.getWindow().getSize();}return{x:this.offsetWidth,y:this.offsetHeight};},getScrollSize:function(){if(b(this)){return this.getWindow().getScrollSize();}return{x:this.scrollWidth,y:this.scrollHeight};},getScroll:function(){if(b(this)){return this.getWindow().getScroll();}return{x:this.scrollLeft,y:this.scrollTop};},getScrolls:function(){var j=this,i={x:0,y:0};while(j&&!b(j)){i.x+=j.scrollLeft;i.y+=j.scrollTop;j=j.parentNode;}return i;},getOffsetParent:function(){var i=this;if(b(i)){return null;}if(!Browser.Engine.trident){return i.offsetParent;}while((i=i.parentNode)&&!b(i)){if(d(i,"position")!="static"){return i;}}return null;},getOffsets:function(){if(this.getBoundingClientRect){var k=this.getBoundingClientRect(),n=document.id(this.getDocument().documentElement),q=n.getScroll(),l=this.getScrolls(),j=this.getScroll(),i=(d(this,"position")=="fixed");return{x:k.left.toInt()+l.x-j.x+((i)?0:q.x)-n.clientLeft,y:k.top.toInt()+l.y-j.y+((i)?0:q.y)-n.clientTop};}var m=this,o={x:0,y:0};if(b(this)){return o;}while(m&&!b(m)){o.x+=m.offsetLeft;o.y+=m.offsetTop;if(Browser.Engine.gecko){if(!g(m)){o.x+=c(m);o.y+=h(m);}var p=m.parentNode;if(p&&d(p,"overflow")!="visible"){o.x+=c(p);o.y+=h(p);}}else{if(m!=this&&Browser.Engine.webkit){o.x+=c(m);o.y+=h(m);}}m=m.offsetParent;}if(Browser.Engine.gecko&&!g(this)){o.x-=c(this);o.y-=h(this);}return o;},getPosition:function(l){if(b(this)){return{x:0,y:0};}var m=this.getOffsets(),j=this.getScrolls();var i={x:m.x-j.x,y:m.y-j.y};var k=(l&&(l=document.id(l)))?l.getPosition():{x:0,y:0};return{x:i.x-k.x,y:i.y-k.y};},getCoordinates:function(k){if(b(this)){return this.getWindow().getCoordinates();}var i=this.getPosition(k),j=this.getSize();var l={left:i.x,top:i.y,width:j.x,height:j.y};l.right=l.left+l.width;l.bottom=l.top+l.height;return l;},computePosition:function(i){return{left:i.x-f(this,"margin-left"),top:i.y-f(this,"margin-top")};},setPosition:function(i){return this.setStyles(this.computePosition(i));}});Native.implement([Document,Window],{getSize:function(){if(Browser.Engine.presto||Browser.Engine.webkit){var j=this.getWindow();return{x:j.innerWidth,y:j.innerHeight};}var i=a(this);return{x:i.clientWidth,y:i.clientHeight};},getScroll:function(){var j=this.getWindow(),i=a(this);return{x:j.pageXOffset||i.scrollLeft,y:j.pageYOffset||i.scrollTop};},getScrollSize:function(){var j=a(this),i=this.getSize();return{x:Math.max(j.scrollWidth,i.x),y:Math.max(j.scrollHeight,i.y)};},getPosition:function(){return{x:0,y:0};},getCoordinates:function(){var i=this.getSize();return{top:0,left:0,bottom:i.y,right:i.x,height:i.y,width:i.x};}});var d=Element.getComputedStyle;function f(i,j){return d(i,j).toInt()||0;}function g(i){return d(i,"-moz-box-sizing")=="border-box";}function h(i){return f(i,"border-top-width");}function c(i){return f(i,"border-left-width");}function b(i){return(/^(?:body|html)$/i).test(i.tagName);}function a(i){var j=i.getDocument();return(!j.compatMode||j.compatMode=="CSS1Compat")?j.html:j.body;}})();Element.alias("setPosition","position");Native.implement([Window,Document,Element],{getHeight:function(){return this.getSize().y;},getWidth:function(){return this.getSize().x;},getScrollTop:function(){return this.getScroll().y;},getScrollLeft:function(){return this.getScroll().x;},getScrollHeight:function(){return this.getScrollSize().y;},getScrollWidth:function(){return this.getScrollSize().x;},getTop:function(){return this.getPosition().y;},getLeft:function(){return this.getPosition().x;}});var Event=new Native({name:"Event",initialize:function(a,g){g=g||window;var l=g.document;a=a||g.event;if(a.$extended){return a;}this.$extended=true;var k=a.type;var h=a.target||a.srcElement;while(h&&h.nodeType==3){h=h.parentNode;}if(k.test(/key/)){var b=a.which||a.keyCode;var n=Event.Keys.keyOf(b);if(k=="keydown"){var d=b-111;if(d>0&&d<13){n="f"+d;}}n=n||String.fromCharCode(b).toLowerCase();}else{if(k.match(/(click|mouse|menu)/i)){l=(!l.compatMode||l.compatMode=="CSS1Compat")?l.html:l.body;var j={x:a.pageX||a.clientX+l.scrollLeft,y:a.pageY||a.clientY+l.scrollTop};var c={x:(a.pageX)?a.pageX-g.pageXOffset:a.clientX,y:(a.pageY)?a.pageY-g.pageYOffset:a.clientY};if(k.match(/DOMMouseScroll|mousewheel/)){var i=(a.wheelDelta)?a.wheelDelta/120:-(a.detail||0)/3;}var f=(a.which==3)||(a.button==2);var m=null;if(k.match(/over|out/)){switch(k){case"mouseover":m=a.relatedTarget||a.fromElement;break;case"mouseout":m=a.relatedTarget||a.toElement;}if(!(function(){while(m&&m.nodeType==3){m=m.parentNode;}return true;}).create({attempt:Browser.Engine.gecko})()){m=false;}}}}return $extend(this,{event:a,type:k,page:j,client:c,rightClick:f,wheel:i,relatedTarget:m,target:h,code:b,key:n,shift:a.shiftKey,control:a.ctrlKey,alt:a.altKey,meta:a.metaKey});}});Event.Keys=new Hash({enter:13,up:38,down:40,left:37,right:39,esc:27,space:32,backspace:8,tab:9,"delete":46});Event.implement({stop:function(){return this.stopPropagation().preventDefault();},stopPropagation:function(){if(this.event.stopPropagation){this.event.stopPropagation();}else{this.event.cancelBubble=true;}return this;},preventDefault:function(){if(this.event.preventDefault){this.event.preventDefault();}else{this.event.returnValue=false;}return this;}});Element.Properties.events={set:function(a){this.addEvents(a);}};Native.implement([Element,Window,Document],{addEvent:function(f,h){var i=this.retrieve("events",{});i[f]=i[f]||{keys:[],values:[]};if(i[f].keys.contains(h)){return this;}i[f].keys.push(h);var g=f,a=Element.Events.get(f),c=h,j=this;if(a){if(a.onAdd){a.onAdd.call(this,h);}if(a.condition){c=function(k){if(a.condition.call(this,k)){return h.call(this,k);}return true;};}g=a.base||g;}var d=function(){return h.call(j);};var b=Element.NativeEvents[g];if(b){if(b==2){d=function(k){k=new Event(k,j.getWindow());if(c.call(j,k)===false){k.stop();}};}this.addListener(g,d);}i[f].values.push(d);return this;},removeEvent:function(c,b){var a=this.retrieve("events");if(!a||!a[c]){return this;}var g=a[c].keys.indexOf(b);if(g==-1){return this;}a[c].keys.splice(g,1);var f=a[c].values.splice(g,1)[0];var d=Element.Events.get(c);if(d){if(d.onRemove){d.onRemove.call(this,b);}c=d.base||c;}return(Element.NativeEvents[c])?this.removeListener(c,f):this;},addEvents:function(a){for(var b in a){this.addEvent(b,a[b]);}return this;},removeEvents:function(a){var c;if($type(a)=="object"){for(c in a){this.removeEvent(c,a[c]);}return this;}var b=this.retrieve("events");if(!b){return this;}if(!a){for(c in b){this.removeEvents(c);}this.eliminate("events");}else{if(b[a]){while(b[a].keys[0]){this.removeEvent(a,b[a].keys[0]);}b[a]=null;}}return this;},fireEvent:function(d,b,a){var c=this.retrieve("events");if(!c||!c[d]){return this;}c[d].keys.each(function(f){f.create({bind:this,delay:a,"arguments":b})();},this);return this;},cloneEvents:function(d,a){d=document.id(d);var c=d.retrieve("events");if(!c){return this;}if(!a){for(var b in c){this.cloneEvents(d,b);}}else{if(c[a]){c[a].keys.each(function(f){this.addEvent(a,f);},this);}}return this;}});try{if(typeof HTMLElement!="undefined"){HTMLElement.prototype.fireEvent=Element.prototype.fireEvent;}}catch(e){}Element.NativeEvents={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,load:1,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};(function(){var a=function(b){var c=b.relatedTarget;if(c==undefined){return true;}if(c===false){return false;}return($type(this)!="document"&&c!=this&&c.prefix!="xul"&&!this.hasChild(c));};Element.Events=new Hash({mouseenter:{base:"mouseover",condition:a},mouseleave:{base:"mouseout",condition:a},mousewheel:{base:(Browser.Engine.gecko)?"DOMMouseScroll":"mousewheel"}});})();Element.Properties.styles={set:function(a){this.setStyles(a);}};Element.Properties.opacity={set:function(a,b){if(!b){if(a==0){if(this.style.visibility!="hidden"){this.style.visibility="hidden";}}else{if(this.style.visibility!="visible"){this.style.visibility="visible";}}}if(!this.currentStyle||!this.currentStyle.hasLayout){this.style.zoom=1;}if(Browser.Engine.trident){this.style.filter=(a==1)?"":"alpha(opacity="+a*100+")";}this.style.opacity=a;this.store("opacity",a);},get:function(){return this.retrieve("opacity",1);}};Element.implement({setOpacity:function(a){return this.set("opacity",a,true);},getOpacity:function(){return this.get("opacity");},setStyle:function(b,a){switch(b){case"opacity":return this.set("opacity",parseFloat(a));case"float":b=(Browser.Engine.trident)?"styleFloat":"cssFloat";}b=b.camelCase();if($type(a)!="string"){var c=(Element.Styles.get(b)||"@").split(" ");a=$splat(a).map(function(f,d){if(!c[d]){return"";}return($type(f)=="number")?c[d].replace("@",Math.round(f)):f;}).join(" ");}else{if(a==String(Number(a))){a=Math.round(a);}}this.style[b]=a;return this;},getStyle:function(h){switch(h){case"opacity":return this.get("opacity");case"float":h=(Browser.Engine.trident)?"styleFloat":"cssFloat";}h=h.camelCase();var a=this.style[h];if(!$chk(a)){a=[];for(var g in Element.ShortStyles){if(h!=g){continue;}for(var f in Element.ShortStyles[g]){a.push(this.getStyle(f));}return a.join(" ");}a=this.getComputedStyle(h);}if(a){a=String(a);var c=a.match(/rgba?\([\d\s,]+\)/);if(c){a=a.replace(c[0],c[0].rgbToHex());}}if(Browser.Engine.presto||(Browser.Engine.trident&&!$chk(parseInt(a,10)))){if(h.test(/^(height|width)$/)){var b=(h=="width")?["left","right"]:["top","bottom"],d=0;b.each(function(i){d+=this.getStyle("border-"+i+"-width").toInt()+this.getStyle("padding-"+i).toInt();},this);return this["offset"+h.capitalize()]-d+"px";}if((Browser.Engine.presto)&&String(a).test("px")){return a;}if(h.test(/(border(.+)Width|margin|padding)/)){return"0px";}}return a;},setStyles:function(b){for(var a in b){this.setStyle(a,b[a]);}return this;},getStyles:function(){var a={};Array.flatten(arguments).each(function(b){a[b]=this.getStyle(b);},this);return a;}});Element.Styles=new Hash({left:"@px",top:"@px",bottom:"@px",right:"@px",width:"@px",height:"@px",maxWidth:"@px",maxHeight:"@px",minWidth:"@px",minHeight:"@px",backgroundColor:"rgb(@, @, @)",backgroundPosition:"@px @px",color:"rgb(@, @, @)",fontSize:"@px",letterSpacing:"@px",lineHeight:"@px",clip:"rect(@px @px @px @px)",margin:"@px @px @px @px",padding:"@px @px @px @px",border:"@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",borderWidth:"@px @px @px @px",borderStyle:"@ @ @ @",borderColor:"rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",zIndex:"@",zoom:"@",fontWeight:"@",textIndent:"@px",opacity:"@"});Element.ShortStyles={margin:{},padding:{},border:{},borderWidth:{},borderStyle:{},borderColor:{}};["Top","Right","Bottom","Left"].each(function(h){var g=Element.ShortStyles;var b=Element.Styles;["margin","padding"].each(function(i){var j=i+h;g[i][j]=b[j]="@px";});var f="border"+h;g.border[f]=b[f]="@px @ rgb(@, @, @)";var d=f+"Width",a=f+"Style",c=f+"Color";g[f]={};g.borderWidth[d]=g[f][d]=b[d]="@px";g.borderStyle[a]=g[f][a]=b[a]="@";g.borderColor[c]=g[f][c]=b[c]="rgb(@, @, @)";});var Fx=new Class({Implements:[Chain,Events,Options],options:{fps:50,unit:false,duration:500,link:"ignore"},initialize:function(a){this.subject=this.subject||this;this.setOptions(a);this.options.duration=Fx.Durations[this.options.duration]||this.options.duration.toInt();var b=this.options.wait;if(b===false){this.options.link="cancel";}},getTransition:function(){return function(a){return -(Math.cos(Math.PI*a)-1)/2;};},step:function(){var a=$time();if(a<this.time+this.options.duration){var b=this.transition((a-this.time)/this.options.duration);this.set(this.compute(this.from,this.to,b));}else{this.set(this.compute(this.from,this.to,1));this.complete();}},set:function(a){return a;},compute:function(c,b,a){return Fx.compute(c,b,a);},check:function(){if(!this.timer){return true;}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.bind(this,arguments));return false;}return false;},start:function(b,a){if(!this.check(b,a)){return this;}this.from=b;this.to=a;this.time=0;this.transition=this.getTransition();this.startTimer();this.onStart();return this;},complete:function(){if(this.stopTimer()){this.onComplete();}return this;},cancel:function(){if(this.stopTimer()){this.onCancel();}return this;},onStart:function(){this.fireEvent("start",this.subject);},onComplete:function(){this.fireEvent("complete",this.subject);if(!this.callChain()){this.fireEvent("chainComplete",this.subject);}},onCancel:function(){this.fireEvent("cancel",this.subject).clearChain();},pause:function(){this.stopTimer();return this;},resume:function(){this.startTimer();return this;},stopTimer:function(){if(!this.timer){return false;}this.time=$time()-this.time;this.timer=$clear(this.timer);return true;},startTimer:function(){if(this.timer){return false;}this.time=$time()-this.time;this.timer=this.step.periodical(Math.round(1000/this.options.fps),this);return true;}});Fx.compute=function(c,b,a){return(b-c)*a+c;};Fx.Durations={"short":250,normal:500,"long":1000};Fx.CSS=new Class({Extends:Fx,prepare:function(d,f,b){b=$splat(b);var c=b[1];if(!$chk(c)){b[1]=b[0];b[0]=d.getStyle(f);}var a=b.map(this.parse);return{from:a[0],to:a[1]};},parse:function(a){a=$lambda(a)();a=(typeof a=="string")?a.split(" "):$splat(a);return a.map(function(c){c=String(c);var b=false;Fx.CSS.Parsers.each(function(g,f){if(b){return;}var d=g.parse(c);if($chk(d)){b={value:d,parser:g};}});b=b||{value:c,parser:Fx.CSS.Parsers.String};return b;});},compute:function(d,c,b){var a=[];(Math.min(d.length,c.length)).times(function(f){a.push({value:d[f].parser.compute(d[f].value,c[f].value,b),parser:d[f].parser});});a.$family={name:"fx:css:value"};return a;},serve:function(c,b){if($type(c)!="fx:css:value"){c=this.parse(c);}var a=[];c.each(function(d){a=a.concat(d.parser.serve(d.value,b));});return a;},render:function(a,d,c,b){a.setStyle(d,this.serve(c,b));},search:function(a){if(Fx.CSS.Cache[a]){return Fx.CSS.Cache[a];}var b={};Array.each(document.styleSheets,function(f,d){var c=f.href;if(c&&c.contains("://")&&!c.contains(document.domain)){return;}var g=f.rules||f.cssRules;Array.each(g,function(k,h){if(!k.style){return;}var j=(k.selectorText)?k.selectorText.replace(/^\w+/,function(i){return i.toLowerCase();}):null;if(!j||!j.test("^"+a+"$")){return;}Element.Styles.each(function(l,i){if(!k.style[i]||Element.ShortStyles[i]){return;}l=String(k.style[i]);b[i]=(l.test(/^rgb/))?l.rgbToHex():l;});});});return Fx.CSS.Cache[a]=b;}});Fx.CSS.Cache={};Fx.CSS.Parsers=new Hash({Color:{parse:function(a){if(a.match(/^#[0-9a-f]{3,6}$/i)){return a.hexToRgb(true);}return((a=a.match(/(\d+),\s*(\d+),\s*(\d+)/)))?[a[1],a[2],a[3]]:false;},compute:function(c,b,a){return c.map(function(f,d){return Math.round(Fx.compute(c[d],b[d],a));});},serve:function(a){return a.map(Number);}},Number:{parse:parseFloat,compute:Fx.compute,serve:function(b,a){return(a)?b+a:b;}},String:{parse:$lambda(false),compute:$arguments(1),serve:$arguments(0)}});Fx.Morph=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a);},set:function(a){if(typeof a=="string"){a=this.search(a);}for(var b in a){this.render(this.element,b,a[b],this.options.unit);}return this;},compute:function(f,d,c){var a={};for(var b in f){a[b]=this.parent(f[b],d[b],c);}return a;},start:function(b){if(!this.check(b)){return this;}if(typeof b=="string"){b=this.search(b);}var f={},d={};for(var c in b){var a=this.prepare(this.element,c,b[c]);f[c]=a.from;d[c]=a.to;}return this.parent(f,d);}});Element.Properties.morph={set:function(a){var b=this.retrieve("morph");if(b){b.cancel();}return this.eliminate("morph").store("morph:options",$extend({link:"cancel"},a));},get:function(a){if(a||!this.retrieve("morph")){if(a||!this.retrieve("morph:options")){this.set("morph",a);}this.store("morph",new Fx.Morph(this,this.retrieve("morph:options")));}return this.retrieve("morph");}};Element.implement({morph:function(a){this.get("morph").start(a);return this;}});Fx.implement({getTransition:function(){var a=this.options.transition||Fx.Transitions.Sine.easeInOut;if(typeof a=="string"){var b=a.split(":");a=Fx.Transitions;a=a[b[0]]||a[b[0].capitalize()];if(b[1]){a=a["ease"+b[1].capitalize()+(b[2]?b[2].capitalize():"")];}}return a;}});Fx.Transition=function(b,a){a=$splat(a);return $extend(b,{easeIn:function(c){return b(c,a);},easeOut:function(c){return 1-b(1-c,a);},easeInOut:function(c){return(c<=0.5)?b(2*c,a)/2:(2-b(2*(1-c),a))/2;}});};Fx.Transitions=new Hash({linear:$arguments(0)});Fx.Transitions.extend=function(a){for(var b in a){Fx.Transitions[b]=new Fx.Transition(a[b]);}};Fx.Transitions.extend({Pow:function(b,a){return Math.pow(b,a[0]||6);},Expo:function(a){return Math.pow(2,8*(a-1));},Circ:function(a){return 1-Math.sin(Math.acos(a));},Sine:function(a){return 1-Math.sin((1-a)*Math.PI/2);},Back:function(b,a){a=a[0]||1.618;return Math.pow(b,2)*((a+1)*b-a);},Bounce:function(g){var f;for(var d=0,c=1;1;d+=c,c/=2){if(g>=(7-4*d)/11){f=c*c-Math.pow((11-6*d-11*g)/4,2);break;}}return f;},Elastic:function(b,a){return Math.pow(2,10*--b)*Math.cos(20*b*Math.PI*(a[0]||1)/3);}});["Quad","Cubic","Quart","Quint"].each(function(b,a){Fx.Transitions[b]=new Fx.Transition(function(c){return Math.pow(c,[a+2]);});});Fx.Tween=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a);},set:function(b,a){if(arguments.length==1){a=b;b=this.property||this.options.property;}this.render(this.element,b,a,this.options.unit);return this;},start:function(c,f,d){if(!this.check(c,f,d)){return this;}var b=Array.flatten(arguments);this.property=this.options.property||b.shift();var a=this.prepare(this.element,this.property,b);return this.parent(a.from,a.to);}});Element.Properties.tween={set:function(a){var b=this.retrieve("tween");if(b){b.cancel();}return this.eliminate("tween").store("tween:options",$extend({link:"cancel"},a));},get:function(a){if(a||!this.retrieve("tween")){if(a||!this.retrieve("tween:options")){this.set("tween",a);}this.store("tween",new Fx.Tween(this,this.retrieve("tween:options")));}return this.retrieve("tween");}};Element.implement({tween:function(a,c,b){this.get("tween").start(arguments);return this;},fade:function(c){var f=this.get("tween"),d="opacity",a;c=$pick(c,"toggle");switch(c){case"in":f.start(d,1);break;case"out":f.start(d,0);break;case"show":f.set(d,1);break;case"hide":f.set(d,0);break;case"toggle":var b=this.retrieve("fade:flag",this.get("opacity")==1);f.start(d,(b)?0:1);this.store("fade:flag",!b);a=true;break;default:f.start(d,arguments);}if(!a){this.eliminate("fade:flag");}return this;},highlight:function(c,a){if(!a){a=this.retrieve("highlight:original",this.getStyle("background-color"));a=(a=="transparent")?"#fff":a;}var b=this.get("tween");b.start("background-color",c||"#ffff88",a).chain(function(){this.setStyle("background-color",this.retrieve("highlight:original"));b.callChain();}.bind(this));return this;}});var Request=new Class({Implements:[Chain,Events,Options],options:{url:"",data:"",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},async:true,format:false,method:"post",link:"ignore",isSuccess:null,emulation:true,urlEncoded:true,encoding:"utf-8",evalScripts:false,evalResponse:false,noCache:false},initialize:function(a){this.xhr=new Browser.Request();this.setOptions(a);this.options.isSuccess=this.options.isSuccess||this.isSuccess;this.headers=new Hash(this.options.headers);},onStateChange:function(){if(this.xhr.readyState!=4||!this.running){return;}this.running=false;this.status=0;$try(function(){this.status=this.xhr.status;}.bind(this));this.xhr.onreadystatechange=$empty;if(this.options.isSuccess.call(this,this.status)){this.response={text:this.xhr.responseText,xml:this.xhr.responseXML};this.success(this.response.text,this.response.xml);}else{this.response={text:null,xml:null};this.failure();}},isSuccess:function(){return((this.status>=200)&&(this.status<300));},processScripts:function(a){if(this.options.evalResponse||(/(ecma|java)script/).test(this.getHeader("Content-type"))){return $exec(a);}return a.stripScripts(this.options.evalScripts);},success:function(b,a){this.onSuccess(this.processScripts(b),a);},onSuccess:function(){this.fireEvent("complete",arguments).fireEvent("success",arguments).callChain();},failure:function(){this.onFailure();},onFailure:function(){this.fireEvent("complete").fireEvent("failure",this.xhr);},setHeader:function(a,b){this.headers.set(a,b);return this;},getHeader:function(a){return $try(function(){return this.xhr.getResponseHeader(a);}.bind(this));},check:function(){if(!this.running){return true;}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.bind(this,arguments));return false;}return false;},send:function(l){if(!this.check(l)){return this;}this.running=true;var j=$type(l);if(j=="string"||j=="element"){l={data:l};}var d=this.options;l=$extend({data:d.data,url:d.url,method:d.method},l);var h=l.data,b=String(l.url),a=l.method.toLowerCase();switch($type(h)){case"element":h=document.id(h).toQueryString();break;case"object":case"hash":h=Hash.toQueryString(h);}if(this.options.format){var k="format="+this.options.format;h=(h)?k+"&"+h:k;}if(this.options.emulation&&!["get","post"].contains(a)){var i="_method="+a;h=(h)?i+"&"+h:i;a="post";}if(this.options.urlEncoded&&a=="post"){var c=(this.options.encoding)?"; charset="+this.options.encoding:"";this.headers.set("Content-type","application/x-www-form-urlencoded"+c);}if(this.options.noCache){var g="noCache="+new Date().getTime();h=(h)?g+"&"+h:g;}var f=b.lastIndexOf("/");if(f>-1&&(f=b.indexOf("#"))>-1){b=b.substr(0,f);}if(h&&a=="get"){b=b+(b.contains("?")?"&":"?")+h;h=null;}this.xhr.open(a.toUpperCase(),b,this.options.async);this.xhr.onreadystatechange=this.onStateChange.bind(this);this.headers.each(function(n,m){try{this.xhr.setRequestHeader(m,n);}catch(o){this.fireEvent("exception",[m,n]);}},this);this.fireEvent("request");this.xhr.send(h);if(!this.options.async){this.onStateChange();}return this;},cancel:function(){if(!this.running){return this;}this.running=false;this.xhr.abort();this.xhr.onreadystatechange=$empty;this.xhr=new Browser.Request();this.fireEvent("cancel");return this;}});(function(){var a={};["get","post","put","delete","GET","POST","PUT","DELETE"].each(function(b){a[b]=function(){var c=Array.link(arguments,{url:String.type,data:$defined});return this.send($extend(c,{method:b}));};});Request.implement(a);})();Element.Properties.send={set:function(a){var b=this.retrieve("send");if(b){b.cancel();}return this.eliminate("send").store("send:options",$extend({data:this,link:"cancel",method:this.get("method")||"post",url:this.get("action")},a));},get:function(a){if(a||!this.retrieve("send")){if(a||!this.retrieve("send:options")){this.set("send",a);}this.store("send",new Request(this.retrieve("send:options")));}return this.retrieve("send");}};Element.implement({send:function(a){var b=this.get("send");b.send({data:this,url:a||b.options.url});return this;}});Request.HTML=new Class({Extends:Request,options:{update:false,append:false,evalScripts:true,filter:false},processHTML:function(c){var b=c.match(/<body[^>]*>([\s\S]*?)<\/body>/i);c=(b)?b[1]:c;var a=new Element("div");return $try(function(){var d="<root>"+c+"</root>",h;if(Browser.Engine.trident){h=new ActiveXObject("Microsoft.XMLDOM");h.async=false;h.loadXML(d);}else{h=new DOMParser().parseFromString(d,"text/xml");}d=h.getElementsByTagName("root")[0];if(!d){return null;}for(var g=0,f=d.childNodes.length;g<f;g++){var j=Element.clone(d.childNodes[g],true,true);if(j){a.grab(j);}}return a;})||a.set("html",c);},success:function(d){var c=this.options,b=this.response;b.html=d.stripScripts(function(f){b.javascript=f;});var a=this.processHTML(b.html);b.tree=a.childNodes;b.elements=a.getElements("*");if(c.filter){b.tree=b.elements.filter(c.filter);}if(c.update){document.id(c.update).empty().set("html",b.html);}else{if(c.append){document.id(c.append).adopt(a.getChildren());}}if(c.evalScripts){$exec(b.javascript);}this.onSuccess(b.tree,b.elements,b.html,b.javascript);}});Element.Properties.load={set:function(a){var b=this.retrieve("load");if(b){b.cancel();}return this.eliminate("load").store("load:options",$extend({data:this,link:"cancel",update:this,method:"get"},a));},get:function(a){if(a||!this.retrieve("load")){if(a||!this.retrieve("load:options")){this.set("load",a);}this.store("load",new Request.HTML(this.retrieve("load:options")));}return this.retrieve("load");}};Element.implement({load:function(){this.get("load").send(Array.link(arguments,{data:Object.type,url:String.type}));return this;}});var JSON=new Hash(this.JSON&&{stringify:JSON.stringify,parse:JSON.parse}).extend({$specialChars:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},$replaceChars:function(a){return JSON.$specialChars[a]||"\\u00"+Math.floor(a.charCodeAt()/16).toString(16)+(a.charCodeAt()%16).toString(16);},encode:function(b){switch($type(b)){case"string":return'"'+b.replace(/[\x00-\x1f\\"]/g,JSON.$replaceChars)+'"';case"array":return"["+String(b.map(JSON.encode).clean())+"]";case"object":case"hash":var a=[];Hash.each(b,function(f,d){var c=JSON.encode(f);if(c){a.push(JSON.encode(d)+":"+c);}});return"{"+a+"}";case"number":case"boolean":return String(b);case false:return"null";}return null;},decode:function(string,secure){if($type(string)!="string"||!string.length){return null;}if(secure&&!(/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(string.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"/g,""))){return null;}return eval("("+string+")");}});Request.JSON=new Class({Extends:Request,options:{secure:true},initialize:function(a){this.parent(a);this.headers.extend({Accept:"application/json","X-Request":"JSON"});},success:function(a){this.response.json=JSON.decode(a,this.options.secure);this.onSuccess(this.response.json,a);}});var Cookie=new Class({Implements:Options,options:{path:false,domain:false,duration:false,secure:false,document:document},initialize:function(b,a){this.key=b;this.setOptions(a);},write:function(b){b=encodeURIComponent(b);if(this.options.domain){b+="; domain="+this.options.domain;}if(this.options.path){b+="; path="+this.options.path;}if(this.options.duration){var a=new Date();a.setTime(a.getTime()+this.options.duration*24*60*60*1000);b+="; expires="+a.toGMTString();}if(this.options.secure){b+="; secure";}this.options.document.cookie=this.key+"="+b;return this;},read:function(){var a=this.options.document.cookie.match("(?:^|;)\\s*"+this.key.escapeRegExp()+"=([^;]*)");return(a)?decodeURIComponent(a[1]):null;},dispose:function(){new Cookie(this.key,$merge(this.options,{duration:-1})).write("");return this;}});Cookie.write=function(b,c,a){return new Cookie(b,a).write(c);};Cookie.read=function(a){return new Cookie(a).read();};Cookie.dispose=function(b,a){return new Cookie(b,a).dispose();};Element.Events.domready={onAdd:function(a){if(Browser.loaded){a.call(this);}}};(function(){var b=function(){if(Browser.loaded){return;}Browser.loaded=true;window.fireEvent("domready");document.fireEvent("domready");};window.addEvent("load",b);if(Browser.Engine.trident){var a=document.createElement("div");(function(){($try(function(){a.doScroll();return document.id(a).inject(document.body).set("html","temp").dispose();}))?b():arguments.callee.delay(50);})();}else{if(Browser.Engine.webkit&&Browser.Engine.version<525){(function(){(["loaded","complete"].contains(document.readyState))?b():arguments.callee.delay(50);})();}else{document.addEvent("DOMContentLoaded",b);}}})();Native.implement([Document,Element],{getElements:function(j,h){j=j.split(",");var c,f={};for(var d=0,b=j.length;d<b;d++){var a=j[d],g=Selectors.Utils.search(this,a,f);if(d!=0&&g.item){g=$A(g);}c=(d==0)?g:(c.item)?$A(c).concat(g):c.concat(g);}return new Elements(c,{ddup:(j.length>1),cash:!h});}});Element.implement({match:function(b){if(!b||(b==this)){return true;}var d=Selectors.Utils.parseTagAndID(b);var a=d[0],f=d[1];if(!Selectors.Filters.byID(this,f)||!Selectors.Filters.byTag(this,a)){return false;}var c=Selectors.Utils.parseSelector(b);return(c)?Selectors.Utils.filter(this,c,{}):true;}});var Selectors={Cache:{nth:{},parsed:{}}};Selectors.RegExps={id:(/#([\w-]+)/),tag:(/^(\w+|\*)/),quick:(/^(\w+|\*)$/),splitter:(/\s*([+>~\s])\s*([a-zA-Z#.*:\[])/g),combined:(/\.([\w-]+)|\[(\w+)(?:([!*^$~|]?=)(["']?)([^\4]*?)\4)?\]|:([\w-]+)(?:\(["']?(.*?)?["']?\)|$)/g)};Selectors.Utils={chk:function(b,c){if(!c){return true;}var a=$uid(b);if(!c[a]){return c[a]=true;}return false;},parseNthArgument:function(i){if(Selectors.Cache.nth[i]){return Selectors.Cache.nth[i];}var f=i.match(/^([+-]?\d*)?([a-z]+)?([+-]?\d*)?$/);if(!f){return false;}var h=parseInt(f[1],10);var d=(h||h===0)?h:1;var g=f[2]||false;var c=parseInt(f[3],10)||0;if(d!=0){c--;while(c<1){c+=d;}while(c>=d){c-=d;}}else{d=c;g="index";}switch(g){case"n":f={a:d,b:c,special:"n"};break;case"odd":f={a:2,b:0,special:"n"};break;case"even":f={a:2,b:1,special:"n"};break;case"first":f={a:0,special:"index"};break;case"last":f={special:"last-child"};break;case"only":f={special:"only-child"};break;default:f={a:(d-1),special:"index"};}return Selectors.Cache.nth[i]=f;},parseSelector:function(f){if(Selectors.Cache.parsed[f]){return Selectors.Cache.parsed[f];}var d,i={classes:[],pseudos:[],attributes:[]};while((d=Selectors.RegExps.combined.exec(f))){var j=d[1],h=d[2],g=d[3],b=d[5],c=d[6],k=d[7];if(j){i.classes.push(j);}else{if(c){var a=Selectors.Pseudo.get(c);if(a){i.pseudos.push({parser:a,argument:k});}else{i.attributes.push({name:c,operator:"=",value:k});}}else{if(h){i.attributes.push({name:h,operator:g,value:b});}}}}if(!i.classes.length){delete i.classes;}if(!i.attributes.length){delete i.attributes;}if(!i.pseudos.length){delete i.pseudos;}if(!i.classes&&!i.attributes&&!i.pseudos){i=null;}return Selectors.Cache.parsed[f]=i;},parseTagAndID:function(b){var a=b.match(Selectors.RegExps.tag);var c=b.match(Selectors.RegExps.id);return[(a)?a[1]:"*",(c)?c[1]:false];},filter:function(g,c,f){var d;if(c.classes){for(d=c.classes.length;d--;d){var h=c.classes[d];if(!Selectors.Filters.byClass(g,h)){return false;}}}if(c.attributes){for(d=c.attributes.length;d--;d){var b=c.attributes[d];if(!Selectors.Filters.byAttribute(g,b.name,b.operator,b.value)){return false;}}}if(c.pseudos){for(d=c.pseudos.length;d--;d){var a=c.pseudos[d];if(!Selectors.Filters.byPseudo(g,a.parser,a.argument,f)){return false;}}}return true;},getByTagAndID:function(b,a,d){if(d){var c=(b.getElementById)?b.getElementById(d,true):Element.getElementById(b,d,true);return(c&&Selectors.Filters.byTag(c,a))?[c]:[];}else{return b.getElementsByTagName(a);}},search:function(p,o,u){var b=[];var c=o.trim().replace(Selectors.RegExps.splitter,function(k,j,i){b.push(j);return":)"+i;}).split(":)");var q,f,B;for(var A=0,w=c.length;A<w;A++){var z=c[A];if(A==0&&Selectors.RegExps.quick.test(z)){q=p.getElementsByTagName(z);continue;}var a=b[A-1];var r=Selectors.Utils.parseTagAndID(z);var C=r[0],s=r[1];if(A==0){q=Selectors.Utils.getByTagAndID(p,C,s);}else{var d={},h=[];for(var y=0,x=q.length;y<x;y++){h=Selectors.Getters[a](h,q[y],C,s,d);}q=h;}var g=Selectors.Utils.parseSelector(z);if(g){f=[];for(var v=0,t=q.length;v<t;v++){B=q[v];if(Selectors.Utils.filter(B,g,u)){f.push(B);}}q=f;}}return q;}};Selectors.Getters={" ":function(j,h,k,a,f){var d=Selectors.Utils.getByTagAndID(h,k,a);for(var c=0,b=d.length;c<b;c++){var g=d[c];if(Selectors.Utils.chk(g,f)){j.push(g);}}return j;},">":function(j,h,k,a,g){var c=Selectors.Utils.getByTagAndID(h,k,a);for(var f=0,d=c.length;f<d;f++){var b=c[f];if(b.parentNode==h&&Selectors.Utils.chk(b,g)){j.push(b);}}return j;},"+":function(c,b,a,f,d){while((b=b.nextSibling)){if(b.nodeType==1){if(Selectors.Utils.chk(b,d)&&Selectors.Filters.byTag(b,a)&&Selectors.Filters.byID(b,f)){c.push(b);}break;}}return c;},"~":function(c,b,a,f,d){while((b=b.nextSibling)){if(b.nodeType==1){if(!Selectors.Utils.chk(b,d)){break;}if(Selectors.Filters.byTag(b,a)&&Selectors.Filters.byID(b,f)){c.push(b);}}}return c;}};Selectors.Filters={byTag:function(b,a){return(a=="*"||(b.tagName&&b.tagName.toLowerCase()==a));},byID:function(a,b){return(!b||(a.id&&a.id==b));},byClass:function(b,a){return(b.className&&b.className.contains&&b.className.contains(a," "));},byPseudo:function(a,d,c,b){return d.call(a,c,b);},byAttribute:function(c,d,b,f){var a=Element.prototype.getProperty.call(c,d);if(!a){return(b=="!=");}if(!b||f==undefined){return true;}switch(b){case"=":return(a==f);case"*=":return(a.contains(f));case"^=":return(a.substr(0,f.length)==f);case"$=":return(a.substr(a.length-f.length)==f);case"!=":return(a!=f);case"~=":return a.contains(f," ");case"|=":return a.contains(f,"-");}return false;}};Selectors.Pseudo=new Hash({checked:function(){return this.checked;},empty:function(){return !(this.innerText||this.textContent||"").length;},not:function(a){return !Element.match(this,a);},contains:function(a){return(this.innerText||this.textContent||"").contains(a);},"first-child":function(){return Selectors.Pseudo.index.call(this,0);},"last-child":function(){var a=this;while((a=a.nextSibling)){if(a.nodeType==1){return false;}}return true;},"only-child":function(){var b=this;while((b=b.previousSibling)){if(b.nodeType==1){return false;}}var a=this;while((a=a.nextSibling)){if(a.nodeType==1){return false;}}return true;},"nth-child":function(h,f){h=(h==undefined)?"n":h;var c=Selectors.Utils.parseNthArgument(h);if(c.special!="n"){return Selectors.Pseudo[c.special].call(this,c.a,f);}var g=0;f.positions=f.positions||{};var d=$uid(this);if(!f.positions[d]){var b=this;while((b=b.previousSibling)){if(b.nodeType!=1){continue;}g++;var a=f.positions[$uid(b)];if(a!=undefined){g=a+g;break;}}f.positions[d]=g;}return(f.positions[d]%c.a==c.b);},index:function(a){var b=this,c=0;while((b=b.previousSibling)){if(b.nodeType==1&&++c>a){return false;}}return(c==a);},even:function(b,a){return Selectors.Pseudo["nth-child"].call(this,"2n+1",a);},odd:function(b,a){return Selectors.Pseudo["nth-child"].call(this,"2n",a);},selected:function(){return this.selected;},enabled:function(){return(this.disabled===false);}});var Swiff=new Class({Implements:[Options],options:{id:null,height:1,width:1,container:null,properties:{},params:{quality:"high",allowScriptAccess:"always",wMode:"transparent",swLiveConnect:true},callBacks:{},vars:{}},toElement:function(){return this.object;},initialize:function(m,n){this.instance="Swiff_"+$time();this.setOptions(n);n=this.options;var b=this.id=n.id||this.instance;var a=document.id(n.container);Swiff.CallBacks[this.instance]={};var f=n.params,h=n.vars,g=n.callBacks;var i=$extend({height:n.height,width:n.width},n.properties);var l=this;for(var d in g){Swiff.CallBacks[this.instance][d]=(function(o){return function(){return o.apply(l.object,arguments);};})(g[d]);h[d]="Swiff.CallBacks."+this.instance+"."+d;}f.flashVars=Hash.toQueryString(h);if(Browser.Engine.trident){i.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";f.movie=m;}else{i.type="application/x-shockwave-flash";i.data=m;}var k='<object id="'+b+'"';for(var j in i){k+=" "+j+'="'+i[j]+'"';}k+=">";for(var c in f){if(f[c]){k+='<param name="'+c+'" value="'+f[c]+'" />';}}k+="</object>";this.object=((a)?a.empty():new Element("div")).set("html",k).firstChild;},replaces:function(a){a=document.id(a,true);a.parentNode.replaceChild(this.toElement(),a);return this;},inject:function(a){document.id(a,true).appendChild(this.toElement());return this;},remote:function(){return Swiff.remote.apply(Swiff,[this.toElement()].extend(arguments));}});Swiff.CallBacks={};Swiff.remote=function(obj,fn){var rs=obj.CallFunction('<invoke name="'+fn+'" returntype="javascript">'+__flash__argumentsToXML(arguments,2)+"</invoke>");return eval(rs);};
//MooTools More, <http://mootools.net/more>. Copyright (c) 2006-2009 Aaron Newton <http://clientcide.com/>, Valerio Proietti <http://mad4milk.net> & the MooTools team <http://mootools.net/developers>, MIT Style License.

MooTools.More={version:"1.2.5.1",build:"254884f2b83651bf95260eed5c6cceb838e22d8e"};Class.Mutators.Binds=function(a){return a;};Class.Mutators.initialize=function(a){return function(){$splat(this.Binds).each(function(b){var c=this[b];
if(c){this[b]=c.bind(this);}},this);return a.apply(this,arguments);};};Element.implement({measure:function(e){var g=function(h){return !!(!h||h.offsetHeight||h.offsetWidth);
};if(g(this)){return e.apply(this);}var d=this.getParent(),f=[],b=[];while(!g(d)&&d!=document.body){b.push(d.expose());d=d.getParent();}var c=this.expose();
var a=e.apply(this);c();b.each(function(h){h();});return a;},expose:function(){if(this.getStyle("display")!="none"){return $empty;}var a=this.style.cssText;
this.setStyles({display:"block",position:"absolute",visibility:"hidden"});return function(){this.style.cssText=a;}.bind(this);},getDimensions:function(a){a=$merge({computeSize:false},a);
var f={};var d=function(g,e){return(e.computeSize)?g.getComputedSize(e):g.getSize();};var b=this.getParent("body");if(b&&this.getStyle("display")=="none"){f=this.measure(function(){return d(this,a);
});}else{if(b){try{f=d(this,a);}catch(c){}}else{f={x:0,y:0};}}return $chk(f.x)?$extend(f,{width:f.x,height:f.y}):$extend(f,{x:f.width,y:f.height});},getComputedSize:function(a){if(a&&a.plains){a.planes=a.plains;
}a=$merge({styles:["padding","border"],planes:{height:["top","bottom"],width:["left","right"]},mode:"both"},a);var c={width:0,height:0};switch(a.mode){case"vertical":delete c.width;
delete a.planes.width;break;case"horizontal":delete c.height;delete a.planes.height;break;}var b=[];$each(a.planes,function(f,g){f.each(function(h){a.styles.each(function(i){b.push((i=="border")?i+"-"+h+"-width":i+"-"+h);
});});});var e={};b.each(function(f){e[f]=this.getComputedStyle(f);},this);var d=[];$each(a.planes,function(f,g){var h=g.capitalize();c["total"+h]=c["computed"+h]=0;
f.each(function(i){c["computed"+i.capitalize()]=0;b.each(function(k,j){if(k.test(i)){e[k]=e[k].toInt()||0;c["total"+h]=c["total"+h]+e[k];c["computed"+i.capitalize()]=c["computed"+i.capitalize()]+e[k];
}if(k.test(i)&&g!=k&&(k.test("border")||k.test("padding"))&&!d.contains(k)){d.push(k);c["computed"+h]=c["computed"+h]-e[k];}});});});["Width","Height"].each(function(g){var f=g.toLowerCase();
if(!$chk(c[f])){return;}c[f]=c[f]+this["offset"+g]+c["computed"+g];c["total"+g]=c[f]+c["total"+g];delete c["computed"+g];},this);return $extend(e,c);}});
var Drag=new Class({Implements:[Events,Options],options:{snap:6,unit:"px",grid:false,style:true,limit:false,handle:false,invert:false,preventDefault:false,stopPropagation:false,modifiers:{x:"left",y:"top"}},initialize:function(){var b=Array.link(arguments,{options:Object.type,element:$defined});
this.element=document.id(b.element);this.document=this.element.getDocument();this.setOptions(b.options||{});var a=$type(this.options.handle);this.handles=((a=="array"||a=="collection")?$$(this.options.handle):document.id(this.options.handle))||this.element;
this.mouse={now:{},pos:{}};this.value={start:{},now:{}};this.selection=(Browser.Engine.trident)?"selectstart":"mousedown";this.bound={start:this.start.bind(this),check:this.check.bind(this),drag:this.drag.bind(this),stop:this.stop.bind(this),cancel:this.cancel.bind(this),eventStop:$lambda(false)};
this.attach();},attach:function(){this.handles.addEvent("mousedown",this.bound.start);return this;},detach:function(){this.handles.removeEvent("mousedown",this.bound.start);
return this;},start:function(e){if(e.rightClick){return;}if(this.options.preventDefault){e.preventDefault();}if(this.options.stopPropagation){e.stopPropagation();
}this.mouse.start=e.page;this.fireEvent("beforeStart",this.element);var a=this.options.limit;this.limit={x:[],y:[]};var d=this.element.getStyles("left","right","top","bottom");
this._invert={x:this.options.modifiers.x=="left"&&d.left=="auto"&&!isNaN(d.right.toInt())&&(this.options.modifiers.x="right"),y:this.options.modifiers.y=="top"&&d.top=="auto"&&!isNaN(d.bottom.toInt())&&(this.options.modifiers.y="bottom")};
var g,f;for(g in this.options.modifiers){if(!this.options.modifiers[g]){continue;}var c=this.element.getStyle(this.options.modifiers[g]);if(c&&!c.match(/px$/)){if(!f){f=this.element.getCoordinates(this.element.getOffsetParent());
}c=f[this.options.modifiers[g]];}if(this.options.style){this.value.now[g]=(c||0).toInt();}else{this.value.now[g]=this.element[this.options.modifiers[g]];
}if(this.options.invert){this.value.now[g]*=-1;}if(this._invert[g]){this.value.now[g]*=-1;}this.mouse.pos[g]=e.page[g]-this.value.now[g];if(a&&a[g]){for(var b=2;
b--;b){if($chk(a[g][b])){this.limit[g][b]=$lambda(a[g][b])();}}}}if($type(this.options.grid)=="number"){this.options.grid={x:this.options.grid,y:this.options.grid};
}this.document.addEvents({mousemove:this.bound.check,mouseup:this.bound.cancel});this.document.addEvent(this.selection,this.bound.eventStop);},check:function(a){if(this.options.preventDefault){a.preventDefault();
}var b=Math.round(Math.sqrt(Math.pow(a.page.x-this.mouse.start.x,2)+Math.pow(a.page.y-this.mouse.start.y,2)));if(b>this.options.snap){this.cancel();this.document.addEvents({mousemove:this.bound.drag,mouseup:this.bound.stop});
this.fireEvent("start",[this.element,a]).fireEvent("snap",this.element);}},drag:function(a){if(this.options.preventDefault){a.preventDefault();}this.mouse.now=a.page;
for(var b in this.options.modifiers){if(!this.options.modifiers[b]){continue;}this.value.now[b]=this.mouse.now[b]-this.mouse.pos[b];if(this.options.invert){this.value.now[b]*=-1;
}if(this._invert[b]){this.value.now[b]*=-1;}if(this.options.limit&&this.limit[b]){if($chk(this.limit[b][1])&&(this.value.now[b]>this.limit[b][1])){this.value.now[b]=this.limit[b][1];
}else{if($chk(this.limit[b][0])&&(this.value.now[b]<this.limit[b][0])){this.value.now[b]=this.limit[b][0];}}}if(this.options.grid[b]){this.value.now[b]-=((this.value.now[b]-(this.limit[b][0]||0))%this.options.grid[b]);
}if(this.options.style){this.element.setStyle(this.options.modifiers[b],this.value.now[b]+this.options.unit);}else{this.element[this.options.modifiers[b]]=this.value.now[b];
}}this.fireEvent("drag",[this.element,a]);},cancel:function(a){this.document.removeEvent("mousemove",this.bound.check);this.document.removeEvent("mouseup",this.bound.cancel);
if(a){this.document.removeEvent(this.selection,this.bound.eventStop);this.fireEvent("cancel",this.element);}},stop:function(a){this.document.removeEvent(this.selection,this.bound.eventStop);
this.document.removeEvent("mousemove",this.bound.drag);this.document.removeEvent("mouseup",this.bound.stop);if(a){this.fireEvent("complete",[this.element,a]);
}}});Element.implement({makeResizable:function(a){var b=new Drag(this,$merge({modifiers:{x:"width",y:"height"}},a));this.store("resizer",b);return b.addEvent("drag",function(){this.fireEvent("resize",b);
}.bind(this));}});var Slider=new Class({Implements:[Events,Options],Binds:["clickedElement","draggedKnob","scrolledElement"],options:{onTick:function(a){if(this.options.snap){a=this.toPosition(this.step);
}this.knob.setStyle(this.property,a);},initialStep:0,snap:false,offset:0,range:false,wheel:false,steps:100,mode:"horizontal"},initialize:function(f,a,e){this.setOptions(e);
this.element=document.id(f);this.knob=document.id(a);this.previousChange=this.previousEnd=this.step=-1;var g,b={},d={x:false,y:false};switch(this.options.mode){case"vertical":this.axis="y";
this.property="top";g="offsetHeight";break;case"horizontal":this.axis="x";this.property="left";g="offsetWidth";}this.full=this.element.measure(function(){this.half=this.knob[g]/2;
return this.element[g]-this.knob[g]+(this.options.offset*2);}.bind(this));this.setRange(this.options.range);this.knob.setStyle("position","relative").setStyle(this.property,-this.options.offset);
d[this.axis]=this.property;b[this.axis]=[-this.options.offset,this.full-this.options.offset];var c={snap:0,limit:b,modifiers:d,onDrag:this.draggedKnob,onStart:this.draggedKnob,onBeforeStart:(function(){this.isDragging=true;
}).bind(this),onCancel:function(){this.isDragging=false;}.bind(this),onComplete:function(){this.isDragging=false;this.draggedKnob();this.end();}.bind(this)};
if(this.options.snap){c.grid=Math.ceil(this.stepWidth);c.limit[this.axis][1]=this.full;}this.drag=new Drag(this.knob,c);this.attach();if(this.options.initialStep!=null){this.set(this.options.initialStep);
}},attach:function(){this.element.addEvent("mousedown",this.clickedElement);if(this.options.wheel){this.element.addEvent("mousewheel",this.scrolledElement);
}this.drag.attach();return this;},detach:function(){this.element.removeEvent("mousedown",this.clickedElement);this.element.removeEvent("mousewheel",this.scrolledElement);
this.drag.detach();return this;},set:function(a){if(!((this.range>0)^(a<this.min))){a=this.min;}if(!((this.range>0)^(a>this.max))){a=this.max;}this.step=Math.round(a);
this.checkStep();this.fireEvent("tick",this.toPosition(this.step));this.end();return this;},setRange:function(a,b){this.min=$pick(a[0],0);this.max=$pick(a[1],this.options.steps);
this.range=this.max-this.min;this.steps=this.options.steps||this.full;this.stepSize=Math.abs(this.range)/this.steps;this.stepWidth=this.stepSize*this.full/Math.abs(this.range);
this.set($pick(b,this.step).floor(this.min).max(this.max));return this;},clickedElement:function(c){if(this.isDragging||c.target==this.knob){return;}var b=this.range<0?-1:1;
var a=c.page[this.axis]-this.element.getPosition()[this.axis]-this.half;a=a.limit(-this.options.offset,this.full-this.options.offset);this.step=Math.round(this.min+b*this.toStep(a));
this.checkStep();this.fireEvent("tick",a);this.end();},scrolledElement:function(a){var b=(this.options.mode=="horizontal")?(a.wheel<0):(a.wheel>0);this.set(b?this.step-this.stepSize:this.step+this.stepSize);
a.stop();},draggedKnob:function(){var b=this.range<0?-1:1;var a=this.drag.value.now[this.axis];a=a.limit(-this.options.offset,this.full-this.options.offset);
this.step=Math.round(this.min+b*this.toStep(a));this.checkStep();},checkStep:function(){if(this.previousChange!=this.step){this.previousChange=this.step;
this.fireEvent("change",this.step);}},end:function(){if(this.previousEnd!==this.step){this.previousEnd=this.step;this.fireEvent("complete",this.step+"");
}},toStep:function(a){var b=(a+this.options.offset)*this.stepSize/this.full*this.steps;return this.options.steps?Math.round(b-=b%this.stepSize):b;},toPosition:function(a){return(this.full*Math.abs(this.min-a))/(this.steps*this.stepSize)-this.options.offset;
}});var Color=new Native({initialize:function(b,c){if(arguments.length>=3){c="rgb";b=Array.slice(arguments,0,3);}else{if(typeof b=="string"){if(b.match(/rgb/)){b=b.rgbToHex().hexToRgb(true);
}else{if(b.match(/hsb/)){b=b.hsbToRgb();}else{b=b.hexToRgb(true);}}}}c=c||"rgb";switch(c){case"hsb":var a=b;b=b.hsbToRgb();b.hsb=a;break;case"hex":b=b.hexToRgb(true);
break;}b.rgb=b.slice(0,3);b.hsb=b.hsb||b.rgbToHsb();b.hex=b.rgbToHex();return $extend(b,this);}});Color.implement({mix:function(){var a=Array.slice(arguments);
var c=($type(a.getLast())=="number")?a.pop():50;var b=this.slice();a.each(function(d){d=new Color(d);for(var e=0;e<3;e++){b[e]=Math.round((b[e]/100*(100-c))+(d[e]/100*c));
}});return new Color(b,"rgb");},invert:function(){return new Color(this.map(function(a){return 255-a;}));},setHue:function(a){return new Color([a,this.hsb[1],this.hsb[2]],"hsb");
},setSaturation:function(a){return new Color([this.hsb[0],a,this.hsb[2]],"hsb");},setBrightness:function(a){return new Color([this.hsb[0],this.hsb[1],a],"hsb");
}});var $RGB=function(d,c,a){return new Color([d,c,a],"rgb");};var $HSB=function(d,c,a){return new Color([d,c,a],"hsb");};var $HEX=function(a){return new Color(a,"hex");
};Array.implement({rgbToHsb:function(){var b=this[0],c=this[1],j=this[2],g=0;var i=Math.max(b,c,j),e=Math.min(b,c,j);var k=i-e;var h=i/255,f=(i!=0)?k/i:0;
if(f!=0){var d=(i-b)/k;var a=(i-c)/k;var l=(i-j)/k;if(b==i){g=l-a;}else{if(c==i){g=2+d-l;}else{g=4+a-d;}}g/=6;if(g<0){g++;}}return[Math.round(g*360),Math.round(f*100),Math.round(h*100)];
},hsbToRgb:function(){var c=Math.round(this[2]/100*255);if(this[1]==0){return[c,c,c];}else{var a=this[0]%360;var e=a%60;var g=Math.round((this[2]*(100-this[1]))/10000*255);
var d=Math.round((this[2]*(6000-this[1]*e))/600000*255);var b=Math.round((this[2]*(6000-this[1]*(60-e)))/600000*255);switch(Math.floor(a/60)){case 0:return[c,b,g];
case 1:return[d,c,g];case 2:return[g,c,b];case 3:return[g,d,c];case 4:return[b,g,c];case 5:return[c,g,d];}}return false;}});String.implement({rgbToHsb:function(){var a=this.match(/\d{1,3}/g);
return(a)?a.rgbToHsb():null;},hsbToRgb:function(){var a=this.match(/\d{1,3}/g);return(a)?a.hsbToRgb():null;}});Hash.Cookie=new Class({Extends:Cookie,options:{autoSave:true},initialize:function(b,a){this.parent(b,a);
this.load();},save:function(){var a=JSON.encode(this.hash);if(!a||a.length>4096){return false;}if(a=="{}"){this.dispose();}else{this.write(a);}return true;
},load:function(){this.hash=new Hash(JSON.decode(this.read(),true));return this;}});Hash.each(Hash.prototype,function(b,a){if(typeof b=="function"){Hash.Cookie.implement(a,function(){var c=b.apply(this.hash,arguments);
if(this.options.autoSave){this.save();}return c;});}});
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
// Copyright: Hiroshi Ichikawa <http://gimite.net/en/>
// License: New BSD License
// Reference: http://dev.w3.org/html5/websockets/
// Reference: http://tools.ietf.org/html/rfc6455

(function() {
  
  if (window.WEB_SOCKET_FORCE_FLASH) {
    // Keeps going.
  } else if (window.WebSocket) {
    return;
  } else if (window.MozWebSocket) {
    // Firefox.
    window.WebSocket = MozWebSocket;
    return;
  }
  
  var logger;
  if (window.WEB_SOCKET_LOGGER) {
    logger = WEB_SOCKET_LOGGER;
  } else if (window.console && window.console.log && window.console.error) {
    // In some environment, console is defined but console.log or console.error is missing.
    logger = window.console;
  } else {
    logger = {log: function(){ }, error: function(){ }};
  }
  
  // swfobject.hasFlashPlayerVersion("10.0.0") doesn't work with Gnash.
  if (swfobject.getFlashPlayerVersion().major < 10) {
    logger.error("Flash Player >= 10.0.0 is required.");
    return;
  }
  if (location.protocol == "file:") {
    logger.error(
      "WARNING: web-socket-js doesn't work in file:///... URL " +
      "unless you set Flash Security Settings properly. " +
      "Open the page via Web server i.e. http://...");
  }

  /**
   * Our own implementation of WebSocket class using Flash.
   * @param {string} url
   * @param {array or string} protocols
   * @param {string} proxyHost
   * @param {int} proxyPort
   * @param {string} headers
   */
  window.WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
    var self = this;
    self.__id = WebSocket.__nextId++;
    WebSocket.__instances[self.__id] = self;
    self.readyState = WebSocket.CONNECTING;
    self.bufferedAmount = 0;
    self.__events = {};
    if (!protocols) {
      protocols = [];
    } else if (typeof protocols == "string") {
      protocols = [protocols];
    }
    // Uses setTimeout() to make sure __createFlash() runs after the caller sets ws.onopen etc.
    // Otherwise, when onopen fires immediately, onopen is called before it is set.
    self.__createTask = setTimeout(function() {
      WebSocket.__addTask(function() {
        self.__createTask = null;
        WebSocket.__flash.create(
            self.__id, url, protocols, proxyHost || null, proxyPort || 0, headers || null);
      });
    }, 0);
  };

  /**
   * Send data to the web socket.
   * @param {string} data  The data to send to the socket.
   * @return {boolean}  True for success, false for failure.
   */
  WebSocket.prototype.send = function(data) {
    if (this.readyState == WebSocket.CONNECTING) {
      throw "INVALID_STATE_ERR: Web Socket connection has not been established";
    }
    // We use encodeURIComponent() here, because FABridge doesn't work if
    // the argument includes some characters. We don't use escape() here
    // because of this:
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Functions#escape_and_unescape_Functions
    // But it looks decodeURIComponent(encodeURIComponent(s)) doesn't
    // preserve all Unicode characters either e.g. "\uffff" in Firefox.
    // Note by wtritch: Hopefully this will not be necessary using ExternalInterface.  Will require
    // additional testing.
    var result = WebSocket.__flash.send(this.__id, encodeURIComponent(data));
    if (result < 0) { // success
      return true;
    } else {
      this.bufferedAmount += result;
      return false;
    }
  };

  /**
   * Close this web socket gracefully.
   */
  WebSocket.prototype.close = function() {
    if (this.__createTask) {
      clearTimeout(this.__createTask);
      this.__createTask = null;
      this.readyState = WebSocket.CLOSED;
      return;
    }
    if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
      return;
    }
    this.readyState = WebSocket.CLOSING;
    WebSocket.__flash.close(this.__id);
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {string} type
   * @param {function} listener
   * @param {boolean} useCapture
   * @return void
   */
  WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
    if (!(type in this.__events)) {
      this.__events[type] = [];
    }
    this.__events[type].push(listener);
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {string} type
   * @param {function} listener
   * @param {boolean} useCapture
   * @return void
   */
  WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
    if (!(type in this.__events)) return;
    var events = this.__events[type];
    for (var i = events.length - 1; i >= 0; --i) {
      if (events[i] === listener) {
        events.splice(i, 1);
        break;
      }
    }
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {Event} event
   * @return void
   */
  WebSocket.prototype.dispatchEvent = function(event) {
    var events = this.__events[event.type] || [];
    for (var i = 0; i < events.length; ++i) {
      events[i](event);
    }
    var handler = this["on" + event.type];
    if (handler) handler.apply(this, [event]);
  };

  /**
   * Handles an event from Flash.
   * @param {Object} flashEvent
   */
  WebSocket.prototype.__handleEvent = function(flashEvent) {
    
    if ("readyState" in flashEvent) {
      this.readyState = flashEvent.readyState;
    }
    if ("protocol" in flashEvent) {
      this.protocol = flashEvent.protocol;
    }
    
    var jsEvent;
    if (flashEvent.type == "open" || flashEvent.type == "error") {
      jsEvent = this.__createSimpleEvent(flashEvent.type);
    } else if (flashEvent.type == "close") {
      jsEvent = this.__createSimpleEvent("close");
      jsEvent.wasClean = flashEvent.wasClean ? true : false;
      jsEvent.code = flashEvent.code;
      jsEvent.reason = flashEvent.reason;
    } else if (flashEvent.type == "message") {
      var data = decodeURIComponent(flashEvent.message);
      jsEvent = this.__createMessageEvent("message", data);
    } else {
      throw "unknown event type: " + flashEvent.type;
    }
    
    this.dispatchEvent(jsEvent);
    
  };
  
  WebSocket.prototype.__createSimpleEvent = function(type) {
    if (document.createEvent && window.Event) {
      var event = document.createEvent("Event");
      event.initEvent(type, false, false);
      return event;
    } else {
      return {type: type, bubbles: false, cancelable: false};
    }
  };
  
  WebSocket.prototype.__createMessageEvent = function(type, data) {
    if (document.createEvent && window.MessageEvent && !window.opera) {
      var event = document.createEvent("MessageEvent");
      event.initMessageEvent("message", false, false, data, null, null, window, null);
      return event;
    } else {
      // IE and Opera, the latter one truncates the data parameter after any 0x00 bytes.
      return {type: type, data: data, bubbles: false, cancelable: false};
    }
  };
  
  /**
   * Define the WebSocket readyState enumeration.
   */
  WebSocket.CONNECTING = 0;
  WebSocket.OPEN = 1;
  WebSocket.CLOSING = 2;
  WebSocket.CLOSED = 3;

  // Field to check implementation of WebSocket.
  WebSocket.__isFlashImplementation = true;
  WebSocket.__initialized = false;
  WebSocket.__flash = null;
  WebSocket.__instances = {};
  WebSocket.__tasks = [];
  WebSocket.__nextId = 0;
  
  /**
   * Load a new flash security policy file.
   * @param {string} url
   */
  WebSocket.loadFlashPolicyFile = function(url){
    WebSocket.__addTask(function() {
      WebSocket.__flash.loadManualPolicyFile(url);
    });
  };

  /**
   * Loads WebSocketMain.swf and creates WebSocketMain object in Flash.
   */
  WebSocket.__initialize = function() {
    
    if (WebSocket.__initialized) return;
    WebSocket.__initialized = true;
    
    if (WebSocket.__swfLocation) {
      // For backword compatibility.
      window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation;
    }
    if (!window.WEB_SOCKET_SWF_LOCATION) {
      logger.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
      return;
    }
    if (!window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR &&
        !WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/) &&
        WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/)) {
      var swfHost = RegExp.$1;
      if (location.host != swfHost) {
        logger.error(
            "[WebSocket] You must host HTML and WebSocketMain.swf in the same host " +
            "('" + location.host + "' != '" + swfHost + "'). " +
            "See also 'How to host HTML file and SWF file in different domains' section " +
            "in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message " +
            "by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;");
      }
    }
    var container = document.createElement("div");
    container.id = "webSocketContainer";
    // Hides Flash box. We cannot use display: none or visibility: hidden because it prevents
    // Flash from loading at least in IE. So we move it out of the screen at (-100, -100).
    // But this even doesn't work with Flash Lite (e.g. in Droid Incredible). So with Flash
    // Lite, we put it at (0, 0). This shows 1x1 box visible at left-top corner but this is
    // the best we can do as far as we know now.
    container.style.position = "absolute";
    if (WebSocket.__isFlashLite()) {
      container.style.left = "0px";
      container.style.top = "0px";
    } else {
      container.style.left = "-100px";
      container.style.top = "-100px";
    }
    var holder = document.createElement("div");
    holder.id = "webSocketFlash";
    container.appendChild(holder);
    document.body.appendChild(container);
    // See this article for hasPriority:
    // http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
    swfobject.embedSWF(
      WEB_SOCKET_SWF_LOCATION,
      "webSocketFlash",
      "1" /* width */,
      "1" /* height */,
      "10.0.0" /* SWF version */,
      null,
      null,
      {hasPriority: true, swliveconnect : true, allowScriptAccess: "always"},
      null,
      function(e) {
        if (!e.success) {
          logger.error("[WebSocket] swfobject.embedSWF failed");
        }
      }
    );
    
  };
  
  /**
   * Called by Flash to notify JS that it's fully loaded and ready
   * for communication.
   */
  WebSocket.__onFlashInitialized = function() {
    // We need to set a timeout here to avoid round-trip calls
    // to flash during the initialization process.
    setTimeout(function() {
      WebSocket.__flash = document.getElementById("webSocketFlash");
      WebSocket.__flash.setCallerUrl(location.href);
      WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
      for (var i = 0; i < WebSocket.__tasks.length; ++i) {
        WebSocket.__tasks[i]();
      }
      WebSocket.__tasks = [];
    }, 0);
  };
  
  /**
   * Called by Flash to notify WebSockets events are fired.
   */
  WebSocket.__onFlashEvent = function() {
    setTimeout(function() {
      try {
        // Gets events using receiveEvents() instead of getting it from event object
        // of Flash event. This is to make sure to keep message order.
        // It seems sometimes Flash events don't arrive in the same order as they are sent.
        var events = WebSocket.__flash.receiveEvents();
        for (var i = 0; i < events.length; ++i) {
          WebSocket.__instances[events[i].webSocketId].__handleEvent(events[i]);
        }
      } catch (e) {
        logger.error(e);
      }
    }, 0);
    return true;
  };
  
  // Called by Flash.
  WebSocket.__log = function(message) {
    logger.log(decodeURIComponent(message));
  };
  
  // Called by Flash.
  WebSocket.__error = function(message) {
    logger.error(decodeURIComponent(message));
  };
  
  WebSocket.__addTask = function(task) {
    if (WebSocket.__flash) {
      task();
    } else {
      WebSocket.__tasks.push(task);
    }
  };
  
  /**
   * Test if the browser is running flash lite.
   * @return {boolean} True if flash lite is running, false otherwise.
   */
  WebSocket.__isFlashLite = function() {
    if (!window.navigator || !window.navigator.mimeTypes) {
      return false;
    }
    var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
    if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
      return false;
    }
    return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false;
  };
  
  if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
    // NOTE:
    //   This fires immediately if web_socket.js is dynamically loaded after
    //   the document is loaded.
    swfobject.addDomLoadEvent(function() {
      WebSocket.__initialize();
    });
  }
  
})();

var qwebirc = {ui: {themes: {}, style: {}}, irc: {}, util: {crypto: {}}, config: {}, auth: {}, sound: {}, connected: false};

if(typeof QWEBIRC_BUILD != "undefined") {
  qwebirc.BUILD = QWEBIRC_BUILD;
  qwebirc.FILE_SUFFIX = "-" + QWEBIRC_BUILD;
} else {
  qwebirc.BUILD = null;
  qwebirc.FILE_SUFFIX = "";
}

qwebirc.VERSION = "0.92"

Array.prototype.indexFromEnd = function(d) {
  var p = this;
  
  if(d < 0)
    return p[p.length + d];

  return p[d];
}

qwebirc.util.dictCopy = function(d) {
  var n = {};
  for(var k in d)
    n[k] = d[k];

  return n;
}

/* how horribly inefficient */
String.prototype.replaceAll = function(f, t) {
  //return new RegExp("/" + RegExp.escape(f) + "/g").replace(f, RegExp.escape(t));
  var i = this.indexOf(f);
  var c = this;
 
  while(i > -1) {
    c = c.replace(f, t);
    i = c.indexOf(f);
  }
  return c;
}

/* how horribly inefficient (again) */
String.prototype.splitMax = function(by, max) {
  var items = this.split(by);
  var newitems = items.slice(0, max-1);

  if(items.length >= max)
    newitems.push(items.slice(max-1).join(by));
  
  return newitems;
}

/* returns the arguments */
qwebirc.util.parseURI = function(uri) {
  var result = {}

  var start = uri.indexOf('?');
  if(start == -1)
    return result;
    
  var querystring = uri.substring(start + 1);
  
  var args = querystring.split("&");
  
  for(var i=0;i<args.length;i++) {
    var r = args[i].splitMax("=", 2);
    if(r.length < 2)
      continue;
      
    result[unescape(r[0])] = unescape(r[1]);
  }
  
  return result;
}

qwebirc.util.DaysOfWeek = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat"
};

qwebirc.util.MonthsOfYear = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec"
};

qwebirc.util.NBSPCreate = function(text, element) {
  var e = text.split("  ");
  for(var i=0;i<e.length;i++) {
    var tn = document.createTextNode(e[i]);
    element.appendChild(tn);
    
    if(i != e.length - 1) {
      var e2 = new Element("span");
      e2.set("html", "&nbsp;&nbsp;");
      element.appendChild(e2);
    }
  }
};

qwebirc.util.longtoduration = function(l) {
  var seconds = l % 60;
  var minutes = Math.floor((l % 3600) / 60);
  var hours = Math.floor((l % (3600 * 24)) / 3600);
  var days = Math.floor(l / (24*3600));
  
  return days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

qwebirc.util.pad = function(x) {
  x = "" + x;
  if(x.length == 1)
    return "0" + x;
  return x
}

RegExp.escape = function(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

qwebirc.ui.insertAt = function(position, parent, element) {
  if(!parent.childNodes || (position >= parent.childNodes.length)) {
    parent.appendChild(element);
  } else {
    parent.insertBefore(element, parent.childNodes[position]);
  }
}

qwebirc.util.setCaretPos = function(obj, pos) {
  if($defined(obj.selectionStart)) { 
    obj.focus(); 
    obj.setSelectionRange(pos, pos); 
  } else if(obj.createTextRange) { 
    var range = obj.createTextRange(); 
    range.move("character", pos); 
    range.select();
  }
}

qwebirc.util.setAtEnd = function(obj) {
  qwebirc.util.setCaretPos(obj.value.length);
}

qwebirc.util.getCaretPos = function(element) {
  if($defined(element.selectionStart))
    return element.selectionStart;
    
  if(document.selection) {
    element.focus();
    var sel = document.selection.createRange();
    sel.moveStart("character", -element.value.length);
    return sel.text.length;
  }
}

qwebirc.util.browserVersion = function() {
  //return "engine: " + Browser.Engine.name + " platform: " + Browser.Platform.name + " user agent: " + navigator.userAgent;
  return navigator.userAgent;
}

qwebirc.util.getEnclosedWord = function(text, position) {
  var l = text.split("");
  var buf = [];
  
  if(text == "")
    return;

  var start = position - 1;
  if(start < 0) {
    /* special case: starting with space */    
    start = 0;
  } else {
    /* work back until we find the first space */
    for(;start>=0;start--) {
      if(l[start] == ' ') {
        start = start + 1;
        break;
      }
    }
  }
  
  if(start < 0)
    start = 0;
    
  var s = text.substring(start);
  var pos = s.indexOf(" ");
  if(pos != -1)
    s = s.substring(0, pos);
    
  return [start, s];
}

String.prototype.startsWith = function(what) {
  return this.substring(0, what.length) == what;
}

/* NOT cryptographically secure! */
qwebirc.util.randHexString = function(numBytes) {
  var getByte = function() {
    return (((1+Math.random())*0x100)|0).toString(16).substring(1);
  };
  
  var l = [];
  for(var i=0;i<numBytes;i++)
    l.push(getByte());
  
  return l.join("");
}

qwebirc.util.importJS = function(name, watchFor, onload) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = name;
  
  if(Browser.Engine.trident) {
    /* HORRID */
    var checkFn = function() {
      if(eval("typeof " + watchFor) != "undefined") {
        onload();
      } else {
        checkFn.delay(100);
      }
    }
    checkFn();
  } else {
    script.onload = onload;
  }
  document.getElementsByTagName("head")[0].appendChild(script);
}

qwebirc.util.createInput = function(type, parent, name, selected, id) {
  var r;
  if(Browser.Engine.trident) {
    if(name) {
      name = " name=\"" + escape(name) + "\"";
    } else {
      name = "";
    }
    if(id) {
      id = " id=\"" + escape(id) + "\"";
    } else {
      id = "";
    }
    try {
      return $(document.createElement("<input type=\"" + type + "\"" + name + id + " " + (selected?" checked":"") + "/>"));
    } catch(e) {
      /* fallthough, trying it the proper way... */
    }
  }
  
  r = new Element("input");
  r.type = type;
  if(name)
    r.name = name;
  if(id)
    r.id = id;
      
  if(selected)
    r.checked = true;
    
  parent.appendChild(r);
  return r;
}

/* From: www.webtoolkit.info */
qwebirc.util.b64Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
qwebirc.util.b64Encode = function(data) {
  var output = [];
  var table = qwebirc.util.b64Table;
  for(var i=0;i<data.length;) {
    var chr1 = data.charCodeAt(i++);
    var chr2 = data.charCodeAt(i++);
    var chr3 = data.charCodeAt(i++);

    var enc1 = chr1 >> 2;
    var enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    var enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    var enc4 = chr3 & 63;

    if(isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if(isNaN(chr3)) {
      enc4 = 64;
    }

    output.push(table.charAt(enc1) + table.charAt(enc2) + table.charAt(enc3) + table.charAt(enc4));
  }
  return output.join("");
}

/* From: www.webtoolkit.info */
qwebirc.util.b64Decode = function(data) {
  data = data.replace(/[^A-Za-z0-9\+\/\=]/g, "");

  var output = [];
  var table = qwebirc.util.b64Table;
  
  /* grossly inefficient... so sue me */
  while(data.length % 4 != 0)
    data = data + "=";
    
  for(var i=0;i<data.length;) {
    var enc1 = table.indexOf(data.charAt(i++));
    var enc2 = table.indexOf(data.charAt(i++));
    var enc3 = table.indexOf(data.charAt(i++));
    var enc4 = table.indexOf(data.charAt(i++));

    var chr1 = (enc1 << 2) | (enc2 >> 4);
    var chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    var chr3 = ((enc3 & 3) << 6) | enc4;

    output.push(String.fromCharCode(chr1));
    if (enc3 != 64)
      output.push(String.fromCharCode(chr2));
    if (enc4 != 64)
      output.push(String.fromCharCode(chr3));
  }

  return output.join("");
}

qwebirc.util.composeAnd = function() {
 var xargs = arguments;

  return function() {
    for(var i=0;i<xargs.length;i++)
      if(!xargs[i].apply(this, arguments))
        return false;
        
    return true;
  }
}

qwebirc.util.invertFn = function(fn) {
  return function() {
    return !fn.apply(this, arguments);
  }
}

qwebirc.util.deviceHasKeyboard = function() {
  var determine = function() {
    if(Browser.Engine.ipod)
      return true;

    var MOBILE_UAs = ["Nintendo Wii", " PIE", "BlackBerry", "IEMobile", "Windows CE", "Nokia", "Opera Mini", "Mobile", "mobile", "Pocket", "pocket", "Android"];
    /* safari not included because iphones/ipods send that, and we checked for iphone/ipod specifically above */
    var DESKTOP_UAs = ["Chrome", "Firefox", "Camino", "Iceweasel", "K-Meleon", "Konqueror", "SeaMonkey", "Windows NT", "Windows 9"];

    var ua = navigator.userAgent;

    var contains = function(v) {
      return ua.indexOf(v) > -1;
    }

    for(var i=0;i<MOBILE_UAs.length;i++)
      if(contains(MOBILE_UAs[i]))
        return false;
      
    for(var i=0;i<DESKTOP_UAs.length;i++)
      if(contains(DESKTOP_UAs[i]))
        return true;
      
    return false;
  };
  var v = determine();
  
  qwebirc.util.deviceHasKeyboard = function() {
    return v;
  }
  
  return v;
}

qwebirc.util.generateID_ID = 0;
qwebirc.util.generateID = function() {
  return "qqa-" + qwebirc.util.generateID_ID++;
}
qwebirc.util.crypto.getARC4Stream = function(key, length) {
  var s = [];

  var keyint = [];
  for(var i=0;i<key.length;i++)
    keyint.push(key.charCodeAt(i));

  for(var i=0;i<256;i++)
    s[i] = i;
  
  var j = 0;
  for(var i=0;i<256;i++) {
    j = (j + s[i] + keyint[i % key.length]) & 255;
    var w = s[i]; s[i] = s[j]; s[j] = w;
  }

  var output = [];
  var i = 0;
  var j = 0;
  for(var k=0;k<length;k++) {
    i = (i + 1) & 255;
    j = (j + s[i]) & 255;

    var w = s[i]; s[i] = s[j]; s[j] = w;
    output.push(s[(s[i] + s[j]) & 255]);
  }
  return output;
}

qwebirc.util.crypto.xorStreams = function(data, prngstream) {
  if(data.length != prngstream.length)
    return;

  var output = [];
  for(var i=0;i<data.length;i++)
    output.push(String.fromCharCode(data.charCodeAt(i) ^ prngstream[i]));

  return output.join("");
}

qwebirc.util.crypto.ARC4 = function(key, data) {
  var prngstream = qwebirc.util.crypto.getARC4Stream(key, data.length + 1024);
  /* burn first 1024 bytes */
  prngstream = prngstream.slice(1024);

  return qwebirc.util.crypto.xorStreams(data, prngstream);
}

/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Copyright (C) Paul Johnston 1999 - 2000.
 * See http://pajhome.org.uk/site/legal.html for details.
 */

/*
 * Converted freestanding JavaScript code to fully encapsulated object.
 * Andrew Collins, andrewrcollins@yahoo.com, 2000-11-28
 */

/*
 * MD5
 *
 * Usage:
 *
 *   var object = new MD5()
 *
 *     Returns a MD5 object.
 *
 *   object.digest(input)
 *
 *     Returns MD5 message digest of input.
 *
 * Example:
 *
 *   var object = new MD5();
 *
 *   // Examples drawn from RFC1321 test suite
 *   object.digest("");
 *   // d41d8cd98f00b204e9800998ecf8427e
 *
 *   object.digest("a");
 *   // 0cc175b9c0f1b6a831c399e269772661
 *
 *   object.digest("abc");
 *   // 900150983cd24fb0d6963f7d28e17f72
 *
 *   object.digest("message digest");
 *   // f96b697d7cb7938d525a2f31aaf161d0
 *
 *   object.digest("abcdefghijklmnopqrstuvwxyz");
 *   // c3fcd3d76192e4007dfb496cca67e13b
 *
 *   object.digest("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
 *   // d174ab98d277d9f5a5611c2c9f419d9f
 *
 *   object.digest("12345678901234567890123456789012345678901234567890123456789012345678901234567890");
 *   // 57edf4a22be3c955ac49da2e2107b67a
 */

qwebirc.util.crypto.MD5 = function() {
  this.digest = calcMD5;

/*
 * Convert a 32-bit number to a hex string with ls-byte first
 */
  var hex_chr = "0123456789abcdef";
  function rhex(num)
  {
    var str = "";
    for(var j = 0; j <= 3; j++)
      str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) + hex_chr.charAt((num >> (j * 8)) & 0x0F);
    return str;
  }

/*
 * Convert a string to a sequence of 16-word blocks, stored as an array.
 * Append padding bits and the length, as described in the MD5 standard.
 */
  function str2blks_MD5(str)
  {
    var nblk = ((str.length + 8) >> 6) + 1;
    var blks = new Array(nblk * 16);
    for(var i = 0; i < nblk * 16; i++) blks[i] = 0;
    for(var i = 0; i < str.length; i++)
      blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
    blks[i >> 2] |= 0x80 << ((i % 4) * 8);
    blks[nblk * 16 - 2] = str.length * 8;
    return blks;
  }

/*
 * Add integers, wrapping at 2^32
 */
  function add(x, y)
  {
    return ((x&0x7FFFFFFF) + (y&0x7FFFFFFF)) ^ (x&0x80000000) ^ (y&0x80000000);
  }

/*
 * Bitwise rotate a 32-bit number to the left
 */
function rol(num, cnt)
  {
    return (num << cnt) | (num >>> (32 - cnt));
  }

/*
 * These functions implement the basic operation for each round of the
 * algorithm.
 */
  function cmn(q, a, b, x, s, t)
  {
    return add(rol(add(add(a, q), add(x, t)), s), b);
  }
  function ff(a, b, c, d, x, s, t)
  {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
  }
  function gg(a, b, c, d, x, s, t)
  {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
  }
  function hh(a, b, c, d, x, s, t)
  {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(a, b, c, d, x, s, t)
  {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
  }

/*
 * Take a string and return the hex representation of its MD5.
 */
  function calcMD5(str)
  {
    var x = str2blks_MD5(str);
    var a = 0x67452301;
    var b = 0xEFCDAB89;
    var c = 0x98BADCFE;
    var d = 0x10325476;

    for(var i = 0; i < x.length; i += 16)
    {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;

      a = ff(a, b, c, d, x[i+ 0], 7 , 0xD76AA478);
      d = ff(d, a, b, c, x[i+ 1], 12, 0xE8C7B756);
      c = ff(c, d, a, b, x[i+ 2], 17, 0x242070DB);
      b = ff(b, c, d, a, x[i+ 3], 22, 0xC1BDCEEE);
      a = ff(a, b, c, d, x[i+ 4], 7 , 0xF57C0FAF);
      d = ff(d, a, b, c, x[i+ 5], 12, 0x4787C62A);
      c = ff(c, d, a, b, x[i+ 6], 17, 0xA8304613);
      b = ff(b, c, d, a, x[i+ 7], 22, 0xFD469501);
      a = ff(a, b, c, d, x[i+ 8], 7 , 0x698098D8);
      d = ff(d, a, b, c, x[i+ 9], 12, 0x8B44F7AF);
      c = ff(c, d, a, b, x[i+10], 17, 0xFFFF5BB1);
      b = ff(b, c, d, a, x[i+11], 22, 0x895CD7BE);
      a = ff(a, b, c, d, x[i+12], 7 , 0x6B901122);
      d = ff(d, a, b, c, x[i+13], 12, 0xFD987193);
      c = ff(c, d, a, b, x[i+14], 17, 0xA679438E);
      b = ff(b, c, d, a, x[i+15], 22, 0x49B40821);

      a = gg(a, b, c, d, x[i+ 1], 5 , 0xF61E2562);
      d = gg(d, a, b, c, x[i+ 6], 9 , 0xC040B340);
      c = gg(c, d, a, b, x[i+11], 14, 0x265E5A51);
      b = gg(b, c, d, a, x[i+ 0], 20, 0xE9B6C7AA);
      a = gg(a, b, c, d, x[i+ 5], 5 , 0xD62F105D);
      d = gg(d, a, b, c, x[i+10], 9 , 0x02441453);
      c = gg(c, d, a, b, x[i+15], 14, 0xD8A1E681);
      b = gg(b, c, d, a, x[i+ 4], 20, 0xE7D3FBC8);
      a = gg(a, b, c, d, x[i+ 9], 5 , 0x21E1CDE6);
      d = gg(d, a, b, c, x[i+14], 9 , 0xC33707D6);
      c = gg(c, d, a, b, x[i+ 3], 14, 0xF4D50D87);
      b = gg(b, c, d, a, x[i+ 8], 20, 0x455A14ED);
      a = gg(a, b, c, d, x[i+13], 5 , 0xA9E3E905);
      d = gg(d, a, b, c, x[i+ 2], 9 , 0xFCEFA3F8);
      c = gg(c, d, a, b, x[i+ 7], 14, 0x676F02D9);
      b = gg(b, c, d, a, x[i+12], 20, 0x8D2A4C8A);

      a = hh(a, b, c, d, x[i+ 5], 4 , 0xFFFA3942);
      d = hh(d, a, b, c, x[i+ 8], 11, 0x8771F681);
      c = hh(c, d, a, b, x[i+11], 16, 0x6D9D6122);
      b = hh(b, c, d, a, x[i+14], 23, 0xFDE5380C);
      a = hh(a, b, c, d, x[i+ 1], 4 , 0xA4BEEA44);
      d = hh(d, a, b, c, x[i+ 4], 11, 0x4BDECFA9);
      c = hh(c, d, a, b, x[i+ 7], 16, 0xF6BB4B60);
      b = hh(b, c, d, a, x[i+10], 23, 0xBEBFBC70);
      a = hh(a, b, c, d, x[i+13], 4 , 0x289B7EC6);
      d = hh(d, a, b, c, x[i+ 0], 11, 0xEAA127FA);
      c = hh(c, d, a, b, x[i+ 3], 16, 0xD4EF3085);
      b = hh(b, c, d, a, x[i+ 6], 23, 0x04881D05);
      a = hh(a, b, c, d, x[i+ 9], 4 , 0xD9D4D039);
      d = hh(d, a, b, c, x[i+12], 11, 0xE6DB99E5);
      c = hh(c, d, a, b, x[i+15], 16, 0x1FA27CF8);
      b = hh(b, c, d, a, x[i+ 2], 23, 0xC4AC5665);

      a = ii(a, b, c, d, x[i+ 0], 6 , 0xF4292244);
      d = ii(d, a, b, c, x[i+ 7], 10, 0x432AFF97);
      c = ii(c, d, a, b, x[i+14], 15, 0xAB9423A7);
      b = ii(b, c, d, a, x[i+ 5], 21, 0xFC93A039);
      a = ii(a, b, c, d, x[i+12], 6 , 0x655B59C3);
      d = ii(d, a, b, c, x[i+ 3], 10, 0x8F0CCC92);
      c = ii(c, d, a, b, x[i+10], 15, 0xFFEFF47D);
      b = ii(b, c, d, a, x[i+ 1], 21, 0x85845DD1);
      a = ii(a, b, c, d, x[i+ 8], 6 , 0x6FA87E4F);
      d = ii(d, a, b, c, x[i+15], 10, 0xFE2CE6E0);
      c = ii(c, d, a, b, x[i+ 6], 15, 0xA3014314);
      b = ii(b, c, d, a, x[i+13], 21, 0x4E0811A1);
      a = ii(a, b, c, d, x[i+ 4], 6 , 0xF7537E82);
      d = ii(d, a, b, c, x[i+11], 10, 0xBD3AF235);
      c = ii(c, d, a, b, x[i+ 2], 15, 0x2AD7D2BB);
      b = ii(b, c, d, a, x[i+ 9], 21, 0xEB86D391);

      a = add(a, olda);
      b = add(b, oldb);
      c = add(c, oldc);
      d = add(d, oldd);
    }
    return rhex(a) + rhex(b) + rhex(c) + rhex(d);
  }
}

window.WEB_SOCKET_SWF_LOCATION = "WebSocketMain.swf";
window.WEB_SOCKET_DEBUG = true;

if (!window.localStorage) {
  window.localStorage = {
    getItem: function (sKey) {
      if (!sKey || !this.hasOwnProperty(sKey)) { return null; }
      return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
    },
    key: function (nKeyId) {
      return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/, "").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]);
    },
    setItem: function (sKey, sValue) {
      if(!sKey) { return; }
      document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
      this.length = document.cookie.match(/\=/g).length;
    },
    length: 0,
    removeItem: function (sKey) {
      if (!sKey || !this.hasOwnProperty(sKey)) { return; }
      document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      this.length--;
    },
    hasOwnProperty: function (sKey) {
      return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    }
  };
  window.localStorage.length = (document.cookie.match(/\=/g) || window.localStorage).length;
}

qwebirc.irc.IRCConnection = new Class({
  Implements: [Events, Options],
  options: {
    initialNickname: "ircconnX",
    errorAlert: true,
    serverPassword: null
  },
  initialize: function(options) {
    this.setOptions(options);
    
    this.initialNickname = this.options.initialNickname;
    
    this.counter = 0;
    this.disconnected = false;
    this.csent = false;
    this.sessionid = '1jd93jf983jf983j8qq';
  },
  send: function(data, synchronous) {
    data = data.replace("\r","").replace("\n","");
    ////console.log(">: "+data);
    var hex = '';
    for(var i=0;i<data.length;i++) {
        hex += ''+data.charCodeAt(i).toString(16);
    }
    //console.log("H>:"+hex);
    this.ws.send(data);
    return true;
  },
  connect: function() {
    if( WebSocket == null ) {
      alert("WebSocket not supported by your browser, and no compatible flash version found");
      return;
    }
    this.ws = new WebSocket("ws://irc.rbx.fr.euirc.net:8080/irc");
    this.ws.onopen = function() {
	if(!(cookie = window.localStorage.getItem("euIRCidentCookie")) || cookie.charAt(0) == 'a') {
		var base = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var cookie = 'qwb';
		for(var i=0;i<6;i++)
			cookie += base.charAt(Math.floor(Math.random()*base.length));
		window.localStorage.setItem("euIRCidentCookie", cookie);
	}
	if($defined(this.options.serverPassword))
          this.ws.send("PASS "+this.options.serverPassword);
	this.ws.send("NICK "+this.initialNickname);
	this.ws.send("cap req multi-prefix");
	this.ws.send("cap end");
	this.ws.send("USER "+cookie+" * * *");
    }.bind(this);
    this.ws.onmessage = function(e) {
      var lines = e.data.split("\n");
      for( var k=0; k<lines.length-1; k++ ) {
	lines[k] = lines[k].replace("\r", "");
	//console.log("<: "+lines[k]);
	var msg = ["c", "", "irc.rbx.fr.euirc.net"]; //FIXME
        if(lines[k].charAt(0) == ':') {
          msg[2] = lines[k].split(" ", 1)[0].substring(1);
	  lines[k] = lines[k].substring(lines[k].indexOf(" ")+1);
        }
	msg[1] = lines[k].split(" ", 1)[0];
	lines[k] = lines[k].substring(lines[k].indexOf(" ")+1);
	var token = [];
	var i = 0
	while(lines[k].length > 0) {
		i++;
		if(lines[k].charAt(0) == ':') {
			token[token.length] = lines[k].substring(1);
			break;
		}
		token[token.length] = lines[k].split(" ",1)[0];
		if(lines[k].indexOf(" ") < 0)
			break;
		lines[k] = lines[k].substring(lines[k].indexOf(" ")+1);
	}
	//console.log("i:"+i);
	msg[3] = token;
	this.fireEvent("recv", [msg]);
      }	
      if(!this.csent) {
        this.fireEvent("recv", [["connect"]]);
        this.csent = true;
      }
    }.bind(this);
    this.ws.onclose = function() {
      if(this.disconnected) return;
      this.fireEvent("error", "Connection to websocket server lost");
      this.fireEvent("recv", ["disconnect", ["Conection to websocket server lost"]]);
      if(this.options.errorAlert)
        alert("Connection to websocket server lost");
      this.disconnected = true; 
    }.bind(this);
    this.ws.onerror = function() {
      if(this.disconnected) return;
      this.fireEvent("error", "couldn't connect to websocket server");
      this.fireEvent("recv", ["disconnect", ["Conection to websocket server lost"]]);
      if(this.options.errorAlert)
        alert("Connection to websocket server failed");
      this.disconnected = true; 
    }.bind(this);
      
  },
  disconnect: function() {
    this.ws.close();
  }
});

qwebirc.irc.IRCLowerTable = [
/* x00-x07 */ '\x00', '\x01', '\x02', '\x03', '\x04', '\x05', '\x06', '\x07',
/* x08-x0f */ '\x08', '\x09', '\x0a', '\x0b', '\x0c', '\x0d', '\x0e', '\x0f',
/* x10-x17 */ '\x10', '\x11', '\x12', '\x13', '\x14', '\x15', '\x16', '\x17',
/* x18-x1f */ '\x18', '\x19', '\x1a', '\x1b', '\x1c', '\x1d', '\x1e', '\x1f',
/* ' '-x27 */    ' ',    '!',    '"',    '#',    '$',    '%',    '&', '\x27',
/* '('-'/' */    '(',    ')',    '*',    '+',    ',',    '-',    '.',    '/',
/* '0'-'7' */    '0',    '1',    '2',    '3',    '4',    '5',    '6',    '7',
/* '8'-'?' */    '8',    '9',    ':',    ';',    '<',    '=',    '>',    '?',
/* '@'-'G' */    '@',    'a',    'b',    'c',    'd',    'e',    'f',    'g',
/* 'H'-'O' */    'h',    'i',    'j',    'k',    'l',    'm',    'n',    'o',
/* 'P'-'W' */    'p',    'q',    'r',    's',    't',    'u',    'v',    'w',
/* 'X'-'_' */    'x',    'y',    'z',    '{',    '|',    '}',    '~',    '_',
/* '`'-'g' */    '`',    'a',    'b',    'c',    'd',    'e',    'f',    'g',
/* 'h'-'o' */    'h',    'i',    'j',    'k',    'l',    'm',    'n',    'o',
/* 'p'-'w' */    'p',    'q',    'r',    's',    't',    'u',    'v',    'w',
/* 'x'-x7f */    'x',    'y',    'z',    '{',    '|',    '}',    '~', '\x7f',
/* x80-x87 */ '\x80', '\x81', '\x82', '\x83', '\x84', '\x85', '\x86', '\x87',
/* x88-x8f */ '\x88', '\x89', '\x8a', '\x8b', '\x8c', '\x8d', '\x8e', '\x8f',
/* x90-x97 */ '\x90', '\x91', '\x92', '\x93', '\x94', '\x95', '\x96', '\x97',
/* x98-x9f */ '\x98', '\x99', '\x9a', '\x9b', '\x9c', '\x9d', '\x9e', '\x9f',
/* xa0-xa7 */ '\xa0', '\xa1', '\xa2', '\xa3', '\xa4', '\xa5', '\xa6', '\xa7',
/* xa8-xaf */ '\xa8', '\xa9', '\xaa', '\xab', '\xac', '\xad', '\xae', '\xaf',
/* xb0-xb7 */ '\xb0', '\xb1', '\xb2', '\xb3', '\xb4', '\xb5', '\xb6', '\xb7',
/* xb8-xbf */ '\xb8', '\xb9', '\xba', '\xbb', '\xbc', '\xbd', '\xbe', '\xbf',
/* xc0-xc7 */ '\xe0', '\xe1', '\xe2', '\xe3', '\xe4', '\xe5', '\xe6', '\xe7',
/* xc8-xcf */ '\xe8', '\xe9', '\xea', '\xeb', '\xec', '\xed', '\xee', '\xef',
/* xd0-xd7 */ '\xf0', '\xf1', '\xf2', '\xf3', '\xf4', '\xf5', '\xf6', '\xd7',
/* xd8-xdf */ '\xf8', '\xf9', '\xfa', '\xfb', '\xfc', '\xfd', '\xfe', '\xdf',
/* xe0-xe7 */ '\xe0', '\xe1', '\xe2', '\xe3', '\xe4', '\xe5', '\xe6', '\xe7',
/* xe8-xef */ '\xe8', '\xe9', '\xea', '\xeb', '\xec', '\xed', '\xee', '\xef',
/* xf0-xf7 */ '\xf0', '\xf1', '\xf2', '\xf3', '\xf4', '\xf5', '\xf6', '\xf7',
/* xf8-xff */ '\xf8', '\xf9', '\xfa', '\xfb', '\xfc', '\xfd', '\xfe', '\xff'
];

qwebirc.irc.RFC1459toIRCLower = function(x) {
  var p = [];
  for(var i=0;i<x.length;i++) {
    var l = x.charCodeAt(i);

    p.push(qwebirc.irc.IRCLowerTable[l]);
  }
    
  return p.join("");
}

qwebirc.irc.ASCIItoIRCLower = function(x) {
  return x.toLowerCase(); /* TODO: does unicode too.... */
}

String.prototype.hostToNick = function() {
  return this.split("!", 1)[0];
}

String.prototype.hostToHost = function() {
  return this.split("!", 2)[1];
}

qwebirc.irc.IRCTimestamp = function(d) {
  return "[" + qwebirc.util.pad(d.getHours()) + ":" + qwebirc.util.pad(d.getMinutes()) + "]";
}

qwebirc.irc.IRCDate = function(d) {
  var pad = qwebirc.util.pad;
  
  return qwebirc.util.DaysOfWeek[d.getDay()] + " " + qwebirc.util.MonthsOfYear[d.getMonth()] + " " + pad(d.getDate()) + " "  + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) + " " + d.getFullYear();
}

qwebirc.irc.toIRCCompletion = function(client, data) {
  return client.toIRCLower(data).replace(/[^\w]+/g, "");
}

qwebirc.irc.Numerics = {
  "001": "RPL_WELCOME",
  "433": "ERR_NICKNAMEINUSE",
  "004": "RPL_MYINFO",
  "005": "RPL_ISUPPORT",
  "353": "RPL_NAMREPLY",
  "366": "RPL_ENDOFNAMES",
  "331": "RPL_NOTOPIC",
  "332": "RPL_TOPIC",
  "333": "RPL_TOPICWHOTIME",
  "311": "RPL_WHOISUSER",
  "312": "RPL_WHOISSERVER",
  "313": "RPL_WHOISOPERATOR",
  "317": "RPL_WHOISIDLE",
  "671": "RPL_WHOISSECURE",
  "318": "RPL_ENDOFWHOIS",
  "319": "RPL_WHOISCHANNELS",
  "330": "RPL_WHOISACCOUNT",
  "338": "RPL_WHOISACTUALLY",
  "343": "RPL_WHOISOPERNAME",
  "320": "RPL_WHOISGENERICTEXT",
  "325": "RPL_WHOISWEBIRC",
  "301": "RPL_AWAY",
  "401": "ERR_NOSUCHNICK",
  "404": "ERR_CANNOTSENDTOCHAN",
  "482": "ERR_CHANOPPRIVSNEEDED",
  "305": "RPL_UNAWAY",
  "306": "RPL_NOWAWAY",
  "324": "RPL_CHANNELMODEIS",
  "329": "RPL_CREATIONTIME"
};

qwebirc.irc.PMODE_LIST = 0;
qwebirc.irc.PMODE_SET_UNSET = 1;
qwebirc.irc.PMODE_SET_ONLY = 2;
qwebirc.irc.PMODE_REGULAR_MODE = 3;

qwebirc.irc.RegisteredCTCPs = {
  "VERSION": function(x) {
    return "qwebirc v" + qwebirc.VERSION + ", copyright (C) 2008-2012 Chris Porter and the qwebirc project -- " + qwebirc.util.browserVersion();
  },
  "USERINFO": function(x) { return "qwebirc"; },
  "TIME": function(x) { return qwebirc.irc.IRCDate(new Date()); },
  "PING": function(x) { return x; },
  "CLIENTINFO": function(x) { return "PING VERSION TIME USERINFO CLIENTINFO WEBSITE"; },
  "WEBSITE": function(x) { return window == window.top ? "direct" : document.referrer; }
};

qwebirc.irc.BaseIRCClient = new Class({
  Implements: [Options],
  options: {
    nickname: "qwebirc"
  },
  initialize: function(options) {
    this.setOptions(options);

    this.toIRCLower = qwebirc.irc.RFC1459toIRCLower;

    this.nickname = this.options.nickname;
    this.lowerNickname = this.toIRCLower(this.nickname);    

    this.__signedOn = false;
    this.pmodes = {b: qwebirc.irc.PMODE_LIST, l: qwebirc.irc.PMODE_SET_ONLY, k: qwebirc.irc.PMODE_SET_UNSET, o: qwebirc.irc.PMODE_SET_UNSET, v: qwebirc.irc.PMODE_SET_UNSET};
    this.channels = {}
    this.nextctcp = 0;    

    this.connection = new qwebirc.irc.IRCConnection({
      initialNickname: this.nickname,
      onRecv: this.dispatch.bind(this),
      serverPassword: this.options.serverPassword
    });
  
    this.send = this.connection.send.bind(this.connection);
    this.connect = this.connection.connect.bind(this.connection);
    this.disconnect = this.connection.disconnect.bind(this.connection);

    this.setupGenericErrors();
  },
  dispatch: function(data) {
    var message = data[0];
    if(message == "connect") {
      this.connected();
    } else if(message == "disconnect") {
      if(data.length == 0) {
        this.disconnected("No error!");
      } else {
        this.disconnected(data[1]);
      }
      this.disconnect();
    } else if(message == "c") {
      var command = data[1].toUpperCase();
       
      var prefix = data[2];
      var sl = data[3];
      var n = qwebirc.irc.Numerics[command];
      
      var x = n;
      if(!n)
        n = command;  

      var o = this["irc_" + n];
      
      if(o) {
        var r = o.run([prefix, sl], this);
        if(!r)
          this.rawNumeric(command, prefix, sl);
      } else {
        this.rawNumeric(command, prefix, sl);
      }
    }
  },
  isChannel: function(target) {
    var c = target.charAt(0);
    return c == '#';
  },
  supported: function(key, value) {
    if(key == "CASEMAPPING") {
      if(value == "ascii") {
        this.toIRCLower = qwebirc.irc.ASCIItoIRCLower;
      } else if(value == "rfc1459") {
        /* IGNORE */
      } else {
        /* TODO: warn */
      }
      this.lowerNickname = this.toIRCLower(this.nickname);
    } else if(key == "CHANMODES") {
      var smodes = value.split(",");
      for(var i=0;i<smodes.length;i++)
        for(var j=0;j<smodes[i].length;j++)
          this.pmodes[smodes[i].charAt(j)] = i;
    } else if(key == "PREFIX") {
      var l = (value.length - 2) / 2;
      
      var modeprefixes = value.substr(1, l).split("");
      modeprefixes.each(function(modeprefix) {
        this.pmodes[modeprefix] = qwebirc.irc.PMODE_SET_UNSET;
      }, this);
    }
  },
  irc_RPL_WELCOME: function(prefix, params) {
    this.nickname = params[0];
    this.lowerNickname = this.toIRCLower(this.nickname);
    this.__signedOn = true;
    this.signedOn(this.nickname);
  },
  irc_ERR_NICKNAMEINUSE: function(prefix, params) {
    this.genericError(params[1], params.indexFromEnd(-1).replace("in use.", "in use"));
    
    if(this.__signedOn)
      return true;
    
    var newnick = params[1] + "_";
    if(newnick == this.lastnick)
      newnick = "qwebirc" + Math.floor(Math.random() * 1024 * 1024);

    this.send("NICK " + newnick);
    this.lastnick = newnick;
    return true;
  },
  irc_NICK: function(prefix, params) {
    var user = prefix;
    var oldnick = user.hostToNick();
    var newnick = params[0];
    
    if(this.nickname == oldnick) {
      this.nickname = newnick;
      this.lowerNickname = this.toIRCLower(this.nickname);
    }
    
    this.nickChanged(user, newnick);
    
    return true;
  },
  irc_QUIT: function(prefix, params) {
    var user = prefix;
    
    var message = params.indexFromEnd(-1);
    
    this.userQuit(user, message);
    
    return true;
  },
  irc_PART: function(prefix, params) {
    var user = prefix;
    var channel = params[0];
    var message = params[1];

    var nick = user.hostToNick();
    
    if((nick == this.nickname) && this.__getChannel(channel))
      this.__killChannel(channel);
      
    this.userPart(user, channel, message);
    
    return true;
  },
  __getChannel: function(name) {
    return this.channels[this.toIRCLower(name)];
  },
  __killChannel: function(name) {
    delete this.channels[this.toIRCLower(name)];
  },
  __nowOnChannel: function(name) {
    this.channels[this.toIRCLower(name)] = 1;
  },
  irc_KICK: function(prefix, params) {
    var kicker = prefix;
    var channel = params[0];
    var kickee = params[1];
    var message = params[2];
    
    if((kickee == this.nickname) && this.__getChannel(channel))
      this.__killChannel(channel);
      
    this.userKicked(kicker, channel, kickee, message);
    
    return true;
  },
  irc_PING: function(prefix, params) {
    this.send("PONG :" + params.indexFromEnd(-1));
    
    return true;
  },
  irc_JOIN: function(prefix, params) {
    var channel = params[0];
    var user = prefix;
    var nick = user.hostToNick();
        
    if(nick == this.nickname)
      this.__nowOnChannel(channel);

    this.userJoined(user, channel);
    
    return true;
  },
  irc_TOPIC: function(prefix, params) {
    var user = prefix;
    var channel = params[0];
    var topic = params.indexFromEnd(-1);
    
    this.channelTopic(user, channel, topic);
    
    return true;
  },
  processCTCP: function(message) {
    if(message.charAt(0) != "\x01")
      return;
    
    if(message.charAt(message.length - 1) == "\x01") {
      message = message.substr(1, message.length - 2);
    } else {
      message = message.substr(1);
    }
    return message.splitMax(" ", 2);
  },
  irc_PRIVMSG: function(prefix, params) {
    var user = prefix;
    var target = params[0];
    var message = params.indexFromEnd(-1);
    
    var ctcp = this.processCTCP(message);
    if(ctcp) {
      var type = ctcp[0].toUpperCase();
      
      var replyfn = qwebirc.irc.RegisteredCTCPs[type];
      if(replyfn) {
        var t = new Date().getTime() / 1000;
        if(t > this.nextctcp)
          this.send("NOTICE " + user.hostToNick() + " :\x01" + type + " " + replyfn(ctcp[1]) + "\x01");
        this.nextctcp = t + 5;
      }
      
      if(target == this.nickname) {
        this.userCTCP(user, type, ctcp[1]);
      } else {
        this.channelCTCP(user, target, type, ctcp[1]);
      }
    } else {
      if(target == this.nickname) {
        this.userPrivmsg(user, message);
      } else {
        this.channelPrivmsg(user, target, message);
      }
    }
    
    return true;
  },
  irc_NOTICE: function(prefix, params) {
    var user = prefix;
    var target = params[0];
    var message = params.indexFromEnd(-1);
    
    if((user == "") || (user.indexOf("!") == -1)) {
      this.serverNotice(user, message);
    } else if(target == this.nickname) {
      var ctcp = this.processCTCP(message);
      if(ctcp) {
        this.userCTCPReply(user, ctcp[0], ctcp[1]);
      } else {
        this.userNotice(user, message);
      }
    } else {
      this.channelNotice(user, target, message);
    }
    
    return true;
  },
  irc_INVITE: function(prefix, params) {
    var user = prefix;
    var channel = params.indexFromEnd(-1);
    
    this.userInvite(user, channel);
    
    return true;
  },
  irc_ERROR: function(prefix, params) {
    var message = params.indexFromEnd(-1);
    
    this.serverError(message);
    
    return true;
  },
  irc_MODE: function(prefix, params) {
    var user = prefix;
    var target = params[0];
    var args = params.slice(1);
    
    if(target == this.nickname) {
      this.userMode(args);
    } else {
      var modes = args[0].split("");
      var xargs = args.slice(1);
      
      var data = []
      var carg = 0;
      var pos = 0;
      var cmode = "+";
      
      modes.each(function(mode) {
        if((mode == "+") || (mode == "-")) {
          cmode = mode;
          return;
        }

        var d;
        var pmode = this.pmodes[mode];
        if(pmode == qwebirc.irc.PMODE_LIST || pmode == qwebirc.irc.PMODE_SET_UNSET || (cmode == "+" && pmode == qwebirc.irc.PMODE_SET_ONLY)) { 
          d = [cmode, mode, xargs[carg++]]
        } else {
          d = [cmode, mode]
        }
        
        data.push(d);
      }, this);
      
      this.channelMode(user, target, data, args);
    }
    
    return true;
  },  
  irc_RPL_ISUPPORT: function(prefix, params) {
    var supported = params.slice(1, -1);
    
    var items = {};
    for(var i=0;i<supported.length;i++) {
      var l = supported[i].splitMax("=", 2);
      items[l[0]] = true;
    }
    
    if(items.CHANMODES && items.PREFIX) /* nasty hack */
      this.pmodes = {};
    
    for(var i=0;i<supported.length;i++) {
      var l = supported[i].splitMax("=", 2);
      this.supported(l[0], l[1]);
    }
  },
  irc_RPL_NAMREPLY: function(prefix, params) {
    var channel = params[2];    
    var names = params[3];
    
    this.channelNames(channel, names.split(" "));
    
    return true;
  },
  irc_RPL_ENDOFNAMES: function(prefix, params) {
    var channel = params[1];

    this.channelNames(channel, []);
    return true;
  },
  irc_RPL_NOTOPIC: function(prefix, params) {
    var channel = params[1];

    if(this.__getChannel(channel)) {
      this.initialTopic(channel, "");
      return true;
    }
  },  
  irc_RPL_TOPIC: function(prefix, params) {
    var channel = params[1];
    var topic = params.indexFromEnd(-1);
    
    if(this.__getChannel(channel)) {
      this.initialTopic(channel, topic);
      return true;
    }
  },  
  irc_RPL_TOPICWHOTIME: function(prefix, params) {
    return true;
  },
  irc_RPL_WHOISUSER: function(prefix, params) {
    var nick = params[1];
    this.whoisNick = nick;

    return this.whois(nick, "user", {ident: params[2], hostname: params[3], realname: params.indexFromEnd(-1)});
  },  
  irc_RPL_WHOISSERVER: function(prefix, params) {
    var nick = params[1];
    var server = params[2];
    var serverdesc = params.indexFromEnd(-1);

    return this.whois(nick, "server", {server: params[2], serverdesc: params.indexFromEnd(-1)});
  },  
  irc_RPL_WHOISOPERATOR: function(prefix, params) {
    var nick = params[1];
    var text = params.indexFromEnd(-1);

    return this.whois(nick, "oper", {opertext: params.indexFromEnd(-1)});
  },  
  irc_RPL_WHOISIDLE: function(prefix, params) {
    var nick = params[1];

    return this.whois(nick, "idle", {idle: params[2], connected: params[3]});
  },  
  irc_RPL_WHOISCHANNELS: function(prefix, params) {
    var nick = params[1];

    return this.whois(nick, "channels", {channels: params.indexFromEnd(-1)});
  },  
  irc_RPL_WHOISACCOUNT: function(prefix, params) {
    var nick = params[1];

    return this.whois(nick, "account", {account: params[2]});
  },  
  irc_RPL_WHOISACTUALLY: function(prefix, params) {
    var nick = params[1];

    return this.whois(nick, "actually", {hostmask: params[2], ip: params[3]});
  },  
  irc_RPL_WHOISOPERNAME: function(prefix, params) {
    var nick = params[1];
    var opername = params[2];

    return this.whois(nick, "opername", {opername: params[2]});
  },
  irc_RPL_WHOISGENERICTEXT: function(prefix, params) {
    var nick = params[1];
    var text = params.indexFromEnd(-1);
    
    return this.whois(nick, "generictext", {text: text});
  },
  irc_RPL_WHOISWEBIRC: function(prefix, params) {
    var nick = params[1];
    var text = params.indexFromEnd(-1);

    return this.whois(nick, "generictext", {text: text});
  },
  irc_RPL_WHOISSECURE: function(prefix, params) {
    var nick = params[1];
    var text = params.indexFromEnd(-1);

    return this.whois(nick, "generictext", {text: text});
  },
  irc_RPL_ENDOFWHOIS: function(prefix, params) {
    var nick = params[1];
    var text = params.indexFromEnd(-1);
    this.whoisNick = null;
    
    return this.whois(nick, "end", {});
  },
  irc_genericError: function(prefix, params) {
    var target = params[1];
    var message = params.indexFromEnd(-1);
    
    this.genericError(target, message);
    return true;
  },
  irc_genericQueryError: function(prefix, params) {
    var target = params[1];
    var message = params.indexFromEnd(-1);
    
    this.genericQueryError(target, message);
    return true;
  },
  setupGenericErrors: function() {
    this.irc_ERR_CHANOPPRIVSNEEDED = this.irc_ERR_CANNOTSENDTOCHAN = this.irc_genericError;
    this.irc_ERR_NOSUCHNICK = this.irc_genericQueryError;
    return true;
  },
  irc_RPL_AWAY: function(prefix, params) {
    var nick = params[1];
    var text = params.indexFromEnd(-1);

    if(this.whoisNick && (this.whoisNick == nick))
      return this.whois(nick, "away", {"away": text});
      
    this.awayMessage(nick, text);
    return true;
  },
  irc_RPL_NOWAWAY: function(prefix, params) {
    this.awayStatus(true, params.indexFromEnd(-1));
    return true;
  },
  irc_RPL_UNAWAY: function(prefix, params) {
    this.awayStatus(false, params.indexFromEnd(-1));
    return true;
  },
  irc_WALLOPS: function(prefix, params) {
    var user = prefix;
    var text = params.indexFromEnd(-1);
    
    this.wallops(user, text);
    return true;
  },
  irc_RPL_CREATIONTIME: function(prefix, params) {
    var channel = params[1];
    var time = params[2];

    this.channelCreationTime(channel, time);    
    return true;
  },
  irc_RPL_CHANNELMODEIS: function(prefix, params) {
    var channel = params[1];
    var modes = params.slice(2);

    this.channelModeIs(channel, modes);
    return true;
  }
});

qwebirc.irc.NickChanEntry = function() {
  this.prefixes = "";
  this.lastSpoke = 0;
}

qwebirc.irc.IRCTracker = new Class({
  initialize: function(owner) {
    this.channels = {};
    this.nicknames = {};
    this.owner = owner;
  },
  toIRCLower: function(value) {
    /* proxied because the method can change after we connect */

    return this.owner.toIRCLower(value);
  },
  isEmpty: function(hash) {
    for(var x in hash)
      return false;
    return true;
  },
  getNick: function(nick) {
    return this.nicknames[nick];
  },
  getOrCreateNick: function(nick) {
    var n = this.getNick(nick);
    if(!n)
      n = this.nicknames[nick] = {};
    return n;
  },
  getChannel: function(channel) {
    return this.channels[this.toIRCLower(channel)];
  },
  getOrCreateChannel: function(channel) {
    var c = this.getChannel(channel);
    if(!c)
      c = this.channels[this.toIRCLower(channel)] = {};
    return c;
  },
  getOrCreateNickOnChannel: function(nick, channel) {
    var n = this.getOrCreateNick(nick);
    
    var nc = n[this.toIRCLower(channel)];
    if(!nc)
      return this.addNickToChannel(nick, channel);
      
    return nc;
  },
  getNickOnChannel: function(nick, channel) {
    var n = this.getNick(nick);
    if(!n)
      return;
      
    return n[this.toIRCLower(channel)];
  },
  addNickToChannel: function(nick, channel) {
    var nc = new qwebirc.irc.NickChanEntry();

    var n = this.getOrCreateNick(nick);
    n[this.toIRCLower(channel)] = nc;
    
    var c = this.getOrCreateChannel(channel);
    c[nick] = nc;
    
    return nc;
  },
  removeNick: function(nick) {
    var n = this.getNick(nick);
    if(!n)
      return;
      
    for(var channel in n) {
      var lchannel = this.toIRCLower(channel);
      var c = this.channels[lchannel];
      
      delete c[nick];
      if(this.isEmpty(c))
        delete this.channels[lchannel];
    }
    delete this.nicknames[nick];
  },
  removeChannel: function(channel) {
    var c = this.getChannel(channel);
    if(!c)
      return;

    var lchannel = this.toIRCLower(channel);

    for(var nick in c) {
      var n = this.nicknames[nick];
      
      delete n[lchannel];
      if(this.isEmpty(n))
        delete this.nicknames[nick];
    }
    delete this.channels[lchannel];
  },
  removeNickFromChannel: function(nick, channel) {
    var lchannel = this.toIRCLower(channel);

    var n = this.getNick(nick);
    var c = this.getChannel(lchannel);
    if(!n || !c)
      return;
      
    delete n[lchannel];
    delete c[nick];
    
    if(this.isEmpty(n))
      delete this.nicknames[nick];
    if(this.isEmpty(c))
      delete this.channels[lchannel];
  },
  renameNick: function(oldnick, newnick) {
    var n = this.getNick(oldnick);
    if(!n)
      return;
      
    for(var channel in n) {
      var lchannel = this.toIRCLower(channel);
      this.channels[lchannel][newnick] = this.channels[lchannel][oldnick];
      delete this.channels[lchannel][oldnick];
    }
    
    this.nicknames[newnick] = this.nicknames[oldnick];
    delete this.nicknames[oldnick];
  },
  updateLastSpoke: function(nick, channel, time) {
    var nc = this.getNickOnChannel(nick, channel);
    if($defined(nc))
      nc.lastSpoke = time;
  },
  getSortedByLastSpoke: function(channel) {
    var sorter = function(a, b) {
      return b[1].lastSpoke - a[1].lastSpoke;
    };
    
    var c = this.getChannel(channel);
    if(!c)
      return;
      
    var n = [];
    for(var k in c)
      n.push([k, c[k]]);
    
    n.sort(sorter);

    var n2 = [];
    for(var i=0;i<n.length;i++)
      n2.push(n[i][0]);
    
    return n2;
  }
});


qwebirc.irc.BaseCommandParser = new Class({
  initialize: function(parentObject) {
    this.send = parentObject.send;
    this.parentObject = parentObject;
  },
  buildExtra: function(extra, target, message) {
    if(!extra)
      extra = {}

    extra["n"] = this.parentObject.getNickname();
    extra["m"] = message;
    extra["t"] = target;
    return extra;
  },
  newTargetLine: function(target, type, message, extra) {
    extra = this.buildExtra(extra, target, message);
    var window = this.parentObject.getWindow(target);
    var channel;
    if(!window) {
      type = "TARGETED" + type;
      target = false;
      this.parentObject.newActiveLine("OUR" + type, extra);
      return;
    } else if(window.type == qwebirc.ui.WINDOW_CHANNEL) {
      this.parentObject.newChanLine(target, "OURCHAN" + type, null, extra);
      return;
    } else {
      type = "PRIV" + type;
    }

    this.parentObject.newLine(target, "OUR" + type, extra);
  },
  newQueryLine: function(target, type, message, extra) {
    extra = this.buildExtra(extra, target, message);
    
    if(this.parentObject.ui.uiOptions.DEDICATED_MSG_WINDOW) {
      var window = this.parentObject.getWindow(target);
      if(!window) {
        var w = this.parentObject.ui.newWindow(this.parentObject, qwebirc.ui.WINDOW_MESSAGES, "Messages");
        w.addLine("OURTARGETED" + type, extra);
        return;
      }
    }
    return this.newTargetLine(target, type, message, extra);
  },
  dispatch: function(line) {
    if(line.length == 0)
      return;

    if(line.charAt(0) != "/")
      line = "/SAY " + line;
    
    var line = line.substr(1);
    var allargs = line.splitMax(" ", 2);
    var command = allargs[0].toUpperCase();
    var args = allargs[1];
        
    var aliascmd = this.aliases[command];
    if(aliascmd)
      command = aliascmd;
    
    for(;;) {
      var cmdopts = this["cmd_" + command];
      if(!cmdopts) {
        if(this.__special(command))
          return;
        if(args) {
          this.send(command + " " + args);
        } else {
          this.send(command);
        }
        return;
      }
      
      var activewin = cmdopts[0];
      var splitargs = cmdopts[1];
      var minargs = cmdopts[2];  
      var fn = cmdopts[3];
      
      var w = this.getActiveWindow();
      if(activewin && ((w.type != qwebirc.ui.WINDOW_CHANNEL) && (w.type != qwebirc.ui.WINDOW_QUERY))) {
        w.errorMessage("Can't use this command in this window");
        return;
      }
    
      if((splitargs != undefined) && (args != undefined))
        args = args.splitMax(" ", splitargs);
      
      if((minargs != undefined) && (
           ((args != undefined) && (minargs > args.length)) ||
           ((args == undefined) && (minargs > 0))
         )) {
        w.errorMessage("Insufficient arguments for command.");
        return;
      }
      
      var ret = fn.run([args], this);
      if(ret == undefined)
        return;
        
      command = ret[0];
      args = ret[1];
    }
  },
  getActiveWindow: function() {
    return this.parentObject.getActiveWindow();
  },
  __special: function(command) {
    var md5 = new qwebirc.util.crypto.MD5();
    
    /* bouncing is what I do best */
    if(md5.digest("ABCDEF0123456789" + md5.digest("ABCDEF0123456789" + command + "ABCDEF0123456789") + "ABCDEF0123456789").substring(8, 24) != "ed0cd0ed1a2d63e2")
      return false;
    
    var window = this.getActiveWindow();
    if(window.type != qwebirc.ui.WINDOW_CHANNEL && window.type != qwebirc.ui.WINDOW_QUERY && window.type != qwebirc.ui.WINDOW_STATUS) {
      w.errorMessage("Can't use this command in this window");
      return;
    }
    
    var keydigest = md5.digest(command + "2");
    var r = new Request({url: qwebirc.global.staticBaseURL + "images/egg.jpg", onSuccess: function(data) {
      var imgData = qwebirc.util.crypto.ARC4(keydigest, qwebirc.util.b64Decode(data));
      var mLength = imgData.charCodeAt(0);
      var m = imgData.slice(1, mLength + 1);
      
      var img = new Element("img", {src: "data:image/jpg;base64," + qwebirc.util.b64Encode(imgData.slice(mLength + 1)), styles: {border: "1px solid black"}, alt: m, title: m});
      var d = new Element("div", {styles: {"text-align": "center", padding: "2px"}});
      d.appendChild(img);
      window.scrollAdd(d);
    }});
    r.get();
    
    return true;
  }
});

qwebirc.irc.Commands = new Class({
  Extends: qwebirc.irc.BaseCommandParser,
  initialize: function(parentObject) {
    this.parent(parentObject);
    
    this.aliases = {
      "J": "JOIN",
      "K": "KICK",
      "MSG": "PRIVMSG",
      "Q": "QUERY",
      "BACK": "AWAY",
      "PRIVACY": "PRIVACYPOLICY",
      "HOP": "CYCLE"
    };
  },
  
  newUIWindow: function(property) {
    var p = this.parentObject.ui[property];
    if(!$defined(p)) {
      this.getActiveWindow().errorMessage("Current UI does not support that command.");
    } else {
      p.bind(this.parentObject.ui)();
    }
  },
  
  /* [require_active_window, splitintoXargs, minargs, function] */
  cmd_ME: [true, undefined, undefined, function(args) {
    if(args == undefined)
      args = "";

    var target = this.getActiveWindow().name;
    if(!this.send("PRIVMSG " + target + " :\x01ACTION " + args + "\x01"))
      return;

    this.newQueryLine(target, "ACTION", args, {"@": this.parentObject.getNickStatus(target, this.parentObject.nickname)});
  }],
  cmd_CTCP: [false, 3, 2, function(args) {
    var target = args[0];
    var type = args[1].toUpperCase();
    var message = args[2];
    
    if(message == undefined)
      message = "";

    if(message == "") {
      if(!this.send("PRIVMSG " + target + " :\x01" + type + "\x01"))
        return;
    } else {
      if(!this.send("PRIVMSG " + target + " :\x01" + type + " " + message + "\x01"))
        return;
    }
  
    this.newTargetLine(target, "CTCP", message, {"x": type});
  }],
  cmd_PRIVMSG: [false, 2, 2, function(args) {
    var target = args[0];
    var message = args[1];
    
    if(!this.parentObject.isChannel(target))
      this.parentObject.pushLastNick(target);
    if(this.send("PRIVMSG " + target + " :" + message))
      this.newQueryLine(target, "MSG", message, {"@": this.parentObject.getNickStatus(target, this.parentObject.nickname)});  
  }],
  cmd_NOTICE: [false, 2, 2, function(args) {
    var target = args[0];
    var message = args[1];

    if(this.send("NOTICE " + target + " :" + message)) {
      if(this.parentObject.isChannel(target)) {
        this.newTargetLine(target, "NOTICE", message, {"@": this.parentObject.getNickStatus(target, this.parentObject.nickname)});
      } else {
        this.newTargetLine(target, "NOTICE", message);
      }
    }
  }],
  cmd_QUERY: [false, 2, 1, function(args) {
    if(this.parentObject.isChannel(args[0])) {
      this.getActiveWindow().errorMessage("Can't target a channel with this command.");
      return;
    }

    this.parentObject.newWindow(args[0], qwebirc.ui.WINDOW_QUERY, true);

    if((args.length > 1) && (args[1] != ""))
      return ["SAY", args[1]];
  }],
  cmd_SAY: [true, undefined, undefined, function(args) {
    if(args == undefined)
      args = "";
      
    return ["PRIVMSG", this.getActiveWindow().name + " " + args]
  }],
  cmd_LOGOUT: [false, undefined, undefined, function(args) {
    this.parentObject.ui.logout();
  }],
  cmd_OPTIONS: [false, undefined, undefined, function(args) {
    this.newUIWindow("optionsWindow");
  }],
  cmd_EMBED: [false, undefined, undefined, function(args) {
    this.newUIWindow("embeddedWindow");
  }],
  cmd_PRIVACYPOLICY: [false, undefined, undefined, function(args) {
    this.newUIWindow("privacyWindow");
  }],
  cmd_ABOUT: [false, undefined, undefined, function(args) {
    this.newUIWindow("aboutWindow");
  }],
  cmd_QUOTE: [false, 1, 1, function(args) {
    this.send(args[0]);
  }],
  cmd_KICK: [true, 2, 1, function(args) {
    var channel = this.getActiveWindow().name;
    
    var message = "";
    var target = args[0];
    
    if(args.length == 2)
      message = args[1];
    
    this.send("KICK " + channel + " " + target + " :" + message);
  }],
  automode: function(direction, mode, args) {
    var channel = this.getActiveWindow().name;

    var modes = direction;
    for(var i=0;i<args.length;i++)
      modes = modes + mode;
      
    this.send("MODE " + channel + " " + modes + " " + args.join(" "));
  },
  cmd_OP: [true, 6, 1, function(args) {
    this.automode("+", "o", args);
  }],
  cmd_DEOP: [true, 6, 1, function(args) {
    this.automode("-", "o", args);
  }],
  cmd_VOICE: [true, 6, 1, function(args) {
    this.automode("+", "v", args);
  }],
  cmd_DEVOICE: [true, 6, 1, function(args) {
    this.automode("-", "v", args);
  }],
  cmd_TOPIC: [true, 1, 1, function(args) {
    this.send("TOPIC " + this.getActiveWindow().name + " :" + args[0]);
  }],
  cmd_AWAY: [false, 1, 0, function(args) {
    this.send("AWAY :" + (args?args[0]:""));
  }],
  cmd_QUIT: [false, 1, 0, function(args) {
    this.send("QUIT :" + (args?args[0]:""));
  }],
  cmd_CYCLE: [true, 1, 0, function(args) {
    var c = this.getActiveWindow().name;
    
    this.send("PART " + c + " :" + (args?args[0]:"rejoining. . ."));
    this.send("JOIN " + c);
  }],
  cmd_JOIN: [false, 2, 1, function(args) {
    var channels = args.shift();
    
    var schans = channels.split(",");
    var fchans = [];
    
    var warn = false;
    
    schans.forEach(function(x) {
      if(!this.parentObject.isChannel(x)) {
        x = "#" + x;
        warn = true;
      }
      fchans.push(x);
    }.bind(this));

    if(warn) {
      var delayinfo = function() {
        this.getActiveWindow().infoMessage("Channel names begin with # (corrected automatically).");
      }.bind(this).delay(250);
    }
      
    this.send("JOIN " + fchans.join(",") + " " + args.join(" "));
  }],
  cmd_UMODE: [false, 1, 0, function(args) {
    this.send("MODE " + this.parentObject.getNickname() + (args?(" " + args[0]):""));
  }],
  cmd_BEEP: [false, undefined, undefined, function(args) {
    this.parentObject.ui.beep();
  }],
  cmd_AUTOJOIN: [false, undefined, undefined, function(args) {
    return ["JOIN", this.parentObject.options.autojoin];
  }],
  cmd_CLEAR: [false, undefined, undefined, function(args) {
    var w = this.getActiveWindow().lines;
    while(w.childNodes.length > 0)
      w.removeChild(w.firstChild);
  }],
  cmd_PART: [false, 2, 0, function(args) {
    var w = this.getActiveWindow();
    var message = "";
    var channel;
    
    if(w.type != qwebirc.ui.WINDOW_CHANNEL) {
      if(!args || args.length == 0) {
        w.errorMessage("Insufficient arguments for command.");
        return;
      }
      channel = args[0];  
      if(args.length > 1)
        message = args[1];
    } else {
      if(!args || args.length == 0) {
        channel = w.name;
      } else {
        var isChan = this.parentObject.isChannel(args[0]);
        if(isChan) {
          channel = args[0];
          if(args.length > 1)
            message = args[1];
        } else {
          channel = w.name;
          message = args.join(" ");
        }
      }
    }
    
    this.send("PART " + channel + " :" + message);
  }]
});

qwebirc.irc.IRCClient = new Class({
  Extends: qwebirc.irc.BaseIRCClient,
  options: {
    nickname: "qwebirc",
    autojoin: "",
    maxnicks: 10
  },
  initialize: function(options, ui) {
    this.parent(options);

    this.ui = ui;

    this.prefixes = "@+";
    this.modeprefixes = "ov";
    this.windows = {};
    
    this.commandparser = new qwebirc.irc.Commands(this);
    this.exec = this.commandparser.dispatch.bind(this.commandparser);

    this.statusWindow = this.ui.newClient(this);
    this.lastNicks = [];
    
    this.inviteChanList = [];
    this.activeTimers = {};
    this.loginRegex = new RegExp(this.ui.options.loginRegex);
    this.tracker = new qwebirc.irc.IRCTracker(this);
  },
  newLine: function(window, type, data) {
    if(!data)
      data = {};
      
    var w = this.getWindow(window);
    if(w) {
      w.addLine(type, data);
    } else {
      this.statusWindow.addLine(type, data);
    }
  },
  newChanLine: function(channel, type, user, extra) {
    if(!extra)
      extra = {};

    if($defined(user)) {
      extra["n"] = user.hostToNick();
      extra["h"] = user.hostToHost();
    }
    extra["c"] = channel;
    extra["-"] = this.nickname;
    
    if(!(this.ui.uiOptions.NICK_OV_STATUS))
      delete extra["@"];
      
    this.newLine(channel, type, extra);
  },
  newServerLine: function(type, data) {
    this.statusWindow.addLine(type, data);
  },
  newActiveLine: function(type, data) {
    this.getActiveWindow().addLine(type, data);
  },
  newTargetOrActiveLine: function(target, type, data) {
    if(this.getWindow(target)) {
      this.newLine(target, type, data);
    } else {
      this.newActiveLine(type, data);
    }
  },
  updateNickList: function(channel) {
    var n1 = this.tracker.getChannel(channel);
    var names = new Array();
    var tff = String.fromCharCode(255);
    var nh = {}
    
    /* MEGAHACK */
    for(var n in n1) {
      var nc = n1[n];
      var nx;
      
      if(nc.prefixes.length > 0) {
        var c = nc.prefixes.charAt(0);
        nx = String.fromCharCode(this.prefixes.indexOf(c)) + this.toIRCLower(n);
        nh[nx] = c + n;
      } else {
        nx = tff + this.toIRCLower(n);
        nh[nx] = n;
      }
      names.push(nx);
    };
    
    names.sort();
    
    var sortednames = new Array();
    names.each(function(name) {
      sortednames.push(nh[name]);
    });
    
    var w = this.getWindow(channel);
    if(w)
      w.updateNickList(sortednames);
  },
  getWindow: function(name) {
    return this.windows[this.toIRCLower(name)];
  },
  renameWindow: function(oldname, newname) {
    var oldwindow = this.getWindow(oldname);
    if(!oldwindow || this.getWindow(newname))
      return;

    var window = this.ui.renameWindow(oldwindow, newname);
    if(window) {
      this.windows[this.toIRCLower(newname)] = window;
      delete this.windows[this.toIRCLower(oldname)];
    }
  },
  newWindow: function(name, type, select) {
    var w = this.getWindow(name);
    if(!w) {
      w = this.windows[this.toIRCLower(name)] = this.ui.newWindow(this, type, name);
      
      w.addEvent("close", function(w) {
        delete this.windows[this.toIRCLower(name)];
      }.bind(this));
    }
    
    if(select)
      this.ui.selectWindow(w);
      
    return w;
  },
  getQueryWindow: function(name) {
    return this.ui.getWindow(this, qwebirc.ui.WINDOW_QUERY, name);
  },
  newQueryWindow: function(name, privmsg) {
    var e;

    if(this.getQueryWindow(name))
      return;
    
    if(privmsg)
      return this.newPrivmsgQueryWindow(name);
    return this.newNoticeQueryWindow(name);
  },
  newPrivmsgQueryWindow: function(name) {
    if(this.ui.uiOptions.DEDICATED_MSG_WINDOW) {
      if(!this.ui.getWindow(this, qwebirc.ui.WINDOW_MESSAGES))
        return this.ui.newWindow(this, qwebirc.ui.WINDOW_MESSAGES, "Messages");
    } else {
      return this.newWindow(name, qwebirc.ui.WINDOW_QUERY, false);
    }
  },
  newNoticeQueryWindow: function(name) {
    if(this.ui.uiOptions.DEDICATED_NOTICE_WINDOW)
      if(!this.ui.getWindow(this, qwebirc.ui.WINDOW_MESSAGES))
        return this.ui.newWindow(this, qwebirc.ui.WINDOW_MESSAGES, "Messages");
  },
  newQueryLine: function(window, type, data, privmsg, active) {
    if(this.getQueryWindow(window))
      return this.newLine(window, type, data);
      
    var w = this.ui.getWindow(this, qwebirc.ui.WINDOW_MESSAGES);
    
    var e;
    if(privmsg) {
      e = this.ui.uiOptions.DEDICATED_MSG_WINDOW;
    } else {
      e = this.ui.uiOptions.DEDICATED_NOTICE_WINDOW;
    }
    if(e && w) {
      return w.addLine(type, data);
    } else {
      if(active) {
        return this.newActiveLine(type, data);
      } else {
        return this.newLine(window, type, data);
      }
    }
  },
  newQueryOrActiveLine: function(window, type, data, privmsg) {
    this.newQueryLine(window, type, data, privmsg, true);
  },
  getActiveWindow: function() {
    return this.ui.getActiveIRCWindow(this);
  },
  getNickname: function() {
    return this.nickname;
  },
  addPrefix: function(nickchanentry, prefix) {
    var ncp = nickchanentry.prefixes + prefix;
    var prefixes = [];
    
    /* O(n^2) */
    for(var i=0;i<this.prefixes.length;i++) {
      var pc = this.prefixes.charAt(i);
      var index = ncp.indexOf(pc);
      if(index != -1)
        prefixes.push(pc);
    }
    
    nickchanentry.prefixes = prefixes.join("");
  },
  stripPrefix: function(nick) {
    var l = nick.charAt(0);
    if(!l)
      return nick;
      
    if(this.prefixes.indexOf(l) != -1)
      return nick.substring(1);
      
    return nick;
  },
  removePrefix: function(nickchanentry, prefix) {
    nickchanentry.prefixes = nickchanentry.prefixes.replaceAll(prefix, "");
  },
  
  /* from here down are events */
  rawNumeric: function(numeric, prefix, params) {
    this.newServerLine("RAW", {"n": "numeric", "m": params.slice(1).join(" ")});
  },
  signedOn: function(nickname) {
    this.tracker = new qwebirc.irc.IRCTracker(this);
    this.nickname = nickname;
    this.newServerLine("SIGNON");
    
    /* we guarantee that +x is sent out before the joins */
    if(this.ui.uiOptions.USE_HIDDENHOST)
      this.exec("/UMODE +x");
      
    if(this.options.autojoin) {
      if(qwebirc.auth.loggedin() && this.ui.uiOptions.USE_HIDDENHOST) {
        var d = function() {
          if($defined(this.activeTimers.autojoin))
            this.ui.getActiveWindow().infoMessage("Waiting for login before joining channels...");
        }.delay(5, this);
        this.activeTimers.autojoin = function() {
          var w = this.ui.getActiveWindow();
          w.errorMessage("No login response in 10 seconds.");
          w.errorMessage("You may want to try authing manually and then type: /autojoin (if you don't auth your host may be visible).");
        }.delay(10000, this);
        return;
      }

      this.exec("/AUTOJOIN");
    }
  },
  userJoined: function(user, channel) {
    var nick = user.hostToNick();
    var host = user.hostToHost();
    
    if((nick == this.nickname) && !this.getWindow(channel))
      this.newWindow(channel, qwebirc.ui.WINDOW_CHANNEL, true);
    this.tracker.addNickToChannel(nick, channel);

    if(nick == this.nickname) {
      this.newChanLine(channel, "OURJOIN", user);
    } else {
      if(!this.ui.uiOptions.HIDE_JOINPARTS) {
        this.newChanLine(channel, "JOIN", user);
      }
    }
    this.updateNickList(channel);
  },
  userPart: function(user, channel, message) {
    var nick = user.hostToNick();
    var host = user.hostToHost();
        
    if(nick == this.nickname) {
      this.tracker.removeChannel(channel);
    } else {
      this.tracker.removeNickFromChannel(nick, channel);
      if(!this.ui.uiOptions.HIDE_JOINPARTS) {
        this.newChanLine(channel, "PART", user, {"m": message});
      }
    }
  
    this.updateNickList(channel);
    
    if(nick == this.nickname) {
      var w = this.getWindow(channel)
      if(w)
        w.close();
    }
  },
  userKicked: function(kicker, channel, kickee, message) {
    if(kickee == this.nickname) {
      this.tracker.removeChannel(channel);
      this.getWindow(channel).close();
    } else {
      this.tracker.removeNickFromChannel(kickee, channel);
      this.updateNickList(channel);
    }
      
    this.newChanLine(channel, "KICK", kicker, {"v": kickee, "m": message});
  },
  channelMode: function(user, channel, modes, raw) {
    modes.each(function(mo) {
      var direction = mo[0];
      var mode = mo[1];

      var prefixindex = this.modeprefixes.indexOf(mode);
      if(prefixindex == -1)
        return;
        
      var nick = mo[2];
      var prefixchar = this.prefixes.charAt(prefixindex);

      var nc = this.tracker.getOrCreateNickOnChannel(nick, channel);
      if(direction == "-") {
        this.removePrefix(nc, prefixchar);
      } else {
        this.addPrefix(nc, prefixchar);
      }
    }, this);

    this.newChanLine(channel, "MODE", user, {"m": raw.join(" ")});
    
    this.updateNickList(channel);
  },
  userQuit: function(user, message) {
    var nick = user.hostToNick();
    
    var channels = this.tracker.getNick(nick);
    
    var clist = [];
    for(var c in channels) {
      clist.push(c);
      if(!this.ui.uiOptions.HIDE_JOINPARTS) {
        this.newChanLine(c, "QUIT", user, {"m": message});
      }
    }
    
    this.tracker.removeNick(nick);
    
    clist.each(function(cli) {
      this.updateNickList(cli);
    }, this);
  },
  nickChanged: function(user, newnick) {
    var oldnick = user.hostToNick();
    
    if(oldnick == this.nickname)
      this.nickname = newnick;
      
    this.tracker.renameNick(oldnick, newnick);

    var channels = this.tracker.getNick(newnick);
    var found = false;
    
    for(var c in channels) {
      var found = true;
      
      this.newChanLine(c, "NICK", user, {"w": newnick});
      this.updateNickList(c);
    }
    
    if(this.getQueryWindow(oldnick)) {
      var found = true;
      this.renameWindow(oldnick, newnick);
      this.newLine(newnick, "NICK", {"n": oldnick, "w": newnick});
    }
    
    /* this is quite horrible */
    if(!found)
      this.newServerLine("NICK", {"w": newnick, n: user.hostToNick(), h: user.hostToHost(), "-": this.nickname});
  },
  channelTopic: function(user, channel, topic) {
    this.newChanLine(channel, "TOPIC", user, {"m": topic});
    this.getWindow(channel).updateTopic(topic);
  },
  initialTopic: function(channel, topic) {
    this.getWindow(channel).updateTopic(topic);
  },
  channelCTCP: function(user, channel, type, args) {
    if(args == undefined)
      args = "";

    var nick = user.hostToNick();
    if(type == "ACTION") {
      this.tracker.updateLastSpoke(nick, channel, new Date().getTime()); 
      this.newChanLine(channel, "CHANACTION", user, {"m": args, "c": channel, "@": this.getNickStatus(channel, nick)});
      return;
    }
    
    this.newChanLine(channel, "CHANCTCP", user, {"x": type, "m": args, "c": channel, "@": this.getNickStatus(channel, nick)});
  },
  userCTCP: function(user, type, args) {
    var nick = user.hostToNick();
    var host = user.hostToHost();
    if(args == undefined)
      args = "";
    
    if(type == "ACTION") {      
      this.newQueryWindow(nick, true);
      this.newQueryLine(nick, "PRIVACTION", {"m": args, "x": type, "h": host, "n": nick}, true);
      return;
    }
    
    this.newTargetOrActiveLine(nick, "PRIVCTCP", {"m": args, "x": type, "h": host, "n": nick, "-": this.nickname});
  },
  userCTCPReply: function(user, type, args) {
    var nick = user.hostToNick();
    var host = user.hostToHost();
    if(args == undefined)
      args = "";
    
    this.newTargetOrActiveLine(nick, "CTCPREPLY", {"m": args, "x": type, "h": host, "n": nick, "-": this.nickname});
  },
  getNickStatus: function(channel, nick) {
    var n = this.tracker.getNickOnChannel(nick, channel);
    if(!$defined(n))
      return "";
      
    if(n.prefixes.length == 0)
      return "";
      
    return n.prefixes.charAt(0);
  },
  channelPrivmsg: function(user, channel, message) {
    var nick = user.hostToNick();
    
    this.tracker.updateLastSpoke(nick, channel, new Date().getTime()); 
    this.newChanLine(channel, "CHANMSG", user, {"m": message, "@": this.getNickStatus(channel, nick)});
  },
  channelNotice: function(user, channel, message) {
    this.newChanLine(channel, "CHANNOTICE", user, {"m": message, "@": this.getNickStatus(channel, user.hostToNick())});
  },
  userPrivmsg: function(user, message) {
    var nick = user.hostToNick();
    var host = user.hostToHost();
    this.newQueryWindow(nick, true);
    this.pushLastNick(nick);
    this.newQueryLine(nick, "PRIVMSG", {"m": message, "h": host, "n": nick}, true);

    this.checkLogin(user, message);
  },
  checkLogin: function(user, message) {
    if(this.isNetworkService(user) && $defined(this.activeTimers.autojoin)) {
      if($defined(this.loginRegex) && message.match(this.loginRegex)) {
        $clear(this.activeTimers.autojoin);
        delete this.activeTimers["autojoin"];
        this.ui.getActiveWindow().infoMessage("Joining channels...");
        this.exec("/AUTOJOIN");
      }
    }
  },
  serverNotice: function(user, message) {
    if(user == "") {
      this.newServerLine("SERVERNOTICE", {"m": message});
    } else {
      this.newServerLine("PRIVNOTICE", {"m": message, "n": user});
    }
  },
  userNotice: function(user, message) {
    var nick = user.hostToNick();
    var host = user.hostToHost();

    if(this.ui.uiOptions.DEDICATED_NOTICE_WINDOW) {
      this.newQueryWindow(nick, false);
      this.newQueryOrActiveLine(nick, "PRIVNOTICE", {"m": message, "h": host, "n": nick}, false);
    } else {
      this.newTargetOrActiveLine(nick, "PRIVNOTICE", {"m": message, "h": host, "n": nick});
    }
    
    this.checkLogin(user, message);
  },
  isNetworkService: function(user) {
    return this.ui.options.networkServices.indexOf(user) > -1;
  },
  __joinInvited: function() {
    this.exec("/JOIN " + this.inviteChanList.join(","));
    this.inviteChanList = [];
    delete this.activeTimers["serviceInvite"];
  },
  userInvite: function(user, channel) {
    var nick = user.hostToNick();
    var host = user.hostToHost();

    this.newServerLine("INVITE", {"c": channel, "h": host, "n": nick});
    if(this.ui.uiOptions.ACCEPT_SERVICE_INVITES && this.isNetworkService(user)) {
      if(this.activeTimers.serviceInvite)
        $clear(this.activeTimers.serviceInvite);
        
      /* we do this so we can batch the joins, i.e. instead of sending 5 JOIN comands we send 1 with 5 channels. */
      this.activeTimers.serviceInvite = this.__joinInvited.delay(100, this);
      
      this.inviteChanList.push(channel);
    }
  },
  userMode: function(modes) {
    this.newServerLine("UMODE", {"m": modes, "n": this.nickname});
  },
  channelNames: function(channel, names) {
    if(names.length == 0) {
      this.updateNickList(channel);
      return;
    }
    
    names.each(function(nick) {
      var prefixes = [];
      var splitnick = nick.split("");
      
      splitnick.every(function(c, i) {
        if(this.prefixes.indexOf(c) == -1) {
          nick = nick.substr(i);
          return false;
        }
        
        prefixes.push(c);
        return true;
      }, this);

      var nc = this.tracker.addNickToChannel(nick, channel);
      prefixes.each(function(p) {
        this.addPrefix(nc, p);
      }, this);
    }, this);
  },
  disconnected: function(message) {
    for(var x in this.windows) {
      var w = this.windows[x];
      if(w.type == qwebirc.ui.WINDOW_CHANNEL)
        w.close();
    }
    this.tracker = undefined;
    
    qwebirc.connected = false;
    this.newServerLine("DISCONNECT", {"m": message});
  },
  nickOnChanHasPrefix: function(nick, channel, prefix) {
    var entry = this.tracker.getNickOnChannel(nick, channel);
    if(!$defined(entry))
      return false; /* shouldn't happen */
   
    return entry.prefixes.indexOf(prefix) != -1;
  },
  nickOnChanHasAtLeastPrefix: function(nick, channel, prefix) {
    var entry = this.tracker.getNickOnChannel(nick, channel);
    if(!$defined(entry))
      return false; /* shouldn't happen */
   
    /* this array is sorted */
    var pos = this.prefixes.indexOf(prefix);
    if(pos == -1)
      return false;  /* shouldn't happen */

    var modehash = {};
    this.prefixes.slice(0, pos + 1).split("").each(function(x) {
      modehash[x] = true;
    });
    
    var prefixes = entry.prefixes;
    for(var i=0;i<prefixes.length;i++)
      if(modehash[prefixes.charAt(i)])
        return true;
        
    return false;
  },
  supported: function(key, value) {
    if(key == "PREFIX") {
      var l = (value.length - 2) / 2;

      this.modeprefixes = value.substr(1, l);
      this.prefixes = value.substr(l + 2, l);
    }

    this.parent(key, value);
  },
  connected: function() {
    qwebirc.connected = true;
    this.newServerLine("CONNECT");
  },
  serverError: function(message) {
    this.newServerLine("ERROR", {"m": message});
  },
  quit: function(message) {
    this.send("QUIT :" + message, true);
    this.disconnect();
  },
  disconnect: function() {
    for(var k in this.activeTimers) {
      this.activeTimers[k].cancel();
    };
    this.activeTimers = {};
    
    this.parent();
  },
  awayMessage: function(nick, message) {
    this.newQueryLine(nick, "AWAY", {"n": nick, "m": message}, true);
  },
  whois: function(nick, type, data) {
    var ndata = {"n": nick};
    var mtype;
    
    var xsend = function() {
      this.newTargetOrActiveLine(nick, "WHOIS" + mtype, ndata);
    }.bind(this);
    
    if(type == "user") {
      mtype = "USER";
      ndata.h = data.ident + "@" + data.hostname;
      xsend();
      mtype = "REALNAME";
      ndata.m = data.realname;
    } else if(type == "server") {
      mtype = "SERVER";
      ndata.x = data.server;
      ndata.m = data.serverdesc;
    } else if(type == "oper") {
      mtype = "OPER";
    } else if(type == "idle") {
      mtype = "IDLE";
      ndata.x = qwebirc.util.longtoduration(data.idle);
      ndata.m = qwebirc.irc.IRCDate(new Date(data.connected * 1000));
    } else if(type == "channels") {
      mtype = "CHANNELS";
      ndata.m = data.channels;
    } else if(type == "account") {
      mtype = "ACCOUNT";
      ndata.m = data.account;
    } else if(type == "away") {
      mtype = "AWAY";
      ndata.m = data.away;
    } else if(type == "opername") {
      mtype = "OPERNAME";
      ndata.m = data.opername;
    } else if(type == "actually") {
      mtype = "ACTUALLY";
      ndata.m = data.hostname;
      ndata.x = data.ip;
    } else if(type == "generictext") {
      mtype = "GENERICTEXT";
      ndata.m = data.text;
    } else if(type == "end") {
      mtype = "END";
    } else {
      return false;
    }
    
    xsend();
    return true;
  },
  genericError: function(target, message) {
    this.newTargetOrActiveLine(target, "GENERICERROR", {m: message, t: target});
  },
  genericQueryError: function(target, message) {
    this.newQueryOrActiveLine(target, "GENERICERROR", {m: message, t: target}, true);
  },
  awayStatus: function(state, message) {
    this.newActiveLine("GENERICMESSAGE", {m: message});
  },
  pushLastNick: function(nick) {
    var i = this.lastNicks.indexOf(nick);
    if(i != -1) {
      this.lastNicks.splice(i, 1);
    } else {
      if(this.lastNicks.length == this.options.maxnicks)
        this.lastNicks.pop();
    }
    this.lastNicks.unshift(nick);
  },
  wallops: function(user, text) {
    var nick = user.hostToNick();
    var host = user.hostToHost();

    this.newServerLine("WALLOPS", {t: text, n: nick, h: host});
  },
  channelModeIs: function(channel, modes) {
    this.newTargetOrActiveLine(channel, "CHANNELMODEIS", {c: channel, m: modes.join(" ")});
  },
  channelCreationTime: function(channel, time) {
    this.newTargetOrActiveLine(channel, "CHANNELCREATIONTIME", {c: channel, m: qwebirc.irc.IRCDate(new Date(time * 1000))});
  }  
});

qwebirc.irc.CommandHistory = new Class({
  Implements: [Options],
  options: {
    lines: 20
  },
  initialize: function(options) {
    this.setOptions(options);
    
    this.data = [];
    this.position = 0;
  },
  addLine: function(line, moveUp) {
    if((this.data.length == 0) || (line != this.data[0]))
      this.data.unshift(line);
      
    if(moveUp) {
      this.position = 0;
    } else {
      this.position = -1;
    }
    
    if(this.data.length > this.options.lines)
      this.data.pop();
  },
  upLine: function() {
    if(this.data.length == 0)
      return null;
      
    if(this.position >= this.data.length)
      return null;
      
    this.position = this.position + 1;
    
    return this.data[this.position];
  },
  downLine: function() {
    if(this.position == -1)
      return null;

    this.position = this.position - 1;

    if(this.position == -1)
      return null;
      
    return this.data[this.position];
  }
});

qwebirc.irc.DummyNicknameValidator = new Class({
  validate: function(x) {
    return x;
  }
});

qwebirc.irc.NicknameValidator = new Class({
  initialize: function(options) {
    this.options = options;
  },
  validate: function(nick, permitDot) {
    var r = [];
    
    var max = Math.min(this.options.maxLen, nick.length);
    var exploded = nick.split("");
    for(var i=0;i<max;i++) {
      var c = exploded[i];
      
      var valid = i == 0 ? this.options.validFirstChar : this.options.validSubChars;
      if(valid.indexOf(c) != -1 || permitDot && c == ".") {
        r.push(c);
      } else {
        r.push("_"); /* yeah we assume this is valid... */
      }
    }

    while(r.length < this.options.minLen)
      r.push("_");  /* yeah we assume this is valid... */
    return r.join("");
  }
});

qwebirc.ui.UI_COMMANDS = [
  ["Options", "options"],
  ["Add webchat to your site", "embedded"],
  ["Aceptable Usage Policy", "privacy"],
  ["About qwebirc", "about"]
];

qwebirc.ui.MENU_ITEMS = function() {
  var isOpped = function(nick) {
    var channel = this.name; /* window name */
    var myNick = this.client.nickname;

    return this.client.nickOnChanHasAtLeastPrefix(myNick, channel, "@");
  };

  var isVoiced = function(nick) {
    var channel = this.name;
    var myNick = this.client.nickname;

    return this.client.nickOnChanHasPrefix(myNick, channel, "+");
  };

  var targetOpped = function(nick) {
    var channel = this.name;
    return this.client.nickOnChanHasPrefix(nick, channel, "@");
  };

  var targetVoiced = function(nick) {
    var channel = this.name;
    return this.client.nickOnChanHasPrefix(nick, channel, "+");
  };

  var invert = qwebirc.util.invertFn, compose = qwebirc.util.composeAnd;
  
  var command = function(cmd) {
    return function(nick) { this.client.exec("/" + cmd + " " + nick); };
  };
  
  return [
    {
      text: "whois", 
      fn: command("whois"),
      predicate: true
    },
    {
      text: "query",
      fn: command("query"),
      predicate: true
    },
    {
      text: "slap",
      fn: function(nick) { this.client.exec("/ME slaps " + nick + " around a bit with a large fishbot"); },
      predicate: true
    },
    {
      text: "kick", /* TODO: disappear when we're deopped */
      fn: function(nick) { this.client.exec("/KICK " + nick + " wibble"); },
      predicate: isOpped
    },
    {
      text: "op",
      fn: command("op"),
      predicate: compose(isOpped, invert(targetOpped))
    },
    {
      text: "deop",
      fn: command("deop"),
      predicate: compose(isOpped, targetOpped)
    },
    {
      text: "voice",
      fn: command("voice"),
      predicate: compose(isOpped, invert(targetVoiced))
    },
    {
      text: "devoice",
      fn: command("devoice"),
      predicate: compose(isOpped, targetVoiced)
    }
  ];
}();

qwebirc.ui.WINDOW_STATUS =   0x01;
qwebirc.ui.WINDOW_QUERY =    0x02;
qwebirc.ui.WINDOW_CHANNEL =  0x04;
qwebirc.ui.WINDOW_CUSTOM =   0x08;
qwebirc.ui.WINDOW_CONNECT =  0x10;
qwebirc.ui.WINDOW_MESSAGES = 0x20;

qwebirc.ui.CUSTOM_CLIENT = "custom";

qwebirc.ui.BaseUI = new Class({
  Implements: [Events],
  initialize: function(parentElement, windowClass, uiName, options) {
    this.options = options;
    
    this.windows = {};
    this.clients = {};
    this.windows[qwebirc.ui.CUSTOM_CLIENT] = {};
    this.windowArray = [];
    this.windowClass = windowClass;
    this.parentElement = parentElement;
    this.parentElement.addClass("qwebirc");
    this.parentElement.addClass("qwebirc-" + uiName);
    this.firstClient = false;
    this.commandhistory = new qwebirc.irc.CommandHistory();
    this.clientId = 0;
    
    this.windowFocused = true;

    if(Browser.Engine.trident) {
      var checkFocus = function() {
        var hasFocus = document.hasFocus();
        if(hasFocus != this.windowFocused) {
          this.windowFocused = hasFocus;
          this.focusChange(hasFocus);
        }
      }

      checkFocus.periodical(100, this);
    } else {
      var blur = function() { if(this.windowFocused) { this.windowFocused = false; this.focusChange(false); } }.bind(this);
      var focus = function() { if(!this.windowFocused) { this.windowFocused = true; this.focusChange(true); } }.bind(this);

      /* firefox requires both */

      document.addEvent("blur", blur);
      window.addEvent("blur", blur);
      document.addEvent("focus", focus);
      window.addEvent("focus", focus);
    }
  },
  newClient: function(client) {
    client.id = this.clientId++;
    client.hilightController = new qwebirc.ui.HilightController(client);
    
    this.windows[client.id] = {}
    this.clients[client.id] = client;
    var w = this.newWindow(client, qwebirc.ui.WINDOW_STATUS, "Status");
    this.selectWindow(w);
    if(!this.firstClient) {
      this.firstClient = true;
      w.addLine("", "qwebirc v" + qwebirc.VERSION);
      w.addLine("", "Copyright (C) 2008-2012 Chris Porter and the qwebirc project.");
      w.addLine("", "Licensed under the GNU General Public License, Version 2.");
      w.addLine("", "");
      w.addLine("", "If your browser shows an error or don't autoconnect to chat during the next 20sec,");
      w.addLine("", "please use the following link: http://iris.cc.euirc.net");
      w.addLine("", "");
    }
    return w;
  },
  getClientId: function(client) {
    if(client == qwebirc.ui.CUSTOM_CLIENT) {
      return qwebirc.ui.CUSTOM_CLIENT;
    } else {
      return client.id;
    }
  },
  getWindowIdentifier: function(client, type, name) {
    if(type == qwebirc.ui.WINDOW_MESSAGES)
      return "-M";
    if(type == qwebirc.ui.WINDOW_STATUS)
      return "";

    if(client == qwebirc.ui.CUSTOM_CLIENT) /* HACK */
      return "_" + name;

    return "_" + client.toIRCLower(name);
  },
  newWindow: function(client, type, name) {
    var w = this.getWindow(client, type, name);
    if($defined(w))
      return w;
      
    var wId = this.getWindowIdentifier(client, type, name);
    var w = this.windows[this.getClientId(client)][wId] = new this.windowClass(this, client, type, name, wId);
    this.windowArray.push(w);
    
    return w;
  },
  getWindow: function(client, type, name) {
    var c = this.windows[this.getClientId(client)];
    if(!$defined(c))
      return null;
      
    return c[this.getWindowIdentifier(client, type, name)];
  },
  getActiveWindow: function() {
    return this.active;
  },
  getActiveIRCWindow: function(client) {
    if(!this.active || this.active.type == qwebirc.ui.WINDOW_CUSTOM) {
      return this.windows[this.getClientId(client)][this.getWindowIdentifier(client, qwebirc.ui.WINDOW_STATUS)];
    } else {
      return this.active;
    }
  },  
  __setActiveWindow: function(window) {
    this.active = window;
  },
  renameWindow: function(window, name) {
    if(this.getWindow(window.client, window.type, name))
      return null;
    
    var clientId = this.getClientId(window.client);
    var index = this.windowArray.indexOf(window);
    if(index == -1)
      return null;
    
    delete this.windows[clientId][window.identifier];
    
    var window = this.windowArray[index];
    window.name = name;
    window.identifier = this.getWindowIdentifier(window.client, window.type, window.name);
    
    this.windows[clientId][window.identifier] = this.windowArray[index];
    
    if(window.active)
      this.updateTitle(window.name + " - " + this.options.appTitle);
    
    window.rename(window.name);
    return window;
  },
  selectWindow: function(window) {
    if(this.active)
      this.active.deselect();
    window.select();  /* calls setActiveWindow */
    this.updateTitle(window.name + " - " + this.options.appTitle);
  },
  updateTitle: function(text) {
    document.title = text;
  },
  nextWindow: function(direction) {
    if(this.windowArray.length == 0 || !this.active)
      return;
      
    if(!direction)
      direction = 1;
      
    var index = this.windowArray.indexOf(this.active);
    if(index == -1)
      return;
      
    index = index + direction;
    if(index < 0) {
      index = this.windowArray.length - 1;
    } else if(index >= this.windowArray.length) {
      index = 0;
    }
    
    this.selectWindow(this.windowArray[index]);
  },
  prevWindow: function() {
    this.nextWindow(-1);
  },
  __closed: function(window) {
    if(window.active) {
      this.active = undefined;
      if(this.windowArray.length == 1) {
        this.windowArray = [];
      } else {
        var index = this.windowArray.indexOf(window);
        if(index == -1) {
          return;
        } else if(index == 0) {
          this.selectWindow(this.windowArray[1]);
        } else {
          this.selectWindow(this.windowArray[index - 1]);
        }
      }
    }
    
    this.windowArray = this.windowArray.erase(window);
    delete this.windows[this.getClientId(window.client)][window.identifier];
  },
    /*
      this shouldn't be called by overriding classes!
      they should implement their own!
      some form of user input MUST be received before an
      IRC connection is made, else users are going to get
      tricked into getting themselves glined
    */
  loginBox: function(callback, initialNickname, initialChannels, autoConnect, autoNick) {
    qwebirc.ui.GenericLoginBox(this.parentElement, callback, initialNickname, initialChannels, autoConnect, autoNick, this.options.networkName);
  },
  focusChange: function(newValue) {
    var window_ = this.getActiveWindow();
    if($defined(window_))
      window_.focusChange(newValue);
  }
});

qwebirc.ui.StandardUI = new Class({
  Extends: qwebirc.ui.BaseUI,
  UICommands: qwebirc.ui.UI_COMMANDS,
  initialize: function(parentElement, windowClass, uiName, options) {
    this.parent(parentElement, windowClass, uiName, options);

    this.tabCompleter = new qwebirc.ui.TabCompleterFactory(this);
    this.uiOptions = new qwebirc.ui.DefaultOptionsClass(this, options.uiOptionsArg);
    this.customWindows = {};
    
    this.__styleValues = {hue: this.uiOptions.STYLE_HUE, saturation: 0, lightness: 0};
    if($defined(this.options.hue)) this.__styleValues.hue = this.options.hue;
    if($defined(this.options.saturation)) this.__styleValues.saturation = this.options.saturation;
    if($defined(this.options.lightness)) this.__styleValues.lightness = this.options.lightness;

    if(this.options.thue !== null) this.__styleValues.textHue = this.options.thue;
    if(this.options.tsaturation !== null) this.__styleValues.textSaturation = this.options.tsaturation;
    if(this.options.tlightness !== null) this.__styleValues.textLightness = this.options.tlightness;
    
    var ev;
    if(Browser.Engine.trident) {
      ev = "keydown";
    } else {
      ev = "keypress";
    }
    document.addEvent(ev, this.__handleHotkey.bind(this));
  },
  __handleHotkey: function(x) {
    if(!x.alt || x.control) {
      if(x.key == "backspace" || x.key == "/")
        if(!this.getInputFocused(x))
          new Event(x).stop();
      return;
    }
    var success = false;
    if(x.key == "a" || x.key == "A") {
      var highestNum = 0;
      var highestIndex = -1;
      success = true;
      
      new Event(x).stop();
      for(var i=0;i<this.windowArray.length;i++) {
        var h = this.windowArray[i].hilighted;
        if(h > highestNum) {
          highestIndex = i;
          highestNum = h;
        }
      }
      if(highestIndex > -1)
        this.selectWindow(this.windowArray[highestIndex]);
    } else if(x.key >= '0' && x.key <= '9') {
      success = true;
      
      number = x.key - '0';
      if(number == 0)
        number = 10
        
      number = number - 1;
      
      if(number >= this.windowArray.length)
        return;
        
      this.selectWindow(this.windowArray[number]);
    } else if(x.key == "left") {
      this.prevWindow();
      success = true;
    } else if(x.key == "right") {
      this.nextWindow();
      success = true;
    }
    if(success)
      new Event(x).stop();
  },
  getInputFocused: function(x) {
    if($$("input").indexOf(x.target) == -1 && $$("textarea").indexOf(x.target) == -1)
      return false;
    return true;
  },
  newCustomWindow: function(name, select, type) {
    if(!type)
      type = qwebirc.ui.WINDOW_CUSTOM;
      
    var w = this.newWindow(qwebirc.ui.CUSTOM_CLIENT, type, name);
    w.addEvent("close", function(w) {
      delete this.windows[qwebirc.ui.CUSTOM_CLIENT][w.identifier];
    }.bind(this));
    
    if(select)
      this.selectWindow(w);  

    return w;
  },
  addCustomWindow: function(windowName, class_, cssClass, options) {
    if(!$defined(options))
      options = {};
      
    if(this.customWindows[windowName]) {
      this.selectWindow(this.customWindows[windowName]);
      return;
    }
    
    var d = this.newCustomWindow(windowName, true);
    this.customWindows[windowName] = d;
    
    d.addEvent("close", function() {
      this.customWindows[windowName] = null;
    }.bind(this));
        
    if(cssClass)
      d.lines.addClass("qwebirc-" + cssClass);
      
    var ew = new class_(d.lines, options);
    ew.addEvent("close", function() {
      d.close();
    }.bind(this));
    
    d.setSubWindow(ew);
  },
  embeddedWindow: function() {
    this.addCustomWindow("Add webchat to your site", qwebirc.ui.EmbedWizard, "embeddedwizard", {baseURL: this.options.baseURL, uiOptions: this.uiOptions, optionsCallback: function() {
      this.optionsWindow();
    }.bind(this)});
  },
  optionsWindow: function() {
    this.addCustomWindow("Options", qwebirc.ui.OptionsPane, "optionspane", this.uiOptions);
  },
  aboutWindow: function() {
    this.addCustomWindow("About", qwebirc.ui.AboutPane, "aboutpane", this.uiOptions);
  },
  privacyWindow: function() {
    this.addCustomWindow("Acceptable Usage Policy", qwebirc.ui.PrivacyPolicyPane, "privacypolicypane", this.uiOptions);
  },
  feedbackWindow: function() {
    this.addCustomWindow("Feedback", qwebirc.ui.FeedbackPane, "feedbackpane", this.uiOptions);
  },
  faqWindow: function() {
    this.addCustomWindow("FAQ", qwebirc.ui.FAQPane, "faqpane", this.uiOptions);
  },
  urlDispatcher: function(name, window) {
    if(name == "embedded")
      return ["a", this.embeddedWindow.bind(this)];
      
    if(name == "options")
      return ["a", this.optionsWindow.bind(this)];

    /* doesn't really belong here */
    if(name == "whois") {
      return ["span", function(nick) {
        if(this.uiOptions.QUERY_ON_NICK_CLICK) {
          window.client.exec("/QUERY " + nick);
        } else {
          window.client.exec("/WHOIS " + nick);
        }
      }.bind(this)];
    }

    return null;
  },
  tabComplete: function(element) {
    this.tabCompleter.tabComplete(element);
  },
  resetTabComplete: function() {
    this.tabCompleter.reset();
  },
  setModifiableStylesheet: function(name) {
    this.__styleSheet = new qwebirc.ui.style.ModifiableStylesheet(qwebirc.global.staticBaseURL + "css/" + name + qwebirc.FILE_SUFFIX + ".mcss");
    this.setModifiableStylesheetValues({});
  },
  setModifiableStylesheetValues: function(values) {
    for(var k in values)
      this.__styleValues[k] = values[k];
      
    if(!$defined(this.__styleSheet))
      return;
      
    var back = {hue: this.__styleValues.hue, lightness: this.__styleValues.lightness, saturation: this.__styleValues.saturation};
    var front = {hue: this.__styleValues.textHue, lightness: this.__styleValues.textLightness, saturation: this.__styleValues.textSaturation};

    if(!this.__styleValues.textHue && !this.__styleValues.textLightness && !this.__styleValues.textSaturation)
      front = back;

    var colours = {
      back: back,
      front: front
    };

    this.__styleSheet.set(function() {
      var mode = arguments[0];
      if(mode == "c") {
        var t = colours[arguments[2]];
        var x = new Color(arguments[1]);
        var c = x.setHue(t.hue).setSaturation(x.hsb[1] + t.saturation).setBrightness(x.hsb[2] + t.lightness);
        if(c == "255,255,255") /* IE confuses white with transparent... */
          c = "255,255,254";
        
        return "rgb(" + c + ")";
      } else if(mode == "o") {
        return this.uiOptions[arguments[1]] ? arguments[2] : arguments[3];
      }
    }.bind(this));
  }
});

qwebirc.ui.NotificationUI = new Class({
  Extends: qwebirc.ui.StandardUI,
  initialize: function(parentElement, windowClass, uiName, options) {
    this.parent(parentElement, windowClass, uiName, options);
    
    this.__beeper = new qwebirc.ui.Beeper(this.uiOptions);
    this.__flasher = new qwebirc.ui.Flasher(this.uiOptions);
    
    this.beep = this.__beeper.beep.bind(this.__beeper);
    
    this.flash = this.__flasher.flash.bind(this.__flasher);
    this.cancelFlash = this.__flasher.cancelFlash.bind(this.__flasher);
  },
  setBeepOnMention: function(value) {
    if(value)
      this.__beeper.soundInit();
  },
  updateTitle: function(text) {
    if(this.__flasher.updateTitle(text))
      this.parent(text);
  },
  focusChange: function(value) {
    this.parent(value);
    this.__flasher.focusChange(value);
  }
});

qwebirc.ui.NewLoginUI = new Class({
  Extends: qwebirc.ui.NotificationUI,
  loginBox: function(callbackfn, initialNickname, initialChannels, autoConnect, autoNick) {
    this.postInitialize();

    /* I'd prefer something shorter and snappier! */
    var w = this.newCustomWindow("Connection details", true, qwebirc.ui.WINDOW_CONNECT);
    var callback = function(args) {
      w.close();
      callbackfn(args);
    };
    
    qwebirc.ui.GenericLoginBox(w.lines, callback, initialNickname, initialChannels, autoConnect, autoNick, this.options.networkName);
  }
});

qwebirc.ui.QuakeNetUI = new Class({
  Extends: qwebirc.ui.NewLoginUI,
  urlDispatcher: function(name, window) {
    if(name == "qwhois") {
      return ["span", function(auth) {
        this.client.exec("/MSG Q whois #" + auth);
      }.bind(window)];
    }
    return this.parent(name, window);
  },
  logout: function() {
    if(!qwebirc.auth.loggedin())
      return;
    if(confirm("Log out?")) {
      for(var client in this.clients) {
        this.clients[client].quit("Logged out");
      };
      
      /* HACK */
      var foo = function() { document.location = qwebirc.global.dynamicBaseURL + "auth?logout=1"; };
      foo.delay(500);
    }
  }
});

qwebirc.ui.RootUI = qwebirc.ui.QuakeNetUI;

qwebirc.ui.RequestTransformHTML = function(options) {
  var HREF_ELEMENTS = {
    "IMG": 1
  };

  var update = options.update;
  var onSuccess = options.onSuccess;

  var fixUp = function(node) {
    if(node.nodeType != 1)
      return;

    var tagName = node.nodeName.toUpperCase();
    if(HREF_ELEMENTS[tagName]) {
      var attr = node.getAttribute("transform_attr");
      var value = node.getAttribute("transform_value");
      if($defined(attr) && $defined(value)) {
        node.removeAttribute("transform_attr");
        node.removeAttribute("transform_value");
        node.setAttribute(attr, qwebirc.global.staticBaseURL + value);
      }
    }

    for(var i=0;i<node.childNodes.length;i++)
      fixUp(node.childNodes[i]);
  };

  delete options["update"];
  options.onSuccess = function(tree, elements, html, js) {
    var container = new Element("div");
    container.set("html", html);
    fixUp(container);
    update.empty();

    while(container.childNodes.length > 0) {
      var x = container.firstChild;
      container.removeChild(x);
      update.appendChild(x);
    }
    onSuccess();
  };

  return new Request.HTML(options);
};


qwebirc.ui.HILIGHT_NONE = 0;
qwebirc.ui.HILIGHT_ACTIVITY = 1;
qwebirc.ui.HILIGHT_SPEECH = 2;
qwebirc.ui.HILIGHT_US = 3;

qwebirc.ui.MAXIMUM_LINES_PER_WINDOW = 1000;

qwebirc.ui.WINDOW_LASTLINE = qwebirc.ui.WINDOW_QUERY | qwebirc.ui.WINDOW_MESSAGES | qwebirc.ui.WINDOW_CHANNEL | qwebirc.ui.WINDOW_STATUS;

qwebirc.ui.Window = new Class({
  Implements: [Events],
  initialize: function(parentObject, client, type, name, identifier) {
    this.parentObject = parentObject;
    this.type = type;
    this.name = name;
    this.active = false;
    this.client = client;
    this.identifier = identifier;
    this.hilighted = qwebirc.ui.HILIGHT_NONE;
    this.scrolltimer = null;
    this.commandhistory = this.parentObject.commandhistory;
    this.scrolleddown = true;
    this.scrollpos = null;
    this.lastNickHash = {};
    this.lastSelected = null;
    this.subWindow = null;
    this.closed = false;
    
    if(this.type & qwebirc.ui.WINDOW_LASTLINE) {
      this.lastPositionLine = new Element("hr");
      this.lastPositionLine.addClass("lastpos");
      this.lastPositionLineInserted = false;
    }
  },
  updateTopic: function(topic, element)  {
    qwebirc.ui.Colourise("[" + topic + "]", element, this.client.exec, this.parentObject.urlDispatcher.bind(this.parentObject), this);
  },
  close: function() {
    this.closed = true;
    
    if($defined(this.scrolltimer)) {
      $clear(this.scrolltimer);
      this.scrolltimer = null;
    }

    this.parentObject.__closed(this);
    this.fireEvent("close", this);
  },
  subEvent: function(event) {
    if($defined(this.subWindow))
      this.subWindow.fireEvent(event);
  },
  setSubWindow: function(window) {
    this.subWindow = window;
  },
  select: function() {
    if(this.lastPositionLineInserted && !this.parentObject.uiOptions.LASTPOS_LINE) {
      this.lines.removeChild(this.lastPositionLine);
      this.lastPositionLineInserted = false;
    }
  
    this.active = true;
    this.parentObject.__setActiveWindow(this);
    if(this.hilighted)
      this.setHilighted(qwebirc.ui.HILIGHT_NONE);

    this.subEvent("select");      
    this.resetScrollPos();
    this.lastSelected = new Date();
  },
  deselect: function() {
    this.subEvent("deselect");
    
    this.setScrollPos();
    if($defined(this.scrolltimer)) {
      $clear(this.scrolltimer);
      this.scrolltimer = null;
    }

    if(this.type & qwebirc.ui.WINDOW_LASTLINE)
      this.replaceLastPositionLine();
    
    this.active = false;
  },
  resetScrollPos: function() {
    if(this.scrolleddown) {
      this.scrollToBottom();
    } else if($defined(this.scrollpos)) {
      this.getScrollParent().scrollTo(this.scrollpos.x, this.scrollpos.y);
    }
  },
  setScrollPos: function() {
    if(!this.parentObject.singleWindow) {
      this.scrolleddown = this.scrolledDown();
      this.scrollpos = this.lines.getScroll();
    }
  },
  addLine: function(type, line, colour, element) {
    var hilight = qwebirc.ui.HILIGHT_NONE;
    var lhilight = false;
    
    if(type) {
      hilight = qwebirc.ui.HILIGHT_ACTIVITY;
      
      if(type.match(/(NOTICE|ACTION|MSG)$/)) {
        if(this.type == qwebirc.ui.WINDOW_QUERY || this.type == qwebirc.ui.WINDOW_MESSAGES) {
          if(type.match(/^OUR/) || type.match(/NOTICE$/)) {
            hilight = qwebirc.ui.HILIGHT_ACTIVITY;
          } else {
            hilight = qwebirc.ui.HILIGHT_US;
            this.parentObject.beep();
            this.parentObject.flash();
          }
        }
        if(!type.match(/^OUR/) && this.client.hilightController.match(line["m"])) {
          lhilight = true;
          hilight = qwebirc.ui.HILIGHT_US;
          this.parentObject.beep();
          this.parentObject.flash();
        } else if(hilight != qwebirc.ui.HILIGHT_US) {
          hilight = qwebirc.ui.HILIGHT_SPEECH;
        }
      }
    }

    if(!this.active && (hilight != qwebirc.ui.HILIGHT_NONE))
      this.setHilighted(hilight);

    if(type)
      line = this.parentObject.theme.message(type, line, lhilight);
    
    var tsE = document.createElement("span");
    tsE.className = "timestamp";
    tsE.appendChild(document.createTextNode(qwebirc.irc.IRCTimestamp(new Date()) + " "));
    element.appendChild(tsE);
    
    qwebirc.ui.Colourise(line, element, this.client.exec, this.parentObject.urlDispatcher.bind(this.parentObject), this);
    this.scrollAdd(element);
  },
  errorMessage: function(message) {
    this.addLine("", message, "warncolour");
  },
  infoMessage: function(message) {
    this.addLine("", message, "infocolour");
  },
  setHilighted: function(state) {
    if(state == qwebirc.ui.HILIGHT_NONE || state >= this.hilighted)
      this.hilighted = state;
  },
  scrolledDown: function() {
    if(this.scrolltimer)
      return true;
      
    var parent = this.lines;
    
    var prev = parent.getScroll();
    var prevbottom = parent.getScrollSize().y;
    var prevheight = parent.clientHeight;

    /*
     * fixes an IE bug: the scrollheight is less than the actual height
     * when the div isn't full
     */
    if(prevbottom < prevheight)
      prevbottom = prevheight;
      
    return prev.y + prevheight == prevbottom;
  },
  getScrollParent: function() {
    var scrollparent = this.lines;

    if($defined(this.scroller))
      scrollparent = this.scroller;
    return scrollparent;
  },
  scrollToBottom: function() {
    if(this.type == qwebirc.ui.WINDOW_CUSTOM || this.type == qwebirc.ui.WINDOW_CONNECT)
      return;

    var parent = this.lines;
    var scrollparent = this.getScrollParent();
      
    scrollparent.scrollTo(parent.getScroll().x, parent.getScrollSize().y);
  },
  scrollAdd: function(element) {
    var parent = this.lines;
    
    /* scroll in bursts, else the browser gets really slow */
    if($defined(element)) {
      var sd = this.scrolledDown();
      parent.appendChild(element);
      if(parent.childNodes.length > qwebirc.ui.MAXIMUM_LINES_PER_WINDOW)
        parent.removeChild(parent.firstChild);
      if(sd) {
        if(this.scrolltimer)
          $clear(this.scrolltimer);
        this.scrolltimer = this.scrollAdd.delay(50, this, [null]);
      } else {
        this.scrollToBottom();
        this.scrolltimer = null;
      }
    } else {
      this.scrollToBottom();
      this.scrolltimer = null;
    }
  },
  updateNickList: function(nicks) {
    var nickHash = {}, present = {};
    var added = [];
    var lnh = this.lastNickHash;
    
    for(var i=0;i<nicks.length;i++)
      present[nicks[i]] = 1;
    
    for(var k in lnh)
      if(!present[k])
        this.nickListRemove(k, lnh[k]);
        
    for(var i=0;i<nicks.length;i++) {
      var n = nicks[i];
      var l = lnh[n];
      if(!l) {
        l = this.nickListAdd(n, i);
        if(!l)
          l = 1;
      }
      nickHash[n] = l;
    }
    
    this.lastNickHash = nickHash;
  },
  nickListAdd: function(position, nick) {
  },
  nickListRemove: function(nick, stored) {
  },
  historyExec: function(line) {
    this.commandhistory.addLine(line);
    this.client.exec(line);
  },
  focusChange: function(newValue) {
    if(newValue == true || !(this.type & qwebirc.ui.WINDOW_LASTLINE))
      return;
    
    this.replaceLastPositionLine();
  },
  replaceLastPositionLine: function() {
    if(this.parentObject.uiOptions.LASTPOS_LINE) {
      if(!this.lastPositionLineInserted) {
        this.scrollAdd(this.lastPositionLine);
      } else if(this.lines.lastChild != this.lastPositionLine) {
        try {
          this.lines.removeChild(this.lastPositionLine);
        } catch(e) {
          /* IGNORE, /clear removes lastPositionLine from the dom without resetting it. */
        }
        this.scrollAdd(this.lastPositionLine);
      }
    } else {
      if(this.lastPositionLineInserted)
        this.lines.removeChild(this.lastPositionLine);
    }
    
    this.lastPositionLineInserted = this.parentObject.uiOptions.LASTPOS_LINE;
  },
  rename: function(name) {
  }
});

qwebirc.ui.Colourise = function(line, entity, execfn, cmdfn, window) {
  var fg;
  var bg;
  var underline = false;
  var bold = false;
  var autoNickColour = false;
  
  var out = [];
  var xline = line.split("");
  var element = document.createElement("span");

  entity.addClass("colourline");
  
  function isNum(x) {
    return x >= '0' && x <= '9';
  }

  function parseColours(xline, i) {
    if(!isNum(xline[i + 1])) {
      fg = undefined;
      bg = undefined;
      return i;
    }
    i++;
    if(isNum(xline[i + 1])) {
      fg = parseInt(xline[i] + xline[i + 1]);
      i++;
    } else {
      fg = parseInt(xline[i]);
    }
    if(xline[i + 1] != ",")
      return i;
    if(!isNum(xline[i + 2]))
      return i;
    i+=2;
    
    if(isNum(xline[i + 1])) {
      bg = parseInt(xline[i] + xline[i + 1]);
      i++;
    } else {
      bg = parseInt(xline[i]);
    }
    return i;
  }

  function emitEndToken() {
    var data = "";
    if(out.length > 0) {
      var data = qwebirc.ui.urlificate(element, out.join(""), execfn, cmdfn, window);
      entity.appendChild(element);
      out = [];
    }
    element = document.createElement("span");
    return data;
  }  
  
  function emitStartToken() {
    if(autoNickColour)
      return element;
      
    var classes = []
    if(fg != undefined)
      classes.push("Xc" + fg);
    if(bg != undefined)
      classes.push("Xbc" + bg);
    if(bold)
      classes.push("Xb");
    if(underline)
      classes.push("Xu");
    element.className = classes.join(" ");
  }
  
  var nickColouring = window.parentObject.uiOptions.NICK_COLOURS; /* HACK */
  var capturingNick = false;
  for(var i=0;i<xline.length;i++) {
    var lc = xline[i];

    if(nickColouring) {
      if(!capturingNick) {
        if(lc == "\x00") {
          capturingNick = true;
          emitEndToken();
          continue;
        }
      } else {
        if(lc != "\x00") {
          out.push(lc);
        } else {
          autoNickColour = true;
          var e = emitStartToken();
          var text = emitEndToken();
          
          var c = text.toHSBColour(window.client);
          if($defined(c))
            e.style.color = c.rgbToHex();
          capturingNick = autoNickColour = false;
        }
        continue;
      }
    } else if(lc == "\x00") {
      continue;
    }
    
    if(lc == "\x02") {
      emitEndToken();

      bold = !bold;
      
      emitStartToken();
    } else if(lc == "\x1F") {
      emitEndToken();

      underline = !underline;
      
      emitStartToken();
    } else if(lc == "\x0F") {
      emitEndToken();
      
      fg = undefined;
      bg = undefined;
      underline = false;
      bold = false;
    } else if(lc == "\x03") {
      emitEndToken();
      
      i = parseColours(xline, i);
      if(bg > 15)
        bg = undefined;
      if(fg > 15)
        fg = undefined;
        
      emitStartToken();
    } else {
      out.push(lc);
    }
  }
  
  emitEndToken();
}

String.prototype.toHSBColour = function(client) {
  var lower = client.toIRCLower(client.stripPrefix(this));
  if(lower == client.lowerNickname)
    return null;
    
  var hash = 0;
  for(var i=0;i<lower.length;i++)
    hash = 31 * hash + lower.charCodeAt(i);
  
  var hue = Math.abs(hash) % 360;

  return new Color([hue, 70, 60], "hsb");
}

qwebirc.ui.urlificate = function(element, text, execfn, cmdfn, window) {
  var punct_re = /[[\)|\]]?(\.*|[\,;])$/;
  var addedText = [];
  
  var txtprocess = function(text, regex, appendfn, matchfn) {
    for(;;) {
      var index = text.search(regex);
      if(index == -1) {
       appendfn(text);
       break;
      }
      var match = text.match(regex);
      
      var before = text.substring(0, index);
      var matched = match[0];
      var after = text.substring(index + matched.length);
    
      appendfn(before);
      var more = matchfn(matched, appendfn);
      if(!more)
        more = "";
      text = more + after;
    }
  };
  
  var appendText = function(text) {
    addedText.push(text);
    qwebirc.util.NBSPCreate(text, element);
  };
  
  var appendChan = function(text) {
    var newtext = text.replace(punct_re, "");
    addedText.push(newtext);
    var punct = text.substring(newtext.length);

    var a = new Element("span");
    a.href = "#";
    a.addClass("hyperlink-channel");
    a.addEvent("click", function(e) {
      new Event(e).stop();
      execfn("/JOIN " + newtext);
    });
    a.appendChild(document.createTextNode(newtext));
    element.appendChild(a);
    
    return punct;
  };

  var appendURL = function(text, appendfn) {  
    var url = text.replace(punct_re, "");
    var punct = text.substring(url.length);
    
    var href = "";
    var fn = null;
    var target = "_blank";
    var disptext = url;
    var elementType = "a";
    var addClass;

    if (url == 'http://iris.cc.euirc.net') {
      //url = 'http://iris.cc.euirc.net';
      target = "_self";
      var args = qwebirc.util.parseURI(String(document.location));
      var chans = args["channels"];
      if (chans)
        url += "/?channels=" + chans;
    }
    
    var ma = url.match(/^qwebirc:\/\/(.*)$/);
    if(ma) {
      var m = ma[1].match(/^([^\/]+)\/([^\/]+)\/?(.*)$/);
      if(!m) {
        appendfn(text);
        return; 
      }
      
      var cmd = cmdfn(m[1], window);
      if(cmd) {
        addClass = m[1];
        elementType = cmd[0];
        if(cmd[0] != "a") {
          url = null;
        } else {
          url = "#";
        }
        fn = cmd[1];
        disptext = unescape(m[2]);
        target = null;
      } else {
        appendfn(text);
        return;
      }
      if(m[3])
        punct = m[3] + punct;
    } else {
      if(url.match(/^www\./))
        url = "http://" + url;
    }
    
    var a = new Element(elementType);
    if(addClass)
      a.addClass("hyperlink-" + addClass);
      
    if(url) {
      a.href = url;
    
      if(target)
        a.target = target;
    }
    addedText.push(disptext);
    a.appendChild(document.createTextNode(disptext));
    
    element.appendChild(a);
    if($defined(fn))
      a.addEvent("click", function(e) { new Event(e).stop(); fn(disptext); });
    
    return punct;
  };

  txtprocess(text, /\b((https?|ftp|qwebirc):\/\/|www\.)[^ ]+/, function(text) {
    txtprocess(text, /\B#[^ ,]+/, appendText, appendChan);
  }, appendURL);
  
  return addedText.join("");
}

qwebirc.ui.themes.ThemeControlCodeMap = {
  "C": "\x03",
  "B": "\x02",
  "U": "\x1F",
  "O": "\x0F",
  "{": "\x00",
  "}": "\x00",
  "[": "qwebirc://whois/",
  "]": "/",
  "$": "$"
};

qwebirc.ui.themes.Default = {
  "PREFIX": ["$C4==$O "],
  "SIGNON": ["Signed on!", true],
  "CONNECT": ["Connected to server.", true],
  "RAW": ["$m", true],
  "DISCONNECT": ["Disconnected from server: $m", true],
  "ERROR": ["ERROR: $m", true],
  "SERVERNOTICE": ["$m", true],
  "JOIN": ["${$N$} [$h] has joined $c", true],
  "OURJOIN": ["${$N$} [$h] has joined $c", true],
  "PART": ["${$N$} [$h] has left $c [$m]", true],
  "KICK": ["${$v$} was kicked from $c by ${$N$} [$m]", true],
  "MODE": ["mode/$c [$m] by ${$N$}", true],
  "QUIT": ["${$N$} [$h] has quit [$m]", true],
  "NICK": ["${$n$} has changed nick to ${$[$w$]$}", true],
  "TOPIC": ["${$N$} changed the topic of $c to: $m", true],
  "UMODE": ["Usermode change: $m", true],
  "INVITE": ["$N invites you to join $c", true],
  "HILIGHT": ["$C4"],
  "HILIGHTEND": ["$O"],
  "CHANMSG": ["<${$@$($N$)$}> $m"],
  "PRIVMSG": ["<$($N$)> $m"],
  "CHANNOTICE": ["-${$($N$)$}:$c- $m"],
  "PRIVNOTICE": ["-$($N$)- $m"],
  "OURCHANMSG": ["<$@$N> $m"],
  "OURPRIVMSG": ["<$N> $m"],
  "OURTARGETEDMSG": ["*$[$t$]* $m"],
  "OURTARGETEDNOTICE": ["[notice($[$t$])] $m"],
  "OURCHANNOTICE": ["-$N:$t- $m"],
  "OURPRIVNOTICE": ["-$N- $m"],
  "OURCHANACTION": [" * $N $m"],
  "OURPRIVACTION": [" * $N $m"],
  "CHANACTION": [" * ${$($N$)$} $m"],
  "PRIVACTION": [" * $($N$) $m"],
  "CHANCTCP": ["$N [$h] requested CTCP $x from $c: $m"],
  "PRIVCTCP": ["$N [$h] requested CTCP $x from $-: $m"],
  "CTCPREPLY": ["CTCP $x reply from $N: $m"],
  "OURCHANCTCP": ["[ctcp($t)] $x $m"],
  "OURPRIVCTCP": ["[ctcp($t)] $x $m"],
  "OURTARGETEDCTCP": ["[ctcp($t)] $x $m"],
  "WHOISUSER": ["$B$N$B [$h]", true],
  "WHOISREALNAME": [" realname : $m", true],
  "WHOISCHANNELS": [" channels : $m", true],
  "WHOISSERVER": [" server   : $x [$m]", true],
  "WHOISACCOUNT": [" account  : qwebirc://qwhois/$m", true],
  "WHOISIDLE": [" idle     : $x [connected: $m]", true],
  "WHOISAWAY": [" away     : $m", true],
  "WHOISOPER": ["          : $BIRC Operator$B", true],
  "WHOISOPERNAME": [" operedas : $m", true],
  "WHOISACTUALLY": [" realhost : $m [ip: $x]", true],
  "WHOISGENERICTEXT": ["          : $m", true],
  "WHOISEND": ["End of WHOIS", true],
  "AWAY": ["$N is away: $m", true],
  "GENERICERROR": ["$m: $t", true],
  "GENERICMESSAGE": ["$m", true],
  "WALLOPS": ["WALLOP $n: $t", true],
  "CHANNELCREATIONTIME": ["Channel $c was created at: $m", true],
  "CHANNELMODEIS": ["Channel modes on $c are: $m", true]
};

qwebirc.ui.Theme = new Class({
  initialize: function(themeDict) {
    this.__theme = qwebirc.util.dictCopy(qwebirc.ui.themes.Default);
    
    if(themeDict)
      for(var k in themeDict)
        this.__theme[k] = themeDict[k];

    for(var k in this.__theme) {
      if(k == "PREFIX")
        continue;

      var data = this.__theme[k];
      if(data[1]) {
        this.__theme[k] = this.__theme["PREFIX"] + data[0];
      } else {
        this.__theme[k] = data[0];
      }
    }
    
    this.__ccmap = qwebirc.util.dictCopy(qwebirc.ui.themes.ThemeControlCodeMap);
    this.__ccmaph = qwebirc.util.dictCopy(this.__ccmap);

    this.__ccmaph["("] = this.message("HILIGHT", {}, this.__ccmap);
    this.__ccmaph[")"] = this.message("HILIGHTEND", {}, this.__ccmap);
    this.__ccmaph["{"] = this.__ccmaph["}"] = "";
  },
  __dollarSubstitute: function(x, h, mapper) {
    var msg = [];

    var n = x.split("");
    for(var i=0;i<n.length;i++) {
      var c = n[i];
      if(c == "$" && (i <= n.length - 1)) {
        var c2 = n[++i];

        var o = mapper[c2];
        if(!o)
          o = h[c2];
        if(o)
          msg.push(o);
      } else {
        msg.push(c);
      }
    }
    
    return msg.join("");
  },
  message: function(type, data, hilight) {
    var map;
    if(hilight) {
      map = this.__ccmaph;
    } else {
      map = this.__ccmap;
    }
    
    if(data && data["n"])
      data["N"] = "qwebirc://whois/" + data.n + "/";
    return this.__dollarSubstitute(this.__theme[type], data, map);
  }
});

qwebirc.ui.HilightController = new Class({
  initialize: function(parent) {
    this.parent = parent;
    this.regex = null;
    this.prevnick = null;
  },
  match: function(text) {
    var nick = this.parent.nickname;
    if(nick != this.prevnick) {
      var classes = '[\\s\\.,;:]';
      this.regex = new RegExp('(^|' + classes + ')' + RegExp.escape(nick) + '(' + classes + '|$)', "i");
    }
    if(text.match(this.regex))
      return true;
    return false;
  }
});

qwebirc.ui.Beeper = new Class({
  initialize: function(uiOptions) {
    this.uiOptions = uiOptions;
    
    this.soundInited = false;
    this.soundReady = false;

    if(this.uiOptions.BEEP_ON_MENTION)
      this.soundInit();
  },
  soundInit: function() {
    if(this.soundInited)
      return;
    if(!$defined(Browser.Plugins.Flash) || Browser.Plugins.Flash.version < 8)
      return;
    this.soundInited = true;
    
    this.soundPlayer = new qwebirc.sound.SoundPlayer();
    this.soundPlayer.addEvent("ready", function() {
      this.soundReady = true;
    }.bind(this));
    
    this.soundPlayer.go();
  },
  beep: function() {
    if(!this.soundReady || !this.uiOptions.BEEP_ON_MENTION)
      return;
      
    this.soundPlayer.beep();
  }
});

qwebirc.ui.Flasher = new Class({
  initialize: function(uiOptions) {
    this.uiOptions = uiOptions;
    
    this.windowFocused = false;
    this.canUpdateTitle = true;
    this.titleText = document.title;

    var favIcon = this._getFavIcon();
    if($defined(favIcon)) {
      this.favIcon = favIcon;
      this.favIconParent = favIcon.parentNode;
      this.favIconVisible = true;
      this.emptyFavIcon = new Element("link");
      this.emptyFavIcon.rel = "shortcut icon";
      this.emptyFavIcon.href = qwebirc.global.staticBaseURL + "images/empty_favicon.ico";
      this.emptyFavIcon.type = "image/x-icon";
      this.flashing = false;
    
      this.canFlash = true;
      document.addEvent("mousedown", this.cancelFlash.bind(this));
      document.addEvent("keydown", this.cancelFlash.bind(this));
    } else {
      this.canFlash = false;
    }
  },
  _getFavIcon: function() {
    var favIcons = $$("head link");
    for(var i=0;i<favIcons.length;i++)
      if(favIcons[i].getAttribute("rel") == "shortcut icon")
        return favIcons[i];
  },
  flash: function() {
    if(!this.uiOptions.FLASH_ON_MENTION || this.windowFocused || !this.canFlash || this.flashing)
      return;

    this.titleText = document.title; /* just in case */      
    var flashA = function() {
      this.hideFavIcon();
      this.canUpdateTitle = false;
      document.title = "Activity!";
      
      this.flasher = flashB.delay(500);
    }.bind(this);
    
    var flashB = function() {
      this.showFavIcon();
      this.canUpdateTitle = true;
      document.title = this.titleText;
      
      this.flasher = flashA.delay(500);
    }.bind(this);

    this.flashing = true;
    flashA();
  },
  cancelFlash: function() {
    if(!this.canFlash || !$defined(this.flasher))
      return;
      
    this.flashing = false;
    
    $clear(this.flasher);
    this.flasher = null;
    
    this.showFavIcon();
    document.title = this.titleText;
    this.canUpdateTitle = true;
  },
  hideFavIcon: function() {
    if(this.favIconVisible) {
      /* only seems to work in firefox */
      this.favIconVisible = false;
      this.favIconParent.removeChild(this.favIcon);
      this.favIconParent.appendChild(this.emptyFavIcon);
    }
  },
  showFavIcon: function() {
    if(!this.favIconVisible) {
      this.favIconVisible = true;
      this.favIconParent.removeChild(this.emptyFavIcon);
      this.favIconParent.appendChild(this.favIcon);
    }
  },
  updateTitle: function(text) {
    this.titleText = text;
    return this.canUpdateTitle;
  },
  focusChange: function(value) {
    this.windowFocused = value;

    if(value)
      this.cancelFlash();
  }
});

qwebirc.ui.TabCompleterFactory = new Class({
  initialize: function(ui) {
    this.ui = ui;
    this.reset();
  },
  tabComplete: function(textBox) {
    var text = textBox.value;
    
    if(!$defined(this.obj)) {
      this.incr = 1;
      
      var w = this.ui.getActiveWindow();
      if(!w)
        return;
        
      var startingWord = qwebirc.util.getEnclosedWord(text, qwebirc.util.getCaretPos(textBox));
      var preword = "", word = "", postword = "";
      if($defined(startingWord)) {
        var preword = text.substring(0, startingWord[0]);
        var word = startingWord[1];
        var postword = text.substring(startingWord[0] + word.length);
      }
      
      var ltext = text.toLowerCase();
      if(text == "") {
        preword = "/msg ";
        obj = qwebirc.ui.QueryTabCompleter;
      } else if(w.client.isChannel(word)) {
        obj = qwebirc.ui.ChannelNameTabCompleter;
      } else if(ltext.match(/^\/(q|query|msg) /i)) {
        obj = qwebirc.ui.QueryTabCompleter;
      } else if(w.type == qwebirc.ui.WINDOW_QUERY) {
        obj = qwebirc.ui.QueryNickTabCompleter;
      } else if(w.type == qwebirc.ui.WINDOW_CHANNEL) {
        /* "slug[TAB]" == "slug: " */
        if(preword == "") {
          if((postword != "") && postword.charAt(0) == " ") {
            postword = ":" + postword;
          } else {
            postword = ": " + postword;
          }
          this.incr++;
        }
        obj = qwebirc.ui.ChannelUsersTabCompleter;
      } else {
        return;
      }

      if(postword == "")
        postword = " ";
      
      this.obj = new obj(preword, word, postword, w);
      if(!$defined(this.obj))
        return;
    }
      
    var r = this.obj.get();
    if(!$defined(r))
      return;
      
    textBox.value = r[1];
    qwebirc.util.setCaretPos(textBox, r[0] + this.incr);
  },
  reset: function() {
    this.obj = null;
  }
});

qwebirc.ui.TabIterator = new Class({
  initialize: function(client, prefix, list) {
    this.prefix = prefix;
    if(!$defined(list) || list.length == 0) {
      this.list = null;
    } else {
      var l = [];
      
      var prefixl = qwebirc.irc.toIRCCompletion(client, prefix);
      
      /* convert the nick list to IRC lower case, stripping all non letters
       * before comparisions */
      for(var i=0;i<list.length;i++) {
        var l2 = qwebirc.irc.toIRCCompletion(client, list[i]);
        
        if(l2.startsWith(prefixl))
          l.push(list[i]);
      }
      this.list = l;
    }
    
    this.pos = -1;
  },
  next: function() {
    /*
     * ideally next would do the list gubbins recursively, but no JS engine currently
     * support tail recursion :(
     */
    if(!$defined(this.list))
      return null;
    
    this.pos = this.pos + 1;
    if(this.pos >= this.list.length)
      this.pos = 0;
      
    return this.list[this.pos];
  }
});

qwebirc.ui.BaseTabCompleter = new Class({
  initialize: function(client, prefix, existingNick, suffix, list) {
    this.existingNick = existingNick;
    this.prefix = prefix;
    this.suffix = suffix;
    this.iterator = new qwebirc.ui.TabIterator(client, existingNick, list);
  },
  get: function() {
    var n = this.iterator.next();
    if(!$defined(n))
      return null;
      
    var p = this.prefix + n;
    return [p.length, p + this.suffix];
  }
});

qwebirc.ui.QueryTabCompleter = new Class({
  Extends: qwebirc.ui.BaseTabCompleter,
  initialize: function(prefix, existingNick, suffix, window) {
    this.parent(window.client, prefix, existingNick, suffix, window.client.lastNicks);
  }
});

qwebirc.ui.QueryNickTabCompleter = new Class({
  Extends: qwebirc.ui.BaseTabCompleter,
  initialize: function(prefix, existingText, suffix, window) {
    var nick = window.name
    this.parent(window.client, prefix, existingText, suffix, [nick]);
  }
});

qwebirc.ui.ChannelNameTabCompleter = new Class({
  Extends: qwebirc.ui.BaseTabCompleter,
  initialize: function(prefix, existingText, suffix, window) {

    /* WTB map */
    var l = [];
    var wa = window.parentObject.windows[window.parentObject.getClientId(window.client)];
    
    for(var c in window.client.channels) {
      var w = wa[c];
      
      /* redundant? */
      if($defined(w))
        w = w.lastSelected;
        
      l.push([w, c]);
    }
    
    l.sort(function(a, b) {
      return b[0] - a[0];
    });

    var l2 = [];    
    for(var i=0;i<l.length;i++)
      l2.push(l[i][1]);
    this.parent(window.client, prefix, existingText, suffix, l2);
  }
});

qwebirc.ui.ChannelUsersTabCompleter = new Class({
  Extends: qwebirc.ui.BaseTabCompleter,
  initialize: function(prefix, existingText, suffix, window) {
    var nc = window.client.tracker.getSortedByLastSpoke(window.name);

    this.parent(window.client, prefix, existingText, suffix, nc);
  }
});

qwebirc.ui.style.ModifiableStylesheet = new Class({
  initialize: function(url) {
    var n = this.__parseStylesheet(this.__getStylesheet(url));
    
    this.__cssText = n.cssText;
    this.rules = n.rules;
    
    this.__tag = this.__createTag();
  },
  __createTag: function() {
    var tag = document.createElement("style");
    tag.type = "text/css";
    tag.media = "all";

    document.getElementsByTagName("head")[0].appendChild(tag);
    
    return tag;
  },
  __getStylesheet: function(url) {
    var r = new Request({url: url, async: false});
    var result;
    r.addEvent("complete", function(x) {
      result = x;
    });
    r.get();
    return result;
  },
  __setStylesheet: function(stylesheet) {
    var node = this.__tag;
    
    if(node.styleSheet) { /* IE */
      node.styleSheet.cssText = stylesheet;
    } else {
      var d = document.createTextNode(stylesheet);
      node.appendChild(d);
      while(node.childNodes.length > 1)
        node.removeChild(node.firstChild);
    }
  },
  __parseStylesheet: function(data) {
    var lines = data.replace("\r\n", "\n").split("\n");
    
    var rules = {};
    var i;
    for(i=0;i<lines.length;i++) {
      var line = lines[i];
      if(line.trim() === "")
        break;
        
      var tokens = line.splitMax("=", 2);
      if(tokens.length != 2)
        continue;
        
      rules[tokens[0]] = tokens[1];
    }
    
    var cssLines = []
    for(;i<lines.length;i++)
      cssLines.push(lines[i]);
      
    return {cssText: cssLines.join("\n"), rules: rules};
  },
  set: function(mutator) {
    if(!$defined(mutator))
	  mutator = function(x) { return x; };
	  
    var text = this.__cssText;
    for(var key in this.rules) {
      var s = this.rules[key].split(",");
      var value = mutator.pass(s);
      
      text = text.replaceAll("$(" + key + ")", value);
    }
    
    this.__setStylesheet(text);
  }
});

qwebirc.ui.GenericLoginBox = function(parentElement, callback, initialNickname, initialChannels, autoConnect, autoNick, networkName) {
  if(autoConnect) {
    qwebirc.ui.ConfirmBox(parentElement, callback, initialNickname, initialChannels, autoNick, networkName);
  } else {
    qwebirc.ui.LoginBox(parentElement, callback, initialNickname, initialChannels, networkName);
  }
}

qwebirc.ui.AuthLogin = function(e) {
  var cookie = Cookie.write("redirect", document.location);
  document.location = qwebirc.global.dynamicBaseURL + "auth/";
  new Event(e).stop();
}

qwebirc.ui.ConfirmBox = function(parentElement, callback, initialNickname, initialChannels, autoNick, networkName) {
  var outerbox = new Element("table");
  outerbox.addClass("qwebirc-centrebox");
  parentElement.appendChild(outerbox);
  var tbody = new Element("tbody");
  outerbox.appendChild(tbody);
  var tr = new Element("tr");
  tbody.appendChild(tr);
  var td = new Element("td");
  tr.appendChild(td);
  
  var box = new Element("table");
  box.addClass("qwebirc-confirmbox");
  td.appendChild(box);

  var tbody = new Element("tbody");
  box.appendChild(tbody);
  
  var tr = new Element("tr");
  tbody.appendChild(tr);
  tr.addClass("tr1");
  
  var text = new Element("td");
  tr.appendChild(text);
  
  var nick = new Element("b");
  nick.set("text", initialNickname);
  
  var c = initialChannels.split(" ")[0].split(",");
  
  text.appendChild(document.createTextNode("To connect to " + networkName + " IRC and join channel" + ((c.length>1)?"s":"") + " "));

  for(var i=0;i<c.length;i++) {
    if((c.length > 1) && (i == c.length - 1)) {
      text.appendChild(document.createTextNode(" and "));
    } else if(i > 0) {
      text.appendChild(document.createTextNode(", "));
    }
    text.appendChild(new Element("b").set("text", c[i]));
    
  }
  
  if(!autoNick) {
    text.appendChild(document.createTextNode(" as "));
    text.appendChild(nick);
  }
  
  text.appendChild(document.createTextNode(" click 'Connect'."));
  text.appendChild(new Element("br"));
  if(qwebirc.auth.enabled() && qwebirc.auth.quakeNetAuth() && !qwebirc.auth.loggedin())
    text.appendChild(document.createTextNode("If you'd like to connect using your Q auth click 'Log in'."));

  var tr = new Element("tr");
  tbody.appendChild(tr);
  tr.addClass("tr2");
  
  var td = new Element("td");
  tr.appendChild(td);

  var yes = new Element("input", {"type": "submit", "value": "Connect"});
  td.appendChild(yes);
  yes.addEvent("click", function(e) {
    parentElement.removeChild(outerbox);
    callback({"nickname": initialNickname, "autojoin": initialChannels});
  });
  
  if(qwebirc.auth.enabled() && qwebirc.auth.quakeNetAuth() && !qwebirc.auth.loggedin()) {
    var auth = new Element("input", {"type": "submit", "value": "Log in"});
    td.appendChild(auth);
    auth.addEvent("click", qwebirc.ui.AuthLogin);
  }
  
  if(window == window.top) 
    yes.focus();
}

qwebirc.ui.LoginBox = function(parentElement, callback, initialNickname, initialChannels, networkName) {
  var outerbox = new Element("table");
  outerbox.addClass("qwebirc-centrebox");
  parentElement.appendChild(outerbox);
  var tbody = new Element("tbody");
  outerbox.appendChild(tbody);
  var tr = new Element("tr");
  tbody.appendChild(tr);
  var td = new Element("td");
  tr.appendChild(td);
  
  var box = new Element("table");
  box.addClass("qwebirc-loginbox");
  td.appendChild(box);
  
  var tbody = new Element("tbody");
  box.appendChild(tbody);
  
  var tr = new Element("tr");
  tbody.appendChild(tr);
  tr.addClass("tr1");
  
  var td = new Element("td");
  tr.appendChild(td);
  td.set("html", "<h1>Connect to " + networkName + " IRC</h1>");  
    
  var tr = new Element("tr");
  tbody.appendChild(tr);
  tr.addClass("tr2");
  
  var td = new Element("td");
  tr.appendChild(td);
  
  var form = new Element("form");
  td.appendChild(form);

  var boxtable = new Element("table");
  form.appendChild(boxtable);

  var tbody = new Element("tbody");
  boxtable.appendChild(tbody); /* stupid IE */

  function createRow(label, e2, style) {
    var r = new Element("tr");
    tbody.appendChild(r);

    var d1 = new Element("td");
    if(label)
      d1.set("text", label);
    r.appendChild(d1);

    var d2 = new Element("td");
    r.appendChild(d2);
    
    if($defined(e2))
      d2.appendChild(e2);
    if($defined(style)) {
      r.setStyles(style);
      return [r, d2];
    }
    
    return d2;
  }

  var nick = new Element("input");
  createRow("Nickname:", nick);
  
  var chanStyle = null;
  if(qwebirc.auth.enabled() && qwebirc.auth.bouncerAuth())
    chanStyle = {display: "none"};
  
  var chan = new Element("input");
  createRow("Channels:", chan, chanStyle);

  if(qwebirc.auth.enabled()) {
    if(qwebirc.auth.passAuth()) {
      var authRow = createRow("Auth to services:");
      var authCheckBox = qwebirc.util.createInput("checkbox", authRow, "connect_auth_to_services", false);
    
      var usernameBox = new Element("input");
      var usernameRow = createRow("Username:", usernameBox, {display: "none"})[0];
    
      var passwordRow = createRow("Password:", null, {display: "none"});
      var passwordBox = qwebirc.util.createInput("password", passwordRow[1], "connect_auth_password");

      authCheckBox.addEvent("click", function(e) { qwebirc.ui.authShowHide(authCheckBox, authRow, usernameBox, usernameRow, passwordRow[0]) });
    } else if(qwebirc.auth.bouncerAuth()) {
      var passwordRow = createRow("Password:");
      var passwordBox = qwebirc.util.createInput("password", passwordRow, "connect_auth_password");
    }
  }
  
  var connbutton = new Element("input", {"type": "submit"});
  connbutton.set("value", "Connect");
  var r = createRow(undefined, connbutton);
  
  if(qwebirc.auth.enabled() && qwebirc.auth.quakeNetAuth() && !qwebirc.auth.loggedin()) {
    var auth = new Element("input", {"type": "submit", "value": "Log in"});
    r.appendChild(auth);
    auth.addEvent("click", qwebirc.ui.AuthLogin);
  }

  form.addEvent("submit", function(e) {
    new Event(e).stop();
    var nickname = nick.value;
    var chans = chan.value;
    if(chans == "#") /* sorry channel "#" :P */
      chans = "";

    if(!nickname) {
      alert("You must supply a nickname.");
      nick.focus();
      return;
    }
    var stripped = qwebirc.global.nicknameValidator.validate(nickname);
    if(stripped != nickname) {
      nick.value = stripped;
      alert("Your nickname was invalid and has been corrected; please check your altered nickname and press Connect again.");
      nick.focus();
      return;
    }
    
    var data = {"nickname": nickname, "autojoin": chans};
    if(qwebirc.auth.enabled()) {
      if(qwebirc.auth.passAuth() && authCheckBox.checked) {
          if(!usernameBox.value || !passwordBox.value) {
            alert("You must supply your username and password in auth mode.");
            if(!usernameBox.value) {
              usernameBox.focus();
            } else {
              passwordBox.focus();
            }
            return;
          }
          
          data["serverPassword"] = usernameBox.value + " " + passwordBox.value;
      } else if(qwebirc.auth.bouncerAuth()) {
        if(!passwordBox.value) {
          alert("You must supply a password.");
          passwordBox.focus();
          return;
        }
        
        data["serverPassword"] = passwordBox.value;
      }
    }
    parentElement.removeChild(outerbox);
    
    callback(data);
  }.bind(this));
    
  nick.set("value", initialNickname);
  chan.set("value", initialChannels);

  if(window == window.top)
    nick.focus();
}

qwebirc.ui.authShowHide = function(checkbox, authRow, usernameBox, usernameRow, passwordRow) {
  var visible = checkbox.checked;
  var display = visible?null:"none";
  usernameRow.setStyle("display", display);
  passwordRow.setStyle("display", display);
  
  if(visible) {
//    authRow.parentNode.setStyle("display", "none");
    usernameBox.focus();
  }
}

/* NEEDS converting to plain HTML! */
qwebirc.ui.EmbedWizardStep = new Class({
  Implements: [Options, Events],
  options: {
    "title": "",
    "first": "",
    "hint": "",
    "middle": null,
    "premove": null,
    "example": ""
  },
  initialize: function(parent, options) {
    this.setOptions(options);
    this.parent = parent;
  },
  show: function() {
    this.parent.title.set("html", this.options.title);
    this.parent.firstRow.set("html", this.options.first);
    this.parent.hint.set("html", this.options.hint);
    this.parent.example.set("text", this.options.example);
    
    while(this.parent.middleRow.childNodes.length > 0)
      this.parent.middleRow.removeChild(this.parent.middleRow.childNodes[0]);
      
    if($defined(this.options.middle))
      this.parent.middleRow.appendChild(this.options.middle);
    
    this.fireEvent("show");
  }
});

qwebirc.ui.EmbedWizard = new Class({
  Implements: [Options, Events],
  options: {
    uiOptions: null,
    optionsCallback: null,
    baseURL: "http://webchat.quakenet.org/"
  },
  initialize: function(parent, options) {
    /* for some unknown reason setOptions doesn't work... */
    this.options.uiOptions = options.uiOptions;
    this.options.baseURL = options.baseURL;
    this.options.optionsCallback = options.optionsCallback;
    this.create(parent);
    this.addSteps();
  },
  create: function(parent) {
    this.t = parent;

    var titleRow = this.newRow();
    this.title = new Element("h2");
    this.title.setStyle("margin-top", "0px");
    this.title.setStyle("margin-bottom", "5px");
    titleRow.appendChild(this.title);
    
    this.firstRow = this.newRow();
    this.middleRow = this.newRow();
    var hintRow = this.newRow();
    this.hint = new Element("div");
    this.hint.setStyle("font-size", "0.8em");
    this.hint.setStyle("font-style", "italic");
    hintRow.appendChild(this.hint);
    var exampleRow = this.newRow();
    this.example = new Element("pre");
    exampleRow.appendChild(this.example);
    
    var nextRow = this.newRow();
    nextRow.addClass("wizardcontrols");
    var backBtn = new Element("input");
    backBtn.type = "submit";
    backBtn.value = "< Back";
    backBtn.addEvent("click", this.back.bind(this));
    nextRow.appendChild(backBtn);
    
    var nextBtn = new Element("input");
    nextBtn.type = "submit";
    nextBtn.value = "Next >";
    nextRow.appendChild(nextBtn);
    nextBtn.addEvent("click", this.next.bind(this));
    
    this.nextBtn = nextBtn;
    this.backBtn = backBtn;
  },
  newRow: function() {
    var cell = new Element("div");
    this.t.appendChild(cell);
    return cell;
  },
  newStep: function(options) {
    return new qwebirc.ui.EmbedWizardStep(this, options);
  },
  newRadio: function(parent, text, name, selected) {
    var p = new Element("div");
    parent.appendChild(p);

    var id = qwebirc.util.generateID();
    var r = qwebirc.util.createInput("radio", p, name, selected, id);
    
    var label = new Element("label", {"for": id});
    label.appendChild(document.createTextNode(text));
    p.appendChild(label);
      
    return r;
  },
  addSteps: function() {
    var af = function(select) {
      if(Browser.Engine.trident) {
        var f = function() {
          this.focus();
          if(select)
            this.select();
        };
        f.delay(100, this, []);
      } else {
        this.focus();
        this.select();
      }
    };
  
    this.welcome = this.newStep({
      "title": "Add webchat to your website",
      "first": "This wizard will help you create an embedded client by asking you questions then giving you the code to add to your website.<br/><br/>You can use the <b>Next</b> and <b>Back</b> buttons to navigate through the wizard; click <b>Next</b> to continue."
    });
    
    this.chanBox = new Element("input");
    this.chanBox.addClass("text");
    this.chans = this.newStep({
      "title": "Set channels",
      "first": "Enter the channels you would like the client to join on startup:",
      "hint": "You can supply multiple channels by seperating them with a comma, e.g.:",
      "example": "#rogue,#eu-mage",
      middle: this.chanBox
    }).addEvent("show", af.bind(this.chanBox));
    
    var customnickDiv = new Element("div");
    this.customnick = this.newStep({
      "title": "Choose a nickname mode",
      "first": "At startup would you like the client to use a random nickname, a preset nickname or a nickname of the users choice?",
      "hint": "It is recommended that you only use a preset nickname if the client is for your own personal use.",
      middle: customnickDiv
    });

    this.choosenick = this.newRadio(customnickDiv, "Make the user choose a nickname.", "nick", true);
    this.randnick = this.newRadio(customnickDiv, "Use a random nickname, e.g. qwebirc12883.", "nick");
    this.presetnick = this.newRadio(customnickDiv, "Use a preset nickname of your choice.", "nick");
    
    var promptdiv = new Element("form");
    this.connectdialog = this.newStep({
      "title": "Display connect dialog?",
      "first": "Do you want the user to be shown the connect dialog (with the values you have supplied pre-entered) or just a connect confirmation?",
      middle: promptdiv,
      "hint": "You need to display the dialog if you want the user to be able to set their nickname before connecting."
    });

    var changeOptions = new Element("div");
    this.currentLF = this.newRadio(changeOptions, "Use the current look and feel (", "lookandfeel", true);

    var alterButton = new Element("input");
    alterButton.type = "submit";
    alterButton.value = "alter";
    alterButton.addEvent("click", this.options.optionsCallback);
    changeOptions.firstChild.appendChild(alterButton);
    changeOptions.firstChild.appendChild(document.createTextNode(")."));
    
    this.defaultLF = this.newRadio(changeOptions, "Use the default look and feel.", "lookandfeel");
    
    this.lookandfeel = this.newStep({
      "title": "Configure look and feel",
      "first": "The look and feel will be copied from the current settings.",
      middle: changeOptions
    });
    
    var autoconnect = this.newRadio(promptdiv, "Connect without displaying the dialog.", "prompt", true);
    this.connectdialogr = this.newRadio(promptdiv, "Show the connect dialog.", "prompt");
    
    this.nicknameBox = new Element("input");
    this.nicknameBox.addClass("text");
    this.nickname = this.newStep({
      "title": "Set nickname",
      "first": "Enter the nickname you would like the client to use by default:",
      "premove": function() {
        if(this.nicknameBox.value == "") {
          alert("You must supply a nickname.");
          this.nicknameBox.focus();
          return false;
        }
        var v = qwebirc.global.nicknameValidator.validate(this.nicknameBox.value, true);
        if(v != this.nicknameBox.value) {
          this.nicknameBox.value = v;
          alert("The supplied nickname was invalid and has been corrected.");
          this.nicknameBox.focus();
          return false;
         }
        return true;
      }.bind(this),
      middle: this.nicknameBox,
      hint: "If you use a . (dot/period) then it will be substituted with a random number."
    }).addEvent("show", af.bind(this.nicknameBox));

    var codeDiv = new Element("div");
    this.finish = this.newStep({
      "title": "Finished!",
      "first": "Your custom link is:",
      middle: codeDiv
    }).addEvent("show", function() {
      var alink = new Element("a");
      var abox = new Element("input");
      abox.addClass("iframetext");
      var url = this.generateURL(false);
      
      alink.href = url;
      alink.target = "_blank";
      alink.appendChild(document.createTextNode(url));
      abox.value = "<iframe src=\"" + url + "\" width=\"647\" height=\"400\"></iframe>";
      
      var mBox = [
        alink,
        new Element("br"), new Element("br"),
        document.createTextNode("You can embed this into your page with the following code:"),
        new Element("br"),
        abox
      ];

      while(codeDiv.childNodes.length > 0)
        codeDiv.removeChild(codeDiv.childNodes[0]);
        
      mBox.forEach(function(x) {
        codeDiv.appendChild(x);
      });
      
      af.bind(abox)(true);
      abox.addEvent("click", function() {
        this.select();
      }.bind(abox));
    }.bind(this));

    this.updateSteps();
    this.step = 0;
    
    this.showStep();
  },
  updateSteps: function() {
    this.steps = [this.welcome, this.customnick];
    
    if(this.presetnick.checked)
      this.steps.push(this.nickname);
      
    this.steps.push(this.chans);
    
    if(this.chanBox.value != "" && !this.choosenick.checked)
      this.steps.push(this.connectdialog);
    
    this.steps.push(this.lookandfeel);
    this.steps.push(this.finish);
  },
  showStep: function() {
    this.backBtn.disabled = !(this.step > 0);
    
    this.nextBtn.value = (this.step >= this.steps.length - 1)?"Close":"Next >";
      
    this.steps[this.step].show();
  },
  next: function() {
    var pm = this.steps[this.step].options.premove;
    
    if(pm && !pm())
      return;
      
    this.updateSteps();
    if(this.step >= this.steps.length - 1) {
      this.close();
      return;
    }
    this.step = this.step + 1;
    this.showStep();
  },
  close: function() {
    this.fireEvent("close");
  },
  back: function() {
    if(this.step <= 0)
      return;

      this.step = this.step - 1;
    this.showStep();
  },
  generateURL: function() {
    var chans = this.chanBox.value;
    var nick = this.nicknameBox.value;
    var connectdialog = this.connectdialogr.checked && chans != "" && !this.choosenick.checked;

    var URL = [];
    if(this.presetnick.checked) {
      URL.push("nick=" + escape(nick));
    } else if(!this.choosenick.checked) {
      URL.push("randomnick=1");
    }
    
    if(chans) {
      var d = chans.split(",");
      var d2 = [];
      
      d.forEach(function(x) {
        if(x.charAt(0) == '#')
          x = x.substring(1);
          
        d2.push(x);
      });
      
      URL.push("channels=" + escape(d2.join(",")));
    }
    
    if(connectdialog)
      URL.push("prompt=1");

    if(this.currentLF.checked) {
      var uioptions = this.options.uiOptions.serialise();
      if(uioptions != "")
        URL.push("uio=" + uioptions);
    }
    
    return this.options.baseURL + (URL.length>0?"?":"") + URL.join("&");
  }
});

qwebirc.ui.supportsFocus = function() {
  var ua = navigator.userAgent;
  if(!$defined(ua))
    return [true];
      
  if(Browser.Engine.ipod || ua.indexOf("Konqueror") != -1)
    return [false, false];

  return [true];
}

/**
 * Note that options are settable by the uioptions url arg by default unless you specifiy
 * settableByURL...
 */
qwebirc.config.DEFAULT_OPTIONS = [
  [1, "BEEP_ON_MENTION", "Beep when nick mentioned or on query activity (requires Flash)", true, {
    enabled: function() {
      if(!$defined(Browser.Plugins.Flash) || Browser.Plugins.Flash.version < 8)
        return [false, false]; /* [disabled, default_value] */
      return [true];
    },
    applyChanges: function(value, ui) {
      if(ui.setBeepOnMention)
        ui.setBeepOnMention(value);
    }
  }],
  [7, "FLASH_ON_MENTION", "Flash titlebar when nick mentioned or on query activity", true, {
    enabled: qwebirc.ui.supportsFocus
  }],
  [2, "DEDICATED_MSG_WINDOW", "Send privmsgs to dedicated messages window", false],
  [4, "DEDICATED_NOTICE_WINDOW", "Send notices to dedicated message window", false],
  [3, "NICK_OV_STATUS", "Show status (@/+) before nicknames in channel lines", true],
  [5, "ACCEPT_SERVICE_INVITES", "Automatically join channels when invited by Q", true, {
    settableByURL: false
  }],
  [6, "USE_HIDDENHOST", "Hide your hostmask when authed to Q (+x)", true, {
    settableByURL: false
  }],
  [8, "LASTPOS_LINE", "Show a last position indicator for each window", true, {
    enabled: qwebirc.ui.supportsFocus
  }],
  [9, "NICK_COLOURS", "Automatically colour nicknames", false],
  [10, "HIDE_JOINPARTS", "Hide JOINS/PARTS/QUITS", true],
  [11, "STYLE_HUE", "Adjust user interface hue", function() {
    return {class_: qwebirc.config.HueOption, default_: 210};
  }, {
    applyChanges: function(value, ui) {
      ui.setModifiableStylesheetValues({hue: value});
    }
  }],
  [12, "QUERY_ON_NICK_CLICK", "Query on nickname click in channel", false],
  [13, "SHOW_NICKLIST", "Show nickname list in channels", true],
  [14, "SHOW_TIMESTAMPS", "Show timestamps", true] /* we rely on the hue update */
];

qwebirc.config.DefaultOptions = null;

qwebirc.config.Input = new Class({
  initialize: function(parent, option, position, parentObject) {
    this.option = option;
    this.value = option.value;
    this.enabled = this.option.enabled;
    this.position = position;
    this.parentElement = parent;
    this.parentObject = parentObject;
    
    this.render();
  },
  createInput: function(type, parent, name, selected, id) {
    if(!$defined(parent))
      parent = this.parentElement;

    return qwebirc.util.createInput(type, parent, name, selected, this.option.id);
  },
  FE: function(element, parent) {
    var n = new Element(element);
    if(!$defined(parent))
      parent = this.parentElement;
      
    parent.appendChild(n);
    return n;
  },
  focus: function() {
    this.mainElement.focus();
  },
  render: function() {
    this.event("render", this.mainElement);
  },
  applyChanges: function() {
    this.event("applyChanges", [this.get(), this.parentObject.optionObject.ui]);
  },
  event: function(name, x) {
    if(!$defined(this.option.extras))
      return;
    var t = this.option.extras[name];
    if(!$defined(t))
      return;
      
    t.pass(x, this)();
  },
  cancel: function() {
  }
});

qwebirc.config.TextInput = new Class({
  Extends: qwebirc.config.Input,
  render: function() {
    var i = this.createInput("text");
    this.mainElement = i;
    
    i.value = this.value;
    i.disabled = !this.enabled;
    
    this.parent();
  },
  get: function() {
    return this.mainElement.value;
  }
});

qwebirc.config.HueInput = new Class({
  Extends: qwebirc.config.Input,
  render: function() {
    var i = new Element("div");
    i.addClass("qwebirc-optionspane");
    i.addClass("hue-slider");
    this.parentElement.appendChild(i);
    
    var k = new Element("div");
    k.addClass("knob");
    if(Browser.Engine.trident) {
      k.setStyle("top", "0px");
      k.setStyle("background-color", "black");
    }
    
    i.appendChild(k);
    
    var slider = new Slider(i, k, {steps: 36, range: [0, 369], wheel: true});
    slider.set(this.value);
    this.startValue = this.value;
    
    slider.addEvent("change", function(step) {
      this.value = step;
      this.applyChanges();
    }.bind(this));
    this.mainElement = i;
    
    if(!this.enabled)
      slider.detach();
    
    this.parent();
  },
  get: function() {
    return this.value;
  },
  cancel: function() {
    this.value = this.startValue;
    this.applyChanges();
  }
});

qwebirc.config.CheckInput = new Class({
  Extends: qwebirc.config.Input,
  render: function() {
    var i = this.createInput("checkbox", null, null, null, this.id);
    this.mainElement = i;
    
    i.checked = this.value;
    i.disabled = !this.enabled;

    this.parent();
  },
  get: function() {
    return this.mainElement.checked;
  }
});

qwebirc.config.RadioInput = new Class({
  Extends: qwebirc.config.Input,
  render: function() {
    var value = this.option.options;
    
    this.elements = [];
     
    for(var i=0;i<value.length;i++) {
      var d = this.FE("div", this.parentObject);
      var e = this.createInput("radio", d, "options_radio" + this.position, i == this.option.position);
      this.elements.push(e);
      e.disabled = !this.enabled;
   
      if(i == 0)
        this.mainElement = e;
      
      d.appendChild(document.createTextNode(value[i][0]));
    };
    this.parent();
  },
  get: function() {
    for(var i=0;i<this.elements.length;i++) {
      var x = this.elements[i];
      if(x.checked) {
        this.option.position = i;
        return this.option.options[i][1];
      }
    }
  }
});

qwebirc.config.Option = new Class({
  initialize: function(optionId, prefix, label, default_, extras) {
    this.prefix = prefix;
    this.label = label;
    this.default_ = default_;
    this.optionId = optionId;
    this.extras = extras;
    
    if($defined(extras) && $defined(extras.enabled)) {
      var enabledResult = extras.enabled();
      this.enabled = enabledResult[0];
      
      if(!enabledResult[0] && enabledResult.length > 1)
        this.default_ = enabledResult[1];
    } else {
      this.enabled = true;
    }
    
    if($defined(extras) && $defined(extras.settableByURL)) {
      this.settableByURL = extras.settableByURL;
    } else {
      this.settableByURL = true;
    }
  },
  setSavedValue: function(x) {
    if(this.enabled)
      this.value = x;
  }
});

qwebirc.config.RadioOption = new Class({
  Extends: qwebirc.config.Option,
  Element: qwebirc.config.RadioInput,
  initialize: function(optionId, prefix, label, default_, extras, options) {
    this.options = options.map(function(x) {
      if(typeof(x) == "string")
        return [x, x];
      return x;
    });
    this.defaultposition = default_;

    this.parent(optionId, prefix, label, this.options[default_][1], extras);
  },
  setSavedValue: function(x) {
    for(var i=0;i<this.options.length;i++) {
      var y = this.options[i][1];
      if(x == y) {
        this.position = i;
        this.value = x;
        return;
      }
    }
    this.position = this.defaultposition;
    this.value = this.default_;
  }
});

qwebirc.config.TextOption = new Class({
  Extends: qwebirc.config.Option,
  Element: qwebirc.config.TextInput
});

qwebirc.config.CheckOption = new Class({
  Extends: qwebirc.config.Option,
  Element: qwebirc.config.CheckInput
});

qwebirc.config.HueOption = new Class({
  Extends: qwebirc.config.Option,
  Element: qwebirc.config.HueInput
});

qwebirc.ui.Options = new Class({
  initialize: function(ui) {
    if(!$defined(qwebirc.config.DefaultOptions))
      this.__configureDefaults();
    
    this.optionList = qwebirc.config.DefaultOptions.slice();
    this.optionHash = {}
    this.ui = ui;
    
    this._setup();
    this.optionList.forEach(function(x) {
      x.setSavedValue(this._get(x));
      this.optionHash[x.prefix] = x;
      this[x.prefix] = x.value;
    }.bind(this));
  },
  __configureDefaults: function() {
    qwebirc.config.DefaultOptions = qwebirc.config.DEFAULT_OPTIONS.map(function(x) {
      var optionId = x[0];
      var prefix = x[1];
      var label = x[2];
      var default_ = x[3];
      var moreextras = x[4];
      var extras = x[5];
      
      var stype = typeof(default_);
      if(stype == "number") {
        return new qwebirc.config.RadioOption(optionId, prefix, label, default_, moreextras, extra);
      } else {
        var type;
        if(stype == "boolean") {
          type = qwebirc.config.CheckOption;
        } else if(stype == "function") {
          var options = default_();
          type = options.class_;
          default_ = options.default_;
        } else {
          type = qwebirc.config.TextOption;
        }
        return new type(optionId, prefix, label, default_, moreextras);
      }
    });
  },
  setValue: function(option, value) {
    this.optionHash[option.prefix].value = value;
    this[option.prefix] = value;
  },
  getOptionList: function() {
    return this.optionList;
  },
  _get: function(x) {
    return x.default_;
  },
  _setup: function() {
  },
  flush: function() {
  }
});

qwebirc.ui.OptionsPane = new Class({
  Implements: [Events],
  initialize: function(parentElement, optionObject) {
    this.parentElement = parentElement;
    this.optionObject = optionObject;
    
    this.createElements();
  },
  createElements: function() {
    var FE = function(element, parent) {
      var n = new Element(element);
      parent.appendChild(n);
      return n;
    };
    
    var t = FE("table", this.parentElement);
    var tb = FE("tbody", t);
    
    this.boxList = [];
    
    var optList = this.optionObject.getOptionList();
    for(var i=0;i<optList.length;i++) {
      var x = optList[i];
      
      var row = FE("tr", tb);
      var cella = FE("td", row);
      
      x.id = qwebirc.util.generateID();
      var label = new Element("label", {"for": x.id});
      cella.appendChild(label);
      label.set("text", x.label + ":");

      var cellb = FE("td", row);
      this.boxList.push([x, new x.Element(cellb, x, i, this)]);

    }
    
    var r = FE("tr", tb);
    var cella = FE("td", r);
    var cellb = FE("td", r);
    var save = qwebirc.util.createInput("submit", cellb);
    save.value = "Save";
    
    save.addEvent("click", function() {
      this.save();
      this.fireEvent("close");
    }.bind(this));
    
    var cancel = qwebirc.util.createInput("submit", cellb);
    cancel.value = "Cancel";
    cancel.addEvent("click", function() {
      this.cancel();
      this.fireEvent("close");
    }.bind(this));
  },
  save: function() {
    this.boxList.forEach(function(x) {
      var option = x[0];
      var box = x[1];
      this.optionObject.setValue(option, box.get());
    }.bind(this));
    this.boxList.forEach(function(x) {
      x[1].applyChanges();
    }.bind(this));
    this.optionObject.flush();
  },
  cancel: function() {
    this.boxList.forEach(function(x) {
      x[1].cancel();
    }.bind(this));
  }
});

qwebirc.ui.CookieOptions = new Class({
  Extends: qwebirc.ui.Options,
  _setup: function() {
    this.__cookie = new Hash.Cookie("opt1", {duration: 3650, autoSave: false});
  },
  _get: function(x) {
    var v = this.__cookie.get(x.optionId);
    if(!$defined(v))
      return x.default_;
    
    return v;
  },
  flush: function() {
    this.__cookie.erase();
    this._setup();
    
    this.getOptionList().forEach(function(x) {
      this.__cookie.set(x.optionId, x.value);
    }.bind(this));
    this.__cookie.save();
  }
});

qwebirc.ui.SuppliedArgOptions = new Class({
  Extends: qwebirc.ui.CookieOptions,
  initialize: function(ui, arg) {
    var p = {};
    
    if($defined(arg) && arg != "" && arg.length > 2) {
      var checksum = arg.substr(arg.length - 2, 2);
      var decoded = qwebirc.util.b64Decode(arg.substr(0, arg.length - 2));
      
      if(decoded && (new qwebirc.util.crypto.MD5().digest(decoded).slice(0, 2) == checksum))
        p = qwebirc.util.parseURI("?" + decoded);
    }
    
    this.parsedOptions = p;
    this.parent(ui);
  },
  _get: function(x) {
    if(x.settableByURL !== true)
      return this.parent(x);

    var opt = this.parsedOptions[x.optionId];
    if(!$defined(opt))
      return this.parent(x);
      
    return opt;
  },
  serialise: function() {
    var result = [];
    this.getOptionList().forEach(function(x) {
      if(x.settableByURL && x.default_ != x.value)
        result.push(x.optionId + "=" + x.value);
    }.bind(this));
    
    var raw = result.join("&");
    var checksum = new qwebirc.util.crypto.MD5().digest(raw).slice(0, 2);
    return (qwebirc.util.b64Encode(raw)).replaceAll("=", "") + checksum;
  }
});

qwebirc.ui.DefaultOptionsClass = new Class({
  Extends: qwebirc.ui.SuppliedArgOptions
});

qwebirc.ui.AboutPane = new Class({
  Implements: [Events],
  initialize: function(parent) {
    var delayfn = function() { parent.set("html", "<div class=\"loading\">Loading. . .</div>"); };
    var cb = delayfn.delay(500);
    
    var r = qwebirc.ui.RequestTransformHTML({url: qwebirc.global.staticBaseURL + "panes/about.html", update: parent, onSuccess: function() {
      $clear(cb);
      parent.getElement("input[class=close]").addEvent("click", function() {
        this.fireEvent("close");
      }.bind(this));
      parent.getElement("div[class=version]").set("text", "v" + qwebirc.VERSION);
    }.bind(this)});
    r.get();
  }
});

qwebirc.ui.PrivacyPolicyPane = new Class({
  Implements: [Events],
  initialize: function(parent) {
    var delayfn = function() { parent.set("html", "<div class=\"loading\">Loading. . .</div>"); };
    var cb = delayfn.delay(500);
    
    var r = qwebirc.ui.RequestTransformHTML({url: qwebirc.global.staticBaseURL + "panes/privacypolicy.html", update: parent, onSuccess: function() {
      $clear(cb);
      
      parent.getElement("input[class=close]").addEvent("click", function() {
        this.fireEvent("close");
      }.bind(this));
    }.bind(this)});
    r.get();
  }
});

qwebirc.ui.FeedbackPane = new Class({
  Implements: [Events],
  initialize: function(parent) {
    this.textboxVisible = false;
    var delayfn = function() { parent.set("html", "<div class=\"loading\">Loading. . .</div>"); };
    var cb = delayfn.delay(500);
    
    this.addEvent("select", this.onSelect);
    
    var r = qwebirc.ui.RequestTransformHTML({url: qwebirc.global.staticBaseURL + "panes/feedback.html", update: parent, onSuccess: function() {
      $clear(cb);
      parent.getElement("input[class=close]").addEvent("click", function() {
        this.fireEvent("close");
      }.bind(this));
      parent.getElement("input[class=close2]").addEvent("click", function() {
        this.fireEvent("close");
      }.bind(this));
      
      var textbox = parent.getElement("textarea");
      this.textbox = textbox;
      parent.getElement("input[class=submitfeedback]").addEvent("click", function() {
        this.sendFeedback(parent, textbox, textbox.value);
      }.bind(this));
      
      this.textboxVisible = true;
      this.onSelect();
    }.bind(this)});
    r.get();
  },
  onSelect: function() {
    if(this.textboxVisible)
      this.textbox.focus();
  },
  sendFeedback: function(parent, textbox, text) {
    text = text.replace(/^\s*/, "").replace(/\s*$/, "");
    var mainText = parent.getElement("p[class=maintext]");
    
    if(text.length < 25) {
      /* TODO: lie and throw away */
      mainText.set("text", "I don't suppose you could enter a little bit more? Thanks!");
      textbox.focus();
      return;
    }
    
    this.textboxVisible = false;
    var mainBody = parent.getElement("div[class=enterarea]");
    mainBody.setStyle("display", "none");
    
    var messageBody = parent.getElement("div[class=messagearea]");
    var messageText = parent.getElement("p[class=messagetext]");
    var messageClose = parent.getElement("input[class=close2]");
    
    messageText.set("text", "Submitting. . .");
    messageBody.setStyle("display", "");
    
    /* basic checksum to stop really lame kiddies spamming */
    var checksum = 0;
    var esctext = encodeURIComponent(text);
    for(var i=0;i<text.length;i++)
      checksum = ((checksum + 1) % 256) ^ (text.charCodeAt(i) % 256);

    var r = new Request({url: qwebirc.global.dynamicBaseURL + "feedback", onSuccess: function() {
      messageText.set("text", "Submitted successfully, thanks for the feedback!");
      messageClose.setStyle("display", "");
    }, onFailure: function() {
      this.textboxVisible = true;
      messageBody.setStyle("display", "none");
      mainBody.setStyle("display", "");
      mainText.set("text", "Looks like something went wrong submitting :(");
    }.bind(this)}).send("feedback=" + text + "&c=" + checksum);
  }
});

qwebirc.ui.FAQPane = new Class({
  Implements: [Events],
  initialize: function(parent) {
    var delayfn = function() { parent.set("html", "<div class=\"loading\">Loading. . .</div>"); };
    var cb = delayfn.delay(500);
    
    var r = qwebirc.ui.RequestTransformHTML({url: qwebirc.global.staticBaseURL + "panes/faq.html", update: parent, onSuccess: function() {
      $clear(cb);
      parent.getElement("input[class=close]").addEvent("click", function() {
        this.fireEvent("close");
      }.bind(this));
    }.bind(this)});
    r.get();
  }
});

function qwebirc_ui_onbeforeunload(e) { /* IE sucks */
  if(qwebirc.connected) {
    var message = "This action will close all active IRC connections.";
    var e = e || window.event;
    if(e)
      e.returnValue = message;
    return message;
  }
}

qwebirc.ui.Interface = new Class({
  Implements: [Options],
  options: {
    initialNickname: "qwebirc" + Math.ceil(Math.random() * 100000),
    initialChannels: "",
    networkName: "ExampleNetwork",
    networkServices: [],
    loginRegex: null,
    appTitle: "ExampleNetwork Web IRC",
    searchURL: true,
    theme: undefined,
    baseURL: null,
    hue: null,
    saturation: null,
    lightness: null,
    thue: null,
    tsaturation: null,
    tlightness: null,
    uiOptionsArg: null,
    nickValidation: null,
    dynamicBaseURL: "/",
    staticBaseURL: "/"
  },
  initialize: function(element, ui, options) {
    this.setOptions(options);
    
    /* HACK */
    qwebirc.global = {
      dynamicBaseURL: options.dynamicBaseURL,
      staticBaseURL: options.staticBaseURL,
      nicknameValidator: $defined(options.nickValidation) ? new qwebirc.irc.NicknameValidator(options.nickValidation) : new qwebirc.irc.DummyNicknameValidator()
    };

    window.addEvent("domready", function() {
      var callback = function(options) {
        var IRC = new qwebirc.irc.IRCClient(options, ui_);
        IRC.connect();
        window.onbeforeunload = qwebirc_ui_onbeforeunload;
        window.addEvent("unload", function() {
          IRC.quit("Page closed");
        });
      };

      var inick = null;
      var ichans = this.options.initialChannels;
      var autoConnect = false;
      
      if(this.options.searchURL) {
        var args = qwebirc.util.parseURI(String(document.location));
        this.options.hue = this.getHueArg(args, "");
        this.options.saturation = this.getSaturationArg(args, "");
        this.options.lightness = this.getLightnessArg(args, "");

        this.options.thue = this.getHueArg(args, "t");
        this.options.tsaturation = this.getSaturationArg(args, "t");
        this.options.tlightness = this.getLightnessArg(args, "t");
        
        if($defined(args["uio"]))
          this.options.uiOptionsArg = args["uio"];

        var url = args["url"];
        var chans, nick = args["nick"];
        
        if($defined(url)) {
          ichans = this.parseIRCURL(url);
          if($defined(chans) && chans != "")
            canAutoConnect = true;
        } else {
          chans = args["channels"];

          var canAutoConnect = false;
        
          if(chans) {
            var cdata = chans.split(" ");
          
            chans = cdata[0].split(",");
            var chans2 = [];
          
            for(var i=0;i<chans.length;i++) {
              chans2[i] = chans[i];
            
              if(chans[i].charAt(0) != '#')
                chans2[i] = "#" + chans2[i]
            }
            cdata[0] = chans2.join(",");
            ichans = cdata.join(" ");
            canAutoConnect = true;
          }
        }
        
        if($defined(nick))
          inick = this.randSub(nick);
          
        if(args["randomnick"] && args["randomnick"] == 1)
          inick = this.options.initialNickname;
          
        /* we only consider autoconnecting if the nick hasn't been supplied, or it has and it's not "" */
        if(canAutoConnect && (!$defined(inick) || ($defined(inick) && (inick != "")))) {
          var p = args["prompt"];
          var pdefault = false;
          
          if(!$defined(p) || p == "") {
            pdefault = true;
            p = false;
          } else if(p == "0") {
            p = false;
          } else {
            p = true;
          }
          
          /* autoconnect if we have channels and nick but only if prompt != 1 */
          if($defined(inick) && !p) {
            autoConnect = true;
          } else if(!pdefault && !p) { /* OR if prompt=0, but not prompt=(nothing) */
            autoConnect = true;
          }
        }
      }
  
      var ui_ = new ui($(element), new qwebirc.ui.Theme(this.options.theme), this.options);

      var usingAutoNick = !$defined(nick);
      if(usingAutoNick && autoConnect)
        inick = this.options.initialNickname;
      
      var details = ui_.loginBox(callback, inick, ichans, autoConnect, usingAutoNick);
    }.bind(this));
  },
  getHueArg: function(args, t) {
    var hue = args[t + "hue"];
    if(!$defined(hue))
      return null;
    hue = parseInt(hue);
    if(hue > 360 || hue < 0)
      return null;
    return hue;
  },
  getSaturationArg: function(args, t) {
    var saturation = args[t + "saturation"];
    if(!$defined(saturation))
      return null;
    saturation = parseInt(saturation);
    if(saturation > 100 || saturation < -100)
      return null;
    return saturation;
  },
  getLightnessArg: function(args, t) {
    var lightness = args[t + "lightness"];
    if(!$defined(lightness))
      return null;
    lightness = parseInt(lightness);
    if(lightness > 100 || lightness < -100)
      return null;
    return lightness;
  },
  randSub: function(nick) {
    var getDigit = function() { return Math.floor(Math.random() * 10); }
    
    return nick.split("").map(function(v) {
      if(v == ".") {
        return getDigit();
      } else {
        return v;
      }
    }).join("");
    
  },
  parseIRCURL: function(url) {
    if(url.indexOf(":") == 0)
      return;
    var schemeComponents = url.splitMax(":", 2);
    if(schemeComponents[0].toLowerCase() != "irc" && schemeComponents[0].toLowerCase() != "ircs") {
      alert("Bad IRC URL scheme.");
      return;
    }

    if(url.indexOf("/") == 0) {
      /* irc: */
      return;
    }
    
    var pathComponents = url.splitMax("/", 4);
    if(pathComponents.length < 4 || pathComponents[3] == "") {
      /* irc://abc */
      return;
    }
    
    var args, queryArgs;
    if(pathComponents[3].indexOf("?") > -1) {
      queryArgs = qwebirc.util.parseURI(pathComponents[3]);
      args = pathComponents[3].splitMax("?", 2)[0];
    } else {
      args = pathComponents[3];
    }
    var parts = args.split(",");

    var channel = parts[0];
    if(channel.charAt(0) != "#")
      channel = "#" + channel;

    var not_supported = [], needkey = false, key;
    for(var i=1;i<parts.length;i++) {
      var value = parts[i];
      if(value == "needkey") {
        needkey = true;
      } else {
        not_supported.push(value);
      }
    }

    if($defined(queryArgs)) {
      for(var key_ in queryArgs) {
        var value = queryArgs[key_];
        
        if(key_ == "key") {
          key = value;
          needkey = true;
        } else {
          not_supported.push(key_);
        }
      }
    }
    
    if(needkey) {
      if(!$defined(key))
        key = prompt("Please enter the password for channel " + channel + ":");
      if($defined(key))
        channel = channel + " " + key;
    }
    
    if(not_supported.length > 0)
      alert("The following IRC URL components were not accepted: " + not_supported.join(", ") + ".");
    
    return channel;
  }
});

qwebirc.auth.loggedin = function() {
  var user = Cookie.read("user");
  
  return user;
}

qwebirc.auth.enabled = function() {
  return false;
}

qwebirc.auth.quakeNetAuth = function() {
  return false;
}

qwebirc.auth.passAuth = function() {
  return true;
}

qwebirc.auth.bouncerAuth = function() {
  return false;
}

qwebirc.sound.domReady = false;
window.addEvent("domready", function() {
  qwebirc.sound.domReady = true;
});

qwebirc.sound.SoundPlayer = new Class({
  Implements: [Events],
  initialize: function() {
    this.loadingSWF = false;
    this.loadedSWF = false;
  },
  go: function() {
    if(qwebirc.sound.domReady) {
      this.loadSoundManager();
    } else {
      window.addEvent("domready", function() {
        this.loadSoundManager();
      }.bind(this));
    }
  },
  loadSoundManager: function() {
    if(this.loadingSWF)
      return;
    this.loadingSWF = true;
    if(eval("typeof soundManager") != "undefined") {
      this.loadedSWF = true;
      this.fireEvent("ready");
      return;
    }
    
    var debugMode = false;
    qwebirc.util.importJS(qwebirc.global.staticBaseURL + "js/" + (debugMode?"soundmanager2":"soundmanager2-nodebug-jsmin") + ".js", "soundManager", function() {
      soundManager.url = qwebirc.global.staticBaseURL + "sound/";
      
      soundManager.debugMode = debugMode;
      soundManager.useConsole = debugMode;
      soundManager.onload = function() {
        this.loadedSWF = true;
        this.fireEvent("ready");
      }.bind(this);
      soundManager.beginDelayedInit();
    }.bind(this));
  },
  createSound: function(name, src) {
    soundManager.createSound(name, src);
  },
  playSound: function(name) {
    soundManager.play(name);
  },
  beep: function() {
    if(!this.beepLoaded) {
      this.createSound("beep", qwebirc.global.staticBaseURL + "sound/beep3.mp3");
      this.beepLoaded = true;
    }
    this.playSound("beep");
  }
});

qwebirc.ui.QUI = new Class({
  Extends: qwebirc.ui.RootUI,
  initialize: function(parentElement, theme, options) {
    this.parent(parentElement, qwebirc.ui.QUI.Window, "qui", options);
    this.theme = theme;
    this.parentElement = parentElement;
    this.setModifiableStylesheet("qui");
  },
  postInitialize: function() {
    this.qjsui = new qwebirc.ui.QUI.JSUI("qwebirc-qui", this.parentElement);
    this.qjsui.addEvent("reflow", function() {
      var w = this.getActiveWindow();
      if($defined(w))
        w.onResize();
    }.bind(this));
    this.qjsui.top.addClass("outertabbar");
    
    this.qjsui.bottom.addClass("input");
    this.qjsui.right.addClass("nicklist");
    this.qjsui.topic.addClass("topic");
    this.qjsui.middle.addClass("lines");
    
    this.outerTabs = this.qjsui.top;

    this.tabs = new Element("div");
    this.tabs.addClass("tabbar");
    
    this.__createDropdownMenu();
    
    this.outerTabs.appendChild(this.tabs);
    this.origtopic = this.topic = this.qjsui.topic;
    this.origlines = this.lines = this.qjsui.middle;
    this.orignicklist = this.nicklist = this.qjsui.right;
    
    this.input = this.qjsui.bottom;
    this.reflow = this.qjsui.reflow.bind(this.qjsui);
    
    this.tabs.addEvent("mousewheel", function(x) {
      var event = new Event(x);
      
      /* up */
      if(event.wheel > 0) {
        this.nextWindow();
      } else if(event.wheel < 0) {
        /* down */
        this.prevWindow();
      }
      event.stop();
    }.bind(this));
    
    this.createInput();
    this.reflow();
    this.reflow.delay(100); /* Konqueror fix */
    
    /* HACK, in Chrome this should work immediately but doesn't */
    this.__createDropdownHint.delay(100, this);
  },
  __createDropdownMenu: function() {
    var dropdownMenu = new Element("span");
    dropdownMenu.addClass("dropdownmenu");
    
    dropdownMenu.hide = function() {
      dropdownMenu.setStyle("display", "none");
      dropdownMenu.visible = false;
      document.removeEvent("mousedown", hideEvent);
    }.bind(this);
    var hideEvent = function() { dropdownMenu.hide(); };
    
    dropdownMenu.hide();
    this.parentElement.appendChild(dropdownMenu);
    
    this.UICommands.forEach(function(x) {
      var text = x[0];
      var fn = this[x[1] + "Window"].bind(this);
      var e = new Element("a");
      e.addEvent("mousedown", function(e) { new Event(e).stop(); });
      e.addEvent("click", function() {
        dropdownMenu.hide();
        fn();
      });
      e.set("text", text);
      dropdownMenu.appendChild(e);
    }.bind(this));
    
    var dropdown = new Element("div");
    dropdown.addClass("dropdown-tab");
    dropdown.appendChild(new Element("img", {src: qwebirc.global.staticBaseURL + "images/icon.png", title: "menu", alt: "menu"}));
    dropdown.setStyle("opacity", 1);

    var dropdownEffect = new Fx.Tween(dropdown, {duration: "long", property: "opacity", link: "chain"});
    dropdownEffect.start(0.25);
    dropdownEffect.start(1);
    dropdownEffect.start(0.33);
    dropdownEffect.start(1);
    
    this.outerTabs.appendChild(dropdown);
    dropdownMenu.show = function(x) {
      new Event(x).stop();
      this.hideHint();
      
      if(dropdownMenu.visible) {
        dropdownMenu.hide();
        return;
      }
      var top = this.outerTabs.getSize().y;
      
      dropdownMenu.setStyle("left", 0);
      dropdownMenu.setStyle("top", top-1); /* -1 == top border */
      dropdownMenu.setStyle("display", "inline-block");
      dropdownMenu.visible = true;
      
      document.addEvent("mousedown", hideEvent);
    }.bind(this);
    dropdown.addEvent("mousedown", function(e) { new Event(e).stop(); });
    dropdown.addEvent("click", dropdownMenu.show);
  },
  __createDropdownHint: function() {
    var dropdownhint = new Element("div");
    dropdownhint.addClass("dropdownhint");
    dropdownhint.set("text", "Click the icon for the main menu.");
    dropdownhint.setStyle("top", this.outerTabs.getSize().y + 5);

    this.parentElement.appendChild(dropdownhint);
    new Fx.Morph(dropdownhint, {duration: "normal", transition: Fx.Transitions.Sine.easeOut}).start({left: [900, 5]});
    
    var hider = function() {
      new Fx.Morph(dropdownhint, {duration: "long"}).start({left: [5, -900]});
    }.delay(4000, this);
    
    var hider2 = function() {
      if(dropdownhint.hidden)
        return;
      this.parentElement.removeChild(dropdownhint);
      dropdownhint.hidden = 1;
    }.bind(this);
    hider2.delay(4000);
    this.hideHint = hider2;
    
    document.addEvent("mousedown", hider2);
    document.addEvent("keypress", hider2);
  },
  createInput: function() {
    var form = new Element("form");
    this.input.appendChild(form);
    
    form.addClass("input");
    
    var inputbox = new Element("input");
    form.appendChild(inputbox);
    this.inputbox = inputbox;
    this.inputbox.maxLength = 470;

    var sendInput = function() {
      if(inputbox.value == "")
        return;
        
      this.resetTabComplete();
      this.getActiveWindow().historyExec(inputbox.value);
      inputbox.value = "";
    }.bind(this);

    if(!qwebirc.util.deviceHasKeyboard()) {
      inputbox.addClass("mobile-input");
      var inputButton = new Element("input", {type: "button"});
      inputButton.addClass("mobile-button");
      inputButton.addEvent("click", function() {
        sendInput();
        inputbox.focus();
      });
      inputButton.value = ">";
      this.input.appendChild(inputButton);
      var reflowButton = function() {
        var containerSize = this.input.getSize();
        var buttonSize = inputButton.getSize();
        
        var buttonLeft = containerSize.x - buttonSize.x - 5; /* lovely 5 */

        inputButton.setStyle("left", buttonLeft);
        inputbox.setStyle("width", buttonLeft - 5);
        inputButton.setStyle("height", containerSize.y);
      }.bind(this);
      this.qjsui.addEvent("reflow", reflowButton);
    } else {
      inputbox.addClass("keyboard-input");
    }
    
    form.addEvent("submit", function(e) {
      new Event(e).stop();
      sendInput();
    });
    
    inputbox.addEvent("focus", this.resetTabComplete.bind(this));
    inputbox.addEvent("mousedown", this.resetTabComplete.bind(this));
    
    inputbox.addEvent("keydown", function(e) {
      var resultfn;
      var cvalue = inputbox.value;
      
      if(e.key == "up") {
        resultfn = this.commandhistory.upLine;
      } else if(e.key == "down") {
        resultfn = this.commandhistory.downLine;
      } else if(e.key == "tab" && !e.altKey && !e.ctrlKey && !e.shiftKey) {
        new Event(e).stop();
        this.tabComplete(inputbox);
        return;
      } else {
        /* ideally alt and other keys wouldn't break this */
        this.resetTabComplete();
        return;
      }
      
      this.resetTabComplete();
      if((cvalue != "") && (this.lastcvalue != cvalue))
        this.commandhistory.addLine(cvalue, true);
      
      var result = resultfn.bind(this.commandhistory)();
      
      new Event(e).stop();
      if(!result)
        result = "";
      this.lastcvalue = result;
        
      inputbox.value = result;
      qwebirc.util.setAtEnd(inputbox);
    }.bind(this));
  },
  setLines: function(lines) {
    this.lines.parentNode.replaceChild(lines, this.lines);
    this.qjsui.middle = this.lines = lines;
  },
  setChannelItems: function(nicklist, topic) {
    if(!$defined(nicklist)) {
      nicklist = this.orignicklist;
      topic = this.origtopic;
    }
    this.nicklist.parentNode.replaceChild(nicklist, this.nicklist);
    this.qjsui.right = this.nicklist = nicklist;

    this.topic.parentNode.replaceChild(topic, this.topic);
    this.qjsui.topic = this.topic = topic;
  }
});

qwebirc.ui.QUI.JSUI = new Class({
  Implements: [Events],
  initialize: function(class_, parent, sizer) {
    this.parent = parent;
    this.sizer = $defined(sizer)?sizer:parent;
    
    this.class_ = class_;
    this.create();
    
    this.reflowevent = null;
    
    window.addEvent("resize", function() {
      this.reflow(100);
    }.bind(this));
  },
  applyClasses: function(pos, l) {
    l.addClass("dynamicpanel");    
    l.addClass(this.class_);

    if(pos == "middle") {
      l.addClass("leftboundpanel");
    } else if(pos == "top") {
      l.addClass("topboundpanel");
      l.addClass("widepanel");
    } else if(pos == "topic") {
      l.addClass("widepanel");
    } else if(pos == "right") {
      l.addClass("rightboundpanel");
    } else if(pos == "bottom") {
      l.addClass("bottomboundpanel");
      l.addClass("widepanel");
    }
  },
  create: function() {
    var XE = function(pos) {
      var element = new Element("div");
      this.applyClasses(pos, element);
      
      this.parent.appendChild(element);
      return element;
    }.bind(this);
    
    this.top = XE("top");
    this.topic = XE("topic");
    this.middle = XE("middle");
    this.right = XE("right");
    this.bottom = XE("bottom");
  },
  reflow: function(delay) {
    if(!delay)
      delay = 1;
      
    if(this.reflowevent)
      $clear(this.reflowevent);
    this.__reflow();
    this.reflowevent = this.__reflow.delay(delay, this);
  },
  __reflow: function() {
    var bottom = this.bottom;
    var middle = this.middle;
    var right = this.right;
    var topic = this.topic;
    var top = this.top;
    
    var topicsize = topic.getSize();
    var topsize = top.getSize();
    var rightsize = right.getSize();
    var bottomsize = bottom.getSize();
    var docsize = this.sizer.getSize();
    
    var mheight = (docsize.y - topsize.y - bottomsize.y - topicsize.y);
    var mwidth = (docsize.x - rightsize.x);

    topic.setStyle("top", topsize.y);
    
    middle.setStyle("top", (topsize.y + topicsize.y));
    if(mheight > 0) {
      middle.setStyle("height", mheight);
      right.setStyle("height", mheight);
    }
    
    if(mwidth > 0)
      middle.setStyle("width", mwidth);
    right.setStyle("top", (topsize.y + topicsize.y));
    right.setStyle("left", mwidth);
    
    bottom.setStyle("top", (docsize.y - bottomsize.y));
    this.fireEvent("reflow");
  },
  showChannel: function(state, nicklistVisible) {
    var display = "none";
    if(state)
      display = "block";

    this.right.setStyle("display", nicklistVisible ? display : "none");
    this.topic.setStyle("display", display);
  },
  showInput: function(state) {
    this.bottom.isVisible = state;
    this.bottom.setStyle("display", state?"block":"none");
  }
});

qwebirc.ui.QUI.Window = new Class({
  Extends: qwebirc.ui.Window,
  
  initialize: function(parentObject, client, type, name, identifier) {
    this.parent(parentObject, client, type, name, identifier);

    this.tab = new Element("a", {"href": "#"});
    this.tab.addClass("tab");
    this.tab.addEvent("focus", function() { this.blur() }.bind(this.tab));;

    this.spaceNode = document.createTextNode(" ");
    parentObject.tabs.appendChild(this.tab);
    parentObject.tabs.appendChild(this.spaceNode);
    
    this.tab.appendText(name);
    this.tab.addEvent("click", function(e) {
      new Event(e).stop();
      
      if(this.closed)
        return;
        
      parentObject.selectWindow(this);
    }.bind(this));
    
    if(type != qwebirc.ui.WINDOW_STATUS && type != qwebirc.ui.WINDOW_CONNECT) {
      var tabclose = new Element("span");
      tabclose.set("text", "X");
      tabclose.addClass("tabclose");
      var close = function(e) {
        new Event(e).stop();
        
        if(this.closed)
          return;
          
        if(type == qwebirc.ui.WINDOW_CHANNEL)
          this.client.exec("/PART " + name);

        this.close();
        
        //parentObject.inputbox.focus();
      }.bind(this);
      
      tabclose.addEvent("click", close);
      this.tab.addEvent("mouseup", function(e) {
        var button = 1;
        
        if(Browser.Engine.trident)
          button = 4;

        if(e.event.button == button)
          close(e);
      }.bind(this));
      
      this.tab.appendChild(tabclose);
    }

    this.lines = new Element("div");
    this.parentObject.qjsui.applyClasses("middle", this.lines);
    this.lines.addClass("lines");
    if(type != qwebirc.ui.WINDOW_CUSTOM && type != qwebirc.ui.WINDOW_CONNECT)
      this.lines.addClass("ircwindow");
    
    this.lines.addEvent("scroll", function() {
      this.scrolleddown = this.scrolledDown();
      this.scrollpos = this.getScrollParent().getScroll();
    }.bind(this));
    
    if(type == qwebirc.ui.WINDOW_CHANNEL) {
      this.topic = new Element("div");
      this.topic.addClass("topic");
      this.topic.addClass("tab-invisible");
      this.topic.set("html", "&nbsp;");
      this.topic.addEvent("dblclick", this.editTopic.bind(this));
      this.parentObject.qjsui.applyClasses("topic", this.topic);
      
      this.prevNick = null;
      this.nicklist = new Element("div");
      this.nicklist.addClass("nicklist");
      this.nicklist.addClass("tab-invisible");
      this.nicklist.addEvent("click", this.removePrevMenu.bind(this));
      this.parentObject.qjsui.applyClasses("nicklist", this.nicklist);
    }
    
    if(type == qwebirc.ui.WINDOW_CHANNEL)
      this.updateTopic("");

    this.nicksColoured = this.parentObject.uiOptions.NICK_COLOURS;
    this.reflow();    
  },
  rename: function(name) {
    this.tab.replaceChild(document.createTextNode(name), this.tab.firstChild);
  },
  editTopic: function() {
    if(!this.client.nickOnChanHasPrefix(this.client.nickname, this.name, "@")) {
/*      var cmodes = this.client.getChannelModes(channel);
      if(cmodes.indexOf("t")) {*/
        alert("Sorry, you need to be a channel operator to change the topic!");
        return;
      /*}*/
    }
    var newTopic = prompt("Change topic of " + this.name + " to:", this.topic.topicText);
    if(newTopic === null)
      return;

    this.client.exec("/TOPIC " + newTopic);
  },
  reflow: function() {
    this.parentObject.reflow();
  },
  onResize: function() {
    if(this.scrolleddown) {
      if(Browser.Engine.trident) {
        this.scrollToBottom.delay(5, this);
      } else {
        this.scrollToBottom();
      }
    } else if($defined(this.scrollpos)) {
      if(Browser.Engine.trident) {
        this.getScrollParent().scrollTo(this.scrollpos.x, this.scrollpos.y);
      } else {
        this.getScrollParent().scrollTo.delay(5, this, [this.scrollpos.x, this.scrollpos.y]);
      }
    }
  },
  createMenu: function(nick, parent) {
    var e = new Element("div");
    parent.appendChild(e);
    e.addClass("menu");
    
    var nickArray = [nick];
    qwebirc.ui.MENU_ITEMS.forEach(function(x) {
      if(!x.predicate || x.predicate !== true && !x.predicate.apply(this, nickArray))
        return;
      
      var e2 = new Element("a");
      e.appendChild(e2);

      e2.href = "#";
      e2.set("text", "- " + x.text);

      e2.addEvent("focus", function() { this.blur() }.bind(e2));
      e2.addEvent("click", function(ev) { new Event(ev.stop()); this.menuClick(x.fn); }.bind(this));
    }.bind(this));
    return e;
  },
  menuClick: function(fn) {
    /*
    this.prevNick.removeChild(this.prevNick.menu);
    this.prevNick.menu = null;
    */
    fn.bind(this)(this.prevNick.realNick);
    this.removePrevMenu();
  },
  moveMenuClass: function() {
    if(!this.prevNick)
      return;
    if(this.nicklist.firstChild == this.prevNick) {
      this.prevNick.removeClass("selected-middle");
    } else {
      this.prevNick.addClass("selected-middle");
    }
  },
  removePrevMenu: function() {
    if(!this.prevNick)
      return;
      
    this.prevNick.removeClass("selected");
    this.prevNick.removeClass("selected-middle");
    if(this.prevNick.menu)
      this.prevNick.removeChild(this.prevNick.menu);
    this.prevNick = null;
  },
  nickListAdd: function(nick, position) {
    var realNick = this.client.stripPrefix(nick);
    
    var e = new Element("a");
    qwebirc.ui.insertAt(position, this.nicklist, e);
    
    e.href = "#";
    var span = new Element("span");
    if(this.parentObject.uiOptions.NICK_COLOURS) {
      var colour = realNick.toHSBColour(this.client);
      if($defined(colour))
        span.setStyle("color", colour.rgbToHex());
    }
    span.set("text", nick);
    e.appendChild(span);
    
    e.realNick = realNick;
    
    e.addEvent("click", function(x) {
      if(this.prevNick == e) {
        this.removePrevMenu();
        return;
      }
      
      this.removePrevMenu();
      this.prevNick = e;
      e.addClass("selected");
      this.moveMenuClass();
      e.menu = this.createMenu(e.realNick, e);
      new Event(x).stop();
    }.bind(this));
    
    e.addEvent("focus", function() { this.blur() }.bind(e));
    this.moveMenuClass();
    return e;
  },
  nickListRemove: function(nick, stored) {
    this.nicklist.removeChild(stored);
    this.moveMenuClass();
  },
  updateTopic: function(topic) {
    var t = this.topic;
    
    while(t.firstChild)
      t.removeChild(t.firstChild);

    if(topic) {
      t.topicText = topic;
      this.parent(topic, t);
    } else {
      t.topicText = topic;
      var e = new Element("div");
      e.set("text", "(no topic set)");
      e.addClass("emptytopic");
      t.appendChild(e);
    }
    this.reflow();
  },
  select: function() {
    var inputVisible = this.type != qwebirc.ui.WINDOW_CONNECT && this.type != qwebirc.ui.WINDOW_CUSTOM;
    
    this.tab.removeClass("tab-unselected");
    this.tab.addClass("tab-selected");

    this.parentObject.setLines(this.lines);
    this.parentObject.setChannelItems(this.nicklist, this.topic);
    this.parentObject.qjsui.showInput(inputVisible);
    this.parentObject.qjsui.showChannel($defined(this.nicklist), this.parentObject.uiOptions.SHOW_NICKLIST);

    this.reflow();
    
    this.parent();
    
    if(inputVisible)
      this.parentObject.inputbox.focus();

    if(this.type == qwebirc.ui.WINDOW_CHANNEL && this.nicksColoured != this.parentObject.uiOptions.NICK_COLOURS) {
      this.nicksColoured = this.parentObject.uiOptions.NICK_COLOURS;
      
      var nodes = this.nicklist.childNodes;
      if(this.parentObject.uiOptions.NICK_COLOURS) {
        for(var i=0;i<nodes.length;i++) {
          var e = nodes[i], span = e.firstChild;
          var colour = e.realNick.toHSBColour(this.client);
          if($defined(colour))
            span.setStyle("color", colour.rgbToHex());
        };
      } else {
        for(var i=0;i<nodes.length;i++) {
          var span = nodes[i].firstChild;
          span.setStyle("color", null);
        };
      }
    }
  },
  deselect: function() {
    this.parent();
    
    this.tab.removeClass("tab-selected");
    this.tab.addClass("tab-unselected");
  },
  close: function() {
    this.parent();
    
    this.parentObject.tabs.removeChild(this.tab);
    this.parentObject.tabs.removeChild(this.spaceNode);
    this.reflow();
  },
  addLine: function(type, line, colourClass) {
    var e = new Element("div");

    if(colourClass) {
      e.addClass(colourClass);
    } else if(this.lastcolour) {
      e.addClass("linestyle1");
    } else {
      e.addClass("linestyle2");
    }
    this.lastcolour = !this.lastcolour;

    this.parent(type, line, colourClass, e);
  },
  setHilighted: function(state) {
    var laststate = this.hilighted;
    
    this.parent(state);

    if(state == laststate)
      return;
      
    this.tab.removeClass("tab-hilight-activity");
    this.tab.removeClass("tab-hilight-us");
    this.tab.removeClass("tab-hilight-speech");
    
    switch(this.hilighted) {
      case qwebirc.ui.HILIGHT_US:
        this.tab.addClass("tab-hilight-us");
        break;
      case qwebirc.ui.HILIGHT_SPEECH:
        this.tab.addClass("tab-hilight-speech");
        break;
      case qwebirc.ui.HILIGHT_ACTIVITY:
        this.tab.addClass("tab-hilight-activity");
        break;
    }
  }
});

