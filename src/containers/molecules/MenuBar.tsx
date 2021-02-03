import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { open, close } from 'actions';
import { MenuBarState } from 'reducer';
import MenuBar from 'components/molecules/MenuBar';

type EnhancedMenuBarProps = {
  title: string;
};

const EnhancedMenuBar: FC<EnhancedMenuBarProps> = ({ title }) => {
  const isOpen = useSelector<MenuBarState, boolean>((state) => state.isOpen);
  const dispatch = useDispatch();

  return (
    <MenuBar
      title={title}
      isOpen={isOpen}
      open={(event: React.KeyboardEvent | React.MouseEvent) =>
        dispatch(open(event))
      }
      close={(event: React.KeyboardEvent | React.MouseEvent) =>
        dispatch(close(event))
      }
    />
  );
};

export default EnhancedMenuBar;
