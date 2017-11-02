import { Ngauth0Page } from './app.po';

describe('ngauth0 App', function() {
  let page: Ngauth0Page;

  beforeEach(() => {
    page = new Ngauth0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
