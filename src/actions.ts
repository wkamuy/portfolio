import React from 'react';

export const MenuBarActionType = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE',
} as const;

type ValueOf<T> = T[keyof T];

export type MenuBarAction = {
  type: ValueOf<typeof MenuBarActionType>;
  event?: React.KeyboardEvent | React.MouseEvent;
};

export const open = (
  event: React.KeyboardEvent | React.MouseEvent,
): MenuBarAction => ({
  type: MenuBarActionType.OPEN,
  event,
});

export const close = (
  event: React.KeyboardEvent | React.MouseEvent,
): MenuBarAction => ({
  type: MenuBarActionType.CLOSE,
  event,
});
