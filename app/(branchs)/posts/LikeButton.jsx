'use client'

import { useState } from 'react'

export default function LikeButton ({ id }) {
  const [liked, setLiked] = useState(false)

  return (
    <buttom className='ms-5 cursor-default' onClick={() => { setLiked(!liked) }}>
      {liked ? '🧡' : '💔'}
    </buttom>
  )
}
