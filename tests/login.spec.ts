import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';

import {userData} from '../fixtures/users';

test.describe('Automation Exercise - Teste de Login Simples', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });


test('Realizar login com sucesso usando usuario criado manualmente', async ({ page }) => {
    await loginPage.login(userData.validUser.username, userData.validUser.password);
    await expect(page.locator('a[href="/logout"]')).toBeVisible();
});

});