// e2e/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('login de usuario en Automation Portal', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goTo();
  await loginPage.fillEmail('usuario_existente@qademy.cl'); // cambia por uno válido
  await loginPage.fillPassword('12345678');
  await loginPage.clickLogin();

  await expect(page).toHaveURL(/.*dashboard.*/); // Ajusta si redirige a otro lado
});
