// require('./app/assets/gulp/tasks/styles');
// require('./app/assets/gulp/tasks/watch');
// require('./app/assets/gulp/tasks/scripts');

var gulp = require ('gulp'),
    watch = require ('gulp-watch'),
    brSync = require ('browser-sync');

    gulp.task('watch', function () {

      brSync.init({
        server: {
          baseDir: "./src"
        }
      });

      watch('./src/scripts/**/*.js', function() {
        brSync.reload();
      });
      
    });