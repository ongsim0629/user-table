![image](https://github.com/user-attachments/assets/65f9b64e-5cda-476e-b820-16e2e8172e69)# 🧩 프로젝트 개요

### 회원 정보를 관리하는 Single Page Application

회원 추가, 수정 기능을 모달 기반으로 제공하며, 데이터는 상태 및 저장소와 연동되어 관리됩니다.

- 페이지 이동 없이 인터랙션이 이루어지는 **SPA 구조**로 구현되어 있어 사용자 경험이 자연스럽고 빠릅니다.
- 회원 목록은 테이블 형태로 표시되며, 각 항목은 모달을 통해 바로 수정할 수 있습니다.
- 회원 등록 시 날짜 선택(DatePicker)와 필드 동적 생성, 저장소 선택(local vs. in-memory) 등 기능을 제공합니다.
  
[확인해보기✨](https://ongsim-table.vercel.app/) → `배포 링크는 로컬 스토리지 기반입니다.`

# 📐 폴더 구조 설계 - FSD 기반

### 폴더 구조는 FSD (Feature-Sliced Design)에 기반한 구조로 구성되어 있습니다.

기능 중심으로 모듈을 구분하고, 각 기능 하위에 상태, 훅, 모델, 유틸 등 관련 파일들을 함께 배치했습니다.

```
src/
├─ features/            
│  └─ members/          회원 관리 관련 로직 전부 포함
│     ├─ atoms/         Jotai 기반 상태
│     ├─ hooks/         커스텀 훅
│     ├─ models/        필드 모델 정의
│     ├─ utils/         필드, 필터, 초기값 생성 유틸
├─ services/            추상화된 서비스 계층
│  └─ storage/          저장소 관련
├─ shared/              재사용 가능한 공통 요소
│  ├─ components/       UI 컴포넌트 (DatePicker, Modal 등)
│  ├─ constants/        정적 데이터 (필드 정의, 직업 등)
│  ├─ styles/           테마, 디자인 토큰
├─ App.tsx              
├─ main.tsx           
```

# 🛠 기술 스택

| 분류 | 스택 |
| --- | --- |
| **언어** | TypeScript |
| **프레임워크** | React |
| **스타일** | Ant Design |
| **상태 관리** | Jotai |
| **날짜 처리** | dayjs |
| **빌드 도구** | Vite |
| **기타** | ESLint, Prettier |

🍀 Vite

- **HMR**을 이용해 짧은 시간 내에 기능을 빠르게 구현할 수 있었습니다.
- **index.html을 엔트리 포인트로 사용하는 구조**로, SPA에 적합한 개발 환경을 제공합니다.
- **Vercel을 통한 간편한 배포**까지가 목표였기 때문에, 최적화된 **배포 빌드 생성** 측면에서도 Vite가 유리했습니다.

🍀 Jotai

- 프로젝트 규모가 크지 않고 전역 상태가 단순했기 때문에, **단일 atom만으로도 충분히 상태 관리가 가능했습니다.**
- 회원 목록 상태는 Table, Modal, Storage 등 **여러 컴포넌트에서 공유되기 때문에**,
    
    **복잡한 Context 설정 없이도 간결하게 상태를 관리할 수 있는 Jotai가 적합했습니다.**
    

🍀 dayjs 

- 초기에는 기본 JavaScript **Date** 객체를 사용했지만, 날짜 포맷, 비교, 조작 등을 **매번 수동으로 처리해야 해 코드가 점점 복잡해졌습니다.**
    
    특히 날짜를 `YYYY-MM-DD` 형식으로 포맷하는 작업이 반복되면서, **전용 라이브러리의 필요성**을 느꼈습니다.
    
- Ant Design v5부터는 내부적으로 **dayjs가 기본 지원**되기 때문에, DatePicker와 로직 간의 **호환성도 뛰어나고 적용도 자연스러웠습니다.**

# ⚙️ 설치 방법

```bash
# 1. 저장소 클론
git clone https://github.com/ongsim0629/user-table.git

# 2. 프로젝트 폴더로 이동
cd user-table

# 3. 의존성 설치
npm install
```

# 🚀 시작 명령어

```bash
# 개발 서버 실행
npm run dev
```

Vite 개발 서버가 실행되고, `http://localhost:5173`에서 앱을 확인할 수 있습니다.

# 🔐 환경 변수 설정

프로젝트는 저장소 방식을 설정하기 위한 환경 변수를 사용합니다.

`.env` 파일 예시:

```
# 또는 in-memory
VITE_STORAGE_TYPE=local-storage
```

# 🌳 주요 기능 설명

| 기능 | 설명 |
| --- | --- |
| 회원 추가 | 상단 "+ 추가" 버튼 클릭 → 모달에서 이름, 주소, 날짜 등 입력 후 저장 |
| 회원 수정 | 테이블 항목 클릭 → 기존 정보가 채워진 모달에서 수정 후 저장 |
| 회원 삭제 | 항목 선택 후 우측 하단 "삭제" 버튼 클릭 |
| 날짜 선택 | Ant Design의 DatePicker로 날짜 선택 (기본 포맷: YYYY-MM-DD) |
| 저장소 선택 | `.env`를 통해 localStorage 또는 memory 저장 방식 선택 가능 |
| 필터 기능 | 조건 필터를 이용해서 필드 별로 필터링 가능 |

# 📸 화면 미리보기

### 1. 초기 화면
![image](https://github.com/user-attachments/assets/fc8af2e4-23b9-47b7-a16c-0c2670392712)

### 2. 회원 추가
![image](https://github.com/user-attachments/assets/8665a5c7-2874-4d8c-838f-917faca59019)
![image](https://github.com/user-attachments/assets/4df4a0ab-60be-4a80-9b2c-b914e90666c8)
![image](https://github.com/user-attachments/assets/9d5e195d-5f64-4254-86d6-c852fce0854e)

### 3. 회원 수정
![image](https://github.com/user-attachments/assets/0f8f439b-1852-4469-b170-f2db86567088)
![image](https://github.com/user-attachments/assets/889f745b-65b2-4208-881c-9fd169fbbd47)
![image](https://github.com/user-attachments/assets/62c9c29c-dd20-425d-9771-e83a42c9b413)

### 4. 회원 삭제
![image](https://github.com/user-attachments/assets/e7e258bc-8560-4793-a44a-a493425444bf)
![image](https://github.com/user-attachments/assets/f6785ef4-e66b-4cc1-9ff0-d8df1db2f88d)
![image](https://github.com/user-attachments/assets/5b620747-0c82-4df8-8dd1-2e02913cce70)

### 5. 필터
![image](https://github.com/user-attachments/assets/94e10baa-0685-4de2-91e6-84c36d502fb2)
![image](https://github.com/user-attachments/assets/5abc1daa-611b-491b-8de1-7498f4fac443)

