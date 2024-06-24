import webpack from "webpack-stream"
import imagemin from "imagemin"


export const images = () => {
    return app.gulp.src(app.path.src.images, { sourcemaps: true,
        encoding: false
     })

        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream())
}