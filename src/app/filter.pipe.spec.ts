import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();  // instantiate the Pipe
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the full array if no search text is provided', () => {
    const heroes = [{ name: 'Batman' }, { name: 'Superman' }, { name: 'Ironman' }];
    expect(pipe.transform(heroes)).toEqual(heroes);
  });

  it('should filter correctly by search text', () => {
    const heroes = [
      { name: 'Batman' },
      { name: 'Superman' },
      { name: 'Ironman' }
    ];
    expect(pipe.transform(heroes, 'bat')).toEqual([{ name: 'Batman' }]);
    expect(pipe.transform(heroes, 'man')).toEqual([{ name: 'Superman' }, { name: 'Ironman' }]);
  });

  it('should return an empty array if no names match the search text', () => {
    const heroes = [
      { name: 'Batman' },
      { name: 'Superman' },
      { name: 'Ironman' }
    ];
    expect(pipe.transform(heroes, 'Spider')).toEqual([]);
  });

  it('should be case insensitive', () => {
    const heroes = [
      { name: 'Batman' },
      { name: 'Superman' },
      { name: 'Ironman' }
    ];
    expect(pipe.transform(heroes, 'BATMAN')).toEqual([{ name: 'Batman' }]);
    expect(pipe.transform(heroes, 'superman')).toEqual([{ name: 'Superman' }]);
  });
});
