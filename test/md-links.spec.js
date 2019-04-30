const mdLinks = require('../src/md-links.js');


describe('mdLinks', () => {
    it('is an object', () => {
        expect(typeof mdLinks).toBe('object');
    });
});

describe('fieldFill', () => {
    it('is a function', () => {
        expect(typeof mdLinks.fieldFill).toBe('function');
    });
});

describe('isApath', () => {
    it('is a function', () => {
        expect(typeof mdLinks.isApath).toBe('function');
    });
});

describe('dirPath', () => {
    it('should be true', () => {
        expect(mdLinks.dirPath('/Users/sandracuevas/Documents/Laboratoria/GDL002-md-links')).toBe(true);
    });
});


describe('mdFile', () => {
    it('is a function', () => {
        expect(typeof mdLinks.mdFile).toBe('function');
    });
});