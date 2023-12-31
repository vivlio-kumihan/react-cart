## test git

## ユーザーが授与品ページに訪れてから商品代金を入金するまでの流れ
1. 商品一覧ページで購入したい商品の個数入力し選択する。
    * 『詳細を見る』ボタンを押してリンクされた商品紹介ページを確認することができる。
    * 個数を入力することで『リストに追加』ボタンがアクティブになるようにする。（商品を選択したことを認知させる。）
1. 画面右上のリストのボタンを押して、購入候補の商品と合計金額を確認する表示と注文フォームを表示する。

#### 案1
1. 必要事項を入力後、印刷ボタンを押して、画面に表示されている内容をA4でプリントアウトする。（案1で、実装しなければいけない作業としては**ココ**まで。）
1. 商品代金を郵便局で振り込み後、郵便振込用紙のコピーをプリントアウトした用紙に貼り付け神社へFAXを送る。

#### 案2
1. 必要事項を入力後、送信ボタンを押して、注文内容が記載されたメールを神社からの送信として受け取る。（案2で、実装しなければいけない作業としては**ココ**まで。）
    * 記載内容は、
       * フォームで入寮した氏名、住所、メールアドレス、電話番号
       * 振込情報
1. メールに記載された振込情報をもとに商品代金を郵便局で振り込みをする。
1. 郵便振込用紙をスマートフォンで写真撮影し、神社から送られたメールに添付し返信する。

## 出来ていること
* 商品の個数を入力して、『リストに追加』するボタンを押したら『リスト』に商品名と注文個数を記録する。
* 『リスト』で記録された個数をもとに消費税・送料を含めた合計金額を算出する。
* 『商品一覧』で注文数を変更するのに合わせて『リスト』の合計金額を変更する。
* 『商品一覧』で『リストから削除』ボタンを押すと『リスト』内の合計金額を削除した商品金額に合わせて減額する。

## 課題
### カート機能
1. 『商品一覧』で『リストから削除』ボタンを押して『リスト』内の該当商品を削除する。
    * この動作に合わせて『リストから削除』が『リストに追加』に切り替わり、ボタン操作ができないデフォルトの状態に戻す。
1. 『リスト』に追加していた商品について『商品一覧』での注文数を0にすると『リスト』から該当商品を削除させる。また、この動作に合わせて『リストから削除』が『リストに追加』に切り替わり、ボタン操作ができないデフォルトの状態に戻す。
1. 『商品一覧』で商品の個数を入力するまで『リストに追加』ボタンは操作できないようにする。
1. 一覧での商品の状態が視覚的にわかるように右上の一覧ボタンの表示の仕方を工夫する。

### 全体
1. 注文が確定したリストの内容（注文の状態、フォームの入力値）を購入者へメールで送信する。
1. このカートのアプリケーションをビルドしてWordPressに固定ページとして載せる。
1. 画面をプリントアウトする。

## 進行
#### 11月24日（金）までに完了すべき事柄
* 全体 > 2
* 全体 > 3

#### 12月1日（金）までに完了すべき事柄
* 課題 > カート機能 1

#### 12月8日（金）までに完了すべき事柄
* 全体 > 1

#### 12月15日（金）〜12月22日（金）までに完了すべき事柄
* 課題 > カート機能 2, 3, 4

---
以上を踏まえまして、

* `全体 > 2`につきましては、viteを使わないことも視野に入れて、メールでの指示、または、画面共有で作業をさせていただき解決できる内容ということでしたら、この日程でお願いしたいと存じます。難しいようでしたら12月1日（金）までにお願いできたらと考えております。
* `全体 > 3`につきましては、当方で解決いたします。
* ご教示をお願いしたいのは、『`課題 > カート機能 1`』『`全体 > 1`』です。
* 『`課題 > カート機能 2, 3, 4`』は、自力で解決したいですが、どうしようもない場合は質問させていただくことになると存じます。

『`全体 > 1`』につきまして、難易度はそれほど高くなく、LeapInの皆様がよくお使いのライブラリを紹介していただき、まずは自力でやってみるというのも一つの手立てであると考えております。

#
#
#
#
#
#
#
#
#
#
#
#
---
以前の質問

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