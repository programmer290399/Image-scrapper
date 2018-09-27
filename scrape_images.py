from google_images_download import google_images_download   

response = google_images_download.googleimagesdownload()   
item = input("enter the keywords :")
arguments = {"keywords": item ,"limit":1 ,"print_urls":True}  
paths = response.download(arguments)   
print(paths)   