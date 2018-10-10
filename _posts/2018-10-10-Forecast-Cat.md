---
published: true
layout: post
title: Forecast Cat
date: '2018-10-9 14:59:09 -0700'
categories:
  - my_works
---


A little app that provide basic forecast info based on addresses.

:cat: [live on Azure](http://13.66.192.54:8003/fc_cat/)


![forecast_cat.PNG]({{site.baseurl}}/assets/img/forecast_cat.PNG){:width="50%"}


## how it works:
- Browser <-> Google places autocomplete API
- Browser <-> server <-> OpenWeatherMap API

## Technologies:
- APIs:
  - Google places autocomplete
  - OpenWeatherMap
- back-end: Python/Django
- front-end: bootstrap 4
- Hosting:
  - Azure
  - Gunicorn
  - Nginx

### caching: 
- Server application sends queries to OpenWeatherMap API and caches the results based on Zip codes (lifespan: 30 minutes for each zip code).
