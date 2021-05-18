#!/bin/bash

echo "████ BFA - MAILHOG CONTAINER STARTING... ████████████████████████████ v${APP_VER^^} ████████"

# Display Docker Image / CI / Release details
echo "Image Build Date/Time: " "$(cat build_timestamp.txt)" "UTC"

# ====================================================================================
# Debug / Sanity check info
# ====================================================================================
echo "  "
echo "======= Current Dir / Files (Debug) ============================================================================="
pwd
ls -al

echo "  "
echo "======= Env Vars (Debug) ========================================================================================"
printenv

echo "  "
echo "======= Linux version (Debug) ==================================================================================="
cat /etc/os-release

echo "  "
echo "======= Go version (Debug) ==========================================================================="
go version

echo "  "
echo "======= Starting Mailhog (Local Env) ==================================================================="
/usr/bin/MailHog
