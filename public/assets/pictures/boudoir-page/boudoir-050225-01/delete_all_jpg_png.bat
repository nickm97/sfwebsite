@echo off

:: Bevestiging vragen
echo Weet je zeker dat je alle .jpg en .png bestanden wilt verwijderen? (Y/N)
set /p confirm=

if /i "%confirm%" NEQ "Y" (
    echo Actie geannuleerd.
    exit /b
)

:: Teller voor verwijderde bestanden
set /a counter=0

:: Verwijder alle .jpg bestanden
for %%f in (*.jpg) do (
    del "%%f"
    set /A counter=counter+1
)

:: Verwijder alle .png bestanden
for %%f in (*.png) do (
    del "%%f"
    set /A counter=counter+1
)

echo ************************************
echo %counter% bestanden zijn verwijderd.
echo ************************************
