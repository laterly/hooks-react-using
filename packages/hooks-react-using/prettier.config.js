module.exports = {
  printWidth: 80, // 超过最大值换行
  useTabs: false, // 缩进不使用tab，使用空格
  singleQuote: true, // 使用单引号（默认false）
  trailingComma: 'all', // 多行使用拖尾逗号（默认none）
  arrowParens: 'avoid', //(x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  endOfLine: 'auto', // // 结尾是 \n \r \n\r auto
  bracketSpacing: true, //在对象，数组括号与文字之间加空格 "{ foo: bar }"
  ignorePath: '.prettierignore', // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
};