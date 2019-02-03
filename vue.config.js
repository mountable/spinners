const pages = {
    kSpinners: {
        entry: 'src/index.js'
    },
    kSpinnerSpin: {
        entry: 'src/KSpinnerSpin.vue'
    },
    kSpinnerPulse: {
        entry: 'src/KSpinnerPulse.vue'
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

        // Expose @knekk/spinners version
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