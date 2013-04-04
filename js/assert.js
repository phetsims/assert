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
    
    var flagDefined = window.has && window.has( hasName ) !== undefined;
    var skipAssert = flagDefined ? !window.has( hasName ) : excludeByDefault;
    
    if ( skipAssert ) {
      return null;
    } else {
      return function( predicate, message ) {
        var result = typeof predicate === 'function' ? predicate() : predicate;
        
        if ( !result ) {

          //Log the stack trace to IE.  Just creating an Error is not enough, it has to be caught to get a stack.
          //TODO: What will this do for IE9?  Probably just print stack = undefined.
          if ( navigator && navigator.appName === 'Microsoft Internet Explorer' ) {
            try { throw new Error(); }
            catch( e ) { message = message + ", stack=\n" + e.stack; }
          }
          
          // TODO: custom error?
          throw new Error( 'Assertion failed: ' + message );
        }
      };
    }
  };
  
  return assert;
} );
