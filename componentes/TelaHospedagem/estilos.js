import { StyleSheet } from "react-native";

const estilo = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#beceff",
        padding: 20,
    },

    titulo: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: 5,
    },

    descricao: {
        textAlign: "center",
        fontSize: 9,
        marginBottom: 20,
    },

    card: {
        width:320,
        height:160,
        backgroundColor: "#fff",
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderColor: "#979797",
        borderWidth: 1,
    },

    tituloCard: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },

    descricaoCard: {
        fontSize: 12,
        fontWeight: "normal",
    },

    foto: {
        width: 300,
        height:50,
        marginBottom: 10,
    }
})

export default estilo;