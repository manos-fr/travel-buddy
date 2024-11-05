#!/bin/bash

# Define the directory where .env files are located
# relative path to the root directory assuming script is executed without cd ./scripts
apps_dir="./apps"

# Find all .env files within the apps directory and its subdirectories
env_files=$(find "$apps_dir" -type f -name '.env')

# Loop through the found .env files
for env_file in $env_files; do
  if [ -f "$env_file" ]; then
    # Read the PORT variable from the .env file
    port=$(grep -i '^API_PORT=' "$env_file" | cut -d'=' -f2)

    if [ -n "$port" ]; then
      echo "- Found API_PORT=$port in $env_file"
      # Use lsof to find processes using the port
      process=$(lsof -ti :$port)
      if [ -z "$process" ]; then
        echo -e "  No process found using port $port\n"
      else
        echo -e "  Killing process $process using port $port\n"
        kill -9 $process
      fi
    fi
  fi
done