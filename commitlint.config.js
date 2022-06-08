module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'], // body 开始于空白行
    'header-max-length': [2, 'always', 72], // header 字符最大长度为 72
    'subject-full-stop': [0, 'never'], // subject 结尾不加 '.'
    'type-empty': [2, 'never'], // type 不为空
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'perf',
        'ci',
        'build',
        'chore',
        'revert',
      ],
    ],
  },
}
