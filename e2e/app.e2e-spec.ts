import { QuiendijoPage } from './app.po';

describe('quiendijo App', () => {
  let page: QuiendijoPage;

  beforeEach(() => {
    page = new QuiendijoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
