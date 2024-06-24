import webpack from "webpack-stream";
import uglify from "gulp-uglify";
import rename from 'gulp-rename';


export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(app.gulp.dest(app.path.build.js))
        
        // .pipe(webpack({
        //     mode: "development",
        //     output: {
        //         filename: "script.min.js"
        //     }
        // }))
        .pipe(uglify())
        .pipe(
          rename({
            extname: '.min.js',
          }),
        )
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream())
}