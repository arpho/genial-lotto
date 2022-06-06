

# Press Maiusc+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
from extraction import  Extraction
from datetime import datetime
import json
import requests
url = "https://us-central1-genial-lotto.cloudfunctions.net/app/extraction"



def convertFormatDate(d):
  return datetime.strptime(d, '%Y/%m/%d').strftime("%d/%m/%Y")
# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    count = 0
    dataList= []
    f = open("data.json",'w')
    with open("./archivio/storico01-oggi.txt") as fp:
        Lines = fp.readlines()
        for line in Lines:
            L = line.strip().split()
            print("raw data ",line.strip().split())
            d = convertFormatDate(L[0])
            print("data",d)
            params = [d,L[1],L[2],L[3],L[4],L[5],L[6]]
            print("params",params)



            data = Extraction(params).setdata()
            if(datetime.strptime(L[0],'%Y/%m/%d')>datetime.strptime("2017/05/31","%Y/%m/%d")):
              print ("pushing", data)
              dataList.append(data)
              count+=1
    json_string = json.dumps(dataList)
    print("inserted",count,"estrazioni")
    f.write(json_string)
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
