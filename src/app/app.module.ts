// ルートモジュール：起動時に呼び出されるモジュール ≒ メインモジュール 

// import でオブジェクト()をインポートする。
// import {name, ...} from module の構文。モジュールの実態は TypeScript。
import { NgModule } from '@angular/core'; // モジュールを定義するために必要なモジュール。@NgModuleで使う。@angular は angular の標準モジュール。
import { BrowserModule } from '@angular/platform-browser'; // アプリをブラウザで動作させるために必要なモジュール。

import { AppComponent } from './app.component'; // アプリを構成するコンポーネント。
import { XyzComponent } from './xyz/xyz.component';

@NgModule({ // @NgModuleデコレーター
  declarations: [
    // このモジュールで使うコンポーネント。コンポーネント＝ページを構成するUI部品。
    AppComponent, // パラメータ名
    XyzComponent
  ],
  imports: [
    // このモジュールで使う他のモジュール
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 最上位のコンポーネントを指定
})
export class AppModule { }
