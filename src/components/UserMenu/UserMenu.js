import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <img
        className={s.avatar}
        src="https://st2.depositphotos.com/2945617/8802/v/450/depositphotos_88028046-stock-illustration-funny-pig-playing-in-the.jpg"
        title="User avatar"
        alt="Avatar"
        width={32}
      />
      <span className={s.name}>Welcome, {name}</span>
      <button
        className={s.button}
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
        title="Log out"
        aria-label="Log out"
      >
        Log out
      </button>
    </div>
  );
}
