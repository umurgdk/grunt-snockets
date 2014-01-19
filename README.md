# grunt-snockets

## This project is no longer continoued. I don't use snockets anymore and highly recommend to use require.js insted! I no longer see any necassary to use a tool like snockets, sorry :)

[Snockets](https://github.com/TrevorBurnham/snockets) for grunt.js

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-snockets`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-snockets');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/wiki

## Documentation (Basic Usage)
**coffee/components/ctabs.coffee**
```coffeescript
class CTabs
	constructor: (tabs) ->
		tabs.each (k, v) ->
			console.log k, v
```

**coffee/app.coffee**
```coffeescript
#= require_tree components
$ ->
	console.log 'Hello my friend ^^'
```

**grunt conifg**
```javascript
grunt.initConfig({
	snockets: {
		compile: {
			src: 'coffee/app.coffee',
			dest: 'public/js/app.js'
		}
	}
})
```

Finally **public/js/app.js** become:
```javascript
(function() {
  var CTabs;

  CTabs = (function() {

    function CTabs(tabs) {
      tabs.each(function(k, v) {
        return console.log(k, v);
      });
    }

    return CTabs;

  })();

}).call(this);

(function() {

  $(function() {
    return console.log('Hello my friend ^^');
  });

}).call(this);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Umur Gedik  
Licensed under the MIT license.
