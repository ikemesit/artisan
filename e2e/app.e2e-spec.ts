import { ArtisanPage } from './app.po';

describe('artisan App', () => {
  let page: ArtisanPage;

  beforeEach(() => {
    page = new ArtisanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
