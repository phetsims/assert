// Copyright 2013-2015, University of Colorado Boulder

/*
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

(function() {
  'use strict';

  window.assertions = window.assertions || {};
  window.assertions.assertFunction = window.assertions.assertFunction || function( predicate, message ) {
    if ( !predicate ) {

      // Log the stack trace to IE.  Just creating an Error is not enough, it has to be caught to get a stack.
      if ( window.navigator && window.navigator.appName === 'Microsoft Internet Explorer' ) {
        try { throw new Error(); }
        catch( e ) { message = message + ', stack=\n' + e.stack; }
      }

      var logMessage = message ? 'Assertion failed: ' + message : 'Assertion failed';
      console && console.log && console.log(  logMessage );
      throw new Error( logMessage );
    }
  };

  window.assert = window.assert || null;
  window.assertSlow = window.assertSlow || null;

  window.assertions.enableAssert = function() {
    window.assert = window.assertions.assertFunction;
    window.console && window.console.log && window.console.log( 'enabling assert' );
  };
  window.assertions.disableAssert = function() {
    window.assert = null;
    window.console && window.console.log && window.console.log( 'disabling assert' );
  };

  window.assertions.enableAssertSlow = function() {
    window.assertSlow = window.assertions.assertFunction;
    window.console && window.console.log && window.console.log( 'enabling assertSlow' );
  };
  window.assertions.disableAssertSlow = function() {
    window.assertSlow = null;
    window.console && window.console.log && window.console.log( 'disabling assertSlow' );
  };
})();
