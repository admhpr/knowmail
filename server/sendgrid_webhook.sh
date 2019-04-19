#!/bin/sh

function localtunnel {
    lt -s jdkajsdkja --port 5000
}

until localtunnel; do
echo "localtunnel server has crashed"
sleep 2
done