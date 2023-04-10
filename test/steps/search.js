const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

//launch url
const url = 'https://www.google.es'

Given('a user has navigated to google', async function () {
   await page.goto(url)
   await page.getByRole('button', { name: 'Accept all' }).click()
})

When('the user search for {string}', async function (string) {
   await page.getByRole('combobox', { name: 'Search' }).fill(string)
   await page.keyboard.press('Enter');
})

Then('the number of results is {string} {int}', async function (comparison, value) {
   const text = await page.locator("#result-stats").innerText()
   const results = text.match(/ [\d|\.|\,]+ /)[0].replace(/\.|\,/g, "")
   switch (comparison) {
    case "greater than":
        expect(parseInt(results)).toBeGreaterThan(value)
        break;
    case "less than":
        expect(parseInt(results)).toBeLessThan(value)
        break;
    default:
        break;
   }
})