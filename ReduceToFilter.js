/*
Prepare one function:
- myFilter(array, predicateFunction)

that would return the same result as would array.filter(predicateFunction).
In myFilter it is forbidden to use the built-in .filter function. The required functionality must be implemented using the built-in .reduce function.
 */


function myFilter( array, predicate ) {
    const filterReducer = ( acc, num ) => {
        if ( predicate( num ))  {
            acc.push( num );
        }
        return acc;
    }
    return array.reduce( filterReducer, []) ;
}

function isEven( number ) {
    return number % 2 === 0 ? number : null;
}

var numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log( myFilter( numberArray ,isEven ) );
