const mdLinks = require('../src/md-links.js');

describe('mdLinks', ()=>{
  it('is an object', ()=>{
    expect(typeof mdLinks).toBe('object');
  });
});

describe('existPath', ()=>{
  it('is a function', ()=>{  
    expect(typeof mdLinks.existPath).toBe('function');
  });
});

describe('findMd', ()=>{
  it('is a function', ()=>{  
    expect(typeof mdLinks.findMd).toBe('function');
  });
});

describe('readMd', ()=>{
  it('is a function', ()=>{  
    expect(typeof mdLinks.readMd).toBe('function');
  });
});

describe('readMd', ()=>{
  it('should read a file', ()=>{
    expect(mdLinks.readMd('./README.md')).toBe(true);
  });
});


describe('findLinks', ()=>{
  it('is a function', ()=>{  
    expect(typeof mdLinks.findLinks).toBe('function');
  });
});

 