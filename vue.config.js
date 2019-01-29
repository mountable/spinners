module.exports = {
    chainWebpack: config => {
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.optimization.delete('splitChunks')
    },
    filenameHashing: false,
    pages: {
        kSpinnerCherry: {
            entry: 'src/KSpinnerCherry.vue',
            filename: 'kSpinnerCherry.css',
            chunks: []
        },
        kSpinnerPeach: {
            entry: 'src/KSpinnerPeach.vue',
            filename: 'kSpinnerPeach.css',
            chunks: []
        }
    }
}