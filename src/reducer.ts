import { Reducer } from 'redux';
import { MenuBarAction, MenuBarActionType as Type } from 'actions';

export type MenuBarState = { isOpen: boolean };
export const initialState: MenuBarState = { isOpen: false };

export const MenuBarReducer: Reducer<MenuBarState, MenuBarAction> = (
  state: MenuBarState = initialState,
  action: MenuBarAction,
): MenuBarState => {
  switch (action.type) {
    case Type.OPEN:
      if (action.event !== undefined) {
        if (
          action.event.type === 'keydown' &&
          ((action.event as React.KeyboardEvent).key === 'Tab' ||
            (action.event as React.KeyboardEvent).key === 'Shift')
        ) {
          return {
            ...state,
          };
        }
      }

      return {
        ...state,
        isOpen: true,
      };
    case Type.CLOSE:
      if (action.event !== undefined) {
        if (
          action.event.type === 'keydown' &&
          ((action.event as React.KeyboardEvent).key === 'Tab' ||
            (action.event as React.KeyboardEvent).key === 'Shift')
        ) {
          return {
            ...state,
          };
        }
      }

      return {
        ...state,
        isOpen: false,
      };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};
