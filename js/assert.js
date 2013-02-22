// Copyright 2002-2012, University of Colorado

/*
 * Usage:
 * var assert = require( '<assert>' )( 'flagName' );
 *
 * assert && assert( <simple value or big computation>, "<message here>" );
 *
 * TODO: decide on usages and viability, and if so document further
 *
 * NOTE: for changing build, Uglify.js -d phetDebugFlagBuild='production' or --define=phetDebugFlagBuild=production
 *
 * @author Jonathan Olson <olsonsjc@gmail.com>
 */

define( function( require ) {
  // this variable should be replaced by our minification engine (Uglify / Closure) for production builds
  /** @define {string} */
  var phetDebugFlagBuild = 'development';
  
  // pull the flags for our specific build type, or default to no flags if it is not specified
  var flags = window.phetDebugFlags ? window.phetDebugFlags[ phetDebugFlagBuild ] : {};
  
  var assert = function( name, excludeByDefault ) {
    var flagDefined = flags && flags[name] !== undefined;
    
    if ( flagDefined ? !flags[name] : excludeByDefault ) {
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
