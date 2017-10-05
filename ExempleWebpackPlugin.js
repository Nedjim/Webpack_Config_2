class ExempleWebpackPlugin {
    apply(compiler){
        compiler.plugin('run', (compiler, callback) => {
            console.log('WEBPACK IS RUNNING!');
            callback();
        })
    }
}

module.exports = ExempleWebpackPlugin;
