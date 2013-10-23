PhET's Assertion Library

To import this library using requirejs:
var assert = require( '<assert>' )( 'flagName' );

Sample usage:
`assert && assert( 2+2==4, "Math is working properly" );
assert && assert( function(){return 2+2==4}, "Math is working properly" );`

Third Party Dependencies
=============

This repository uses third-party libraries.
Those libraries and their licenses are available in: https://github.com/phetsims/sherpa.