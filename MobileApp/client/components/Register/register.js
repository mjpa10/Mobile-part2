
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Fontisto,FontAwesome, MaterialIcons,Ionicons } from '@expo/vector-icons'; 
import Axios from "axios";
import Button from './button_Register';

export function Register({onPress}) {

  const register = () =>{
    alert("Conta registrada com sucesso!!")

  }

  const requisitar = (texto) =>{
    Axios.post("http://192.168.1.105:3001/item", {item: texto})
  }
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Register</Text> 

      <View style={styles.inputdupla}>

        <TextInput
         style={styles.inputs}
         underlineColorAndroid="transparent"
         placeholder='Nome'        
         />
         <TextInput
         style={styles.inputalone}
         underlineColorAndroid="transparent"
         placeholder='sobrenome'        
         />
         <Ionicons name="person" size={24} color="#4448" style={styles.icon}  />
          

      </View> 
     <View style={styles.inputdupla}>

     <TextInput
         style={styles.inputcpf}
         underlineColorAndroid="transparent"
         keyboardType='numeric'
         placeholder='CPF'        
         />
         <TextInput
         style={styles.inputcpfalone}
         underlineColorAndroid="transparent"
        keyboardType='numeric'
         placeholder='Celular'        
         />
        
        </View>

        
    <View style={styles.email}>

        <TextInput
         style={styles.input}
         underlineColorAndroid="transparent"
         placeholder='Email:'        
         />
          <Fontisto name="email" size={24} color="#4448" style={styles.icon} />
          
      </View>
 <View style={styles.password}>

         <TextInput
      style={styles.input}
      placeholder='Senha'
      secureTextEntry
       />
        <Fontisto name="locked" size={24} color="#4448" style={styles.icon} />
          
         </View>

<View style={styles.password}>

         <TextInput
      style={styles.input}
      placeholder='Confirmar senha :'
      secureTextEntry
       />
       <Fontisto name="locked" size={24} color="#4448" style={styles.icon} />     
          
         </View>

  <View style={styles.inputdupla}>

        <TextInput
         style={styles.inputs}
         underlineColorAndroid="transparent"
        keyboardType='numeric'
         placeholder='Rua'        
         />
         
         <TextInput
         style={styles.inputalone}
         underlineColorAndroid="transparent"
        keyboardType='numeric'
         placeholder='N°'        
         />
         <MaterialIcons name="house" size={24} color="#4448" style={styles.icon} />
          

      </View>    

  <View style={styles.form}>

        <TextInput
         style={styles.input}
         underlineColorAndroid="transparent"
         placeholder='Ponto de Referência'        
         />
         <FontAwesome name="street-view" size={24} color="#4448" style={styles.icon} />
          
      </View>    

  <View>
     <Button labelButton="Register" onpress={register}/>
     </View>           

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bold:{
    fontSize: 20,
  },

  input:{
  borderWidth: 1,
  width: 350,
  height: 45,
  borderRadius:8,
  borderColor: '#E4E7EB',
  paddingLeft:40,
  fontSize:14,  
  margin: 10,
  left:0,
  },

  inputs:{
    borderWidth: 1,
    width: 165,
    height: 45,
    borderRadius:8,
    borderColor: '#e4E7EB',
    margin:10,
    fontSize:14, 
    paddingLeft:40,
    
  },

  email: {
    flexDirection:'row',
     marginLeft:20,
     
  },

   password :{
    flexDirection:'row',
    marginLeft:20,
  },
  icon:{
    right:350,
    top:20,
  },

  form:{
     flexDirection:'row',
  },
  inputdupla:{
    flexDirection:'row',
  },

  inputalone:{
  borderWidth: 1,
    width: 165,
    height: 45,
    borderRadius:8,
    borderColor: '#E4E7EB',
    margin:10,
    fontSize:14, 
    paddingLeft:10,
    
  },
  inputcpf:{
    borderWidth: 1,
    width: 165,
    height: 45,
    borderRadius:8,
    borderColor: '#E4E7EB',
    margin:10,
    fontSize:14, 
    paddingLeft:10,
    left:-10,
  },
  inputcpfalone:{
     borderWidth: 1,
    width: 165,
    height: 45,
    borderRadius:8,
    borderColor: '#E4E7EB',
    margin:10,
    fontSize:14, 
    paddingLeft:10,
    left:-10,
  },
 

});
