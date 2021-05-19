# intitialize library
import re
import csv
import pandas as pd
from bs4 import BeautifulSoup
import numpy as np


url1 = r"adenandanais/Babyfiles.html"
url2 = r"adidas/adidas Online Shop _ adidas US.html"
url3 = r"aeropostale/Sites-aeropostale-Site.html"
url4 = r"agoda/Agoda _ Hotels in Kyoto _ Best Price Guarantee!.html"
url5 = r"airbnb/Illinois · Stays · Airbnb.html"
url6 = r"aldoshoes/Search - shoes _ ALDO US.html"
url7 = r"Amazon/Amazon.com _ laptop stand.html"
url8 = r"amextravel/American Express Hotels_ CHI - Search Results.html"
url9 = r"artpal/Buy Vinci Art at ArtPal.html"
url10 = r"asos/Marketplace.html"
url11 = r"autoanything/Bumpers_AutoAnything.html"
url12 = r"Avon/cream by Avon.html"
url13 = r"bagborroworsteal/search _ Bag Borrow or Steal.html"
url14 = r"barnesandnoble/comic.html"
url15 = r"benetton/United Colors of Benetton - Official Site _ Online Shop.html"
url16 = r"bestbuy/laptop - Best Buy.html"
url17 = r"besttravelcoupon/BestTravelCoupon.com - Hotels in Chicago.html"
url18 = r"bettycrocker/Search Results - BettyCrocker.com.html"
url19 = r"bhphotovideo/nikon.html"
url20 = r"bigbasket/Best Online Grocery Store in India. Save Big on Grocery Shopping _ bigbasket.com.html"
url21 = r"bigstockphoto/Creativity.html"
url22 = r"bodenusa/Search.html"
url23 = r"bonanza/Buy executive office chair 199 items on Bonanza.html"
url24 = r"booking/Booking.com _ Hotels in New York . Book your hotel now!.html"
url25 = r"booksamillion/comic _ _ Booksamillion.com.html"
url26 = r"bulq/BULQ_ Great Deals on Liquidation Inventory.html"
url27 = r"buybuybaby/Shirt _ buybuy BABY.html"
url28 = r"canstockphoto/Cry Stock Photo Images. 113,363 Cry royalty free pictures and photos available to download from thousands of stock photographers..html"
url29 = r"carid/Mr. Mustang™ Bumpers - CARiD.com.html"
url30 = r"carparts/CarParts.com - Discount Auto Body Parts Online, Cheap Aftermarket Parts.html"
url31 = r"cartier/Search Results.html"
url32 = r"cdw/Search Results_ Showing results for ram _ CDW.html"
url33 = r"cheapoair/Save on Cheap Flights, Cheap Airfares, Cheap Tickets.html"
url34 = r"cheaptickets/Chicago (and vicinity), Illinois, United States of America Hotel Search Results.html"
url35 = r"chewy/food - Free shipping _ Chewy.html"
url36 = r"childrensplace/Kids.html"
url37 = r"choicehotels/Hotels in Illinois City, IL – Choice Hotels.html"
url38 = r'coca-cola/Search results for_ BOTTLE OPENER _ Coca-Cola Store.html' 
url39 = r'concordsupplies/Isabella Management LLC DBA Concordsupplies..html' 
url40 = r'cookieskids/Cookies Kids - the Kids Department Store at Cookies Kids.html' 
url41 = r'costco/Laptops.html' 
url42 = r'costcotravel/Search - Packages _ Costco Travel.html' 
url43 = r'countrystore/Search results for_ Red wine.html' 
url44 = r'craigslist/norfolk_for_sale _car_ - craigslist.html' 
url45 = r'dayuse/Dayuse_com.html' 
url46 = r'decluttr/Products by Decluttr.html' 
url47 = r'departmentstoreliquidations/Department Store Liquidations. Wholesale Closeouts. Liquidation Overstock Merchandise..html' 
url48 = r'depositphotos/Depositphotos.html' 
url49 = r'dickssportinggoods/Search Results.html' 
url50 = r'discovery/SHORTS _ Discovery Store.html' 
url51 = r'doverpublications/Search.html' 
url52 = r'dreamstime/Sports.html' 
url53 = r'drupal/Found 6799 results containing the words_ pc _ Drupal.org.html' 
url54 = r'dunhamssports/Sites-Dunhams-Site.html' 
url55 = r'eastbay/Boots _ Eastbay.html' 
url56 = r'ebay/headphones _ eBay.html' 
url57 = r'ebid/car _ Items for Sale in United States.html' 
url58 = r'ebookers/Illinois, United States of America Hotel Search Results.html' 
url59 = r'ecrater/gloves - Filter Results.html' 
url60 = r'entirelypets/Entirely Pets - Search Results for food.html' 
url61 = r'etsy/Watch _ Etsy.html' 
url62 = r'expedia/Chicago, Illinois, United States of America Hotel Search Results.html' 
url63 = r'fandango/Movie Times and Movie Theaters in 23508 - Local Showtimes - Fandango _ Fandango.html' 
url64 = r'fashionphile/Shop Pre owned Designer Handbags _ Used Designer Bags _ Fashionphile.html' 
url65 = r'fnp/Send Roses _ Buy Roses Online _ Online Roses Delivery - Ferns N Petals.html' 
url66 = r'fragrancenet/Discount.html' 
url67 = r'freedigitalphotos/Eggs Pictures - Free Images of Eggs - Royalty Free Photos.html' 
url68 = r'freshdirect/FreshDirect - Search - onion.html' 
url69 = r'frys/Frys Electronics _.html' 
url70 = r'gamestop/mjolnir _ Search Results _ GameStop.html' 
url71 = r'gazelle/Buy Certified Pre-Owned iPhones, Cell Phones and iPads _ Gazelle.html' 
url72 = r'gbyliquidations/Search results for_ Shoe.html' 
url73 = r'getaroom/Illingen, DE Hotels_ Cheap Rooms for Hotels in Illingen, DE at getaroom.html' 
url74 = r'gettyimages/1,405 Football Club Photos and Premium High Res Pictures - Getty Images.html' 
url75 = r'giantfood/Search Results _ Giant.html' 
url76 = r'glyde/Buy Used Phones for Sale the Cheaper Way - Glyde.html' 
url77 = r'google shopping/headphones with mic - Google Shopping.html' 
url78 = r'groupon/flowers _ Groupon.html' 
url79 = r'gymboree/Kids.html' 
url80 = r'hallmark/Search for _birthday_ - Hallmark.html' 
url81 = r'hersheys/HERSHEYS _ Product Search.html' 
url82 = r'hilton/Hotel Search - Hilton.html' 
url83 = r'hipcamp/Camping Near Me _ Find The Best Campgrounds on Hipcamp.html' 
url84 = r'homedepot/Search Results for drill at The Home Depot.html' 
url85 = r'hometogo/Chicago.html' 
url86 = r'hopper/Hopper.html' 
url87 = r'hoseasons/Holiday Lodges in All Regions – Log Cabins 2020 - Hoseasons.html' 
url88 = r'hostelworld/Hostels in Chicago » Find cheap, unique hostels » Hostelworld.html' 
url89 = r'hotelscombined/Chicago, 11_18 — 12_8.html' 
url90 = r'hoteltonight/Cheap Last Minute Hotel Deals in Virginia Beach from $63 - HotelTonight.html' 
url91 = r'hotwire/Hotels.html' 
url92 = r'hrs/HRS – HOTEL RESERVATION SERVICE LTD. - Chicago (Illinois).html' 
url93 = r'hurb/Hotels and Packages at Illinois, United States _ Hurb.html' 
url94 = r'hyatt/Hyatt _ Search Results.html' 
url95 = r'icing/Search Page _ Icing US.html' 
url96 = r'ihg/Select a Hotel.html' 
url97 = r'ikea/table - Search - IKEA.html' 
url98 = r'indiger/Pickles.html' 
url99 = r'jalan/Hokkaido Hotels - Search Result _ Jalan _ Hotel Booking Site.html' 
url100 = r'jcpenney/shoes - JCPenney.html' 
url101 = r'jossandmain/Table.html' 
url102 = r'kayak/Book now_ Chicago, 11_26 — 11_30.html' 
url103 = r'kohls/Mens Shirts_ Shop Dress Shirts to Casual T Shirts and Polos for Men _ Kohls.html' 
url104 = r'kroger/Kroger.html' 
url105 = r'kushiesonline/Kushies Baby USA.html' 
url106 = r'laterooms/LateRooms.com _ Hotels in Manchester . Book your hotel now!.html' 
url107 = r'lego/Search Results _ LEGO Shop.html' 
url108 = r'leprix/Search Results for_ bag _ LePrix.html' 
url109 = r'liquidation/Shirts - auctions - Liquidation.com Auctions.html' 
url110 = r'listia/car - Listia.com Auctions for Free Stuff.html' 
url111 = r'lonelyplanet/Hotels in Seville, Spain - Lonely Planet.html' 
url112 = r'lookfantastic/Found results for _cream_ _ Free US Shipping _ lookfantastic.html' 
url113 = r'maccosmetics/Search _ MAC Cosmetics - Official Site _ MAC Cosmetics - Official Site.html' 
url114 = r'macys/Mens Shirts - Macys.html' 
url115 = r'marriott/Search Results.html' 
url116 = r'marykay/Mary Kay Search Results.html' 
url117 = r'mercari/shoes _ Mercari.html' 
url118 = r'metmuseum/Art.html' 
url119 = r'microcenter/Laptops_Notebooks _ Micro Center.html' 
url120 = r'momondo/Illinois, 11_8 — 11_9.html' 
url121 = r'mrandmrssmith/Boutique.html' 
url122 = r'mynavyexchange/Search Results _ Shop Your Navy Exchange - Official Site.html' 
url123 = r'nba/store.nba.com.html' 
url124 = r'neutrogena/Search Results _ Neutrogena®.html' 
url125 = r'newbalance/shoes Search Results - New Balance.html' 
url126 = r'nflshop/NFL Gear - NFLShop.com.html' 
url127 = r'nhc/Search results for _Vitamin_.html' 
url128 = r'nike/Products. Nike.com.html' 
url129 = r'officedepot/table - Office Depot.html' 
url130 = r'officesupplynow/OfficeSupplyNow.com - The Trimmer Place.html' 
url131 = r'oncewed/Search.html' 
url132 = r'onetravel/Onetravel _ Hotels in Chicago . Book your hotel now!.html' 
url133 = r'onlinesports/Search results for_ball_OnlineSports.com.html' 
url134 = r'oodle/_car_ _ Cars for Sale in Norfolk, Virginia _ Used Cars on Oodle Classifieds.html' 
url135 = r'orbitz/Illinois, United States of America Hotel Search Results.html' 
url136 = r'origins/Endeca - Search + Results _ Origins.html' 
url137 = r'overstock/Kitchen.html' 
url138 = r'oyorooms/Hotels.html' 
url139 = r'petco/Search Results.html' 
url140 = r'petsmart/Search Results _ PetSmart.html' 
url141 = r'petsupplies/Supplies.html' 
url142 = r'petsuppliesplus/Search.html' 
url143 = r'poppin/Search Results _ Poppin.html' 
url144 = r'poshmark/Nike for Women - Poshmark.html' 
url145 = r'powells/Search Results - Powells Books.html' 
url146 = r'premierinn/Search.html' 
url147 = r'preownedweddingdresses/Search.html' 
url148 = r'priceline/Chicago Hotels_ 11_05 - 11_06 _ Priceline.html' 
url149 = r'pruvo/Pruvo – Book your hotel - Hotels in Chicago.html' 
url150 = r'puma/Search Result_ shoes.html' 
url151 = r'redbubble/Face Masks _ Redbubble.html' 
url152 = r'reebok/Reebok Online Shop _ Reebok US.html' 
url153 = r'riteaid/riteaid.html' 
url154 = r'roomertravel/Chicago Hotel Deals, Roomer.html' 
url155 = r'rubylane/Rings Jewelry _ Ruby Lane.html' 
url156 = r'saatchiart/Landscape Photography For Sale _ Saatchi Art.html' 
url157 = r'safeway/Search Results _ Safeway.html' 
url158 = r'sears/Laptop.html' 
url159 = r'sebamedusa/Dermatologist Recommended Sensitive Skin Care Solutions.html' 
url160 = r'secondsale/Best Books about art of war.html' 
url161 = r'sellcell/Sell Apple iPhone 12 Pro _ Trade In iPhone 12 Pro.html' 
url162 = r'sephora/Search _ Sephora.html' 
url163 = r'shopbeergear/Shop Beer Gear.html' 
url164 = r'shopbop/jean _ SHOPBOP.html' 
url165 = r'shopdisney/shopDisney _ shopDisney.html' 
url166 = r'shopgoodwill/Search Results_ shirt - shopgoodwill.com.html' 
url167 = r'shopjustice/Justice _ Justice.html' 
url168 = r'shopthesalvationarmy/ShopTheSalvationArmy.html' 
url169 = r'shopzilla/Shopzilla - Jacket.html' 
url170 = r'shutterstock/Sports.html' 
url171 = r'sisley/Sisley - Official Site _ Online Shop.html' 
url172 = r'skyscanner/Cheap domestic flights from Norfolk.html' 
url173 = r'spalding/Sporting.html' 
url174 = r'sportsdirect/Search Results.html' 
url175 = r'sportsunlimitedinc/Results for boots.html' 
url176 = r'staples/Shop.html' 
url177 = r'swansonvitamins/Vitamins and Supplements, Natural Health Products, Organic Foods - Swanson Health Products.html' 
url178 = r'sykescottages/Search and Find a Cottage in UK and Ireland _ Sykes Cottages.html' 
url179 = r'szallas/Balaton accommodations - 3885 offers - Revngo.com.html' 
url180 = r'tabasco/You searched for mexican _TABASCOBrand.html' 
url181 = r'tablethotels/Boutique.html' 
url182 = r'target/Tv _ Target.html' 
url183 = r'tenthousandvillages/Search results for_table.html' 
url184 = r'thellegance/Online shopping for Digital Watches with free worldwide shipping.html' 
url185 = r'thenewyorkdogshop/The New York Dog Shop.html' 
url186 = r'thomascook/Thomas Cook.html' 
url187 = r'thredup/Womens Clothing.html' 
url188 = r'thriftbooks/Browse.html' 
url189 = r'tias/Search - comic - TIAS.com.html' 
url190 = r'tigerdirect/Laptop.html' 
url191 = r't-mobile/search.html' 
url192 = r'toofaced/Search _ TooFaced.html' 
url193 = r'totalwine/Total.html' 
url194 = r'tradesy/Womens Shoes.html' 
url195 = r'travelocity/Illinois, United States of America Hotel Search Results.html' 
url196 = r'travelzoo/Hotels + New York City, NY + All Dates _ Travelzoo.html' 
url197 = r'tripadvisor/Tripadvisor.html' 
url198 = r'trivago/Chicago.html' 
url199 = r'usps/Shipping Supplies _ USPS.com.html' 
url200 = r'veneretravel/Venere Travel.html' 
url201 = r'verizon/Search Results for iphone at Verizon.html' 
url202 = r'vitaminshoppe/Search.html' 
url203 = r'vitaminworld/Shop Vitamin B _ Vitamin World.html' 
url204 = r'vrbo/Chicago pet friendly vacation rentals _ Vrbo.com.html' 
url205 = r'walgreens/mask _ Walgreens.html' 
url206 = r'walmart/laptop computer - Walmart.com.html' 
url207 = r'wayfair/Wayfair.html' 
url208 = r'wotif/Chicago (and vicinity), Illinois, United States of America Hotel Search Results.html' 
url209 = r'wyndhamhotels/Search.html' 


