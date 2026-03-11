import data from './aboutme.json' with { type: 'json' };
var name = data.name;
var nick = data.nickname;
var pronounce = data.pronounce;
var intrests = data.intrests;
var about = data.aboutme.replace("${name}", name).replace("${nick}", nick).replace("${pronounce}", pronounce).replace("${intrests}", intrests);
var shrt = data.short.replace("${name}", name).replace("${nick}", nick).replace("${pronounce}", pronounce).replace("${intrests}", intrests);
var image = data.image;
var color = data.color
var web = data.site_name;
var theme_color_meta = document.createElement('meta')
theme_color_meta.httpEquiv = "theme-color";
theme_color_meta.content = color;
var title_meta = document.createElement('meta')
title_meta.httpEquiv = "og:title";
title_meta.content = shrt;
var title_meta_tw = document.createElement('meta')
title_meta_tw.httpEquiv = "twitter:title";
title_meta_tw.content = shrt;
var url_meta = document.createElement('meta')
url_meta.httpEquiv = "og:url";
url_meta.content = "https://starcatcher21.github.io/";
var url_meta_tw = document.createElement('meta')
url_meta_tw.httpEquiv = "twitter:url";
url_meta_tw.content = "https://starcatcher21.github.io/";
var image_meta = document.createElement('meta')
image_meta.httpEquiv = "og:image"; 
image_meta.content = image;
var image_meta_tw = document.createElement('meta')
image_meta_tw.httpEquiv = "twitter:image"; 
image_meta_tw.content = image;
var card_meta_tw = document.createElement('meta')
card_meta_tw.httpEquiv = "twitter:card"; 
card_meta_tw.content = "summary_small_image";
var site_name_meta = document.createElement('meta')
site_name_meta.httpEquiv = "og:site_name";
site_name_meta.content = web;
var img_width_meta = document.createElement('meta')
img_width_meta.httpEquiv = "og:image:width";
img_width_meta.content = "1200";
var img_height_meta = document.createElement('meta')
img_height_meta.httpEquiv = "og:image:height";
img_height_meta.content = "1200";
var type_meta = document.createElement('meta')
type_meta.httpEquiv = "og:type";
type_meta.content = "website";
document.getElementsByTagName('head')[0].appendChild(theme_color_meta)
document.getElementsByTagName('head')[0].appendChild(card_meta_tw)
document.getElementsByTagName('head')[0].appendChild(site_name_meta)
document.getElementsByTagName('head')[0].appendChild(img_width_meta)
document.getElementsByTagName('head')[0].appendChild(img_height_meta)
document.getElementsByTagName('head')[0].appendChild(type_meta)
document.getElementsByTagName('head')[0].appendChild(title_meta)
document.getElementsByTagName('head')[0].appendChild(title_meta_tw)
document.getElementsByTagName('head')[0].appendChild(url_meta)
document.getElementsByTagName('head')[0].appendChild(url_meta_tw)
document.getElementsByTagName('head')[0].appendChild(image_meta)
document.getElementsByTagName('head')[0].appendChild(image_meta_tw)
var div = document.createElement('div')
var a = document.createElement('H1')
a.content = "About Me";
var b = document.createElement('p')
b.content = about
div.appendChild(a)
div.appendChild(b)
document.getElementsByTagName('body')[0].appendChild(div)
