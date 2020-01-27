module.exports = {
  name: 'one-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/one-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
