/*
Christoper Bernhard
University Of Denver
ICT 4510 - Final Project
main script page to run all the scripts when the page loads
*/

'use strict'

import { displayNavHtml, links } from './nav.js'
import { navSlide } from './navSlide.js'

displayNavHtml(links);
navSlide();