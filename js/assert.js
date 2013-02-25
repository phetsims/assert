// Copyright 2002-2012, University of Colorado

/*
 * Usage:
 * var assert = require( '<assert>' )( 'flagName' );
 *
 * assert && assert( <simple value or big computation>, "<message here>" );
 *
 * TODO: decide on usages and viability, and if so document further
 *
 * NOTE: for changing build, add has.js tests for 'assert.' + flagName
 *
 * @author Jonathan Olson <olsonsjc@gmail.com>
 */

define( function( require ) {
  var assert = function( name, excludeByDefault ) {
    var hasName = 'assert.' + name;
    
    var flagDefined = has && has( hasName ) !== undefined;
    var skipAssert = flagDefined ? !has( hasName ) : excludeByDefault;
    
    if ( skipAssert ) {
      return null;
    } else {
      return function( predicate, message ) {
        var result = typeof predicate === 'function' ? predicate() : predicate;
        
        if ( !result ) {
          // TODO: custom error?
          throw new Error( 'Assertion failed: ' + message );
        }
      };
    }
  };
  
  return assert;
} );
