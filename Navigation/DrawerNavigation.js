import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import HomeScreen from "../Screen/HomeScreen";
import ProfileScreen from "../Screen/ProfileScreen";

const Draw=createDrawerNavigator();

export default function DrawerNavigation(){
    return(

        <Draw.Navigator>
            <Draw.Screen name="Home" component={HomeScreen}/>
            <Draw.Screen name="Profile" component={ProfileScreen}/>
        </Draw.Navigator>

    )
    }

   