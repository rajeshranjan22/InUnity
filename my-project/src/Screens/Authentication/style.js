import {StyleSheet} from "react-native";

const styles=StyleSheet.create({
    mainContainer: {
        backgroundColor:"white"
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
        color:"white",
    },
    smallIcon: {
        marginRight: 10,
        fontSize:24,
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        height:200,
        width: 250,
        marginTop: 50,
    },
    logo1: {
        height:200,
        width: 350,
        marginTop: 100,
        marginLeft: 30,
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18,
    },
    action: {
        flexDirection: "row",
        paddingTop: 14,
        paddingBottom: 3,
        marginTop: 15,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#420475",
        borderRadius:50,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        color: "#05375a"
    },
    loginContainer: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    header: {
        justifyContent: "flex-end",
        paddingHorizontal: 20,
    },
    text_header: {
        color: "#420475",
        fontWeight: "bold",
        fontSize: 30
    },
    button: {
        alignItems: "center",
        marginTop: -20,
        textAlign: "center",
        margin: 20,
    },
    inBut: {
        width: "70%",
        backgroundColor: "#420475",
        alignItems: "center",
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 15    
    },
    inBut2: {
        backgroundColor: "#420475",
        height: 65,
        width: 65,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
    },
    bottomButton: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    smallIcon2: {
        fontSize: 40,
    },
    bottomText: {
        color: "black",
        fontSize: 12,
        // fontWeight: 600,
        marginTop: 5

    }

})

export default styles;