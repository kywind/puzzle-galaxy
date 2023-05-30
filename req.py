
# 导入 requests 库
import requests
from bs4 import BeautifulSoup

# 登录 URL 和登录信息 URL
# url = 'https://example.com/login'
# login_url = 'https://example.com/login/customer'

url = 'https://cn.puzzle-galaxies.com/?size=0'

# 参数 GET 和 POST 请求传入登录信息
# payload = {
#     'email': 'user@example.com',
#     'password': 'password'
# }

# 创建请求会话
session = requests.Session().get(url)

import ipdb; ipdb.set_trace()

# 向表单 URL 发送 GET 请求来提取 CSRF 令牌
# login_page = session.get(url)
# csrf_token = BeautifulSoup(login_page.content).find(attrs={'name': '_csrf_token'}).get('value')

# 在请求池中存储请求的 CSRF 令牌e
# login_form = {'email': user, 'password': password, '_csrf_token': csrf_token, '_submit': True}
# session.post(login_url, data=login_form)