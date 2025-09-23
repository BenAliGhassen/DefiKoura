// TimerComp.test.jsx
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimerComp from './TimerComp';
import { ResetTimerAudio } from '../../Functions/TimerAudioManager';
import { Faux } from '../../Alerts/FalseAlert';

jest.mock('../../Functions/TimerAudioManager', () => ({
  ResetTimerAudio: jest.fn(),
}));

jest.mock('../../Alerts/FalseAlert', () => ({
  Faux: jest.fn(),
}));


describe('TimerComp', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('renders with initial time 30', () => {
    render(
      <TimerComp
        Qnumber={1}
        ptry={0}
        setRep={jest.fn()}
        setQnumber={jest.fn()}
        rep="test"
      />
    );
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  test('counts down every second', () => {
    render(
      <TimerComp
        Qnumber={1}
        ptry={0}
        setRep={jest.fn()}
        setQnumber={jest.fn()}
        rep="test"
      />
    );

    // advance 1 second inside act
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('29')).toBeInTheDocument();

    // advance another 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText('27')).toBeInTheDocument();
  });

  test('calls Faux, ResetTimerAudio, setQnumber and setRep when time hits 0', () => {
    const mockSetRep = jest.fn();
    const mockSetQnumber = jest.fn();

    render(
      <TimerComp
        Qnumber={1}
        ptry={0}
        setRep={mockSetRep}
        setQnumber={mockSetQnumber}
        rep="test"
      />
    );

    // advance timer to 0 inside act
    act(() => {
      jest.advanceTimersByTime(30000); // 30 seconds
    });

    expect(Faux).toHaveBeenCalledWith('test');
    expect(ResetTimerAudio).toHaveBeenCalled();
    expect(mockSetQnumber).toHaveBeenCalled();
    expect(mockSetRep).toHaveBeenCalledWith('');
  });
});
