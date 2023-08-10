import { Component } from '@angular/core';

@Component({
  selector: 'app-forex-converter',
  templateUrl: './forex-converter.component.html',
  styleUrls: ['./forex-converter.component.css']
})
export class ForexConverterComponent {
  fromCurrency: string = '';  // Set default values or initialize as needed
  toCurrency: string = '';
  amount: number | null = null;
  result: number | null = null;

  exchangeRates = [
    { id: 'USD', value: 1.126735 },
    { id: 'GBP', value: 0.876893 },
    { id: 'INR', value: 79.677056 }
  ];

  convertCurrency() {
    // Perform the conversion based on selected currencies and amount
    const fromRate = this.exchangeRates.find(rate => rate.id === this.fromCurrency)?.value || 1;
    const toRate = this.exchangeRates.find(rate => rate.id === this.toCurrency)?.value || 1;

    if (this.amount !== null && fromRate !== null && toRate !== null) {
      this.result = (this.amount / fromRate) * toRate;
    } else {
      this.result = null;
    }
  }
}
