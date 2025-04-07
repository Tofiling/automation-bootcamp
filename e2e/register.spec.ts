// e2e/register.spec.ts
import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';

test('registro de usuario en Automation Portal', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const timestamp = Date.now();

  await registerPage.goTo();
  await registerPage.fillName('carlos');
  await registerPage.fillLastName('navarro');
  await registerPage.fillEmail(`Carlos${timestamp}@qademy.cl`); // Evita duplicados
  await registerPage.fillPassword('12345678');
  await registerPage.clickRegister();

  await expect(page).toHaveURL(/.*login.*/); // Validación de redirección tras registro
});
