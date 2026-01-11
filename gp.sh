#!/bin/bash

# Add all non-ignored files
git add .

# Commit & push
git commit -m "$1"
git push