import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Feather, Entypo, AntDesign } from "@expo/vector-icons";
import Axios from "axios";


export function Index() {
  const [itens, setItens] = useState([
    { nome: ` `, key: 1 },
    { nome: ` `, key: 2 },
    { nome: `  `, key: 3 },
    { nome: "  ", key: 4 },
    { nome: "  ", key: 5 },
    { nome: "  ", key: 6 },
    { nome: "  ", key: 7 },
    { nome: "  ", key: 8 },
    { nome: "  ", key: 9 },
    { nome: "  ", key: 10 },
    { nome: "  ", key: 11 },
    { nome: "  ", key: 12 },
    { nome: "  ", key: 13 },
    { nome: "  ", key: 14 },
  ]);

  const home = () => {
    alert("Comando para onPress={home} realizado com sucesso!!");
  };
  const search = () => {
    alert("Comando para onPress={search} realizado com sucesso!!");
  };
  const request = () => {
    alert("Comando para onPress={request} realizado com sucesso!!");
  };

  const requisitar = (texto) =>{
    Axios.post("http://192.168.1.105:3001/item", {item: texto})
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerh1}>
        <Text style={styles.h1}>Categorias</Text>
      </View>

      <View style={styles.box}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.key}
          data={itens}
          renderItem={({ item }) => (
            <Text style={styles.item}> {item.nome} </Text>
          )}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footertext}>Inicio</Text>
        <TouchableOpacity onPress={home}>
          <Entypo name="home" size={22} color="white" style={styles.iconhome} />
        </TouchableOpacity>

        <Text style={styles.footertext}>Busca</Text>
        <TouchableOpacity onPress={search}>
          <Feather
            name="search"
            size={22}
            color="white"
            style={styles.iconsearch}
          />
        </TouchableOpacity>

        <Text style={styles.footertext}>Pedidos</Text>
        <TouchableOpacity onPress={request}>
          <AntDesign
            name="book"
            size={22}
            color="white"
            style={styles.iconrequest}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "	rgb(232, 193, 151)",
    justifyContent: "center",
    alignContent: "center",
  },

  conatiner0: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    marginTop: 20,
    flexDirection: "row",
  },

  containerh1: {
    marginLeft: 20,
    marginBottom: -45,
  },

  h1: {
    marginTop:55,
    fontSize: 20,
    color: "#967259",
  },

  input: {
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 40,
    fontSize: 14,
    borderColor: "#E4E7EB",
    width: 380,
    height: 40,
    backgroundColor: "white",
    marginBottom: 15,
    left: 13,
    elevation: 5,
  },

  icon: {
    right: 355,
    bottom: 7,
  },

  item: {
    fontSize: 20,
    width: "46%",
    height: 120,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    margin: 8,
    padding: 10,
    flexGrow: 1,
    borderRadius: 15,
    paddingLeft: 30,
    paddingTop: 10,
    elevation: 5,
  },
  box: {
    flex: 0,
    marginTop: 50,
  },

  footer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#967259",
    flexDirection: "row",
    paddingBottom: 40,
   
    bottom:50,
  },

  footertext: {
    color: "white",
    left: 25,
    top: 38,
    marginLeft: 50,
  },

  iconsearch: {
    left: -8,
    top: 17,
  },

  iconhome: {
    left: -5,
    top: 17,
  },

  iconrequest: {
    left: -12,
    top: 17,
  },
});
