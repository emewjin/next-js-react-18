## serverless

서버가 없다 (X) 서버를 유지하고 관리할 필요가 없다 (O)

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

> The MySQL-compatible(Vitess) serverless database platform

- git을 쓰는 것 같은 cli가 매우 잘 되어 있음 (우수한 DX)
  - 수정 작업을 할 때 브랜치를 따서 진행 후, 정상 동작을 확인한 후 자동 배포 (병합) 가능
- mySQL을 직접 설치하거나, 디비를 로컬 환경용 / planet scale 용을 따로 두어 관리하지 않아도 됨
- 암호를 관리하지 않아도 됨. 암호 없이 secure tunnel로 planetScale 사이의 보안 연결을 만들어낼 수 있음 (`pscale connect`)

Vitess

- DB를 잘게 쪼개 분산하는 데 특화
- 따라서,foreign key constraint를 지원하지 않으므로 개발자의 주의가 필요.
- 근데 그러면 넘 빡세니까 [prisma가 확인을 하게끔 설정](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/referential-integrity)한다.

  ```
  generator client {
  provider = "prisma-client-js"
  previewFeatures = ["referentialIntegrity"]
  }

  datasource db {
  provider = "mysql"
  url = env("DATABASE_URL")
  referentialIntegrity = "prisma"
  }
  ```

prisma studio

- 관리자 패널
- 직접 로우를 만들 수 있는 등 유용한 GUI 툴

PrismaClient

- 당연하지만 브라우저에서는 실행이 불가능하다
