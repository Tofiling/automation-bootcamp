// e2e/register-login.spec.ts
import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';
import { LoginPage } from '../pages/login.page';

test('flujo completo: registro y login', async ({ page }) => {
  const timestamp = Date.now();
  const email = `carlos${timestamp}@qademy.cl`;
  const password = '12345678';

  const registerPage = new RegisterPage(page);
  await registerPage.goTo();
  await registerPage.fillName('carlos');
  await registerPage.fillLastName('QA');
  await registerPage.fillEmail(email);
  await registerPage.fillPassword(password);
  await registerPage.clickRegister();

  await expect(page).toHaveURL(/.*login.*/);

  const loginPage = new LoginPage(page);
  await loginPage.fillEmail(email);
  await loginPage.fillPassword(password);
  await loginPage.clickLogin();

  await expect(page).toHaveURL(/.*dashboard.*/);
});
