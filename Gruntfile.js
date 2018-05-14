module.exports = function(grunt) {

	grunt.initConfig({

		copy: {
			public: {
				expand: true,
				cwd: 'public',
				src: '**',
				dest: 'dist'
			}
		},

		clean: {
			dist: {
				src: 'dist'
			}
		},

		useminPrepare: {
			html: 'dist/**/*.php'
		},

		usemin: {
			html: 'dist/**/*.php'
		},

		imagemin: {
			public: {
				expand: true,
				cwd: 'dist/images',
				src: '**/*.{png,jpg,gif}',
				dest: 'dist/images'
			}
		},
		browserSync: {
			dist: {
				bsFiles: {
					src: ['public/**/*']
				},
				options: {
					proxy: 'http://127.0.0.1/',
					watchTask: true,
					notify: true,
					open: true,
					logLevel: 'silent',
					ghostMode: {
						clicks: true,
						scroll: true,
						links: true,
						forms: true
					}
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			}
		},

	});

	grunt.registerTask('server', ['browserSync', 'watch']);
	grunt.registerTask('minifica', ['useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin', 'imagemin']);
	grunt.registerTask('dist', ['clean', 'copy']);
	grunt.registerTask('default', ['dist', 'minifica']);

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-contrib-connect');

}