from django.shortcuts import render

# 기본 페이지
def index(request):
    context = {}
    return render(request, 'chatbot/index.html', context)


# Let's Start 버튼 >> 챗봇 실행 >> 챗봇페이지
def chat(request):
    
    context = {}
    return render(request, 'chatbot/chat.html', context)