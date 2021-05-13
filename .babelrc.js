module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'entry' }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    // for emotion
    'transform-inline-environment-variables',
    [
      'babel-plugin-jsx-pragmatic',
      { export: 'jsx', module: '@emotion/react', import: '___EmotionJSX' },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      { pragma: '___EmotionJSX', pragmaFrag: 'React.Fragment' },
    ],
    '@emotion',
    ['@babel/plugin-transform-runtime', { regenerator: true }],
  ],
}
