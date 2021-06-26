import { useAuth } from '@hooks/useAuth'
import { UserProps } from 'interfaces/user.interface'

import { UserInfoContainer } from './styles'

interface UserInfoProps {
  user: UserProps;
}

export function UserInfo({ user: { avatar, name } }: UserInfoProps) {
  const { signOut } = useAuth()

  return (
    <UserInfoContainer>
      <div>
        <img src={avatar} alt={name} />
        <span>{name}</span>
      </div>
      <button type='button' onClick={signOut}>
        Sair
      </button>
    </UserInfoContainer>
  )
}
