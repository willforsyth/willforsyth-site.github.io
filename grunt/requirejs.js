module.exports = {
    compile: {
        options: {
            baseUrl: 'dev/_assets/scripts',
            paths: {
                requireLib: '../../../bower_components/requirejs/require',
                jquery: '../../../bower_components/jquery/dist/jquery',
                classie: '../../../bower_components/classie/classie'
            },
            name: 'main',
            out: 'web/scripts/main.js',
            include: ['requireLib'],
        }
    }
};