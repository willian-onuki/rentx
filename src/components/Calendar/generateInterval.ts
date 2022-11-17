import { addDays, eachDayOfInterval, format } from 'date-fns'
import { DateData } from 'react-native-calendars';
import { MarkedDatesProps } from '.';
import theme from '../../styles/theme';

export function generateInterval(start: DateData, end: DateData) {
  const startConverted = new Date(start.timestamp)
  const endConverted = new Date(end.timestamp)
  let interval: MarkedDatesProps = {};

  eachDayOfInterval({
    start: addDays(startConverted, 1),
    end: addDays(endConverted, 1)
  }).forEach((date) => {
    const dateFormatted = format(date, 'yyyy-MM-dd');
    interval = {
      ...interval,
      [dateFormatted]: {
        color: start.dateString === dateFormatted || end.dateString === dateFormatted ?  theme.colors.main : theme.colors.main_light,
        textColor: start.dateString === dateFormatted || end.dateString === dateFormatted ? theme.colors.main_light : theme.colors.main
      }
    }
  })

  return interval;
}
