"use strict";
/**
 * 获取加密文件
 */
/* eslint-disable-next-line */
const getLockFile = (folder, password) => ('cls\r\n@ECHO OFF\r\ntitle Folder ' + folder + '\r\nif EXIST "HTG Locker" goto UNLOCK\r\nif NOT EXIST ' + folder + ' goto MDLOCKER\r\n:CONFIRM\r\necho 你确定要加密隐藏' + folder + '文件夹吗？(Y/N)\r\nset/p "cho=>"\r\nif %cho%==Y goto LOCK\r\nif %cho%==y goto LOCK\r\nif %cho%==n goto END\r\nif %cho%==N goto END\r\necho Invalid choice.\r\ngoto CONFIRM\r\n:LOCK\r\nren ' + folder + ' "HTG Locker"\r\nattrib +h +s "HTG Locker"\r\necho Folder locked\r\ngoto End\r\n:UNLOCK\r\necho 输入密码来解锁文件夹\r\nset/p "pass=>"\r\nif NOT %pass%== ' + password + ' goto FAIL\r\nattrib -h -s "HTG Locker"\r\nren "HTG Locker" ' + folder + '\r\necho Folder Unlocked successfully\r\ngoto End\r\n:FAIL\r\necho Invalid password\r\ngoto end\r\n:MDLOCKER\r\nmd ' + folder + '\r\necho ' + folder + ' created successfully\r\ngoto End\r\n:End');
module.exports = getLockFile;
