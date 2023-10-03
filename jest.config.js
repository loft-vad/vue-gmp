module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['/src/**/*.vue'],
}
