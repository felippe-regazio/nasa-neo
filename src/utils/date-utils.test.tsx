import DateUtils, { DateDetails } from './date-utils';
import type { KeyNumberValueStr } from './date-utils'

describe('Test utils functions', () => {
  test('getFormatedCloseApproachDate Invalid Entries', () => {
    const wrongObjects = [
      {},
      null,
      [],
      '',
      [{}],
      [null],
      [''],
      [{ close_approach_date_full: '' }]
    ];

    wrongObjects.forEach(item => {
      const givenDate = DateUtils.getFormatedCloseApproachDate(item);

      expect(givenDate).toEqual('Data desconhecida');
    });
  });

  test('getDateDetails', () => {
    const rawDate = '2022-Jan-31 05:32';
    const date = new Date(rawDate);
    const dateParts: DateDetails = DateUtils.getDateDetails(date);

    const compare: DateDetails = {
      day: 31,
      fullYear: 2022,
      weekDayIndex: 1,
      monthIndex: 1,
      weekDayName: "Segunda-feira",
      monthName: "Janeiro",
    };

    expect(JSON.stringify(dateParts)).toEqual(JSON.stringify(compare));
  });

  test('weekDayIndexToStr', () => {
    const compare: KeyNumberValueStr = {
      1: 'Segunda-feira',
      2: 'Terça-feira',
      3: 'Quarta-feira',
      4: 'Quinta-feira',
      5: 'Sexta-feira',
      6: 'Sábado',
      7: 'Domingo'      
    };

    Object.keys(compare).forEach((dayIndex: string) => {
      const dayStr = DateUtils.weekDayIndexToStr(Number(dayIndex));

      expect(dayStr).toEqual(compare[Number(dayIndex)]);
    });

    expect(DateUtils.weekDayIndexToStr(8)).toEqual('');
  });

  test('monthIndexToStr', () => {
    const compare: KeyNumberValueStr = {
      1: 'Janeiro',
      2: 'Fevereiro',
      3: 'Março',
      4: 'Abril',
      5: 'Maio',
      6: 'Junho',
      7: 'Julho',
      8: 'Agosto',
      9: 'Setembro',
      10: 'Outubro',
      11: 'Novembro',
      12: 'Dezembro',   
    };

    Object.keys(compare).forEach((monthIndex: string) => {
      const monthStr = DateUtils.monthIndexToStr(Number(monthIndex));

      expect(monthStr).toEqual(compare[Number(monthIndex)]);
    });

    expect(DateUtils.monthIndexToStr(13)).toEqual('');
  });  
});