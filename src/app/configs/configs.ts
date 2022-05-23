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
	  {key:"genitore",value:UserType.genitore},
	  {key:"studente",value:UserType.studente},
	  {key:"autista",value:UserType.autista},
	  {key:"addetto",value:UserType.addetto}
  ],
  offlineEntityNumber: 0
};
