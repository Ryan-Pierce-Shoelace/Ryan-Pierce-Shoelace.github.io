---
title: "Claw Game"
description: "Fishing in space"
date: 2025-12-09
main_image: "/assets/images/games/claw-game/main.webp"
game_page_url: "https://shoelace.itch.io/factual-front"
status: "Released"
gallery_images:
  - "/assets/images/games/claw-game/1.webp"
  - "/assets/images/games/claw-game/2.webp"
  - "/assets/images/games/claw-game/3.webp"
---

Created on a whim over a weekend. I set out a goal to actually release something functional in 2025, and both projects we spent the year working on ended up taking far more time than we had anticipated. I* still really support those projects as they are much more feature rich and interesting, but it was really bothering me that we had released nothing since The List over a year ago.

Claw game was a concept that was originally based on the idea of a fishing style game using a claw machine.  This was quickly abandoned when I realized that there would not be a lot of variety in collectibles (also my art looked terrible).I quickly pivoted to a space theme so movement could be added. Other ideas for the theme were deep sea submarine, or perhaps some sort of weird semi mythical themed claw machine that was deeper and deeper. But the space theme was the easiest art wise so I selected it.

The core gameplay goals were to be like a fishing game to some extent with catching things and upgrading the player's power level to allow better catches. I have always been a big fan of games that have the sort of skill progression where you struggle to harvest low level materials and slowly increase until those materials are trivial. Further I like the idea of having some higher level resources visible early on to tease the player. This exists in the project as a single giant collectible that starts just out of reach and requires a bit of grinding to unlock a large enough reach to get it. I wanted to lean much more into that aspect of things but by the time I had all the collectibles, the weekend was over and I did not have any more time to work on this project.

This project helped me learn a lot about putting together a project and the power of standard workflows and tooling. We spent some time this year organizing how we would do things: standard patterns, making a reusable utilities library, pulling in useful extension methods ect... Having the ability to know exactly what to do to get the bones of the project working was incredible. Input and Audio were the two most noticeable boons in this project. Having a clear and clean way to set up our input, and know that once it is done that way it will work was great. Being able to quickly and easily play sounds with easy volume controls, cross-fades for music all with a safe pattern that prevented a lot of garbage and cleaned itself up safely meant i could experiment a lot more with audio even when time was running short. In this project I also used an Event bus pattern that I have been testing in another project, it made the UI binding very easy and got me out of several problems that I tend to run into when trying to make things reactive.Some other patterns we began to standardize also really help with the prototyping. The shop upgrades for example are implemented in such a way that they are very easy to add. A simple struct can be created with the data needed and so long as the variable used hooks up to the player controler the rest is free, with the UI for the store, level tracking costs, all being derived from that data at runtime. 


*This game and post were developed almost entirely by Xuul, so the perspective and opinions are my own. While i think goes without saying, this project would have been impossible without Ryan's support and his work on the tooling, frameworks and patterns used in the project.


## About the Game

You are a space with a little ship and a big magnetic crane. You haul asteroids to the scrapyard to earn credits to upgrade your ship. Launch your claw farther out with upgrades to get bigger and better things. And make sure when you jettison that cargo to the scrapyard you don't miss, becasue you only get one shot.

## Key Features

-  Collect different types of scrap
- Purchase upgrades from the shop
- Launch cargo like a rocket at the scrap yard to sell it.

## Future concepts

The goal was to make a game that was a feature complete slice and this was accomplished. The problem is that the game itself is pretty stale, only four types of collectibles exist and their patterns are fairly simple. Were I ever to commit more time to this projects here are a few concepts I had written up but was not able to implement

- Complex catches. Collectibles that require other things or ways to get them that are creative. A few ideas drafted are: 
  - Magnetic collectibles that need to be clamped to drag back another item. So you need to catch a "lodestone" to pull the iron ore in.
  - Space fauna. Eggs and nests could be part of their harvesting
  - An asteroid filed that must be navigated carefully as bumping the sides dumps your cargo.
  - Breaking big rocks or item to release fast moving objects of high value giving you one shot to catch them before they are too far away.
  - Overall more rare and cool looking things. Then collections UI tab could be added with little silhouettes or placeholders to lean into that completion mindset. A bit like the collections tabs in Stardew Valley
- Expanded map.
  - Right now the area is a small square. I would like to add a few different background based biomes that could be explored with the right upgrades like nebulae, moons, asteroids, ect..
- Gravity and Collision
  - I really wanted to have the objects have a slight orbit around themselves or other objects and have them able to collide and break apart. Sadly it was determined this would cause the scope to increase and was dropped early on.
  - This would include the player making it a lot harder to catch things and allowing for fancy movement like slingshot orbits or perhaps spins
- Story
  - I like games with stories. Even if just a loose framing device, to guide players a bit and get them started. I think a framing device about paying off a loan or needing a certain amount of money would give a nice long term goal to give a reason to progress. Some fun ideas I had for this in the drafts was to have a few places you could shop and scrap with some diffrences on price and what they sell/ accept. Then populate them with 1-2 characters who give little quests. The characters could be a bit like Nurse Joy where they are all different people but look and act exactly the same. This way not a lot of work would need to go into visuals and concepts but some fun dialouge and ideas could be sprinkled in.
  - To add to the story concept this could also guide the player to other mechanics and give a bit more reason to explore areas if the map was expanded. Seeing a new shop in the distance or figuring out what is best sold to a newly discovered scrapyard would be another pull forward to keep upgrading.