export class MockNavParams{
    data = {
    };
  
    get(param){
      return this.data[param];
    }
  }