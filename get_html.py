import requests

url = 'https://cn.puzzle-galaxies.com/?size=0&show-grid=1'

content = requests.get(url).content

with open('puzzle.html', 'wb') as f:
    f.write(content)