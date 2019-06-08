const pages = {
    mSpinners: {
        entry: 'src/index.js'
    },
    mSpinnerSpin: {
        entry: 'src/MSpinnerSpin.vue'
    },
    mSpinnerPulse: {
        entry: 'src/MSpinnerPulse.vue'
    },
    mSpinnerSwirl: {
        entry: 'src/MSpinnerSwirl.vue'
    },
    mSpinnerSignal: {
        entry: 'src/MSpinnerSignal.vue'
    }
}

module.exports = {
    chainWebpack: config => {
        // Prevent html generation of index
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')

        // Prevent html generation of pages
        Object.keys(pages).forEach(page => {
            config.plugins.delete(`html-${ page }`)
            config.plugins.delete(`preload-${ page }`)
            config.plugins.delete(`prefetch-${ page }`)
        })

        // Expose @mountable/spinners version
        config.plugin('define')
            .tap(args => {
                args[0]['process.env']['VERSION'] = JSON.stringify(require('./package.json').version)
                return args
            })
    },
    configureWebpack: {
        optimization: {
            splitChunks: false
        }
    },
    css: {
        extract: {
            filename: '[name].css',
            chunkFilename: '[name].css',
        }
    },
    filenameHashing: false,
    pages,
    productionSourceMap: false
}