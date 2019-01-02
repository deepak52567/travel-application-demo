var autoprefix = require("gulp-autoprefixer"),
    connect = require("gulp-connect"),
    gulp = require("gulp"),
    sass = require("gulp-sass");

var paths = {
    scss: ["sass/*.scss"]
};

gulp.task("sass", function () {
    return gulp.src(paths.scss)
        .pipe(sass({
            sourcemaps: true
        }))
        .pipe(autoprefix("last 10 versions"))
        .pipe(gulp.dest("stylesheets"))
        .pipe(connect.reload());
});

gulp.task('icons', function() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('webfonts/'));
});

gulp.task("connect", function () {
    connect.server({
        root: "",
        port: 8000,
        livereload: true
    });
});

gulp.task("default", ["sass", "connect", "icons"], function () {
    gulp.watch(paths.scss, ["sass"]);
});