---
layout: section
transition: slide-left
---

# 🌐 Network & Performance

---
layout: two-cols-header
layoutClass: gap-2
transition: slide-left
---

# Network パネル
ページのすべてのネットワーク通信を監視・制御する

::header::

::left::

<img src="/images/network-panel.png" class="rounded w-full object-contain max-h-85" />

::right::

<div class="text-base">

<v-click>

基本的な機能はほとんどのdevが知っているはず:

</v-click>

<v-clicks>

- リクエスト/レスポンスのヘッダーとボディを確認
- タイプでフィルタリング — XHR、JS、CSS、画像
- リクエストごとのタイミングの内訳を確認

</v-clicks>

<v-click>

**💡 Tip — DevToolsを開いている間はキャッシュを無効化:**

</v-click>

<v-clicks>

- Networkパネルのツールバーで **Disable cache** をチェック
- キャッシュされたレスポンスが実際のネットワーク動作を隠すのを防ぐ
- DevToolsを開いている間だけ有効 — 永続的な副作用なし

</v-clicks>

<v-click>

> 初回ロードのパフォーマンステストやキャッシュ関連の問題に必須

</v-click>

</div>

---
layout: two-cols-header
layoutClass: gap-8
transition: slide-left
---

# Network パネル — スロットリング
遅い接続を再現して、ローディング状態の欠如を発見する

::header::

::left::

<div class="text-base">

<v-clicks>

- Networkパネル → **No throttling** ドロップダウンをクリック
- **Slow 3G** または **Fast 3G** を選択
- ページを操作する — 遅いリクエストがローディング状態の欠如を露わにする

</v-clicks>

<v-click>

**この例では:**

</v-click>

<v-clicks>

- 速い接続ではページネーションが一瞬で切り替わる
- スロットリング下では — コンテンツが変わらないままになる
- ローディング表示なし — ユーザーは同じリストを見続ける

</v-clicks>

</div>

::right::

<ThrottleDemo />

---
transition: slide-left
---

# Network パネル — リクエストブロッキング
バックエンドに触れずに、リクエスト失敗時の挙動をテストする

<div class="grid gap-8 mt-4" style="grid-template-columns: 60% 40%">
<div>

<v-clicks>

- Networkパネル → リクエストを右クリック → **Block request URL**
- または **Network request blocking** パネルを開いてルールを管理
- リロードまたは再試行 — ブロックされたリクエストはすぐに失敗する
- ブロック解除して再試行 — 正常に復帰することを確認

</v-clicks>

<v-click>

**この例では:**

</v-click>

<v-clicks>

- `jsonplaceholder.typicode.com` をブロック — エラー状態が表示される
- **Refetch** を押す — まだブロック中、エラーが続く
- ブロック解除 → **Refetch** — データが正常に読み込まれる

</v-clicks>

<v-click>

> 💡 ユーザーが本番で発見する前に、エラー状態をテストしておこう

</v-click>

</div>
<div>

<BlockingDemo />

</div>
</div>

---
layout: two-cols-header
layoutClass: gap-8
transition: slide-left
---

# Network パネル — パターンブロッキング
URLパターンを使って複数のリクエストを一括でブロックする

::header::

::left::

<v-clicks>

- **Network request blocking** パネル → パターンを追加
- ワイルドカード対応 — `*/todos*` でtodo関連のリクエストをすべてブロック
- 他のリクエストは通常通り動作する
- 部分的な障害のテストや依存関係の切り離しに最適

</v-clicks>

<v-click>

> 💡 ドメインでサードパーティスクリプトをブロック — `*.analytics.com` でトラッキングなしのテスト

</v-click>

::right::

<PatternBlockingDemo />

---
transition: slide-left
---

# Performance パネル — CPUスロットリング
開発機では見えないパフォーマンス問題を、低スペックデバイスを再現して発見する

<v-clicks>

- Performance パネル → ⚙️ をクリック → **CPU throttling** を設定（4x または 6x スローダウン）
- 自分のマシンがミドルレンジのAndroidスマホのように動作する
- 速いハードウェアでは見えないタイミング依存のバグが現れる

</v-clicks>

<v-click>

**この例で試してみよう:**
<a href="https://react.dev/reference/react/useLayoutEffect#examples" target="_blank" class="flex items-center gap-2 mt-1 w-[10rem]">
📄 useLayoutEffect
</a>

</v-click>

<v-clicks>

1. CPUスロットルを有効にする
2. リンクを開いて `useEffect` タブをクリック
3. ツールチップにホバーする
4. 再配置前のちらつきに注目 — `useEffect` はペイント後に実行される

</v-clicks>

<v-click>

> 💡 `useLayoutEffect` はペイント前に同期的に実行される — ちらつきをなくせる

</v-click>