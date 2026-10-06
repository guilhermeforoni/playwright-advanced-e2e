import {Page, Locator} from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly productDescription: Locator;
    readonly productProceedToCheckoutButton: Locator;

    constructor(page: Page){
        this.page = page;

        this.productDescription = page.locator('td.cart_description h4', {hasText: 'Blue Top'});

        this.productProceedToCheckoutButton = page.locator('.btn.check_out')
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/view_cart');
    }
    async proceedToCheckout(){
        await this.productProceedToCheckoutButton.click();
    }

}