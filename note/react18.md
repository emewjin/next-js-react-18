사용시 next.config.js에 아래와 같은 설정을 꼭 해주어야 함.
그렇지 않으면 TypeError: Cannot set properties of undefined (setting 'reactRoot') 라는 에러를 보게 된다.
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  }
}

module.exports = nextConfig

```