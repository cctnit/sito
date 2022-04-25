---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
layout: "galleria"
featured_image: "images/Home.jpg"

# per ogni album che verrà visualizzato nella pagina
# copiare la struttura album: 
# inserire il titolo di ogni album
# l'immagine dell'album
# la parte finale del link all'album su google photo
# una descrizione alternativa dellimmagine

album:
  enable: true
  item:
  - title: " "
    album_img: "/images/logo.jpg"
    alt: " "
    link: "https://photos.app.goo.gl/"
    
---
