@echo off
set /a counter=0

:: Haal de huidige map op
set "current_folder=%CD%"

:: Voor JPG-bestanden
for %%f in ("%current_folder%\*.jpg") do (
    if exist "%%f" (
        C:\libwebp\bin\cwebp.exe -q 80 "%%f" -o "%%~nf.webp"
        set /A counter=counter+1
    ) else (
        echo Bestand %%f niet gevonden!
    )
)

:: Voor PNG-bestanden
for %%f in ("%current_folder%\*.png") do (
    if exist "%%f" (
        C:\libwebp\bin\cwebp.exe -q 80 "%%f" -o "%%~nf.webp"
        set /A counter=counter+1
    ) else (
        echo Bestand %%f niet gevonden!
    )
)

echo ************************************
echo %counter% bestanden zijn verwerkt.
echo ************************************
