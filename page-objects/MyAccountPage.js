

export class MyAccountPage {
    constructor(page) {
        this.page = page
    }
    visit = async () => {
        this.page.goto('/my-account')
        await this.page.pause()
    }

    
}