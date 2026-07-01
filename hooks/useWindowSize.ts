import { useWindowSize } from '@uidotdev/usehooks'

const useWindowSizeCustom = () => {
    const size = useWindowSize()
    const width = size.width ?? 0

    const isMobile = size.width ? size.width < 768 : false

    return { 
        isMobile,
        width,
    }
}

export default useWindowSizeCustom