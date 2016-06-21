import { FhcoffeeFirebase2Page } from './app.po';

describe('fhcoffee-firebase2 App', function() {
  let page: FhcoffeeFirebase2Page;

  beforeEach(() => {
    page = new FhcoffeeFirebase2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
