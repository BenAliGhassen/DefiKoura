import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// mock other components and functions
jest.mock('../../Components/TimerComponent/TimerComp', () => () => <div data-testid="timer-comp" />);
jest.mock('../../Components/ScoreHolderComponent/ScoreHolderComp', () => ({
  ScoreHolder: () => <div data-testid="score-holder" />,
}));
jest.mock('../../Components/AutoCompleteComponent/AutoComp', () => () => <input data-testid="auto-comp" />);
jest.mock('../../Components/TeamLogosComponent/TeamLogosComp', () => () => <div data-testid="team-logo" />);
jest.mock('../../Components/ButtonComponent/ButtonComp', () => (props) => (
  <button onClick={props.onClick} data-testid="button-comp">{props.text}</button>
));
jest.mock('../../Components/ScoreComponent/ScoreComp', () => () => <div data-testid="score-comp" />);
jest.mock('../../Components/ButtonComponent/ButtonBackComp', () => () => <div data-testid="button-back" />);

import { Reponse } from '../../Questions/CheckAnswer';
import { Correct } from '../../Alerts/CorrectAlert';
import { Faux } from '../../Alerts/FalseAlert';

jest.mock('../../Questions/Agent', () => ({
  AgentCarrer: jest.fn(() => [0]),
}));
jest.mock('../../Questions/CheckAnswer', () => ({
  Reponse: jest.fn(() => 'Correct'),
}));
jest.mock('../../Alerts/CorrectAlert', () => ({
  Correct: jest.fn(),
}));
jest.mock('../../Alerts/FalseAlert', () => ({
  Faux: jest.fn(),
}));
jest.mock('../../Functions/TimerAudioManager', () => ({
  Play: jest.fn(),
  Stop: jest.fn(),
}));
jest.mock('../../Functions/NextRound', () => ({
  ToRound2: jest.fn(),
}));
jest.mock('../../Functions/RemoveLocalItems', () => ({
  RemoveItems: jest.fn(),
}));

import RoundTwo from './RoundTwo';

describe('RoundTwo Page (core logic)', () => {
  beforeEach(() => {
    localStorage.setItem('ScoreJ1', '1');
    localStorage.setItem('ScoreJ2', '2');
    localStorage.setItem('joueur1', 'Player1');
    localStorage.setItem('joueur2', 'Player2');
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('renders round elements correctly', () => {
    render(<RoundTwo />);
    expect(screen.getByTestId('score-holder')).toBeInTheDocument();
    expect(screen.getByTestId('timer-comp')).toBeInTheDocument();
    expect(screen.getByTestId('auto-comp')).toBeInTheDocument();
    expect(screen.getByTestId('button-comp')).toBeInTheDocument();
  });

  test('clicking "Repondre" calls Correct when answer is Correct', () => {
    Reponse.mockReturnValueOnce('Correct');
    render(<RoundTwo />);
    fireEvent.click(screen.getByTestId('button-comp'));
    expect(Correct).toHaveBeenCalled();
    expect(Faux).not.toHaveBeenCalled();
  });

  test('clicking "Repondre" calls Faux when answer is Wrong', () => {
    Reponse.mockReturnValueOnce('Wrong');
    render(<RoundTwo />);
    fireEvent.click(screen.getByTestId('button-comp'));
    expect(Faux).toHaveBeenCalled();
    expect(Correct).not.toHaveBeenCalled();
  });
});
