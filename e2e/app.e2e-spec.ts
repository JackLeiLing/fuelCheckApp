import { FuelCheckAppPage } from './app.po';

describe('fuel-check-app App', function() {
  let page: FuelCheckAppPage;

  beforeEach(() => {
    page = new FuelCheckAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
