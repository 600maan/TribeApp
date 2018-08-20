from nltk.book import text1
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views import generic



class IndexView(generic.ListView):
    template_name = 'tribe/index.html'
    def get_queryset(self):
        return ""

class ConcordanceList(APIView):
    def get(self, request):
        result = (text1.concordance(str(request.GET.get('param'))))
        return Response(result)

    def post(self):
        pass


