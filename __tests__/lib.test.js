const puppeteer = require("puppeteer")
const { generateResult, validateInput, checkAndGenerate } = require("../js/lib")
//unit test for generateResult()
test("testing generate result function", () => {
    expect(generateResult("1", "this is test")).toBe("User ID: 1 created an article titled this is test")
})
// unit test for validateInput()
test("testing validateInputFunction result function", () => {
    expect(validateInput(1, true, true)).toBeTruthy()
})
//integrattion test for checkAndGenerate function

test("testing checkAndGenerate result function", () => {
    expect(checkAndGenerate("1", "Tittle 1", "fghghfghgfh")).toBe("User ID: 1 created an article titled Tittle 1")
})

// e2e testing for addPost()
// test("checking e2e for addpost", async () => {
//     const browser = await puppeteer.launch({
//         headless: false,
//         slowMo: 80,
//         args: ["--window-size=1920,1080"],
//     });
//     const page = await browser.newPage();
//     await page.goto("http://127.0.0.1:5500/");
//     await page.click('input#userid');
//     await page.type('input#userid', "1");
//     await page.click('input#title');
//     await page.type('input#title', "Article 1");
//     await page.click('textarea#article');
//     await page.type('textarea#article', "Article 1 description");
//     await page.click('#addNewPostBtn');
//     await browser.close();
// }, 20000)