#!/usr/bin/env python3
import json
from os import truncate, write
index = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {head}
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>"""
metas = """		        <title>Pony Website</title>
				<meta property="og:type" content="website"/>
				<meta name="theme-color" content={color}/>
				<meta property="og:url" content="https://starcatcher21.github.io/"/>
				<meta property="og:title" content="Website about diffrent form of art"/>
				<meta property="og:description" content={aboutme}/>
				<meta property="og:image" content={image}/>
				<meta property="og:image:width" content="1200"/>
				<meta property="og:image:height" content="1200"/>
				<meta property="og:site_name" content="Starcatcher Website"/>

				<meta property="twitter:card" content="summary_small_image"/>
				<meta property="twitter:url" content="https://starcatcher21.github.io/"/>
				<meta property="twitter:title" content="Website about diffrent form of art"/>
				<meta property="twitter:image" content={image}/>"""
with open("./public/gen.json", 'r') as js:
    data = json.load(js)
data["aboutme"] = data["aboutme"].replace("${name}", data["name"]).replace("${pronounce}", data["pronounce"])
data["short"] = data["short"].replace("${name}", data["name"]).replace("${pronounce}", data["pronounce"])
metas = metas.replace("{color}", '"' + data["color"] + '"').replace("{aboutme}", '"' + data["aboutme"] + '"').replace("{image}", '"' + data["image"] + '"')
index = index.replace("{head}", metas)
with open("./public/index.html", "w") as ind:
    ind.truncate()
    ind.write(index)
