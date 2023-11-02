# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### 質問いたします。

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
