import { classNames } from './classNames';

describe('classNames', () => {
    test('with one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with add class', () => {
        const expectation = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expectation,
        );
    });

    test('with mods', () => {
        const expectation = 'someClass class1 class2 hovered scrollable';
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expectation);
    });

    test('without scrolling', () => {
        const expectation = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { scrollable: undefined, hovered: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expectation);
    });
});
