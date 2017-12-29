/*
Prepare one function:
- myMap(array, mappingFunction)

that would return the same result as array.map(mappingFunction).
In myMap it is forbidden to use the built-in .map function. The required functionality must be implemented using the built-in .reduce function.
 */

function myMap( array, mappingFunction ) {
    const mapReducer = ( acc, num ) => {
        acc.push( mappingFunction( num ) );
        return acc;
    };

    return array.reduce( mapReducer, [] ) ;
}

function evenToString( number ) {
    return number % 2 === 0 ? 'true' : 'false';
}

var numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log( myMap( numberArray , evenToString ) );
