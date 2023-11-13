# 質問です

お世話になります。
高広です。
先日、個別にカウンターを動かすことを教わってからやりましたことは、

* カート内で商品の注文数の増減。
* そのカウントに合わせた料金の割り出し。
* 商品名だけ、種類だけ、色だけの3つのカート構成でそれぞれ計算できるようにしたこと。
* 送料の設定
* 合計金額の割り出し。
  
以上ですが、ここで問題が発生しています。

* 商品数を全て0にしても送料が0にならない問題。
* useEffectを使いまくっているがもっと良いやり方があるのか。
* __Main内の商品の一覧から、カートを削除ボタンを押してもカート内のカウンターに反映されない。__

今回質問させていただきますのは3番目の問題です。
以下のように対応しようとしましたが解決できませんでした。

```
構成はこのようになっております。

App.js ⎯⎯ Main ⎯ Product
⎿ Basket ⎯ OrderResult ⎯ CartItem ⎯ CartItem ⎯ ItemCounter
```

`App.js`にて、カートが削除されるたびに（`onRemoveCart`関数が発火するたびに）
```
App.js L12:
  const [removeCartPid, setRemoveCartPid] = useState("");
```

`removeCartPid`ステートに『`pid`（プロダクトID）』を設定して、

```
App.js L28:
setRemoveCartPid(product.pid);
```

それを`ItemCounter`までpropsで持ってきて以下の処理でカート削除に対応した欄のカウンターがリセットされるのではないかとやりましたが、カートを削除した時点で処理が終了してしまっている。

```
ItemCounter L26:
  useEffect(() => {
    // pid と removeCartPid が等しい場合に resetCount 関数を呼び出す
    if (pid === removeCartPid) {
      resetCount();
    }
  }, [pid, removeCartPid]); 
```

お忙しいところ恐れいますがご教示願います。

---
以前の質問
# 質問

お世話になります。高広です。

12 月中の制作となります案件の準備をしております。
新規 WordPress のサイトにカートのような機能をつける必要があります。（サイト上で金銭のやり取りをする機能は必要ありません。）

この機会にと、React でカート機能を作成し、build して WP に載せようと考えました。（build した React のコンポーネントを WP に載せるのは確認済みです。）

肝心の商品の個数の入力が上手くできません。

- 商品の一覧から一点選び`カートに追加`をします。
- 画面右上のカートのアイコンをクリックしてカートを表示させます。
- 商品名の右にあるプラスとマイナスのボタンのカウントアップ・ダウンで数量を入力し、合計を下段に記載するというものです。

カウントアップ・ダウンで数量を入力は、
`/src/components/Basket.js`で機能を作っております。

- 親コンポーネント => OrderResult
  - カウントする品名・種類・色いずれかにカウント数を紐づける連想配列を order という名称で state を作成。
  - 入力・計算結果を出す。
- 子コンポーネント => ItemCounter
  - 入力担当。

問題の箇所は、主に`/src/components/Basket.js`の`L161`と思われます。

品名、種類、色でそれぞれのカードの掲載内容によって右側にカウンターを設置しています。
種類と色は複数ありますので配列にしています。（`/src/data.js`）

```jsx
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [counterC, setCounterC] = useState(0);
  ...
  ...
  ...
  ...
```

それぞれのカウンターを個別に動かす必要がありますので、上記のような State を生成させたいのですが、どうしても解けません。

個別にカウンターが動かせるよう、ご教示いただきませんでしょうか？
よろしくお願いいたします。

# 変更メモ

- 脆弱性消すためにviteに変更。npm run start → npm run dev,localhost:3000 →localhost:5173
- 開発環境にsass入れてファイルのpath変えた中身はいじってない。
   - live sass compilerなしでも動く。
   - ついでにフォルダ構成軽く整理。
   - いらなくなった.vscode/settings.jsonの中身消した。

- 使ってないテストのライブラリ消した。テストを書く場合は追加で入れる必要あり下記消したやつ
   - "@testing-library/jest-dom": "^6.1.4",
   - "@testing-library/react": "^14.0.0",
   - "@testing-library/user-event": "^14.5.1",

- CartItemコンポーネント作成(カートに追加された商品をカウンターを表示)。

## 個数変わらなかった原因

引数orderとしているのに引数を渡していなかったこれではorderはundefinedになる。などetc

```sh
  setOrder(order => ({ ...order, count: order.count - 1 }));
```

order.countとして共通の値を使用していたため、どこかしらでorder.countを変化させた場合order.countを使用している場所全ての値が変わる。