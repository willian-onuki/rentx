import React from 'react';

import {
  Calendar as CustomCalendar,
  DateData,
  LocaleConfig,
} from 'react-native-calendars';

import { Feather } from '@expo/vector-icons';
import {useTheme} from 'styled-components'
import { ptBr } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBr;

LocaleConfig.defaultLocale = 'pt-br';

export interface MarkedDatesProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  }
}

interface CalendarProps {
  markedDates: MarkedDatesProps;
  dayPressed: (date: DateData) => void;
}

export function Calendar({ markedDates, dayPressed }: CalendarProps) {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) =>
        <Feather
          size={22}
          color={theme.colors.text}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      }
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.secondary_600,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={String(new Date())}
      markingType='period'
      markedDates={markedDates}
      onDayPress={dayPressed}
    />
  )
}
