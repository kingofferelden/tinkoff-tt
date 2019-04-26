import {animate, group, query, state, style, transition, trigger} from "@angular/animations";

export const fadeIn = trigger('fadeIn', [
    transition('* => *', [
        query(
            ':enter',
            [style({opacity: 0})],
            {optional: true}
        ),
        query(
            ':leave',
            [style({opacity: 1}), animate('0.5s', style({opacity: 0}))],
            {optional: true}
        ),
        query(
            ':enter',
            [style({opacity: 0}), animate('0.5s', style({opacity: 1}))],
            {optional: true}
        )
    ])
]);
