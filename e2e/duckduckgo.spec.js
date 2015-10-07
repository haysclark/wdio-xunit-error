// example from WebdriverIO site
describe('duckduckgo spec', function() {
    it('test duckduckgo', function(done) {
        browser
            .url('https://duckduckgo.com/')
            .setValue('#search_form_input_homepage', 'WebdriverIO')
            .click('#search_button_homepage')
            .getTitle().then(function(title) {
                console.log('Title is: ' + title);
                // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
            })
            .end(done);
    });
});
