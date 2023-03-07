1- criar o pacote de dependencias
-> npm init -y

2- instalar o typescript
->npm install typescript

3- instalar o express
-> npm install express
-> npm install @types/express

4- iniciar e configurar o arquivo tsconfig
-> npx tsc --init
-> localizar no arquivo tsconfig o "outDir" e deixar dessa forma "outDir": "./dist",

5- Instalar o ts node dev para executar o projeto
-> npm i ts-node-dev --save-dev
-> add uma linha nos scripts
-> "dev": "ts-node-dev --respawn --transpile-only src/arquivoDeInicializacao.ts"

6-Instalar o cors (para determinar quais urls podera interagir com o back-end)
-> npm install cors
-> npm install @types/cors