def search(myDict, search1):
    search.a=[]
    for key, value in myDict.items():
        if search1 in value:
            search.a.append(key)
    return len(search.a)

def search_query(_url_):
    s_inner = []
    is_button = []
    search_attribute = []
    noWord = []
    BnoWord = 0
    sClass = []
    search_button_attribute_value = []
    myFile=open(_url_,'r',encoding="latin-1")
    soup=BeautifulSoup(myFile,"html5lib")
    try:
        for tests in soup.findAll('form'):
            #print(tests)
            my_attributes = tests.attrs
            if "data-attribute" in list(my_attributes.keys()):
                sClass.append(1)
            else:
                sClass.append(0)
            if('search' in list(tests.attrs.values())):
                search_attribute.append(1)
            else:
                search_attribute.append(0) 
            if " " == tests.text:
                s_inner.append(0)
            else:
                s_inner.append(1)
                
            my_no = tests.attrs
            noWord.append(search(my_no, "search"))
            
            is_present = bool(re.search('button', str(tests)))
            if(is_present == True):
                is_button.append(1)
            else:
                is_button.append(0)
                
            if "data-attribute" in list(my_attributes.keys()):    
                buttonSearch = tests.find("button")
                button_attributes = buttonSearch.attrs
                BnoWord = search(button_attributes, "search")
                if(BnoWord == 1):
                    search_button_attribute_value.append(1)
                else:
                    search_button_attribute_value.append(0)
            else:
                search_button_attribute_value.append(0)
            
    except:
        search_button_attribute_value.append(0)

    if (s_inner ==[]):
        s_inner = [0]
    if (search_attribute ==[]):
        search_attribute = [0]
    if (noWord ==[]):
        noWord = [0]
    if (is_button ==[]):
        is_button = [0]
    if (search_button_attribute_value ==[]):
        search_button_attribute_value = [0]    
    if (sClass ==[]):
        sClass = [0]
    
    return s_inner, search_attribute,noWord,is_button, search_button_attribute_value,sClass



