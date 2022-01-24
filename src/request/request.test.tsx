import { getNeoWsFeed } from './nasa'

describe('Check API helpers (request)', () => {
  test('The getNeoWsFeed API function must return the proper data ', (done: any) => {
    getNeoWsFeed().then(data => {
      expect(data.element_count > 0).toBeTruthy();
      
      done();
    });
  });
});