#Install node:
---------------



- MAC OS:

  Pre-requisitos:
  - Xcode
  - Homebrew [http://brew.sh](http://brew.sh)
  
     ```
     /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)
     ```


- Install NODE:

    ```
    brew install node
    ```
- Update node:
    ```
     brew update
     
     brew upgrade node
    ```
- Un-install:
    ```
    brew inistall node
    ```
    
- Install Version Manager:
    ```
    [sudo] npm i -g nvm
    ```
    Manager node:
    
    ```
    nvm list
    
    nvm install <version>
    
    nvm use <version>
    
    nvm use system #Linux
    ```
    
**Execute File**

 ```
 node file.js
 ```
**Execute with Nodemon**

 ```
 npm install nodemon -g
 nodemon <file.js>
 ```