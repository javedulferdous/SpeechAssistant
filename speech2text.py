# intitialize library
import speech_recognition as sr
import spacy
import pytextrank

def speech_recognition():
    r = sr.Recognizer()
    mic = sr.Microphone()
    print("Start your recording...")
    with mic as source:
            r.adjust_for_ambient_noise(source)
            audio = r.listen(source)
            if  not audio:
                print("Didn't find any word")
            else:
                print("Recorded!!")
    textinput = r.recognize_google(audio)
    return textinput

def semantic_ranking(x):
    unit_vector = []
    unit_text = []
    nlp = spacy.load("en_core_web_sm")

    tr = pytextrank.TextRank()
    nlp.add_pipe(tr.PipelineComponent, name="textrank", last=True)
    y = "[find], [me], [an], [iPhone], [at], [the], [cheapest], [price]"
    doc = nlp(y)

    for p in doc._.phrases:
        #print("{:.2f} {:5d}  {}".format(p.rank, p.count, p.text))
        unit_vector.append(p.rank)
        unit_text.append(p.text)

    sum_ranks = sum(unit_vector)
    unit_vector = [ rank/sum_ranks for rank in unit_vector ]
    return unit_vector, unit_text

def main():
    #textinput = speech_recognition()
    textinput = "find me an iPhone at the cheapest price."
    unit, text = (semantic_ranking(textinput))
    res = "\n".join("{:.2f} {}".format(x, y) for x, y in zip(unit, text))
    print(res)
    #print(unit, text)



if __name__ == "__main__":
    main()
