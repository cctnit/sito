---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
omit_header_text: true
summary: ""
tags: ["comunicazioni"]
url: "/{{ replace .Name "-" "-" | title | lower }}/"
# ricordarsi di inserire la featured_image (di solito jpg 1500 x)
# sia sotto l'articolo che in assets\images
featured_image: ""
---
