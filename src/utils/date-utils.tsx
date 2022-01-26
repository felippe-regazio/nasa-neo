export type KeyNumberValueStr = {
  [index: number]: string
};

export type DateDetails = {
  day?: number,
  fullYear?: number,
  weekDayIndex?: number,
  monthIndex?: number,
  weekDayName?: string,
  monthName?: string
};

export default {
  getFormatedCloseApproachDate(itemCloseApproachData: any) {
    if (
      !itemCloseApproachData || 
      !itemCloseApproachData[0] ||
      !itemCloseApproachData[0].close_approach_date_full
    ) {
      return 'Data desconhecida';
    }
    
    const rawDate = itemCloseApproachData[0].close_approach_date_full;
    const date = new Date(rawDate);
    const dateParts: DateDetails = this.getDateDetails(date);

    console.log(rawDate, dateParts);

    return `${dateParts.weekDayName}, ${dateParts.day} de ${dateParts.monthName} de ${dateParts.fullYear}`
  },

  getDateDetails(date: Date): DateDetails {
    if (!date) return {};

    const details: DateDetails = {
      day: date.getDate(),
      fullYear: date.getFullYear(),
      weekDayIndex: date.getDay(),
      monthIndex: date.getMonth() + 1,
      weekDayName: this.weekDayIndexToStr(date.getDay()),
      monthName: this.monthIndexToStr(date.getMonth() + 1)
    };

    return details;
  },

  weekDayIndexToStr(index: number) {
    const map: KeyNumberValueStr = {
      1: 'Segunda-feira',
      2: 'Terça-feira',
      3: 'Quarta-feira',
      4: 'Quinta-feira',
      5: 'Sexta-feira',
      6: 'Sábado',
      7: 'Domingo'
    };
    
    return map[index] || '';
  },

  monthIndexToStr(index: number) {
    const map: KeyNumberValueStr = {
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
    
    return map[index] || '';
  }  
}