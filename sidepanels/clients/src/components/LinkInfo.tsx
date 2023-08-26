import React from 'react'

interface Props {
  title: String
  url: String
}

function LinkInfo({ title, url }: Props) {
  return (
    <div>
      {title}, {url}
    </div>
  )
}

export default LinkInfo
