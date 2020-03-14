"use strict";
// export function test(arg: any) {
//   return arg
// }
// strictNullChecks
// 書籍には以下のように記述するとコンパイルエラーが起こると書いてあるが、
// tsc Version 3.8.3 では any型に推論される。
// tsconfig.jsonファイル内の設定("strictNullChecks": true)を変更しても同様の挙動。
// let nullAble = null
// nullAble = 'string'
// export function test1() {
//     return 'test1'
// }
// export function test2() {
//     return { value: 'test2' }
// }
// import { sampleText, sampleFunction } from './sample'
// const a = sampleFunction()
// const b = sampleText
