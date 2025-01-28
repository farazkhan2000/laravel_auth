const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .vue();

mix.browserSync('your-local-domain.test'); // Optional: for automatic browser refresh
