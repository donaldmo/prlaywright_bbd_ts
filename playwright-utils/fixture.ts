import { Before, After} from '@cucumber/cucumber';
import { BrowserManager } from './browserManager';
import { ENV } from '../config/env';

Before(async function () {
    const page = await BrowserManager.getPage(ENV.browser);
    this.page = page;   
});

After(async function (screnario) {
    if (screnario.result?.status === 'FAILED') {
        await this.page.screenshot({ path: `./reports/${screnario.pickle.name}.png` });
    }
    await this.page.close();
});