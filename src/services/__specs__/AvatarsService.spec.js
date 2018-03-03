import AvatarsService from '../AvatarsService';

describe('getAll method', () => {
  test('should return list of all avatars', () => {
    expect(AvatarsService.getAll()).toBeInstanceOf(Array);
  });
});

describe('getRandom method', () => {
  test('should return single random avatar', () => {
    expect(typeof AvatarsService.getRandom()).toEqual('string');
  });
});
