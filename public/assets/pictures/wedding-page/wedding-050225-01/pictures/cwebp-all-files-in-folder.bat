@echo off

set /a counter=0

:: Voor JPG-bestanden
for %%f in (*.jpg) do (
    C:\libwebp\bin\cwebp.exe -q 80 %%f -o %%~nf.webp
    set /A counter=counter+1
)

:: Voor PNG-bestanden
for %%f in (*.png) do (
    C:\libwebp\bin\cwebp.exe -q 80 %%f -o %%~nf.webp
    set /A counter=counter+1
)

echo ************************************
echo %counter% files have been processed.
echo ************************************
