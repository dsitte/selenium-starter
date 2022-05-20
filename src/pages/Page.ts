import { WebDriver } from 'selenium-webdriver'

export class Page {
    driver: WebDriver
    baseUrl: URL

    constructor(driver: WebDriver, baseUrl: string) {
        this.driver = driver
        this.baseUrl = new URL(baseUrl)
    }

    protected open (path: string) {
        const newUrl = new URL(path, this.baseUrl)
        return this.driver.get(newUrl.toString())
    }
}
