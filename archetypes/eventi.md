---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
# ricordarsi di inserire la featured_image (di solito jpg 1500 x)
# sia sotto l'articolo che in assets\images
featured_image: ""
summary: ""
tags: ["eventi"]

# <div class="h-event">
# <h1 class="p-name">Microformats Meetup</h1>
# <p>From 
# <time class="dt-start" datetime="2013-06-30 12:00">30<sup>th</sup> June 2013, 12:00</time>
# to <time class="dt-end" datetime="2013-06-30 18:00">18:00</time>
# at <span class="p-location">Some bar in SF</span></p>
# <p class="p-summary">Get together and discuss all things microformats-related.</p>
# <p class="h-geo">
#  <span class="p-latitude">27.116667</span>,
#  <span class="p-longitude">109.366667</span>
# </p>
# </div>

# evento 
# data_evento in formato yyyy-mm-dd
# id è uguale a titolo

evento:
  enable: true
  data_evento: {{ now.Format "2006-01-02" }}
  id: "{{ replace .Name "-" "-" | title | lower }}"
  p_name: "{{ replace .Name "-" " " | title }}"
  dt_start: ""
  dt_end: ""
  p_location: ""
  p_summary: ""
  p_latitude: ""
  p_longitude: ""
  
---