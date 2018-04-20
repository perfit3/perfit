from django.test import TestCase
from django.core.urlresolvers import reverse

class postListTests(TestCase):
    def test_post_list_view_status_code(self):
        url = reverse('post_list')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

# Create your tests here.
