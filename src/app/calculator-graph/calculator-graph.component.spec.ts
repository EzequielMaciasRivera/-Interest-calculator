import { TestBed } from '@angular/core/testing';
import { CalculatorGraphComponent } from './calculator-graph.component';
describe('CalculatorGraphComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorGraphComponent ],
    }).compileComponents();
  });

  it('should create the graph', () => {
    const fixture = TestBed.createComponent(CalculatorGraphComponent);
    const graph = fixture.componentInstance;
    expect(graph).toBeTruthy();
  });

  it(`should have as title 'ng2-charts-demo'`, () => {
    const fixture = TestBed.createComponent(CalculatorGraphComponent);
    const graph = fixture.componentInstance;
    expect(graph.title).toEqual('ng2-charts-demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CalculatorGraphComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ng2-charts-demo graph is running!');
  });
});
