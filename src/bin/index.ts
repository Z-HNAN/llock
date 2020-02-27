#! /usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'
import { getPassword, getLockFile } from '../utils'

import inquirer = require('inquirer')

import Config = require('../config')

const run = async () => {
  // 1.获取文件夹名称
  const promptFolder: any = {
    type: 'input',
    message: '请输入加密文件夹名称(回车使用默认文件夹名称):',
    name: 'folderName',
    default: Config.DEFAULT_FOLDER // 默认值
  }
  const { folderName } = await inquirer.prompt(promptFolder)

  // 2.获取密码
  const promptPassword: any = {
    type: 'input',
    message: '请输入密码(回车使用随机密码):',
    name: 'password',
    default: getPassword() // 默认值
  }
  const { password } = await inquirer.prompt(promptPassword)
  
  // 3.创建加密文件
  const lockFileContent = getLockFile(folderName, password)

  // 4.创建文件夹，加密文件
  const fullPath = path.join(Config.PATH, folderName)

  if (fs.existsSync(fullPath) === false) {
    fs.mkdirSync(fullPath)
  }
  fs.writeFileSync(path.join(Config.PATH, 'locker.bat'), lockFileContent)
  
  // 5.创建完成提示用户
  console.log('创建加密文件完成,使用方式如下')
  console.log(`加密: 将文件放入文件夹${folderName}中,之后双击运行locker.bat,选择y确定加密文件即可。`);
  console.log(`解密: 双击运行locker.bat,输入密码,验证正确后即显示该文件夹。`);
}

try {
  // 欢迎语
  console.log('即将创建一个加锁文件夹')

  // 运行程序
  run()
  
} catch (error) {
  console.log('加密发生错误如下，请重新运行');
  
  console.log(error)
}


