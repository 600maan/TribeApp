from django.db import models
from django.conf import settings
from rest_framework.reverse import reverse as api_reverse





class Concordance(models.Model):
    search_word = models.CharField(max_length=50)
    concord = models.CharField(max_length=250)

    def __str__(self):
        return self.search_word


class Corpus(models.Model):
    corpus_name = models.CharField(max_length=250)
    corpus_type= models.CharField(max_length=250)
    corpus_file = models.FileField()

    def __str__(self):
        return self.corpus_name