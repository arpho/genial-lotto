import { UserType } from "../models/usersType";
import { RoleModel } from "../modules/user/models/privilegesLevelModel";
import { UserTpeModedl } from "../modules/user/models/UserTypeModel";

export const configs = {
  accessLevel: [
    new RoleModel({ key: "Sviluppatore", value: 1 }),
    new RoleModel({ key: "Responsabile", value: 2 }),
    new RoleModel({ key: "Utente standard", value: 3 })
  ],
  userType:[
	  {key:"regular",value:UserType.regular},
	  {key:"clerk",value:UserType.clerk}
  ],
  offlineEntityNumber: 0,
  weels: [
    "Bari",
    "Cagliari",
    "Firenze",
    "Genova",
    "Milano",
    "Napoli",
    "Palermo",
    "Roma",
    "Torino",
    "Venezia",
    "Nazionale"
  ]
};
