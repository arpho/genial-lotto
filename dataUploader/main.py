

# Press Maiusc+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
from extraction import  Extraction
import requests
url = "https://us-central1-genial-lotto.cloudfunctions.net/app/extraction"


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    count = 0
    with open("./archivio/archivio..txt") as fp:
        Lines = fp.readlines()
        for line in Lines:
            data = Extraction(line.strip().split()).setdata()
            print ("pushing", data)
            result = requests.post(url, data)
            print("status: ", result.status_code)
            print(result.text)
            if(result.ok):
                count +=1
                print("inserted", data)
    print("inserted {} estrazioni".format(count))
    """
    line = "1234 18/02/1939 NA 26 56 68 65 39"
    print("line", line.split())
    estrazione = Extraction(line.split())
    data = estrazione.setdata()
    Data ={"weel":"Roma",
            "date":"21/05/2022",
            "extraction": [1, 2, 3, 4, 5]}
    print("data", data)
    x = requests.post(url, data)
    print(x.text)
    """

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
