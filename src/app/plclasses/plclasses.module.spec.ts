import { PLClassesModule } from './plclasses.module';

describe('PLClassesModule', () => {
  let pLClassesModule: PLClassesModule;

  beforeEach(() => {
    pLClassesModule = new PLClassesModule();
  });

  it('should create an instance', () => {
    expect(pLClassesModule).toBeTruthy();
  });
});
