PhET's Assertion Library

To import this library using requirejs:
var assert = require( '<assert>' )( 'flagName' );

Sample usage:
assert && assert( 2+2==4, "Math is working properly" );
assert && assert( function(){return 2+2==4}, "Math is working properly" );
