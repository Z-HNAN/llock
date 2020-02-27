import * as path from 'path'

const config: {
  // 版本
  VERSION: string

  // 默认文件夹名称
  DEFAULT_FOLDER: string

  /* 读取路径，默认从node命令行打开路径开始操作 */
  PATH: string

} = {
  VERSION: '0.1.0',
  DEFAULT_FOLDER: 'private',
  PATH: path.resolve('./'),
}


export = config