def get_class_data(searchQ) :
        search_innertext,search_attribute,noWord, is_button, search_button_attribute_value, sClass = search_query(searchQ)
        search_innertext = str(search_innertext)[1:-1].replace(",","").replace(" ","")
        search_attribute = str(search_attribute)[1:-1].replace(",","").replace(" ","")
        noWord = str(noWord)[1:-1].replace(",","").replace(" ","")
        is_button = str(is_button)[1:-1].replace(",","").replace(" ","")
        search_button_attribute_value = str(search_button_attribute_value)[1:-1].replace(",","").replace(" ","")
        sClass = str(sClass)[1:-1].replace(",","").replace(" ","")
        temp = []
        temp2 = []
        
        for i in search_innertext:
            search_innertext = i
            temp.append([search_innertext])        
            
        t_search_attribute = []
        for m in search_attribute:
            t_search_attribute.append(m)
        arr2d = np.matrix(temp)
        column_to_add = np.array(t_search_attribute)
        output = np.column_stack((arr2d, column_to_add))
        f_search_attribute = output.tolist()
        
        t_noWord = []
        for m in noWord:
            t_noWord.append(m)
        a_noWord = np.matrix(f_search_attribute)
        column_noWord = np.array(t_noWord)
        o_noWord = np.column_stack((a_noWord, column_noWord))
        f_noWord = o_noWord.tolist()        
        
        t_is_button= []
        for m in is_button:
            t_is_button.append(m)
        a_is_button = np.matrix(f_noWord)
        column_is_button= np.array(t_is_button)
        o_is_button = np.column_stack((a_is_button, column_is_button))
        f_is_button= o_is_button.tolist()        
        
        t_s_value= []
        for m in search_button_attribute_value:
            t_s_value.append(m)
        a_s_value = np.matrix(f_is_button)
        column_s_value= np.array(t_s_value)
        o_s_value = np.column_stack((a_s_value, column_s_value))
        f_s_value= o_s_value.tolist()
        
        t_sClass= []
        for m in sClass:
            t_sClass.append(m)
        a_sClass = np.matrix(f_s_value)
        column_sClass= np.array(t_sClass)
        o_sClass = np.column_stack((a_sClass, column_sClass))
        f_sClass= o_sClass.tolist()
        
        
        return f_sClass


