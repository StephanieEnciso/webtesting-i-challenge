const enhancer = require('./enhancer.js');

test('Is it working', () => {
    expect(6).not.toBe(9);
})

let item = { name: 'Stephanie', enhancement: 10, durability: 39 };

describe('item', () => {
    it('repairs item', () => {
        const repairedItem = { name: 'Stephanie', enhancement: 10, durability: 100 };
        expect(enhancer.repair(item)).toEqual(repairedItem)
    })

    it('enhancement success', () => {
        const enhancedItem = { name: 'Stephanie', enhancement: 11, durability: 100 };
        expect(enhancer.success(item)).toEqual(enhancedItem)
    })

    it('enhancement fails with enhancement less than 15', () => {
        const failedItem1 = { name: 'Stephanie', enhancement: 11, durability: 100 };
        const actualFI1 = { name: 'Stephanie', enhancement: 11, durability: 95 };
        expect(enhancer.fail(failedItem1)).toEqual(actualFI1);
    })

    it('enhancement fails with enhancement more than or equl to 15', () => {
        const failedItem2 = { name: 'Stephanie', enhancement: 16, durability: 100 };
        const actualFI2 = { name: 'Stephanie', enhancement: 16, durability: 90 };
        expect(enhancer.fail(failedItem2)).toEqual(actualFI2);
    })

    it('enhancement fails with enhancement more than 16', () => {
        const failedItem3 = { name: 'Stephanie', enhancement: 18, durability: 100 };
        const actualFI3 = { name: 'Stephanie', enhancement: 17, durability: 90 };
        expect(enhancer.fail(failedItem3)).toEqual(actualFI3);
    })
})