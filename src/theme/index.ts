import { extendTheme, theme as base } from '@chakra-ui/react'
import {ButtonStyles as Button} from './components/ButtonStyles'
const theme = extendTheme({
    colors: {
        primary: '#ff6400',
        background: '#ffffff',
        text: '#252525',
        secondary: '#006fff',
        complimentary: '#D6D6D6'
    },
    components: {
        Button
    }
})

export default theme