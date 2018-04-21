
let declarations = <any> [
  PaymentComponent,
  PaymentModesListComponent,
  PaymentModeComponent,
  CreditCardComponent
];
// @presence (CashOnDelivery)
{
  declarations.push(CashOnDeliveryComponent);
}
// @presence (NetBanking)
{
  declarations.push(NetBankingComponent);
}
// @presence (Check)
{
  declarations.push(CheckComponent);
}
@NgModule({
  declarations: declarations,
  exports: [],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule { }
