class Extraction:
    """a class to handle extraction"""
    weel = ""
    date = ""
    extraction = []
    weels = {"MI": "Milano",
             "FI": "Firenze",
             "GE": "Genova",
             "NA": "Napoli",
             "RO": "Roma",
             "TO": "Torino",
             "VE": "Venezia",
             "BA": "Bari",
             "PA": "Palermo",
             "RN": "Nazionale",
             "RM": "Roma",
             "CA": "Cagliari",}
    def __init__(self,data):
        print("parasm", data)
        self.date = data[0]
        self.weel = self.weels[data[1]]
        self.extraction=[int(data[2]),int(data[3]),int(data[4]),int(data[5]),int(data[6])]

    def setdata(self):
        return {
            "weel": self.weel,
            "date": self.date,
            "extraction": self.extraction
        }
