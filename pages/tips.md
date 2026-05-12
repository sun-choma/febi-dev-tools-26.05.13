---
layout: section
transition: slide-left
---

# 💡 Tips

---
layout: two-cols-header
layoutClass: gap-8
transition: slide-left
---

# Tips — コマンドメニュー
VS Code風のコマンドパレット — 意外と知られていない

::header::

::left::

<v-clicks>

- `Cmd+Shift+P` (Mac) / `Ctrl+Shift+P` (Windows) — コマンドメニューを開く
- DevToolsの機能を名前で検索
- UIのどこにあるか覚えなくていい

</v-clicks>

<v-click>

**よく使うコマンド:**

</v-click>

<v-clicks>

- `Capture screenshot` — ページ全体またはビューポートのスクリーンショット
- `Dark/Light scheme` — カラースキームの切り替え
- `Tab Name` — 特定のタブを開く

</v-clicks>

::right::

<img src="/images/command-menu.png" class="rounded w-full object-contain max-h-72" />

---
layout: two-cols-header
layoutClass: gap-2
transition: slide-left
---

# Tips — Copy as Fetch
ネットワークリクエストをそのまま再現 — 手動設定不要

::header::

::left::

<img src="/images/copy-as-fetch.png" class="rounded w-full object-contain max-h-85" />

::right::

<v-clicks>

- Networkパネル → リクエストを右クリック → **Copy → Copy as fetch**
- すぐ実行できる `fetch()` 呼び出しがクリップボードにコピーされる
- ヘッダー、Cookie、リクエストボディもすべて含まれる

</v-clicks>

<v-click>

**こんな時に便利:**

</v-click>

<v-clicks>

- バックエンドdevと正確なリクエストを共有するとき
- UIを操作せずにAPIのレスポンスをテストするとき
- エッジケースをデバッグするためにリクエストパラメータを調整するとき

</v-clicks>

---
transition: slide-left
---

# Tips — コンソールのショートカット
知らないと損するエイリアスたち

<v-clicks>

- **`$0`** — Elementsパネルで現在選択している要素を参照 — 確認のためだけに `document.getElementById` を書かなくていい
- **`$(selector)`** — `document.querySelector()` の短縮形
- **`$$(selector)`** — `document.querySelectorAll()` の短縮形だが配列を返す — `.map()` や `.filter()` がそのまま使える
- **`document.designMode = 'on'`** — ページ全体を編集可能にする — テキストのちょっとした確認に便利

</v-clicks>

<v-click>

> 💡 これらはDevTools専用 — `$()` と `$$()` はソースコードでは使えない（jQueryがない限り）

</v-click>

---
transition: slide-left
---

# Tips — グローバル検索
読み込まれたすべてのファイルを横断検索 — 難読化された本番コードでも使える

<div class="grid gap-8 mt-4" style="grid-template-columns: 45% 55%">
<div class="text-base">

<v-clicks>

- `Cmd+Opt+F` / `Ctrl+Shift+F` — グローバル検索ドロワーを開く
- JS、CSS、HTMLを含むすべての読み込み済みリソースを検索
- 正規表現と大文字小文字を区別した検索に対応

</v-clicks>

<v-click>

**本番デバッグのテクニック:**

</v-click>

<v-clicks>

- ソースマップなし、ファイル名も意味不明な難読化されたチャンク
- 変数名は短縮されている — でも**文字列リテラルは短縮されない**
- エラーメッセージで検索 → 対象のファイルに直接ジャンプ
- そこにブレークポイントを置いてデバッグ開始

</v-clicks>

</div>
<div>
  <iframe
    src="/global-search-demo/index.html"
    class="w-full rounded"
    style="height: 320px; border: 1px solid #6272a4;"
  />
</div>
</div>