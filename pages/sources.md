---
layout: section
transition: slide-left
---

# 🔍 Sources パネル

---
layout: two-cols-header
layoutClass: gap-8
transition: slide-left
---

# Sources パネル

JavaScriptのデバッグとプロジェクトファイルの確認に使うパネル

::header::

::left::

<img src="/images/sources-panel.png" class="rounded w-full object-contain max-h-85" />

::right::

<v-click>

**主な機能:**

</v-click>

<v-clicks>

- **Page** — ページが読み込んだすべてのファイルを閲覧
- **Workspace** — ローカルファイルをDevToolsに接続
- **Overrides** — リロードをまたいで変更を保持
- **Snippets** — JSスニペットを保存していつでも実行
- **Sources editor** — DevTools上でファイルを直接表示・編集
- **Debugger** — ブレークポイント設定、コードのステップ実行、コールスタックの確認

</v-clicks>

---
layout: two-cols-header
transition: slide-left
---

# Sources パネル — ブレークポイント

任意の行で実行を一時停止して、現在の状態を確認する

::header::

::left::

<v-click>

**ブレークポイントの設定方法:**

</v-click>

<v-clicks>

- `Cmd+P` でファイルを検索 `BreakpointDemo.vue`
- 行番号をクリック — 青いマーカーが表示される
- 操作する — その行で実行が一時停止する
- 右パネルで変数とスコープを確認

</v-clicks>

<v-click>

**一時停止中:**

</v-click>

<v-clicks>

- `F8` — 実行を再開
- `F10` — ステップオーバー
- `F11` — 関数にステップイン

</v-clicks>

<v-click>

> 💡 `Cmd+F` で現在のファイル内を検索

</v-click>

::right::

<BreakpointDemo />

---
layout: two-cols-header
layoutClass: gap-8
transition: slide-left
---

# Sources パネル — 条件付きブレークポイント

特定の条件を満たしたときだけ一時停止する

::header::

::left::

<v-clicks>

- `ConditionalBreakpointDemo.vue` を開く
- 行番号を右クリック → **Add conditional breakpoint**
- 任意のJS式を入力 — `true` のときだけ一時停止
- 多数のアイテムの中から特定のものを見つけるのに最適
- 通常のブレークポイントとは区別されるオレンジのマーカーが表示される

</v-clicks>

<v-click>

> 💡 `user.email === 'tanaka@example.com'` — 問題のあるユーザーに直接ジャンプ

</v-click>

::right::

<ConditionalBreakpointDemo />

---
layout: two-cols-header
layoutClass: gap-8
transition: slide-left
---

# Sources パネル — ログポイント

実行を止めずに値をログ出力 — 頻繁に発火するイベントに最適

<a href="https://stackfull.dev/implementing-virtual-scroll-for-web-from-scratch-in-less-than-150-lines-of-code" target="_blank" class="text-sm opacity-50 hover:opacity-100 transition-opacity mt-2">
📄 バーチャルスクロールの解説
</a>

::header::

::left::

<div class="text-sm">

<v-click>

**使い方:**

</v-click>

<v-clicks>

- `LogpointDemo.vue` を開く
- 行番号を右クリック → **Add logpoint**
- 任意のJS式を入力 — 実行を止めずにコンソールへ出力
- `console.log` と違い — ソースコードの変更不要
- 止めると困る処理に最適 — スクロール、アニメーション、WebSocket

</v-clicks>

<v-click>

**試してみよう:**

```js
`scroll: ${scrollPosition}px | visible: ${start} → ${end}`
```

</v-click>

<v-click>

> 💡 ログポイントはページリロードしても残る — `console.log` と違いソースを汚さない

</v-click>

</div>

::right::

<LogpointDemo />

---
layout: two-cols-header
layoutClass: gap-8
transition: slide-left
---

# Sources パネル — コールスタック

エラーが発生した場所ではなく、根本原因までさかのぼる

::header::

::left::

<div class="text-base">

<v-clicks>

- コンソールのエラーリンクをクリック — throwされた場所に直接ジャンプ
- エラーは `formatPrice` でthrowされる — でもそこがバグではない
- コールスタックに関数呼び出しの全チェーンが表示される
- フレームをクリックするとそのコンテキストにジャンプして変数を確認できる
- 根本原因はエラーが発生した場所より数フレーム上にあることが多い

</v-clicks>


<v-click>

> 💡 数フレーム上を必ず確認しよう — エラーの場所にバグがあることはほとんどない

</v-click>

</div>

::right::

<CallStackDemo />