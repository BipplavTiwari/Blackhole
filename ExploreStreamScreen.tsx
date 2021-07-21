// Explore Streams Screen
import * as React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
//import ProfileHeader from "./header";
import { useState } from 'react';

import StreamDescriptionOverlay from './ui/components/StreamDescription/StreamDescriptionOverlayComponent'; 



const Myitem=({item}) => {
    const [isopen,setisopen] = useState(false);  
    const mysetter= (mybool)=>
    {
        setisopen(mybool);
    }
    return(
        <View>
        <ListItem bottomDivider>
      <Avatar rounded 
      source={require("./assets/cryptic.jpeg")}
      //{{uri: item.avatar_url}} 
      
      />
      <ListItem.Content>
        <ListItem.Title><Pressable onPress={()=>mysetter(true)}><Text style={{fontSize:17,
            color: "black",
            fontWeight : "bold",
        }}>{item.name}</Text></Pressable></ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    
    
    { isopen &&
        <StreamDescriptionOverlay stream={item.stream} open={true} isFollowed={true} onButtonPress={()=>{return}} onBackdrop={()=>mysetter(false)}/>
     
       }
       </View>
    )    
}
const ExploreStreamsScreen=({navigation})=> {
    
    
    const mystream1: IStream = {
        pk: 101,
        title: "CALCULUS",
        description: "Wanna do some CALCULUSion? Subscribe to do some.",
        followed_by: 1001,
        
    }
    const mystream2: IStream = {
    pk: 102,
    title: "GEOMETRY",
    description: "For all geometers!.",
    followed_by: 1001,
}
const list = [
    {
      name: 'CALCULUS',
      avatar_url: './assets/icon.png',
      subtitle: 'Mathematics',
      stream : mystream1,
    },
    {
      name: 'GEOMETRY',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Mathematics' ,
      stream : mystream2 ,
    },
  ];
  
  const keyExtractor = (item, index) => index.toString()
  
  const renderItem = ({ item }) => {
    

    return(
    <View>
        <Myitem item={item} />
   </View>
  )
  }
  return(
    <View>
    
       {
       // <ProfileHeader titleText="Explore Streams"/>
       }
        
        <FlatList
  keyExtractor={keyExtractor}
  data={list}
  renderItem={renderItem}
/>
    </View>
)
}



export default ExploreStreamsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 150,
  },
});
