import { ChangeEvent, useState, forwardRef } from 'react'
import { StreamSelectorInputContainer } from '@components/Input/styles'

import { ReactComponent as YoutubeImg } from '@assets/images/youtube.svg'
import { ReactComponent as TwitchImg } from '@assets/images/twitch.svg'
import { ReactComponent as LiveTvImg } from '@assets/images/live_tv.svg'
import PropTypes from 'prop-types'

interface StreamSelectorInputProps {
  onChange?: (newValue: string) => void;
}

export const StreamSelectorInput = forwardRef<HTMLInputElement, StreamSelectorInputProps>(
  function StreamSelectorInputComponent({ onChange }, ref) {
    const [inputValue, setInputValue] = useState('')

    const inputStreamRef = (inputValue.match(/twitch|youtube/)?.[0] ?? 'null') as 'youtube' | 'twitch' | 'null'

    const inputStreamIcons = {
      null: <LiveTvImg/>,
      twitch: <TwitchImg/>,
      youtube: <YoutubeImg/>
    }

    function onStreamSelectorValueChange(event: ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value)
      onChange && onChange(event.target.value)
    }

    return (
    <StreamSelectorInputContainer className={inputStreamRef ?? ''}>
      {inputStreamIcons[inputStreamRef]}
      <input
        placeholder='Link para a transmissão'
        value={inputValue}
        onChange={onStreamSelectorValueChange}
        type='url'
        required
        ref={ref}
      />
    </StreamSelectorInputContainer>
    )
  })

StreamSelectorInput.propTypes = {
  onChange: PropTypes.func
}
