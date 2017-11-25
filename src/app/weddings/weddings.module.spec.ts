import { WeddingsModule } from './weddings.module';

describe('WeddingsModule', () => {
  let weddingsModule: WeddingsModule;

  beforeEach(() => {
    weddingsModule = new WeddingsModule();
  });

  it('should create an instance', () => {
    expect(weddingsModule).toBeTruthy();
  });
});
