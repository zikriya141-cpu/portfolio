@echo off
REM ============================================================
REM  Portfolio launcher
REM  Starts a local server and opens the site in your browser.
REM  Double-click this file.
REM ============================================================
title Portfolio - local server
cd /d "%~dp0"

echo.
echo   Starting the portfolio server...
echo.

where python >nul 2>nul
if %errorlevel%==0 (
    start "" http://localhost:8000
    python -m http.server 8000
    goto :end
)

where py >nul 2>nul
if %errorlevel%==0 (
    start "" http://localhost:8000
    py -m http.server 8000
    goto :end
)

where npx >nul 2>nul
if %errorlevel%==0 (
    start "" http://localhost:8000
    npx --yes serve -l 8000 .
    goto :end
)

echo   Python or Node.js was not found on this computer.
echo.
echo   No problem - you can still open the site directly:
echo   double-click "index.html" in this folder.
echo.
pause
:end
