# 

## 初回起動
下記のコマンドを実行すると、forntend, backend, db(mysql), phpmyadminの環境が立ち上がる。

```bash
# backend(nest.js)のnode moduelsをインストール
docker compose run frontend npm install --prefix ./app-frontend
# frontend(react)のnode moduelsをインストール
docker compose run backend npm install --prefix ./app-frontend
# dockerをbuild & upする
docker-compose build --no-cache && docker-compose up -d
```

### backend
接続先：http://localhost:3000/

### frontend
接続先：http://localhost:8000/