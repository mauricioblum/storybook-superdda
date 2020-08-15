import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react';
import { ScrollView, LayoutChangeEvent } from 'react-native';
import { getMonth } from 'date-fns';

import { Container, MonthButton, MonthText } from './styles';

export interface MonthSelectorProps {
  currentMonth: number;
  onSelectMonth?(month: number): void;
  monthScrollCenterOffset?: number;
}

const allMonths = [
  {
    id: 0,
    name: 'JAN',
  },
  {
    id: 1,
    name: 'FEV',
  },
  {
    id: 2,
    name: 'MAR',
  },
  {
    id: 3,
    name: 'ABR',
  },
  {
    id: 4,
    name: 'MAI',
  },
  {
    id: 5,
    name: 'JUN',
  },
  {
    id: 6,
    name: 'JUL',
  },
  {
    id: 7,
    name: 'AGO',
  },
  {
    id: 8,
    name: 'SET',
  },
  {
    id: 9,
    name: 'OUT',
  },
  {
    id: 10,
    name: 'NOV',
  },
  {
    id: 11,
    name: 'DEZ',
  },
];

export const MonthSelector: React.FC<MonthSelectorProps> = ({
  currentMonth,
  onSelectMonth,
  monthScrollCenterOffset,
}) => {
  const monthList = useMemo(() => {
    const today = new Date();

    const currMonth = getMonth(today);

    const monthsTillEndOfYear = 12 - currMonth;

    const stripedMonths = [...allMonths].splice(0, monthsTillEndOfYear);

    const currentMonthList = [...allMonths];
    currentMonthList.splice(0, monthsTillEndOfYear);

    return currentMonthList.concat(stripedMonths);
  }, []);

  const monthSelectorRef = useRef<ScrollView>(null);
  const [layoutX, setLayoutX] = useState(0);

  const [monthsXPositions, setMonthXPositions] = useState<number[]>([]);

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const handlePositions = useCallback(
    (event: LayoutChangeEvent) => {
      const { layout } = event.nativeEvent;

      if (layout.x !== layoutX) {
        setLayoutX(layout.x);
      }
    },
    [layoutX],
  );

  const handleSelectMonth = useCallback(
    (month: number) => {
      setSelectedMonth(month);
      onSelectMonth && onSelectMonth(month);
    },
    [onSelectMonth],
  );

  useLayoutEffect(() => {
    const newMonthPos = [...monthsXPositions];

    newMonthPos.push(layoutX);
    setMonthXPositions(newMonthPos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layoutX]);

  useEffect(() => {
    const monthIndex = monthList.findIndex(
      (month) => month.id === currentMonth,
    );

    if (
      monthSelectorRef &&
      monthSelectorRef.current &&
      monthsXPositions.length > 0
    ) {
      monthSelectorRef.current.scrollTo({
        x: monthsXPositions[monthIndex] - (monthScrollCenterOffset || 400),
        y: 0,
        animated: false,
      });
    }
  }, [currentMonth, monthsXPositions, monthList, monthScrollCenterOffset]);

  return (
    <Container ref={monthSelectorRef}>
      {monthList.map((month) => (
        <MonthButton
          onLayout={(event) => handlePositions(event)}
          key={month.id}
          current={month.id === selectedMonth}
          onPress={() => handleSelectMonth(month.id)}
        >
          <MonthText current={month.id === selectedMonth}>
            {month.name}
          </MonthText>
        </MonthButton>
      ))}
    </Container>
  );
};
