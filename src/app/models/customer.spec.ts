import { Customer } from "./Customer"

describe("empty customer",()=>{
  it("should be intantiated correctly",()=>{
    const customer = new Customer()
    expect(customer).toBeDefined()
    expect(customer.role.value).toBe(3)
    expect(customer.level).toBe(3)
    expect(customer.role.value).toBe(3)
    expect(customer.serialize().level).toBe(3)
    expect(customer.address).toBeDefined()
  })
  it("should serialize correctly",()=>{
    const customer = new Customer()
    expect(customer.serialize()).toBeDefined()
    expect(customer.serialize().firstName).toBe("")
    expect(customer.serialize().lastName).toBe("")
    expect(customer.serialize()['key']).toBeUndefined()
    expect(customer.serialize()['address']).toBeDefined()
    expect(customer.serialize().telephones.length).toBe(0)
  })

})

describe("customer with data",()=>{
  const data = {
    firstName:"joe",
    lastName:"friend",
    level:'1',
    key:"key",
    email:"a@iol.it"
  }
  const customer = new Customer(data)
  it("should be intantiated correctly",()=>{
    
    expect(customer).toBeDefined()
    expect(customer.role.value).toBe(1)
    expect(customer.firstName).toBe(data.firstName)
    expect(customer.key).toBe(data.key)
    expect(customer.lastName).toBe(data.lastName)
    expect(customer.email).toBe(data.email)
    expect(customer.level).toBe(1)
    expect(customer.role.value).toBe(1)
    expect(customer.serialize().level).toBe(1)
    expect(customer.address).toBeDefined()
  })
  it("should serialize correctly",()=>{
    expect(customer.serialize().level).toBe(1)
    expect(customer.serialize().firstName).toBe(data.firstName)
    expect(customer.key).toBe(data.key)
    expect(customer.serialize().lastName).toBe(data.lastName)
    expect(customer.serialize().email).toBe(data.email)
    expect(customer.serialize().level).toBe(1)
    expect(customer.address).toBeDefined()
  })
})