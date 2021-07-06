const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//utilidades JS

const terser = require('gulp-terser-js');
const rename= require('gulp-rename');

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}
// funcion que copila SASS
function css( ){
    return src(paths.scss)
    .pipe( sass() )
    .pipe( postcss([autoprefixer(), cssnano()]))
    .pipe( sourcemaps.write('.'))
    .pipe( dest('./build/css') )
}

function javascript() {
    return src(paths.js)
    .pipe(sourcemaps.init())
    .pipe( concat('bundle.js'))
    .pipe( terser() )
    .pipe( sourcemaps.write('.'))
    .pipe( rename({ suffix: '.min' }))
    .pipe( dest('./build/js'))
}

function minificarcss(){
    return src(paths.scss)
    .pipe( sass({
        outputStyle: 'compressed'
    }) )
    .pipe( dest('./build/css') )
}

function imagenes(){
    return src(paths.scss)
    .pipe(imagemin())
    .pipe( dest( './build/img' ))
    .pipe(notify({Message: 'imagen Minificada'}))
}

function versionWebp(){
    return src(paths.scss)
        .pipe(webp())
        .pipe( dest( './build/img' ))
        .pipe(notify({Message: 'version webP lista'}));
}

function watchArchivos(){
    watch(  'src/scss/**/*.scss', css ) // un * = a la carpeta actual - ** todos los archivos 
    watch(paths.js, javascript)
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series( css, imagenes, javascript, versionWebp, watchArchivos );
