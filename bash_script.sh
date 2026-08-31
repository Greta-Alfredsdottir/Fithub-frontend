#!/bin/bash

# Create a new folder
echo 'Creating folders....'
mkdir Fithub # Navn på project mappe
cd Fithub # her skrives navn på den project mappe der skal åbnes

# Install React 
echo 'Installing latest React.....'
npm create vite@latest ./ -- --template react-compiler --no-interactive

# Install dependencies, SCSS 
echo 'Installing dependencies....'
npm install react-router sass 

# Cleanup files
echo 'Cleaning files and getting ready'
cd src # den går ind på "src" mappen
rm -rf App.css # sletter "app.css"
sed -i '2,5d' App.jsx # Her skal der fjernes bestemte linier
sed -i '4d' App.jsx  # Her skal der fjernes bestemte linier
sed -i '7,112d' App.jsx  # Her skal der fjernes bestemte linier
sed -i '1,112d' index.css # Her skal der fjernes alle linier

# Copy files to root dir, så man slipper for at skulle drag and drop sine filer 
#echo 'Copying files to root'
#cd ..
#cp -r ../resources/. ./src

# Finalize and start, Echo = tekste som ses i terminalen
echo 'All good! Happy hacking!'