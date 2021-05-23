# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter) \
   1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.\
No, the "message" feature would likely incorporate many different components and involve interaction on the application level between two users. Thus, unit testing would not be not be used for this.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters\
   Yes, the "max message length" would just be an individual component that limits the user. Thus, it could be tested on a given input and check if the return value or behavior matches what is expected.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?\
   If we run puppeteer tests with the field "headless" set to true, I expect that the test would be run in the background, without bringing up the browser UI. The test would still be the same, but the Chromium browser UI will not actually be draw or displayed.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?\
   beforeAll(async () => {\
    await page.goto('http://127.0.0.1:5500');\
    await page.waitForTimeout(500);\
    await page.click('header img');\
    await page.waitForTimeout(500);\
  });
