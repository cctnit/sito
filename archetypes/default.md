---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
summary: ""
tags: ["comunicazioni"]
url: "/{{ replace .Name "-" "-" | title | lower }}/"
---
