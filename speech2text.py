# intitialize library
import speech_recognition as sr
import spacy
import pytextrank
from bs4 import BeautifulSoup

def speech_recognition():
    r = sr.Recognizer()
    mic = sr.Microphone()
    print("Ask your query...\a")
    with mic as source:
            r.adjust_for_ambient_noise(source)
            audio = r.listen(source)
    try:
        textinput = r.recognize_google(audio)
        print("Recorded!!\a")
    except sr.UnknownValueError:
        print("Speech could not understand audio")
    except sr.RequestError as e:
        print("Could not request results from ; {0}".format(e))

    return textinput

def semantic_ranking(x):
    unit_vector = []
    unit_text = []
    nlp = spacy.load("en_core_web_sm")

    tr = pytextrank.TextRank()
    nlp.add_pipe(tr.PipelineComponent, name="textrank", last=True)
    y = "[find], [me], [an], [iPhone], [at], [the], [cheapest], [price]"
    doc = nlp(x)

    for p in doc._.phrases:
        #print("{:.2f} {:5d}  {}".format(p.rank, p.count, p.text))
        unit_vector.append(p.rank)
        unit_text.append(p.text)
    try:
        sum_ranks = sum(unit_vector)
        #print("sum_ranks", sum_ranks)
        unit_vector = [ rank/sum_ranks for rank in unit_vector ]
        #print("unit_vector", unit_vector)

    except:
        print("Error")
    return unit_vector, unit_text

def search_query(searchQ, searchF):
    myFile=open(searchQ,'r',encoding="latin-1")
    soup=BeautifulSoup(myFile,"html5lib")
    searchF = str(searchF[0])
    if (searchF.isalpha()==True):
        searchF = searchF.upper()
    elif(searchF.isnumeric()==True):
        searchF = searchF
    try:
        print("Search result:\n")
        for hit in soup.findAll("a", {"class" : "product-title-link line-clamp line-clamp-2 truncate-title"}):
            if(searchF in hit.text):
                    print(hit.text)
    except:
        links = "No link found"

def main():
    url=r"C:\Users\jafra\OneDrive\File & Document\Documents\GitHub\SpeechAssistant\Dataset\Walmart.html"
    #textinput = speech_recognition()
    textinput = "find laptop with 14 screensize"
    #textinput = "find cheapest laptop with i5 processor"
    #textinput = "find cheapest laptop with hp Brand"
    print(textinput)

    unit, text = semantic_ranking(textinput)
    fList = text[1].split()
    res = "\n".join("{:.2f} {}".format(x, y) for x, y in zip(unit, text))
    print(res,"\n")
    search_query(url, fList)
    print()
    #print(unit, text)


if __name__ == "__main__":
    main()
