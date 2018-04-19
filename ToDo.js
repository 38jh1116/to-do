import React,{Component} from "react";
import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from "react-native"

const {width, height} = Dimensions.get("window");

export default class ToDo extends React.Component{
    state ={
        isEditing : false,
        isCompleted : false,
        toDoValue : ""
    };
    render(){
        const{isCompleted,isEditing} = this.state;
        const{text} = this.props;

        return (
            <View style = {styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress = {this._toggleComplete}>
                        <View style = {[styles.circle,isCompleted ? styles.completedCircle : styles.uncompletedCircle]}/>
                    </TouchableOpacity>
                        <Text style= {[styles.text,isCompleted ? styles.completedText : styles.uncompletedText]}>{text}</Text>
                </View>
                    {isEditing ? (
                        <View style = {styles.actions}>
                            <TouchableOpacity onPress ={this._finishEditing}>
                                <View style = {styles.actionCotainer}>
                                    <Text style = {styles.actionText}>✅</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : <View style = {styles.actions}>
                            <TouchableOpacity onPress = {this._startEditing}>
                                <View style = {styles.actionCotainer}>
                                    <Text style = {styles.actionText}>✏️</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style = {styles.actionCotainer}>
                                    <Text style = {styles.actionText}>❌</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
            </View>
        );
    }
    _toggleComplete = () =>{
        this.setState(prevState =>{
            return{
                isCompleted : !prevState.isCompleted
            };
        });
    };
    _startEditing = () =>{
        const {text} = this.props.text;
        this.setState({
            isEditing : true,
            toDoValue :text
        });
    };
    _finishEditing = () => {
        this.setState({
            isEditing : false
        });
    }
}

const styles = StyleSheet.create({
    container : {
        width : width-50,
        borderBottomColor : "#bbb",
        borderBottomWidth : StyleSheet.hairlineWidth,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between"
    },
    circle : {
        width:25,
        height : 25,
        borderRadius : 15,
        borderColor : "red",
        marginRight : 20,
        borderWidth : 3
    },
    completedCircle:{
        borderColor : "#bbb"
    },
    uncompletedCircle:{
        borderColor : "#F23456"
    },
    text : {
        fontWeight : "500",
        fontSize : 17,
        marginVertical : 20
    },
    completedText : {
        color : "#bbb",
        textDecorationLine : "line-through"
    },
    uncompletedText:{
        color : "#353535"
    },
    column : {
        flexDirection : "row",
        alignItems :"center",
        width : width/2
    },
    actions : {
        flexDirection : "row"
    },
    actionCotainer : {
        marginVertical : 10,
        marginHorizontal : 10
    }
})