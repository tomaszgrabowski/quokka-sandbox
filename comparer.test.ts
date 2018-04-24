import { compare } from "./comparer";

const a = {
    name: 'Tomek'
}

const b = {
    name: 'Anna'
}


describe('When sort function calls the comparer function', ()=>{
    test('Shuld return 1 when comparing greater value to less', ()=>{
        expect(compare("name")(a,b)).toBe(1);
    });
    
    test('Should return -1 when comparing less value to greater', ()=>{
        expect(compare("name")(b,a)).toBe(-1);
    });

    test('Should return 0 when comparing less value to greater', ()=>{
        expect(compare("name")(a,a)).toBe(0);
    });
    
    test('Should throw error on null sortBy param', ()=>{
        expect(()=>{compare(null)(a,b)}).toThrowError('Sort parameter should not be empty');
    });

    test('Should throw error on mismath sortBy param', ()=>{
        expect(()=>{compare('namex')(a,b)}).toThrowError('Object doesnt contain property "namex"');
    });

    test('Should throw error on empty sortBy param', ()=>{
        expect(()=>{compare()(a,b)}).toThrowError('Sort parameter should not be empty');
    });
    
    test('Should throw error on undefined sortBy param', ()=>{
        expect(()=>{compare(undefined)(a,b)}).toThrowError('Sort parameter should not be empty');
    });
    
    test('Should throw error on empty both compare params', ()=>{
        expect(()=>{compare('name')(null,null)}).toThrowError('Empty compare list');
    });
    
    test('Should throw error on empty second compare param', ()=>{
        expect(()=>{compare('name')(undefined,b)}).toThrowError('Empty compare list');
    });
    
    test('Should throw error on empty first compare param', ()=>{
        expect(()=>{compare('name')(a,undefined)}).toThrowError('Empty compare list');
    });
});

