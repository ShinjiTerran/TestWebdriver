describe('Textbox', () => {
    //it('should login with valid credentials', async () => {
    // await browser.url(`https://the-internet.herokuapp.com/login`);

    // await $('#username').setValue('tomsmith');
    // await $('#password').setValue('SuperSecretPassword!');
    // await $('button[type="submit"]').click();

    // await expect($('#flash')).toBeExisting();
    // await expect($('#flash')).toHaveTextContaining(
    //     'You logged into a secure area!');
    // });
    it('email field is present', async () => {
        await browser.url('https://demoqa.com/text-box');
        await $('#userEmail').setValue('email@email.com');
        await $('#userName').setValue('Alex');
        await $('#currentAddress').setValue('Test town, test street, 25');
        await $('#permanentAddress').setValue('perma town, perma street, 41');
        await $('#submit').click();
        await expect($('#name')).toHaveTextContaining('Alex');
        await expect($('#email')).toHaveTextContaining('email@email.com');
        await expect($('p#currentAddress')).toHaveTextContaining('Test town, test street, 25');
        await expect($('p#permanentAddress')).toHaveTextContaining('perma town, perma street, 41');


    });
});

