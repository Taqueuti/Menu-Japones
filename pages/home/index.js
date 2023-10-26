import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TextInput, ScrollView } from "react-native";
import Logo from '../..//assets/logo.png'
import colors from "../../utils/colors";
import ItemMenu from "../../src/components/itemMenu";
import { filterSuggestion, searchItemMenu } from "../../src/services/searchFilter";


export default function HomeScreen() {

  const [title, setTitle] = useState("Sugestão")
  const [term, setTerm] = useState();

  const [menuList, setMenuList] = useState(filterSuggestion())

  function handleSearch(termTyped) {
    if(termTyped.length > 2){
      const searchList = searchItemMenu(termTyped)

      setMenuList(searchList);
      setTitle("Você buscou por: "+termTyped)
    }
    else{
      setMenuList(filterSuggestion())
      setTitle("Sugestões")
    }
    setTerm(termTyped);  
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.title}>CARDÁPIO JAPONÊS</Text>
      </View>
      <TextInput onChangeText={(termTyped) => handleSearch(termTyped)} value={term} placeholder="O que você procura?" style={styles.input} />
      <Text style={styles.textInput}>{title}</Text>

      <ScrollView>
        {
          menuList.map((
            product, index) => (
            <ItemMenu key={index} name={product.name} description={product.description} image={product.image} />
          ))
        }
      </ScrollView>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.background
  },
  logoArea: {
    width: '100%',
    height: 100,
  },

  logo: {
    width: 92,
    height: 80,
    marginBottom: 10,
    alignSelf: 'center'
  },

  title: {
    fontSize: 12,
    color: colors.offWhite,
    textAlign: 'center',
  },

  input: {
    borderRadius: 50,
    width: '100%',
    height: 50,
    paddingHorizontal: 24,
    marginBottom: 10,
    marginTop: 25,
    backgroundColor: colors.offWhite
  },
  textInput: {
    fontSize: 23,
    color: colors.offWhite,
  },





});
