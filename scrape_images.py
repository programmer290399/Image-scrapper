import sys 
from google_images_download import google_images_download   
def scrape_images(item):
    response = google_images_download.googleimagesdownload()   
    #item = input("enter the keywords :")
    arguments = {"keywords": item ,"limit":1 ,"print_urls":True}  
    paths = response.download(arguments)   
    print(paths)  

if __name__ == "__main__":
    scrape_images(sys.argv[1])
