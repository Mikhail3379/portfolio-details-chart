import React, { memo, useEffect, useState } from "react";
import { View, StyleSheet, Button,  Dimensions, Text, TouchableOpacity, Pressable, Alert } from "react-native";
import {
  BackButton
  
} from "../components";
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { PieChart } from "react-native-gifted-charts";
import { Navigation } from "../types";
import { BsArrowBarDown } from "react-icons/bs";
import AppButton from "../components/AppButton";
import ArrowBack from "../assets/SVG/ArrowBack";
// import { Icon } from 'react-native-elements'
import NextButton from "../components/NextButton";
import { LineChart } from "react-native-gifted-charts"
// import NovaIconSmall from "../assets/SVG/NovaIconSmall";
import JoinButton from "../components/JoinButton";
// import { AntDesign } from '@expo/vector-icons';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
type Props = {
  navigation: Navigation;
};
const { width, height } = Dimensions.get('window');


const PortfolioDetailChartScreen = ({ navigation }: Props) => {
  const [data, setData] = useState([]);
  const data1H = [
    {value: 70},
    {value: 36},
    {value: 50},
    {value: 40},
    {value: 18},
    {value: 38},
  ];
  const data24H = [
    {value: 50},
    {value: 10},
    {value: 45},
    {value: 30},
    {value: 45},
    {value: 18},
  ];
  const data1W = [
    {value: 10},
    {value: 60},
    {value: 15},
    {value: 60},
    {value: 25},
    {value: 58},
  ];
  const data1M = [
    {value: 70},
    {value: 30},
    {value: 25},
    {value: 10},
    {value: 15},
    {value: 38},
  ];
  const data1Y = [
    {value: 40},
    {value: 50},
    {value: 25},
    {value: 10},
    {value: 55},
    {value: 48},
  ];

  return (
    <><View style={{
        backgroundColor: 'blue',
        height: '70%',
        
          
     }}
    >
       <BackButton goBack={() => navigation.navigate("Dashboard")} />
    <Text style={{
        marginTop: '30%',
        marginLeft: '5%',
        padding: 'auto',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
    }}>Bullrun Alpha </Text>
    <Text style={{
        marginTop: '5%',
        marginLeft: '5%',
        padding: 'auto',
        color: 'white',
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'left',
    }}>by NOVA </Text>
   <View
          style={{
            paddingVertical: 10,
            paddingLeft: 20,
            backgroundColor: 'blue',
          }}>
          <LineChart
            areaChart
            curved
            //@ts-ignore
            data={data}
             //@ts-ignore
            // data2={data2}
            hideDataPoints
            spacing={68}
            color1="#8a56ce"
            // color2="#56acce"
            startFillColor1="#8a56ce"
            // startFillColor2="#56acce"
            endFillColor1="#8a56ce"
            // endFillColor2="#56acce"
            startOpacity={0.9}
            endOpacity={0.2}
            initialSpacing={0}
            noOfSections={4}
            yAxisColor="blue"
            yAxisThickness={0}
            rulesType="solid"
            rulesColor="gray"
            yAxisTextStyle={{color: 'gray'}}
            // yAxisLabelSuffix="%"
            xAxisColor="lightgray"
            pointerConfig={{
              pointerStripUptoDataPoint: true,
              pointerStripColor: 'lightgray',
              pointerStripWidth: 2,
              strokeDashArray: [2, 5],
              pointerColor: 'lightgray',
              radius: 4,
              // pointerLabelWidth: 100,
              // pointerLabelHeight: 120,
              pointerLabelComponent: (items: { value: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }[]) => {
                return (
                  <View
                    style={{
                      height: 100,
                      width: 70,
                      backgroundColor: '#282C3E',
                      borderRadius: 4,
                      justifyContent:'center',
                      paddingLeft:16,
                    }}>
                    <Text style={{color: 'lightgray',fontSize:12}}>{1}</Text>
                    <Text style={{color: 'white', fontWeight:'bold'}}>{items[0].value}</Text>
                    {/* <Text style={{color: 'lightgray',fontSize:12,marginTop:12}}>{2}</Text>
                    <Text style={{color: 'white', fontWeight:'bold'}}>{items[1].value}</Text> */}
                  </View>
                );
              },
            }}
          />
          <View
            style={{
              position: 'absolute',
              marginLeft: 340,
              marginTop: 80,
            }}
          >
          <Button 
          
          title=">" onPress={() => navigation.navigate("PortfolioDetailsScreen")} 
          color="white"/>
          </View>
        </View>
   <View style={{
       flexDirection: "row",
         
            marginTop: '10%',
    }}>
  
   <View
        style={{
          marginLeft: '15%',
          backgroundColor: "white",
          height: 35,
          width: 50,
          
        }}><Button 
        //@ts-ignore
        onPress={() => setData(data1H)} title="1H" color={"black"}></Button>
            </View> 
            
           
            <View
        style={{
          marginLeft: '3%',  
          backgroundColor: "white",
          height: 35,
          width: 50,
          
        }}><Button 
        //@ts-ignore
        onPress={() => setData(data24H)} title="24H" color={"black"}></Button>
            </View>
            
            <View
        style={{
        marginLeft: '3%', 
          backgroundColor: "white",
          height: 35,
          width: 50,
          
        }}><Button 
        //@ts-ignore
        onPress={() => setData(data1W)} title="1W" color={"black"}></Button>
            </View> 
            <View
        style={{
        marginLeft: '3%', 
          backgroundColor: "white",
          height: 35,
          width: 50,
          
        }}><Button 
        //@ts-ignore
        onPress={() => setData(data1M)} title="1M" color={"black"}></Button>
            </View> 
            <View
        style={{
        marginLeft: '3%', 
          backgroundColor: "white",
          height: 35,
          width: 50,
          
        }}><Button 
        //@ts-ignore
        onPress={() => setData(data1Y)} title="1Y" color={"black"}></Button>
            </View> 
            </View>
            
            </View>
            
            <View style={{
                marginTop: '10%',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '80%',
                height: '5%',
                backgroundColor: '#38FFBD',
            }}> 
            <Button
            
        title="JOIN"
        color={'white'}
        
        onPress={() => Alert.alert('Joined')}
      />
            </View>  
            <View style={{
                marginTop: '10%',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '80%',
                height: '5%',
                backgroundColor: 'white',
                borderColor: 'purple',
                borderWidth: 1,
            }}>
            <Button 
        title="SAVE"
        color={'purple'}
        
        onPress={() => Alert.alert('Saved')}
      />
      
            </View>  
            <View >
      {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
    </View> 
    </>

   
    );
  }

  
export default memo(PortfolioDetailChartScreen);
