import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';
import { userData } from '../fixtures/users';

test.describe('Exercício de Automação - fluxo E2E', () => {

    test('Devera fazer Login, adicionar o item 1 no carrinho e iniciar checkout', async ({page}) => {
        // 1 - Instanciando as classes das paginas que vou utilizar
        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);

        // 2 - Realizando a autenticação (login)
        await loginPage.goto();
        await loginPage.login(userData.validUser.username, userData.validUser.password);

        // 3 - Selecionando o produto para o carrinho
        await productPage.goto();
        await productPage.addfirstProductAddToCart();
        
        // 4 - Verificando carrinho e indo para o checkout
        await cartPage.goto();
        await expect(cartPage.productDescription).toBeVisible();

        await cartPage.proceedToCheckout();

        // 5 - Validação final verificando que fui para a proxima tela
        // Utiliza a (/.../) para abrir e fechar expressões
        // Utiliza a barra invertida antes da barra (\/) para dizer ao código  que a '/' não fecha o código e sim faz parte dele.
        // O ($) no final garante que a URL termina exatamente com `checkout`
        await expect(page).toHaveURL(/\/checkout$/);
    });
});