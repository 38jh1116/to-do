import React from 'react';
import { StyleSheet, Text, View ,StatusBar,Dimensions,TextInput,Platform} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ToDo from './ToDo' 

const {height , width} = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo : ""
  };
  render() {
    const{newToDo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "light-content" />
        <Text style = {styles.title}>To-Do</Text>
          <View style = {styles.card}>
          <TextInput 
            style={styles.input} 
            placeholder ={"New To do"} 
            value={newToDo} 
            onChangeText ={this._controllNewToDo} 
            placeholderTextColor = {"#999"}
            returnKeyType={"done"} 
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle = {styles.toDos}>
            <ToDo text={"Hello I'm a To Do"}/>
          </ScrollView>
        </View>
      </View>
    );
  }
  _controllNewToDo = text =>{
    this.setState({
      newToDo : text
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
  title : {
    color :"white",
    fontSize : 30,
    marginTop : 50,
    fontWeight:"200",
    marginBottom:30,
  },
  card : {
    backgroundColor : "white",
    flex : 1,
    width : width - 25,
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
    ...Platform.select({
      ios : {
        shadowColor : "rgb(50,50,50)",
        shadowOpacity : 0.5,
        shadowOffset : {
          height : -1,
          width : 0
        }
      },
      android : {
        elevation : 3
      }
    })
  },
  input :{
    padding :20,
    borderBottomColor : "#bbb",
    borderBottomWidth : 1,
    fontSize : 20
    },
  toDos : {
      alignItems : "center"
    }
});
