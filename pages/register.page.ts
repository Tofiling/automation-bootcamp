// pages/register.page.ts
import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('#name');
    this.lastNameInput = page.locator('#lastname');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.registerButton = page.locator('button:has-text("Registrarse")');
  }

  async goTo() {
    await this.page.goto('https://automation-portal-bootcamp.vercel.app/register');
  }

  async fillName(name: string) {
    await this.nameInput.fill(name);
  }

  async fillLastName(lastname: string) {
    await this.lastNameInput.fill(lastname);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickRegister() {
    await this.registerButton.click();
  }
}
