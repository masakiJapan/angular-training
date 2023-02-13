import { Component } from '@angular/core'; // コンポーネントの定義に必要なオブジェクト（モジュール）

@Component({
  // クラス定義だけだとコンポーネントとして認識されない
  // @ComponentデコレーターでAngularのコンポーネントとして定義
  selector: 'app-root', // このコンポーネントを適用すべき要素
  //templateUrl: './app.component.html', // コンポーネントに適用するビュー。template で直接htmlを記述することも出来る。
  template: `<h1>Hello {{name}}</h1><p>{{now | date:'short':'JP'}}</p>`, // {{...}} はプレースフォルダ。
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // クラス定義
  // コンポーネントの本体（データ、振る舞い）
  title = 'my-app';
  name = "(´・ω・｀)"; // ビュー変数。コンポーネントのプロパティ。
  now: string = "2023/02/12"
}
