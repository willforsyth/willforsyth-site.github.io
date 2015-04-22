module.exports = {
    options: {
        src: 'dev'
    },
    dev: {
        options: {
            dest: '.tmp/',
            drafts: true
        }
    },
    dist: {
        options: {
            dest: 'web/',
        }
    },
};
