# as-playground-chrome-extension

[as-playground](https://github.com/arisucool/as-playground/) for Chrome

---

## できること

できることは、[as-playground](https://github.com/arisucool/as-playground/) を通常通りにブックマークレットで使用する場合とほぼ同じです。

但し、ブックマークレットと違い、アソビステージのページを開くだけで自動的に as-playground が実行できるため、少し便利です。

---

## 開発の初め方

必要なソフトウェア:

- Git
- Google Chrome または Chromium
- Node.js 14+
- Visual Studio Code

### 1. ソースコードの取得

```
$ git clone git@github.com:arisucool/as-playground-chrome-extension.git

$ npm install
```

### 2. Webpack によるビルドを実行

```
$ npm run watch
```

### 3. Google Chrome へ拡張機能を登録

1. Google Chrome の拡張機能の管理画面を開きます。
2. "デベロッパー モード" をオンにします。
3. "パッケージ化されていない拡張機能を読み込む" をクリックします。
4. プロジェクトディレクトリを選択します。

### 4. 完了

ソースコードを更新するたびにビルドは再実行されます。
拡張機能を再読込するときは、拡張機能の管理画面で "as-playground" の更新ボタンを押してください。
