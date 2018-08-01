import urllib.request
import urllib.parse
data = {}
data['temp'] = 36
data['hum'] = 42
data['pr'] = 1341
url_values = urllib.parse.urlencode(data)
print(url_values)  # The order may differ from below.  
url = 'http://tbniot.000webhostapp.com/add_data.php'
full_url = url + '?' + url_values
data = urllib.request.urlopen(full_url)

#urllib.request.urlopen("http://tbniot.000webhostapp.com/add_data.php?temp=35&hum=44&pr=1325")
