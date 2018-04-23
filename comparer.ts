export function compare(propName: string) {
    if (!propName) {
        throw 'Sort parameter should not be empty';
    }
    return function (a, b) {
        if(!a||!b){
            throw 'Empty compare list';
        }
        if (typeof (a[propName] || b[propName]) === 'undefined') {
            throw `Object doesnt contain property "${propName}"`;
        }

        if (a[propName] > b[propName]) {
            return 1;
        }
        if (a[propName] < b[propName]) {
            return -1;
        }
        return 0;
    }
}

let a= {
    name: "tomek",
    type:{
        id:1
    }
}

let b= {
    name: "anna",
    type:{
        id:2
    }
}


