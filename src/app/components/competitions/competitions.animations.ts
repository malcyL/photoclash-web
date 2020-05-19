import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const competitionAddFabAnimations = [
  trigger('addCompetitionFabToggler', [
    state('inactive', style({
      transform: 'rotate(0deg)'
    })),
    state('active', style({
      transform: 'rotate(225deg)'
    })),
    transition('* <=> *', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ])
];
