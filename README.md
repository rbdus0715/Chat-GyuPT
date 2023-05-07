# Chat-GyuPT
---------
## 챗봇 소개
이 챗봇은 간단한 1개 턴 대화르 주고받을 수 있는 모델로 chat-gpt보다는 당연히 간단한 기능만을 수행합니다. 오히려 엉뚱한 대답을 할 때도 있습니다. 그래도 말을 툭툭 내뱉어내기 때문에 다음 대답에서 어떤 대답이 나올지 궁금해지기 합니다. 종종 시크하게 대답하기도 합니다.

## 프로젝트 제작 과정
[blog](https://blog.naver.com/rbdus0715/223035045404)

## 챗봇 실행 코드
- 저는 miniforge3 환경으로 실행했습니다.
```
# github repository 복사
git clone https://github.com/rbdus0715/Chat-GyuPT

# window 사용자라면 tensorflow 관련 패키지는 전부 window 용으로 설치하기를 바랍니다.
pip install -r requirements.txt

# nlp 모델 학습된 weight 불러오기
python train.py

# django 서버 실행 코드
python manage.py runserver
```

## 로컬 배포 방법 (localtunnel) ->> 테스트 서버로 활용
```
# localtunnel 글로벌 설치
npm install -g localtunnel

# 서버 실행
lt --port [포트 번호 : 8000] --local-host localhost --subdomain [서브 도메인 이름]
```

