// 設定を変更した時はサーバーを再起動しないと変更されない

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // APIのリクエスト先を環境によって変更する場合に、ここで環境変数を設定する
    // 参考：https://miyahara.hikaru.dev/posts/20200306/
    server: "http://localhost:3000"
  }
}

module.exports = nextConfig
