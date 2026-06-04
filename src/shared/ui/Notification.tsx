import '../ui/Notification.scss'
import successIcon from '../../images/success.png'
import { useEffect, useState } from 'react'

export function Notification({text} : {text : string}) {
    const [isVisible, setIsVisible] = useState<boolean>(true)
    const [isMounted, setIsMounted] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {setIsVisible(false)}, 2000)
        setTimeout(() => {setIsMounted(false)}, 2400)
    },[])

    if(!isMounted) return null

    return (
                
                <div className={`notification ${isVisible ? 'show' : 'hide'}`}>
                    <div className="notification__block">
                        <p className="notification__text">
                            {text}
                        </p>
                        <img src={successIcon} className='notification__success-image' alt='successIcon'/>
                    </div>
                </div>
                
    )

}