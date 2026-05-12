---
layout: section
transition: slide-left
---

# 🎨 Elements パネル

---
layout: two-cols-header
layoutClass: gap-8
transition: slide-left
---

# Elements パネル

DOMとCSSをその場で確認・編集できるパネル

::header::

::left::

<img src="/images/elements-panel.png" class="rounded w-full object-contain max-h-85" />

::right::

基本的な機能はほとんどのdevが知っているはず:

<v-clicks>

- **Styles** — 選択した要素に適用されているCSSルールをすべて表示
- **Computed** — カスケード後の最終的な値を確認
- **Layout** — flexとgridのビジュアルデバッガー
- **Event Listeners** — 要素にアタッチされているJSイベントを確認

</v-clicks>

---
transition: slide-left
---

# Elements パネル — CSSのライブ編集

IDEなしでスタイルを編集する

- Stylesパネルの任意のCSS値をクリックしてインラインで編集
- パネルから直接新しいプロパティを追加
- 変更は**即座に**反映される — レイアウトや色の調整に最適

**変更をコピーする:**

- ルールを右クリック → **Copy all declarations** — そのルールのすべてのプロパティをコピー
- DOMの要素を右クリック → **Copy → Copy styles** — すべてのルールから計算済みスタイルをコピー
- ルールを右クリック → **Copy all declarations as JS** — camelCase形式、CSS-in-JSに便利

> 💡 ページ上の任意の要素を右クリック → **Inspect** でElements パネルに直接ジャンプ

---
layout: two-cols-header
layoutClass: gap-8
transition: slide-left
---

# Elements パネル — Computed タブ

カスケード後のすべてのCSSプロパティの最終的な値を確認

::header::

::left::

<img src="/images/computed-panel.png" class="rounded w-full object-contain max-h-72" />

::right::

<v-clicks>

- 選択した要素に適用されている**すべて**のCSSプロパティを表示 — 継承されたものも含む
- プロパティをクリックすると、Stylesパネルで勝っているルールにジャンプ
- プロパティ名でフィルタリングして特定の値をすばやく見つける
- **Show all** をトグルするとブラウザのデフォルトスタイルも表示

</v-clicks>

<v-click>

> 💡 継承された値のデバッグや、予期しない値がどこから来ているか追跡するのに最適

</v-click>


---
layout: two-cols-header
transition: slide-left
---

# Elements パネル — 詳細度

<div class="flex items-center gap-2">
  <span>自分のスタイルがなぜ負けているか — もう推測しなくていい</span>
  <a href="https://developer.mozilla.org/ja/docs/Web/CSS/Specificity" target="_blank">
    <simple-icons-mdnwebdocs class="size-4 m-1" />
  </a>
</div>

::header::

::left::

<SpecificityDemo />

::right::

**問題:**

```css
.ui-lib .button.primary {
  background: mediumturquoise;
}

.my-button {
  background: mediumpurple;
}
```

<v-click>

**DevToolsで確認:**

</v-click>

<v-clicks>

- Stylesパネルの任意のセレクタにホバー
- 詳細度スコア `(0,4,0)` を確認
- 負けているルールは打ち消し線で表示される

</v-clicks>

<v-click>

> 💡 <a href="https://sun-choma.github.io/febi-modern-css-26.04.15/12" target="_blank">CSSセッション</a>の `@layer`
> を覚えてる？詳細度と戦わずに済むクリーンな解決策

</v-click>

---
transition: slide-left
---

# Elements パネル — 状態の強制

実際に操作しなくてもインタラクションスタイルを確認

<div class="grid gap-8 mt-4" style="grid-template-columns: 35% 65%">
<div>
  <ForceStateDemo />
</div>
<div>

**使い方:**

<v-clicks>

- Elements パネルで任意の要素を選択
- Stylesパネルのツールバーで `:hov` をクリック
- `:hover`, `:focus`, `:active`, `:focus-within` をトグル
- 複数の状態を同時に強制できる

</v-clicks>

<v-click>

**なぜ便利か:**

</v-click>

<v-clicks>

- マウスを置き続けなくてもhoverスタイルを確認できる
- タブキーで移動しなくてもfocusスタイルをデバッグできる
- ほぼキャッチ不可能な `:active` スタイルをテストできる
- 深くネストされた要素にも使える

</v-clicks>

<v-click>

> 💡 ボタンだけでなく、あらゆる要素に使える

</v-click>

</div>
</div>