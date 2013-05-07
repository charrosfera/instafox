require.config({
    baseUrl: 'js/lib',
    shim:{
        'caman':{
            exports: 'Caman'
        }
    }
});

requirejs(['../app']);
