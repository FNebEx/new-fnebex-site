---
layout: post.html
permalink: "/{{ title | slug}}/"
tags: post
date: 2021-01-19
title: I am back
header_img: https://source.unsplash.com/jh2KTqHLMjE
header_link: https://unsplash.com/photos/jh2KTqHLMjE
header_source: Unsplash
header_img_author: Jeremy Thomas

---
Testing out some stuff. Tell me what you think?

So now that the test is done, It feels good to be back. What's good is that I finally figured out how to 1) get 11ty working with Forestry and 2) get the preview command working. With getting this site up and running, I think that I'm finally ready to commit to the stack that is **11ty**, **Netlify**, and **Forestry**.

### 11ty

First off, I want to talk about [11ty](https://www.11ty.dev/ "Eleventy"). At first, I thought 11tty was Jekyll on Node. I guess that's one way to think about, but 11ty feels like so much more. An issue that I had with Jekyll is that I didn't know Ruby. It's a language that I've been interested in learning for so long. And then Node happened.

I really like the package environment of node and really wanted to combine that with Jekyll, but I really really really could not find an efficient way of doing that. After doing some time with Gatsby, I stumbled across 11ty and was instantly hooked. There was a very small learning curve, but seeing as how I knew Jekyll, 11ty felt right at home, mainly because they both use Liquid. What's really cool about 11ty is that is has different templating engines such as Liquid, Nunjucks, Handlbars, and Pug (which I never really got to work, but whatever). Nunjuck and Liquid seems real identical. I'm not sure what the differences are. 

The true selling point for with 11ty was that I could do API requests in the `_data` folder, then have the information exposed throughout the entire site. That was a game changer. Since that, 11ty has been my go to for static site generation. 

### Netlify

I'm not even sure how I came across [Netlify](https://www.netlify.com/ "Netlify"). Probably from a blog post. It's a site meant for static hosting. Before Netlify, the only other place I could think to host a site, especially for testing purposes was Github pages. Github pages worked really well for Jekyll site. I think one of the creators of Github also made Jekyll. The issue came about when I need to host multiple sites, and Github Pages only allows one site per GH account. So that sucked. 

The only other option at the time was to use a hosting service like GoDaddy or Host Gator. But then I'd be paying whatever dollars a month just to test something out. And on top of that, I would have to FTP a site. I was not trying to do that... again.

Looking back at it, I think Netlify came about when I discovered that you can upload a site to a repository, then link a CMS to it. From there, I think I came across Netlify. It was pretty straight forward. It has a lot of services associated with it then I truly appreciate, like Forms, Functions, Identity, etc. It does look like it can get expensive, especially if you cross the free tier and (very generous) feature caps. Like, you have 100 form submissions a month or 100k function calls a month. At least it resets.

### Foresty

I swear, I was on a mission from God to find a CMS that I liked. The very first CMS that I tried was back in like, 2019 or so was CloudCannon. It's labeled as the "CMS for Jekyll", which would have made a lot of sense for me because I was definitely using a ton of Jekyll back then. It didn't really feel right to use. Using it felt like having a code editor In the browser, which was not how I was trying to edit content. I do want to point out that while writing this, I did explore CloudCannon again and it looks like it got a new face lift. It might be worth trying out again. 

The next CMS I tried out was Siteleaf. First off, Siteleaf looked ugly which is the real reason I stopped using it. Also, it has the same issue as CloudCannon, it was a full text editor in the browser, and that was not the way I wanted to edit sites. I'm also a firm believer that the CMS should manage the code. 

Forestry might have been the last CMS I came across at this time. After reading the docs like 4 times, Forestry was exactly what I was looking for in a CMS: a system that managed the content. All I do is add content types, write some stuff in Markdown, it renders that against a template layout, and bam! Website.

### The future

I definitely want to experiment with other things. Right now, I picked up React again. I think that React is a lot more robust than 11ty with what it can do. But with learning react, I want to learn it with it being a part of a SSG. NextJS seems like the SSG I'd use for this. 

For hosting, Vercel really interest me. I tried it in the past and just could not get it to work for the life of me. Heroku seems cool too. I just need to find a plan that works for me. Right now for testing sites and stuff, I use Surge. I wouldn't put a full blown site on it, but for testing purposes, it's alright. Also, TiinyHost seems interesting. It's a hosting platform, but the site is live for like, 7 days. There was user that said in a testimonial that it was great for showing clients changes to a site. That seemed like a good use case. 

Some CMS's that I want to try are TinaCMS, DatoCMS, and NetlifyCMS (even though it looks real ugly 😄).