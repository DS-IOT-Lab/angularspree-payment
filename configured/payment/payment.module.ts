
let declarations = <any> [
  PaymentComponent,
  PaymentModesListComponent,
  PaymentModeComponent,
  CreditCardComponent
];

declarations.push(CashOnDeliveryComponent);

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
