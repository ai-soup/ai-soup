# SOUP - 여행 정보 플랫폼 개발사

[![Deploy to GitHub Pages](https://github.com/ai-soup/ai-soup/actions/workflows/deploy.yml/badge.svg)](https://github.com/ai-soup/ai-soup/actions/workflows/deploy.yml)

스마트한 여행을 위한 혁신적인 솔루션을 제공하는 SOUP의 공식 웹사이트입니다.

## 🌐 Live Site

**🔗 [https://studyproject.kr](https://studyproject.kr)**

이 사이트는 GitHub Actions를 통해 자동으로 빌드되고 GitHub Pages에 배포됩니다.

## 🚀 Deployment

### 자동 배포

- **배포 방식**: GitHub Actions (`.github/workflows/deploy.yml`)
- **트리거**: `main` 브랜치에 푸시 시 자동 배포
- **호스팅**: GitHub Pages
- **도메인**: studyproject.kr (커스텀 도메인)
- **SSL**: Let's Encrypt (자동 갱신)

### 배포 프로세스

1. `main` 브랜치에 코드 푸시
2. GitHub Actions가 자동으로 워크플로우 실행
3. Next.js 앱을 정적 HTML로 빌드 (`npm run export`)
4. 빌드된 파일을 GitHub Pages에 배포
5. 약 2-3분 후 [studyproject.kr](https://studyproject.kr)에 반영

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Geist (via next/font)
- **Deployment**: GitHub Pages + GitHub Actions
- **Build**: Static Site Generation (SSG)

## 💻 Development

### 개발 서버 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 프로덕션 빌드 테스트

```bash
# GitHub Pages용 정적 빌드
npm run export

# 빌드 결과 로컬 서버로 확인
npx serve out
```

### 주요 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run export` - GitHub Pages용 정적 빌드
- `npm run lint` - ESLint 실행

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   ├── globals.css     # 글로벌 스타일
│   └── favicon.ico
├── public/             # 정적 에셋
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions 워크플로우
├── next.config.ts      # Next.js 설정
└── package.json
```

## 🔧 Configuration

### Next.js 설정 (next.config.ts)

```typescript
{
  output: 'export',              // 정적 HTML 생성
  images: { unoptimized: true }, // 이미지 최적화 비활성화
  trailingSlash: true,           // 후행 슬래시 추가
}
```

### GitHub Pages 설정

- **Source**: GitHub Actions
- **Custom domain**: studyproject.kr
- **HTTPS**: Enforce HTTPS 활성화

## 📚 Learn More

Next.js에 대해 더 알아보기:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js 기능 및 API
- [Learn Next.js](https://nextjs.org/learn) - 인터랙티브 튜토리얼

## 📝 License

Copyright © 2025 SOUP. All rights reserved.
