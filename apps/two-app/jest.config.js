module.exports = {
  name: 'two-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/two-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
