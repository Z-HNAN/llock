cls
@ECHO OFF
title Folder private
if EXIST "HTG Locker" goto UNLOCK
if NOT EXIST private goto MDLOCKER
:CONFIRM
echo 你确定要加密隐藏private文件夹吗？(Y/N)
set/p "cho=>"
if %cho%==Y goto LOCK
if %cho%==y goto LOCK
if %cho%==n goto END
if %cho%==N goto END
echo Invalid choice.
goto CONFIRM
:LOCK
ren private "HTG Locker"
attrib +h +s "HTG Locker"
echo Folder locked
goto End
:UNLOCK
echo 输入密码来解锁文件夹
set/p "pass=>"
if NOT %pass%== 131f goto FAIL
attrib -h -s "HTG Locker"
ren "HTG Locker" private
echo Folder Unlocked successfully
goto End
:FAIL
echo Invalid password
goto end
:MDLOCKER
md private
echo private created successfully
goto End
:End