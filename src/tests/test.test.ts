import { Builder, WebDriver } from "selenium-webdriver"
import chrome from 'selenium-webdriver/chrome'
import { NewTopicPage } from "../pages/NewTopicPage"

describe('Example Test', () => {
    let driver: WebDriver

    beforeEach(async () => {
        const options = new chrome.Options();
        options.addArguments("use-fake-ui-for-media-stream");
        
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        await driver.manage().window().setRect({ width: 1280, height: 720 })
    })

    afterEach(async () => {
        // await driver.close()
    })

    test('Remember Audio Input', async () => {
        const newTopicPage = new NewTopicPage(driver, 'https://app.usebubbles.com/')

        await newTopicPage.open()
        await newTopicPage.enableCam()
        await newTopicPage.enableMic()
        await newTopicPage.startRecording()
        await newTopicPage.affirmRecordYourMicrophone()
        await newTopicPage.startRecording()
        await driver.sleep(6000)
        await newTopicPage.stopRecording()
        
        expect(1).toBe(1)
    })
})
