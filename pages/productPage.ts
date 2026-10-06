import {Page, Locator} from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly firstProductAddToCartButton: Locator;
    readonly viewCartModalLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstProductAddToCartButton = page.locator('[data-product-id="1"]').first();
        this.viewCartModalLink = page.locator('u', { hasText: 'View Cart'});
    }

    async goto() {
        await this.page.goto('https://automationexercise.com');
    }

    async addfirstProductAddToCart(){
        await this.firstProductAddToCartButton.click();
        await this.viewCartModalLink.click();
    }

}