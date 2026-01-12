#!/bin/bash

# Install Emscripten first if not installed:
# git clone https://github.com/emscripten-core/emsdk.git
# cd emsdk
# ./emsdk install latest
# ./emsdk activate latest
# source ./emsdk_env.sh

# Navigate to cpp directory
cd "$(dirname "$0")"

# Create build directory if it doesn't exist
mkdir -p build

# Compile to WebAssembly
em++ \
    -o ../src/wasm/currency_converter.js \
    src/currency_converter.cpp \
    -I./src \
    --bind \
    -O3 \
    -s MODULARIZE=1 \
    -s EXPORT_ES6=1 \
    -s ENVIRONMENT=web \
    -s SINGLE_FILE=0 \
    -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
    -s ALLOW_MEMORY_GROWTH=1 \
    -s EXPORT_NAME="createCurrencyConverter" \
    -s USE_ES6_IMPORT_META=0 \
    -std=c++17

echo "Compilation complete. Files saved to src/wasm/"