import { useAuth } from '@hooks/useAuth'
import { UserProps } from 'interfaces/user.interface'

import './styles.scss'

interface UserInfoProps {
  user: UserProps;
}

export function UserInfo({ user: { avatar, name } }: UserInfoProps) {
  const { signOut } = useAuth()

  return (
    <div className="user-info">
      <div>
        <img src={avatar} alt={name} />
        <span>{name}</span>
      </div>
      <button type='button' onClick={signOut}>
        Sair
      </button>
    </div>
  )
}
