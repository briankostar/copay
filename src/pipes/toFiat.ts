import { Pipe, PipeTransform } from '@angular/core';
import { TxFormatProvider } from '../providers/tx-format/tx-format';
import { ConfigProvider } from '../providers/config/config';

@Pipe({ name: 'toFiat' })
export class ToFiatPipe implements PipeTransform {
  private unitCode: string;

  constructor(
    private configProvider: ConfigProvider,
    private txFormatProvider: TxFormatProvider
  ) { 
    this.unitCode = this.configProvider.get().wallet.settings.unitCode;
  }
  transform(value: string, satoshis: number): any {
    return this.txFormatProvider.formatAlternativeStr(this.unitCode, satoshis);
  }
}