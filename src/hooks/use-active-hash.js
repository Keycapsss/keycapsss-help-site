import { useEffect, useState } from 'react'

export const useActiveHash = (itemIds, rootMargin = undefined) => {
  const [activeHash, setActiveHash] = useState(``)
  const options = {
    rootMargin: rootMargin || '0px',
    threshold: 0.5,
  }

  function observerCallback(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveHash(entry.target.id)
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options)

    itemIds.forEach(id => {
      observer.observe(document.getElementById(id))
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // useEffect(() => {
  //   if (activeHash) {
  //     window.history.replaceState(null, null, `#${activeHash}`)
  //   }
  // }, [activeHash])

  return activeHash
}
