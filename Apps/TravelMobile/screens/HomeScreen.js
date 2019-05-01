import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            bal:1.00,
            newBal:0,
            inputValue: "",
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount (){
        return fetch('http://www.apilayer.net/api/live?access_key=0284c7cb41a1263cdf56d5efedebaf2b')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.quotes,
                })
            })
 
            .catch((error) => {
                console.log(error)
            });
    }


    
    usdToEuro = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDEUR,
        })
}

usdToPound = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDGBP,
        })
}

usdToRupee = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDINR,
        })
}

usdToAussie = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDAUD,
        })
}

usdToCad = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDCAD,
        })
}

usdToFranc = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDCHF,
        })
}

usdToYuan = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDCNY,
        })
}

usdToYen = () => {
        this.setState({
            newBal: this.state.inputValue * this.state.dataSource.USDJPY,
        })
}

_handleTextChange = inputValue => {
        this.setState({ inputValue });
    }
    changeText = ()=>{
        this.setState({
            newText:this.state.inputValue,
        })
    }
    
    

    render() {
        if(this.state.isLoading) {
            return(
                <View style = {styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        } else{
    
        return (
        
            <View style={styles.container}>
            <ImageBackground
                    style={styles.imgBackground}
                    source={{ uri: 'https://media.graytvinc.com/images/810*455/American+Flag44.jpg' }}
                >
                <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, borderColor: 'grey', borderWidth: 1,}}
                />
                    <Text style={styles.paragraph}>
                   Type how many USD you would like to convert.
                    </Text>
                <TouchableHighlight
                    onPress = {this.changeText}
                >
                    <Text style={styles.paragraph}> 
                    Touch here to change the following line
                    </Text>
                </TouchableHighlight>
                <Text style={styles.paragraph}>
                    {this.state.newText}
                </Text>
                
            
       
    

                <Text style={styles.title}>
                   Kegan's Currency Converter App
                </Text>
                
                <View style={styles.buttonContainer}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToEuro}
                >
                    <Text style={styles.buttonText}>
                        USD to Euro
                    </Text>
                    
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToPound}
                >
                    <Text style={styles.buttonText}>
                        USD to Pound
                    </Text>
                    
                </TouchableHighlight>
                </View>
                
                <View style={styles.buttonContainer}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToRupee}
                >
                    <Text style={styles.buttonText}>
                        USD to Rupee
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToAussie}
                >
                    <Text style={styles.buttonText}>
                        USD to Aussie
                    </Text>
                </TouchableHighlight>
                </View>
                
                <View style={styles.buttonContainer}>
                 <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToCad}
                >
                    <Text style={styles.buttonText}>
                        USD to Cad
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToFranc}
                >
                    <Text style={styles.buttonText}>
                        USD to Franc
                    </Text>
                </TouchableHighlight>
                </View>
                
                <View style={styles.buttonContainer}>
                 <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToYuan}
                >
                    <Text style={styles.buttonText}>
                        USD to Yuan
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToYen}
                >
                    <Text style={styles.buttonText}>
                        USD to Yen
                    </Text>
                </TouchableHighlight>
                </View>
                
                
                
                <Text style={styles.paragraph}>
                    Converted currency value: {this.state.newBal.toFixed(2)}
                </Text>
                </ImageBackground>
            </View>
      );
   }
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8BB0D3',
        
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#38CAD6',
        height: 40,
        width: 100,
        borderColor: '#7B5DF9',
        borderWidth: 1,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    paragraph: {
      marginBottom: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
      marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#a6a6a6',
    },
    
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },

    imgBackground: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
        
    },
    
    
});