# intitialize library
import re
import csv
import pandas as pd
from bs4 import BeautifulSoup

def search(myDict, search1):
    search.a=[]
    for key, value in myDict.items():
        if search1 in value:
            search.a.append(key)
    return len(search.a)
            
def search_query(searchQ):
    final = []
    search_innertext= []
    search_attribute = []
    search_button_attribute_value = 0
    classSearch = 0
    count = 0
    is_button = []
    searched_word = "search"
    noWord = 0
    myFile=open(searchQ,'r',encoding="latin-1")
    soup=BeautifulSoup(myFile,"html5lib")
    #======================== Number_of_search_word========================= 
    test = soup.find("form")
    my_attributes = test.attrs
    noWord = search(my_attributes, searched_word)
    #print("Number of Search Word: ",noWord)

    #print("Button Existance within form")
    #========================== search_innertext============================ 
    for element in soup.find_all("form"):
        if(("search" in element.text) or ("Search" in element.text)):
            #print(element.text)
            search_innertext.append(1)
        else:
            search_innertext.append(0)
    #============================ is_present ============================== 
        is_present = bool(re.search('button', str(element)))
        #print("Form ",(count+1),is_present)
        if(is_present == True):
            is_button.append(1)
        else:
            is_button.append(0)
        count += 1
    
    #print("Total Form: ",count)
    #========================== search_attribute ============================ 
    if(count!= 0):
        search_attribute.append(1)
    else:
        search_attribute.append(0)
    #=================== search_button_attribute_value ===================== 
    try:    
        button_form = soup.find("form")
        buttonSearch = button_form.find("button")
        button_attributes = buttonSearch.attrs
        BnoWord = search(button_attributes, "search")
    
        if(BnoWord==1):
            search_button_attribute_value = 1
        elif(BnoWord==0):
            search_button_attribute_value = 0
        else:
            search_button_attribute_value = 0
    except:
        search_button_attribute_value = 0
    
    return search_innertext, search_attribute, noWord, search_button_attribute_value, is_button

def get_class_data(searchQ) :
    url = searchQ
    search_innertext, search_attribute,noWord,search_button_attribute_value, is_button = search_query(url)
    search_innertext = str(search_innertext)[1:-1].replace(",","").replace(" ","")
    search_attribute = str(search_attribute)[1:-1]
    is_button = str(is_button)[1:-1].replace(",","").replace(" ","")
    temp = []
    if(len(search_innertext)!=0):
        for i in search_innertext:
            search_innertext = i
            for j in search_attribute:
                search_attribute = j
                for k in is_button:
                    is_button = k
                temp.append([search_innertext,search_attribute,str(noWord), str(search_button_attribute_value),is_button])
    return temp

def write_CSV(tlist):
    list_of_header = ["search_innertext", "search_attribute", "Number_of_search_word","search_button_attribute_value","is_button"]
    with open("temp.csv", "a", newline="") as f:
        writer = csv.writer(f)
        #writer.writerow(list_of_header)
        writer.writerows(tlist)
    print("Done!!")

def main():
    url1 = r"adenandanais\Baby Towels _ aden + anais.html"
    url2 = r"adidas\adidas Online Shop _ adidas US.html"
    url3 = r"aeropostale\Sites-aeropostale-Site.html"
    url4 = r"agoda\Agoda _ Hotels in Kyoto _ Best Price Guarantee!.html"
    url5 = r"airbnb\Illinois · Stays · Airbnb.html"
    url6 = r"aldoshoes\Search - shoes _ ALDO US.html"
    url7 = r"Amazon\Amazon.com _ laptop stand.html"
    url8 = r"amextravel\American Express Hotels_ CHI - Search Results.html"
    url9 = r"artpal\Buy Vinci Art at ArtPal.html"
    url10 = r"asos\Marketplace.html"
    url11 = r"autoanything\Bumpers_AutoAnything.html"

    write_CSV(get_class_data(url1))
    write_CSV(get_class_data(url2))
    write_CSV(get_class_data(url3))
    write_CSV(get_class_data(url4))
    write_CSV(get_class_data(url5))
    write_CSV(get_class_data(url6))
    write_CSV(get_class_data(url7))
    write_CSV(get_class_data(url8))
    write_CSV(get_class_data(url9))    
    write_CSV(get_class_data(url10))
    write_CSV(get_class_data(url11))
    
if __name__ == "__main__":
    main()
