#!/usr/bin/env node
'use strict';

const puppeteer = require('puppeteer');
const chalk = require('chalk');

const crawl = async function(startUrl) {
    const browser = await puppeteer.launch({headless: true});

    const page = await browser.newPage();

    await page.goto(startUrl);

    const images2 = await page.$eval('img', img => img.href); //Array.from(await page.$$("img"));
    // const images = Array.from(await page.$$("img"));
    console.log(images2);


    if (images2.length > 0) {
        console.log(chalk.green("Found %d images"),images2.length);
        for (const image of images2) {
            // console.log(await image.attribute('href'));
        }
    }
    else {
        console.log(chalk.red("No images found"));

    }

    browser.close();


};

crawl("http://www.pru.co.uk");