#!/bin/sh

function localtunnel {
    echo "localtunnel has started"
    lt --subdomain jdkajsdkja112233902390 --port 5000
}

until localtunnel; do
echo "localtunnel server has crashed"
sleep 2
done