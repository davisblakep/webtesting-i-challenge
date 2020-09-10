const enhancer = require('./enhancer.js');
// test away!

describe('item enhancement tests', () => {
  it('repairs', () => {
    expect(
      enhancer.repair({
        name: 'Sword',
        durability: 28,
        enhancement: 0,
      })
    ).toEqual({
      name: 'Sword',
      durability: 100,
      enhancement: 0,
    });
    // Repair at durabilty 100 doesn't increase
    expect(
      enhancer.repair({
        name: 'Brace',
        durability: 100,
        enhancement: 0,
      })
    ).toEqual({
      name: 'Brace',
      durability: 100,
      enhancement: 0,
    });
  });

  it('successfully enhances', () => {
    expect(
      enhancer.success({
        name: 'Shield',
        durability: 28,
        enhancement: 19,
      })
    ).toEqual({
      name: 'Shield',
      durability: 28,
      enhancement: 20,
    });
    expect(
      enhancer.success({
        name: 'Pick',
        durability: 0,
        enhancement: 0,
      })
    ).toEqual({
      name: 'Pick',
      durability: 0,
      enhancement: 1,
    });
    expect(
      enhancer.success({
        name: 'Mace',
        durability: 100,
        enhancement: 10,
      })
    ).toEqual({
      name: 'Mace',
      durability: 100,
      enhancement: 11,
    });
    // Success at enhancement 20 does not add 1
    expect(
      enhancer.success({
        name: 'Knife',
        durability: 28,
        enhancement: 20,
      })
    ).toEqual({
      name: 'Knife',
      durability: 28,
      enhancement: 20,
    });
  });

  it('fails to enhance', () => {
    expect(
      enhancer.fail({
        name: 'Helmet',
        durability: 28,
        enhancement: 19,
      })
    ).toEqual({
      name: 'Helmet',
      durability: 18,
      enhancement: 18,
    });
    expect(
      enhancer.fail({
        name: 'Shovel',
        durability: 2,
        enhancement: 19,
      })
    ).toEqual({
      name: 'Shovel',
      durability: 0,
      enhancement: 18,
    });
    expect(
      enhancer.fail({
        name: 'Javelin',
        durability: 56,
        enhancement: 12,
      })
    ).toEqual({
      name: 'Javelin',
      durability: 51,
      enhancement: 12,
    });
  });
});
