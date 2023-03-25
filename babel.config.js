module.exports = {
    presets: [
        '@babel/preset-typescript',
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-react',
        // Add any other presets you might need
    ],
}
