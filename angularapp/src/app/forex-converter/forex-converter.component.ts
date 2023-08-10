import { Component } from '@angular/core';

@Component({
  selector: 'app-forex-converter',
  templateUrl: './forex-converter.component.html',
  styleUrls: ['./forex-converter.component.css'],
})
export class ForexConverterComponent {
  exchangeRates = {
    USD: 1.126735,
    GBP: 0.876893,
    INR: 79.677056,
  };

  fromCurrency = 'USD';
  toCurrency = 'USD';
  amount = 0;
  result: number | null = null;

  convert() {
    if (this.fromCurrency === this.toCurrency) {
      this.result = this.amount;
    } else {
      const rate = this.exchangeRates[this.toCurrency] / this.exchangeRates[this.fromCurrency];
      this.result = this.amount * rate;
    }
  }
}
