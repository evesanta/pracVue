# first-veux

#### はじめに
vuexのはじめ方をVueCLIを使いながら行います．  
Macを想定して書いているため，Winユーザは適宜コマンド等を置き換えてください．

以下の知識がない人はggrksです  

* HTML
* JavaScript
* npm
* vue

### VueCLIのインストール方法
Terminalにて，以下のコマンドを打ってください．  
rootでインストールしないとエラーが出て適切に実行されません．

```
$ sudo npm install -g vue-cli

```

### VueCLIを使う
Terminalにて，自分の作業フォルダに移動してください.その後，`vue`コマンドを実行しする．いくつか質問されますが，EnterでOKです．  
上のコマンドを実行すると，新しいフォルダが作成されます．

```
$ cd move/your/workspace
$ vue init webpack first_vuex
```
移動しましょう

```
$ cd first_vuex
```

ここで，以下のコマンドを実行すると，
`http://localhost:8080/`にアクセスすることができます．  
やってみてください．

```
$ npm run dev
```

これでVueの環境ができたことになります．

様々なフォルダ，ファイルが作成されているので，確認してみましょう！
一通り見たら次に進んでください．
特に見るべき場所は，

* App.vue
* main.js
* index.html
* components/HelloWorld.vue

### ちょっといじってみようか！
では，`components/HelloWorld.vue` を開いて，
上の方にある，`h2`タグの中身を変更して見ましょう．

```html
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>はじめてのVuex</h2>
```
変更したら，以下のコマンドを実行して以下の画像のように，表示が変わるかどうかを見てみよう．
もし，上でこのコマンドを打ったままなら，自動的に表示が変わります．この状態を終わらせたかったら，`control`と`c`を同時押しでOK!  

_開発中はこのコマンドを実行したままで大丈夫です．_

```
$ npm run dev
```

![](/Users/Seiya/Desktop/スクリーンショット 2018-07-27 21.23.28.png)


では，次行ってみよう!

### Vuexを導入
以下のコマンドを実行して，Vuexを導入します．

 ```
 $ npm i --S vuex
 ```
