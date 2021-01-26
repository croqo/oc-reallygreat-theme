let mix = require('laravel-mix');

mix.setPublicPath('assets');

mix.js('.src/app.js', 'build/index.js');

mix.disableNotifications();