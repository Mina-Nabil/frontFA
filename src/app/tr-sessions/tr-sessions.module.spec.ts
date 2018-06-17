import { TrSessionsModule } from './tr-sessions.module';

describe('TrSessionsModule', () => {
  let trSessionsModule: TrSessionsModule;

  beforeEach(() => {
    trSessionsModule = new TrSessionsModule();
  });

  it('should create an instance', () => {
    expect(trSessionsModule).toBeTruthy();
  });
});
