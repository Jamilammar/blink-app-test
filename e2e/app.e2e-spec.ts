import { BlinkAppTestPage } from './app.po';

describe('blink-app-test App', () => {
  let page: BlinkAppTestPage;

  beforeEach(() => {
    page = new BlinkAppTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
