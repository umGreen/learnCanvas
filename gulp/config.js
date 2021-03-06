"use strict";

module.exports = {
	build: {
		html: 'build/templates/',
		js: 'build/js/',
		css: 'build/css/',
		img: 'build/img/',
		sound: 'build/sound/'
	},
	src: {
		html: './src/components/**/*.html',
		js: ['./src/scripts/*.js'],
		style: ['./src/style/main.sass'], // Плохо, но пока ладно. Иначе два раза компилит стили (из-за импорта)
		img: './src/img/**/*.*',
		sound: ['./src/sound/*.*', './src/sound/**/*.*'],
		font: ['./src/fonts/**/*.otf',
			'./src/fonts/**/*.eot',
			'./src/fonts/**/*.svg',
			'./src/fonts/**/*.ttf',
			'./src/fonts/**/*.woff',
			'./src/fonts/**/*.woff2']
	},
	watch: {
		html: ['./src/**/*.html'],
		js: ['./src/*.js', 'src/**/*.js'],
		style: ['./src/**/*.sass'],
		img: ['./src/img/**/*.*']
	},
	clean: './build',
	serverSettings: {
		server: {
			baseDir: "."
		},
		host: 'localhost',
		port: 9000,
		logPrefix: "Frontend"
	}
};
