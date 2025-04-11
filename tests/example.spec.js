// @ts-check
import { test, expect } from '@playwright/test';

const count = 20

test.setTimeout(305000)

for (let i = 0; i < count; i++) {
  test(`get started link ${i}`, async ({ page }) => {
    await page.goto('https://www.e.leclerc/fp/pokemon-coffret-super-premium-collection-0196214106079?3448330&cref=om_aff_awin_Ban_8463_2020-12-08-op-remise-30-awin_836951_128313&sv1=affiliate&sv_campaign_id=836951&awc=15135_1744195489_ce2d24caaf9592982cbb727d67552f22&utm_source=Awin&utm_medium=Communities+%26+UGC&utm_campaign=836951');
    // await page.goto('https://www.e.leclerc/fp/pokemon-coffret-ex-mars-0196214106598');

    // Click the get started link.
    // await page.getByRole('button', { name: 'Tout accepter' }).click();
    // await page.getByRole('button', { name: 'Ajouter au panier' }).click();
    await page.locator('[id="didomi-notice-agree-button"]').click();

    // Expects page to have a heading with the name of Installation.
    // await expect(page.getByRole('link', { name: 'Finaliser ma commande' })).toBeVisible();

    await page.waitForTimeout(300000);

    await expect(page.locator('[id="add-to-cart-btn"]')).toHaveAttribute("class", "cPOeR btn-primary");
  });
}
