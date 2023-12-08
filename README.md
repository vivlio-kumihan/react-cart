### CRON問題

この問題の解決は、[【Ajax】ローカルファイルを読み込もうとしたらCORSエラーが発生したので解決した](https://qiita.com/terufumi1122/items/39b2a3659bc585c07f64)を参照しました。
buildからローカルで表示するまでの内容を以下に記載します。

### build実行

```
[tk-mba]$ npm run build
> react-cart@0.0.0 build
> vite build

vite v4.5.0 building for production...
✓ 67 modules transformed.
dist/index.html                   0.69 kB │ gzip:  0.39 kB
dist/assets/dummy-8d8a9492.jpg   25.87 kB
dist/assets/index-60903760.css   10.83 kB │ gzip:  2.47 kB
dist/assets/index-5e456819.js   182.93 kB │ gzip: 59.67 kB
✓ built in 1.07s
```

### buildされたdistに移動

```
[tk-mba]$ cd dist 
[tk-mba]$ ll
total 24
drwxr-xr-x   7 tk-mba  staff  224 12  8 09:32 ./
drwxr-xr-x  17 tk-mba  staff  544 12  8 09:32 ../
drwxr-xr-x   5 tk-mba  staff  160 12  8 09:32 assets/
-rw-r--r--   1 tk-mba  staff  687 12  8 09:32 index.html
-rw-r--r--   1 tk-mba  staff  177 12  8 09:32 manifest.json
-rw-r--r--   1 tk-mba  staff   67 12  8 09:32 robots.txt
drwxr-xr-x   6 tk-mba  staff  192 12  8 09:32 tmp/
```

### http-serverをインストールする

```
[tk-mba]$ npm i -g http-server
added 44 packages in 1s
14 packages are looking for funding
  run `npm fund` for details
```

### サーバーを起動する

```
[tk-mba]$ http-server
Starting up http-server, serving ./

http-server version: 14.1.1

http-server settings: 
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://127.0.0.1:8080
  http://169.254.82.30:8080
  http://192.168.100.55:8080
Hit CTRL-C to stop the server
```

### 表示できた

確かに、言われた通りしたら、以下のアドレスで全て表示はできた。

```
  http://127.0.0.1:8080
  http://169.254.82.30:8080
  http://192.168.100.55:8080
```

### deployする

サーバーにあげてみた挙動を以下に記載します。

#### ルートにあげる

私が契約しているレンタルサーバーにあげる。

buildしたものを`https://kumihan.com`のルートに設置する。
表示や機能に問題はなく設置できた。

```
assets/
index.html
manifest.json
robots.txt
```

#### サブディレクトリにあげる

`omamori`という名称でサブディレクトリを作成し、そこにbuildしたものを移動して挙動を確かめる。
画像のパスがルートを起点にbuildされるのが原因なのかわかりませんが、画像のパスが切れて表示ができません。
それ以外は機能・表示とも大丈夫です。

```
GET https://kumihan.com/assets/dummy-8d8a9492.jpg 404 (Not Found)
assets/dummy-8d8a9492.jpg:1 
```

### CRON問題まとめ

レンタルサーバーにデプロイして表示させることはできました。
言葉がわからないのですが、任意にディレクトリ構成を作りURLを操作することができませんでした。