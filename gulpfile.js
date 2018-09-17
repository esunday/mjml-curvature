const gulp = require('gulp')
const mjml = require('gulp-mjml')
const del = require('del')
const mjmlEngine = require('mjml')

const browserSync = require('browser-sync');
const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: 'dist'
    }
  });
  done();
}

const clean = () => del(['dist']);

const email = () => {
  // return gulp.src('./src/mjml/index.mjml')
  return gulp.src([
      'src/mjml/index.mjml',
      'src/mjml/1-col-full-width.mjml',
      'src/mjml/2-col-image-blurb.mjml',
      'src/mjml/2-col-text-blurb.mjml',
      'src/mjml/3-col-icon-blurb.mjml',
      'src/mjml/caption-1.mjml',
      'src/mjml/color-block-1.mjml',
      'src/mjml/color-block-2.mjml',
      'src/mjml/content-divider-1.mjml',
      'src/mjml/cta-1.mjml',
      'src/mjml/footer-main.mjml',
      'src/mjml/footer-plaintext.mjml',
      'src/mjml/footer-top.mjml',
      'src/mjml/header-simple.mjml',
      'src/mjml/header-with-menu.mjml',
      'src/mjml/hero-1.mjml',
      'src/mjml/plaintext.mjml',
      'src/mjml/product-feature-1.mjml',
      'src/mjml/product-feature-1.mjml',
      'src/mjml/single-image.mjml',
    ])
    // .pipe(mjml(mjmlEngine, {minify: true}))
    .pipe(mjml(mjmlEngine, {}))
    .pipe(gulp.dest('./dist'))
}

const watch = () => gulp.watch('**/*.mjml', gulp.series(email, reload));

const dev = gulp.series(clean, email, serve, watch);

gulp.task('default', dev);