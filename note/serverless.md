## serverless

## prisma
- node.js, typescript orm
- orm: object relational mapping
- 타입스크립트만을 이용하여 데이터베이스 접근, 오류를 줄이는 데 도움이 됨
- 스키마 작성 - client 생성 - client 통해서 접근
  - `prisma.users.create({firstName: 'hi'})`
- 스키마에서 자동완성 지원
- prisma studio

### 튜토리얼
- `npx prisma init`
  - 초기세팅
    - .env에서 DATABASE_URL 설정 필요
    - `schema.prisma`에서 데이터소스의 프로바이더(MongoDB, MySQL 등) 설정


## prisma planet scale