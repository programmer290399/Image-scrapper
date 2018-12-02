from gid import gid
from google_images_download import google_images_download 

response = gid.googleimagesdownload()
typ = input('Enter type (d/nd):')
if typ == 'd' :


    response = google_images_download.googleimagesdownload()   
    item = input("enter the keywords :")
    arguments = {"keywords": item ,"limit":1 ,"print_urls":True}  
    paths = response.download(arguments)   
    print(paths) 

else :

    item = input("enter the keywords :")
    arguments = {"keywords": item ,"limit":2 ,"print_urls":False , 'no_download': True} 
    image_paths = response.download(arguments)
    print(image_paths)