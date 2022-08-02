describe('radiobutton', () => {
    it('do you like the site form', async () => {
        await browser.url('https://demoqa.com/radio-button');
        await $('label=Yes').click();
        await expect($('.custom-control-label')).toHaveTextContaining('Yes');
        await expect($('p*=You have selected ')).toBeExisting();
        await expect($('.text-success')).toHaveTextContaining('Yes');
        await expect($('#noRadio')).not.toBeClickable();

    });
});