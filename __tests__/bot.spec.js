/* eslint no-undef: "off"*/

import Bot from '../src/bot';

let jBot = null;

describe('Bot class', () => {
    beforeAll(() => {
        jBot = new Bot('jBot');
    });
    it('should have a saySomething method', () => {
        expect(jBot.saySomething).toBeDefined();
    });
});
