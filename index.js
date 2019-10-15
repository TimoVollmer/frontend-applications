const camelCase = require('camelcase');
 
console.log(camelCase('foo-bar'));
//=> 'fooBar'
 
camelCase('foo_bar');
//=> 'fooBar'
 
camelCase('Foo-Bar');
//=> 'fooBar'
 
camelCase('Foo-Bar', {pascalCase: true});
//=> 'FooBar'
 
camelCase('--foo.bar', {pascalCase: false});
//=> 'fooBar'
 
camelCase('foo bar');
//=> 'fooBar'
 
console.log(process.argv[3]);
//=> '--foo-bar'
camelCase(process.argv[3]);
//=> 'fooBar'
 
camelCase(['foo', 'bar']);
//=> 'fooBar'
 
camelCase(['__foo__', '--bar'], {pascalCase: true});
//=> 'FooBar'