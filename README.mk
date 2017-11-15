promise-weapp
============================
将小程序api包装成成Promise形式, 可使用tslang中的await/async关键字

## 原始api的声明文件
`we-app.d.ts`源自https://github.com/Emeryao/typed-we-app 进行了拆分, 符合ts(v2.4)的strict检查,

## 用Promise包装需要的api
wx.request 等需要包装,  wx.stopRecord则不需要包装

## 提供util实现一些简单无依赖的工具
