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
    git clone https://github.com/lukechilds/zsh-nvm ~/.oh-my-zsh/custom/plugins/zsh-nvm
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
 
 **Node Package Manager**
 
- create file package.json
```
npm init
```
Read [Docs packaje.json](https://docs.npmjs.com/files/package.json)

Local install packages:
```
npm install <packageName> [--save]
```
Global install packages:
```
npm install -g  <packageName>
```
Info update dependences:

[The semantic versioner for npm](https://github.com/npm/node-semver/)
