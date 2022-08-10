<p align="center">
<a href="https://winds-n.com">
<img width="128" alt="hr" src="https://user-images.githubusercontent.com/25874594/183895578-c757c311-f326-422f-bff4-79ff40e4087a.png">
</a>
</p>

<p align="center">
<a href="https://app.netlify.com/sites/winds-nagaoka/deploys">
<img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/6fada799-5d67-41b7-a1b3-c227db736670/deploy-status">
</a>
</p>

# Webサイト(beta)

## 概要

新潟県長岡市で活動する吹奏楽団、ザ・ウィンド・アンサンブルのWebサイトです  
Next.js + microCMSで、Netlifyにデプロイする構成になっています

## 開発

microCMSのtokenが必要です  
`.env`ファイルを用意し、以下の設定を行なってください

```
NEXT_SECRET_MICROCMS_TOKEN=***
NEXT_MICROCMS_SERVICE_DOMAIN=winds
MAIL_PASS=***
MAIL_USER=***@example.com
MAIL_FROM=***@example.com
```

#### 開発

```
yarn install
yarn dev
```