import { By, until } from "selenium-webdriver";
import { Page } from "./Page";

export class NewTopicPage extends Page {
    open () {
        return super.open('/new')
    }

    async enableCam () {
        const cameraButton = await this.driver.wait(until.elementLocated(By.css('.VideoCameraAdd__CameraAddIcon-sc-1enpvqu-0')), 3000)
        await cameraButton.click()       
    }

    async enableMic () {
        const micButton = await this.driver.wait(until.elementLocated(By.css('.AudioButton__Button-sc-1p5yhdj-0')), 3000)
        await micButton.click()
    }

    async startRecording () { 
        const startRecordingButton = await this.driver.wait(until.elementLocated(By.css('.StartRecordingButton__Button-sc-df9g3d-2')), 3000)
        await this.driver.wait(until.elementIsEnabled(startRecordingButton))
        await startRecordingButton.click()
    }

    async stopRecording () {
        const stopRecordingButton = await this.driver.wait(until.elementLocated(By.css('.RecordingPlayPauseStopPanel__FinishRecordingRectangle-sc-3yayvt-0')), 3000)
        await stopRecordingButton.click()
    }

    // Selects "Yes" when asked "Do you want to record your microphone?"
    async affirmRecordYourMicrophone() {
        const yesButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div/div/div/div[2]/button[.="Yes"]')))
        await yesButton.click()
    }
}
