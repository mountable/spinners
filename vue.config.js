const pages = {
    kSpinnerCherry: {
        entry: 'src/KSpinnerCherry.vue'
    },
    kSpinnerPeach: {
        entry: 'src/KSpinnerPeach.vue'
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