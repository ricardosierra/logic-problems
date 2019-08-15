import Miojo from './Miojo';

test('test Miojo', () => {

    var makeMiojinho = new Miojo();

    makeMiojinho.timeToCookMiojo = 3;
    makeMiojinho.timeAmpulhetaA = 7;
    makeMiojinho.timeAmpulhetaB = 5;

    expect(makeMiojinho.returnTotalTime()).toBe(10);
});