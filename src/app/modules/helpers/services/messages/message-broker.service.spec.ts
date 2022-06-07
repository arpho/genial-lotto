import { TestBed } from '@angular/core/testing';

import { MessageBrokerService } from './message-broker.service';

describe('MessageBrokerService', () => {
  let service: MessageBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should add broker",()=>{
    service.addBroker("test")
    expect(service.brokers['test']).toBeDefined()
  })
  it("should not subscribe",()=>{
    expect(service.subscribeTo("test",()=>{})).toBeUndefined()
  })
  it("should subscribe",()=>{
    service.addBroker("test")
    expect(service.brokersList().length).toBe(1)
    expect(service.subscribeTo('test',()=>{})).toBeDefined()
  })
  it("should not publish",()=>{
    expect(service.publish("test",2)).toBeFalse()
  })
  it("should publish",()=>{
    service.addBroker("test")
    expect(service.publish("test",2)).toBeTrue()
    
  })
});
