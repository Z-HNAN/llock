import * as path from 'path'

const config: {
  // 默认文件夹名称
  DEFAULT_FOLDER: string

  /* 读取路径，默认从node命令行打开路径开始操作 */
  PATH: string

} = {
  DEFAULT_FOLDER: 'private',
  PATH: path.resolve('./'),
}


export = config