import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
    color: {
        /*Primary palette*/
        color_primary1:"#ff577f",
        color_primary2:"#ff427f",
        color_secondary:"#59323f",
        /*Grey Scale Palette*/
        grey: {
            0:"#F8F9FA",
            1:"#868E96",
            2:"#343b41",
            3:"#212529",
        },
        /*Feedback Palette*/
        sucess:"#3fe864",
        negative:"#e83f5b",
    },
    components: {
        Heading: {
            variants: {               
                title1: { 
                    color: "#F8F9FA",
                    fontFamily: "inter,sans-serif",   
                    fontStyle: "bold", 
                    fontWeight: "700",   
                    fontSize: "18,27px",  
                    lineHeight: "48px"
                },  
                title2: { 
                    color: "#F8F9FA",
                    fontFamily: "inter,sans-serif",   
                    fontStyle: "bold", 
                    fontWeight: "600",   
                    fontSize: "16,24px",  
                    lineHeight: "34px"
                },  
                title3: { 
                    color: "#F8F9FA",
                    fontFamily: "inter,sans-serif",   
                    fontStyle: "bold", 
                    fontWeight: "700",   
                    fontSize: "14,21px",  
                    lineHeight: "30px"
                }  
            }
        },
        Text: {
            variants: {
                headline:{ 
                    color: "#868e96",
                    fontFamily: "inter,sans-serif",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12.18px",
                    lineHeight: "22.33px"},
                    
                headLineBold:{ 
                    color: "#868e96",
                    fontFamily: "inter,sans-serif",
                    fontStyle: "bold",
                    fontWeight: "600",
                    fontSize: "12.18px",
                    lineHeight: "18.27px"},

                headLineItalic:{ 
                    color: "#868e96",
                    fontFamily: "inter,sans-serif",
                    fontStyle: "italic",
                    fontWeight: "400",
                    fontSize: "12.18px",
                    lineHeight: "18.27px"},
            }
        },
        Box: {
            variants: {
                tech_title: {
                    bg: "#121214",
                    h: "48.73px",
                    d: "flex",
                    flexDir: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "4px",
                    _hover: {
                        bg: "#fff",
                        color: "",
                    }
                }
            }
        },
        Input: {
            variants: {
                outline: {
                    bg: "#343b41",
                    h: "48px",
                    flexDir: "row",
                    alignItems: "center",
                    padding: "0px 16.2426px",
                    border: "1.2182px solid #343B41",
                    borderRadius: "4px",
                    _focus: {
                        border: "1.2182px solid #F8F9FA",
                        color: "#ffffff",
                    }
                }
            }
        },
        Button: {
            variants: {
                primary: {
                    bg: "#ff477f",
                    h: "48px",
                    d: "flex",
                    flexDir: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0px 22.3336px",
                    border: "none",
                    borderRadius: "4px",
                    color: "#ffffff",
                    _hover: {
                        bg: "#ff427f",
                        border: "1.2182px solid #FF427F",
                    },
                    _focus: {
                        bg: "#59323F",
                        border: "1.2182px solid #59323F",
                    }
                },
                secundary: {
                    bg: "#868E96",
                    h: "48px",
                    d: "flex",
                    flexDir: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0px 22.3336px",
                    border: "none",
                    borderRadius: "4px",
                    color: "#ffffff",
                    _hover: {
                        bg: "#343B41",
                        border: "1.2182px solid #343B41",
                    },
                    _focus: {
                        bg: "#343B41",
                        border: "1.2182px solid #343B41",
                    }
                },
                utility: {
                    bg: "#343B41",
                    h: "48px",
                    d: "flex",
                    flexDir: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0px 22.3336px",
                    border: "none",
                    borderRadius: "4px",
                    color: "#ffffff",
                }
            }
        }
    }
})

export default CustomTheme;