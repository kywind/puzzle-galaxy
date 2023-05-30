from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

url = 'https://cn.puzzle-galaxies.com/?size=0'
driver = webdriver.Chrome()
driver.get(url)


# assert "Python" in driver.title
elem = driver.find_element(By.NAME, "robot")
elem.send_keys("value", "1")
import ipdb; ipdb.set_trace()
# elem.get_attribute("value")
# elem.clear()
# elem.send_keys("pycon")
# elem.send_keys(Keys.RETURN)
# assert "No results found." not in driver.page_source

html = driver.execute_script("return document.documentElement.outerHTML")
with open('sel.html', 'w') as f:
    f.write(html)

driver.close()