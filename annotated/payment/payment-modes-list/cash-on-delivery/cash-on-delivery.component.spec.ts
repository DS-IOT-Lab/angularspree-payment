
// @presence {CashOnDelivery}
{
  describe('CashOnDeliveryComponent', () => {
    let component: CashOnDeliveryComponent;
    let fixture: ComponentFixture<CashOnDeliveryComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [CashOnDeliveryComponent]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CashOnDeliveryComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
}
