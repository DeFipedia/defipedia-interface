import { darken, mode, whiten} from '@chakra-ui/theme-tools'

export const ButtonStyles = {
    // style object for base or default sizes//
    baseStyle:{},
    // styles for different sizes : ["sm", "md", "lg"],
    sizes: {},
    // styles for different visual variants //
    variants: {
        primary: (props) => ({
            bg: mode("primary", "secondary")(props),
            color: "white",
            _hover: {
                bg: mode(darken("primary", 10), whiten("secondary", 20))(props)
            }
        }),
        outline: (props) => ({
            color: mode("primary", "secondary")(props),
            borderColor: mode("primary", "secondary")(props),
            _hover: {
                bg: mode(darken("primary", 10), whiten("secondary", 20))(props)
            }
        })
    },
    // default values for "size" and "variant"//
    defaultProps: {
        variant: "primary"
    }
}