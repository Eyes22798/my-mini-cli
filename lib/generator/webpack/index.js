module.exports = (generator) => {
    generator.extendPackage({
        devDependencies: {
            'clean-webpack-plugin': '^3.0.0',
            'css-loader': '^5.0.2',
            'file-loader': '^6.2.0',
            'html-webpack-plugin': '^4.5.1',
            'style-loader': '^2.0.0',
            'vue-loader': '^15.9.6',
            webpack: '^4.32.2',
            'webpack-cli': '^3.3.11',
            'webpack-dev-server': '^3.11.2',
            'webpack-merge': '^4.2.1',
            webpackbar: '^4.0.0'
        }
    })

    generator.render('./template', {})
}