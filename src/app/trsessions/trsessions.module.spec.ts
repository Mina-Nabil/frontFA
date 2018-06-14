import { TrsessionsModule } from './trsessions.module';

describe('TrsessionsModule', () => {
  let trsessionsModule: TrsessionsModule;

  beforeEach(() => {
    trsessionsModule = new TrsessionsModule();
  });

  it('should create an instance', () => {
    expect(trsessionsModule).toBeTruthy();
  });
});
