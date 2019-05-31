var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify');

// Сервер и автообновление страницы Browsersync
gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

// Минификация пользовательских скриптов проекта и JS библиотек в один файл
gulp.task('js', function () {
	return gulp.src([
			'app/libs/jquery/dist/jquery.min.js',
			'app/js/common.js', // Всегда в конце
		])
		.pipe(concat('scripts.min.js'))
		.pipe(uglify()) // Минимизировать весь js (на выбор)
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('sass', function () {
	return gulp.src('app/sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'expand'
		}).on("error", notify.onError()))
		.pipe(rename({
			suffix: '.min',
			prefix: ''
		}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS()) // Опционально, закомментировать при отладке
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function () {
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);

// //convert scss files to css
// gulp.task('sass',function(){
// 	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
// 	  .pipe(sass())
// 	  .pipe(gulp.dest('src/css'))
// 	  .pipe(browserSync.stream());
// 	});
// 	//move js files to the src
// 	gulp.task('js',function(){
// 	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/popper.js/dist/popper.min.js', 'node_modules/jquery/dist/jquery.min.js' ])
// 	  .pipe(gulp.dest('src/js'))
// 	  .pipe(browserSync.stream());
// 	});
// 	//server implementation
// 	gulp.task('serve',['sass'],function(){
// 	  browserSync.init({
// 	  server:"./src"
// 	});
// 	gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
	  
// 	   gulp.watch('src/*.html').on('change', browserSync.reload);
// 	});
// 	//start server
// 	gulp.task('default',['js','serve']);