import { useWindowSize } from '@uidotdev/usehooks'

const useWindowSizeCustom = () => {
    const size = useWindowSize()

    const isMobile = size.width ? size.width < 768 : false

    return { isMobile }
}

export default useWindowSizeCustom