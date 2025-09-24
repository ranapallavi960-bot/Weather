import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#2d92ef",
      flex: 1,
      // padding: 5,
      padding:20
   },
   InputData: {
      backgroundColor: "#ebfffc",
      width: "75%",
      // marginLeft: 20,
      borderWidth: 1,
      borderRadius: 20,
      padding:15,
      flex:1
   },
   searchButton: {
      backgroundColor: "#ebfffc",
      padding: 10,
      borderRadius: 20
   },
   search: {
      width: 20,
      height: 20
   },
   searchPlace: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      // marginTop: 20,
   },
   sunny: {
      width: 100,
      height: 100,
      //     alignSelf:"center",
      marginBottom: 20
   },
   mainContent: {

      alignSelf: "center",
      marginTop: 30,
      alignItems: "center"

   },
   temperature: {
      fontSize: 70,
      color: "#fff"
   },
   location: {
      fontSize: 20,
      color: "#fff"
   },
   weatherData: {
      flexDirection: "row",
      // width:"100%",
      marginTop: 60,
      justifyContent: "space-between",

   },
   humidity: {
      width: 30,
      height: 30,
      tintColor: "#fff"
   },
   wind: {
      width: 30,
      height: 30,
      tintColor: "#fff"
   },
   humidityCol:{
      flexDirection:"row",
gap:10
   },
    windcol:{
      flexDirection:"row",
      gap:10
   },
   detailOfHumidityAndWind:{
      fontSize:16
   },

})

export default styles