import { StyleSheet } from "react-native";

const estilo = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    cardParaty: {
        width: 320,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        borderColor: "#979797",
        borderWidth: 1,
    },

    titulo: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 10,
    },

    paragrafo: {
        textAlign: "center",
        marginBottom: 20,
    },

    botao: {
        marginBottom: 10,
    },

    foto: {
        width:300,
        height:200,
        marginBottom: 20,
    }
})

export default estilo;