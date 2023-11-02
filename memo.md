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