def write_CSV(tlist):
    list_of_header = ["search_innertext", "search_attribute", "Number_of_search_word","search_button_attribute_value","is_button", "sClass"]
    with open("1.csv", "a", newline="") as f:
        writer = csv.writer(f)
        #writer.writerow(list_of_header)
        writer.writerows(tlist)
    with open("1.csv", "r", newline="") as fr:
        reader = csv.reader(fr)
        lines= len(list(reader))
        print("[",lines,"].", "form!")

write_CSV(get_class_data(url1))


'''
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
write_CSV(get_class_data(url12))
write_CSV(get_class_data(url13))
write_CSV(get_class_data(url14))
write_CSV(get_class_data(url15))
write_CSV(get_class_data(url16))
write_CSV(get_class_data(url17))
write_CSV(get_class_data(url18))
write_CSV(get_class_data(url19))
write_CSV(get_class_data(url20))
write_CSV(get_class_data(url21))
write_CSV(get_class_data(url22))
write_CSV(get_class_data(url23))
write_CSV(get_class_data(url24))
write_CSV(get_class_data(url25))
write_CSV(get_class_data(url26))
write_CSV(get_class_data(url27))
write_CSV(get_class_data(url28))
write_CSV(get_class_data(url29))
write_CSV(get_class_data(url30))
write_CSV(get_class_data(url31))
write_CSV(get_class_data(url32))
write_CSV(get_class_data(url33))
write_CSV(get_class_data(url34))
write_CSV(get_class_data(url35))
write_CSV(get_class_data(url36))
write_CSV(get_class_data(url37))
write_CSV(get_class_data(url38))
write_CSV(get_class_data(url39))
write_CSV(get_class_data(url40))
write_CSV(get_class_data(url41))
write_CSV(get_class_data(url42))
write_CSV(get_class_data(url43))
write_CSV(get_class_data(url44))
write_CSV(get_class_data(url45))
write_CSV(get_class_data(url46))
write_CSV(get_class_data(url47))
write_CSV(get_class_data(url48))
write_CSV(get_class_data(url49))
write_CSV(get_class_data(url50))
write_CSV(get_class_data(url51))
write_CSV(get_class_data(url52))
write_CSV(get_class_data(url53))
write_CSV(get_class_data(url54))
write_CSV(get_class_data(url55))
write_CSV(get_class_data(url56))
write_CSV(get_class_data(url57))
write_CSV(get_class_data(url58))
write_CSV(get_class_data(url59))
write_CSV(get_class_data(url60))
write_CSV(get_class_data(url61))
write_CSV(get_class_data(url62))
write_CSV(get_class_data(url63))
write_CSV(get_class_data(url64))
write_CSV(get_class_data(url65))
write_CSV(get_class_data(url66))
write_CSV(get_class_data(url67))
write_CSV(get_class_data(url68))
write_CSV(get_class_data(url69))
write_CSV(get_class_data(url70))
write_CSV(get_class_data(url71))
write_CSV(get_class_data(url72))
write_CSV(get_class_data(url73))
write_CSV(get_class_data(url74))
write_CSV(get_class_data(url75))
write_CSV(get_class_data(url76))
write_CSV(get_class_data(url77))
write_CSV(get_class_data(url78))
write_CSV(get_class_data(url79))
write_CSV(get_class_data(url80))
write_CSV(get_class_data(url81))
write_CSV(get_class_data(url82))
write_CSV(get_class_data(url83))
write_CSV(get_class_data(url84))
write_CSV(get_class_data(url85))
write_CSV(get_class_data(url86))
write_CSV(get_class_data(url87))
write_CSV(get_class_data(url88))
write_CSV(get_class_data(url89))
write_CSV(get_class_data(url90))
write_CSV(get_class_data(url91))
write_CSV(get_class_data(url92))
write_CSV(get_class_data(url93))
write_CSV(get_class_data(url94))
write_CSV(get_class_data(url95))
write_CSV(get_class_data(url96))
write_CSV(get_class_data(url97))
write_CSV(get_class_data(url98))
write_CSV(get_class_data(url99))
write_CSV(get_class_data(url100))
write_CSV(get_class_data(url101))
write_CSV(get_class_data(url102))
write_CSV(get_class_data(url103))
write_CSV(get_class_data(url104))
write_CSV(get_class_data(url105))
write_CSV(get_class_data(url106))
write_CSV(get_class_data(url107))
write_CSV(get_class_data(url108))
write_CSV(get_class_data(url109))
write_CSV(get_class_data(url110))
write_CSV(get_class_data(url111))
write_CSV(get_class_data(url112))
write_CSV(get_class_data(url113))
write_CSV(get_class_data(url114))
write_CSV(get_class_data(url115))
write_CSV(get_class_data(url116))
write_CSV(get_class_data(url117))
write_CSV(get_class_data(url118))
write_CSV(get_class_data(url119))
write_CSV(get_class_data(url120))
write_CSV(get_class_data(url121))
write_CSV(get_class_data(url122))
write_CSV(get_class_data(url123))
write_CSV(get_class_data(url124))
write_CSV(get_class_data(url125))
write_CSV(get_class_data(url126))
write_CSV(get_class_data(url127))
write_CSV(get_class_data(url128))
write_CSV(get_class_data(url129))
write_CSV(get_class_data(url130))
write_CSV(get_class_data(url131))
write_CSV(get_class_data(url132))
write_CSV(get_class_data(url133))
write_CSV(get_class_data(url134))
write_CSV(get_class_data(url135))
write_CSV(get_class_data(url136))
write_CSV(get_class_data(url137))
write_CSV(get_class_data(url138))
write_CSV(get_class_data(url139))
write_CSV(get_class_data(url140))
write_CSV(get_class_data(url141))
write_CSV(get_class_data(url142))
write_CSV(get_class_data(url143))
write_CSV(get_class_data(url144))
write_CSV(get_class_data(url145))
write_CSV(get_class_data(url146))
write_CSV(get_class_data(url147))
write_CSV(get_class_data(url148))
write_CSV(get_class_data(url149))
write_CSV(get_class_data(url150))
write_CSV(get_class_data(url151))
write_CSV(get_class_data(url152))
write_CSV(get_class_data(url153))
write_CSV(get_class_data(url154))
write_CSV(get_class_data(url155))
write_CSV(get_class_data(url156))
write_CSV(get_class_data(url157))
write_CSV(get_class_data(url158))
write_CSV(get_class_data(url159))
write_CSV(get_class_data(url160))
write_CSV(get_class_data(url161))
write_CSV(get_class_data(url162))
write_CSV(get_class_data(url163))
write_CSV(get_class_data(url164))
write_CSV(get_class_data(url165))
write_CSV(get_class_data(url166))
write_CSV(get_class_data(url167))
write_CSV(get_class_data(url168))
write_CSV(get_class_data(url169))
write_CSV(get_class_data(url170))
write_CSV(get_class_data(url171))
write_CSV(get_class_data(url172))
write_CSV(get_class_data(url173))
write_CSV(get_class_data(url174))
write_CSV(get_class_data(url175))
write_CSV(get_class_data(url176))
write_CSV(get_class_data(url177))
write_CSV(get_class_data(url178))
write_CSV(get_class_data(url179))
write_CSV(get_class_data(url180))
write_CSV(get_class_data(url181))
write_CSV(get_class_data(url182))
write_CSV(get_class_data(url183))
write_CSV(get_class_data(url184))
write_CSV(get_class_data(url185))
write_CSV(get_class_data(url186))
write_CSV(get_class_data(url187))
write_CSV(get_class_data(url188))
write_CSV(get_class_data(url189))
write_CSV(get_class_data(url190))
write_CSV(get_class_data(url191))
write_CSV(get_class_data(url192))
write_CSV(get_class_data(url193))
write_CSV(get_class_data(url194))
write_CSV(get_class_data(url195))
write_CSV(get_class_data(url196))
write_CSV(get_class_data(url197))
write_CSV(get_class_data(url198))
write_CSV(get_class_data(url199))
write_CSV(get_class_data(url200))
write_CSV(get_class_data(url201))
write_CSV(get_class_data(url202))
write_CSV(get_class_data(url203))
write_CSV(get_class_data(url204))
write_CSV(get_class_data(url205))
write_CSV(get_class_data(url206))
write_CSV(get_class_data(url207))
write_CSV(get_class_data(url208))
write_CSV(get_class_data(url209))
'''



