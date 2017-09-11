import { KrimaFrontendPage } from './app.po';

describe('krima-frontend App', () => {
  let page: KrimaFrontendPage;

  beforeEach(() => {
    page = new KrimaFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
