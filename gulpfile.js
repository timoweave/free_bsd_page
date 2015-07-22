var gulp = require("gulp");
var gulpInstall = require("gulp-install");
var browserSync = require("browser-sync").create();

gulp.task("install", function(){
	gulp.src(["./package.json", "./bower.json"])
	    .pipe(gulpInstall());
});

gulp.task("browse", function(){
    browserSync.init({
        server: "./",
        files: ["./*.css"],
        plugins: [
            {
                module: "bs-html-injector",
                options: {
                    files: ["./*.html"]
                }
            }
        ]
    });
});

gulp.task("default", ["browse"]);
