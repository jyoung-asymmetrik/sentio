import {
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  injectAsync,
  ComponentFixture,
  TestComponentBuilder
} from 'angular2/testing';
import {provide, Component} from 'angular2/core';
import {MatrixChart} from './matrix-chart.directive';


@Component({
  selector: 'test-component',
  template: `<div matrix-chart></div>`
})
class TestComponent {}

describe('MatrixChart Directive', () => {

  beforeEachProviders((): any[] => []);


  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
