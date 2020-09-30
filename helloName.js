function hello(name) {
    if (typeof name !== 'string'){
        return 'Hello, World!'
    }
    if (name.charAt(0) == ''){
        return('Hello, World!');
    }
   var lowName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
   return 'Hello, ' + lowName + '!';
    }