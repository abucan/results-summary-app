import ReactionLogo from './assets/images/icon-reaction.svg';
import MemoryLogo from './assets/images/icon-memory.svg';
import VerbalLogo from './assets/images/icon-verbal.svg';
import VisualLogo from './assets/images/icon-visual.svg';

const data = [
  {
    category: 'Reaction',
    score: 80,
    icon: ReactionLogo,
    textColor: 'hsl(0, 100%, 67%)',
    backgroundColor: 'hsl(0, 100%, 95%)',
  },
  {
    category: 'Memory',
    score: 92,
    icon: MemoryLogo,
    textColor: 'hsl(39, 100%, 56%)',
    backgroundColor: 'hsl(39, 100%, 95%)',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: VerbalLogo,
    textColor: 'hsl(166, 100%, 37%)',
    backgroundColor: 'hsl(166, 100%, 95%)',
  },
  {
    category: 'Visual',
    score: 72,
    icon: VisualLogo,
    textColor: 'hsl(234, 85%, 45%)',
    backgroundColor: 'hsl(234, 85%, 95%)',
  },
];

export default data;
